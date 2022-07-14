var now = moment().hour();

var saveButton9 = $("#save-9");
var saveButton10 = $("#save-10");
var saveButton11 = $("#save-11");
var saveButton12 = $("#save-12");
var saveButton13 = $("#save-13");
var saveButton14 = $("#save-14");
var saveButton15 = $("#save-15");
var saveButton16 = $("#save-16");
var saveButton17 = $("#save-17");
var saveButton18 = $("#save-18");


// ************Create saveButtons************
// function createVariables() {
//     var saveButton = [];
//     for (let i = 9; i <= 18; i++) {
//         saveButton[i] = $("#save-" + i)
//     };
//     return saveButton;

// };
// var saveButtons = createVariables();
// ************Create saveButtons************

console.log("current hour", now)

var appointments = [];

function init() {
    var storedAppointments = JSON.parse(localStorage.getItem("appointments"));
    if (storedAppointments !== null) {
        appointments = storedAppointments;
    }
};
init();

var apptCont9 = document.getElementById("9");
saveButton9.on("click", function (event) {
    event.preventDefault();
    console.log("save 9 has been pushed.")
    var savedAppt9 = apptCont9.value ;
    localStorage.setItem("9:00", JSON.stringify(savedAppt9));
    alert("appointment saved");
});

var apptCont10 = document.getElementById("10");
saveButton10.on("click", function (event) {
    event.preventDefault();
    console.log("save 10 has been pushed.")
    var savedAppt10 = apptCont10.value ;
    localStorage.setItem("10:00", JSON.stringify(savedAppt10));
    alert("appointment saved");
});

// ********************Trying to save schedule content with a for loop********************
// for (let i = 9; i <= 18; i++) {
//     var apptCont[i] = document.getElementById("i");
//     saveButton[i].on("click", function (event) {
//         event.preventDefault();
//         console.log("save" i "has been pushed.")
//         var savedAppt[i] = apptCont[i].value ;
//         localStorage.setItem([i], JSON.stringify(savedAppt[i]));
//         alert("appointment saved");
// })
// };

for (let i = 9; i <= 18; i++) {
    var textArea = $("#" + i)

    if (i < now) {
        textArea.addClass("past")
    }
    if (i === now) {
        textArea.addClass("present")
    }
    if (i > now) {
        textArea.addClass("future")
    }
};


// if i is < now = past
// if i = now =present
// if i > now= future
