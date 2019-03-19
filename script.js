(function(){
    'use strict'
    angular.module('myFirstApp',[])
    .controller("MyFirstController",function($scope){
        $scope.name = "Deepti";
        $scope.val=0
        $scope.displayVal= function(){
            $scope.val = calculateValue();
        }
        function calculateValue(){
            
            var str = $scope.name
            var num=0;
            for(var i=0;i<str.length;i++){
                num += str.charCodeAt(i);
            }
            return num;

        }
    })

})();