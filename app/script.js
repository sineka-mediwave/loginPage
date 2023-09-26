$(document).ready(function () {
  //   const peoples = [];
  $("input").focusin(function () {
    $(this).css("background-color", "#ffc");
  });
  $("input").focusout(function () {
    $(this).css("background-color", "#fff");
  });
  $("#submitBtn").click(function (e) {
    // $("#password").keyup(function () {
    //   let pwdSpecial = /^.{10,16}$/;
    //   let pwdLength = /[!#$^]+/;
    // });
    e.preventDefault();

    const mail = $("#mailId").val();
    const password = $("#password").val();
    const people = {
      new: new Date().getTime(),
      email: mail,
      password: password,
    };
    // peoples.push(people);
    console.log(people);
  });
});
