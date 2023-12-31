// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Lend extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Lend entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Lend must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Lend", id.toString(), this);
    }
  }

  static load(id: string): Lend | null {
    return changetype<Lend | null>(store.get("Lend", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get is721(): boolean {
    let value = this.get("is721");
    return value!.toBoolean();
  }

  set is721(value: boolean) {
    this.set("is721", Value.fromBoolean(value));
  }

  get lenderAddress(): Bytes {
    let value = this.get("lenderAddress");
    return value!.toBytes();
  }

  set lenderAddress(value: Bytes) {
    this.set("lenderAddress", Value.fromBytes(value));
  }

  get nftAddress(): Bytes {
    let value = this.get("nftAddress");
    return value!.toBytes();
  }

  set nftAddress(value: Bytes) {
    this.set("nftAddress", Value.fromBytes(value));
  }

  get tokenID(): BigInt {
    let value = this.get("tokenID");
    return value!.toBigInt();
  }

  set tokenID(value: BigInt) {
    this.set("tokenID", Value.fromBigInt(value));
  }

  get lendingID(): BigInt {
    let value = this.get("lendingID");
    return value!.toBigInt();
  }

  set lendingID(value: BigInt) {
    this.set("lendingID", Value.fromBigInt(value));
  }

  get maxRentDuration(): BigInt {
    let value = this.get("maxRentDuration");
    return value!.toBigInt();
  }

  set maxRentDuration(value: BigInt) {
    this.set("maxRentDuration", Value.fromBigInt(value));
  }

  get dailyRentPrice(): BigInt {
    let value = this.get("dailyRentPrice");
    return value!.toBigInt();
  }

  set dailyRentPrice(value: BigInt) {
    this.set("dailyRentPrice", Value.fromBigInt(value));
  }

  get lendAmount(): BigInt {
    let value = this.get("lendAmount");
    return value!.toBigInt();
  }

  set lendAmount(value: BigInt) {
    this.set("lendAmount", Value.fromBigInt(value));
  }

  get paymentToken(): BigInt {
    let value = this.get("paymentToken");
    return value!.toBigInt();
  }

  set paymentToken(value: BigInt) {
    this.set("paymentToken", Value.fromBigInt(value));
  }

  get willAutoRenew(): boolean {
    let value = this.get("willAutoRenew");
    return value!.toBoolean();
  }

  set willAutoRenew(value: boolean) {
    this.set("willAutoRenew", Value.fromBoolean(value));
  }
}

export class Rent extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Rent entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Rent must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Rent", id.toString(), this);
    }
  }

  static load(id: string): Rent | null {
    return changetype<Rent | null>(store.get("Rent", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get renterAddress(): Bytes {
    let value = this.get("renterAddress");
    return value!.toBytes();
  }

  set renterAddress(value: Bytes) {
    this.set("renterAddress", Value.fromBytes(value));
  }

  get lendingID(): BigInt {
    let value = this.get("lendingID");
    return value!.toBigInt();
  }

  set lendingID(value: BigInt) {
    this.set("lendingID", Value.fromBigInt(value));
  }

  get rentingID(): BigInt {
    let value = this.get("rentingID");
    return value!.toBigInt();
  }

  set rentingID(value: BigInt) {
    this.set("rentingID", Value.fromBigInt(value));
  }

  get rentAmount(): BigInt {
    let value = this.get("rentAmount");
    return value!.toBigInt();
  }

  set rentAmount(value: BigInt) {
    this.set("rentAmount", Value.fromBigInt(value));
  }

  get rentDuration(): BigInt {
    let value = this.get("rentDuration");
    return value!.toBigInt();
  }

  set rentDuration(value: BigInt) {
    this.set("rentDuration", Value.fromBigInt(value));
  }

  get rentedAt(): BigInt {
    let value = this.get("rentedAt");
    return value!.toBigInt();
  }

  set rentedAt(value: BigInt) {
    this.set("rentedAt", Value.fromBigInt(value));
  }
}
