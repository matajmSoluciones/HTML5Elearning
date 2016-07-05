#Javascript
Este lenguaje similar a lenguaje c corresponde ha alto nivel basado en interprete y su desarrollo es flexible en la semantica de la programación.
Ha diferencia de otros lenguajes el ; no es obligatorio, no es necesario declarar el tipo de variable, ni el tamaño y puede cambiar la estructura del dato en tiempo de ejecución.

##Declarar una variable
En javascript no es necesario declarar la variable aunque se recomienda con solo usar un nombre de variable que empieze por letra se asigna como variables globales.
La palabra para declarar una variable es var, let o const dependiendo del objetivo de dicha.
##Escope
En programación un escope o globalización de variable es la frontera que alcanza la variable y su tiempo de vida, en javascript la variable es caducada al dejarse de usar dentro de su frontera, en el caso de la frontera se presenta los siguientes casos:

      //forma global de declarar una variable dentro del window desde cualquier parte del codigo
      window.variable=valor;
      //declarar una variable global desde el inicio del codigo
      var variable=valor;
      function a(){
        // declarar una variable privada pertenece solo a la función
        var valor1=0;
        // si declaramos con la palabra var una variable existente global aniquilamos su variable globar y pasa a ser privada en el área seleccionada conocido como recolección de basura
        var variable=2;
      }
      
      //Una variable puede cambior el tipo de valor en tiempo de ejecución
      variable="hola" //string
      variable=2.5 //flotante
      variable 2E-1 //numero cientifico
      variable=false //booleano
      variable=[] //array
      variable =new Array(2) //array con dos elementos nulos definidos
      variable ={} //json
      variable ={nombre:"pedro"} //json con atributos definidos
      
##window
El window es la maxima jerarquia que representa la ventana que se está trabajando en el navegador posee todos los metodos y atributos necesarios para procesar la Web.
## navigator
Legalmente esta debería ser la máxima jerarquia pero es un nodo de window, es la representación del navegador y el enlace entre las funciones básicas del sistema operativo y del navegador web se puede acceder en el directamente con navigator o window.navigator
##document
Perteneciente a window es un nodo hermano de navigator representa el Document Manipulation Object(DOM), este es el interprete de la sintaxis HTML se encarga de generar la vista de interfaz de cada elemento y su funcionalidad base de allí interpreta el texto plano a nodos y vertices en pantalla.
  El document nos permite manipular este interprete a conveniencia para crear, modificar, buscar y eliminar (CRUD) los nodos del HTML y desarrollar funciones complejas en el DOM
  
A medida que se adentren en el tutorial se irá viendo con mayor complejidad estos elementos  
