/**
 * 
 */

'use strict';

app.factory('userService', ['$http', '$q', function($http, $q){
	 
    return {
    	    getOne: function(id){
    	    	return $http.get("/user/findOne/"+id)
    	    	.then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while fetching User');
                                        return $q.reject(errResponse);
                                    }
    	    	);
    	    },
            fetchAll: function() {
                    return $http.get("/user/getAll")
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while fetching Users');
                                        return $q.reject(errResponse);
                                    }
                            );
            },
            
            
             
            create: function(user){
                    return $http.post("/user/save", user)
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while creating user');
                                        return $q.reject(errResponse);
                                    }
                            );
            },
             
            update: function(user, id){
                    return $http.put("/user/update/"+id, user)
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while updating user');
                                        return $q.reject(errResponse);
                                    }
                            );
            },
             
            delete: function(id){
                    return $http.delete("/user/delete/"+id)
                            .then(
                                    function(response){
                                        return response.data;
                                    }, 
                                    function(errResponse){
                                        console.error('Error while deleting user');
                                        return $q.reject(errResponse);
                                    }
                            );
            }
         
    };
    
   
    
 
}]);