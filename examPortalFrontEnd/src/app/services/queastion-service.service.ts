import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QueastionServiceService {

  constructor(private http:HttpClient) { }


  public getAllQueastionByQuizId(quizId:any){
    return this.http.get(`${baseUrl}/queastion/getAllQueastionByQuizId/`+quizId)
  }


  public addQueastion(Queastion:any){
    return this.http.post(`${baseUrl}/queastion/add`,Queastion)
  }

  public evalQuiz(queastion:any){
    return this.http.post(`${baseUrl}/queastion/eval`,queastion);
  }
}
