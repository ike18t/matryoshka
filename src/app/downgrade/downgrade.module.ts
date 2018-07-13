import { DowngradeComponent } from './downgrade.component';
import { downgradeComponent } from '@angular/upgrade/static';
import * as angular from 'angular';

export const downgradeModule = angular.module('downgrade', [])
  .directive(
    'downgradeComponent',
    downgradeComponent({ component: DowngradeComponent }) as angular.IDirectiveFactory
  );

import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ DowngradeComponent ],
  entryComponents: [DowngradeComponent]
})
export class DowngradeModule {}