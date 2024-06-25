 function searchDoctors() {
    var input, filter, doctors, doctor, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    doctors = document.getElementsByClassName('doctor');
    var found = false;

    for (i = 0; i < doctors.length; i++) {
        doctor = doctors[i].getElementsByClassName("description")[0];
        txtValue = doctor.textContent || doctor.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            doctors[i].style.display = "";
            found = true;
        } else {
            doctors[i].style.display = "none";
        }
    }

    if (!found) {
        document.getElementById('noResults').style.display = 'block';
    } else {
        document.getElementById('noResults').style.display = 'none';
    }
}
function setPriority(button) {
    var doctor = button.closest('.doctor');
    var priorityLine = doctor.querySelector('.priority-line');
    priorityLine.style.display = 'block';
}
const doctorNames = ["John Doe", "Jane Smith", "Dinesh Gupta", "Vineeta Singh","Arya Patkar", "Rajesh Bhaskar"];

// Function to show suggestions based on input value
function showSuggestions(input) {
    const suggestionsList = document.getElementById("suggestions");
    suggestionsList.innerHTML = "";
    const filteredDoctors = doctorNames.filter(name => name.toLowerCase().startsWith(input.toLowerCase()));
    filteredDoctors.forEach(doctor => {
        const listItem = document.createElement("li");
        listItem.textContent = doctor;
        suggestionsList.appendChild(listItem);
    });
    if (filteredDoctors.length > 0) {
        suggestionsList.style.display = "block";
    } else {
        suggestionsList.style.display = "none";
    }
}

// Function to submit referral
function submitReferral() {
    const referralInput = document.getElementById("referralInput").value;
    // Implement your logic to submit referral here
    console.log("Referral submitted:", referralInput);
 const message = "Referral submitted. We'll keep you updated.";
    alert(message);
}

    

const doctors = [
    { name: "Dr. John Doe", phone: "1234567890", description: "Working experience: 5+ years\nQualities: Logical, rational, focused" },
    { name: "Dr. Jane Smith", phone: "1223456789", description: "Working experience: 4+ years\nQualities: Comfort provider, diligent, honest" },
    { name: "Dr. Dinesh Gupta", phone: "9987654320", description: "Working experience: 10+ years\nQualities: Highly experienced, swift, rational" },
    { name: "Dr. Vineeta Singh", phone: "1345879090", description: "Working experience: 3+ years\nQualities: Understanding, patient, wise" }
];

// Function to display doctor's phone number
function displayPhoneNumber(index) {
    alert("Contact now: " + doctors[index].phone);
}
function displayPhoneNumber(index) {
    const phoneNumber = doctors[index].phone;
    const doctorElement = document.getElementsByClassName("doctor")[index];
    const phoneNumberSpan = doctorElement.querySelector('.phone-number');
    phoneNumberSpan.textContent = "Contact now: " + phoneNumber;
    phoneNumberSpan.style.display = "block"; // Display the phone number
}
// Function to close the phone number popup
function closePhonePopup() {
    document.getElementById("phonePopup").style.display = "none";
}