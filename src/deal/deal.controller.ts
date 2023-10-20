import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DealService } from './deal.service';
import { CreateDealDto } from './dto/create-deal.dto';
import { UpdateDealDto } from './dto/update-deal.dto';
import { Deal } from './entities/deal.entity';

@Controller('deals')
export class DealController {
  constructor(private readonly dealService: DealService) {}

  @Get()
  findAll(): Promise<Deal[]> {
    return this.dealService.findAll();
  }

}
