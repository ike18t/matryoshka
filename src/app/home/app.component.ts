import { appModule } from './app.module';

const appComponent = {
  template: `
    Angular 1

    <div class="nav">
      <span>
        <a ui-sref="upgradable">upgradable</a>
      </span>
      <span>
        <a ui-sref="upgraded">upgraded</a>
      </span>
      <span>
        <a ui-sref="ngx">ngx</a>
      </span>
    </div>
    <div ui-view/>
  `
};

appModule.component('app', appComponent);
