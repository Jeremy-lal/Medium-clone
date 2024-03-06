import {Component} from '@angular/core'
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms'
import {Store} from '@ngrx/store'
import {RouterLink} from '@angular/router'
import {selectIsSubmitting, selectValidationErrors} from '../../store/reducers'
import {CommonModule} from '@angular/common'
import {authActions} from '../../store/actions'
import {combineLatest} from 'rxjs'
import {BackendErrorMessagesComponent} from '../../../shared/components/backend-error-messages/backend-error-messages.component'
import {LoginRequestInterface} from '../../types/loginRequest.interface'

@Component({
  selector: 'mc-login',
  templateUrl: 'login.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    CommonModule,
    BackendErrorMessagesComponent,
  ],
})
export class LoginComponent {
  form = this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
  })

  constructor(private fb: FormBuilder, private store: Store) {}

  onSubmit() {
    const request: LoginRequestInterface = {
      user: this.form.getRawValue(),
    }
    this.store.dispatch(authActions.login({request}))
  }
}