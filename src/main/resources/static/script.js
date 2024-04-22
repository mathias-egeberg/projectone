function loggInn(){
    const url = "/loggInn?brukernavn="+$("#username").val()+"&passord="+$("#password").val();
    const id = window.location.search.substring(1);
    console.log(id);
    $.get(url, function (OK){
       if (OK){
           window.location.href = "home.html";
       } else {
            $("#feil").html = "Feil brukernavn eller passord";
       }
    })
        .fail(function (jgXHR){
           const json = $.parseJSON(jgXHR.responseText);
           $("#feil").html(json.message);
        });
}


function loggUt(){
    $.get("loggUt", function (){
        window.location.href = "index.html";
    })
}