//Task 1: Console the year in which the song "Beat it" was relased 
console.log(library.music.eighties.Michael_Jackson[0].year);

//Task 2: Console the name of the song Lady Gaga released in 2006 

console.log(library.music.two_thousands.Lady_Gaga.song);

$( document ).ready(function() {
//Task 3: Have the words "Rolling in the Deep" appear on the HTML page in a div tag.    
    $("#bye").text(library.music.twenty_tens.Adele[0].song);
//Task 4: (project) Create a site that can display songs from an artist specified by a user search.
var decade = prompt("what decade do you want to search in?");
alert (decade); 

var artist = prompt("What artist you want to search");
alert(artist);
//$("#bye").text(library.music[][]);
});
