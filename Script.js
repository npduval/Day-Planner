const calendar9 = $("#9")
const calendar10 = $("#10")
const calendar11 = $("#11")
const calendar12 = $("#12")
const calendar1 = $("#1")
const calendar2 = $("#2")
const calendar3 = $("#3")
const calendar4 = $("#4")
const calendar5 = $("#5")
const calEvent = localStorage.getItem("occurence9")
calendar9.val(calEvent)

const today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
    

$("#btn9").on("click", function() {
    localStorage.setItem("occurence9", calendar9.val());

});


function time() {
    const hour = moment().format('HH')
     if (hour < 9) {
         calendar9.addClass("bg-sucess");
     } else if (hour === 9) {
        calendar9.addClass("bg-danger");
     } else {
        calendar9.addClass("bg-secondary"); 
        console.log(hour); 
     }
};


time();