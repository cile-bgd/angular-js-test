angular.module("App",['main']);

angular.module("main",[]);

angular.module("main").controller("mainController",function($scope){
    const lib = {
        categories: ['Performance', 'Investments', 'Operations'],
        applets: [
          {
            name: 'Performance Snapshot',    
            categories: ['Performance']
          },
          {
            name: 'Commitment Widget',
            categories: ['Investments']
          },
          {
            name: 'CMS',
            categories: ['Investments', 'Performance' ]
          }
        ]
    };
    let performanceAppletCount = 0;
    let investmentsAppletCount = 0;
    let operationsAppletCount = 0;

    lib.applets.forEach(function(element) {
        for (i=0; i<element.categories.length; i++) {
            if (element.categories[i] === 'Performance') {
                performanceAppletCount += 1;
            } else if (element.categories[i] === 'Investments') {
                investmentsAppletCount += 1;
            } else if (element.categories[i] === 'Operations') {
                operationsAppletCount += 1;
            }
        }
    });

    class categories {
        constructor(category, value) {
            this.category = category;
            this.value = value;
        }
    }

    let categoriesArray = new Array();
    for (i=0; i<lib.categories.length; i++) {
        if (lib.categories[i] === 'Performance') {
            categoriesArray.push(new categories(lib.categories[i], performanceAppletCount));
        } else if (lib.categories[i] === 'Investments') {
            categoriesArray.push(new categories(lib.categories[i], investmentsAppletCount));
        } else if (lib.categories[i] === 'Operations') {
            categoriesArray.push(new categories(lib.categories[i], operationsAppletCount));
        }
    }

    $scope.categories = categoriesArray;

    //$scope.categories = lib.categories.sort();
    //$scope.performanceCount = performanceAppletCount;
    //$scope.investmentsCount = investmentsAppletCount;
    //$scope.operationsCount = operationsAppletCount;
});