//youtube trailer
		var q = window.location.href;
		var query = q.substring(39, q.length);
		var yt = new XMLHttpRequest();
		  var api = "AIzaSyDf-TCgD54NNSlg_PbqeJyhXWhn0B4WBzw";
		  var link = "https://www.googleapis.com/youtube/v3/search?part=id&q=";
		  link += query;
		  link += "+trailer&type=video&key=";
		  link += api;
		 yt.open("GET", link, true);
		  yt.onreadystatechange = function() {
		    if (yt.readyState === 4) {
		      var status = yt.status;
		      if ((status >= 200 && status < 300) || status === 304) {
		        var rss = JSON.parse(yt.responseText);
		        var videoId = rss.items[0].id.videoId;
		        document.getElementById('trailer').innerHTML += ('<a target="_blank" href="http://midhruvjaink.xyz/yt/watch.html?'+videoId+'"><img width="=100%" class="responsive-img" src="https://i.ytimg.com/vi/'+videoId+'/hqdefault.jpg" /></a>');
		        //document.getElementById('thVid').innerHTML = ('<a href="watch.html?'+thVid+'"><img class="responsive-img" src="https://i.ytimg.com/vi/'+thVid+'/mqdefault.jpg" /></a>');
		        //document.getElementById('frthVid').innerHTML = ('<a href="watch.html?'+frthVid+'"><img class="responsive-img" src="https://i.ytimg.com/vi/'+frthVid+'/mqdefault.jpg" /></a>');
		      } else {
		          alert("Request unsuccessful");
		      }
		    }
		  };
		  yt.send(null);