/**
 * Created by zeus on 9/17/17.
 */

angular.module('firstApp').controller('MainController',MainController);

MainController.$inject=['$scope','MainService'];

function MainController ($scope,MainService) {

    var Logctrl = this;



    Logctrl.display = function () {
     //   console.log(Logctrl.userDetails);
            MainService.displayDetails(Logctrl.userDetails).then(function(res){
                console.log('print details');
            });
    };

}