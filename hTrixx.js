let dropdown = document.getElementsByClassName("h-dropdown-btn");
let i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("h-active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

function beResponsive() {
    
    if (!$(".h-navbar").hasClass("responsive")) {
        $(".h-navbar").addClass("responsive")
    } else {
        $(".h-navbar").removeClass("responsive")
    }
}


let sideNavState = false;

function shSideNav() {
    if (sideNavState == false) {
        sideNavState = true;
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    } else {
        sideNavState = false;
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
}

function showLoading(type) {
    debugger;
    let loadLocation = document.getElementsByClassName("h-loading");
    let defaulNo = 20;
    let loadType = "";
    if (type != null) {
        if (type < 6) {
            defaultNo = 10;
        }
        for (var i = 1; i <= defaulNo; i++) {
            loadType += '<span class="h-load-' + type + '" style="--i:' + i + ';"></span>';
        }
    } else {
        type = 1;
    }
    $(loadLocation).empty();
    $(loadLocation).show();
    $(loadLocation).append(loadType);
}

function hideLoading() {
    let loadLocation = document.getElementsByClassName("h-loading");
    $(loadLocation).hide();
}

function RandomNo(maxNo) {
    let randNo = Math.floor(Math.random() * maxNo);
    return randNo;
}
