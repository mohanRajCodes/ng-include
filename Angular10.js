/**
 *   ng-include 
 */


var myapp = angular.module("myModule",[])
		           .controller("myController",function($scope){
		        	 
		        	   var cricketers = [
		        		   {
		        			   name:"Vijay Shankar",
		        			   Bat:"Right hand Middle order",
		        			   Bowl:"Right hand medium"
		        		   },
		        		   {
		        			   name:"Hardhik pandya",
		        			   Bat:"Right hand Lower Middle order",
		        			   Bowl:"Right hand fast medium"
		        		   },
		        		   {
		        			   name:"Shivam dubey",
		        			   Bat:"Left hand Lower Middle order",
		        			   Bowl:"Left hand fast medium"
		        		   }
		        	   ];
		        	   
		        	   $scope.cricketers = cricketers;
		        	   $scope.selectBy = "table.html";
		        	   
		           });
