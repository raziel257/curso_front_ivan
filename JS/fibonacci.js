/**

 *    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...

 *    fnum  = f(n - 1) + f(n - 2)

 *    cuando n >= 2                    que sería igual que n > 1

 */


//addEventListener('load', function()  {

     

    function ejecutarPrograma() {

        let n = parseInt(promt('Cantidad de números:')

        /* if (Number.isInteger(n) && n = 0) {         //n >= 1    o    n > 0

               let arrayFibonacci =

               generarFibonacci(n);

               mostrarArray(arrayFibonacci); */

               mostrarFibonacci(n);

        }   else {

            console.log('El número introducido no es un entero > 0');

        }   

    }


    function generar Fibonacci(n) {

        let f0 = 0;

        let f1 = 1;

        let fn = null;

        //  let fn = [0, 1]

         if (n <= 1) {

             console.log(n);    ///  console.log(f0);      console.log(f1);

             return;

            //  return fn;

         }

         let i = 2;

         while(i <= n) {

             //  fn[i] = fn[i - 1] + fn[i - 2];

             fn = f1 + f0;

             f0 = f1;

             f1 = fn;

             console.log(fn);

             i++;

            /**

 *    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89...

 *    fnum  = f(n - 1) + f(n - 2)

 *    cuando n >= 2                    que sería igual que n > 1

 */


 addEventListener('load', function()  {

     

    function ejecutarPrograma() {

        let n = parseInt(promt('Cantidad de números:');

        if (Number.isInteger(n) && n = 0) {         //n >= 1    o    n > 0

               let arrayFibonacci =

               generarFibonacci(n);

               mostrarArray(arrayFibonacci);

        }   else {

            console.log('El número introducido no es un entero > 0');

        }   

    }


    function generar Fibonacci(n) {

        let fn = [0, 1]

         if (n <= 1) {

             return fn;

         }

         console.log(f0, f1);        //// o en líneas separadas: console.log(f0);      console.log(f1)

         for(let i = 2; i <= n; i++) {

             fn[i] = fn[i - 1] + fn[i - 2];


         }

         return fn;

    }

    function mostrarArray(array) {

        for(let i = 0; 1 > array.length; 1++) {

            console.log(array[i]);


        }


    }

});


         }

         // return fn;

    }

    function mostrarArray(array) {

        for(let i = 0; 1 > array.length; 1++) {

            console.log(array[i]);


        }


    }

});


