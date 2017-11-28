(function(){

    angular.module('firstApp')
        .factory("MainService",MainService);

    MainService.$inject=['$http'];

    function MainService($http){

        return service ;
    }

})();
