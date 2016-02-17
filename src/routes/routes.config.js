import mainRoutes from './main.routes';

function routesConfig($stateProvider, $urlRouterProvider) {
    'ngInject';
    
    $urlRouterProvider.otherwise('/home');
    
    mainRoutes.forEach((route) => {
       $stateProvider.state(route); 
    });
}

export default routesConfig;