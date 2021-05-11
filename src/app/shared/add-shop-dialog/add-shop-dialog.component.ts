import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-shop-dialog',
  templateUrl: './add-shop-dialog.component.html',
  styleUrls: ['./add-shop-dialog.component.css']
})
export class AddShopDialogComponent implements OnInit {

  nameFormControl: FormControl;
  @Output() emitAddShop = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
    this.nameFormControl = new FormControl('', Validators.required);
  }

  addShop(): void {
    this.emitAddShop.emit(this.nameFormControl.value);
  }
}
