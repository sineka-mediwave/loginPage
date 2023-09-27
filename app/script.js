$(document).ready(function () {
  //   const peoples = [];
  $("input").focusin(function () {
    $(this).css("background-color", "#ffc");
  });
  $("input").focusout(function () {
    $(this).css("background-color", "#fff");
  });

  $("#submitBtn").click(function (e) {
    const mail = $("#mailId").val();
    const password = $("#password").val();
    if (!mail || !password) {
      $("#submitBtn").css("background-color", "red");
    } else if (password) {
      let pwdLength = /^(?=.*[!#$^])(?=.*[a-zA-Z]).{8,}$/;
      let pwdValid = pwdLength.test(password);
      e.preventDefault();

      if (!pwdValid) {
        $("#pwd-restriction").text(
          "atleast 8 characters, must include one of !#$^"
        );
      } else {
        $("#submitBtn").css("background-color", "#F2D8D8");
        $("#pwd-restriction").text("");
        const people = {
          new: new Date().getTime(),
          email: mail,
          password: password,
        };
        console.log(people);
      }
    }
  });
});
