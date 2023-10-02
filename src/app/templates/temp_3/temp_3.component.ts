import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import Scrollbar from 'smooth-scrollbar';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-temp_3',
  templateUrl: './temp_3.component.html',
  styleUrls: ['./temp_3.component.css']
})
export class Temp_3Component implements OnInit {
  @ViewChild('print') print!: ElementRef;
  model:any={}
 mdel1:any;
 index:any
 isPhonePortrait =false
 hideSideMenu = false;


CvForm:FormGroup
url:any
  constructor(private fb:FormBuilder,private responsive: BreakpointObserver) {
    this.CvForm = this.fb.group({
      image:['',Validators.required],
  name:['', [Validators.required, Validators.minLength(2)]],
  LastName:['', [Validators.required, Validators.minLength(3)]],
  Description:['', [Validators.required, Validators.minLength(3)]],
  Age:['', [Validators.required, Validators.minLength(2)]],
  
  Tel:['', Validators.required],
  Email:['', Validators.required],
  Adresse:['', Validators.required],
  Ville:['', Validators.required],
  sf:['', Validators.required],
  aliases:this.fb.array([this.newAlias()]),
  aliases1:this.fb.array([this.newAlias1()]),
  aliases2:this.fb.array([this.newAlias2()]),
  aliases3:this.fb.array([this.newAlias3()]),
  aliases4:this.fb.array([this.newAlias4()])
  
    })
   
      
      
      
   }

  ngOnInit() {
    this.responsive.observe([
      Breakpoints.HandsetLandscape,      
      Breakpoints.TabletLandscape,
      Breakpoints.HandsetPortrait
     

      
      ])
      .subscribe(result => {

        this.hideSideMenu = false; 

        if (result.matches) {
          this.hideSideMenu = true;
        }

  });
  
  }
  onSelectFile(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target?.result ;
      }
    }
  }
 
 
      getValue(event: Event): string {
        return (event.target as HTMLInputElement).value;
      }
      getValue1(index: number) {
        this.aliases.removeAt(index)
      }
     
      getValue2(index: number) {
        this.aliases1.removeAt(index)
      }
      getValue3(index: number) {
        this.aliases2.removeAt(index)
      }
      getValue4(index: number) {
        this.aliases3.removeAt(index)
      }
      getValue5(index: number) {
        this.aliases4.removeAt(index)
      }

      get aliases():FormArray {
        return this.CvForm.get('aliases') as FormArray;
       
      }
      newAlias(){
        return this.fb.group({
          formation:  new FormControl(''),
          dad:  new FormControl(''),
          daf: new FormControl('')
        })
    
       
     }
     newAlias1() {
    return this.fb.group({
       experience: new FormControl(''),
        dade: new FormControl(''),
       dafe:new FormControl('')
      })
     
   }
   newAlias2(): FormGroup {
    return this.fb.group({
     competence: new FormControl('')
     
    })
 }
 newAlias4(): FormGroup {
  return this.fb.group({
   informatique: new FormControl('')
   
  })
}
 newAlias3(): FormGroup {
  return this.fb.group({
   langue: new FormControl(''),
   Niveau: new FormControl('')
  })
}
      get aliases1() {
        return this.CvForm.get('aliases1') as FormArray;
       
      }
     
      get aliases2() {
        return this.CvForm.get('aliases2') as FormArray;
       
      }
      get aliases3() {
        return this.CvForm.get('aliases3') as FormArray;
       
      }
      get aliases4() {
        return this.CvForm.get('aliases4') as FormArray;
       
      }
      addAlias() {
       this.aliases.push(this.newAlias());
      }
      addAlias1() {
        this.aliases1.push(this.newAlias1());
      }
      addAlias2() {
        this.aliases2.push(this.newAlias2());
      }
      addAlias3() {
        this.aliases3.push(this.newAlias3());
      }
      addAlias4() {
        this.aliases4.push(this.newAlias4());
      }
      affich(){
    return this.aliases.value
      }
      calcule(index:number){
        var bb=this.aliases.at(index).value
       
       return bb
         
            }
            calcule1(index:number){
              var bb1=this.aliases1.at(index).value
             
             return bb1
               
                  }
                  calcule2(index:number){
                    var bb1=this.aliases2.at(index).value
                   
                   return bb1
                     
                        }  
                       calcule3(index:number){
                          this.isPhonePortrait=false
                          if(this.aliases3.at(index).get('Niveau')?.value==20){this.isPhonePortrait=true}
                         
                  
     
                          }
                          printAll(){
                            var data:any = document.getElementById('print');
                            html2canvas(data,{
                              onclone: function (clonedDoc:any) {
                                  clonedDoc.getElementById('print').style.display = 'block';
                              }
                          }).then(canvas => {  
                            var imgWidth = 208;   
                            var imgHeight = canvas.height * imgWidth / canvas.width;  
                            const contentDataURL = canvas.toDataURL('image/png')  
                            let pdf = new jspdf('p', 'mm', 'a4'); 
                         
                            var position = 10;  
                            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
                            // pdf.save('MYPdf.pdf');//save pdf
                            // pdf.output('dataurlnewwindow'); //with firefox only
                            window.open(pdf.output('bloburl'),'_blank'); // with all browsers new page
                          });  
                          }
                          
                          }

