import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../Post'
@Component({
  selector: 'app-apost',
  templateUrl: './apost.component.html',
  styleUrls: ['./apost.component.css']
})
export class ApostComponent implements OnInit {
    @Input() post! : Post // = {title: "none", body: "none"};

    constructor() { }

    ngOnInit(): void {
    }
}
