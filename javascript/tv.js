var movies = [	
	"bandOfBrothers",
	"pennyDreadful",
	"mrRobot",
	"fargo",
	"betterCallSaul",
	"archer",
	"rickAndMorty"
];
var moviesI = [];

for (blah = 0; blah < movies.length; blah++) {
	moviesI.push(movies[blah]);
}

function run(filter) {
	filter;// zZero(), zeroZ();
	var next = document.getElementById("posterCon").innerHTML = "";//clears for sort;
	for (i = 0; i < movies.length; i++) { 
		var poster = document.createElement("img");
		poster.setAttribute("id", movies[i]);
		poster.setAttribute("class", "poster");
		poster.setAttribute("alt", movies[i] + "");
		poster.setAttribute("title", movies[i] + "");
		poster.setAttribute("src", "tvShows/" + movies[i] + ".jpg");
		posterCon.appendChild(poster);
	}
	episodeSrc();
	bandOfBrothers.setAttribute("class", "poster 2001 tvma action drama history");
	pennyDreadful.setAttribute("class", "poster 2014 tvma drama fantasy horror");
	mrRobot.setAttribute("class", "poster 2015 tvma crime drama thriller");
	fargo.setAttribute("class", "poster 2014 tvma crime drama thriller");
	betterCallSaul.setAttribute("class", "poster 2015 tv14 crime drama");
	archer.setAttribute("class", "poster 2009 tvma animation action comedy");
	rickAndMorty.setAttribute("class", "poster 2014 tv14 animation adventure comedy");
	for (p = 0; p < movies.length; p++) {
		var xyz = document.getElementById(movies[p])
		var xyz1 = xyz.className;
		xyz.title = xyz.title + xyz1.substr(6);
	}
};

function windowSize() {
	var wW = document.documentElement.clientWidth;
	var wH = document.documentElement.clientHeight;

	headerCon.appendChild(filters);
	if (wW <= 551) {
		headerCon.removeChild(filters);
		posterCon.style.marginLeft = "auto";
		posterCon.style.marginRight = "auto";
		posterCon.style.width = "200px";
		leftHeaderCon.style.left = "0px";
		logoCon.style.float = "left";

	} else {
		headerCon.appendChild(filters);
		posterCon.style.marginLeft = "165px";
		posterCon.style.marginRight = "";
		posterCon.style.width = "auto";
		leftHeaderCon.style.left = "160px";
		logoCon.style.float = "right";
	}

	if (wW < 715) {
		//headerCon.style.height = "280px";
		posterCon.style.paddingTop = "290px";
	} else {
		//headerCon.style.height = "150px";
		posterCon.style.paddingTop = "120px";
	}

	if (wH < 816) {
		genreDiv.style.height = "150px";
		yearDiv.style.height = "150px";
	} else {
		genreDiv.style.height = "250px";
		yearDiv.style.height = "250px";
	}

	rightHeaderCon.appendChild(adFrame);
	if (wW < 620) {
		rightHeaderCon.removeChild(adFrame);
	} else {
		rightHeaderCon.appendChild(adFrame);
	}
};

var con = document.createElement("div");
con.setAttribute("id", "con");
con.setAttribute("class", "con");
document.body.appendChild(con);

var headerCon = document.createElement("div");
headerCon.setAttribute("id", "headerCon");
headerCon.setAttribute("class", "headerCon");
con.appendChild(headerCon);

var leftHeaderCon = document.createElement("div");
leftHeaderCon.setAttribute("id", "leftHeaderCon");
leftHeaderCon.setAttribute("class", "leftHeaderCon");
headerCon.appendChild(leftHeaderCon);

var rightHeaderCon = document.createElement("div");
rightHeaderCon.setAttribute("id", "rightHeaderCon");
rightHeaderCon.setAttribute("class", "rightHeaderCon");
headerCon.appendChild(rightHeaderCon);

var adFrame = document.createElement("iframe");
adFrame.setAttribute("id", "adFrame");
adFrame.setAttribute("class", "adFrame");
adFrame.setAttribute("src", "http://powerballsim.com/ads/adsense3.html");
//appends in windowSize;

var homeCon = document.createElement("div");
homeCon.setAttribute("id", "homeCon");
homeCon.setAttribute("class", "homeCon");
leftHeaderCon.appendChild(homeCon);

var homeIconA = document.createElement("a");
homeIconA.setAttribute("href", "http://www.piratejunkies.com");
homeCon.appendChild(homeIconA);

var homeIcon = document.createElement("i");
homeIcon.setAttribute("id", "homeIcon");
homeIcon.setAttribute("class", "fa fa-home");
homeIcon.setAttribute("title", "Home");
homeIconA.appendChild(homeIcon);

var socialCon = document.createElement("div");
socialCon.setAttribute("id", "socialCon");
socialCon.setAttribute("class", "socialCon");
leftHeaderCon.appendChild(socialCon);

var socialIcon = document.createElement("i");
socialIcon.setAttribute("id", "socialIcon");
socialIcon.setAttribute("class", "fa fa-group");
socialIcon.setAttribute("title", "Follow Us");
socialCon.setAttribute("onclick", "socialDrop()");
socialCon.appendChild(socialIcon);

var socialCount = 0;
function socialDrop() {
	if (!socialCount) {
		var navCon = document.createElement("div");
		navCon.setAttribute("id", "navCon");
		navCon.setAttribute("class", "navCon");
		socialCon.appendChild(navCon);

		var facebook = document.createElement("img");
		facebook.setAttribute("id", "facebook");
		facebook.setAttribute("class", "facebook socialL");
		facebook.setAttribute("src", "images/facebook.png");
		facebook.setAttribute("title", "Facebook");

		var facebookLink = document.createElement("a");
		facebookLink.setAttribute("href", "https://www.facebook.com/Pirate-Junkies-Inc-1559581224291414/");
		facebookLink.appendChild(facebook);
		navCon.appendChild(facebookLink);

		var google = document.createElement("img");
		google.setAttribute("id", "google");
		google.setAttribute("class", "google socialL");
		google.setAttribute("src", "images/googleplus.png");
		google.setAttribute("title", "Google+");

		var googleLink = document.createElement("a");
		googleLink.setAttribute("href", "https://plus.google.com/u/0/116937947344817976294/posts");
		googleLink.appendChild(google);
		navCon.appendChild(googleLink);

		var twitter = document.createElement("img");
		twitter.setAttribute("id", "twitter");
		twitter.setAttribute("class", "twitter socialL");
		twitter.setAttribute("src", "images/twitter.png");
		twitter.setAttribute("title", "Twitter");

		var twitterLink = document.createElement("a");
		twitterLink.setAttribute("href", "https://twitter.com/piratejunkies");
		twitterLink.appendChild(twitter);
		navCon.appendChild(twitterLink);

		var reddit = document.createElement("img");
		reddit.setAttribute("src", "images/redditBlack.jpg");
		reddit.setAttribute("alt", "submit to reddit");
		reddit.setAttribute("class", "reddit socialL");
		reddit.setAttribute("title", "Reddit");

		var redditLink = document.createElement("a");
		redditLink.setAttribute("href", "https://www.reddit.com/r/Fullmoviesonvimeo/");
		redditLink.appendChild(reddit);
		navCon.appendChild(redditLink);

		socialIcon.style.border = "3px solid #00C3FF";
		socialIcon.style.color = "#00C3FF";

		socialCount++;
	} else {
		var getNavCon = document.getElementById("navCon");
		socialCon.removeChild(getNavCon);

		socialIcon.style.border = "3px dotted #00C3FF";
		socialIcon.style.color = "white";

		socialCount--;
	}
};

var logoCon = document.createElement("div");
logoCon.setAttribute("id", "logoCon");
logoCon.setAttribute("class", "logoCon");
leftHeaderCon.appendChild(logoCon);

var logoP = document.createElement("p");
logoP.setAttribute("id", "logoP");
logoP.setAttribute("class", "logoP");
logoP.setAttribute("onclick", "openEntertainment()");
var logoT = document.createTextNode("Pirate Junkies");
logoP.appendChild(logoT);
logoCon.appendChild(logoP);

var entertainmentCount = 0;
function openEntertainment() {
	if (!entertainmentCount) {
		var entertainmentCon = document.createElement("div");
		entertainmentCon.setAttribute("id", "entertainmentCon");
		entertainmentCon.setAttribute("class", "entertainmentCon");
		logoCon.appendChild(entertainmentCon);

		var movieLink = document.createElement("a");
		movieLink.setAttribute("href", "http://www.piratejunkies.com");
		entertainmentCon.appendChild(movieLink);

		var moviesDiv = document.createElement("div");
		moviesDiv.setAttribute("id", "moviesDiv");
		moviesDiv.setAttribute("class", "moviesDiv entertainmentDiv");
		movieLink.appendChild(moviesDiv);

		var moviesDivP = document.createElement("p");
		moviesDivP.setAttribute("id", "moviesDivP");
		moviesDivP.setAttribute("class", "moviesDivP");
		var movieDivT = document.createTextNode("Movies");
		moviesDivP.appendChild(movieDivT);
		moviesDiv.appendChild(moviesDivP);

		var tvDiv = document.createElement("div");
		tvDiv.setAttribute("id", "tvDiv");
		tvDiv.setAttribute("class", "tvDiv entertainmentDiv");

		var tvLink = document.createElement("a");
		tvLink.setAttribute("href", "tv.html");
		entertainmentCon.appendChild(tvLink);
		tvLink.appendChild(tvDiv);

		var tvDivP = document.createElement("p");
		tvDivP.setAttribute("id", "tvDivP");
		tvDivP.setAttribute("class", "tvDivP");
		var movieDivT = document.createTextNode("T.V. Series");
		tvDivP.appendChild(movieDivT);
		tvDiv.appendChild(tvDivP);

		var documentaryDiv = document.createElement("div");
		documentaryDiv.setAttribute("id", "documentaryDiv");
		documentaryDiv.setAttribute("class", "documentaryDiv entertainmentDiv");

		var docuLink = document.createElement("a");
		docuLink.setAttribute("href", "documentaries.html");
		entertainmentCon.appendChild(docuLink);
		docuLink.appendChild(documentaryDiv);

		var documentaryDivP = document.createElement("p");
		documentaryDivP.setAttribute("id", "documentaryDivP");
		documentaryDivP.setAttribute("class", "documentaryDivP");
		var documentaryDivT = document.createTextNode("Documentaries");
		documentaryDivP.appendChild(documentaryDivT);
		documentaryDiv.appendChild(documentaryDivP);
		entertainmentCount++;
	} else {
		var getEntertainmentCon = document.getElementById("entertainmentCon");
		logoCon.removeChild(getEntertainmentCon);
		entertainmentCount--;
	}
};

var filters = document.createElement("div");
filters.setAttribute("id", "filters");
filters.setAttribute("class", "filters");
//appends in windowSize;

var searchText = document.createElement("p");
searchText.setAttribute("id", "searchText");
searchText.setAttribute("class", "searchText");
var searchTextP = document.createTextNode("Search");
searchText.appendChild(searchTextP);
filters.appendChild(searchText);

var search = document.createElement("input");
search.setAttribute("type", "text");
search.setAttribute("id", "search");
search.setAttribute("class", "search");
search.setAttribute("value", "Movie Title");
search.setAttribute("onclick", "startCS()");
filters.appendChild(search);

function startCS() {
	search.value = "";
	var crawlSearch = setInterval(xSearch, 100);
function xSearch() {
	var searchText = search.value;
	var space = searchText.replace(/\s/g, '');
	var exclamation = space.replace(/\u0021/g, '');
	var dubQuot = exclamation.replace(/\u0022/g, '');
	var number = dubQuot.replace(/\u0023/g, '');
	var dollar = number.replace(/\u0024/g, '');
	var percent = dollar.replace(/\u0025/g, '');
	var ampersand = percent.replace(/\u0026/g, 'and');
	var sinQuot = ampersand.replace(/\u0027/g, '');
	var openingParen = sinQuot.replace(/\u0028/g, '');
	var closingParen = openingParen.replace(/\u0029/g, '');
	var asterisk = closingParen.replace(/\u002A/g, '');
	var plus = asterisk.replace(/\u002B/g, '');
	var comma = plus.replace(/\u002C/g, '');
	var minus = comma.replace(/\u002D/g, '');
	var period = minus.replace(/\u002E/g, '');
	var slash = period.replace(/\u002F/g, '');
	var colon = slash.replace(/\u003A/g, '');
	var semicolon = colon.replace(/\u003B/g, '');
	var lessThan = semicolon.replace(/\u003C/g, '');
	var equal = lessThan.replace(/\u003D/g, '');
	var greaterThan = equal.replace(/\u003E/g, '');
	var question = greaterThan.replace(/\u003F/g, '');
	var at = question.replace(/\u0040/g, 'at');
	var opening = at.replace(/\u005B/g, '');
	var opbackslashening = opening.replace(/\u005C/g, '');
	var closing = opbackslashening.replace(/\u005D/g, '');
	var caret = closing.replace(/\u005E/g, '');
	var underscore = caret.replace(/\u005F/g, '');
	var grave = underscore.replace(/\u0060/g, '');
	var equivalency = grave.replace(/\u007E/g, '');
	var eAcute = equivalency.replace(/\u00E9/g, 'e');
	var division = eAcute.replace(/\u00F7/g, '');
	var enDash = division.replace(/\u2013/g, '');
	var emDash = enDash.replace(/\u2014/g, '');
	var lSQuot = emDash.replace(/\u2018/g, '');
	var rSQuot = lSQuot.replace(/\u2019/g, '');
	var sLowQuot = rSQuot.replace(/\u201A/g, '');
	var lDQuot = sLowQuot.replace(/\u201C/g, '');
	var rDQuot = lDQuot.replace(/\u201D/g, '');
	var dLowQuot = rDQuot.replace(/\u201E/g, '');
	var bullet = dLowQuot.replace(/\u2022/g, '');
	/*var roman2 =  bullet.replace(/II/g, '2');
	var roman3 =  roman2.replace(/III/g, '3');
	var roman4 =  roman3.replace(/IV/g, '4');
	var roman5 =  roman4.replace(/V/g, '5');
	var roman6 =  roman5.replace(/VI/g, '6');
	var roman7 =  roman6.replace(/VII/g, '7');
	var roman8 =  roman7.replace(/VIII/g, '8');
	var roman9 =  roman8.replace(/IX/g, '9');
	var roman10 =  roman9.replace(/X/g, '10');*/
	var lowerText = bullet.toLowerCase();
	if (lowerText === "") {
		search.onmouseout = run();
	} else {
		var a = document.getElementsByClassName("poster");
		for (cM = 0; cM < movies.length; cM++) {
			a[cM].style.width = "0px";
			a[cM].style.height = "0px";
			a[cM].style.position = "fixed";
			a[cM].style.zIndex = "0";
		}
		var getSL = lowerText.length;
		for (movI = 0; movI < movies.length; movI++) {
			var b = movies[movI];
			var newB = b.toLowerCase();
			var movieString = newB.substr(0, getSL);
			if (lowerText == movieString) {
				var x = document.getElementById(b);
				x.style.width = "181px";
				x.style.height = "274px";
				x.style.position = "relative";
				x.style.zIndex = "2";
				x.style.float = "left";
			}
		}
	}
	search.style.font = "normal 16px sansSerif";
	search.style.color = "black";
	poster.onclick = function stopSearch() {
		clearInterval(crawlSearch);
	};
};
};

var frameCon = document.createElement("div");
frameCon.setAttribute("id", "frameCon");
frameCon.setAttribute("class", "frameCon");
document.body.appendChild(frameCon);

var posterCon = document.createElement("div");
posterCon.setAttribute("id", "posterCon");
posterCon.setAttribute("class", "posterCon");
con.appendChild(posterCon);

var sortByDiv = document.createElement("div");
sortByDiv.setAttribute("id", "sortByDiv");
sortByDiv.setAttribute("class", "sortByDiv");
filters.appendChild(sortByDiv);

var tvCount = movies.length +  " T.V. Series";

var sortTitle = document.createElement("p");
sortTitle.setAttribute("id", "sortTitle");
sortTitle.setAttribute("class", "sortTitle subFilterTitles");
var sortTT = document.createTextNode("Sort by " + tvCount);
sortTitle.appendChild(sortTT);
sortByDiv.appendChild(sortTitle);

var recUPI = false;
var zeroZI = false;
var zZeroI = false;
var rMovieI = false;

function sortOnclick() {
	if (!recUPI) {
		var i = document.getElementById("rUButton");
		i.style.background = "#1900FF";
   		i.style.background = "-webkit-linear-gradient(left, #CC6DFC, #00C3FF 80%)";
   		i.style.background = "-o-linear-gradient(right, #CC6DFC, #00C3FF 80%)";
    	i.style.background = "-moz-linear-gradient(right, #CC6DFC, #00C3FF 80%)";
    	i.style.background = "linear-gradient(to right, #CC6DFC, #00C3FF 80%)";
    	i.style.color = "white";
    	i.style.opacity = "0.9";
    	i.style.textShadow = "0px 0px 24px black";
  		i.style.boxShadow = "-2px -2px 24px #CF19B9, 2px 2px 34px #1900FF";
	}
	if (zeroZI) {
		var i = document.getElementById("zeroZButton");
		i.style.background = "#1900FF";
   		i.style.background = "-webkit-linear-gradient(left top, #CC6DFC 40%, #1900FF)";
   		i.style.background = "-o-linear-gradient(bottom right, #CC6DFC 40%, #1900FF)";
    	i.style.background = "-moz-linear-gradient(bottom right, #CC6DFC 40%, #1900FF)";
    	i.style.background = "linear-gradient(to bottom right, #CC6DFC 40%, #1900FF)";
    	i.style.color = "yellow";
    	i.style.opacity = "1";
    	i.style.textShadow = "0px 0px 16px black";
    	i.style.borderBottom = "1px solid #00C3FF";
    	i.style.borderRight = "1px solid #00C3FF";
  		i.style.boxShadow = "0 0 10px #fff, 0 0 20px #fff, -2px -2px 24px #CF19B9, -4px -4px 40px #CF19B9, 2px 2px 24px #1900FF, 4px 4px 40px #1900FF";
	} else {
		var i = document.getElementById("zeroZButton");
		i.style.background = "#1900FF";
   		i.style.background = "-webkit-linear-gradient(left, #CC6DFC, #00C3FF 80%)";
   		i.style.background = "-o-linear-gradient(right, #CC6DFC, #00C3FF 80%)";
    	i.style.background = "-moz-linear-gradient(right, #CC6DFC, #00C3FF 80%)";
    	i.style.background = "linear-gradient(to right, #CC6DFC, #00C3FF 80%)";
    	i.style.color = "white";
    	i.style.opacity = "0.9";
  		i.style.boxShadow = "-2px -2px 24px #CF19B9, 2px 2px 34px #1900FF";
	}
	if (zZeroI) {
		var i = document.getElementById("zZeroButton");
		i.style.background = "#1900FF";
   		i.style.background = "-webkit-linear-gradient(left top, #CC6DFC 40%, #1900FF)";
   		i.style.background = "-o-linear-gradient(bottom right, #CC6DFC 40%, #1900FF)";
    	i.style.background = "-moz-linear-gradient(bottom right, #CC6DFC 40%, #1900FF)";
    	i.style.background = "linear-gradient(to bottom right, #CC6DFC 40%, #1900FF)";
    	i.style.color = "yellow";
    	i.style.opacity = "1";
    	i.style.textShadow = "0px 0px 16px black";
    	i.style.borderBottom = "1px solid #00C3FF";
    	i.style.borderRight = "1px solid #00C3FF";
  		i.style.boxShadow = "0 0 10px #fff, 0 0 20px #fff, -2px -2px 24px #CF19B9, -4px -4px 40px #CF19B9, 2px 2px 24px #1900FF, 4px 4px 40px #1900FF";
	} else {
		var i = document.getElementById("zZeroButton");
		i.style.background = "#1900FF";
   		i.style.background = "-webkit-linear-gradient(left, #CC6DFC, #00C3FF 80%)";
   		i.style.background = "-o-linear-gradient(right, #CC6DFC, #00C3FF 80%)";
    	i.style.background = "-moz-linear-gradient(right, #CC6DFC, #00C3FF 80%)";
    	i.style.background = "linear-gradient(to right, #CC6DFC, #00C3FF 80%)";
    	i.style.color = "white";
    	i.style.opacity = "0.9";
  		i.style.boxShadow = "-2px -2px 24px #CF19B9, 2px 2px 34px #1900FF";
	}
	if (rMovieI) {
		var i = document.getElementById("rMovieButton");
		i.style.background = "#1900FF";
   		i.style.background = "-webkit-linear-gradient(left top, #CC6DFC 40%, #1900FF)";
   		i.style.background = "-o-linear-gradient(bottom right, #CC6DFC 40%, #1900FF)";
    	i.style.background = "-moz-linear-gradient(bottom right, #CC6DFC 40%, #1900FF)";
    	i.style.background = "linear-gradient(to bottom right, #CC6DFC 40%, #1900FF)";
    	i.style.color = "yellow";
    	i.style.opacity = "1";
    	i.style.textShadow = "0px 0px 16px black";
    	i.style.borderBottom = "1px solid #00C3FF";
    	i.style.borderRight = "1px solid #00C3FF";
  		i.style.boxShadow = "0 0 10px #fff, 0 0 20px #fff, -2px -2px 24px #CF19B9, -4px -4px 40px #CF19B9, 2px 2px 24px #1900FF, 4px 4px 40px #1900FF";
	} else {
		var i = document.getElementById("rMovieButton");
		i.style.background = "#1900FF";
   		i.style.background = "-webkit-linear-gradient(left, #CC6DFC, #00C3FF 80%)";
   		i.style.background = "-o-linear-gradient(right, #CC6DFC, #00C3FF 80%)";
    	i.style.background = "-moz-linear-gradient(right, #CC6DFC, #00C3FF 80%)";
    	i.style.background = "linear-gradient(to right, #CC6DFC, #00C3FF 80%)";
    	i.style.color = "white";
    	i.style.opacity = "0.9";
  		i.style.boxShadow = "-2px -2px 24px #CF19B9, 2px 2px 34px #1900FF";
	}
};

function recUp() {
	location.reload();
};

var rUButton = document.createElement("div");
rUButton.setAttribute("id", "rUButton");
rUButton.setAttribute("class", "rUButton sort");
rUButton.setAttribute("onclick", "recUp()");
sortByDiv.appendChild(rUButton);

var rUButtonP = document.createElement("p");
rUButtonP.setAttribute("id", "rUButtonP");
rUButtonP.setAttribute("class", "rUButtonP");
var rUButtonText = document.createTextNode("Recently Uploaded");
rUButtonP.appendChild(rUButtonText);
rUButton.appendChild(rUButtonP);

function zeroZ() {
	x = movies.sort();
	run(x);
	recUPI = false;
	zeroZI = true;
	zZeroI = false;
	rMovieI = false;
};

var zeroZButton = document.createElement("div");
zeroZButton.setAttribute("id", "zeroZButton");
zeroZButton.setAttribute("class", "zeroZButton sort");
zeroZButton.setAttribute("onclick", "zeroZ(), sortOnclick()");
sortByDiv.appendChild(zeroZButton);

var zeroZButtonP = document.createElement("p");
zeroZButtonP.setAttribute("id", "zeroZButtonP");
zeroZButtonP.setAttribute("class", "zeroZButtonP");
var zeroZButtonText = document.createTextNode("0 to Z");
zeroZButtonP.appendChild(zeroZButtonText);
zeroZButton.appendChild(zeroZButtonP);

function zZero() {
	var x = movies.sort();
	sr = x.reverse();
	run(sr);
	recUPI = false;
	zeroZI = false;
	zZeroI = true;
	rMovieI = false;
};

var zZeroButton = document.createElement("div");
zZeroButton.setAttribute("id", "zZeroButton");
zZeroButton.setAttribute("class", "zZeroButton sort");
zZeroButton.setAttribute("onclick", "zZero(), sortOnclick()");
sortByDiv.appendChild(zZeroButton);

var zZeroButtonP = document.createElement("p");
zZeroButtonP.setAttribute("id", "zZeroButtonP");
zZeroButtonP.setAttribute("class", "zZeroButtonP");
var zZeroButtonText = document.createTextNode("Z to 0");
zZeroButtonP.appendChild(zZeroButtonText);
zZeroButton.appendChild(zZeroButtonP);

var rMovieY = false;

function rMovieCheck() {
	if (!rMovieY) {
		rMovie();
	}
}

function rMovie() {
	var a = document.getElementsByClassName("poster");
	for (x = 0; x < movies.length; x++) {
		a[x].style.width = "0px";
		a[x].style.height = "0px";
		a[x].style.position = "fixed";
		a[x].style.zIndex = "0";
	}
	var b = Math.round(Math.random() * movies.length);
	var showRandom = document.getElementsByClassName("poster");
	showRandom[b].style.position = "relative";
	showRandom[b].style.width = "181px"; 
    showRandom[b].style.height = "274px";
	showRandom[b].style.zIndex = "1";
	var pos = 0;
	if (!rMovieY) {
    	var id = setInterval(frame, 2);
	}
    function frame() {
    	if (pos == 120) {
        	clearInterval(id);
        	rMovieY = false;
    	} else {
        	pos++; 
        	showRandom[b].style.width = 181 + pos + 'px'; 
        	showRandom[b].style.height = 274 + pos + 'px'; 
        	rMovieY = true;
    	}
  	};

	recUPI = false;
	zeroZI = false;
	zZeroI = false;
	rMovieI = true;
};

var rMovieButton = document.createElement("div");
rMovieButton.setAttribute("id", "rMovieButton");
rMovieButton.setAttribute("class", "rMovieButton sort");
rMovieButton.setAttribute("onclick", "rMovieCheck(), sortOnclick()");
sortByDiv.appendChild(rMovieButton);

var rMovieButtonP = document.createElement("p");
rMovieButtonP.setAttribute("id", "rMovieButtonP");
rMovieButtonP.setAttribute("class", "rMovieButtonP");
var rMovieButtonText = document.createTextNode("Random T.V. Series");
rMovieButtonP.appendChild(rMovieButtonText);
rMovieButton.appendChild(rMovieButtonP);

var genreTitle = document.createElement("p");
genreTitle.setAttribute("id", "genreTitle");
genreTitle.setAttribute("class", "genreTitle subFilterTitles");
var genreTT = document.createTextNode("Genre Filter");
genreTitle.appendChild(genreTT);
filters.appendChild(genreTitle);

var genreDiv = document.createElement("div");
genreDiv.setAttribute("id", "genreDiv");
genreDiv.setAttribute("class", "genreDiv scrollFilter");
filters.appendChild(genreDiv);

var genre = [
	"action",
	"adventure",
	"animation",
	"biography",
	"comedy",
	"crime",
	"documentary",
	"drama",
	"family",
	"fantasy",
	"film-noir",
	"history",
	"horror",
	"music",
	"musical",
	"mystery",
	"romance",
	"sci-fi",
	"sport",
	"thriller",
	"war",
	"western"
]

for (g = 0; g < genre.length; g++) {
	var gCon = document.createElement("div");
	gCon.setAttribute("id", "gCon" + g);
	gCon.setAttribute("class", "gCon filterLinks"); 
	genreDiv.appendChild(gCon);

	var box = document.createElement("input");
	box.setAttribute("id", "box" + g);
	box.setAttribute("class", "box checkbox");
	box.setAttribute("type", "checkbox");
	box.setAttribute("onclick", "genreCheck()");
	gCon.appendChild(box);

	var genreP = document.createElement("p");
	genreP.setAttribute("id", "genreP" + g);
	genreP.setAttribute("class", "genreP filterText");
	var genreText = document.createTextNode(genre[g] + "");
	genreP.appendChild(genreText);
	gCon.appendChild(genreP);
}

var actionI = document.getElementsByClassName("action");
var adventureI = document.getElementsByClassName("adventure");
var animationI = document.getElementsByClassName("animation");
var biographyI = document.getElementsByClassName("biography");
var comedyI = document.getElementsByClassName("comedy");
var crimeI = document.getElementsByClassName("crime");
var documentaryI = document.getElementsByClassName("documentary");
var dramaI = document.getElementsByClassName("drama");
var familyI = document.getElementsByClassName("family");
var fantasyI = document.getElementsByClassName("fantasy");
var filmNoirI = document.getElementsByClassName("filmNoir");
var historyI = document.getElementsByClassName("history");
var horrorI = document.getElementsByClassName("horror");
var musicI = document.getElementsByClassName("music");
var musicalI = document.getElementsByClassName("musical");
var mysteryI = document.getElementsByClassName("mystery");
var romanceI = document.getElementsByClassName("romance");
var sciFiI = document.getElementsByClassName("sciFi");
var sportI = document.getElementsByClassName("sport");
var thrillerI = document.getElementsByClassName("thriller");
var warI = document.getElementsByClassName("war");
var westernI = document.getElementsByClassName("western");

function genreCheck() {
	var actionBox = document.getElementById("box0");
	var adventureBox = document.getElementById("box1");
	var animationBox = document.getElementById("box2");
	var biographyBox = document.getElementById("box3");
	var comedyBox = document.getElementById("box4");
	var crimeBox = document.getElementById("box5");
	var documentaryBox = document.getElementById("box6");
	var dramaBox = document.getElementById("box7");
	var familyBox = document.getElementById("box8");
	var fantasyBox = document.getElementById("box9");
	var filmNoirBox = document.getElementById("box10");
	var historyBox = document.getElementById("box11");
	var horrorBox = document.getElementById("box12");
	var musicBox = document.getElementById("box13");
	var musicalBox = document.getElementById("box14");
	var mysteryBox = document.getElementById("box15");
	var romanceBox = document.getElementById("box16");
	var sciFiBox = document.getElementById("box17");
	var sportBox = document.getElementById("box18");
	var thrillerBox = document.getElementById("box19");
	var warBox = document.getElementById("box20");
	var westernBox = document.getElementById("box21");

	var a = document.getElementsByClassName("poster");
	if(!box.checked) {
		for (x0 = 0; x0 < movies.length; x0++) {
			a[x0].style.width = "181px";
			a[x0].style.height = "274px";
			a[x0].style.position = "relative";
			a[x0].style.zIndex = "2";
			a[x0].style.float = "left";
		}
	}
	if (actionBox.checked) {
		for (g0 = 0; g0 < movies.length; g0++) {
			a[g0].style.width = "0px";
			a[g0].style.height = "0px";
			a[g0].style.position = "fixed";
			a[g0].style.zIndex = "0";
		}
		for (x1 = 0; x1 < movies.length; x1++) {
			actionI[x1].style.width = "181px";
			actionI[x1].style.height = "274px";
			actionI[x1].style.position = "relative";
			actionI[x1].style.zIndex = "2";
			actionI[x1].style.float = "left";
		}
	}
	if (adventureBox.checked) {
		for (g1 = 0; g1 < movies.length; g1++) {
			a[g1].style.width = "0px";
			a[g1].style.height = "0px";
			a[g1].style.position = "fixed";
			a[g1].style.zIndex = "0";
		}
		for (x2 = 0; x2 < movies.length; x2++) {
			adventureI[x2].style.width = "181px";
			adventureI[x2].style.height = "274px";
			adventureI[x2].style.position = "relative";
			adventureI[x2].style.zIndex = "2";
			adventureI[x2].style.float = "left";
		}
	}
	if (animationBox.checked) {
		for (g2 = 0; g2 < movies.length; g2++) {
			a[g2].style.width = "0px";
			a[g2].style.height = "0px";
			a[g2].style.position = "fixed";
			a[g2].style.zIndex = "0";
		}
		for (x3 = 0; x3 < movies.length; x3++) {
			animationI[x3].style.width = "181px";
			animationI[x3].style.height = "274px";
			animationI[x3].style.position = "relative";
			animationI[x3].style.zIndex = "2";
			animationI[x3].style.float = "left";
		}
	}
	if (biographyBox.checked) {
		for (g3 = 0; g3 < movies.length; g3++) {
			a[g3].style.width = "0px";
			a[g3].style.height = "0px";
			a[g3].style.position = "fixed";
			a[g3].style.zIndex = "0";
		}
		for (x4 = 0; x4 < movies.length; x4++) {
			biographyI[x4].style.width = "181px";
			biographyI[x4].style.height = "274px";
			biographyI[x4].style.position = "relative";
			biographyI[x4].style.zIndex = "2";
			biographyI[x4].style.float = "left";
		}
	}
	if (comedyBox.checked) {
		for (g4 = 0; g4 < movies.length; g4++) {
			a[g4].style.width = "0px";
			a[g4].style.height = "0px";
			a[g4].style.position = "fixed";
			a[g4].style.zIndex = "0";
		}
		for (x5 = 0; x5 < movies.length; x5++) {
			comedyI[x5].style.width = "181px";
			comedyI[x5].style.height = "274px";
			comedyI[x5].style.position = "relative";
			comedyI[x5].style.zIndex = "2";
			comedyI[x5].style.float = "left";
		}
	}
	if (crimeBox.checked) {
		for (g5 = 0; g5 < movies.length; g5++) {
			a[g5].style.width = "0px";
			a[g5].style.height = "0px";
			a[g5].style.position = "fixed";
			a[g5].style.zIndex = "0";
		}
		for (x6 = 0; x6 < movies.length; x6++) {
			crimeI[x6].style.width = "181px";
			crimeI[x6].style.height = "274px";
			crimeI[x6].style.position = "relative";
			crimeI[x6].style.zIndex = "2";
			crimeI[x6].style.float = "left";
		}
	}
	if (documentaryBox.checked) {
		for (g6 = 0; g6 < movies.length; g6++) {
			a[g6].style.width = "0px";
			a[g6].style.height = "0px";
			a[g6].style.position = "fixed";
			a[g6].style.zIndex = "0";
		}
		for (x7 = 0; x7 < movies.length; x7++) {
			documentaryI[x7].style.width = "181px";
			documentaryI[x7].style.height = "274px";
			documentaryI[x7].style.position = "relative";
			documentaryI[x7].style.zIndex = "2";
			documentaryI[x7].style.float = "left";
		}
	}
	if (dramaBox.checked) {
		for (g7 = 0; g7 < movies.length; g7++) {
			a[g7].style.width = "0px";
			a[g7].style.height = "0px";
			a[g7].style.position = "fixed";
			a[g7].style.zIndex = "0";
		}
		for (x8 = 0; x8 < movies.length; x8++) {
			dramaI[x8].style.width = "181px";
			dramaI[x8].style.height = "274px";
			dramaI[x8].style.position = "relative";
			dramaI[x8].style.zIndex = "2";
			dramaI[x8].style.float = "left";
		}
	}
	if (familyBox.checked) {
		for (g8 = 0; g8 < movies.length; g8++) {
			a[g8].style.width = "0px";
			a[g8].style.height = "0px";
			a[g8].style.position = "fixed";
			a[g8].style.zIndex = "0";
		}
		for (x9 = 0; x9 < movies.length; x9++) {
			familyI[x9].style.width = "181px";
			familyI[x9].style.height = "274px";
			familyI[x9].style.position = "relative";
			familyI[x9].style.zIndex = "2";
			familyI[x9].style.float = "left";
		}
	}
	if (fantasyBox.checked) {
		for (g9 = 0; g9 < movies.length; g9++) {
			a[g9].style.width = "0px";
			a[g9].style.height = "0px";
			a[g9].style.position = "fixed";
			a[g9].style.zIndex = "0";
		}
		for (x10 = 0; x10 < movies.length; x10++) {
			fantasyI[x10].style.width = "181px";
			fantasyI[x10].style.height = "274px";
			fantasyI[x10].style.position = "relative";
			fantasyI[x10].style.zIndex = "2";
			fantasyI[x10].style.float = "left";
		}
	}
	if (filmNoirBox.checked) {
		for (g10 = 0; g10 < movies.length; g10++) {
			a[g10].style.width = "0px";
			a[g10].style.height = "0px";
			a[g10].style.position = "fixed";
			a[g10].style.zIndex = "0";
		}
		for (x11 = 0; x11 < movies.length; x11++) {
			filmNoirI[x11].style.width = "181px";
			filmNoirI[x11].style.height = "274px";
			filmNoirI[x11].style.position = "relative";
			filmNoirI[x11].style.zIndex = "2";
			filmNoirI[x11].style.float = "left";
		}
	}
	if (historyBox.checked) {
		for (g11 = 0; g11 < movies.length; g11++) {
			a[g11].style.width = "0px";
			a[g11].style.height = "0px";
			a[g11].style.position = "fixed";
			a[g11].style.zIndex = "0";
		}
		for (x12 = 0; x12 < movies.length; x12++) {
			historyI[x12].style.width = "181px";
			historyI[x12].style.height = "274px";
			historyI[x12].style.position = "relative";
			historyI[x12].style.zIndex = "2";
			historyI[x12].style.float = "left";
		}
	}
	if (horrorBox.checked) {
		for (g12 = 0; g12 < movies.length; g12++) {
			a[g12].style.width = "0px";
			a[g12].style.height = "0px";
			a[g12].style.position = "fixed";
			a[g12].style.zIndex = "0";
		}
		for (x13 = 0; x13 < movies.length; x13++) {
			horrorI[x13].style.width = "181px";
			horrorI[x13].style.height = "274px";
			horrorI[x13].style.position = "relative";
			horrorI[x13].style.zIndex = "2";
			horrorI[x13].style.float = "left";
		}
	}
	if (musicBox.checked) {
		for (g13 = 0; g13 < movies.length; g13++) {
			a[g13].style.width = "0px";
			a[g13].style.height = "0px";
			a[g13].style.position = "fixed";
			a[g13].style.zIndex = "0";
		}
		for (x14 = 0; x14 < movies.length; x14++) {
			musicI[x14].style.width = "181px";
			musicI[x14].style.height = "274px";
			musicI[x14].style.position = "relative";
			musicI[x14].style.zIndex = "2";
			musicI[x14].style.float = "left";
		}
	}
	if (musicalBox.checked) {
		for (g14 = 0; g14 < movies.length; g14++) {
			a[g14].style.width = "0px";
			a[g14].style.height = "0px";
			a[g14].style.position = "fixed";
			a[g14].style.zIndex = "0";
		}
		for (x15 = 0; x15 < movies.length; x15++) {
			musicalI[x15].style.width = "181px";
			musicalI[x15].style.height = "274px";
			musicalI[x15].style.position = "relative";
			musicalI[x15].style.zIndex = "2";
			musicalI[x15].style.float = "left";
		}
	}
	if (mysteryBox.checked) {
		for (g15 = 0; g15 < movies.length; g15++) {
			a[g15].style.width = "0px";
			a[g15].style.height = "0px";
			a[g15].style.position = "fixed";
			a[g15].style.zIndex = "0";
		}
		for (x16 = 0; x16 < movies.length; x16++) {
			mysteryI[x16].style.width = "181px";
			mysteryI[x16].style.height = "274px";
			mysteryI[x16].style.position = "relative";
			mysteryI[x16].style.zIndex = "2";
			mysteryI[x16].style.float = "left";
		}
	}
	if (romanceBox.checked) {
		for (g16 = 0; g16 < movies.length; g16++) {
			a[g16].style.width = "0px";
			a[g16].style.height = "0px";
			a[g16].style.position = "fixed";
			a[g16].style.zIndex = "0";
		}
		for (x17 = 0; x17 < movies.length; x17++) {
			romanceI[x17].style.width = "181px";
			romanceI[x17].style.height = "274px";
			romanceI[x17].style.position = "relative";
			romanceI[x17].style.zIndex = "2";
			romanceI[x17].style.float = "left";
		}
	}
	if (sciFiBox.checked) {
		for (g17 = 0; g17 < movies.length; g17++) {
			a[g17].style.width = "0px";
			a[g17].style.height = "0px";
			a[g17].style.position = "fixed";
			a[g17].style.zIndex = "0";
		}
		for (x18 = 0; x18 < movies.length; x18++) {
			sciFiI[x18].style.width = "181px";
			sciFiI[x18].style.height = "274px";
			sciFiI[x18].style.position = "relative";
			sciFiI[x18].style.zIndex = "2";
			sciFiI[x18].style.float = "left";
		}
	}
	if (sportBox.checked) {
		for (g18 = 0; g18 < movies.length; g18++) {
			a[g18].style.width = "0px";
			a[g18].style.height = "0px";
			a[g18].style.position = "fixed";
			a[g18].style.zIndex = "0";
		}
		for (x19 = 0; x19 < movies.length; x19++) {
			sportI[x19].style.width = "181px";
			sportI[x19].style.height = "274px";
			sportI[x19].style.position = "relative";
			sportI[x19].style.zIndex = "2";
			sportI[x19].style.float = "left";
		}
	}
	if (thrillerBox.checked) {
		for (g19 = 0; g19 < movies.length; g19++) {
			a[g19].style.width = "0px";
			a[g19].style.height = "0px";
			a[g19].style.position = "fixed";
			a[g19].style.zIndex = "0";
		}
		for (x20 = 0; x20 < movies.length; x20++) {
			thrillerI[x20].style.width = "181px";
			thrillerI[x20].style.height = "274px";
			thrillerI[x20].style.position = "relative";
			thrillerI[x20].style.zIndex = "2";
			thrillerI[x20].style.float = "left";
		}
	}
	if (warBox.checked) {
		for (g20 = 0; g20 < movies.length; g20++) {
			a[g20].style.width = "0px";
			a[g20].style.height = "0px";
			a[g20].style.position = "fixed";
			a[g20].style.zIndex = "0";
		}
		for (x21 = 0; x21 < movies.length; x21++) {
			warI[x21].style.width = "181px";
			warI[x21].style.height = "274px";
			warI[x21].style.position = "relative";
			warI[x21].style.zIndex = "2";
			warI[x21].style.float = "left";
		}
	}
	if (westernBox.checked) {
		for (g21 = 0; g21 < movies.length; g21++) {
			a[g21].style.width = "0px";
			a[g21].style.height = "0px";
			a[g21].style.position = "fixed";
			a[g21].style.zIndex = "0";
		}
		for (x22 = 0; x22 < movies.length; x22++) {
			westernI[x22].style.width = "181px";
			westernI[x22].style.height = "274px";
			westernI[x22].style.position = "relative";
			westernI[x22].style.zIndex = "2";
			westernI[x22].style.float = "left";
		}
	}
	var actionIC = 0;
	var adventureIC = 0;
	var animationIC = 0;
	var biographyIC = 0;
	var comedyIC = 0;
	var crimeIC = 0;
	var documentaryIC = 0;
	var dramaIC = 0;
	var familyIC = 0;
	var fantasyIC = 0;
	var filmNoirIC = 0;
	var historyIC = 0;
	var horrorIC = 0;
	var musicIC = 0;
	var musicalIC = 0;
	var mysteryIC = 0;
	var romanceIC = 0;
	var sciFiIC = 0;
	var sportIC = 0;
	var thrillerIC = 0;
	var warIC = 0;
	var westernIC = 0;
	for (gCount = 0; gCount < movies.length; gCount++) {
		if (actionI[gCount]) {
			actionIC++;
		}
		document.getElementById("genreP0").innerHTML = "action" +  "(" + actionIC + ")";
		if (adventureI[gCount]) {
			adventureIC++;
		}
		document.getElementById("genreP1").innerHTML = "adventure" + "(" + adventureIC + ")";
		if (animationI[gCount]) {
			animationIC++;
		}
		document.getElementById("genreP2").innerHTML = "animation" + "(" + animationIC + ")";
		if (biographyI[gCount]) {
			biographyIC++;
		}
		document.getElementById("genreP3").innerHTML = "biography" + "(" + biographyIC + ")";
		if (comedyI[gCount]) {
			comedyIC++;
		}
		document.getElementById("genreP4").innerHTML = "comedy" + "(" + comedyIC + ")";
		if (crimeI[gCount]) {
			crimeIC++;
		}
		document.getElementById("genreP5").innerHTML = "crime" + "(" + crimeIC + ")";
		if (documentaryI[gCount]) {
			documentaryIC++;
		}
		document.getElementById("genreP6").innerHTML = "documentary" + "(" + documentaryIC + ")";
		if (dramaI[gCount]) {
			dramaIC++;
		}
		document.getElementById("genreP7").innerHTML = "drama" + "(" + dramaIC + ")";
		if (familyI[gCount]) {
			familyIC++;
		}
		document.getElementById("genreP8").innerHTML = "family" + "(" + familyIC + ")";
		if (fantasyI[gCount]) {
			fantasyIC++;
		}
		document.getElementById("genreP9").innerHTML = "fantasy" + "(" + fantasyIC + ")";
		if (filmNoirI[gCount]) {
			filmNoirIC++;
		}
		document.getElementById("genreP10").innerHTML = "Film-Noir" + "(" + filmNoirIC + ")";
		if (historyI[gCount]) {
			historyIC++;
		}
		document.getElementById("genreP11").innerHTML = "history" + "(" + historyIC + ")";
		if (horrorI[gCount]) {
			horrorIC++;
		}
		document.getElementById("genreP12").innerHTML = "horror" + "(" + horrorIC + ")";
		if (musicI[gCount]) {
			musicIC++;
		}
		document.getElementById("genreP13").innerHTML = "music" + "(" + musicIC + ")";
		if (musicalI[gCount]) {
			musicalIC++;
		}
		document.getElementById("genreP14").innerHTML = "musical" + "(" + musicalIC + ")";
		if (mysteryI[gCount]) {
			mysteryIC++;
		}
		document.getElementById("genreP15").innerHTML = "mystery" + "(" + mysteryIC + ")";
		if (romanceI[gCount]) {
			romanceIC++;
		}
		document.getElementById("genreP16").innerHTML = "romance" + "(" + romanceIC + ")";
		if (sciFiI[gCount]) {
			sciFiIC++;
		}
		document.getElementById("genreP17").innerHTML = "Sci-Fi" + "(" + sciFiIC + ")";
		if (sportI[gCount]) {
			sportIC++;
		}
		document.getElementById("genreP18").innerHTML = "sport" + "(" + sportIC + ")";
		if (thrillerI[gCount]) {
			thrillerIC++;
		}
		document.getElementById("genreP19").innerHTML = "thriller" + "(" + thrillerIC + ")";
		if (warI[gCount]) {
			warIC++;
		}
		document.getElementById("genreP20").innerHTML = "war" + "(" + warIC + ")";
		if (westernI[gCount]) {
			westernIC++;
		}
		document.getElementById("genreP21").innerHTML = "western" + "(" + westernIC + ")";
	}
};

var yearTitle = document.createElement("p");
yearTitle.setAttribute("id", "yearTitle");
yearTitle.setAttribute("class", "yearTitle subFilterTitles");
var yearTT = document.createTextNode("Year Filter");
yearTitle.appendChild(yearTT);
filters.appendChild(yearTitle);

var yearDiv = document.createElement("div");
yearDiv.setAttribute("id", "yearDiv");
yearDiv.setAttribute("class", "yearDiv scrollFilter");
filters.appendChild(yearDiv);

var year = [
	"2017-2010",
	"2009-2000",
	"1999-1990",
	"1989-1980",
	"1979-1970",
	"1969-1960",
	"1959-1950",
	"1949-1940",
	"1939-1930"
]

for (y = 0; y < year.length; y++) {
	var yCon = document.createElement("div");
	yCon.setAttribute("id", "yCon" + y);
	yCon.setAttribute("class", "yCon filterLinks"); 
	yearDiv.appendChild(yCon);

	var yBox = document.createElement("input");
	yBox.setAttribute("id", "yBox" + y);
	yBox.setAttribute("class", "yBox checkbox");
	yBox.setAttribute("onclick", "yearCheck()");
	yBox.setAttribute("type", "checkbox");
	yCon.appendChild(yBox);

	var yearP = document.createElement("p");
	yearP.setAttribute("id", "yearP" + y);
	yearP.setAttribute("class", "yearP filterText");
	var yearText = document.createTextNode(year[y] + "");
	yearP.appendChild(yearText);
	yCon.appendChild(yearP);
}

var y2017 = document.getElementsByClassName("2017");
var y2016 = document.getElementsByClassName("2016");
var y2015 = document.getElementsByClassName("2015");
var y2014 = document.getElementsByClassName("2014");
var y2013 = document.getElementsByClassName("2013");
var y2012 = document.getElementsByClassName("2012");
var y2011 = document.getElementsByClassName("2011");
var y2010 = document.getElementsByClassName("2010");
var y2009 = document.getElementsByClassName("2009");
var y2008 = document.getElementsByClassName("2008");
var y2007 = document.getElementsByClassName("2007");
var y2006 = document.getElementsByClassName("2006");
var y2005 = document.getElementsByClassName("2005");
var y2004 = document.getElementsByClassName("2004");
var y2003 = document.getElementsByClassName("2003");
var y2002 = document.getElementsByClassName("2002");
var y2001 = document.getElementsByClassName("2001");
var y2000 = document.getElementsByClassName("2000");
var y1999 = document.getElementsByClassName("1999");
var y1998 = document.getElementsByClassName("1998");
var y1997 = document.getElementsByClassName("1997");
var y1996 = document.getElementsByClassName("1996");
var y1995 = document.getElementsByClassName("1995");
var y1994 = document.getElementsByClassName("1994");
var y1993 = document.getElementsByClassName("1993");
var y1992 = document.getElementsByClassName("1992");
var y1991 = document.getElementsByClassName("1991");
var y1990 = document.getElementsByClassName("1990");
var y1989 = document.getElementsByClassName("1989");
var y1988 = document.getElementsByClassName("1988");
var y1987 = document.getElementsByClassName("1987");
var y1986 = document.getElementsByClassName("1986");
var y1985 = document.getElementsByClassName("1985");
var y1984 = document.getElementsByClassName("1984");
var y1983 = document.getElementsByClassName("1983");
var y1982 = document.getElementsByClassName("1982");
var y1981 = document.getElementsByClassName("1981");
var y1980 = document.getElementsByClassName("1980");
var y1979 = document.getElementsByClassName("1979");
var y1978 = document.getElementsByClassName("1978");
var y1977 = document.getElementsByClassName("1977");
var y1976 = document.getElementsByClassName("1976");
var y1975 = document.getElementsByClassName("1975");
var y1974 = document.getElementsByClassName("1974");
var y1973 = document.getElementsByClassName("1973");
var y1972 = document.getElementsByClassName("1972");
var y1971 = document.getElementsByClassName("1971");
var y1970 = document.getElementsByClassName("1970");
var y1969 = document.getElementsByClassName("1969");
var y1968 = document.getElementsByClassName("1968");
var y1967 = document.getElementsByClassName("1967");
var y1966 = document.getElementsByClassName("1966");
var y1965 = document.getElementsByClassName("1965");
var y1964 = document.getElementsByClassName("1964");
var y1963 = document.getElementsByClassName("1963");
var y1962 = document.getElementsByClassName("1962");
var y1961 = document.getElementsByClassName("1961");
var y1960 = document.getElementsByClassName("1960");
var y1959 = document.getElementsByClassName("1959");
var y1958 = document.getElementsByClassName("1958");
var y1957 = document.getElementsByClassName("1957");
var y1956 = document.getElementsByClassName("1956");
var y1955 = document.getElementsByClassName("1955");
var y1954 = document.getElementsByClassName("1954");
var y1953 = document.getElementsByClassName("1953");
var y1952 = document.getElementsByClassName("1952");
var y1951 = document.getElementsByClassName("1951");
var y1950 = document.getElementsByClassName("1950");
var y1949 = document.getElementsByClassName("1949");
var y1948 = document.getElementsByClassName("1948");
var y1947 = document.getElementsByClassName("1947");
var y1946 = document.getElementsByClassName("1946");
var y1945 = document.getElementsByClassName("1945");
var y1944 = document.getElementsByClassName("1944");
var y1943 = document.getElementsByClassName("1943");
var y1942 = document.getElementsByClassName("1942");
var y1941 = document.getElementsByClassName("1941");
var y1940 = document.getElementsByClassName("1940");
var y1939 = document.getElementsByClassName("1939");
var y1938 = document.getElementsByClassName("1938");
var y1937 = document.getElementsByClassName("1937");
var y1936 = document.getElementsByClassName("1936");
var y1935 = document.getElementsByClassName("1935");
var y1934 = document.getElementsByClassName("1934");	
var y1933 = document.getElementsByClassName("1933");
var y1932 = document.getElementsByClassName("1932");
var y1931 = document.getElementsByClassName("1931");
var y1930 = document.getElementsByClassName("1930");

function yearCheck() {
	var b2010 = document.getElementById("yBox0");
	var b2000 = document.getElementById("yBox1");
	var b1990 = document.getElementById("yBox2");
	var b1980 = document.getElementById("yBox3");
	var b1970 = document.getElementById("yBox4");
	var b1960 = document.getElementById("yBox5");
	var b1950 = document.getElementById("yBox6");
	var b1940 = document.getElementById("yBox7");
	var b1930 = document.getElementById("yBox8");

	var y10C = 0;
	var y00C = 0;
	var y90C = 0;
	var y80C = 0;
	var y70C = 0;
	var y60C = 0;
	var y50C = 0;
	var y40C = 0;
	var y30C = 0;
	for (yCount = 0; yCount < movies.length; yCount++) {
		if (y2017[yCount]) {
			y10C++;
		}
		if (y2016[yCount]) {
			y10C++;
		}
		if (y2015[yCount]) {
			y10C++;
		}
		if (y2014[yCount]) {
			y10C++;
		}
		if (y2013[yCount]) {
			y10C++;
		}
		if (y2012[yCount]) {
			y10C++;
		}
		if (y2011[yCount]) {
			y10C++;
		}
		if (y2010[yCount]) {
			y10C++;
		}
		document.getElementById("yearP0").innerHTML = "2017-2010" +  "(" + y10C + ")";
		if (y2009[yCount]) {
			y00C++;
		}
		if (y2008[yCount]) {
			y00C++;
		}
		if (y2007[yCount]) {
			y00C++;
		}
		if (y2006[yCount]) {
			y00C++;
		}
		if (y2005[yCount]) {
			y00C++;
		}
		if (y2004[yCount]) {
			y00C++;
		}
		if (y2003[yCount]) {
			y00C++;
		}
		if (y2002[yCount]) {
			y00C++;
		}
		if (y2001[yCount]) {
			y00C++;
		}
		if (y2000[yCount]) {
			y00C++;
		}
		document.getElementById("yearP1").innerHTML = "2009-2000" +  "(" + y00C + ")";
		if (y1999[yCount]) {
			y90C++;
		}
		if (y1998[yCount]) {
			y90C++;
		}
		if (y1997[yCount]) {
			y90C++;
		}
		if (y1996[yCount]) {
			y90C++;
		}
		if (y1995[yCount]) {
			y90C++;
		}
		if (y1994[yCount]) {
			y90C++;
		}
		if (y1993[yCount]) {
			y90C++;
		}
		if (y1992[yCount]) {
			y90C++;
		}
		if (y1991[yCount]) {
			y90C++;
		}
		if (y1990[yCount]) {
			y90C++;
		}
		document.getElementById("yearP2").innerHTML = "1999-1990" +  "(" + y90C + ")";
		if (y1989[yCount]) {
			y80C++;
		}
		if (y1988[yCount]) {
			y80C++;
		}
		if (y1987[yCount]) {
			y80C++;
		}
		if (y1986[yCount]) {
			y80C++;
		}
		if (y1985[yCount]) {
			y80C++;
		}
		if (y1984[yCount]) {
			y80C++;
		}
		if (y1983[yCount]) {
			y80C++;
		}
		if (y1982[yCount]) {
			y80C++;
		}
		if (y1981[yCount]) {
			y80C++;
		}
		if (y1980[yCount]) {
			y80C++;
		}
		document.getElementById("yearP3").innerHTML = "1989-1980" +  "(" + y80C + ")";
		if (y1979[yCount]) {
			y70C++;
		}
		if (y1978[yCount]) {
			y70C++;
		}
		if (y1977[yCount]) {
			y70C++;
		}
		if (y1976[yCount]) {
			y70C++;
		}
		if (y1975[yCount]) {
			y70C++;
		}
		if (y1974[yCount]) {
			y70C++;
		}
		if (y1973[yCount]) {
			y70C++;
		}
		if (y1972[yCount]) {
			y70C++;
		}
		if (y1971[yCount]) {
			y70C++;
		}
		if (y1970[yCount]) {
			y70C++;
		}
		document.getElementById("yearP4").innerHTML = "1979-1970" +  "(" + y70C + ")";
		if (y1969[yCount]) {
			y60C++;
		}
		if (y1968[yCount]) {
			y60C++;
		}
		if (y1967[yCount]) {
			y60C++;
		}
		if (y1966[yCount]) {
			y60C++;
		}
		if (y1965[yCount]) {
			y60C++;
		}
		if (y1964[yCount]) {
			y60C++;
		}
		if (y1963[yCount]) {
			y60C++;
		}
		if (y1962[yCount]) {
			y60C++;
		}
		if (y1961[yCount]) {
			y60C++;
		}
		if (y1960[yCount]) {
			y60C++;
		}
		document.getElementById("yearP5").innerHTML = "1969-1960" +  "(" + y60C + ")";
		if (y1959[yCount]) {
			y50C++;
		}
		if (y1958[yCount]) {
			y50C++;
		}
		if (y1957[yCount]) {
			y50C++;
		}
		if (y1956[yCount]) {
			y50C++;
		}
		if (y1955[yCount]) {
			y50C++;
		}
		if (y1954[yCount]) {
			y50C++;
		}
		if (y1953[yCount]) {
			y50C++;
		}
		if (y1952[yCount]) {
			y50C++;
		}
		if (y1951[yCount]) {
			y50C++;
		}
		if (y1950[yCount]) {
			y50C++;
		}
		document.getElementById("yearP6").innerHTML = "1959-1950" +  "(" + y50C + ")";
		if (y1949[yCount]) {
			y40C++;
		}
		if (y1948[yCount]) {
			y40C++;
		}
		if (y1947[yCount]) {
			y40C++;
		}
		if (y1946[yCount]) {
			y40C++;
		}
		if (y1945[yCount]) {
			y40C++;
		}
		if (y1944[yCount]) {
			y40C++;
		}
		if (y1943[yCount]) {
			y40C++;
		}
		if (y1942[yCount]) {
			y40C++;
		}
		if (y1941[yCount]) {
			y40C++;
		}
		if (y1940[yCount]) {
			y40C++;
		}
		document.getElementById("yearP7").innerHTML = "1949-1940" +  "(" + y40C + ")";
		if (y1939[yCount]) {
			y30C++;
		}
		if (y1938[yCount]) {
			y30C++;
		}
		if (y1937[yCount]) {
			y30C++;
		}
		if (y1936[yCount]) {
			y30C++;
		}
		if (y1935[yCount]) {
			y30C++;
		}
		if (y1934[yCount]) {
			y30C++;
		}
		if (y1933[yCount]) {
			y30C++;
		}
		if (y1932[yCount]) {
			y30C++;
		}
		if (y1931[yCount]) {
			y30C++;
		}
		if (y1930[yCount]) {
			y30C++;
		}
		document.getElementById("yearP8").innerHTML = "1939-1930" +  "(" + y30C + ")";
	}

	var a = document.getElementsByClassName("poster");

	if(!yBox.checked) {
		for (x0 = 0; x0 < movies.length; x0++) {
			a[x0].style.width = "181px";
			a[x0].style.height = "274px";
			a[x0].style.position = "relative";
			a[x0].style.zIndex = "2";
			a[x0].style.float = "left";
		}
	}
	if (b2010.checked) {
		for (y10 = 0; y10 < movies.length; y10++) {
			a[y10].style.width = "0px";
			a[y10].style.height = "0px";
			a[y10].style.position = "fixed";
			a[y10].style.zIndex = "0";
		}
		for (i10 = 0; i10 < y10C; i10++) {
			if (y2016[i10]) {
				y2016[i10].style.width = "181px";
				y2016[i10].style.height = "274px";
				y2016[i10].style.position = "relative";
				y2016[i10].style.zIndex = "2";
				y2016[i10].style.float = "left";
			}
			if (y2015[i10]) {
				y2015[i10].style.width = "181px";
				y2015[i10].style.height = "274px";
				y2015[i10].style.position = "relative";
				y2015[i10].style.zIndex = "2";
				y2015[i10].style.float = "left";
			}
			if (y2014[i10]) {
				y2014[i10].style.width = "181px";
				y2014[i10].style.height = "274px";
				y2014[i10].style.position = "relative";
				y2014[i10].style.zIndex = "2";
				y2014[i10].style.float = "left";
			}
			if (y2013[i10]) {
				y2013[i10].style.width = "181px";
				y2013[i10].style.height = "274px";
				y2013[i10].style.position = "relative";
				y2013[i10].style.zIndex = "2";
				y2013[i10].style.float = "left";
			}
			if (y2012[i10]) {
				y2012[i10].style.width = "181px";
				y2012[i10].style.height = "274px";
				y2012[i10].style.position = "relative";
				y2012[i10].style.zIndex = "2";
				y2012[i10].style.float = "left";
			}
			if (y2011[i10]) {
				y2011[i10].style.width = "181px";
				y2011[i10].style.height = "274px";
				y2011[i10].style.position = "relative";
				y2011[i10].style.zIndex = "2";
				y2011[i10].style.float = "left";
			}
			if (y2010[i10]) {
				y2010[i10].style.width = "181px";
				y2010[i10].style.height = "274px";
				y2010[i10].style.position = "relative";
				y2010[i10].style.zIndex = "2";
				y2010[i10].style.float = "left";
			}
		}
	}
	if (b2000.checked) {
		for (y00 = 0; y00 < movies.length; y00++) {
			a[y00].style.width = "0px";
			a[y00].style.height = "0px";
			a[y00].style.position = "fixed";
			a[y00].style.zIndex = "0";
		}
		for (i00 = 0; i00 < y00C; i00++) {
			if (y2009[i00]) {
				y2009[i00].style.width = "181px";
				y2009[i00].style.height = "274px";
				y2009[i00].style.position = "relative";
				y2009[i00].style.zIndex = "2";
				y2009[i00].style.float = "left";
			}
			if (y2008[i00]) {
				y2008[i00].style.width = "181px";
				y2008[i00].style.height = "274px";
				y2008[i00].style.position = "relative";
				y2008[i00].style.zIndex = "2";
				y2008[i00].style.float = "left";
			}
			if (y2007[i00]) {
				y2007[i00].style.width = "181px";
				y2007[i00].style.height = "274px";
				y2007[i00].style.position = "relative";
				y2007[i00].style.zIndex = "2";
				y2007[i00].style.float = "left";
			}
			if (y2006[i00]) {
				y2006[i00].style.width = "181px";
				y2006[i00].style.height = "274px";
				y2006[i00].style.position = "relative";
				y2006[i00].style.zIndex = "2";
				y2006[i00].style.float = "left";
			}
			if (y2005[i00]) {
				y2005[i00].style.width = "181px";
				y2005[i00].style.height = "274px";
				y2005[i00].style.position = "relative";
				y2005[i00].style.zIndex = "2";
				y2005[i00].style.float = "left";
			}
			if (y2004[i00]) {
				y2004[i00].style.width = "181px";
				y2004[i00].style.height = "274px";
				y2004[i00].style.position = "relative";
				y2004[i00].style.zIndex = "2";
				y2004[i00].style.float = "left";
			}
			if (y2003[i00]) {
				y2003[i00].style.width = "181px";
				y2003[i00].style.height = "274px";
				y2003[i00].style.position = "relative";
				y2003[i00].style.zIndex = "2";
				y2003[i00].style.float = "left";
			}
			if (y2002[i00]) {
				y2002[i00].style.width = "181px";
				y2002[i00].style.height = "274px";
				y2002[i00].style.position = "relative";
				y2002[i00].style.zIndex = "2";
				y2002[i00].style.float = "left";
			}
			if (y2001[i00]) {
				y2001[i00].style.width = "181px";
				y2001[i00].style.height = "274px";
				y2001[i00].style.position = "relative";
				y2001[i00].style.zIndex = "2";
				y2001[i00].style.float = "left";
			}
			if (y2000[i00]) {
				y2000[i00].style.width = "181px";
				y2000[i00].style.height = "274px";
				y2000[i00].style.position = "relative";
				y2000[i00].style.zIndex = "2";
				y2000[i00].style.float = "left";
			}
		}
	}
	if (b1990.checked) {
		for (y90 = 0; y90 < movies.length; y90++) {
			a[y90].style.width = "0px";
			a[y90].style.height = "0px";
			a[y90].style.position = "fixed";
			a[y90].style.zIndex = "0";
		}
		for (i90 = 0; i90 < y90C; i90++) {
			if (y1999[i90]) {
				y1999[i90].style.width = "181px";
				y1999[i90].style.height = "274px";
				y1999[i90].style.position = "relative";
				y1999[i90].style.zIndex = "2";
				y1999[i90].style.float = "left";
			}
			if (y1998[i90]) {
				y1998[i90].style.width = "181px";
				y1998[i90].style.height = "274px";
				y1998[i90].style.position = "relative";
				y1998[i90].style.zIndex = "2";
				y1998[i90].style.float = "left";
			}
			if (y1997[i90]) {
				y1997[i90].style.width = "181px";
				y1997[i90].style.height = "274px";
				y1997[i90].style.position = "relative";
				y1997[i90].style.zIndex = "2";
				y1997[i90].style.float = "left";
			}
			if (y1996[i90]) {
				y1996[i90].style.width = "181px";
				y1996[i90].style.height = "274px";
				y1996[i90].style.position = "relative";
				y1996[i90].style.zIndex = "2";
				y1996[i90].style.float = "left";
			}
			if (y1995[i90]) {
				y1995[i90].style.width = "181px";
				y1995[i90].style.height = "274px";
				y1995[i90].style.position = "relative";
				y1995[i90].style.zIndex = "2";
				y1995[i90].style.float = "left";
			}
			if (y1994[i90]) {
				y1994[i90].style.width = "181px";
				y1994[i90].style.height = "274px";
				y1994[i90].style.position = "relative";
				y1994[i90].style.zIndex = "2";
				y1994[i90].style.float = "left";
			}
			if (y1993[i90]) {
				y1993[i90].style.width = "181px";
				y1993[i90].style.height = "274px";
				y1993[i90].style.position = "relative";
				y1993[i90].style.zIndex = "2";
				y1993[i90].style.float = "left";
			}
			if (y1992[i90]) {
				y1992[i90].style.width = "181px";
				y1992[i90].style.height = "274px";
				y1992[i90].style.position = "relative";
				y1992[i90].style.zIndex = "2";
				y1992[i90].style.float = "left";
			}
			if (y1991[i90]) {
				y1991[i90].style.width = "181px";
				y1991[i90].style.height = "274px";
				y1991[i90].style.position = "relative";
				y1991[i90].style.zIndex = "2";
				y1991[i90].style.float = "left";
			}
			if (y1990[i90]) {
				y1990[i90].style.width = "181px";
				y1990[i90].style.height = "274px";
				y1990[i90].style.position = "relative";
				y1990[i90].style.zIndex = "2";
				y1990[i90].style.float = "left";
			}
		}
	}
	if (b1980.checked) {
		for (y80 = 0; y80 < movies.length; y80++) {
			a[y80].style.width = "0px";
			a[y80].style.height = "0px";
			a[y80].style.position = "fixed";
			a[y80].style.zIndex = "0";
		}
		for (i80 = 0; i80 < y80C; i80++) {
			if (y1989[i80]) {
				y1989[i80].style.width = "181px";
				y1989[i80].style.height = "274px";
				y1989[i80].style.position = "relative";
				y1989[i80].style.zIndex = "2";
				y1989[i80].style.float = "left";
			}
			if (y1988[i80]) {
				y1988[i80].style.width = "181px";
				y1988[i80].style.height = "274px";
				y1988[i80].style.position = "relative";
				y1988[i80].style.zIndex = "2";
				y1988[i80].style.float = "left";
			}
			if (y1987[i80]) {
				y1987[i80].style.width = "181px";
				y1987[i80].style.height = "274px";
				y1987[i80].style.position = "relative";
				y1987[i80].style.zIndex = "2";
				y1987[i80].style.float = "left";
			}
			if (y1986[i80]) {
				y1986[i80].style.width = "181px";
				y1986[i80].style.height = "274px";
				y1986[i80].style.position = "relative";
				y1986[i80].style.zIndex = "2";
				y1986[i80].style.float = "left";
			}
			if (y1985[i80]) {
				y1985[i80].style.width = "181px";
				y1985[i80].style.height = "274px";
				y1985[i80].style.position = "relative";
				y1985[i80].style.zIndex = "2";
				y1985[i80].style.float = "left";
			}
			if (y1984[i80]) {
				y1984[i80].style.width = "181px";
				y1984[i80].style.height = "274px";
				y1984[i80].style.position = "relative";
				y1984[i80].style.zIndex = "2";
				y1984[i80].style.float = "left";
			}
			if (y1983[i80]) {
				y1983[i80].style.width = "181px";
				y1983[i80].style.height = "274px";
				y1983[i80].style.position = "relative";
				y1983[i80].style.zIndex = "2";
				y1983[i80].style.float = "left";
			}
			if (y1982[i80]) {
				y1982[i80].style.width = "181px";
				y1982[i80].style.height = "274px";
				y1982[i80].style.position = "relative";
				y1982[i80].style.zIndex = "2";
				y1982[i80].style.float = "left";
			}
			if (y1981[i80]) {
				y1981[i80].style.width = "181px";
				y1981[i80].style.height = "274px";
				y1981[i80].style.position = "relative";
				y1981[i80].style.zIndex = "2";
				y1981[i80].style.float = "left";
			}
			if (y1980[i80]) {
				y1980[i80].style.width = "181px";
				y1980[i80].style.height = "274px";
				y1980[i80].style.position = "relative";
				y1980[i80].style.zIndex = "2";
				y1980[i80].style.float = "left";
			}
		}
	}
	if (b1970.checked) {
		for (y70 = 0; y70 < movies.length; y70++) {
			a[y70].style.width = "0px";
			a[y70].style.height = "0px";
			a[y70].style.position = "fixed";
			a[y70].style.zIndex = "0";
		}
		for (i70 = 0; i70 < y70C; i70++) {
			if (y1979[i70]) {
				y1979[i70].style.width = "181px";
				y1979[i70].style.height = "274px";
				y1979[i70].style.position = "relative";
				y1979[i70].style.zIndex = "2";
				y1979[i70].style.float = "left";
			}
			if (y1978[i70]) {
				y1978[i70].style.width = "181px";
				y1978[i70].style.height = "274px";
				y1978[i70].style.position = "relative";
				y1978[i70].style.zIndex = "2";
				y1978[i70].style.float = "left";
			}
			if (y1977[i70]) {
				y1977[i70].style.width = "181px";
				y1977[i70].style.height = "274px";
				y1977[i70].style.position = "relative";
				y1977[i70].style.zIndex = "2";
				y1977[i70].style.float = "left";
			}
			if (y1976[i70]) {
				y1976[i70].style.width = "181px";
				y1976[i70].style.height = "274px";
				y1976[i70].style.position = "relative";
				y1976[i70].style.zIndex = "2";
				y1976[i70].style.float = "left";
			}
			if (y1975[i70]) {
				y1975[i70].style.width = "181px";
				y1975[i70].style.height = "274px";
				y1975[i70].style.position = "relative";
				y1975[i70].style.zIndex = "2";
				y1975[i70].style.float = "left";
			}
			if (y1974[i70]) {
				y1974[i70].style.width = "181px";
				y1974[i70].style.height = "274px";
				y1974[i70].style.position = "relative";
				y1974[i70].style.zIndex = "2";
				y1974[i70].style.float = "left";
			}
			if (y1973[i70]) {
				y1973[i70].style.width = "181px";
				y1973[i70].style.height = "274px";
				y1973[i70].style.position = "relative";
				y1973[i70].style.zIndex = "2";
				y1973[i70].style.float = "left";
			}
			if (y1972[i70]) {
				y1972[i70].style.width = "181px";
				y1972[i70].style.height = "274px";
				y1972[i70].style.position = "relative";
				y1972[i70].style.zIndex = "2";
				y1972[i70].style.float = "left";
			}
			if (y1971[i70]) {
				y1971[i70].style.width = "181px";
				y1971[i70].style.height = "274px";
				y1971[i70].style.position = "relative";
				y1971[i70].style.zIndex = "2";
				y1971[i70].style.float = "left";
			}
			if (y1970[i70]) {
				y1970[i70].style.width = "181px";
				y1970[i70].style.height = "274px";
				y1970[i70].style.position = "relative";
				y1970[i70].style.zIndex = "2";
				y1970[i70].style.float = "left";
			}
		}
	}
	if (b1960.checked) {
		for (y60 = 0; y60 < movies.length; y60++) {
			a[y60].style.width = "0px";
			a[y60].style.height = "0px";
			a[y60].style.position = "fixed";
			a[y60].style.zIndex = "0";
		}
		for (i60 = 0; i60 < y60C; i60++) {
			if (y1969[i60]) {
				y1969[i60].style.width = "181px";
				y1969[i60].style.height = "274px";
				y1969[i60].style.position = "relative";
				y1969[i60].style.zIndex = "2";
				y1969[i60].style.float = "left";
			}
			if (y1968[i60]) {
				y1968[i60].style.width = "181px";
				y1968[i60].style.height = "274px";
				y1968[i60].style.position = "relative";
				y1968[i60].style.zIndex = "2";
				y1968[i60].style.float = "left";
			}
			if (y1967[i60]) {
				y1967[i60].style.width = "181px";
				y1967[i60].style.height = "274px";
				y1967[i60].style.position = "relative";
				y1967[i60].style.zIndex = "2";
				y1967[i60].style.float = "left";
			}
			if (y1966[i60]) {
				y1966[i60].style.width = "181px";
				y1966[i60].style.height = "274px";
				y1966[i60].style.position = "relative";
				y1966[i60].style.zIndex = "2";
				y1966[i60].style.float = "left";
			}
			if (y1965[i60]) {
				y1965[i60].style.width = "181px";
				y1965[i60].style.height = "274px";
				y1965[i60].style.position = "relative";
				y1965[i60].style.zIndex = "2";
				y1965[i60].style.float = "left";
			}
			if (y1964[i60]) {
				y1964[i60].style.width = "181px";
				y1964[i60].style.height = "274px";
				y1964[i60].style.position = "relative";
				y1964[i60].style.zIndex = "2";
				y1964[i60].style.float = "left";
			}
			if (y1963[i60]) {
				y1963[i60].style.width = "181px";
				y1963[i60].style.height = "274px";
				y1963[i60].style.position = "relative";
				y1963[i60].style.zIndex = "2";
				y1963[i60].style.float = "left";
			}
			if (y1962[i60]) {
				y1962[i60].style.width = "181px";
				y1962[i60].style.height = "274px";
				y1962[i60].style.position = "relative";
				y1962[i60].style.zIndex = "2";
				y1962[i60].style.float = "left";
			}
			if (y1961[i60]) {
				y1961[i60].style.width = "181px";
				y1961[i60].style.height = "274px";
				y1961[i60].style.position = "relative";
				y1961[i60].style.zIndex = "2";
				y1961[i60].style.float = "left";
			}
			if (y1960[i60]) {
				y1960[i60].style.width = "181px";
				y1960[i60].style.height = "274px";
				y1960[i60].style.position = "relative";
				y1960[i60].style.zIndex = "2";
				y1960[i60].style.float = "left";
			}
		}
	}
	if (b1950.checked) {
		for (y50 = 0; y50 < movies.length; y50++) {
			a[y50].style.width = "0px";
			a[y50].style.height = "0px";
			a[y50].style.position = "fixed";
			a[y50].style.zIndex = "0";
		}
		for (i50 = 0; i50 < y50C; i50++) {
			if (y1959[i50]) {
				y1959[i50].style.width = "181px";
				y1959[i50].style.height = "274px";
				y1959[i50].style.position = "relative";
				y1959[i50].style.zIndex = "2";
				y1959[i50].style.float = "left";
			}
			if (y1958[i50]) {
				y1958[i50].style.width = "181px";
				y1958[i50].style.height = "274px";
				y1958[i50].style.position = "relative";
				y1958[i50].style.zIndex = "2";
				y1958[i50].style.float = "left";
			}
			if (y1957[i50]) {
				y1957[i50].style.width = "181px";
				y1957[i50].style.height = "274px";
				y1957[i50].style.position = "relative";
				y1957[i50].style.zIndex = "2";
				y1957[i50].style.float = "left";
			}
			if (y1956[i50]) {
				y1956[i50].style.width = "181px";
				y1956[i50].style.height = "274px";
				y1956[i50].style.position = "relative";
				y1956[i50].style.zIndex = "2";
				y1956[i50].style.float = "left";
			}
			if (y1955[i50]) {
				y1955[i50].style.width = "181px";
				y1955[i50].style.height = "274px";
				y1955[i50].style.position = "relative";
				y1955[i50].style.zIndex = "2";
				y1955[i50].style.float = "left";
			}
			if (y1954[i50]) {
				y1954[i50].style.width = "181px";
				y1954[i50].style.height = "274px";
				y1954[i50].style.position = "relative";
				y1954[i50].style.zIndex = "2";
				y1954[i50].style.float = "left";
			}
			if (y1953[i50]) {
				y1953[i50].style.width = "181px";
				y1953[i50].style.height = "274px";
				y1953[i50].style.position = "relative";
				y1953[i50].style.zIndex = "2";
				y1953[i50].style.float = "left";
			}
			if (y1952[i50]) {
				y1952[i50].style.width = "181px";
				y1952[i50].style.height = "274px";
				y1952[i50].style.position = "relative";
				y1952[i50].style.zIndex = "2";
				y1952[i50].style.float = "left";
			}
			if (y1951[i50]) {
				y1951[i50].style.width = "181px";
				y1951[i50].style.height = "274px";
				y1951[i50].style.position = "relative";
				y1951[i50].style.zIndex = "2";
				y1951[i50].style.float = "left";
			}
			if (y1950[i50]) {
				y1950[i50].style.width = "181px";
				y1950[i50].style.height = "274px";
				y1950[i50].style.position = "relative";
				y1950[i50].style.zIndex = "2";
				y1950[i50].style.float = "left";
			}
		}
	}
	if (b1940.checked) {
		for (y40 = 0; y40 < movies.length; y40++) {
			a[y40].style.width = "0px";
			a[y40].style.height = "0px";
			a[y40].style.position = "fixed";
			a[y40].style.zIndex = "0";
		}
		for (i40 = 0; i40 < y40C; i40++) {
			if (y1949[i40]) {
				y1949[i40].style.width = "181px";
				y1949[i40].style.height = "274px";
				y1949[i40].style.position = "relative";
				y1949[i40].style.zIndex = "2";
				y1949[i40].style.float = "left";
			}
			if (y1948[i40]) {
				y1948[i40].style.width = "181px";
				y1948[i40].style.height = "274px";
				y1948[i40].style.position = "relative";
				y1948[i40].style.zIndex = "2";
				y1948[i40].style.float = "left";
			}
			if (y1947[i40]) {
				y1947[i40].style.width = "181px";
				y1947[i40].style.height = "274px";
				y1947[i40].style.position = "relative";
				y1947[i40].style.zIndex = "2";
				y1947[i40].style.float = "left";
			}
			if (y1946[i40]) {
				y1946[i40].style.width = "181px";
				y1946[i40].style.height = "274px";
				y1946[i40].style.position = "relative";
				y1946[i40].style.zIndex = "2";
				y1946[i40].style.float = "left";
			}
			if (y1945[i40]) {
				y1945[i40].style.width = "181px";
				y1945[i40].style.height = "274px";
				y1945[i40].style.position = "relative";
				y1945[i40].style.zIndex = "2";
				y1945[i40].style.float = "left";
			}
			if (y1944[i40]) {
				y1944[i40].style.width = "181px";
				y1944[i40].style.height = "274px";
				y1944[i40].style.position = "relative";
				y1944[i40].style.zIndex = "2";
				y1944[i40].style.float = "left";
			}
			if (y1943[i40]) {
				y1943[i40].style.width = "181px";
				y1943[i40].style.height = "274px";
				y1943[i40].style.position = "relative";
				y1943[i40].style.zIndex = "2";
				y1943[i40].style.float = "left";
			}
			if (y1942[i40]) {
				y1942[i40].style.width = "181px";
				y1942[i40].style.height = "274px";
				y1942[i40].style.position = "relative";
				y1942[i40].style.zIndex = "2";
				y1942[i40].style.float = "left";
			}
			if (y1941[i40]) {
				y1941[i40].style.width = "181px";
				y1941[i40].style.height = "274px";
				y1941[i40].style.position = "relative";
				y1941[i40].style.zIndex = "2";
				y1941[i40].style.float = "left";
			}
			if (y1940[i40]) {
				y1940[i40].style.width = "181px";
				y1940[i40].style.height = "274px";
				y1940[i40].style.position = "relative";
				y1940[i40].style.zIndex = "2";
				y1940[i40].style.float = "left";
			}
		}
	}
	if (b1930.checked) {
		for (y30 = 0; y30 < movies.length; y30++) {
			a[y30].style.width = "0px";
			a[y30].style.height = "0px";
			a[y30].style.position = "fixed";
			a[y30].style.zIndex = "0";
		}
		for (i30 = 0; i30 < y40C; i30++) {
			if (y1939[i30]) {
				y1939[i30].style.width = "181px";
				y1939[i30].style.height = "274px";
				y1939[i30].style.position = "relative";
				y1939[i30].style.zIndex = "2";
				y1939[i30].style.float = "left";
			}
			if (y1938[i30]) {
				y1938[i30].style.width = "181px";
				y1938[i30].style.height = "274px";
				y1938[i30].style.position = "relative";
				y1938[i30].style.zIndex = "2";
				y1938[i30].style.float = "left";
			}
			if (y1937[i30]) {
				y1937[i30].style.width = "181px";
				y1937[i30].style.height = "274px";
				y1937[i30].style.position = "relative";
				y1937[i30].style.zIndex = "2";
				y1937[i30].style.float = "left";
			}
			if (y1936[i30]) {
				y1936[i30].style.width = "181px";
				y1936[i30].style.height = "274px";
				y1936[i30].style.position = "relative";
				y1936[i30].style.zIndex = "2";
				y1936[i30].style.float = "left";
			}
			if (y1935[i30]) {
				y1935[i30].style.width = "181px";
				y1935[i30].style.height = "274px";
				y1935[i30].style.position = "relative";
				y1935[i30].style.zIndex = "2";
				y1935[i30].style.float = "left";
			}
			if (y1934[i30]) {
				y1934[i30].style.width = "181px";
				y1934[i30].style.height = "274px";
				y1934[i30].style.position = "relative";
				y1934[i30].style.zIndex = "2";
				y1934[i30].style.float = "left";
			}
			if (y1933[i30]) {
				y1933[i30].style.width = "181px";
				y1933[i30].style.height = "274px";
				y1933[i30].style.position = "relative";
				y1933[i30].style.zIndex = "2";
				y1933[i30].style.float = "left";
			}
			if (y1932[i30]) {
				y1932[i30].style.width = "181px";
				y1932[i30].style.height = "274px";
				y1932[i30].style.position = "relative";
				y1932[i30].style.zIndex = "2";
				y1932[i30].style.float = "left";
			}
			if (y1931[i30]) {
				y1931[i30].style.width = "181px";
				y1931[i30].style.height = "274px";
				y1931[i30].style.position = "relative";
				y1931[i30].style.zIndex = "2";
				y1931[i30].style.float = "left";
			}
			if (y1930[i30]) {
				y1930[i30].style.width = "181px";
				y1930[i30].style.height = "274px";
				y1930[i30].style.position = "relative";
				y1930[i30].style.zIndex = "2";
				y1930[i30].style.float = "left";
			}
		}
	}
};

function closeDoThis() {
	document.getElementById('frameCon').innerHTML = '';
	document.title = "piratejunkies.com";
	var a = document.getElementById("con");
	a.style.visibility = "visible";
	genreCheck();
	yearCheck();
	clearInterval(crawlMovie);
};

var showCount;

function play(episodes, id) {
	var a = document.getElementById("con");
	a.style.visibility = "hidden";

	var tvShowCon = document.createElement("div");
	tvShowCon.setAttribute("id", "tvShowCon");
	tvShowCon.setAttribute("class", "tvShowCon");
	frameCon.appendChild(tvShowCon);

	var episodesLength = episodes.length / 2;
	showCount = episodesLength;

	for (i = 0; i < episodes.length; i++) {
		if (episodes[i].substr(0, 1) === "h") {
			var episodesFrame = document.createElement("iframe");
			episodesFrame.setAttribute("id", "episodesFrame");
			episodesFrame.setAttribute("class", "episodesFrame");
			episodesFrame.setAttribute("src", episodes[i] + "");
			episodesFrame.setAttribute("allowFullScreen", true);
			episodeCon.appendChild(episodesFrame);
		} else {
			var episodeCon = document.createElement("div");
			episodeCon.setAttribute("id", "episodeCon");
			episodeCon.setAttribute("class", "episodeCon");
			tvShowCon.appendChild(episodeCon);

			var sePCon = document.createElement("div");
			sePCon.setAttribute("id", "sePCon");
			sePCon.setAttribute("class", "sePCon");
			episodeCon.appendChild(sePCon);

			var seP = document.createElement("p");
			seP.setAttribute("id", "seP");
			seP.setAttribute("class", "seP");
			var seT = document.createTextNode(episodes[i] + "");
			seP.appendChild(seT);
			sePCon.appendChild(seP);
		}
	}

	/*function openShow() {
		for (os = 0; os < episodes.length)
		var frame = document.createElement("iframe");
		frame.setAttribute("id", "frame");
		frame.setAttribute("class", "frame");
		frame.setAttribute("src", getSrc + "");
		frame.setAttribute("allowFullScreen", true);
		frameCon.appendChild(frame);
	}*/

	var close = document.createElement("input");
	close.setAttribute("id", "close");
	close.setAttribute("class", "close");
	close.setAttribute("type", "button");
	close.setAttribute("value", "X");
	close.setAttribute("title", "Close");
	close.setAttribute("onclick", "closeDoThis()");
	frameCon.appendChild(close);

	document.title = id;

	var crawlMovie = setInterval(movieSize, 100);

	function movieSize() {
		var wW = document.documentElement.clientWidth;
		var wH = document.documentElement.clientHeight;

		tvShowCon.setAttribute("width", wW + "px");
		tvShowCon.setAttribute("height", wH + "px");
		for (i = 0; i < showCount; i++) {
			var x = document.getElementsByClassName("episodeCon");
			x[i].setAttribute("width", wW - 20 + "px");
			x[i].setAttribute("height", wH + "px");
			var z = document.getElementsByClassName("episodesFrame");
			z[i].setAttribute("width", wW - 20 + "px");
			z[i].setAttribute("height", wH + "px");
		}
		document.getElementById("close").style.left = wW - 71 + "px";
	};
};

var docsJS = document.createElement("script");
docsJS.setAttribute("async", "true");
docsJS.setAttribute("src", "javascript/docs.js");
document.head.appendChild(docsJS);

var episodesJS = document.createElement("script");
episodesJS.setAttribute("async", "true");
episodesJS.setAttribute("src", "javascript/episodes.js");
document.head.appendChild(episodesJS);

/*var imdbRatingJS = document.createElement("script");
imdbRatingJS.setAttribute("async", "true");
imdbRatingJS.setAttribute("src", "javascript/imdbRating.js");
document.head.appendChild(imdbRatingJS);*/
