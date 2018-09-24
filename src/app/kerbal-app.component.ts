import { Component } from '@angular/core';

@Component({
  selector: 'kerbal-app',
  template: `
  <navbar></navbar>
  <img class="img-responsive center-block" src="/assets/images/ksp-logo.png"/>
  <router-outlet></router-outlet>
  `
})
export class KerbalAppComponent {
  title = 'app';
}
