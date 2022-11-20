import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  isVisible$ = new BehaviorSubject<boolean>(false);
  loginRegister = false;
  changeType = true;

  open() {
    this.isVisible$.next(true);
  }

  close() {
    this.isVisible$.next(false);
  }
  register() {
    this.loginRegister = true;
  }
  login() {
    this.loginRegister = false;
  }
  viewPassword() {
    this.changeType = !this.changeType;
  }
}
