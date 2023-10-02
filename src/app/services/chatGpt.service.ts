import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatGptService {
  baseUrl=environment.apiKey
constructor(private http:HttpClient) { }
addPre(model:any){
  return     this.http.post(this.baseUrl, model).pipe(
    map((response: any) => {
      const res = response;
      return res
}))

}
}
