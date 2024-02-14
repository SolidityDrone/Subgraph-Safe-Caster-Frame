import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
import {
  MessageCastAddVerified,
  MessageFrameActionBodyVerified,
  MessageReactionAddVerified,
  ProposalCreated
} from "../generated/Safecaster/Safecaster"

export function createMessageCastAddVerifiedEvent(
  fid: BigInt,
  text: string,
  mentions: Array<BigInt>
): MessageCastAddVerified {
  let messageCastAddVerifiedEvent = changetype<MessageCastAddVerified>(
    newMockEvent()
  )

  messageCastAddVerifiedEvent.parameters = new Array()

  messageCastAddVerifiedEvent.parameters.push(
    new ethereum.EventParam("fid", ethereum.Value.fromUnsignedBigInt(fid))
  )
  messageCastAddVerifiedEvent.parameters.push(
    new ethereum.EventParam("text", ethereum.Value.fromString(text))
  )
  messageCastAddVerifiedEvent.parameters.push(
    new ethereum.EventParam(
      "mentions",
      ethereum.Value.fromUnsignedBigIntArray(mentions)
    )
  )

  return messageCastAddVerifiedEvent
}

export function createMessageFrameActionBodyVerifiedEvent(
  fid: BigInt,
  button_index: BigInt,
  target_fid: BigInt,
  target_hash: Bytes,
  url: Bytes,
  isAccept: boolean,
  acceptVotes: BigInt,
  rejectVotes: BigInt
): MessageFrameActionBodyVerified {
  let messageFrameActionBodyVerifiedEvent =
    changetype<MessageFrameActionBodyVerified>(newMockEvent())

  messageFrameActionBodyVerifiedEvent.parameters = new Array()

  messageFrameActionBodyVerifiedEvent.parameters.push(
    new ethereum.EventParam("fid", ethereum.Value.fromUnsignedBigInt(fid))
  )
  messageFrameActionBodyVerifiedEvent.parameters.push(
    new ethereum.EventParam(
      "button_index",
      ethereum.Value.fromUnsignedBigInt(button_index)
    )
  )
  messageFrameActionBodyVerifiedEvent.parameters.push(
    new ethereum.EventParam(
      "target_fid",
      ethereum.Value.fromUnsignedBigInt(target_fid)
    )
  )
  messageFrameActionBodyVerifiedEvent.parameters.push(
    new ethereum.EventParam(
      "target_hash",
      ethereum.Value.fromBytes(target_hash)
    )
  )
  messageFrameActionBodyVerifiedEvent.parameters.push(
    new ethereum.EventParam("url", ethereum.Value.fromBytes(url))
  )
  messageFrameActionBodyVerifiedEvent.parameters.push(
    new ethereum.EventParam("isAccept", ethereum.Value.fromBoolean(isAccept))
  )
  messageFrameActionBodyVerifiedEvent.parameters.push(
    new ethereum.EventParam(
      "acceptVotes",
      ethereum.Value.fromUnsignedBigInt(acceptVotes)
    )
  )
  messageFrameActionBodyVerifiedEvent.parameters.push(
    new ethereum.EventParam(
      "rejectVotes",
      ethereum.Value.fromUnsignedBigInt(rejectVotes)
    )
  )

  return messageFrameActionBodyVerifiedEvent
}

export function createMessageReactionAddVerifiedEvent(
  fid: BigInt,
  reaction_type: i32,
  target_fid: BigInt,
  target_hash: Bytes
): MessageReactionAddVerified {
  let messageReactionAddVerifiedEvent = changetype<MessageReactionAddVerified>(
    newMockEvent()
  )

  messageReactionAddVerifiedEvent.parameters = new Array()

  messageReactionAddVerifiedEvent.parameters.push(
    new ethereum.EventParam("fid", ethereum.Value.fromUnsignedBigInt(fid))
  )
  messageReactionAddVerifiedEvent.parameters.push(
    new ethereum.EventParam(
      "reaction_type",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(reaction_type))
    )
  )
  messageReactionAddVerifiedEvent.parameters.push(
    new ethereum.EventParam(
      "target_fid",
      ethereum.Value.fromUnsignedBigInt(target_fid)
    )
  )
  messageReactionAddVerifiedEvent.parameters.push(
    new ethereum.EventParam(
      "target_hash",
      ethereum.Value.fromBytes(target_hash)
    )
  )

  return messageReactionAddVerifiedEvent
}

export function createProposalCreatedEvent(
  proposalId: BigInt,
  token: Address,
  amount: BigInt,
  to: Address,
  threshold: BigInt
): ProposalCreated {
  let proposalCreatedEvent = changetype<ProposalCreated>(newMockEvent())

  proposalCreatedEvent.parameters = new Array()

  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "threshold",
      ethereum.Value.fromUnsignedBigInt(threshold)
    )
  )

  return proposalCreatedEvent
}
