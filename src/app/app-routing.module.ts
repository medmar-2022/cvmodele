import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { Cv_editComponent } from './cv_edit/cv_edit.component';
import { EmploisComponent } from './emplois/emplois.component';
import { HomeComponent } from './home/home.component';


import { Temp_1Component } from './templates/temp_1/temp_1.component';
import { Temp_2Component } from './templates/temp_2/temp_2.component';
import { Temp_3Component } from './templates/temp_3/temp_3.component';
import { Temp_4Component } from './templates/temp_4/temp_4.component';
import { Temp_5Component } from './templates/temp_5/temp_5.component';
import { Temp_6Component } from './templates/temp_6/temp_6.component';
import { Temp_7Component } from './templates/temp_7/temp_7.component';

const routes: Routes = [

  
  { path: '', redirectTo:'cv',pathMatch:'full' },
    { path: 'cv',component:HomeComponent},
    { path: 'entretien', component:EmploisComponent  },
     { path: 'temp1',component:Cv_editComponent},
      { path: 'temp2', component:Temp_1Component   },
      { path: 'temp3', component:Temp_2Component  },
      { path: 'temp4', component:Temp_3Component  },
    { path: 'temp5', component:Temp_4Component  },
    { path: 'temp6', component:Temp_5Component  },
    { path: 'temp7', component:Temp_6Component  },
    { path: 'temp8', component:Temp_7Component  },

    
    
    

   
  
];

@NgModule({
  imports: [ BrowserModule,RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
}),
   
    ],
 
  exports: [RouterModule]
})
export class AppRoutingModule { }
