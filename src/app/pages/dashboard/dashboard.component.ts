import { Component, inject, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ChatgptService } from 'src/app/services/chatgpt.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  filteredArray: string[] = [];
  promt: string = '';
  isActive!: boolean;
  chatHistory: any[] = [];
  //chatHistory: { from: string; message: string }[] = [];
  loading: boolean = false;
  typeSelected: string='ball-atom';

  private geminiSrv: ChatgptService = inject(ChatgptService);

  constructor(private route: Router, private spinnerService: NgxSpinnerService) {
    this.geminiSrv.getMessageHistory().subscribe((response: any) => {
      if (response) {
        this.chatHistory.push(response);
        //this.showSpinner();
      }
    })
  }
  // public showSpinner(): void {
  //   this.spinnerService.show();
  //   this.loading =true;

  //   // setTimeout(() => {
  //   //   this.spinnerService.hide();
  //   // }); // 5 seconds
  // }

  ngOnInit() {}
  // get formattedArray(): { from: string; message: string }[] {
  //   // Return the chat history directly, filtering out any unwanted messages
  //   return this.chatHistory.filter(element => element.message.trim() !== "*");
  // }


  async sendData() {
    if (this.promt) {
      this.loading = true;
      //this.showSpinner();
      const data = this.promt;
      this.promt = '';
      await this.geminiSrv.generateText(data);
      this.loading = false;
    }
  }

  toggle(): void {
    this.isActive = !this.isActive;
    this.route.navigate(['personal-chat'])
  }

  formatText(text:string){
    // const result = text.replaceAll('*' ,'');
    // return result;
    const filteredArray = text.split("\n")
      .filter((element) => element.trim() !== "*") && text.replaceAll('*' ,'');
     return filteredArray
   
  }

}
