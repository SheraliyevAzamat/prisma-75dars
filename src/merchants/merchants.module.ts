import { Module } from '@nestjs/common';
import { MerchantsService } from './merchants.service';
import { MerchantsController } from './merchants.controller';

@Module({
  imports: [],
  controllers: [MerchantsController],
  providers: [MerchantsService],
})
export class MerchantsModule {}
