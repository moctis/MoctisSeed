(function(){
  seed('seed.css', null, 'link');
  (function(){
    var doc = document,
    el = doc.createElement("div");
    el.innerHTML = "Hello World";
    el.className = "seed";
    doc.getElementsByTagName('body')[0].appendChild(el);
  })();
})();
