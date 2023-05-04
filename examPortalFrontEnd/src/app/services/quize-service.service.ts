import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizeServiceService {

  constructor(private http:HttpClient) { }


  public getAllQuizes(){

    return this.http.get(`${baseUrl}/quiz/getAll`)
  }
  public getAllActiveQuizes(){

    return this.http.get(`${baseUrl}/quiz/getAllActiveQuizes`)
  }


  public addQuize(Quiz:any){
    return this.http.post(`${baseUrl}/quiz/add`,Quiz)
  }

  public deleteQuiz(qid:number){
    return this.http.delete(`${baseUrl}/quiz/deletById/`+qid);
  }

  public getQuizById(qid:number){
    return this.http.get(`${baseUrl}/quiz/getById/`+qid)
  }

  public updateQuiz(Quiz:any){
    return this.http.put(`${baseUrl}/quiz/update`,Quiz)
  }

  public getQuizByCategoryId(cid:number){
    return this.http.get(`${baseUrl}/quiz/getActiveQuizByCategoryId/`+cid)
  }

 
}
