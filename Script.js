const calendar9 = $("#9")
const calendar10 = $("#10")
const calendar11 = $("#11")
const calendar12 = $("#12")
const calendar1 = $("#1")
const calendar2 = $("#2")
const calendar3 = $("#3")
const calendar4 = $("#4")
const calendar5 = $("#5")
const calEvent9 = localStorage.getItem("occurence9")
calendar9.val(calEvent9)
const calEvent10 = localStorage.getItem("occurence10")
calendar10.val(calEvent10)
const calEvent11 = localStorage.getItem("occurence11")
calendar11.val(calEvent11)
const calEvent12 = localStorage.getItem("occurence12")
calendar12.val(calEvent12)
const calEvent1 = localStorage.getItem("occurence1")
calendar1.val(calEvent1)
const calEvent2 = localStorage.getItem("occurence2")
calendar2.val(calEvent2)
const calEvent3 = localStorage.getItem("occurence3")
calendar3.val(calEvent3)
const calEvent4 = localStorage.getItem("occurence4")
calendar4.val(calEvent4)
const calEvent5 = localStorage.getItem("occurence5")
calendar5.val(calEvent5)

const today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
    

$("#btn9").on("click", function() {
    localStorage.setItem("occurence9", calendar9.val());
});
$("#btn10").on("click", function() {
    localStorage.setItem("occurence10", calendar10.val());
});
$("#btn11").on("click", function() {
    localStorage.setItem("occurence11", calendar11.val());
});
$("#btn12").on("click", function() {
    localStorage.setItem("occurence12", calendar12.val());
});
$("#btn1").on("click", function() {
    localStorage.setItem("occurence1", calendar1.val());
});
$("#btn2").on("click", function() {
    localStorage.setItem("occurence2", calendar2.val());
});
$("#btn3").on("click", function() {
    localStorage.setItem("occurence3", calendar3.val());
});
$("#btn4").on("click", function() {
    localStorage.setItem("occurence4", calendar4.val());
});
$("#btn5").on("click", function() {
    localStorage.setItem("occurence5", calendar5.val());
});





function time() {
    const hour = moment().format('HH')
     if (hour < 9) {
         calendar9.addClass("bg-sucess");
     } else if (hour === 9) {
        calendar9.addClass("bg-danger");
     } else {
        calendar9.addClass("bg-secondary"); 
     };
     if (hour < 10) {
        calendar10.addClass("bg-sucess");
    } else if (hour === 10) {
       calendar10.addClass("bg-danger");
    } else {
       calendar10.addClass("bg-secondary"); 
    };
    if (hour < 11) {
        calendar11.addClass("bg-sucess");
    } else if (hour === 11) {
       calendar11.addClass("bg-danger");
    } else {
       calendar11.addClass("bg-secondary"); 
    };
    if (hour < 12) {
        calendar12.addClass("bg-sucess");
    } else if (hour === 11) {
       calendar12.addClass("bg-danger");
    } else {
       calendar12.addClass("bg-secondary"); 
    };
    if (hour < 13) {
        calendar1.addClass("bg-sucess");
    } else if (hour === 13) {
       calendar1.addClass("bg-danger");
    } else {
       calendar1.addClass("bg-secondary"); 
    };
    if (hour < 14) {
        calendar2.addClass("bg-sucess");
    } else if (hour === 14) {
       calendar2.addClass("bg-danger");
    } else {
       calendar2.addClass("bg-secondary"); 
    };
    if (hour < 15) {
        calendar3.addClass("bg-sucess");
    } else if (hour === 15) {
       calendar3.addClass("bg-danger");
    } else {
       calendar3.addClass("bg-secondary"); 
    };
    if (hour < 16) {
        calendar4.addClass("bg-sucess");
    } else if (hour === 16) {
       calendar4.addClass("bg-danger");
    } else {
       calendar4.addClass("bg-secondary"); 
    };
    if (hour < 17) {
        calendar5.addClass("bg-sucess");
    } else if (hour === 17) {
       calendar5.addClass("bg-danger");
    } else {
       calendar5.addClass("bg-secondary"); 
    }

};



time();