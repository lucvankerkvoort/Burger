$("#burgerSubmit").on("click", function() {
  // we prevent the default setting of the button to run our own logic on it
  event.preventDefault();
  // we capture the values of the form on the html page
  var burgers = {
    burger: $("#burgers")
      .val()
      .trim()
  };
  // we check the input
  console.log({ burgers });
  // we send the input to the server
  $.post("/api/burger", burgers).then(function() {
    // we reload the page
    location.reload();
  });
});

// seeing that the buttons are dynamically creatd we search the document for its class
$(document).on("click", ".devour", function() {
  // we capture the id and the status of the burgers on the html page
  var status = $(this).data("state");
  var id = $(this).data("id");
  // we create an object that we can send to the server
  var newStatus = {
    devoured: status
  };

  console.log(newStatus);
  console.log(id);
  // We send it back to the server
  $.ajax("/api/status/" + id, {
    type: "PUT",
    data: newStatus
  }).then(function(data) {
    console.log(data);
    location.reload();
  });
  // we have to change the status on the burger from devoured: false to devoured: true
  // we can create the logic for appending it depending on a status inside the handlebars
});
