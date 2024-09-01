import {BN} from "fuels";
import {AmmFees, PoolId} from "./model";
import {InsufficientReservesError} from "./errors";

const BASIS_POINTS = 10000;
const ONE_E_18 = new BN(10).pow(new BN(18));

function adjust(amount: BN, powDecimals: BN): BN {
  return amount.mul(ONE_E_18).div(powDecimals);
}

export function getAmountOut(
  isStable: boolean,
  reserveIn: BN,
  reserveOut: BN,
  powDecimalsIn: BN,
  powDecimalsOut: BN,
  inputAmount: BN
): BN {
  if (inputAmount.gt(reserveIn)) {
    throw new InsufficientReservesError();
  }
  if (isStable) {
    const xy: BN = k(true, reserveIn, reserveOut, powDecimalsIn, powDecimalsOut);

    const amountInAdjusted = adjust(inputAmount, powDecimalsIn);
    const reserveInAdjusted = adjust(reserveIn, powDecimalsIn);
    const reserveOutAdjusted = adjust(reserveOut, powDecimalsOut);

    const y = reserveOutAdjusted.sub(getY(
      amountInAdjusted.add(reserveInAdjusted),
      xy,
      reserveOutAdjusted
    ));

    return y.mul(powDecimalsOut).div(ONE_E_18);
  } else {
    return inputAmount.mul(reserveOut).div((reserveIn.add(inputAmount)));
  }
}

export function getAmountIn(
  isStable: boolean,
  reserveIn: BN,
  reserveOut: BN,
  powDecimalsIn: BN,
  powDecimalsOut: BN,
  outputAmount: BN
): BN {
  if (outputAmount.gt(reserveOut)) {
    throw new InsufficientReservesError();
  }
  if (isStable) {
    const xy: BN = k(true, reserveIn, reserveOut, powDecimalsIn, powDecimalsOut);

    const amountOutAdjusted = adjust(outputAmount, powDecimalsIn);
    const reserveInAdjusted = adjust(reserveIn, powDecimalsIn);
    const reserveOutAdjusted = adjust(reserveOut, powDecimalsOut);

    const y = getY(
      reserveOutAdjusted.sub(amountOutAdjusted),
      xy,
      reserveInAdjusted
    ).sub(reserveInAdjusted);

    return y.mul(powDecimalsIn).div(ONE_E_18);
  } else {
    return outputAmount.mul(reserveIn).div(reserveOut.sub(outputAmount)).add(new BN(1));
  }
}

export function powDecimals(decimals: number): BN {
  return new BN(10).pow(new BN(decimals));
}

function k(
  isStable: boolean,
  x: BN,
  y: BN,
  powDecimalsX: BN,
  powDecimalsY: BN
): BN {
  if (isStable) {
    const _x: BN = x.mul(ONE_E_18).div(powDecimalsX);
    const _y: BN = y.mul(ONE_E_18).div(powDecimalsY);
    const _a: BN = _x.mul(_y).div(ONE_E_18);
    const _b: BN = _x.mul(_x).div(ONE_E_18).add(_y.mul(_y).div(ONE_E_18));
    return _a.mul(_b).div(ONE_E_18); // x3y+y3x >= k
  } else {
    return x.mul(y); // xy >= k
  }
}

function f(x0: BN, y: BN): BN {
  return x0.mul(y.mul(y).div(ONE_E_18).mul(y).div(ONE_E_18)).div(ONE_E_18)
    .add(x0.mul(x0).div(ONE_E_18).mul(x0).div(ONE_E_18).mul(y).div(ONE_E_18));
}

function d(x0: BN, y: BN): BN {
  return new BN(3).mul(x0).mul(y.mul(y).div(ONE_E_18)).div(ONE_E_18)
    .add(x0.mul(x0).div(ONE_E_18).mul(x0).div(ONE_E_18));
}

function getY(x0: BN, xy: BN, y: BN): BN {
  let i = 0;
  let yPrev: BN;
  let kValue: BN;
  let dy: BN;

  while (i < 255) {
    yPrev = y;
    kValue = f(x0, y);

    if (kValue.lt(xy)) {
      dy = xy.sub(kValue).mul(ONE_E_18).div(d(x0, y));
      y = y.add(dy);
    } else {
      dy = kValue.sub(xy).mul(ONE_E_18).div(d(x0, y));
      y = y.sub(dy);
    }

    if (y.gt(yPrev)) {
      if (y.sub(yPrev).lte(new BN(1))) {
        return y;
      }
    } else {
      if (yPrev.sub(y).lte(new BN(1))) {
        return y;
      }
    }

    i++;
  }

  return y;
}


export function subtractFee(poolId: PoolId, amount: BN, ammFees: AmmFees): BN {
  const feeBP = poolId[2] ?
    ammFees.lpFeeStable.add(ammFees.protocolFeeStable) :
    ammFees.lpFeeVolatile.add(ammFees.protocolFeeVolatile);
  const fee = calculateFeeToSubtract(amount, feeBP);
  return amount.sub(fee);
}

export function addFee(poolId: PoolId, amount: BN, ammFees: AmmFees): BN {
  const feeBP = poolId[2] ?
    ammFees.lpFeeStable.add(ammFees.protocolFeeStable) :
    ammFees.lpFeeVolatile.add(ammFees.protocolFeeVolatile);
  const fee = calculateFeeToAdd(amount, feeBP);
  return amount.add(fee);
}

function calculateFeeToSubtract(amount: BN, fee: BN): BN {
  const nominator = amount.mul(fee);
  let calculatedFee = nominator.div(BASIS_POINTS);

  if (!nominator.mod(BASIS_POINTS).isZero()) {
    calculatedFee = calculatedFee.add(new BN(1));
  }

  return calculatedFee;
}

function calculateFeeToAdd(amount: BN, fee: BN): BN {
  const nominator = amount.mul(fee);
  const denominator = new BN(BASIS_POINTS).sub(fee);
  let calculatedFee = nominator.div(denominator);

  // If there is a remainder, we add 1 to the fee to round up
  if (!nominator.mod(denominator).isZero()) {
    calculatedFee = calculatedFee.add(new BN(1));
  }

  return calculatedFee;
}