import { MemoryBus } from "../memory/memory-bus";

export class M68K {
  readonly dataRegisters = new Uint32Array(8);
  readonly addressRegisters = new Uint32Array(8);

  programCounter = 0;
  statusRegister = 0;

  constructor(private bus: MemoryBus) {}

  private fetchWord(): number {
    const word = this.bus.read16(this.programCounter);
    this.programCounter += 2;
    return word;
  }

  private executeNop(): void {
    // No Operation
  }

  private execute(opcode: number): void {
    switch (opcode) {
      case 0x4e71:
        this.executeNop();
        break;

      default:
        throw new Error(`Unknown opcode: 0x${opcode.toString(16)}`);
    }
  }

  step(): void {
    const opcode = this.fetchWord();
    this.execute(opcode);
  }
}
