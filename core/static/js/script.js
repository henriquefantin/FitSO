 $( function() {
    $( ".widget button" ).button();
    $( "button" ).click( function( event ) {
      event.preventDefault();
    } );
 } );

function alimentacao(){
    window.location.href = "http://127.0.0.1:8000/alimentacao";
}
function exercicios(){
    window.location.href = "http://127.0.0.1:8000/exercicios";
}
function progresso(){
    window.location.href = "http://127.0.0.1:8000/progresso";
}