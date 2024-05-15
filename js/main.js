let btnPorQue = document.getElementById("btnPorQue")
let btnPorQue2 = document.getElementById("btnPorQue2")
let btnOptimizar = document.getElementById("btnOptimizar")
let btnOptimizar2 = document.getElementById("btnOptimizar2")
let btnTiposEnt = document.getElementById("btnTiposEnt")
let btnTiposEnt2 = document.getElementById("btnTiposEnt2")

let tarjetaPorque = document.getElementById("tarjetaPorQue")
let tarjetaPorque2 = document.getElementById("tarjetaPorQue2")
let tarjetaTipos = document.getElementById("tarjetaTipos")
let tarjetaTipos2 = document.getElementById("tarjetaTipos2")
let tarjetaOpt = document.getElementById("tarjetaOpt")
let tarjetaOpt2 = document.getElementById("tarjetaOpt2")



btnPorQue.addEventListener("click", function () {
    tarjetaPorque.classList.add("hidden")
    tarjetaPorQue.classList.remove("visible")
    setTimeout(function () {
        tarjetaPorQue2.classList.remove("hidden")
        tarjetaPorQue2.classList.add("visible")
    }, 0);
});

btnPorQue2.addEventListener("click", function () {
    tarjetaPorQue2.classList.add("hidden")
    tarjetaPorQue2.classList.remove("visible")
    setTimeout(function () {
        tarjetaPorQue.classList.remove("hidden")
        tarjetaPorQue.classList.add("visible")
    }, 0);
});

//////////////////////////////////////////////////////

btnTiposEnt.addEventListener("click", function () {
    tarjetaTipos.classList.add("hidden")
    tarjetaTipos.classList.remove("visible")
    setTimeout(function () {
        tarjetaTipos2.classList.remove("hidden")
        tarjetaTipos2.classList.add("visible")
    }, 0);
});

btnTiposEnt2.addEventListener("click", function () {
    tarjetaTipos2.classList.add("hidden")
    tarjetaTipos2.classList.remove("visible")
    setTimeout(function () {
        tarjetaTipos.classList.remove("hidden")
        tarjetaTipos.classList.add("visible")
    }, 0);
});

//////////////////////////////////////////////////////

btnOptimizar.addEventListener("click", function () {
    tarjetaOpt.classList.add("hidden")
    tarjetaOpt.classList.remove("visible")
    setTimeout(function () {
        tarjetaOpt2.classList.remove("hidden")
        tarjetaOpt2.classList.add("visible")
    }, 0);
});

btnOptimizar2.addEventListener("click", function () {
    tarjetaOpt2.classList.add("hidden")
    tarjetaOpt2.classList.remove("visible")
    setTimeout(function () {
        tarjetaOpt.classList.remove("hidden")
        tarjetaOpt.classList.add("visible")
    }, 0);
});

///////////// Seccion Utilidades //////////////////

let tarjetaRM = document.getElementById("tarjetaRM")
let tarjetaRM2 = document.getElementById("tarjetaRM2")
let tarjetaCuaderno = document.getElementById("tarjetaCuaderno")
let tarjetaCalorias = document.getElementById("tarjetaCalorias")
let tarjetas = document.querySelectorAll(".tarjeta")

tarjetaRM.addEventListener("click", function () {
    tarjetas.forEach(function (tarjeta) {
        tarjeta.classList.toggle("hidden")
        tarjeta.classList.toggle("visible")
    })
    tarjetaRM2.classList.add("visible")
    tarjetaRM2.classList.remove("hidden")

})

tarjetaCuaderno.addEventListener("click", function () {
    tarjetas.forEach(function (tarjeta) {
        tarjeta.classList.toggle("hidden")
        tarjeta.classList.toggle("visible")
    })
    tarjetaCuaderno2.classList.add("visible")
    tarjetaCuaderno2.classList.remove("hidden")
})

tarjetaCalorias.addEventListener("click", function () {
    tarjetas.forEach(function (tarjeta) {
        tarjeta.classList.toggle("hidden")
        tarjeta.classList.toggle("visible")
    })
    tarjetaCalorias2.classList.add("visible")
    tarjetaCalorias2.classList.remove("hidden")
})

/////////////////// Calcular RM ///////////////////

let resRm = document.getElementById("resRM")
let btnRM = document.getElementById("btnRM")


const calcularRM = (e) => {
    e.preventDefault()
    let inputPeso = document.getElementById("inputPeso").value
    let inputReps = document.getElementById("inputReps").value
    if (inputPeso && inputReps) {
        let divisor = (1.0278 - (0.0278 * inputReps))
        let resultadoFinal = inputPeso / divisor
        resRm.innerHTML = resultadoFinal.toFixed(2) + " Kg"
    } else {
        resRm.innerHTML = "Por favor ingresa los valores"
    }


}

btnRM.addEventListener("click", calcularRM)

let btnRMVolver = document.getElementById("btnRM-volver")

btnRMVolver.addEventListener("click", function () {
    tarjetas.forEach(function (tarjeta) {
        tarjeta.classList.remove("hidden")
        tarjeta.classList.add("visible")
    })
    tarjetaRM2.classList.add("hidden")
    tarjetaRM2.classList.remove("visible")
})

////////////// Cuaderno de entrenamiento //////////////

import data from './data.mjs'

document.addEventListener("DOMContentLoaded", function () {
    const datosAlmacenados = localStorage.getItem('datos') || data
    console.log(datosAlmacenados)
    const cuadernoForm = document.getElementById("cuadernoForm")
    const btnGuardar = document.getElementById("btnGuardar")

    btnGuardar.addEventListener("click", function (e) {
        e.preventDefault()
        for (let i = 1; i < 7; i++) {
            const ejercicioInput = cuadernoForm.querySelector(`[name='ejercicio${i}']`)
            const seriesInput = cuadernoForm.querySelector(`[name='repeticiones${i}']`)
            const pesoInput = cuadernoForm.querySelector(`[name='peso${i}']`)

            if (ejercicioInput && seriesInput && pesoInput) {
                const ejercicio = ejercicioInput.value;
                const series = seriesInput.value;
                const peso = pesoInput.value;

                const nuevoEjercicio = {
                    Ejercicio: ejercicio,
                    Series: series,
                    Peso: peso
                }

                data.push(nuevoEjercicio);
            } else {
                console.error(`Los campos para el ejercicio ${i} no se encontraron.`);
            }


        }
        localStorage.setItem("datos", JSON.stringify(data))

        cuadernoForm.reset()
        alert("Se guardó correctamente, revisa la consola")
        console.log("Datos guardados:", data)
    })
})


////// Btn volver //////

let btnGuardarVolver = document.getElementById("btnGuardar-volver")

btnGuardarVolver.addEventListener("click", function () {
    tarjetas.forEach(function (tarjeta) {
        tarjeta.classList.remove("hidden")
        tarjeta.classList.add("visible")
    })
    tarjetaCuaderno2.classList.add("hidden")
    tarjetaCuaderno2.classList.remove("visible")
})

////////////// Calcular calorias //////////////

const btnCalorias = document.getElementById("btnCalorias")
const selectEstiloVida = document.getElementById("selectEstiloVida")
const inputPesoCorporal = document.getElementById("inputPesoCorporal")
const resCalorias = document.getElementById("resCalorias")
const btnCaloriasVolver = document.getElementById("btnCalorias-volver")

function calcularCalorias(e) {
    e.preventDefault()
    const pesoCorporal = parseFloat(inputPesoCorporal.value)

    if (pesoCorporal > 0) {

        const estiloVida = selectEstiloVida.value

        let caloriasBasales = 0
        switch (estiloVida) {
            case "sedentario":
                caloriasBasales = (pesoCorporal * 22) * 1.5
                break;
            case "actividad-moderada":
                caloriasBasales = (pesoCorporal * 22) * 1.7
                break;
            case "actividad-intensa":
                caloriasBasales = (pesoCorporal * 22) * 2;
                break;
            default:
                break;
        }

        resCalorias.textContent = caloriasBasales.toFixed(2)

    } else {
        alert("Ingresa un valor mayor a 0")
    }


}

btnCalorias.addEventListener("click", calcularCalorias)

btnCaloriasVolver.addEventListener("click", function () {
    tarjetas.forEach(function (tarjeta) {
        tarjeta.classList.remove("hidden")
        tarjeta.classList.add("visible")
    })
    tarjetaCalorias2.classList.add("hidden")
    tarjetaCalorias2.classList.remove("visible")
})