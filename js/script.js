/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Why I Love You", "Anything you Want", "As I am", "Faithful","Butterflies", "Sober"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images_links = ["https://static1.squarespace.com/static/56e9d4cf356fb073c1e42275/t/573e6489d210b87c4655d393/1508515101258/", "https://i1.sndcdn.com/avatars-000287991404-8hlwq4-t500x500.jpg", 
"https://images.genius.com/d90558d17bf5b32c49afcf8a5ae968ab.640x640x1.jpg", "https://s.mxmcdn.net/images-storage/albums4/0/3/4/6/0/1/37106430_800_800.jpg",
"https://i.ytimg.com/vi/zjN3D1ZQNHU/maxresdefault.jpg","https://upload.wikimedia.org/wikipedia/en/thumb/4/44/Sober_%28Official_Single_Cover%29_by_Demi_Lovato.jpg/220px-Sober_%28Official_Single_Cover%29_by_Demi_Lovato.jpg"
];

var artists = [ 
"MAJOR", "Sydney Renae",  "H.E.R", "Phora", "Queen Naijia","Demi Lovato"
];

var songLengths = [ "3:56", "2:59", "4:02", "3:07", "3:33", "3:17"
];

var links = ["https://youtu.be/j99vw-6gkBc", "https://youtu.be/VTkSzxiPawY " , " https://youtu.be/lQ2UAXR9HYE", "https://youtu.be/EnEd7cPLH0s ", " https://youtu.be/zjN3D1ZQNHU",
" https://youtu.be/A-_9VonfUko"]; 

function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div

    songs.forEach(function(music) {
        $("#songs").append("<p>" + music + "</p>");
    });
    
    images_links.forEach(function(picture){
        $("#images").append("<img src=" + picture + ">");
    });
    
        artists.forEach(function (singer){
    $("#artists").append("<p>" + singer + "</p>");
        }); 
        
        songLengths.forEach(function(time){
            $("#lengths").append("<p> "+ time+ "</p>");
        });
        
            links.forEach(function(video){
                $("#links").append("<a href=" + video + ">"  + "click here </a>");
                
          });
  
    
}
function emptySongInfo(){
    $("#songs").empty();
    $("#artists").empty();
    $("#images").empty();
    $("#links").empty();
    $("#lengths").empty();
    
    // Use jQuery to empty all of the remaining divs


}
function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
  var song = $("#song").val();
 
    songs.push(song);

  var artist=("#artist").val();
    artists.push(artist);
    
    
     /* var image=("#image").val();
    images_links.push(image);
     
    
    
      var link=("#link").val();
    links.push(link);
    
    
    
    
     var length=("#length").val();
    songLengths.push(length);
*/

}



$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
