import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { NgxComponent } from './ngx.component';
import { ngxState } from './ngx.states';

@NgModule({
  imports: [
    UIRouterModule.forChild({ states: [ngxState] })
  ],
  declarations: [NgxComponent],
  entryComponents: [NgxComponent]
})
export class NgxModule {}
