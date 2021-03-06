"use strict";

angular.module("main").controller("ServiceSampleController", ["$scope", "notify", function ($scope, notify) {

	$scope.message = "enter message here";

	$scope.callNotify = function (msg) {

		notify(msg);
	};
}]);

angular.module("main").factory("notify", ["$window", function (win) {

	var messages = [];
	var messageLimit = 3;

	return function (msg) {

		messages.push(msg);

		if (messages.length === messageLimit) {

			win.alert(messages.join("\n"));
			messages = [];
		}
	};
}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL25vdGlmeS5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwibm90aWZ5IiwibWVzc2FnZSIsImNhbGxOb3RpZnkiLCJtc2ciLCJmYWN0b3J5Iiwid2luIiwibWVzc2FnZXMiLCJtZXNzYWdlTGltaXQiLCJwdXNoIiwibGVuZ3RoIiwiYWxlcnQiLCJqb2luIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsUUFBUUMsTUFBUixDQUFlLE1BQWYsRUFBdUJDLFVBQXZCLENBQWtDLHlCQUFsQyxFQUNDLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsVUFBVUMsTUFBVixFQUFrQkMsTUFBbEIsRUFBMEI7O0FBRTlDRCxRQUFPRSxPQUFQLEdBQWlCLG9CQUFqQjs7QUFFQUYsUUFBT0csVUFBUCxHQUFvQixVQUFVQyxHQUFWLEVBQWU7O0FBRWxDSCxTQUFPRyxHQUFQO0FBRUEsRUFKRDtBQU1BLENBVkQsQ0FERDs7QUFhQVAsUUFBUUMsTUFBUixDQUFlLE1BQWYsRUFDRU8sT0FERixDQUNVLFFBRFYsRUFDb0IsQ0FBQyxTQUFELEVBQVksVUFBVUMsR0FBVixFQUFlOztBQUU3QyxLQUFJQyxXQUFXLEVBQWY7QUFDQSxLQUFNQyxlQUFlLENBQXJCOztBQUVBLFFBQU8sVUFBVUosR0FBVixFQUFlOztBQUVyQkcsV0FBU0UsSUFBVCxDQUFjTCxHQUFkOztBQUVBLE1BQUlHLFNBQVNHLE1BQVQsS0FBb0JGLFlBQXhCLEVBQXNDOztBQUVyQ0YsT0FBSUssS0FBSixDQUFVSixTQUFTSyxJQUFULENBQWMsSUFBZCxDQUFWO0FBQ0FMLGNBQVcsRUFBWDtBQUVBO0FBRUQsRUFYRDtBQWFBLENBbEJrQixDQURwQiIsImZpbGUiOiJzZXJ2aWNlcy9ub3RpZnkuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5hbmd1bGFyLm1vZHVsZShcIm1haW5cIikuY29udHJvbGxlcihcIlNlcnZpY2VTYW1wbGVDb250cm9sbGVyXCIsXG5cdFtcIiRzY29wZVwiLCBcIm5vdGlmeVwiLCBmdW5jdGlvbiAoJHNjb3BlLCBub3RpZnkpIHtcblx0XG5cdFx0JHNjb3BlLm1lc3NhZ2UgPSBcImVudGVyIG1lc3NhZ2UgaGVyZVwiO1xuXHRcdFxuXHRcdCRzY29wZS5jYWxsTm90aWZ5ID0gZnVuY3Rpb24gKG1zZykge1xuXHRcdFx0XG5cdFx0XHRub3RpZnkobXNnKTtcblx0XHRcdFxuXHRcdH07XG5cdFx0XG5cdH1dKTtcblxuYW5ndWxhci5tb2R1bGUoXCJtYWluXCIpXG5cdC5mYWN0b3J5KFwibm90aWZ5XCIsIFtcIiR3aW5kb3dcIiwgZnVuY3Rpb24gKHdpbikge1xuXHRcdFxuXHRcdGxldCBtZXNzYWdlcyA9IFtdO1xuXHRcdGNvbnN0IG1lc3NhZ2VMaW1pdCA9IDM7XG5cdFx0XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIChtc2cpIHtcblx0XHRcdFxuXHRcdFx0bWVzc2FnZXMucHVzaChtc2cpO1xuXHRcdFx0XG5cdFx0XHRpZiAobWVzc2FnZXMubGVuZ3RoID09PSBtZXNzYWdlTGltaXQpIHtcblx0XHRcdFx0XG5cdFx0XHRcdHdpbi5hbGVydChtZXNzYWdlcy5qb2luKFwiXFxuXCIpKTtcblx0XHRcdFx0bWVzc2FnZXMgPSBbXTtcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9O1xuXHRcdFxuXHR9XSk7XG5cblxuIl19
