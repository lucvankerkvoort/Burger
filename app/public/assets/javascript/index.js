$("#burgerSubmit").on("click", function() {
  event.preventDefault();
  var burgers = {
    burger: $("#burgers")
      .val()
      .trim()
  };
  console.log({ burgers });

  $.post("/api/burger", burgers).then(function() {
    location.reload();
  });
});
