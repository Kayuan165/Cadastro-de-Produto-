import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Loja } from '../Models/loja.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Loja])],
})
export class LojaModule {}
