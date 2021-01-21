import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  styleUrls: ['contact.css'],
})
export class ContactPage {
  feet: number;
  fttoinch: number;
  inches: number;
  robinsondesired: number;
  millerdesired: number;
  hamwidesired: number;
  devinedesired: number;
  sex: string;
  pmessage: string;
    
    constructor(public navCtrl: NavController) {}
      
    calculatedesired() {

         if (this.sex == "m"){
      this.fttoinch = (this.feet - 5) * 12;
      this.robinsondesired = Math.round(52 + 1.9 *(this.fttoinch)+ 1.9 * this.inches);
      this.millerdesired = Math.round(56.2 + 1.41 *(this.fttoinch)+ 1.41 * this.inches);
      this.hamwidesired = Math.round(48 + 2.7 *(this.fttoinch)+ 2.7 * this.inches);
      this.devinedesired = Math.round(50 + 2.3 *(this.fttoinch)+ 2.3 * this.inches);
      this.pmessage = "kg";
    }
    else if (this.sex == "f") {
      this.fttoinch = (this.feet - 5) * 12;
      this.robinsondesired = Math.round(49 + 1.7 *(this.fttoinch)+ 1.7 * this.inches);
      this.millerdesired = Math.round(53.1 + 1.36 *(this.fttoinch)+ 1.36 * this.inches);
      this.hamwidesired = Math.round(45.5 + 2.2 *(this.fttoinch)+ 2.2 * this.inches);
      this.devinedesired = Math.round(45.5 + 2.3 *(this.fttoinch)+ 2.3 * this.inches);
      this.pmessage = "kg";
    }
    else{
    }
  }
}