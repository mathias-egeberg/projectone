function loggInn(event){
    event.preventDefault();
    const url = "/loggInn?brukernavn="+$("#username").val()+"&passord="+$("#password").val();
    const id = window.location.search.substring(1);
    console.log(id);
    $.get(url, function (OK){
       if (OK){
           window.location.href = "home.html";
       } else {
            $("#utMelding").html("Feil brukernavn eller passord")
       }
    })
        .fail(function (jgXHR){
            const json = $.parseJSON(jgXHR.responseText);
           console.log(json.message);
        });
}


function loggUt(){
    $.get("loggUt", function (){
        window.location.href = "login.html";
    })
}