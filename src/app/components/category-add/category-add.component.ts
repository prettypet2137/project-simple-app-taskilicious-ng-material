import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {

  categoryForm = this.formBuilder.group({
    name: ['', Validators.required],
  });

  constructor(
    private router: Router, 
    private categoryService: CategoryService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.categoryForm.valid) {
      this.categoryService.create(this.categoryForm.value)
        .subscribe({
          next: (res) => {
            debugger;
            this.router.navigateByUrl('/user');
          },
          error: (e) => console.error(e)
        });
    }      
  }

}
