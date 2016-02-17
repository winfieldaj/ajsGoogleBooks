import angular from 'angular';
import googleBooksTemplate from './google-books.html';


function googleBooksDirective() {
    'ngInject';
    
    return {
        restrict: 'E',
        link: (scope) => {
            scope.searchValue = '';
            scope.pageNumber = 1;
            scope.maxResults = 10;
            scope.totalPages = 0;
            
            scope.$watch(() => {
                return scope.pageNumber;
            }, () => {
                scope.search();
            });
            
            scope.back = () => {
                scope.pageNumber = scope.pageNumber - 1;
            }
            
            scope.forward = () => {
                scope.pageNumber = scope.pageNumber + 1;
            }
        },
        template: googleBooksTemplate,
        controller: 'MabcGoogleBooksController',
        controllerAs: 'ctrl'
    }
}

export default googleBooksDirective;