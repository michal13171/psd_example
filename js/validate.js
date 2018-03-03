"use strict";
$(document).ready(function() {
  $("form").on("submit", function(e) {
    e.preventDefault();
    const subject = $("#Fullname").val();
    const jsmail = $("#Email").val();
    const message = $("#Text").val();
    const rePlace = $(".Complete");
    $.ajax({
      type: $("form").attr("method"),
      url: $("form").attr("action"),
      dataType: "json",
      data: {
        Fullname: subject,
        Email: jsmail,
        Text: message
      },
      success: function(response) {
        console.log(response);
        $("label").removeClass();

        const labelFullName = $("label:eq(0)");
        const labelEmail = $("label:eq(1)");
        const labelDescription = $("label:eq(2)");

        labelFullName
          .html("Your name and surname:")
          .addClass("alert alert-amprove");
        labelEmail.html("Your E-mail:").addClass("alert alert-amprove");
        labelDescription.html("Your description:").addClass("alert alert-amprove");

        if ("success" in response) {
          $("form").hide();
          rePlace.removeClass();
          rePlace.addClass("alert alert-success");
          $("#Fullname").val("");
          $("#Email").val("");
          $("#Text").val("");
          rePlace
            .html(response.success)
            .fadeIn(500)
            .delay(400);
          console.log(rePlace);
        } else {
          if ("Fullname" in response) {
            labelFullName
              .hide()
              .addClass("alert alert-danger")
              .fadeIn(500);
            $("label:eq(0)").html(response["Fullname"]);
          }
          if ("Email" in response) {
            labelEmail
              .hide()
              .addClass("alert alert-danger")
              .fadeIn(500);
            $("label:eq(1)").html(response["Email"]);
          }
          if ("Text" in response) {
            labelDescription
              .hide()
              .addClass("alert alert-danger")
              .fadeIn(500);
            $("label:eq(2)").html(response["Text"]);
          }
        }
      },
      error: function(xhr) {
        console.log(xhr);
      }
    });
  });
});
