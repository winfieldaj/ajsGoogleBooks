import angular from 'angular';
import 'angular-resource';

import { GoogleBooksSearchResource } from './google-books.resource';

const ResourcesModule = angular.module('mabc.resources', ['ngResource'])
    .factory('MabcGoogleBooksSearchResource', GoogleBooksSearchResource);

export default ResourcesModule;