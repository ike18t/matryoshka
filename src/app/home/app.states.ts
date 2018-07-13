import { appModule } from './app.module';

/**
 * This is the parent state for the entire application.
 *
 * This state's primary purposes are:
 * 1) Shows the outermost chrome (including the navigation and logout for authenticated users)
 * 2) Provide a viewport (ui-view) for a substate to plug into
 */
const appState = {
  name: 'app',
  redirectTo: 'upgradable',
  component: 'app'
};


appModule.config(['$stateProvider', ($stateProvider) => {
  $stateProvider.state(appState);
}]);
