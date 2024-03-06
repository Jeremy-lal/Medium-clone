import {Component, OnInit} from '@angular/core'
import {RouterLink} from '@angular/router'
import {selectCurrentUser} from '../../../auth/store/reducers'
import {Store} from '@ngrx/store'
import {CommonModule} from '@angular/common'

@Component({
  selector: 'mc-header',
  templateUrl: 'header.component.html',
  standalone: true,
  imports: [RouterLink, CommonModule],
})
export class HeaderComponent implements OnInit {
  currentUser$ = this.store.select(selectCurrentUser)

  constructor(private store: Store) {}

  ngOnInit() {}
}
