import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoModule } from './modules/produto.module';
import { LojaModule } from './modules/loja.module';
import { Produto } from './Models/produto.entity'; 
import { Loja } from './Models/loja.entity'; 
import { ProdutoLoja } from './Models/produto-loja.entity'; 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'Produtos',
      entities: [Produto, Loja, ProdutoLoja],
      synchronize: true,
    }),
    ProdutoModule,
    LojaModule,
  ],
})
export class AppModule {}
