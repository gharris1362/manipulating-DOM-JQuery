$('document').ready(function() {


    //  Number 1
let newBtn = $('<button>Click ME!</button>')
    newBtn.click(function() {
        alert('A Nice Message')
    })

    $('body').append(newBtn)

// number 2 
$('#submitBtn').click(function() {
    alert($('#textBox').val())
})

// number 3

$('#changeColor').mouseover(function () { 
    $('#changeColor').css('background-color', 'red')
});

$('#changeColor').mouseout(function () { 
    $('#changeColor').css('background-color', 'transparent')
});


// number 4

$('#num4P').click(function () {
$('#num4P').css('color', getRandomColor())

})


// number 5

$('#myNameButton').click(function() {
    let span = $('<span>Garrett</span>')
    $('#nameDiv').append(span)
})


// number 6 

let friendsArray = ['Jake', 'Josh', 'Jingerbread Man', 'JHimmy', 'Shrek The 3rd', 'SPonhebob', 'Donkley', 'Deku', 'Luigi']
let counter = 0;
$('#friendBtn').click(function () {
    if (friendsArray[counter] != undefined) {
        let newLi = $(`<li>${friendsArray[counter]}</li>`);
        $('#friendsList').append(newLi)
    } else {
        alert(' ya aint got no dang friends ya loser')
    }
    counter++
})



})


function getRandomColor() {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
color += letters[Math.floor(Math.random() * 16)];
}
return color;
}
