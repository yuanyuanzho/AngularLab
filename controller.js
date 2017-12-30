	var app = angular.module("angularApp",[]);
	app.controller("appController",function($scope){

		$scope.student = {
			firstName : "John",
			lastName : "Doe",
			fees : "200",

			marks : [   {name:"Physics", score:83},
						{name:"Chemistry", score:87},
						{name:"Maths", score:99},
						{name:"Biology", score:65},
						{name:"Art", score:78}
					   ],

			fullName : function(){
	 			return $scope.student.firstName + " " + $scope.student.lastName;
	 		}
	 	};

	 	

		$scope.studentFName = "John";
		$scope.studentLName = "Doe";			   
		$scope.studentEmail = "john.doe@abc.com" 

		$scope.count = 0;

		$scope.counter = function(){
			$scope.count++;
		}

		$scope.reset = function(){

			$scope.studentFName = "John";
			$scope.studentLName = "Doe";			   
			$scope.studentEmail = "john.doe@abc.com" 

		}

		$scope.call={state:['second','first','nothing','Never', 'Gonna', 'Give', 'You', 'Up']};

		$scope.whatClassIsIt= function(someValue){
         if(someValue=="first")
                return "ClassA"
         else if(someValue=="second")
             return "ClassB";
        else
             return "ClassC";
    	}

    	 $scope.items = [{
		      name: 'Misko',
		      title: 'Angular creator'
		    }, {
		      name: 'Igor',
		      title: 'Meetup master'
		    }, {
		      name: 'Vojta',
		      title: 'All-around superhero'
		    }]


	});