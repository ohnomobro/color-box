var allColors = ['00','33','66','99','cc','ff'];
var rand = function() {
    return Math.floor(Math.random()*6);
};
var randomColor = function() {
    var r = allColors[rand()];
    var g = allColors[rand()];
    var b = allColors[rand()];
    return "#"+r+g+b;
};

$(document).ready(function() {
    $('.col-md-1').click(function() {
        $('.col-md-1').each(function() {
            $(this).css('background',randomColor());
        });
    });
});