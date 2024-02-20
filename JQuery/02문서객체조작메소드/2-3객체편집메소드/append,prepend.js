$(function () {
  $("#listZone").append("<li>리스트append</li>");

  $("<li>리스트appendTo</li>").appendTo("#listZone");

  $("#listZone").prepend("<li>리스트prepend</i>");

  $("<li>리스트prependTo</i>").prependTo("#listZone");
});
