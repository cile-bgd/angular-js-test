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
    const performanceApplet = [];
    const investmentsApplet = [];
    const operationsApplet = [];
    let performanceAppletCount = 0;
    let investmentsAppletCount = 0;
    let operationsAppletCount = 0;

    lib.applets.forEach(function(element) {
        for (i=0; i<element.categories.length; i++) {
            if (element.categories[i] === 'Performance') {
                performanceAppletCount += 1;
                performanceApplet.push(element.name);
            } else if (element.categories[i] === 'Investments') {
                investmentsAppletCount += 1;
                investmentsApplet.push(element.name);
            } else if (element.categories[i] === 'Operations') {
                operationsAppletCount += 1;
                operationsApplet.push(element.name);
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
    $scope.activeCategory = $scope.categories[0];
    $scope.applets = showFirstApplet(0);

    $scope.showApplets = function(element) {
        // set active list-item
        const returnIndex = $scope.categories.indexOf(element);
        $scope.activeCategory = $scope.categories[returnIndex];

        // clear existing displayed applets
        $scope.applets = null;

        // display applets that belong to that category
        if (element.category === 'Performance') {
            $scope.applets = performanceApplet;
        } else if (element.category === 'Investments') {
            $scope.applets = investmentsApplet;
        } else if (element.category === 'Operations') {
            $scope.applets = operationsApplet;
        }
    }

    function showFirstApplet (index) {
        const categoryName = $scope.activeCategory.category;
        switch (categoryName) {
            case 'Performance':
                return performanceApplet;
                break;
            case 'Investments':
                return investmentsApplet;
                break;
            case 'Operations':
                return operationsApplet;
                break;
            default:
                console.error(`Uuups!`);
                return null;
        }
    }
});