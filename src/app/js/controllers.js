'use strict';

/* Controllers */


function TimesheetController($scope) {
  $scope.today = new Date();
  $scope.timeSheet = [{
	'date':'20130101',
	'entry':'09:00',
	'out':'18:00',
	'launchTime':60,
	'description':'Description of daily tasks',
	'hours':'08:00',
	'extra':'00:00',
	'total':'08:00',
	'isPaid':false
	},
	{
	'date':'20130101',
	'entry':'09:00',
	'out':'18:00',
	'launchTime':60,
	'description':'Description of daily tasks',
	'hours':'08:00',
	'extra':'00:00',
	'total':'08:00',
	'isPaid':false
	},
	{
	'date':'20130101',
	'entry':'09:00',
	'out':'18:00',
	'launchTime':60,
	'description':'Description of daily tasks',
	'hours':'08:00',
	'extra':'00:00',
	'total':'08:00',
	'isPaid':false
	},
	{
	'date':'20130101',
	'entry':'09:00',
	'out':'18:00',
	'launchTime':60,
	'description':'Description of daily tasks',
	'hours':'08:00',
	'extra':'00:00',
	'total':'08:00',
	'isPaid':false
	}]
}
//TimesheetController.$inject = ['$scope'];

function EditTimeController($scope){
  $scope.time = {
	'date':'20130101',
	'entry':'09:00',
	'out':'18:00',
	'launchTime':60,
	'description':'Description of daily tasks',
	'hours':'08:00',
	'extra':'00:00',
	'total':'08:00',
	'isPaid':false
	};
  $scope.save = function(){
    alert('save');
  }
  
  $scope.back = function(){
    alert('back');
  }
  
  $scope.delete = function(){
    alert('delete');
  }
}


