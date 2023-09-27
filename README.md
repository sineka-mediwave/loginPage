# Login Page with mailId and Password

- There are 2 input fields. One for email and another for password.
- They should be accessible (please google what accessibility is)
- There should be a Login button.
- Pressing the login button/submitting form should generate a json like {"email": "stuff-from-email-input", "password": "stuff-from-password-input"}
- The email should be a valid email and password should be atleast 8 characters long and must include one of !#$^ characters in it.
- If the fields dont meet that criteria, then an error should be shown below the incorrect field.

## Creating a form in html

Login page with mail ID and password input fields
While submitting input will be displayed in the console.

## Password validation

A regular expression (regex) is a sequence of characters that define a search pattern. Here’s how to write regular expressions:

### Repeaters

- \* for 0 or more times. ab\*c will give ac, abc, abbc
- \+ for at atleast one or more times. ab+c will give abc, abbc
- {..} defers min and max times.
- .\* will tell the computer that any character can be used any number of times.

```
with specific correction
if (!validchar) {
        $("#pwd-restriction").text("must include one of these !#$^ charaters");
      } else if (!validLength) {
        $("#pwd-restriction").text("atleast 8 characters");
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
```
