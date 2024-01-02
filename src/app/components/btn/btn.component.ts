import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {
@Input() btnTxt !: any
@Input() btnClass !: any

@Output() btnClick = new EventEmitter()

btnClicked(){
  this.btnClick.emit()
  return false

}


}
