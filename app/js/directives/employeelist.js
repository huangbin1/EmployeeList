module.exports = function () {
  var link = function (scope, element, attr) {
    scope.list = [{
      name: 'Summer',
      info: 'Summer info',
      foldFlag: false,
      popInfo: 'Summer popInfo',
    }, {
      name: 'Daniel',
      info: 'Daniel info',
      foldFlag: false,
      popInfo: 'Daniel popInfo',
    }, {
      name: 'Sunny',
      info: 'Sunny info',
      foldFlag: false,
      popInfo: 'Sunny popInfo',
    }, {
      name: 'Gary',
      info: 'Gary info',
      foldFlag: false,
      popInfo: 'Gary popInfo',
    }];
    scope.pop = function (x) {
      alert(x);
    };
  };

  return {
    templateUrl: './views/employeelist.html',
    replace: true,
    restrict: 'E',

    link: link
  };
};