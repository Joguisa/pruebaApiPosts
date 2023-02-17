import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comentario } from '../interfaces/comentarios.interface';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComentariosserviceService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getComentsPorId(id: number): Observable<Comentario> {
    return this.http.get<Comentario>(`${this.baseUrl}/posts/${id}/comments`);
  }

  // getComentsPorIdd(id: number): Observable<any> {
  //   return this.http.get<any>(`${this.baseUrl}/posts/${id}/comments`);
  // }
}
