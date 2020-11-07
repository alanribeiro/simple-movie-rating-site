import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-category',
  templateUrl: './rating-category.component.html',
  styleUrls: ['./rating-category.component.scss']
})
export class RatingCategoryComponent {
  @Input() category: string;
  rate: number;
  starSelectedColor: string;

  constructor() {
      this.rate = 0;
      this.starSelectedColor = "#E4BB24";
  }

  rateCategory = (starNumber) => {
      this.rate = starNumber;
  }

  verifyColor = (starNumber) => {
      if (this.rate >= starNumber) {
          return {
              color: this.starSelectedColor,
          }
      }
      return {
          color: "#FFF",
      }
  }

}
