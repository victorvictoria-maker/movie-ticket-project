if (localStorage.moviedetails == null) {
	localStorage.setItem("moviedetails", "");
}

function linkToAdmmin() {

        $('#adminlogin').modal('show');
}

function adminSignIn() {
    if (adminname.value == "ladyvv" & adminpassword.value == "mycinematicket") {
        $('#adminlogin').modal('hide');
        landingpage.style.display = "none";
        addmoviepage.style.display = "block";
    } else {
        alert("Input the right information");
    }
}

var mov= [];
function storeMovieLs() {
    var mvname = moviename.value;
    var mvno = seatnumber.value;
    var mvdate = date.value;
    var mvtime = time.value;
    var mvpics = `movie_images/${picsinput.files[0].name}`;

    if(localStorage.moviedetails != ""){
        if(typeof(localStorage.getItem("moviedetails")) == "string"){
            mov = JSON.parse(localStorage.getItem("moviedetails"));
        } else {
            mov = []
        };
    }
    
    if (mvname != "" && mvno != "" && mvdate != "" && mvtime != "" && mvpics != "") {
        var movObj = {moviename: mvname, seatNum: mvno, moviedate: mvdate, movietime: mvtime, moviepicture:mvpics};
	    mov.push(movObj);
        localStorage.setItem("moviedetails", JSON.stringify(mov));
        alert("Movie successfully added!");
        moviename.value = "";
        seatnumber.value = "";
        date.value = "";
        time.value = "";
    } else {
        alert("Input all informations");
    }
}

