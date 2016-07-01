#Bienvenidos al primer contenido de la capacitación
Por ahora ya tienen los fundamentos básicos de la programación pero ahora veremos un avance de lo que son paradigmas de programación a eventos en Javascript y luego avanzaremos a diferentes lenguajes de programación para ello crearemos un pequeño ejercicio de mostrar un mensaje al presionar clic en un boton.
#Programación Orientada a Eventos
Es el estudio de la ejecución de una acción y respuesta ante la situación presentada, o también podemos definirla como el analisis de la escucha y llamada de una acción.
Un ejemplo muy claro de ello es la comunicación entre los seres vivos. Tenemos una serie de elementos que definen la comunicación:
- El emisor
- El receptor
- El canal (ambiente)
- Código (lenguaje)

En programación esto se ve claramente en los eventos donde se ejecuta un push (empuje) al sistema para notificar de una acción.
Un evento (Event) en programación es la llamada de una función cuando se completa otra acción, por ejemplo al presionar clic en un botón al terminar de soltar el mouse se ejecuta la llamada.

Una llamada (Callback) es la función que se ejecuta durante la ejecución del evento. Generalmente se realiza un enlace(puntero) entre la llamada y el final de la acción.

Un Disparo (Dispatch) es la acción de ejecutar la llamada realizada por otra función.

Es confuso entender estos conceptos al principio pero en la práctica se observará con mas calma.

    var a=document.getElementById("boton");
    //addEventListener es la función evento que se utilizará para ejecutarse ante un disparo
    a.addEventListener("click",clickea);
    //función callback será disparada al usuario hacer clic en el botón.
    function clickea(){
      alert("Me diste clic");
    }
Es muy comun ver otros tipos de eventos en javascript onclick es la versión antigua de addEventListener("click",callback);

Recomendamos addEventListener por su dinamica a la hora de ejecutar eventos.

##¿Ahora que eventos podemos ejecutar en un codigo?

Existen dos tipos de eventos en POE(programación Orientada a Eventos):

-De interfaz
-Definidas por el usuario (programador)
Los eventos de interfaz son genericos en los diferentes lenguajes de programación, entre ellos tenemos:
- click ( hacer clic a un elemento)
- mousedown (al presionar el mouse sobre un elemento)
- mouseup(al soltar el mouse sobre elemento)
- mousemove(al mover el mouse sobre un elemento)
- resize (cuando se modifica un elemento)
- load(al cargarse el elemento)
- unload (al cerrarse un elemento)
- beforeunload(Hacer antes de cerrar un elemento (La mayoría de los lenguajes lo aceptan))
- focus(ejecutar al obtener el foco un elemento)
- blur(al perder el foco un elemento)
- change(cuando el usuario modifica un elemento de entrada)
- abort(cuando una acción es cancelada o denegada)
- keydown(cuando se presiona una tecla sobre un elemento)
- keypress(cuando mantiene una tecla presionada sobre un elemento)
- keyup(cuando suelta la tecla presionada sobre un elemento)
- scroll (cuando se mueve el scroll o la barra de desplazamiento de un elemento)

javascript posee una serie de eventos de interfaz que no son comunes o estandar en otros lenguajes de programación:

- volumechange (cambio del volumen de un HTMLAudioElement ó HTMLVideoElement)
- userproximity (cuando el usuario se acerca al sensor de aproximidad del dispositivo)
- submit (cuando el usuario envia un HTMLFormElement, cuando se envia un formulario)
- storage (cuando se almacena información en el DOM)
- loadstart (Cuando se carga por primera vez un elemento window)
