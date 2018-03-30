import { Buffer } from 'buffer';

export interface PayloadType {
  key: string;
  size: number;
  toBuffer(obj: any): Buffer;
  toObject(buf: Buffer): any;
};
