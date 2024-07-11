import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Produto } from '../Models/produto.entity';
import { Loja } from '../Models/loja.entity';

@Entity()
export class ProdutoLoja {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Produto, (produto) => produto.produtoLojas)
  produto: Produto;

  @ManyToOne(() => Loja, (loja) => loja.produtoLojas)
  loja: Loja;

  @Column('numeric', { precision: 13, scale: 3 })
  precoVenda: number;
}
