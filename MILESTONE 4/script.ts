// Get References to the Form and Display Area

const form = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

// Handle Form Submission
form.addEventListener('submit', (event:Event)=> {
    event.preventDefault(); // prevent page reload

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // Generate Resume Content Dynamically
    const resumeHTML = `
    <h2><b>EDITABLE RESUME:</b></h2>
    <h3>PERSONAL INFORMATION:</h3>
    <p><b>NAME:</b><span contenteditable="true">${name}</span></p>
    <p><b>EMAIL:</b><span contenteditable="true">${email}</span></p>
    <p><b>PHONE:</b><span contenteditable="true">${phone}</span></p>

    <h3>EDUCATION:</h3>
    <p <span contenteditable="true">${education}</p>

    <h3>EXPERIENCE:</h3>
    <p <span contenteditable="true">${experience}</p>

    <h3>SKILLS:</h3>
    <p <span contenteditable="true">${skills}</p>
    `;

    // Displaying the Gennerated Resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error('The Resume Display Element is Missing.');
    }
});