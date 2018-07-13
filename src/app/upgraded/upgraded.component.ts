import { Component, Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({ selector: 'upgraded' })
export class UpgradedDirective extends UpgradeComponent {

  constructor(elementRef: ElementRef, injector: Injector) {
    super('upgradable', elementRef, injector);
  }
}


@Component({
  selector: 'upgraded-wrapper',
  template: `
    <h3>Angular 5 Component</h3>
    <upgraded></upgraded>
  `
})
export class UpgradedWrapperComponent {}
