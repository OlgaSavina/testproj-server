import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { DealService } from './deal.service';
import { DealController } from './deal.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deal } from './entities/deal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Deal])],
  controllers: [DealController],
  providers: [DealService],
})
export class DealModule implements OnApplicationBootstrap {
    constructor(private readonly dealService: DealService) {}
  
    async onApplicationBootstrap() {
      await this.dealService.seedData();
    }
  }
