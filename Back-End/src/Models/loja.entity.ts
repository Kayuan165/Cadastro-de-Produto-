import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ProdutoLoja } from '../Models/produto-loja.entity';

@Entity()
export class Loja {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 60 })
  descricao: string;

  @OneToMany(() => ProdutoLoja, (produtoLoja) => produtoLoja.loja)
  produtoLojas: ProdutoLoja[];
}
