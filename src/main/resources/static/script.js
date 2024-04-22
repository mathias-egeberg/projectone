function loggInn(event){
    event.preventDefault();
    const brukernavn = $("#username").val();
    const passord = $("#password").val();
    const url = "/loggInn?brukernavn=" + brukernavn + "&passord=" + passord;

    $.get(url, function (OK){
       if (OK){
           window.location.href = "home.html?username=" + encodeURIComponent(brukernavn);
       } else {
            $("#utMelding").html("Feil brukernavn eller passord");
       }
    })
        .fail(function (jgXHR){
            const json = $.parseJSON(jgXHR.responseText);
           console.log(json.message);
        });
}
$("#loginForm").submit(loggInn);


