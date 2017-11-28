
var states = [
    {
        name:'login',
        state:{
            url:'/login',
            templateUrl:'../views/login.html',
            data:{
                text:"Login",
                visible:"true"
            }
        }
    },
    {
        name:'home',
        state:{
            url:'/home',
            templateUrl:'../views/home.html',
            data:{
                text:"Login",
                visible:"true"
            }
        }
    }
];

var app = angular.module('firstApp',[
    'ui.router'
])

    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/login');

        angular.forEach(states,function(state){
            $stateProvider.state(state.name,state.state);
        })

    });