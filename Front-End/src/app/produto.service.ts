import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl = 'http://localhost:8080/produto';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/produto`);
  }

  get(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/produto/${id}`);
  }

  post(produto: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/cadastro`, produto);
  }

  put(id: number, produto: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/produto/${id}`, produto);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/produto/${id}`);
  }

}