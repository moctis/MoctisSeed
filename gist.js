// Gist loader
gist = function(usr,file,callback) {
  var
  url = 'https://rawgit.com/'+usr+'/raw/'+file;
  seed(url, callback);
}
