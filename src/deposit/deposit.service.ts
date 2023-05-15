import { Injectable } from '@nestjs/common';
import { CreateDepositDto } from './dto/create-deposit.dto';
import { UpdateDepositDto } from './dto/update-deposit.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Deposit } from './entities/deposit.entity';

@Injectable()
export class DepositService {
  constructor(
    @InjectRepository(Deposit)
    private depositsRepository: Repository<Deposit>,
  ) {}
  async create(createDepositDto: CreateDepositDto) {
    return await this.depositsRepository.save(createDepositDto);
  }

  async findAll() {
    return await this.depositsRepository.find();
  }

  async findOne(id: string) {
    return await this.depositsRepository.findOne({
      where: { id: id },
    });
  }

  async update(id: string, updateDepositDto: UpdateDepositDto) {
    return await this.depositsRepository.update(id, updateDepositDto);
  }

  async remove(id: string) {
    return await this.depositsRepository.delete(id);
  }
}
