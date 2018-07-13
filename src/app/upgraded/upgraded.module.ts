import { UpgradedDirective, UpgradedWrapperComponent } from './upgraded.component';
import { upgradedState } from './upgraded.states';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UIRouterModule } from '@uirouter/angular';

@NgModule({
  imports: [
    UIRouterModule.forChild({ states: [upgradedState] })
  ],
  declarations: [ UpgradedDirective, UpgradedWrapperComponent ],
  entryComponents: [UpgradedWrapperComponent]
})
export class UpgradedModule {}