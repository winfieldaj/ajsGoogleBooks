function GoogleBooksController($scope, MabcGoogleBooksService) {
    'ngInject';
    
    var vm = $scope;
    
    let urlParams = {};
    
    vm.search = () => {
        if(vm.searchValue.length > 0){
            urlParams.searchValue = vm.searchValue;
            urlParams.startIndex = getStartindex();
            urlParams.maxResults = vm.maxResults;

            MabcGoogleBooksService.search(urlParams).then((result) => {
                vm.results = result;
                if(vm.totalPages === 0) {
                    vm.totalPages = (vm.results.totalItems / vm.maxResults).toFixed(0);
                }
            });
        }
    }
    
    function getStartindex() {
        if(vm.pageNumber === 1) return 0;
        
        
        return (vm.pageNumber * vm.maxResults);
    }
}

export default GoogleBooksController;