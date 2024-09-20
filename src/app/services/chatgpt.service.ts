import { HttpClient,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatgptService {

  private generativeAi: GoogleGenerativeAI;
  private messageHistory: BehaviorSubject<any> = new BehaviorSubject(null)
  constructor() { 
    this.generativeAi = new GoogleGenerativeAI('AIzaSyCgJHrNqxXpTpl3KRXGS4bGuD72z10B4QI');
  }

  async generateText(promt:string){
    const model =this.generativeAi.getGenerativeModel({model: 'gemini-pro'});
    this.messageHistory.next({
      from:'user',
      message:promt
    })

    const result = await model.generateContent(promt);
    const response = await result.response;
    const text = response.text()
    this.messageHistory.next({
      from:'bot',
      message:text
    })
  }
  public getMessageHistory():Observable<any>{ 
    return this.messageHistory.asObservable();
  }

}



