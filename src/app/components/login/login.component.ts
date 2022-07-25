import { Component, OnInit } from '@angular/core';
import { EmailfetchService } from '../../services/postfetch.service'
import { UicoordService } from '../../services/uicoord.service'
import { User } from '../../Post'
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    emailAddresses: string[] = [""];
    emailAddress: string = "";
    showself = true;
    constructor(private postfetchService: EmailfetchService,
                private uicoordService: UicoordService) { }
    
    ngOnInit(): void {}
    onSubmitUserEmail() {
        console.log(this.emailAddresses);
        this.postfetchService.getEmailAddr(this.emailAddress).subscribe(
            usersAr => {
                console.log("email from src:", usersAr);
                if (usersAr.length == 1) {
                    this.showself = false;
                    var obj = usersAr[0];
                    this.uicoordService.notifyNewLogin(obj.id);
                }
            }
        )
        this.emailAddress = "";
    }
 }
