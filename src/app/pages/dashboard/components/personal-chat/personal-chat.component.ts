import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-chat',
  templateUrl: './personal-chat.component.html',
  styleUrls: ['./personal-chat.component.scss']
})
export class PersonalChatComponent implements OnInit{

  isActive!: boolean;
  constructor(private route:Router){}
  ngOnInit():void{}
  toggle(): void {
    this.isActive = !this.isActive;
    this.route.navigate([''])
  }
}
