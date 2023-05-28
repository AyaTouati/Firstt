import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.page.html',
  styleUrls: ['./ajout.page.scss'],
})
export class AjoutPage implements OnInit {

  titre:string="";
  quantite:string="";
  prix:string="";

  constructor(private fire:AngularFirestore, private route:Router) { }

  ngOnInit() {
  }

  ajouter(){
    this.fire.collection("Livres").add(
      { this:this.titre, prix:this.prix, quantite:this.quantite }
    );
    this.route.navigateByUrl("home");
    
  }

}

