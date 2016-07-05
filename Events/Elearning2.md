#Continuación programación orientado a eventos
##Eventos Personalizados

Muchas veces los programadores sentimos la necesidad de ejecutar una acción al completar ciertas acciones, generalmente para ahorrar lineas de codigo o en caso tal cuando queremos compartir información con otros modulos.
Los eventos personalizados son técnicas o trucos habiles que se desarrollan para imitar el comportamiento de un evento, ya anteriormente hablamos del funcionamiento de un evento de interfaz es momento de entender como funciona un evento paso a paso.
Un evento debe tener un disparo para poder activar una llamada, eso lo explicamos anteriormente, por lo tanto si tenemos la siguiente función:
        
        function saludo(){
          console.log("hola");
        }
        
Y necesitamos ejecutar una función al culminar este proceso:
    
    function saludo(){
      console.log("hola");
      despido();
    }
    function despido(){
      console.log("adios");
    }
    
Esto hay que tener claro que se puede interpretar como un disparo de un evento en la programación estructurada, podemos observar que tengo la función llamada que es despido y se ejecuta cuando culmina el proceso de la función saludo que es la función disparo.

###¿Por qué es util esto?
Se ve inecesario este proceso que pasarias si deseas ejecutar la misma función n veces y lo escribes multiple veces, repetir tediosamente el mismo codigo consumiria mucha lineas de codigos y esfuerzo, por ello ahorra tiempo de codificación.

    function saludo(){
      console.log("hola");
      adios();
    }
    function despido(){
      console.log("adios");
      saludo();
    }
    saludo();
  
Por ejemplo este codigo es un bucle infinito donde la función saludo dispara la función despido y luego dispara saludo.
OJO este es un error muy comun en programación que es considerado una amenaza para el procesador, al no tener un fin absoluto, pero muestra como una acción puede ser ejecutada por otra y viseversa.

Pero esto no es considerado programación orientada a eventos, cuando involucramos un objeto encargado de ejecutar las acciones y esperar la completación de la acción allí hablamos de eventos.

Un evento personalizado involucra crear toda la programación que simule los eventos de interfaz pero con nombres personalizados y enfocados a áreas del código en la que necesite definirse una acción.
Continuando con el ejemplo anterior
  
    //creamos una función de escucha
    element._Events=[];
    //añadidor de escuchadores de eventos
    element.addEventListener=function(method,callback){
      //method es el nombre de la propiedad que esperará ser ejecutada y callback es la función  a ejecutar
      var event={
        method:method,
        callback:callback
      };
      this._Events.push(event);
    }
    //eliminador de escuchadores de eventos
    element.removeEventListener=function(method,callback){
      for(var i=0,n=this._Events.length;i<n;i++){
        //comparamos que en el bucle el method y la función concuerde con el seleccionado
        if(this.Events[i].method==method && this.Events[i].callback==callback){
          //eliminamos el evento desde raiz sin quitar el indice
          delete(this.Events[i]);
        }
      }
    }
    //disparadores de eventos
    element.dispatchEvent=function(method){
      for(var i=0,n=this._Events.length;i<n;i++){
        if(this._Events[i].method==method){
          this._Events[i].callback();
        }
      }
    }
    
Si observan el siguiente codigo es una técnica para introducir eventos personalizados a objetos que no lo posean, para ayudar a enter mejor el comportamiento de un evento normal y uno personalizado utilizamos los mismos nombres del lenguaje nativo.
##addEventListener/removeEventListener (Escuchador de Eventos)
EventListener es un escuchador de eventos en javascript nativo, los escuchadores de eventos son metodos o funciones que permiten asociar a un elemento una serie de eventos a ejecutar al ser disparados.
Si observan el evento anterior se usa un arreglo json para llevar un registro de todos los eventos pertenecientes al elemento creado, ahora este es el mismo comportamiento nativo.
add añadira elementos al evento / remove eliminara elementos al evento
## dispatchEvent (Disparador de Eventos)
Ya mencionado anteriormente podemos observar en el codigo anterior que se ejecuta un bucle donde recorre todos los eventos pertenecientes a un elemento y ejecuta aquellos que cumplan el rol añadidos por el escuchador de eventos.
Observece que en el mismo orden añadido, se ejecutará cada uno de los callback, así mismo funciona de manera nativa.

Es claro saber que podemos añadir multiples eventos con el mismo metodo ejecutadas en orden de inserción, y al remover un evento debe coincidir la función y el nombre del metodo para ser eliminado, de lo contrario la acción se ejecutará mas no eliminará el evento.
Esto error es muy común en todo programador experimentado o novato un evento no es facilmente manejable.

Ahora bien debemos ver los eventos como una lista de pasos a completar para pasar a la siguiente función.
En javascript tenemos la posibilidad de añadir, eliminar y disparar eventos de cualquier tipo nativamente a elementos del DOM, incluyendo elementos externos a ellos WORKER y SOCKET

Un ejemplo claro de programación personalizada en javascript
  
    //añadimos un escuchador de eventos de interfaz load
    window.addEventListener("load",function(){
      //creamos un evento personalizado llamado start
      var l=new Event("start",{buble:false,prevented:false});
      //disparamos el evento start creado
      window.dispatchEvent(l);
    });
    //añadimos un escuchador de eventos personalizado start
    window.addEventListener("start",function(){
      alert("ejecutando un evento personalizado");
    });
  
  
Este ejemplo sencillo muestra la similitud nativa de aplicar eventos personalizado, en la lista de eventos de interfaz no existe start, creo el evento y lo disparo luego se ejecuta en la siguiente escucha.

Fin del Tutorial....
La siguiente tarea es investigar sobre EventListener en javascript, MDN (Mozilla Developer Network) propone un catalogo de referencias para todos los metodos referentes a ella.
En la siguiente url https://developer.mozilla.org/es/docs/Web/API/EventListener pueden observar una lista de metodos.
