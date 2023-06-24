/*1.- Se tiene una cola de colores y se tiene que dividir en dos colas, respetando el orden y alternando a partir de su índice. los pares en una y los nones en otra.
Cola original: [ amarillo, rosa, rojo, verde, azul, negro, morado, blanco]
Cola 1: [ amarillo, rojo, azul, morado]
Cola 2: [rosa, verde, negro, blanco] */


function dividirCola(cola) {
    var cola1 = [];
    var cola2 = [];
  
    for (var i = 0; i < cola.length; i++) {
      if (i % 2 === 0) {
        cola1.push(cola[i]);
      } else {
        cola2.push(cola[i]);
      }
    }
  
    return [cola1, cola2];
  }
  
  
  var colaOriginal = ['amarillo', 'rosa', 'rojo', 'verde', 'azul', 'negro', 'morado', 'blanco'];
  var colasDivididas = dividirCola(colaOriginal);
  var cola1 = colasDivididas[0];
  var cola2 = colasDivididas[1];
  
  console.log('Cola original:', colaOriginal);
  console.log('Cola 1:', cola1);
  console.log('Cola 2:', cola2);
  
  /*2.- Se tiene una cola en la cual se han repartido tickets con el orden de atención. Sin embargo, llegada la hora de inicio hay muchos “colados”, es por esto que se le ordena al vigilante que retire a todos aquellos que no tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola y la cola final.
Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve a encolar, si no se retira. */

  
  function retirarSinTicket(cola) {
    var elementosRetirados = [];
    var colaFinal = [];
  
    while (cola.length > 0) {
      var elemento = cola.shift();
  
      if (elemento.ticket === true) {
        colaFinal.push(elemento);
      } else {
        elementosRetirados.push(elemento);
      }
    }
  
    return {
      elementosRetirados: elementosRetirados,
      colaFinal: colaFinal
    };
  }
  
  // Cola inicial
  var colaInicial = [
    { user: 'User1', ticket: true },
    { user: 'User2', ticket: true },
    { user: 'User3', ticket: false },
    { user: 'User4', ticket: true },
    { user: 'User5', ticket: false },
    { user: 'User6', ticket: false },
    { user: 'User7', ticket: true },
    { user: 'User8', ticket: true },
    { user: 'User9', ticket: true },
    { user: 'User10', ticket: false },
    { user: 'User11', ticket: true }
  ];
  
  // Mostrar la cola inicial
  console.log('Cola inicial:', colaInicial);
  
  // Retirar los elementos sin ticket
  var resultado = retirarSinTicket(colaInicial);
  var elementosRetirados = resultado.elementosRetirados;
  var colaFinal = resultado.colaFinal;
  
  // Mostrar los elementos retirados y la cola final
  console.log('Elementos retirados:', elementosRetirados);
  console.log('Cola final:', colaFinal);
  