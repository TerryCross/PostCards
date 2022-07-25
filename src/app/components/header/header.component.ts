import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Post } from '../../Post'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    //title: string = 'postcards';
    @Input() title: string = 'no title';
    @Input() bgcolor: string = 'bisque';
    @Output() btclick = new EventEmitter();
    constructor() { }

    ngOnInit(): void {
    }

}
