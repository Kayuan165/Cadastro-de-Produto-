import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../produto.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-produto-cadastro',
  standalone: true,
  imports:[
  ],
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.scss']
})
export class ProdutoCadastroComponent implements OnInit {
  produtoForm!: FormGroup;
  precoDialogOpen = false;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoForm = new FormGroup({
      codigo: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
      custo: new FormControl(''),
      imagem: new FormControl('')
    });
  }

  salvarProduto(): void {
    if (this.produtoForm.valid) {
      this.produtoService.post(this.produtoForm.value).subscribe(() => {
      });
    }
  }

  abrirDialogPreco(): void {
    this.precoDialogOpen = true;
  }

  fecharDialogPreco(): void {
    this.precoDialogOpen = false;
  }
}
