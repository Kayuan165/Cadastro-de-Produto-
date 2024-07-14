import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-preco-dialog',
  templateUrl: './preco-dialog.component.html',
  styleUrls: ['./preco-dialog.component.scss']
})
export class PrecoDialogComponent implements OnInit {
  precoForm!: FormGroup;

  constructor(private dialogRef: MatDialogRef<PrecoDialogComponent>) { }

  ngOnInit(): void {
    this.precoForm = new FormGroup({
      precoVenda: new FormControl('', Validators.required),
      precoCusto: new FormControl('', Validators.required)
    });
  }

  salvarPreco(): void {
    if (this.precoForm.valid) {
      this.dialogRef.close(this.precoForm.value);
    } else { }
  }

  fecharDialog(): void {
    this.dialogRef.close();
  }
}