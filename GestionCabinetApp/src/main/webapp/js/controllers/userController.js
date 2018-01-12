'use strict';
app.controller('userController', ['$scope', 'userService', function($scope, userService) {
    var self = this;
    self.user={id:null,firstName:"" , lastName:"" , email:""};
    self.usershow={id:null};
    self.users=[];
    $scope.showMe = false;
    self.getOneUser = function(id){
    	userService.getOne(id)
    	 .then(
                function(d) {
                     self.usershow = d;
                     console.log(self.usershow);
                },
                 function(errResponse){
                     console.error('Error while fetching Currencies');
                 }
        );
    };
    self.fetchAllUsers = function(){
    	userService.fetchAll()
            .then(
                         function(d) {
                              self.users = d;
                              
                         },
                          function(errResponse){
                              console.error('Error while fetching Currencies');
                          }
                 );
    };
    
    
      
    self.createUser = function(){
    	userService.create(self.user)
                .then(
                self.fetchAllUsers, 
                        function(errResponse){
                             console.error('Error while creating User.');
                        } 
            );
    };

   self.updateUser = function(user, id){
	   userService.update(user, id)
                .then(
                		self.fetchAllUsers, 
                        function(errResponse){
                             console.error('Error while updating User.');
                        } 
            );
    };

   self.deleteUser = function(id){
	   userService.delete(id)
                .then(
                		self.fetchAllUsers, 
                        function(errResponse){
                             console.error('Error while deleting user.');
                        } 
            );
    };

//    self.fetchAllUsers();
    
    self.update = function(){
    	self.updateUser(self.user, self.user.id);
    	self.reset();
    };
    
    self.add=function(){
    	alert('save');
    	if(self.user.id===null){
            console.log('Saving New user', self.user);
            self.createUser(self.user);
        }else{
            self.updateUser(self.user, self.user.id);
            console.log('user updated with id ', self.user.id);
        }
        self.reset();
    };
         
    self.edit = function(id){
        for(var i = 0; i < self.users.length; i++){
            if(self.users[i].id == id) {
               self.user = angular.copy(self.users[i]);
               break;
            }
        }
    };
         
    self.remove = function(id){
        console.log('id to be deleted', id);
        self.deleteUser(id);
    };

     self.show=function(id){
    	 self.getOneUser(id);
    	 $scope.showMe = !$scope.showMe;
     };
     
    self.reset = function(){
        self.user={id:null,firstName:'',lastName:'',email:''};
        $scope.myForm.$setPristine(); //reset Form
    };

}]);

