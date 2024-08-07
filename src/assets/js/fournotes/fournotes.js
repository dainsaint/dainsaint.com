Sugar.extend();

var offset = 0;
var startDate = Date.create("June 3, 2019");

function prevWeek(event)
{
  offset--;
  generate( offset, false );
  event.preventDefault();
}

function reset(event)
{
  offset = 0;
  generate( offset, false );
  event.preventDefault();
}

function randomize(event)
{
  offset = -startDate.weeksAgo() + Math.floor(Math.random() * 11880);
  generate( offset, false );
  event.preventDefault();
}


function nextWeek(event)
{
  offset++;
  generate( offset, false );
  event.preventDefault();
}

function generate( weekOffset, random )
{
  var notes = ["C", "C<sup>&#9839;</sup>", "D", "E<sup>&#9837;</sup>", "E", "F", "F<sup>&#9839;</sup>", "G", "G<sup>&#9839;</sup>", "A", "B<sup>&#9837;</sup>", "B"]
  var all = []

  var date = Date.create("this Monday").advance({ weeks: weekOffset });
  var rng = new Math.seedrandom( date.short() );
  var week = ( startDate.weeksUntil( date ) + 1 );

  document.getElementById( "date" ).innerHTML = `Week ${week} <br/>${ date.medium() }`;

  for(var i = 0; i < 4; i++)
  {
    var idx = Math.floor( rng() * notes.length );
    var note = notes[idx];
    notes.splice(idx, 1);
    all.push(note);
  }

  // document.getElementById( "week-number" ).innerHTML = "Week " + ;
  document.getElementById( "notes" ).innerHTML = all.map( n => `<span>${n}</span>`).join( "");

  var disabled = offset == -startDate.weeksAgo();
  document.getElementById( "prev-button" ).classList.toggle( "disabled", disabled );

  // var colors = ["purple", "pink", "green", "orange"];
  // var lastColor = document.body.classList.item(0);
  // document.body.classList.remove( lastColor );
  // var color = colors.exclude(lastColor).sample();
  // console.log( color );
  // document.body.classList.add( color );

}


function mostRecent()
{
  var channelID = "UCd98drfh1CwPqb0-dTYizeA";
var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
$.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID, function(data) {
   var link = data.items[0].link;
   var id = link.substr(link.indexOf("=")+1);
$("#most-recent").attr("href","https://youtube.com/watch?v="+id);
$("#most-recent").removeClass("disabled");

});
}


$(document).ready( function() {

    mostRecent();
})

generate( 0 );
