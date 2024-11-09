import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from '../Models/produto.entity';
import { ProdutoService } from '../Service/item.service';
import { ProdutoController } from '../Controllers/Item.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Produto])],
  providers: [ProdutoService],
  controllers: [ProdutoController],
})
export class ProdutoModule {}
