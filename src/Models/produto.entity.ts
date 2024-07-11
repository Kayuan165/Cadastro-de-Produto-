import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ProdutoLoja } from '../Models/produto-loja.entity';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 60 })
  descricao: string;

  @Column('numeric', { precision: 13, scale: 3 })
  custo: number;

  @Column('bytea')
  imagem: string;

  @OneToMany(() => ProdutoLoja, (produtoLoja) => produtoLoja.produto)
  produtoLojas: ProdutoLoja[];
}
