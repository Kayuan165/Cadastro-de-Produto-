import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PrecoDialogComponent } from './Components/preco-dialog/preco-dialog.component';
import { ProdutoRoutes } from './app.routes';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports:[RouterOutlet]
})
export class ProdutoComponent implements OnInit {
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  abrirDialogPreco(): void {
    const dialogRef = this.dialog.open(PrecoDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe((preco) => {
      if (preco) {
        // fazer algo com os valores do formulário
        console.log(preco);
      }
    });
  }
}
