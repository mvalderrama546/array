let numeroOpcion = prompt("Digite el número del ejercicio, del 1 al 3");


switch (numeroOpcion) {

    case "1":
        const randomNumbers = generarNumeroRandom(1, 10, 10);

        function generarNumeroRandom(min, max, count) {
            // Crear vacío el arreglo
            const numbers = [];
            for (let i = 0; i < count; i++) {

                const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

                numbers.push(randomNumber);
            }

            console.log(numbers);

        }
        break;

    case "2":
        //Ejercicio 2
        function convertStringToArray(string) {
            const words = string.split(",");

            const array = [];

            for (const word of words) {
                array.push(word);
            }

            return array;
        }

        const input = prompt("Digite los números separados por comas ',' : ");

        const array = convertStringToArray(input);

        console.log(array);

        break;
    case "3":
        //Ejercicio 3

        const inputArray = prompt("Digite los números separados por comas ',' : ");

        buscarNumeros(inputArray);

        function buscarNumeros(stringArray) {

            const numbers = stringArray.split(',');
                
            numbers.sort();

            return numbers;
            
        }

        console.log("El número menor es:", inputArray[0]);

        console.log("El número mayor es:", inputArray[inputArray.length - 1]);

        break;

    default:
        alert("Opción no válida")
        break;
}