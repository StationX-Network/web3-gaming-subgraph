import { BigInt } from "@graphprotocol/graph-ts"
import {
  Registry,
  Lend,
  Rent,
  RentClaimed,
  StopLend,
  StopRent
} from "../generated/Registry/Registry"
import { ExampleEntity } from "../generated/schema"

export function handleLend(event: Lend): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.is721 = event.params.is721
  entity.lenderAddress = event.params.lenderAddress

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.getLending(...)
  // - contract.getRenting(...)
  // - contract.onERC1155BatchReceived(...)
  // - contract.onERC1155Received(...)
  // - contract.onERC721Received(...)
  // - contract.paused(...)
  // - contract.rentFee(...)
  // - contract.supportsInterface(...)
}

export function handleRent(event: Rent): void {}

export function handleRentClaimed(event: RentClaimed): void {}

export function handleStopLend(event: StopLend): void {}

export function handleStopRent(event: StopRent): void {}
