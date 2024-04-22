$(function (){
    const id = window.location.search.substring(1);
    const url = "/hentBruker?" + id;
    console.log(id)
    $.get(url, function (bruker){
        $("#brukerId").val(bruker.id);
        $("#bruker-display").val(bruker.navn);
    });
});