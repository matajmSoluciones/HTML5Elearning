//sencillo ejemplo hola mundo al presionar un boton
window.addEventListener("load",function(){
  //buscamos en el DOM un nodo con la id "button1"
  var a=document.getElementById("button1");
  //añadimos un escuchador de eventos para la acción clic
  a.addEventListener("click",function(){
    //función callback anonima
    alert("hola mundo");
  });
});
