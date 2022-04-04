import { RxState } from '@rx-angular/state';
import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {
  distinctUntilChanged,
  filter,
  map,
} from 'rxjs';
import { RxActionFactory } from '../shared/rxa-custom/actions';
import { RxEffects } from '@rx-angular/state/effects';

type Actions = {
  sideDrawerOpenToggle: boolean;
  loadAccountMenu: void;
};

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
  providers: [RxState, RxEffects, RxActionFactory],
})
export class AppShellComponent {
  readonly ui = this.actionsF.create();

  constructor(
    private readonly state: RxState<{
      sideDrawerOpen: boolean;
    }>,
    public effects: RxEffects,
    @Inject(DOCUMENT) document: Document,
    // private router: Router,
    private actionsF: RxActionFactory<Actions>
  ) {
    this.init();
  }

  init() {
    this.state.set({ sideDrawerOpen: false });
    this.state.connect('sideDrawerOpen', this.ui.sideDrawerOpenToggle$);

    /*this.effects.register(
      this.router.events.pipe(
        filter((e) => e instanceof NavigationEnd),
        map((e) => (e as NavigationEnd).urlAfterRedirects),
        distinctUntilChanged()
      ),
      () => this.closeSidenav()
    );*/
  }

  readonly viewState$ = this.state.select();


  closeSidenav = () => {
    this.ui.sideDrawerOpenToggle(false);
  };
}
