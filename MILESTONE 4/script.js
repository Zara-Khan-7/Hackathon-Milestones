// Get References to the Form and Display Area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle Form Submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate Resume Content Dynamically
    var resumeHTML = "\n    <h2><b>EDITABLE RESUME:</b></h2>\n    <h3>PERSONAL INFORMATION:</h3>\n    <p><b>NAME:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n    <p><b>EMAIL:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>PHONE:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n    <h3>EDUCATION:</h3>\n    <p <span contenteditable=\"true\">").concat(education, "</p>\n\n    <h3>EXPERIENCE:</h3>\n    <p <span contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3>SKILLS:</h3>\n    <p <span contenteditable=\"true\">").concat(skills, "</p>\n    ");
    // Displaying the Gennerated Resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume Display Element is Missing.');
    }
});
