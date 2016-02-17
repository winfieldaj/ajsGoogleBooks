import angular from 'angular';

import GoogleBooksService from './google-books.service';
import ResourceModule from '../resources/resources.module';

const ServicesModule = angular.module('mabc.services', [ResourceModule.name])
    .factory('MabcGoogleBooksService', GoogleBooksService);

export default ServicesModule;