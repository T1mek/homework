import { Component, Input, OnInit, Output } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form = new FormGroup<any>({
    username: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    email: new FormControl<string>('email@bk.ru', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl<string>('12', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  get userName() {
    return this.form.controls.username as FormControl;
  }
  get password() {
    return this.form.controls.password as FormControl;
  }
  get email() {
    return this.form.controls.email as FormControl;
  }

  constructor(public ModalService: ModalService) {}

  ngOnInit(): void {}

  submit(): void {}
}
