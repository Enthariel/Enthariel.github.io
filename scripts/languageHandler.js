let language = navigator.language;
console.log(language);

switch (language) {
    case "es-ES":
        console.log("Esta en espaniol");
        hideLanguage("en");
        break;
    case "en-EN":
        console.log("Esta en ingles");
        hideLanguage("es");
        break;
    default:
        console.log("Esta en otro idioma");
        break;
}

//Oculta un lenguaje en especifico.
function hideLanguage(className) {
    document.querySelectorAll(`.${className}`).forEach(elementClass => {
        elementClass.style.display = "none";
    });
}
