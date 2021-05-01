import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button class="button" >{{ value }}</button>
  `,
  styles: [
    `button {
      color: white;
      background-color: rgb(100,100,200);
      width: 100px;
      height: 100px;
      border: none;
    }
    button:hover {
      background-color: rgb(100,100,250);
    }`
  ]
})
export class SquareComponent {

  @Input() value?: "X" | "O";

}
