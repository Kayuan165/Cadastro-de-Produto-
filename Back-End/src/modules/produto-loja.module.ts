import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoLoja } from '../Models/produto-loja.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProdutoLoja])],
})
export class ProdutoLojaModule {}
