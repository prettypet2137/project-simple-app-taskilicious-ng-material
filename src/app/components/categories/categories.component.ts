import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories?: Category[]; 

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.retrieveCategories();
  }

  retrieveCategories(): void {
    this.categoryService.getAll()
      .subscribe({
        next: (data) => {
          this.categories = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


}
