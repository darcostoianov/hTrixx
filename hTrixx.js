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

//Go to task details
function goToPage(action) {
    window.location.href = action;
}

//Close window or tab
function close_window() {
    window.close();
}

function RandomNo(maxNo) {
    let randNo = Math.floor(Math.random() * maxNo);
    return randNo;
}

//Check if html tag is empty
function isEmpty(el) {
    return !$.trim(el.html())
}

function hLazyLoad(skipNumber,takeNumber) {
    skipNumber += takeNumber
}


//Add zero to numbers smaller than 10.
function AddZero(num) {
    return (num >= 0 && num < 10) ? "0" + num : num + "";
}

//Bootstrap function for tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

//Handle decimal time
function handleDecimalMinues(dec) {
    if (dec != null) {
        var decimalTime = parseFloat(dec);
        decimalTime = decimalTime * 60 * 60;
        var hours = Math.floor((decimalTime / (60 * 60)));
        decimalTime = decimalTime - (hours * 60 * 60);
        var minutes = Math.floor((decimalTime / 60));
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (hours < 01) {
            if (minutes == 00) {
                return "0 min";
            } else {
                return minutes + " min";
            }

        }
        else {
            return hours + ":" + minutes;
        }
    } else {
        return 0;
    }
}

//Get random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Convert HEX to RGB
function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

//Invert color
function invertColor(hex) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
}
//Used by invertColor
function padZero(str, len) {
    len = len || 2;
    var zeros = new Array(len).join('0');
    return (zeros + str).slice(-len);
}

//Empty element
function emptyThis(id) {
    let emptyElem = "#" + id;
    $(emptyElem).empty();
}

//Create an alert
function makeAlert(type) {
    switch (type) {
        case "Error":
            alert("S-a produs o eroare. Daca acest lucru se mai intampla, va rog sa contactati administratorul");
            break;
        case "Success":
            alert("Success");
            break;
    }
}

//If data is null then put - instead of "null"
function ifNullMinus(param) {
    debugger;
    if (param != null) {
        return param;
    } else {
        return "-";
    }
}

//jQuery ajax call


//-----------------------------------------------------------------------------------Get ajax call
//Without parameters
//$.get("/Controller/Method/", (data) => {/*function*/}, "json"); 

//With parameters
//$.get("/Controller/Method/", { param: "value" }, (data) => {/*function*/}, "json");



//-----------------------------------------------------------------------------------Post ajax call
//Without parameters
//$.post("/Controller/Method/", (data) => {/*function*/}, "json"); 

//With parameters
//$.post("/Controller/Method/", { param: "value" }, (data) => {/*function*/}, "json");



//-----------------------------------------------------------------------------------Get with error
//Without parameters
//$.get("/Controller/Method/", (data) => {/*function*/ },(ex) => {/*function error*/}, "json");

//With parameters
//$.get("/Controller/Method/", {param: "value" }, (data) => {/*function*/ },(ex) => {/*function error*/}, "json");



//-----------------------------------------------------------------------------------Post with error
//Without parameters
//$.post("/Controller/Method/", (data) => {/*function*/ },(ex) => {/*function error*/}, "json");

//With parameters
//$.post("/Controller/Method/", {param: "value" }, (data) => {/*function*/ },(ex) => {/*function error*/}, "json");
