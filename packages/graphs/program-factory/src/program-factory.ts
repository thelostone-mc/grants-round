import { BigInt } from "@graphprotocol/graph-ts";

import { 
  ProgramCreated as ProgramCreatedEvent
} from "../generated/ProgramFactory/ProgramFactory";

import {
  ProgramList,
  Program 
} from "../generated/schema";


export function handleProgramCreated(event: ProgramCreatedEvent): void {
  let  program = Program.load(event.address)
}
