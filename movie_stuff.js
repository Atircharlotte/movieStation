//random movie search
function randomMovieSearch(){
    //hide search button
    var btn = document.getElementById("randomBtn2");
    btn.style.display = "none";
    //hide the header section 
    var keywordInput = document.getElementById("keywordInput");
    keywordInput.style.display = "none";
    //make the search bar disappear
    var searchBar = document.getElementById("searchArea");
    searchBar.style.display = 'none';
     //get the input keyword
    var keyword = document.getElementById("searchBar").value;
    // when there is no input
    if(!keyword) {
        var connectionFailure = document.getElementById("connectionFailure");
        connectionFailure.style.display = "none";
        var btn = document.getElementById("randomBtn2");
        var closeBtn = document.getElementById("closeBtn");
        var cannotFind = document.getElementById("cannotFind");
        var noInput = document.getElementById("noInput");
        noInput.style.display = "block";
        cannotFind.style.display = "none";
        //show close button and close search button 
        closeBtn.style.display = "block";
        btn.style.display = "none"; 
        console.log("Cannot find");
        throw null;
    }

    //use fetch api to obtain the information
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    fetch(`https://itunes.apple.com/search?term=${keyword}&country=KR&entity=movie`,
     requestOptions)
        .then(response => response.json())
        .then(result => {
            //generate random number
            var length = result.resultCount;
            function getRandomInt(num){
                return Math.floor(Math.random()*num);
            }
            const movie = result.results[getRandomInt(length)];
            //can't find movie name
            if(!movie) {
                var connectionFailure = document.getElementById("connectionFailure");
                connectionFailure.style.display = "none";
                var btn = document.getElementById("randomBtn2");
                var closeBtn = document.getElementById("closeBtn");
                var cannotFind = document.getElementById("cannotFind");
                cannotFind.style.display = "block";
                //show close button and close search button 
                closeBtn.style.display = "block";
                btn.style.display = "none"; 
                throw null;
            }
            var btn = document.getElementById("randomBtn2");
            btn.style.display = "none";
            //get movie name, trailer and description
            const name = movie.trackName;
            const trailer = movie.previewUrl;
            const description = movie.longDescription;
            var trailerVideo = document.getElementById("trailer");
            var movieName = document.getElementById("movieName");
            var movieDescription = document.getElementById("movieDescription");
            trailerVideo.innerHTML = `<video  autoplay style="width: 80%;border-radius: 25px;">Your browser does not support the &lt;video&gt; tag.
            <source src="${trailer}"/>
          </video><br><br>`;
            movieName.innerHTML = `${name}<br><br>`;
            movieDescription.innerHTML = `${description}`;
            var closeBtn = document.getElementById("closeBtn");
            closeBtn.style.display = "block";
        })
        //connection error
        .catch(err =>{
            if(err){
                var modal = document.getElementById("myModal");
                var btn = document.getElementById("randomBtn2");
                var connectionFailure = document.getElementById("connectionFailure");
                connectionFailure.style.display = "block";
                var cannotFind = document.getElementById("cannotFind");
                cannotFind.style.display = "none";
                var closeBtn = document.getElementById("closeBtn");
                closeBtn.style.display = "block";
                btn.style.display = "none";
            }
        })

}

//modal
function closeModal(){
    //make modal disappear
    var modal = document.getElementById("myModal");
    modal.style.display = "none";

    //initialize the modal section
    var movieName = document.getElementById("movieName");
    var trailerVideo = document.getElementById("trailer");
    var movieDescription = document.getElementById("movieDescription");
    trailerVideo.innerHTML = "";
    movieName.innerHTML = "";
    movieDescription.innerHTML = "";
    var searchBar = document.getElementById("searchArea");
    searchBar.style.display = 'block';
    var btn = document.getElementById("randomBtn2");
    btn.style.display = "block";
    var closeBtn = document.getElementById("closeBtn");
    closeBtn.style.display = "none";
    var keywordInput = document.getElementById("keywordInput");
    keywordInput.style.display = "block";
    var cannotFind = document.getElementById("cannotFind");
    cannotFind.style.display = "none";
    var connectionFailure = document.getElementById("connectionFailure");
    connectionFailure.style.display = "none";
    var noInput = document.getElementById("noInput");
    noInput.style.display = "none";
}

//random snack
function randomFood(){
    var foodPic = document.getElementById("card-img-3");
    var foodPicLs = ["img/churro.gif","img/cookie.gif","img/DancingChip.gif",
    "img/hotDog.gif","img/popcorn.gif","img/french-fries.gif","img/cocacola.gif","img/hamburger.gif"];
    
    var num = foodPicLs.length;
    function getRandomInt(num){
        return Math.floor(Math.random()*num);
    }
    var pickedFood = getRandomInt(num);
    foodPic.src = foodPicLs[pickedFood];

}