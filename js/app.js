$(document).ready(function(){
    $("#content").load("company.html");
});

$('.samePage').click(function(){
    var page = $(this).attr('href');
    $("#content").load(page);
    return false;
});

function hideFooter() {
    var x = document.getElementById("footer");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function showFooter() {
    var x = document.getElementById("footer");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
}



