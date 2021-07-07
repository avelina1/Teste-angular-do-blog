import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Autorization', environment.token)
  }
  refreshToken(){
    this.token ={
      headers: new HttpHeaders().set('Autorization', environment.token),
    }
  }
  getAllPostagens(): Observable<Postagem[]>{
    return this.http.get<Postagem[]>('https://blogavelina.herokuapp.com/postagens', this.token)
  }
  postPostagem(postagem: Postagem): Observable<Postagem>{
    return this.http.post<Postagem>('https://blogavelina.herokuapp.com/postagens', postagem, this.token)
  }
}
