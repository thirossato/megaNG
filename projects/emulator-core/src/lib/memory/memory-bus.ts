export class MemoryBus {
  private memory = new Uint8Array(0x1000000);

  read8(address: number): number {
    return this.memory[address];
  }

  write8(address: number, value: number): void {
    this.memory[address] = value;
  }

  read16(address: number): number {
     const high = this.read8(address);
     const low = this.read8(address + 1);

     return (high << 8) | low;
  }

  write16(address: number, value: number): void {
    const high = (value >>> 8) & 0xff;
    const low = value & 0xff;

    this.write8(address, high);
    this.write8(address + 1, low);
  }

  read32(address: number): number {
    const high = this.read16(address);
    const low = this.read16(address + 2);

    return (high << 16) | low;
  }

  write32(address: number, value: number): void {
     const high = (value >>> 16) & 0xffff;
     const low = value & 0xffff;

     this.write16(address, high);
     this.write16(address + 2, low);
  }
}
