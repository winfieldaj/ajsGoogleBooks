import angular from 'angular';
import 'angular-ui-router';
import routesConfig from './routes.config';

const RoutesModule = angular.module('mabc.routes', ['ui.router']).config(routesConfig);

export default RoutesModule;
