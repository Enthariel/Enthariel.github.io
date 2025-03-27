if (window.location.pathname.endsWith("index.html")) {
    console.log("Estamos en index.html");
    document.getElementById("footer").innerHTML = `
    <a href="https://maps.app.goo.gl/eM6ULEpkJdiXW6tj8" target="_blank">
            <h2 class="es">UBICACION</h2>
            <p class="es">Universidad Pablo de Olavide (UPO Autovia A-376, Km 1. Edificio 45. Alexander von Humboldt, 41013 Sevilla</p>
        </a>

        <a href="mailto:entharielgames.gmail.com">
            <h2 class="es">SOPORTE</h2>
            <p class="es yellow">entharielgames.gmail.com</p>
        </a>
`;
} else {
    console.log("No estamos en index.html");
    document.getElementById("footer").innerHTML = `
    <a href="https://maps.app.goo.gl/eM6ULEpkJdiXW6tj8" target="_blank">
            <h2 class="es">UBICACION</h2>
            <p class="es">Universidad Pablo de Olavide (UPO Autovia A-376, Km 1. Edificio 45. Alexander von Humboldt, 41013 Sevilla</p>
        </a>

        <a href="mailto:entharielgames.gmail.com">
            <h2 class="es">SOPORTE</h2>
            <p class="es yellow">entharielgames.gmail.com</p>
        </a>
`;
}