"use strict";
$(document).ready(() => {
  $("#email").focus();

  $("#registration_form").submit((event) => {
    let isValid = true;

    const firstName = $("#first_name").val().trim();
    if (firstName == "") {
      $("#first_name").next().text("This field is required.");
      isValid = false;
    } else {
      $("#first_name").next().text("");
    }
    $("#first_name").val(firstName);

    const lastName = $("#last_name").val().trim();
    if (lastName == "") {
      $("#last_name").next().text("This field is required.");
      isValid = false;
    } else {
      $("#last_name").next().text("");
    }
    $("#last_name").val(lastName);

    const userName = $("#username").val().trim();
    if (userName == "") {
      $("#username").next().text("This field is required.");
      isValid = false;
    } else {
      $("#username").next().text("");
    }
    $("#username").val(userName);

    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    const email = $("#email").val().trim();

    if (email == "") {
      $("#email").next().text("This field is required.");
      isValid = false;
    } else if (!emailPattern.test(email)) {
      $("#email").next().text("Must be a valid email address.");
      isValid = false;
    } else {
      $("#email").next().text("");
    }
    $("#email").val(email);

    const password = $("#password").val().trim();
    if (password == "") {
      $("#password").next().text("This field is required.");
      isValid = false;
    } else if (password.length < 6) {
      $("#password").next().text("Must be 6 or more characters.");
      isValid = false;
    } else {
      $("#password").next().text("");
    }
    $("#password").val(password);

    const verify = $("#verify").val().trim();
    if (verify == "") {
      $("#verify").next().text("This field is required.");
      isValid = false;
    } else if (verify !== password) {
      $("#verify").next().text("Must match first password entry.");
      isValid = false;
    } else {
      $("#verify").next().text("");
    }
    $("#verify").val(verify);

    const country = $("#country").val();
    if (country == "") {
      $("#country").next().text("This field is required.");
      isValid = false;
    } else {
      $("#country").next().text("");
    }

    const street = $("#street").val().trim();
    if (street == "") {
      $("#street").next().text("This field is required.");
      isValid = false;
    } else {
      $("#street").next().text("");
    }
    $("#street").val(street);

    const city = $("#city").val().trim();
    if (city == "") {
      $("#city").next().text("This field is required.");
      isValid = false;
    } else {
      $("#city").next().text("");
    }
    $("#city").val(city);

    const postcode = $("#postcode").val().trim();
    if (postcode == "") {
      $("#postcode").next().text("This field is required.");
      isValid = false;
    } else {
      $("#postcode").next().text("");
    }
    $("#postcode").val(postcode);

    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    const phone = $("#phone").val().trim();
    if (phone == "") {
      $("#phone").next().text("This field is required.");
      isValid = false;
    } else if (!phonePattern.test(phone)) {
      $("#phone").next().text("Use 999-999-9999 format.");
      isValid = false;
    } else {
      $("#phone").next().text("");
    }
    $("#phone").val(phone);

    const genre = $("#genre").val();
    if (genre == "") {
      $("#genre").next().text("This field is required.");
      isValid = false;
    } else {
      $("#genre").next().text("");
    }

    if (!$("#terms").is(":checked")) {
      $("#terms").next().text("This field is required.");
      isValid = false;
    } else {
      $("#terms").next().text("");
    }

    if (isValid == false) {
      event.preventDefault();
    }
  });
});
