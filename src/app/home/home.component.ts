import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:ActivatedRoute ,private router:Router,private meta:Meta,private title:Title) { }

  ngOnInit() {
    this.title.setTitle("Créer votre CV gratuit - Téléchargement en PDF gratuit")
    this.meta.updateTag({ name: 'description', content: 'Créez Votre CV  Gratuitement. Nombreux Exemples de CV en Ligne gratuit.  Grâce aux plusieurs  CVmodels en ligne gratuitement !'});
  }
  
LoginIn1(){
  const token=localStorage.getItem('token');
  if(token==null){this.router.navigate(['/login'])}
  else{this.router.navigate(['/temp1'])}
}
LoginIn2(){
  const token=localStorage.getItem('token');
  if(token==null){this.router.navigate(['/login'])}
  else{this.router.navigate(['/temp2'])}
}
LoginIn3(){
  const token=localStorage.getItem('token');
  if(token==null){this.router.navigate(['/login'])}
  else{this.router.navigate(['/temp3'])}
}
LoginIn4(){
  const token=localStorage.getItem('token');
  if(token==null){this.router.navigate(['/login'])}
  else{this.router.navigate(['/temp4'])}
}
LoginIn5(){
  const token=localStorage.getItem('token');
  if(token==null){this.router.navigate(['/login'])}
  else{this.router.navigate(['/temp5'])}
}
LoginIn6(){
  const token=localStorage.getItem('token');
  if(token==null){this.router.navigate(['/login'])}
  else{this.router.navigate(['/temp6'])}
}
LoginIn7(){
  const token=localStorage.getItem('token');
  if(token==null){this.router.navigate(['/login'])}
  else{this.router.navigate(['/temp7'])}
}
LoginIn8(){
  const token=localStorage.getItem('token');
  if(token==null){this.router.navigate(['/login'])}
  else{this.router.navigate(['/temp8'])}
}
}
