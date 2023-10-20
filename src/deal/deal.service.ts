import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Deal } from './entities/deal.entity';

@Injectable()
export class DealService {
  constructor(
    @InjectRepository(Deal)
    private dealRepository: Repository<Deal>,
  ) {}

  async seedData() {
    const dataToSeed = [
      {
        title: "Al Yaqoub Tower",
        price: 6500000,
        ticket: 60000,
        yield: 9,
        daysLeft: 150,
        sold: 75,
        imageURL: "https://i.ibb.co/fHTJ6Tj/Component-38-1.jpg",
      },
      {
        title: "Ocean peaks",
        price: 7500000,
        ticket: 60000,
        yield: 9,
        daysLeft: 150,
        sold: 75,
        imageURL: "https://i.ibb.co/tzzSXjj/Component-37-1.jpg",
      },
      {
        title: "HHHR Tower",
        price: 6500000,
        ticket: 60000,
        yield: 9,
        daysLeft: 150,
        sold: 75,
        imageURL: "https://i.ibb.co/mBvHdWz/Component-36-1.jpg",
      },
      {
        title: "The Marina Torch",
        price: 6500000,
        ticket: 60000,
        yield: 9,
        daysLeft: 150,
        sold: 75,
        imageURL: "https://i.ibb.co/8dzjmPm/Component-32-1.jpg",
      },
    ];

    for (const item of dataToSeed) {
      const entity = this.dealRepository.create(item);
      await this.dealRepository.save(entity);
    }
  }

  async findAll(): Promise<Deal[]> {
    return this.dealRepository.find();
  }
  
}
