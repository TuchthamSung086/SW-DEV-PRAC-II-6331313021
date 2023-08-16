function isBlank(id) {
    if (document.getElementById(id).value === "") return true;
    return false;
}

function validate() {
    if (isBlank("company_name")) {
        alert("Company name must not be blank!")
    } else if (isBlank("chairs") || document.getElementById("chairs").value < 1 || document.getElementById("chairs").value > 10) {
        alert("Number of Chairs must be between 1 and 10!");
    } else if (isBlank("contact_name")) {
        alert("Contact name must not be blank!");
    } else if (isBlank("contact_tel")) {
        alert("Contact tel must not be blank!");
    } else {
        alert("Successfully submitted the form :)");
    }
}