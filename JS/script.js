$(document).ready(function () {
    console.log("Ready");
    button();
});

function button() {
    $("#indexLoginButton").click(function () {
        console.log("Click!");
        window.location = "userHome.html";
    });

    $("#logoutButton").click(function () {
        console.log("Click!");
        window.location = "index.html";
    });
}