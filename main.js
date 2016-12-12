var q = window.location.href;
		var query = q.substring(61, q.length);
		var xhr = new XMLHttpRequest();
		var url = "https://www.omdbapi.com/?t=";
		url += query;
		url += "&plot=full&r=json&tomatoes=true";
		xhr.open("GET", url, true);
		  xhr.onreadystatechange = function() {
		    if (xhr.readyState === 4) {
		      var status = xhr.status;
		      if ((status >= 200 && status < 300) || status === 304) {
		      	var rss = JSON.parse(xhr.responseText);
		      	if(rss.Response === 'True'){
			       
			       var title = rss.Title;
			       var year = rss.Year;
			       document.getElementById('titleNav').innerHTML = ('<h2 class="white-text">'+title+' ('+year+')'+'</h2>');
			       var type = rss.Type;
			       //document.getElementById('type').innerHTML = (' '+type+' > ');
			       var genres = rss.Genre;
			       var meta = rss.Metascore;
			       //document.getElementById('genres').innerHTML = (' '+genres+' > ');
			       //document.getElementById('titleTop').innerHTML = ('<strong>'+title+'</strong>');
			       var released = rss.Released;
			       var runtime = rss.Runtime;
			       document.getElementById('details').innerHTML += (released+'   | '  +runtime+'    |    '+genres+'  |  Metascore: '+meta);
			       var poster = rss.Poster;
			       document.getElementById('poster').innerHTML = ('<img class="responsive-img z-depth-2" src="'+poster+'" alt="'+title+' '+released+' poster" width="100%" />');
			       var director = rss.Director;
			       document.getElementById('director').innerHTML += director;
			       var writer = rss.Writer;
			       document.getElementById('writer').innerHTML += (writer);
			       var cast = rss.Actors;
			       document.getElementById('Casting').innerHTML += (cast);
			       var plot = rss.Plot;
			       document.getElementById('plot').innerHTML += plot;
			       var lang = rss.Language;
			       document.getElementById('language').innerHTML += lang;
			       var country = rss.Country;
			       document.getElementById('country').innerHTML += country;
			       var awards = rss.Awards;
			       document.getElementById('awards').innerHTML += awards;
			       var imdbRatings = rss.imdbRating;
			       var imdbLink = rss.imdbID;
			       var imdbVotes = rss.imdbVotes;
			       document.getElementById('imdbRatings').innerHTML += ('<a href="http://www.imdb.com/title/'+imdbLink+'" target="_blank"><img src="https://yts.ag/assets/images/website/logo-imdb.svg" /> <h3>'+imdbRatings+'<span class="ten grey-text">/10</span></h3></a><h6>'+imdbVotes+' votes </h6>');
			       document.title = (title+' | mwikia');
			       var tomatoRating = rss.tomatoRating;
			       var tomatoReviews = rss.tomatoReviews;
			       var tomatoUserReviews = rss.tomatoUserReviews;
			       var tomatoConsensus = rss.tomatoConsensus;
			       document.getElementById('tomatoRating').innerHTML += ('<img src="https://yts.ag/assets/images/website/rt-certified-fresh.png" /> <h3>'+tomatoRating+'<span class="ten grey-text">/10</span></h3><h6>'+tomatoReviews+' reviews</h6>');		       
			       document.getElementById('tomatoConsensus').innerHTML += tomatoConsensus;			       
			       //document.getElementById('tomatoUserReviews').innerHTML += tomatoUserReviews;
			       var DVD = rss.DVD;
			       document.getElementById('DVD').innerHTML += DVD;
			       var BoxOffice = rss.BoxOffice;
			       document.getElementById('BoxOffice').innerHTML += BoxOffice;
			       var Production = rss.Production;
			       document.getElementById('Production').innerHTML += Production;
			       var allMetaElements = document.getElementsByTagName('meta');
					//loop through and find the element you want
					for (var i=0; i<allMetaElements.length; i++) { 
					  if (allMetaElements[i].getAttribute("name") === "description") { 
					     //make necessary changes
					     allMetaElements[i].setAttribute('content', plot); 
					     //no need to continue loop after making changes.
					     break;
					  } 
					}
			   	} else if (rss.Response === 'False'){
			   		alert("Name incorrect!");
			   	}
		      } else {
		          alert("Request unsuccessful");
		      }
		    }
		  };
		  xhr.send(null);