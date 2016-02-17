import angular from 'angular';
import GoogleBooksModule from './google-books/google-books.module';

const ComponentsModule = angular.module('mabc.components', [GoogleBooksModule.name]);

export default ComponentsModule;