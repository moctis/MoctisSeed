getScript = function($src) {
  var imported = document.createElement('script');
  imported.src = $src;
  document.head.appendChild(imported);
}
  
(function() {
  document.writeln("Hello, World");
  getScript("loader.js");
})();


