import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UicoordService {
    private subject = new Subject<any>();      // can fwd to multiple observers.
    private subject2 = new Subject<any>();      // can fwd to multiple observers.
    private showNewPost: boolean = false;
    private hideLoginForm: boolean = false;
    private userId: number = 0;
    
    constructor() { }

    notifyNewPostClick() :void {                     // call from component.
        console.log("in uicoord notify NewPostClick()");
        this.showNewPost = !this.showNewPost;
        this.subject.next(this.showNewPost)
    }

    onNewPostClick() : Observable<any> {
        console.log("in uicoord NewPostClick");
        return this.subject.asObservable(); 
    }

    notifyNewLogin(id: number) :void {                     // call from component.
        console.log("in newLogin()", id);
        //this.hideLoginForm = !this.hideLoginForm;
        this.subject2.next(id)
        this.userId = id;
    }
    getUserId() {
        return this.userId;
    }
    
    onNewLogin() : Observable<any> {
        console.log("in onnewLogin subject:", this.subject);
        return this.subject2.asObservable(); 
    }

}
