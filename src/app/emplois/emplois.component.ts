import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';

import { FileUploader } from 'ng2-file-upload';
import { AlertifyService } from '../services/alertify.service';
import { ChatGptService } from '../services/chatGpt.service';

@Component({
  selector: 'app-emplois',
  templateUrl: './emplois.component.html',
  styleUrls: ['./emplois.component.css']
})
export class EmploisComponent implements OnInit {
  PreForm:FormGroup
  model:any={}
  model1='c est quoi la vie'

 constructor(private fb:FormBuilder,private chatservice:ChatGptService,private alertify:AlertifyService) {
this.PreForm=this.fb.group({
  name:['',Validators.required],
  age:['',Validators.required],
  formation1:['',Validators.required],
  formation2:'',
  formation3:'',
  experience1:['',Validators.required],
  experience2:'',
  experience3:''
})
  
  }

  ngOnInit() {

  
  }
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
  click(){
    console.log(this.PreForm.value)
  }
  id(){
    var non=this.PreForm.controls['name'].value
   /* var model1:any=document.getElementById('model1')?.textContent*/

    this.chatservice.addPre(this.model1).subscribe(
      ()=>{this.alertify.message('bravo')
    },error=>{this.alertify.error(error)}
    
      
      
    );
    
      
      
    
    
  }

  }
  
  
  
  
  
  
 
  

 

