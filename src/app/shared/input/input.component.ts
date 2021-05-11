import {Component, ElementRef,
  HostBinding, HostListener, Input, OnInit, Output,
  Renderer2, ViewChild, EventEmitter} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor, OnInit {

  @ViewChild('nativeElement', {static: false}) nativeElement: ElementRef<any>;

  @Input() typeInput;
  @Input() name;
  @Input() placeholder;
  @Input() label;
  @Input() type = 'text';
  @Input() control: FormControl;
  @Input() color: ThemePalette;
  @Input() identifier: any;
  @Output() defocus = new EventEmitter<any>();

  @Input()
  set value(value){
    this.inputValue = value;
    this.inputChange.emit(value);
  }

  get value(): any {
    return this.control.value;
  }

  @Output() inputChange = new EventEmitter<any>();
  @Output() enterKeyDown = new EventEmitter<any>();

  private onChangeCallback: (_: any) => {};
  private onTouchedCallback: (_: any) => {};

  private inputValue = '';
  private editable = false;

  @HostBinding('class.editable') get isEditable(): boolean {
    return this.editable;
  }

  @HostListener('blur') onBlur(): void {
    this.editable = false;
    if (this.identifier) {
      this.defocus.emit(this.identifier);
    }

  }

  @HostListener('click') onClick(): void {
    if (this.nativeElement) {
      this.nativeElement.nativeElement.focus();
    }
  }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  onChange(event: any): void {
    if (event.target) {
      this.control.setValue(event.target.value);
      this.inputChange.emit(event.target.value);
    }
  }

  onAnyKeyDown(event: any): void {
    this.enterKeyDown.emit(event);
  }

  writeValue(value): void {
    this.inputValue = value;
    if (value){
      this.inputChange.emit(value);
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.renderer.setProperty(this.elementRef, 'disabled', isDisabled);
  }

  ngOnInit(): void {
  }
}
