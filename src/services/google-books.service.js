function GoogleBooksService(MabcGoogleBooksSearchResource){
    'ngInject';
    
    function search(urlParams) {
        return MabcGoogleBooksSearchResource.get(urlParams).$promise;
    }
    
    return {
        search,
    }
}

export default GoogleBooksService;