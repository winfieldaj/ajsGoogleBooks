import angular from 'angular';
import ComponentsModule from './components/components.module';
import ResourcesModule from './resources/resources.module';
import RoutesModule from './routes/routes.module';
import ServicesModule from './services/services.module';

const mabcModule = angular.module('mabc', 
    [
        ComponentsModule.name,
        ResourcesModule.name,
        RoutesModule.name,
        ServicesModule.name,
    ]);

export default mabcModule;
