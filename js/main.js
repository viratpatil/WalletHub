require.config({

    paths: {
        'domReady': 'domReady',
        'angular': 'http://code.angularjs.org/1.2.13/angular',
        "uiRouter": "https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.3.1/angular-ui-router.min",
        "uiAnimate": "https://ajax.googleapis.com/ajax/libs/angularjs/1.2.8/angular-animate",
        "jquery":"http://code.jquery.com/jquery-1.11.1.min",
        "jqueryAutoTab":'jquery.autotab.min'
       
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular': {
            exports: 'angular'
        },
        'uiRouter':{
            deps: ['angular']
        },
        'uiAnimate':{
            deps: ['angular']
        },
        
        'jqueryAutoTab':{
            deps:['jquery']   
        }
    },

    deps: [
        // kick start application... see bootstrap.js
        'bootstrap'
    ]
});
