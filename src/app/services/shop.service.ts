import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urls } from '../../environments/environment';
import { ShopDto } from '../models/dtos/ShopDto';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private url = urls.shopUrl;  // URL to web api

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  addShop(id: number, name: string): any{
    return this.http.post(this.url, new ShopDto({userId: id, name}));
  }
}
