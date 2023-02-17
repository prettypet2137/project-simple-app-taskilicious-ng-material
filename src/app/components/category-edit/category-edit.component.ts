import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.scss']
})
export class CategoryEditComponent implements OnInit {

  currentCategory: Category = {
    id: '',
    name: ''
  }

  categoryForm = this.formBuilder.group({
    name: ['', Validators.required],
  });

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getCategory(this.route.snapshot.params["id"]);
  }

  getCategory(id: string): void {
    this.categoryService.get(id)
      .subscribe({
        next: (data) => {
          this.currentCategory = data;
          this.categoryForm.setValue({ name: this.currentCategory.name});
        },
        error: (e) => console.error(e)
      });
  }

  onSubmit(): void {
    if (this.categoryForm.valid && this.currentCategory.id) {
      this.categoryService.update(this.currentCategory.id, this.categoryForm.value)
        .subscribe({
          next: (res) => {
            this.router.navigateByUrl('/user');
          },
          error: (e) => console.error(e)
        });
    }      
  }

}
