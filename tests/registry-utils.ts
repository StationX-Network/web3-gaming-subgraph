import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Lend,
  Rent,
  RentClaimed,
  StopLend,
  StopRent
} from "../generated/Registry/Registry"

export function createLendEvent(
  is721: boolean,
  lenderAddress: Address,
  nftAddress: Address,
  tokenID: BigInt,
  lendingID: BigInt,
  maxRentDuration: i32,
  dailyRentPrice: Bytes,
  lendAmount: i32,
  paymentToken: i32,
  willAutoRenew: boolean
): Lend {
  let lendEvent = changetype<Lend>(newMockEvent())

  lendEvent.parameters = new Array()

  lendEvent.parameters.push(
    new ethereum.EventParam("is721", ethereum.Value.fromBoolean(is721))
  )
  lendEvent.parameters.push(
    new ethereum.EventParam(
      "lenderAddress",
      ethereum.Value.fromAddress(lenderAddress)
    )
  )
  lendEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  lendEvent.parameters.push(
    new ethereum.EventParam(
      "tokenID",
      ethereum.Value.fromUnsignedBigInt(tokenID)
    )
  )
  lendEvent.parameters.push(
    new ethereum.EventParam(
      "lendingID",
      ethereum.Value.fromUnsignedBigInt(lendingID)
    )
  )
  lendEvent.parameters.push(
    new ethereum.EventParam(
      "maxRentDuration",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(maxRentDuration))
    )
  )
  lendEvent.parameters.push(
    new ethereum.EventParam(
      "dailyRentPrice",
      ethereum.Value.fromFixedBytes(dailyRentPrice)
    )
  )
  lendEvent.parameters.push(
    new ethereum.EventParam(
      "lendAmount",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(lendAmount))
    )
  )
  lendEvent.parameters.push(
    new ethereum.EventParam(
      "paymentToken",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(paymentToken))
    )
  )
  lendEvent.parameters.push(
    new ethereum.EventParam(
      "willAutoRenew",
      ethereum.Value.fromBoolean(willAutoRenew)
    )
  )

  return lendEvent
}

export function createRentEvent(
  renterAddress: Address,
  lendingID: BigInt,
  rentingID: BigInt,
  rentAmount: i32,
  rentDuration: i32,
  rentedAt: BigInt
): Rent {
  let rentEvent = changetype<Rent>(newMockEvent())

  rentEvent.parameters = new Array()

  rentEvent.parameters.push(
    new ethereum.EventParam(
      "renterAddress",
      ethereum.Value.fromAddress(renterAddress)
    )
  )
  rentEvent.parameters.push(
    new ethereum.EventParam(
      "lendingID",
      ethereum.Value.fromUnsignedBigInt(lendingID)
    )
  )
  rentEvent.parameters.push(
    new ethereum.EventParam(
      "rentingID",
      ethereum.Value.fromUnsignedBigInt(rentingID)
    )
  )
  rentEvent.parameters.push(
    new ethereum.EventParam(
      "rentAmount",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(rentAmount))
    )
  )
  rentEvent.parameters.push(
    new ethereum.EventParam(
      "rentDuration",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(rentDuration))
    )
  )
  rentEvent.parameters.push(
    new ethereum.EventParam(
      "rentedAt",
      ethereum.Value.fromUnsignedBigInt(rentedAt)
    )
  )

  return rentEvent
}

export function createRentClaimedEvent(
  rentingID: BigInt,
  collectedAt: BigInt
): RentClaimed {
  let rentClaimedEvent = changetype<RentClaimed>(newMockEvent())

  rentClaimedEvent.parameters = new Array()

  rentClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "rentingID",
      ethereum.Value.fromUnsignedBigInt(rentingID)
    )
  )
  rentClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "collectedAt",
      ethereum.Value.fromUnsignedBigInt(collectedAt)
    )
  )

  return rentClaimedEvent
}

export function createStopLendEvent(
  lendingID: BigInt,
  stoppedAt: BigInt,
  amount: i32
): StopLend {
  let stopLendEvent = changetype<StopLend>(newMockEvent())

  stopLendEvent.parameters = new Array()

  stopLendEvent.parameters.push(
    new ethereum.EventParam(
      "lendingID",
      ethereum.Value.fromUnsignedBigInt(lendingID)
    )
  )
  stopLendEvent.parameters.push(
    new ethereum.EventParam(
      "stoppedAt",
      ethereum.Value.fromUnsignedBigInt(stoppedAt)
    )
  )
  stopLendEvent.parameters.push(
    new ethereum.EventParam(
      "amount",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(amount))
    )
  )

  return stopLendEvent
}

export function createStopRentEvent(
  rentingID: BigInt,
  stoppedAt: BigInt
): StopRent {
  let stopRentEvent = changetype<StopRent>(newMockEvent())

  stopRentEvent.parameters = new Array()

  stopRentEvent.parameters.push(
    new ethereum.EventParam(
      "rentingID",
      ethereum.Value.fromUnsignedBigInt(rentingID)
    )
  )
  stopRentEvent.parameters.push(
    new ethereum.EventParam(
      "stoppedAt",
      ethereum.Value.fromUnsignedBigInt(stoppedAt)
    )
  )

  return stopRentEvent
}
