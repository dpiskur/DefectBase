import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DefectService } from '../../services/defect.service';
import 'rxjs/add/operator/take';

@Component({
  selector: 'defect-form',
  templateUrl: './defect-form.component.html',
  styleUrls: ['./defect-form.component.css']
})
export class DefectFormComponent implements OnInit {
  //categories$;
  defect = {};
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
   // private categoryService: CategoryService, 
    private defectService: DefectService) {
   // this.categories$ = categoryService.getAll();
    
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) this.defectService.get(this.id).take(1).subscribe(p => this.defect = p);
   }

   save(defect) { 
    if (this.id) this.defectService.update(this.id, defect);
    else this.defectService.create(defect);
    
    this.router.navigate(['/defects']);
  }

   delete(){
     if (!confirm('Na pewno chcesz usunąć pozycję?')) return;
      
       this.defectService.delete(this.id);
       this.router.navigate(['/defects']);
   }

  ngOnInit() {
  }

}