import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../produto.service';

interface ProdutoLoja{
  precoVenda: number;
}

@Component({
  selector: 'app-produto-consulta',
  templateUrl: './produto-consulta.component.html',
  styleUrls: ['./produto-consulta.component.scss']
})
export class ProdutoConsultaComponent implements OnInit {
  produtos: any[] = [];
  filtro = {
    codigo: '',
    descricao: '',
    custo: '',
    precoVenda: ''
  };

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.getAll().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }

  filtrarProdutos(): void {
    this.produtoService.getAll().subscribe((produtos) => {
      this.produtos = produtos.filter((produto) => {
        const codigoMatches = produto.id.toString().includes(this.filtro.codigo);
        const descricaoMatches =
          produto.descricao.toLowerCase().includes(this.filtro.descricao.toLowerCase()) ||
          produto.produtoloja.some((pl:ProdutoLoja) => pl.precoVenda.toString().includes(this.filtro.precoVenda));
        const custoMatches = produto.custo.toString().includes(this.filtro.custo);
        return codigoMatches && descricaoMatches && custoMatches;
      });
    });
  }

  excluirProduto(id: number): void {
    this.produtoService.delete(id).subscribe(() => {
      this.carregarProdutos();
    });
  }

  editarProduto(id: number): void {
    // navegar para a página de cadastro do produto no modo edição
  }
}