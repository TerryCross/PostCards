import { Component } from '@angular/core';
import { UicoordService } from './services/uicoord.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    newUser: boolean = false
    
    constructor(private uicoordService: UicoordService) {
        this.uicoordService.onNewLogin().subscribe( userid => {
            console.log("appcomp, onNewLogin:", userid);
            return this.newUser = userid;
        })
    }
}
