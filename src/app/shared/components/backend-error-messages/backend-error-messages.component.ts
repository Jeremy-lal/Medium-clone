import {Component, Input, OnInit} from '@angular/core'
import {BackendErrorsInterface} from '../../types/backendErrors.interface'

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: 'backend-error-messages.component.html',
  standalone: true,
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input({required: true}) backendErrors: BackendErrorsInterface = {}

  errorMessages: string[] = []

  ngOnInit() {
    this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
      const messages = this.backendErrors[name].join(', ')
      return `${name} ${messages}`
    })
  }
}
