import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs'
import { POSTS } from '../../mock-posts';
import { Post } from '../../Post'
import { PostfetchService } from '../../services/postfetch.service'
import { UicoordService } from '../../services/uicoord.service'

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
    usersposts: Post[] = [];
    othersposts: Post[] = [];
    userId: number = 0;
    btnchange: boolean = false;
    tabn: string = 'first';

    private subject = new Subject<any>();
    
    constructor(private postfetchService: PostfetchService,
                private uicoordService: UicoordService) {
        this.uicoordService.onNewPostClick().subscribe( bchange => {
            console.log("got subsciption", bchange);
            return this.btnchange = bchange})
    }

    ngOnInit(): void {
        console.log("suscru=ibub to onNewLogin");
        this.userId = this.uicoordService.getUserId()
        console.log("tabs this.userid", this.userId);
        this.uicoordService.onNewLogin().subscribe( userid => {
            console.log("tabs comp, onNewLogin:", userid);
            return this.userId = userid;
        })
        
        this.postfetchService.getAllPosts()
            .subscribe(
                (posts: Post[]) => {
                    this.AddToUsersPostsOrOtherPosts(posts);
                }
            )
        
    }
    AddToUsersPostsOrOtherPosts(posts: Post[]) {
        this.usersposts = posts.filter( el => el.userId === this.userId)
        this.othersposts = posts.filter( el => el.userId !== this.userId)
        console.log("n userps ", this.usersposts.length, this.othersposts.length, "orig len", posts.length);
    }
    onMakeNewPostClick() {  
        console.log("onMakeNewPostClick,, call subject next");
        this.uicoordService.notifyNewPostClick(); 
    }
    onNewPostClick(): Observable<any> {
        console.log("onNewPost");
        return this.subject.asObservable()
    }
    newPostEvent(p: Post) {
        console.log("Ev:",p)
        if(p.userId === this.userId)
            this.usersposts.unshift(p);
        else
            this.othersposts.unshift(p);
    }
}
