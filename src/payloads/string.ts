import { Buffer } from 'buffer';
import get from 'lodash-es/get';
import set from 'lodash-es/set';

import { PayloadType } from './';

export class StringPayload implements PayloadType {
  constructor(
    public key: string,
    public size: number
  ) {}

  public toObject(buf: Buffer): any {
    return set(
      {},
      this.key,
      buf.toString('utf8', 0, this.size).replace(/\0/g, '')
    );
  }

  public toBuffer(obj: any): Buffer {
    const buf = new Buffer(this.size);
    buf.fill(0);

    buf.write(get(obj, this.key), 0, this.size, 'utf8');

    return buf;
  }
};
