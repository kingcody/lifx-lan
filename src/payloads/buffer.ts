import { Buffer } from 'buffer';
import get from 'lodash-es/get';
import set from 'lodash-es/set';

import { PayloadType } from './';

export class BufferPayload implements PayloadType {
  constructor(
    public key: string,
    public size: number,
    public encoding = 'utf8'
  ) {}

  public toObject(buf: Buffer): any {
    return set(
      {},
      this.key,
      buf.slice(0, this.size)
    );
  }

  public toBuffer(obj: any): Buffer {
    const buf = new Buffer(this.size);
    buf.fill(0);

    buf.write(get(obj, this.key), 0, this.size, this.encoding);

    return buf;
  }
};
