import { upgradableModule } from './upgradable.module';

const upgradableState = {
  parent: 'app',
  name: 'upgradable',
  url: '/upgradable',
  component: 'upgradable'
};

upgradableModule.config(['$stateProvider', ($stateProvider) => {
  $stateProvider.state(upgradableState);
}]);
