// Add your code here
let numeros = [6, 5, -2, 1, 19];
console.log('el arreglo original ' + numeros);

let mayor = numeros.sort(function (prev, next) {
  return prev - next;
});

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

let max = myArrayMax(mayor);
let min = myArrayMin(mayor);

function faltante(mayor) {
  for (let i = 0; i < mayor.length; i++) {
    if (mayor[i] == min) {
      min++;
      return min;
    }
  }
}

let numeroFalta = faltante(mayor);

function arrancar(numeroFalta, mayor, max, min) {
  console.log('Arreglo Ordenado ' + mayor);
  console.log("no Existe "+numeroFalta);
  console.log('El Máximo es ' + max);
  console.log('El Mínimo es ' + (min - 1));
  document.getElementById("demo").innerHTML = mayor;
  document.getElementById("numm").innerHTML = numeroFalta;
  
}

arrancar(numeroFalta, mayor, max, min);
