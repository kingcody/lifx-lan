import { Buffer } from 'buffer';
import get from 'lodash-es/get';
import set from 'lodash-es/set';

import { PayloadType } from './';

export class UInt16LEPayload implements PayloadType {
  public size = 2;

  constructor(
    public key: string
  ) {}

  public toObject(buf: Buffer): any {
    return set({}, this.key, buf.readUInt16LE(this.size));
  }

  public toBuffer(obj: any): Buffer {
    const buf = new Buffer(this.size);
    buf.fill(0);

    buf.writeUInt16LE(get(obj, this.key), 0);

    return buf;
  }
};
