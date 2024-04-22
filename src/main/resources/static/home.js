$(function(){
    // Function to get URL query parameters by name
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    // Get username from URL query parameter
    const username = getParameterByName('username');
    console.log("Username:", username);

    // Use the username as needed
    // For example, you can update HTML elements with the username
    $("#velkommen-melding").text("Welcome, " + username + "!");
});

/*
$(function (){
    const id = window.location.search.substring(1);
    const url = "/hentBruker?"+id;
    console.log(id);
    $.get(url, function (bruker){
        $("#brukerId").val(bruker.id);
        $("#velkommen-melding").val(bruker.fornavn);
    })
})
*/

function loggUt() {
    $.get("loggUt", function (){
        window.location.href = "login.html";
    })
}