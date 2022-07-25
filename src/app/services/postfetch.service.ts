import { Injectable } from '@angular/core';
import { of, Observable} from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
//import { POSTS } from '../mock-posts';
import { Post, User } from '../Post'

@Injectable({
  providedIn: 'root'
})

export class PostfetchService {
    private api: string = 'http://jsonplaceholder.typicode.com/posts'
    constructor(private http: HttpClient) { }
    getAllPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(this.api);
    }
}

@Injectable({
  providedIn: 'root'
})
export class EmailfetchService {
    private api: string = 'http://jsonplaceholder.typicode.com/users'
    constructor(private http: HttpClient) { }
    
    getEmailAddr(addr: string): Observable<User[]> {
        console.log("EmailfetchService", addr);
        return this.http.get<User[]>(this.api + "?email=" + addr);
    }
}
