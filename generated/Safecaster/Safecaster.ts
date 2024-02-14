// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class MessageCastAddVerified extends ethereum.Event {
  get params(): MessageCastAddVerified__Params {
    return new MessageCastAddVerified__Params(this);
  }
}

export class MessageCastAddVerified__Params {
  _event: MessageCastAddVerified;

  constructor(event: MessageCastAddVerified) {
    this._event = event;
  }

  get fid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get text(): string {
    return this._event.parameters[1].value.toString();
  }

  get mentions(): Array<BigInt> {
    return this._event.parameters[2].value.toBigIntArray();
  }
}

export class MessageFrameActionBodyVerified extends ethereum.Event {
  get params(): MessageFrameActionBodyVerified__Params {
    return new MessageFrameActionBodyVerified__Params(this);
  }
}

export class MessageFrameActionBodyVerified__Params {
  _event: MessageFrameActionBodyVerified;

  constructor(event: MessageFrameActionBodyVerified) {
    this._event = event;
  }

  get fid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get button_index(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get target_fid(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get target_hash(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get url(): Bytes {
    return this._event.parameters[4].value.toBytes();
  }

  get proposalId(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get isAccept(): boolean {
    return this._event.parameters[6].value.toBoolean();
  }

  get acceptVotes(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get rejectVotes(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }
}

export class MessageReactionAddVerified extends ethereum.Event {
  get params(): MessageReactionAddVerified__Params {
    return new MessageReactionAddVerified__Params(this);
  }
}

export class MessageReactionAddVerified__Params {
  _event: MessageReactionAddVerified;

  constructor(event: MessageReactionAddVerified) {
    this._event = event;
  }

  get fid(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get reaction_type(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get target_fid(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get target_hash(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }
}

export class ProposalCreated extends ethereum.Event {
  get params(): ProposalCreated__Params {
    return new ProposalCreated__Params(this);
  }
}

export class ProposalCreated__Params {
  _event: ProposalCreated;

  constructor(event: ProposalCreated) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get token(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get to(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get threshold(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get minFid(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get terminated(): boolean {
    return this._event.parameters[6].value.toBoolean();
  }

  get creationTime(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class ProposalExecuted extends ethereum.Event {
  get params(): ProposalExecuted__Params {
    return new ProposalExecuted__Params(this);
  }
}

export class ProposalExecuted__Params {
  _event: ProposalExecuted;

  constructor(event: ProposalExecuted) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get token(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get to(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get threshold(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get minFid(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get terminated(): boolean {
    return this._event.parameters[6].value.toBoolean();
  }

  get executionTime(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }
}

export class Safecaster__proposalsResult {
  value0: Address;
  value1: BigInt;
  value2: Address;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: boolean;
  value7: BigInt;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: Address,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: boolean,
    value7: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromBoolean(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    return map;
  }

  getToken(): Address {
    return this.value0;
  }

  getAmount(): BigInt {
    return this.value1;
  }

  getTo(): Address {
    return this.value2;
  }

  getThreshold(): BigInt {
    return this.value3;
  }

  getAcceptVotes(): BigInt {
    return this.value4;
  }

  getRejectVotes(): BigInt {
    return this.value5;
  }

  getTerminated(): boolean {
    return this.value6;
  }

  getMinFid(): BigInt {
    return this.value7;
  }
}

export class Safecaster extends ethereum.SmartContract {
  static bind(address: Address): Safecaster {
    return new Safecaster("Safecaster", address);
  }

  createProposal(
    token: Address,
    amount: BigInt,
    to: Address,
    threshold: BigInt,
    minFid: BigInt
  ): BigInt {
    let result = super.call(
      "createProposal",
      "createProposal(address,uint256,address,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(threshold),
        ethereum.Value.fromUnsignedBigInt(minFid)
      ]
    );

    return result[0].toBigInt();
  }

  try_createProposal(
    token: Address,
    amount: BigInt,
    to: Address,
    threshold: BigInt,
    minFid: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createProposal",
      "createProposal(address,uint256,address,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(token),
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromAddress(to),
        ethereum.Value.fromUnsignedBigInt(threshold),
        ethereum.Value.fromUnsignedBigInt(minFid)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  initialized(): boolean {
    let result = super.call("initialized", "initialized():(bool)", []);

    return result[0].toBoolean();
  }

  try_initialized(): ethereum.CallResult<boolean> {
    let result = super.tryCall("initialized", "initialized():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  lastProposalId(): BigInt {
    let result = super.call("lastProposalId", "lastProposalId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_lastProposalId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastProposalId",
      "lastProposalId():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  proposals(param0: BigInt): Safecaster__proposalsResult {
    let result = super.call(
      "proposals",
      "proposals(uint256):(address,uint256,address,uint256,uint256,uint256,bool,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Safecaster__proposalsResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBoolean(),
      result[7].toBigInt()
    );
  }

  try_proposals(
    param0: BigInt
  ): ethereum.CallResult<Safecaster__proposalsResult> {
    let result = super.tryCall(
      "proposals",
      "proposals(uint256):(address,uint256,address,uint256,uint256,uint256,bool,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Safecaster__proposalsResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBoolean(),
        value[7].toBigInt()
      )
    );
  }

  safe(): Address {
    let result = super.call("safe", "safe():(address)", []);

    return result[0].toAddress();
  }

  try_safe(): ethereum.CallResult<Address> {
    let result = super.tryCall("safe", "safe():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  voted(param0: Bytes, param1: BigInt): boolean {
    let result = super.call("voted", "voted(bytes32,uint256):(bool)", [
      ethereum.Value.fromFixedBytes(param0),
      ethereum.Value.fromUnsignedBigInt(param1)
    ]);

    return result[0].toBoolean();
  }

  try_voted(param0: Bytes, param1: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("voted", "voted(bytes32,uint256):(bool)", [
      ethereum.Value.fromFixedBytes(param0),
      ethereum.Value.fromUnsignedBigInt(param1)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _safe(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateProposalCall extends ethereum.Call {
  get inputs(): CreateProposalCall__Inputs {
    return new CreateProposalCall__Inputs(this);
  }

  get outputs(): CreateProposalCall__Outputs {
    return new CreateProposalCall__Outputs(this);
  }
}

export class CreateProposalCall__Inputs {
  _call: CreateProposalCall;

  constructor(call: CreateProposalCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get threshold(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get minFid(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class CreateProposalCall__Outputs {
  _call: CreateProposalCall;

  constructor(call: CreateProposalCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ExecuteProposalCall extends ethereum.Call {
  get inputs(): ExecuteProposalCall__Inputs {
    return new ExecuteProposalCall__Inputs(this);
  }

  get outputs(): ExecuteProposalCall__Outputs {
    return new ExecuteProposalCall__Outputs(this);
  }
}

export class ExecuteProposalCall__Inputs {
  _call: ExecuteProposalCall;

  constructor(call: ExecuteProposalCall) {
    this._call = call;
  }

  get proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ExecuteProposalCall__Outputs {
  _call: ExecuteProposalCall;

  constructor(call: ExecuteProposalCall) {
    this._call = call;
  }
}

export class InitCall extends ethereum.Call {
  get inputs(): InitCall__Inputs {
    return new InitCall__Inputs(this);
  }

  get outputs(): InitCall__Outputs {
    return new InitCall__Outputs(this);
  }
}

export class InitCall__Inputs {
  _call: InitCall;

  constructor(call: InitCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _safe(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class InitCall__Outputs {
  _call: InitCall;

  constructor(call: InitCall) {
    this._call = call;
  }
}

export class VerifyCastAddMessageCall extends ethereum.Call {
  get inputs(): VerifyCastAddMessageCall__Inputs {
    return new VerifyCastAddMessageCall__Inputs(this);
  }

  get outputs(): VerifyCastAddMessageCall__Outputs {
    return new VerifyCastAddMessageCall__Outputs(this);
  }
}

export class VerifyCastAddMessageCall__Inputs {
  _call: VerifyCastAddMessageCall;

  constructor(call: VerifyCastAddMessageCall) {
    this._call = call;
  }

  get public_key(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get signature_r(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get signature_s(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get message(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class VerifyCastAddMessageCall__Outputs {
  _call: VerifyCastAddMessageCall;

  constructor(call: VerifyCastAddMessageCall) {
    this._call = call;
  }
}

export class VerifyFrameActionBodyMessageCall extends ethereum.Call {
  get inputs(): VerifyFrameActionBodyMessageCall__Inputs {
    return new VerifyFrameActionBodyMessageCall__Inputs(this);
  }

  get outputs(): VerifyFrameActionBodyMessageCall__Outputs {
    return new VerifyFrameActionBodyMessageCall__Outputs(this);
  }
}

export class VerifyFrameActionBodyMessageCall__Inputs {
  _call: VerifyFrameActionBodyMessageCall;

  constructor(call: VerifyFrameActionBodyMessageCall) {
    this._call = call;
  }

  get public_key(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get signature_r(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get signature_s(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get message(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get proposalId(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class VerifyFrameActionBodyMessageCall__Outputs {
  _call: VerifyFrameActionBodyMessageCall;

  constructor(call: VerifyFrameActionBodyMessageCall) {
    this._call = call;
  }
}

export class VerifyReactionAddMessageCall extends ethereum.Call {
  get inputs(): VerifyReactionAddMessageCall__Inputs {
    return new VerifyReactionAddMessageCall__Inputs(this);
  }

  get outputs(): VerifyReactionAddMessageCall__Outputs {
    return new VerifyReactionAddMessageCall__Outputs(this);
  }
}

export class VerifyReactionAddMessageCall__Inputs {
  _call: VerifyReactionAddMessageCall;

  constructor(call: VerifyReactionAddMessageCall) {
    this._call = call;
  }

  get public_key(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get signature_r(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get signature_s(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get message(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class VerifyReactionAddMessageCall__Outputs {
  _call: VerifyReactionAddMessageCall;

  constructor(call: VerifyReactionAddMessageCall) {
    this._call = call;
  }
}
