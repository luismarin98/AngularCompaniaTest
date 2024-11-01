import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompaniaService {

  private apiUrl = 'https://localhost:5000/api/compania'; // spring boot
 //http://localhost:52410/api/compania  // .net       
  constructor(private http: HttpClient) { }

  getCompanias(): Observable<CompaniaModel[]> {
    return this.http.get<CompaniaModel[]>(this.apiUrl);
  }
}

export interface CompaniaModel {
  Id: number;
  Name: string;
  Detalles: string;
  Status: string;
}
