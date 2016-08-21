define([
    'angular',
    'uiRouter',
    'uiAnimate',
    'jquery',
    'jqueryAutoTab'
], function (ng) {
    
var routerApp =  ng.module('app', ['ui.router','ngAnimate']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html',
            data: { transition: 'fade-in'}
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about/:id/:show',
            //templateUrl: 'partials/about.html', 
            views: {
                '': { templateUrl: function(stateParams){return 'partials/' + stateParams.id + '.html';},controller: 'appController' }
                
            },
        data: { transition: 'fade-in'}
            
            
            
        });
        
});

routerApp.controller('appController', function($scope,$stateParams,CommonService) {
    
    //$scope.message = 'My Name is ' + stateParams.firstName + " " + $stateParams.lastName;
    
    $scope.showValue = $stateParams.show;
    
    jQuery('#first').autotab({ target: '#second', format: 'numeric' });
    jQuery('#second').autotab({ target: '#third', format: 'numeric', previous: '#first' });
    jQuery('#third').autotab({ previous: '#second', format: 'numeric' });
   
    $scope.employees = [{name: 'Nadal',price: 50,gender:'Male',age:34},{name: 'Maria',price: 150,gender:'female',age:30},
        {name: 'Murray',price: 380,gender:'Male',age:38},{name: 'William',price: 3810,gender:'Female',age:38},{name: 'Roddick',price: 380,gender:'Male',age:40},{name: 'Czech',price: 3280,gender:'Male',age:38},{name: 'Marin',price: 2380,gender:'Female',age:25},{name: 'Ronaldo',price: 1380,gender:'Male',age:30},{name: 'Carlos',price: 6380,gender:'Male',age:58},{name: 'Sindhu',price: 3800,gender:'Female',age:24},{name: 'Stephanie',price: 3080,gender:'Female',age:32},{name: 'Sanchez',price: 4080,gender:'Male',age:38},
        {name: 'Vardy',price: 3180,gender:'Male',age:38},{name: 'Zaltan',price: 380,gender:'Male',age:38},{name: 'Jose',price: 380,gender:'Male',age:38},{name: 'Klopp',price: 380,gender:'Male',age:38},{name: 'Rooney',price: 380,gender:'Male',age:38},{name: 'Terry',price: 380,gender:'Male',age:38},{name: 'Costa',price: 380,gender:'Male',age:38},{name: 'Aguero',price: 380,gender:'Male',age:38},{name: 'Lorris',price: 380,gender:'Male',age:38},{name: 'Mahrez',price: 380,gender:'Male',age:38},{name: 'Barkley',price: 380,gender:'Male',age:38},{name: 'Defoe',price: 380,gender:'Male',age:38},{name: 'Lamela',price: 380,gender:'Male',age:38},{name: 'Gerrad',price: 380,gender:'Male',age:28},
        {name: 'Messi',price: 380,gender:'Male',age:38},{name: 'Neymar',price: 380,gender:'Male',age:18},{name: 'Pique',price: 380,gender:'Male',age:38},{name: 'Puyol',price: 380,gender:'Male',age:28},{name: 'Ramos',price: 380,gender:'Male',age:18}];
    
    
    
    
    $scope.value1 = 100;
    $scope.value2 = 100;
    $scope.value3 = 100;
    $scope.total = 300;
    $scope.pValue1 = 0.33;
    $scope.pValue2 = 0.33;
    $scope.pValue3 = 0.33;
    
    $scope.myFunc = function(){
    
        CommonService.setCommonValue($scope.myValue);
    }
    
    $scope.myValue = CommonService.getCommonValue();
    
    $scope.calculateValues = function(){
        
        $scope.total = 0;
        if($scope.value1 && $scope.value1!='')$scope.total = parseInt($scope.value1)
        if($scope.value2 && $scope.value2!='')$scope.total += parseInt($scope.value2)
        if($scope.value3 && $scope.value3!='')$scope.total += parseInt($scope.value3)
        
        if($scope.value1 && $scope.value1!='')
        {
            $scope.pValue1 = $scope.value1 / $scope.total;
        
        }
        else{
            $scope.pValue1 =0
        }
        
        if($scope.value2 && $scope.value2!='')
        {
            $scope.pValue2 = $scope.value2 / $scope.total;
        
        }
        else{
            $scope.pValue2 =0
        }
        
        if($scope.value3 && $scope.value3!='')
        {
            $scope.pValue3 = $scope.value3 / $scope.total;
        
        }
        else{
            $scope.pValue3 =0
        }
        
        
        
    }
    
    $scope.calculateValuesOnTotalChange = function(){
        
            /*var tot = 0;
            if($scope.value1 && $scope.value1!='')tot = parseInt($scope.value1)
            if($scope.value2 && $scope.value2!='')tot += parseInt($scope.value2)
            if($scope.value3 && $scope.value3!='')tot += parseInt($scope.value3)*/
        
            if($scope.value1 && $scope.value1!='')
            {
                $scope.value1 = $scope.pValue1 * parseInt($scope.total);
            }
        
        if($scope.value2 && $scope.value2!='')
            {
                $scope.value2 = $scope.pValue2 * parseInt($scope.total);
            }
        
        if($scope.value3 && $scope.value3!='')
            {
                $scope.value3 = $scope.pValue3 * parseInt($scope.total);
            }
        
        
        
    }
});

routerApp.service('CommonService',function(){

    var commonValue = '';
    
    this.getCommonValue = function(){
    
    return commonValue;
    
    }
    
     this.setCommonValue = function(value){
            
          commonValue = value;
    }

})

routerApp.controller('HomeController', function($scope,CommonService) {
    
    $scope.value1 = 100;
    $scope.value2 = 100;
    $scope.value3 = 100;
    $scope.total = 300;
    $scope.pValue1 = 0.33;
    $scope.pValue2 = 0.33;
    $scope.pValue3 = 0.33;
    
    $scope.myFunc = function(){
    
        CommonService.setCommonValue($scope.myValue);
    }
    
    $scope.myValue = CommonService.getCommonValue();
    
    $scope.calculateValues = function(){
        
        $scope.total = 0;
        if($scope.value1 && $scope.value1!='')$scope.total = parseInt($scope.value1)
        if($scope.value2 && $scope.value2!='')$scope.total += parseInt($scope.value2)
        if($scope.value3 && $scope.value3!='')$scope.total += parseInt($scope.value3)
        
        if($scope.value1 && $scope.value1!='')
        {
            $scope.pValue1 = $scope.value1 / $scope.total;
        
        }
        else{
            $scope.pValue1 =0
        }
        
        if($scope.value2 && $scope.value2!='')
        {
            $scope.pValue2 = $scope.value2 / $scope.total;
        
        }
        else{
            $scope.pValue2 =0
        }
        
        if($scope.value3 && $scope.value3!='')
        {
            $scope.pValue3 = $scope.value3 / $scope.total;
        
        }
        else{
            $scope.pValue3 =0
        }
        
        
        
    }
    
    $scope.calculateValuesOnTotalChange = function(){
        
            /*var tot = 0;
            if($scope.value1 && $scope.value1!='')tot = parseInt($scope.value1)
            if($scope.value2 && $scope.value2!='')tot += parseInt($scope.value2)
            if($scope.value3 && $scope.value3!='')tot += parseInt($scope.value3)*/
        
            if($scope.value1 && $scope.value1!='')
            {
                $scope.value1 = $scope.pValue1 * parseInt($scope.total);
            }
        
        if($scope.value2 && $scope.value2!='')
            {
                $scope.value2 = $scope.pValue2 * parseInt($scope.total);
            }
        
        if($scope.value3 && $scope.value3!='')
            {
                $scope.value3 = $scope.pValue3 * parseInt($scope.total);
            }
        
        
        
    }
    
});

routerApp.controller('AboutController', function($scope,CommonService) {
    
    $scope.homeTextValue = CommonService.getCommonValue();
    
});


routerApp.directive('curr',function(){
    return{

                restrict:'A',
                require:'ngModel',
                link: function($scope, elem, attr,ngModel){
                                    
                    
                    elem.on('change keyup', function (e) {
                        var dec_point='.';
                        var thousands_sep=',';
                        
                        var element = e.target;
                        var m = ngModel.$modelValue;
                        m = m.replace(',','');
                        m = m.replace('$','');
                        var parts = m.split('.');
                        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousands_sep);

                        element.value = '$' + parts.join(dec_point);
                        if(element.value == '$')element.value = '';
                        
                    });
                            
                    
                }
        }
});


routerApp.directive('phone',function(){


return{
    
restrict:'A',
require:'ngModel',
link: function($scope, elem, attr,ngModel){
    elem.on('change keyup', function (e) {
                var element = e.target;
                var m = ngModel.$modelValue;
                
                m = m.replace('(','');
                m = m.replace(')','');
                m = m.replace('-','');
                m = m.replace(' ','');
        
                if(m.length >= 3)
                {
                    var finalValue;
                    var first = "(" + m.slice(0,3) + ")";
                    var second;
                    var third;
                    finalValue = first;
                    
                    if(m.length > 3)
                    {
                       second =  m.slice(3,6);
                       finalValue = first + " " + second
                    }
                    
                    if(m.length > 6)
                    {
                       third = m.slice(6,m.length);
                        finalValue = first + " " + second + "-" + third;
                    }
                    element.value = finalValue;
                    
                    
                }
        else{
        element.value = ngModel.$modelValue;
        }
    });
}    
    
    
}



});
});
    



    



