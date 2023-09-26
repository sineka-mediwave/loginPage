$(document).ready(function () {
  //   const peoples = [];
  $("input").focusin(function () {
    $(this).css("background-color", "#ffc");
  });
  $("input").focusout(function () {
    $(this).css("background-color", "#fff");
  });
  $("#password").keyup(function () {
    let pwdRequirement = /^(?=.*{8,16})+(?=.*[!#$^])+[a-zA-Z0-9]$/;
    // let pwdSpecial = /[!#$^]+/;
    const pwd = $(this).val();
    console.log(pwd);
    let pwdValid = pwdRequirement.test(pwd);
    if (!pwdValid) {
      $("#pwd-restriction").text("aleast 8 character");
    }
  });
  $("#submitBtn").click(function (e) {
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
