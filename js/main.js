document.getElementById("calcular").addEventListener("click", function () {
    // Obtener los valores de los inputs
    var tiempoCarreraInput = document.getElementById("tiempo-carrera").value;
    var tiempoVueltaInput = document.getElementById("tiempo-vuelta").value;
    var litrosVuelta = parseFloat(document.getElementById("litros-vuelta").value);


    // Calcular el resultado



	// Mostrar el resultado en el div
    var tiempoCarreraEnSegundos = convertirFormatoTiempoASegundos(tiempoCarreraInput);
    var tiempoVueltaEnSegundos2 = convertirFormatoTiempoASegundos2(tiempoVueltaInput);
    var litrosTotal = 0.00;
    if (tiempoCarreraEnSegundos !== null && tiempoVueltaEnSegundos2 !== null && litrosVuelta) {
        litrosTotal = ((tiempoCarreraEnSegundos / tiempoVueltaEnSegundos2) * litrosVuelta) + (3 * litrosVuelta);
        document.querySelector(".resultado").innerHTML = litrosTotal.toFixed(2); 

    }
    else{
        document.querySelector(".resultado").innerHTML = "Error"; 

    }

    

    
	// Convertir los formatos de tiempo a segundos
    
});


function convertirFormatoTiempoASegundos(tiempo) {
    var partes = tiempo.split('.');
    if (partes.length < 2 || partes[1].length !== 2 || parseInt(partes[1]) >= 60) {
        alert("Introducir el tiempo en formato hh.mm ej: 1.00 (60m)");
        return null;
    }

    
    var horas = partes.length > 1 ? parseInt(partes[0])*3600 : 0;
    var minutos = parseInt(partes[partes.length - 1])* 60;

    return horas + minutos;
}

function convertirFormatoTiempoASegundos2(tiempo) {
    var partes = tiempo.split('.');
    if (partes.length < 2 || partes[1].length !== 2 || parseInt(partes[1]) >= 60) {
        alert("Introducir el tiempo en formato mm.ss ej: 1.01 (61s)");
        return null;
    }
    
    var minutos = partes.length > 1 ? parseInt(partes[0])*60 : 0;
    var segundos = parseInt(partes[partes.length - 1]);

    return minutos + segundos;
}

