//function NamesController(){
//                this.names=[{name:'Hanuman',salary:'20000'},{name:'Kumar',salary:'24000'},{name:'Venkat',salary:'24000'},{name:'Anil',salary:22000}]
//                this.doSort=function(propName){
//                    this.sortBy=propName;
//                    this.reverse=!this.reverse
//                };
//            }

var app=angular.module('customersApp',['ngRoute'])
//
//app.controller('NamesController',function($scope){
//    
//    $scope.sortBy='name';
//    $scope.reverse=false;
//    
//    
//    $scope.names=[{name:'Hanuman',salary:'20000'},{name:'Kumar',salary:'24000'},{name:'Venkat',salary:'24000'},{name:'Anil',salary:22000}]
//    $scope.doSort=function(propName){
//    $scope.sortBy=propName;
//    $scope.reverse=!this.reverse
//    };
//    
//})




//
//(function(){
//    
//    angular.module('customersApp')
//        .controller('NamesController',function($scope){
//    
//    $scope.sortBy='name';
//    $scope.reverse=false;
//    
//    
//    $scope.names=[{name:'Hanuman',salary:'20000'},{name:'Kumar',salary:'24000'},{name:'Venkat',salary:'24000'},{name:'Anil',salary:22000}]
//    $scope.doSort=function(propName){
//    $scope.sortBy=propName;
//    $scope.reverse=!this.reverse
//    };
//    
//})
//    
//}())


(function(){
    
    var sampleController=function($scope){
    
    $scope.sortBy='name';
    $scope.reverse=false;
    
    
    $scope.names=[{name:'Hanuman',salary:'20000'},{name:'Kumar',salary:'24000'},{name:'Venkat',salary:'24000'},{name:'Anil',salary:22000}]
    $scope.doSort=function(propName){
        $scope.sortBy=propName;
        $scope.reverse=!this.reverse
    };
        
    };
        
    angular.module('customersApp').controller('NamesController',sampleController)
    
}())