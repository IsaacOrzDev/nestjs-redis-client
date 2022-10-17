import { Injectable } from '@nestjs/common';
import { ProxyService } from 'src/proxy/proxy.service';

@Injectable()
export class MathService {
  constructor(private proxyService: ProxyService) {}

  public accumulate(data: number[]) {
    const pattern = { cmd: 'sum' };
    return this.proxyService.client.send<number>(pattern, data);
  }
}
