import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  signUpUser(params: any) {
    return this.http.post('http://localhost:5800/auth/signup', params);
  }
  signUpComplete(params: any, id: any) {
    return this.http.put(
      `http://localhost:5800/auth/completeSignUp/${id}`,
      params
    );
  }
  login(params: any) {
    return this.http.post('http://localhost:5800/auth/login', params);
  }
  getGeminiPrompt(params:any){
    return this.http.post('http://localhost:5800/ai/gemini',params)
  }
  prompts(params:any){
    return this.http.post('http://localhost:5800/ai/prompts',params)
  }
}
