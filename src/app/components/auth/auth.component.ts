import { Component, Input, OnInit } from "@angular/core";
import { ModalService } from "../../services/modal.service";

import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup,
} from "@angular/forms";

@Component({
  selector: "auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent implements OnInit {
  form = new FormGroup<any>({
    username: new FormControl<string>("", [
      Validators.required,
      Validators.minLength(6),
    ]),
    password: new FormControl<string>("12", [
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

  constructor(public ModalService: ModalService) {}

  ngOnInit(): void {}

  submit(): void {}
}
