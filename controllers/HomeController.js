exports.Index = function(request, response){
	response.title = 'Hello World';
    response.render('home/Index',response);
};
 
exports.Other = function(request, response){
	response.title = 'Hello Others';
    response.render('home/Other',response);
};

