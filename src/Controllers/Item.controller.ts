import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProdutoService } from '../Service/item.service';
import { Produto } from '../Models/produto.entity';
import { CreateProdutoDto } from 'src/modules/create-produto.dto';

@Controller()
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) { }

  @Get()
  findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Produto> {
    return this.produtoService.findOne(id);
  }

  @Post('cadastro')
  create(@Body() createProdutoDto: CreateProdutoDto): Promise<Produto> {
    const produto = new Produto();
    produto.descricao = createProdutoDto.descricao;
    produto.custo = createProdutoDto.custo;
    produto.imagem = createProdutoDto.imagem;
    return this.produtoService.create(produto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() produto: Produto): Promise<void> {
    return this.produtoService.update(id, produto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.produtoService.remove(id);
  }
}
