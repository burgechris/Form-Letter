$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var streetInput = $("input#street").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();


    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".street").text(streetInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);

    $("#info").show();
    event.preventDefault();
  });
});

$(document).ready(function() {
  $("button#submit").click(function() {
    var userInput = $("textarea#comment").val();
    alert(userInput.toUpperCase());
});
});
