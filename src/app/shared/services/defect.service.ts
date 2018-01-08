import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class DefectService {

  constructor(private db: AngularFireDatabase) { }


  create(defect){
    return this.db.list("defects").push(defect);
   }
 
   getAll(){
     return this.db.list('defects')
   }
 
   get(defectId){
     return this.db.object('/defects/'+ defectId);
   }
 
   update(defectId, defect){
     return this.db.object('/defects/'+ defectId).update(defect);
   }
 
   delete(defectId){
     return this.db.object('/defects/'+ defectId).remove();
   }
}
