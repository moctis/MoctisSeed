getScript = function($src) {
  var imported = document.createElement('script');
  imported.src = $src;
  document.head.appendChild(imported);
}
  
document.addEventListener("DOMContentLoaded", function() {
   document.writeln("Hello, World");
  getScript("loader.js");
});
  


