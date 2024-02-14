import { BigInt } from "@graphprotocol/graph-ts"
import {
  MessageFrameActionBodyVerified,
  ProposalCreated,
  ProposalExecuted
} from "../generated/Safecaster/Safecaster"
import { Vote, Proposal} from "../generated/schema"


export function handleMessageFrameActionBodyVerified(
  event: MessageFrameActionBodyVerified
): void { 
 
  let votesCounter = (event.params.acceptVotes).plus(event.params.rejectVotes);
  let vote = Vote.load(event.transaction.hash.toHexString());
  if (!vote) {
    vote = new Vote(event.transaction.hash.toHexString());
    vote!.fid = event.params.fid;
    vote!.votesCounter = votesCounter;
    vote!.proposalID = event.params.proposalId.toString();
    vote!.isAccepted = event.params.isAccept;
    vote!.transactionHash = event.transaction.hash.toString();
   
  }
  
  let proposal = Proposal.load(event.params.proposalId.toString());
  if (proposal!) {
    proposal!.votesCounter = votesCounter;
    proposal!.votes! = proposal!.votes!.concat([event.transaction.hash.toHexString()]);
    proposal!.acceptedVotes = event.params.acceptVotes;
    proposal!.rejectedVotes = event.params.rejectVotes;
  } 
  vote!.save();
  proposal!.save();
}

export function handleProposalCreated(
  event: ProposalCreated 
): void {
  
  let proposal = Proposal.load(event.params.proposalId.toString());
  if (!proposal) {
    proposal = new Proposal(event.params.proposalId.toString());
    proposal!.votesCounter = BigInt.fromI32(0);
    proposal!.acceptedVotes = BigInt.fromI32(0);
    proposal!.rejectedVotes = BigInt.fromI32(0);
    proposal!.minimumFid = event.params.minFid;
    proposal!.treshold = event.params.threshold;
    proposal!.active = true;
    proposal!.token = event.params.token.toHexString();
    proposal!.to = event.params.to.toHexString();
    proposal!.amount = event.params.amount;
    proposal!.creationTime = event.block.timestamp;
    proposal!.votes = [];
    proposal!.save();
  } 
}

  export function handleProposalExecuted(
    event: ProposalExecuted
  ): void {
    let proposal = Proposal.load(event.params.proposalId.toString());
    if (proposal!){
      proposal!.active = false
      proposal!.save();
    }
  }