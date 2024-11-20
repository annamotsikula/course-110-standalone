import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../core/interfaces/product.interface';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { LowstockDirective } from '../core/directives/lowstock.directive';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault, LowstockDirective]
})
export class CardComponent implements OnInit, OnChanges {
  @Input({required: true}) product!: Product
  @Output() productSum: EventEmitter<number> = new EventEmitter<number>()
  @Output() message: EventEmitter<string|number|boolean> = new EventEmitter<string|number|boolean>()
  
ngOnChanges(changes: SimpleChanges): void {
  // console.log(changes)
}
  ratingSum!: string

  calculatRating(ratings: number[]): string {
    console.log(ratings)
    const total = ratings.reduce((sum, rating) => sum + rating, 0);
    return (total / ratings.length).toFixed(1);
  }

  ngOnInit(): void {
   
  }

  submit() {
    this.message.emit(`You've chosen product: ${this.product.title}`)
    this.productSum.emit(this.product.id);
  }

}

