// Recuperar los datos almacenados en localStorage
window.onload = function() {
    const ingresoMensual = localStorage.getItem("ingresoMensual") || "$0.00";
    const cuentaTotal = localStorage.getItem("cuentaTotal") || "$0.00";

    // Mostrar los valores en el HTML
    document.getElementById("ingresoMensual").textContent = `$${parseFloat(ingresoMensual).toLocaleString()}`;
    document.getElementById("cuentaTotal").textContent = `$${parseFloat(cuentaTotal).toLocaleString()}`;

    // Cargar los gastos desde localStorage
    const gastosList = JSON.parse(localStorage.getItem("gastos")) || [
        { nombre: 'Comida', monto: 2000.00 },
        { nombre: 'Bebidas Alcohólicas', monto: 3500.00 },
        { nombre: 'Videojuegos', monto: 1500.00 }
    ];

    actualizarGastos(gastosList);

    // Agregar un nuevo gasto
    document.getElementById("gastoForm").addEventListener("submit", function(e) {
        e.preventDefault();
        const nuevoGasto = document.getElementById("nuevoGasto").value;
        const montoGasto = parseFloat(document.getElementById("montoGasto").value);

        if (nuevoGasto && !isNaN(montoGasto)) {
            gastosList.push({ nombre: nuevoGasto, monto: montoGasto });
            localStorage.setItem("gastos", JSON.stringify(gastosList));
            actualizarGastos(gastosList);
        }
    });
}

// Función para actualizar la lista de gastos en el HTML
function actualizarGastos(gastosList) {
    const gastosListElement = document.getElementById("gastosList");
    gastosListElement.innerHTML = ''; // Limpiar la lista actual

    gastosList.forEach(gasto => {
        const li = document.createElement('li');
        li.textContent = `${gasto.nombre}...............................$${gasto.monto.toFixed(2)}`;
        gastosListElement.appendChild(li);
    });
}