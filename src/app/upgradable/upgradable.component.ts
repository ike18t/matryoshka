import { upgradableModule } from './upgradable.module';

const upgradableComponent = {
  template: `
    <h3>Upgraded Angular 1 Component</h3>

    <downgrade-component></downgrade-component>
  `
};

upgradableModule.component('upgradable', upgradableComponent);
