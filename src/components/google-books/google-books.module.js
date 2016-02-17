import angular from 'angular';

import googleBooksDirective from './google-books.directive';
import GoogleBooksController from './google-books.controller';

const GoogleBooksModule = angular.module('mabc.google-books', [])
    .controller('MabcGoogleBooksController', GoogleBooksController)
    .directive('mabcGoogleBooks', googleBooksDirective);

export default GoogleBooksModule;