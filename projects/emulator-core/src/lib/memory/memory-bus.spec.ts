import { MemoryBus } from './memory-bus';

describe('MemoryBus', () => {
  let bus: MemoryBus;

  beforeEach(() => {
    bus = new MemoryBus();
  })


  it('should write and read 8 bits', () => {
    bus.write8(0x1000, 0x12);

    expect(bus.read8(0x1000)).toBe(0x12);
  });

  it('should write and read 16 bits', () => {
    bus.write16(0x1000, 0x1234);

    expect(bus.read8(0x1000)).toBe(0x12);
    expect(bus.read8(0x1001)).toBe(0x34);

    expect(bus.read16(0x1000)).toBe(0x1234);
  });

  it('should write and read 32 bits', () => {
    bus.write32(0x1000, 0x12345678);

    expect(bus.read8(0x1000)).toBe(0x12);
    expect(bus.read8(0x1001)).toBe(0x34);
    expect(bus.read8(0x1002)).toBe(0x56);
    expect(bus.read8(0x1003)).toBe(0x78);

    expect(bus.read16(0x1000)).toBe(0x1234);
    expect(bus.read16(0x1002)).toBe(0x5678);

    expect(bus.read32(0x1000)).toBe(0x12345678);
  })
})
