var appointmentList = [
    {
        time:"9:00",
        appointment:apptCont9
    },
    {
        time:"10:00",
        appointment:apptCont10
    },
    {
        time:"11:00",
        appointment:apptCont11
    },
    {
        time:"12:00",
        appointment:apptCont12
    },
    {
        time:"13:00",
        appointment:apptCont13
    },
    {
        time:"14:00",
        appointment:apptCont14
    },
    {
        time:"15:00",
        appointment:apptCont15
    },
    {
        time:"16:00",
        appointment:apptCont16
    },
    {
        time:"17:00",
        appointment:apptCont17
    },
    {
        time:"18:00",
        appointment:apptCont18
    }
    ];

var now = moment().hour();
var appointments = [];
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
// createVariables();
// ************Create saveButtons************

console.log("current hour", now)

var appointments = [];

function renderAppointments (){

};

function init() {
    var svdapt9 = localStorage.getItem('9:00');
    apptCont9.textContent = svdapt9;
    var svdapt10 = localStorage.getItem('10:00');
    apptCont10.textContent = svdapt10;
    var svdapt11 = localStorage.getItem('11:00');
    apptCont11.textContent = svdapt11;
    var svdapt12 = localStorage.getItem('12:00');
    apptCont12.textContent = svdapt12;
    var svdapt13 = localStorage.getItem('13:00');
    apptCont13.textContent = svdapt13;
    var svdapt14 = localStorage.getItem('14:00');
    apptCont14.textContent = svdapt14;
    var svdapt15 = localStorage.getItem('15:00');
    apptCont15.textContent = svdapt15;
    var svdapt16 = localStorage.getItem('16:00');
    apptCont16.textContent = svdapt16;
    var svdapt17 = localStorage.getItem('17:00');
    apptCont17.textContent = svdapt17;
    var svdapt18 = localStorage.getItem('18:00');
    apptCont18.textContent = svdapt18;
};



var apptCont9 = document.getElementById("9");
saveButton9.on("click", function (event) {
    event.preventDefault();
    console.log("save 9 has been pushed.")
    var savedAppt9 = apptCont9.value ;
    localStorage.setItem(appointmentList[0].time, savedAppt9);
    alert("appointment saved");
});

var apptCont10 = document.getElementById("10");
saveButton10.on("click", function (event) {
    event.preventDefault();
    console.log("save 10 has been pushed.")
    var savedAppt10 = apptCont10.value ;
    localStorage.setItem(appointmentList[1].time, savedAppt10);
    alert("appointment saved");
});

var apptCont11 = document.getElementById("11");
saveButton11.on("click", function (event) {
    event.preventDefault();
    console.log("save 11 has been pushed.")
    var savedAppt11 = apptCont11.value ;
    localStorage.setItem(appointmentList[2].time, savedAppt11);
    alert("appointment saved");
});

var apptCont12 = document.getElementById("12");
saveButton12.on("click", function (event) {
    event.preventDefault();
    console.log("save 12 has been pushed.")
    var savedAppt12 = apptCont12.value ;
    localStorage.setItem(appointmentList[3].time, savedAppt12);
    alert("appointment saved");
});

var apptCont13 = document.getElementById("13");
saveButton13.on("click", function (event) {
    event.preventDefault();
    console.log("save 13 has been pushed.")
    var savedAppt13 = apptCont13.value ;
    localStorage.setItem(appointmentList[4].time, savedAppt13);
    alert("appointment saved");
});

var apptCont14 = document.getElementById("14");
saveButton14.on("click", function (event) {
    event.preventDefault();
    console.log("save 14 has been pushed.")
    var savedAppt14 = apptCont14.value ;
    localStorage.setItem(appointmentList[5].time, savedAppt14);
    alert("appointment saved");
});

var apptCont15 = document.getElementById("15");
saveButton15.on("click", function (event) {
    event.preventDefault();
    console.log("save 15 has been pushed.")
    var savedAppt15 = apptCont15.value ;
    localStorage.setItem(appointmentList[6].time, savedAppt15);
    alert("appointment saved");
});

var apptCont16 = document.getElementById("16");
saveButton16.on("click", function (event) {
    event.preventDefault();
    console.log("save 16 has been pushed.")
    var savedAppt16 = apptCont16.value ;
    localStorage.setItem(appointmentList[7].time, savedAppt16);
    alert("appointment saved");
});

var apptCont17 = document.getElementById("17");
saveButton17.on("click", function (event) {
    event.preventDefault();
    console.log("save 17 has been pushed.")
    var savedAppt17 = apptCont17.value ;
    localStorage.setItem(appointmentList[8].time, savedAppt17);
    alert("appointment saved");
});

var apptCont18 = document.getElementById("18");
saveButton18.on("click", function (event) {
    event.preventDefault();
    console.log("save 18 has been pushed.")
    var savedAppt18 = apptCont18.value ;
    localStorage.setItem(appointmentList[9].time, savedAppt18);
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
init();
// if i is < now = past
// if i = now =present
// if i > now= future
