import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
// the manager

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/contract-address')
  getContractAddress(): string {
    return this.appService.getContractAddress();
  }

  @Get('/total-supply')
  getTotalSupply(): Promise<number> {
    return this.appService.getTotalSupply();
  }

  @Get('allowance/:from/:to')
  async getAllowance(
    @Param('from') from: string,
    @Param('to') to: string,
  ): Promise<number> {
    return await this.appService.getAllowance(from, to);
  }
}
