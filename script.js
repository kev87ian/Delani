$(document).ready(function(){
    $("#img1").click(function() {
$("#text1").show();
    $("#img1").hide();    
    });
}
);
$(document).ready(function(){
    $("#text1").click(function(){
        $("#text1").hide();
        $("#img1").show()
    });

});

$(document).ready(function(){
    $("#img2").click(function() {
$("#text2").show();
    $("#img2").hide();    
    });
});

$(document).ready(function(){
    $("#text2").click(function(){
        $("#text2").hide();
        $("#img2").show()
    });

});

$(document).ready(function(){
    $("#img3").click(function() {
$("#text3").show();
    $("#img3").hide();    
    });
});

$(document).ready(function(){
    $("#text3").click(function(){
        $("#text3").hide();
        $("#img3").show()
    });

});

$(document).ready( function() {

    $('.gallery-item').hover( function() {
        $(this).find('.img-title').fadeIn(300);
    }, function() {
        $(this).find('.img-title').fadeOut(100);
    });
    
});

// FORM JS
function submitFormData(){
var name = document.getElementById("name").val;
var email = document.getElementById("email").val;
var message = document.getElementById("message").val;
 if (name !== "" && email !== "" && message !== "");
    alert("Thank you," + "We have received your message");
}