
/*
 * GET home page.
 */


exports.view = function(req, res){
  var nameToShow = req.params.userName;
  if (nameToShow == undefined){
  	nameToShow = 'You';
  }
  console.log("name is " + nameToShow);
  res.render('index', {
  	'name': nameToShow,
  });
};
