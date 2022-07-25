import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs'
import { UicoordService } from '../../services/uicoord.service'
import { Post } from '../../Post'

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
    subscription: Subscription;
    showNewPostForm: boolean = false;
    postTitle: string = "";
    postBody: string = "";
    userId: number = 0;
    
    constructor(private uicoordService: UicoordService) {
        this.subscription = this.uicoordService
            .onNewPostClick().subscribe( (showing) => this.showNewPostForm = showing)
    }
    
    ngOnInit(): void {  }

    @Output() postsChange: EventEmitter<Post> = new EventEmitter()
    
    onSubmitPost() {
        if(this.postTitle === "" || this.postBody === ""){
            alert("Please add both a title and test for your new post.")
            return;
        }
        const postobj = { userId: this.userId , title: this.postTitle, body: this.postBody };
        this.postsChange.emit(postobj);
        
        this.postBody = "";
        this.postTitle = "";
    }
    
}
