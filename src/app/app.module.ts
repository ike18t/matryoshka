import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { BrowserModule } from '@angular/platform-browser';

import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';
import { UIRouterModule } from '@uirouter/angular';
import { sampleAppModuleAngularJS } from './app.angularjs.module';

import { UpgradedModule } from './upgraded/upgraded.module';
import { DowngradeModule } from './downgrade/downgrade.module';
import { NgxModule } from './ngx/ngx.module';

// The main NgModule for the Angular portion of the hybrid app
@NgModule({
  imports: [
    BrowserModule,
    // Provide angular upgrade capabilities
    UpgradeModule,
    UIRouterUpgradeModule,
    UIRouterModule,
    // Provides the @uirouter/angular directives and registers
    // the future state for the lazy loaded contacts module
    UpgradedModule,
    DowngradeModule,
    NgxModule
  ],
  providers: [
    // Provide the SystemJsNgModuleLoader when using Angular lazy loading
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
  ]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [sampleAppModuleAngularJS.name], { strictDi: true });
  }
}
