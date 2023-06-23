import { BigInt } from "@graphprotocol/graph-ts"

import {
  Lend as LendEvent,
  Rent as RentEvent,
} from "../generated/Registry/Registry"
import { Lend, Rent } from "../generated/schema"

export function handleLend(event: LendEvent): void {
  let id =
    event.params.nftAddress.toHex() + "-" + event.params.tokenID.toString()
  let lend = Lend.load(id)

  if (!lend) {
    let lend = new Lend(id)
    lend.nftAddress = event.params.nftAddress
    lend.tokenID = event.params.tokenID
    lend.is721 = event.params.is721
    lend.lenderAddress = event.params.lenderAddress
    lend.lendingID = event.params.lendingID
    lend.maxRentDuration = BigInt.fromI32(event.params.maxRentDuration)
    lend.dailyRentPrice = BigInt.fromI32(event.params.dailyRentPrice.toI32())
    lend.lendAmount = BigInt.fromI32(event.params.lendAmount)
    lend.paymentToken = BigInt.fromI32(event.params.paymentToken)
    lend.willAutoRenew = event.params.willAutoRenew
    lend.save()
  } else {
    lend.is721 = event.params.is721
    lend.lenderAddress = event.params.lenderAddress
    lend.lendingID = event.params.lendingID
    lend.maxRentDuration = BigInt.fromI32(event.params.maxRentDuration)
    lend.dailyRentPrice = BigInt.fromI32(event.params.dailyRentPrice.toI32())
    lend.lendAmount = BigInt.fromI32(event.params.lendAmount)
    lend.paymentToken = BigInt.fromI32(event.params.paymentToken)
    lend.willAutoRenew = event.params.willAutoRenew
    lend.save()
  }
}

export function handleRent(event: RentEvent): void {
  let id = event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  let rent = new Rent(id)
  rent.renterAddress = event.params.renterAddress
  rent.lendingID = event.params.lendingID
  rent.rentingID = event.params.rentingID
  rent.rentAmount = BigInt.fromI32(event.params.rentAmount)
  rent.rentDuration = BigInt.fromI32(event.params.rentDuration)
  rent.rentedAt = event.params.rentedAt
  rent.save()
}
