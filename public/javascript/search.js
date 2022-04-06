$( document ).ready(function() {
    $( "#search-button" ).click(function() {
        var searchBar = document.getElementById("search-bar");
        console.log (searchBar.value );
      });
    console.log( "ready!" );
});