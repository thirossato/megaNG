import { MemoryBus } from '../memory/memory-bus';
import { M68K } from './m68k';

describe('M68K', () => {
  let bus: MemoryBus;
  let cpu: M68K;

  beforeEach(() => {
    bus = new MemoryBus();
    cpu = new M68K(bus);
  });

  it('should execute NOP', () => {
    bus.write16(0x1000, 0x4e71);

    cpu.programCounter = 0x1000;

    cpu.step();

    expect(cpu.programCounter).toBe(0x1002);
  });
});
