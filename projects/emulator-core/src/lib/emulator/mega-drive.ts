export class MegaDrive {
  running = false;

  loadRom(rom: Uint8Array): void {
    // ToDo: send rom to catridge
  }

  start(): void {
    this.running = true;
  }

  stop(): void {
    this.running = false;
  }

  step(): void {
    // ToDo: run cycles
  }
}
