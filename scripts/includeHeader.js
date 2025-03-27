if (window.location.pathname.endsWith("index.html")) {
    console.log("Estamos en index.html");
    document.getElementById("header").innerHTML = `
    <a href="index.html#start" class="logoDegree"></a>
    <a href="index.html#news" class="mobileHidden">
        <p>NOTICIAS</p>
    </a>
    <a href="index.html#games" class="mobileHidden">
        <p>JUEGOS</p>
    </a>
    <!-- TWITTER -->
    <a href="#" class="mobileHidden">
        <section class="twitter social"></section>
    </a>
    <!-- INSTAGRAM -->
    <a href="#" class="mobileHidden">
        <section class="instagram social"></section>
    </a>
    <!-- LINKEDIN -->
    <a href="#" class="mobileHidden">
        <section class="linkedin social"></section>
    </a>
    <!-- YOUTUBE -->
    <a href="#" class="mobileHidden">
        <section class="youtube social"></section>
    </a>
`;
} else {
    console.log("No estamos en index.html");
    document.getElementById("header").innerHTML = `
    <a href="../index.html#start" class="logoDegree"></a>
    <a href="../index.html#news" class="mobileHidden">
        <p>NOTICIAS</p>
    </a>
    <a href="../index.html#games" class="mobileHidden">
        <p>JUEGOS</p>
    </a>
    <!-- TWITTER -->
    <a href="#" class="mobileHidden">
        <section class="twitter social"></section>
    </a>
    <!-- INSTAGRAM -->
    <a href="#" class="mobileHidden">
        <section class="instagram social"></section>
    </a>
    <!-- LINKEDIN -->
    <a href="#" class="mobileHidden">
        <section class="linkedin social"></section>
    </a>
    <!-- YOUTUBE -->
    <a href="#" class="mobileHidden">
        <section class="youtube social"></section>
    </a>
`;
}


