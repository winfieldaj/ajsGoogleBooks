function GoogleBooksSearchResource($resource) {
    'ngInject';
    
    return $resource('https://www.googleapis.com/books/v1/volumes?q=:searchValue&startIndex=:startIndex&maxResults=:maxResults', {}, { get: {method: 'GET', isArray: false}});
}

export { GoogleBooksSearchResource };