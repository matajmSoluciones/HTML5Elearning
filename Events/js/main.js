//sencillo ejemplo hola mundo al presionar un boton
window.addEventListener("load",function(){
  //buscamos en el DOM un nodo con la id "button1"
  var a=document.getElementById("button1");
  var b=document.getElementById("button2");
  var c=document.getElementById("button2");
  //añadimos un escuchador de eventos para la acción clic
  a.addEventListener("click",function(){
    //función callback anonima
    alert("hola mundo");
  });
  b.addEventListener("click",function(){
    //imita desde el tiempo de ejecución el evento click disparando el Evento de a
    a.click();
  });
  c.addEventListener("click",function(){
    //creamos un nuevo evento a disparar
    var clic=new Event("click",{"bubbles":false,"cancelable":false});
    //disparamos el evento en el objeto b que a su vez dispara  a
    b.dispatchEvent(clic);
    // la diferencia entre .click() y .dispatchEvent(Event) es que el primero ejecuta el proceso normal del navegador de hacer clic y dispatchEvent dispara un evento personalizado que no imita el proceso normal
  })
});
