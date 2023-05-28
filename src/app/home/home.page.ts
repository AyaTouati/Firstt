import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lvrs:any=[]

  constructor(private fire:AngularFirestore, private route:Router) { 
    this.getLivres();
  }

  getLivres(){
    this.fire.collection ("Livres").snapshotChanges()
            .subscribe(
                data => {
                  this.lvrs =data.map(
                    e=>{
                      return{

                        id:e.payload.doc.id,
                        
                        data:e.payload.doc.data()
                        //titre:e.payload.doc.data()["titre"],
                        


                      }
                    }
                  )
                }



            )
  }

delEtd(item:any){
  this.fire.doc("Livres/"+item.id).delete();
}

allerAjout(){
  this.route.navigateByUrl("ajout");
}

}
