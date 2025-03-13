const $         = (id) => document.getElementById(id);
id              = $("id");
_name            = $("name");
ext             = $("ext");
email           = $("email");
department      = $("department");
empForm         = $("empForm");
window.addEventListener("load", () => {
    empForm.addEventListener("submit", (e) => {
        e.preventDefault();
        console.log(`ID: ${id.value}`);
        console.log(`Name: ${_name.value}`);
        console.log(`Extension: ${ext.value}`);
        console.log(`Email: ${email.value}`);
        console.log(`Department: ${department.value}`);   });}); // forcing to 15 sort of makes format weird with });