//  $("#fetchLyrics").on("submit", function(e) {
//      e.preventDefault();
//      var songTitle = $("#songTitle").val();
//      var artist = $("#artist").val();
//      console.log(songTitle);
//      console.log(artist);


//      fetch(`https://api.lyrics.ovh/v1/${artist}/${songTitle}`)


//      .then(response => response.json())
//          .then(data => {
//              $(".lyricsAll").text("loading...");
//              console.log(data);
//              $(".lyricsAll").text(data.lyrics);
//              console.log(data.lyrics);
//          });
//  });


async function getLyrics(e) {
    e.preventDefault();
    var songTitle = $("#songTitle").val();
    var artist = $("#artist").val();
    console.log(songTitle);
    console.log(artist);

    let response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${songTitle}`);
    let data = await response.json();
    $(".lyricsAll").text("loading...");
    console.log(data);
    $(".lyricsAll").text(data.lyrics);
    console.log(data.lyrics);
}
$("#fetchLyrics").on("submit", function(e) {
    getLyrics(e)
});