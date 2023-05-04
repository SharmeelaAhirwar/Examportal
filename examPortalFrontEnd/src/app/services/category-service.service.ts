import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor( private http:HttpClient) { }

  public getAllCategories(){
    return this.http.get(`${baseUrl}/category/getAll`)
  }

  public addCategory(category:any){
    return this.http.post(`${baseUrl}/category/add`,category)
  }
}
