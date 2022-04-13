    addmoviepage.style.display = "none";
    editmoviemodal.style.display = "none";
    if (localStorage.moviedetails != "") {
    var getMovieBack = JSON.parse(localStorage.getItem("moviedetails"));
    let final;
    let table = "<table class='text-white table table-striped'><tr><td>S/N</td><td>Movie Name</td><td>Number of Seat</td><td>Movie Date</td><td>Movie Time</td></tr>"; 

    for (var i = 0; i < getMovieBack.length; i++) {
        let a = i+1;
        let b = getMovieBack[i].moviename;
        let c = getMovieBack[i].seatNum;
        let d = getMovieBack[i].moviedate;
        let e = getMovieBack[i].movietime;

        final = `<tr><td>${a}</td><td>${b}</td><td>${c}</td><td>${d}</td><td>${e}</td><td><button class='btn bg-white' onclick="editMov(${i})" data-toggle="modal" data-target="#editmoviemodal">Edit</button></td><td><button class='btn bg-white' onclick="deleteMov(${i})">Delete</button></td><td><button class='btn bg-white' onclick="createSeat()">Create</button></td></tr>`;
        table+=final;
    }

    table+="</table>";
    tabledisplay.innerHTML = table;
}


linkToAdminMan = () => {
    $('#adminlogin').modal('show');
}

adminSignInMan = () => {
    if (adminname.value == "ladyvv" & adminpassword.value == "mycinematicket") {
        $('#adminlogin').modal('hide');
        managemoviepage.style.display = "none";
        addmoviepage.style.display = "block";
    } else {
        alert("Input the right information");
    }
}


editMov = (i) => {
    var getMovieBackEdit = JSON.parse(localStorage.getItem("moviedetails"));
    // console.log(getMovieBackEdit[i]);
    editmoviemodal.style.display = "block";
    var enames = editmoviename.value;
    var eseat = editseatnumber.value;
    var edate = editdate.value;
    var etime = edittime.value;
    var epics = editpicsinput;

    editmoviename.value = getMovieBackEdit[i].moviename;
    editseatnumber.value = getMovieBackEdit[i].seatNum;
    editdate.value = getMovieBackEdit[i].moviedate;
    edittime.value = getMovieBackEdit[i].movietime;
    editpicsinput = `movie_images/${getMovieBackEdit[i].moviepicture}`;

    document.getElementById("updateedit").onclick = function () {
        // alert("hi");
        // localStorage.setItem("moviedetails", JSON.stringify(getMovieBackDel));
        console.log(enames);
        console.log(eseat);
        console.log(edate);
        console.log(etime);
        console.log(epics);
    }

}



deleteMov = (i) => {
    var getMovieBackDel = JSON.parse(localStorage.getItem("moviedetails"));
    for (let j = 0; j < getMovieBackDel.length; j++) {
        const element = getMovieBackDel[j];
        if(j == i){
            getMovieBackDel.splice(j,1);
            localStorage.setItem("moviedetails", JSON.stringify(getMovieBackDel));
            window.location.reload(true);
        }
    }
} 

createSeat = () => {
    alert("Create Seat");
}