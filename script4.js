document.getElementById('closeBtn').addEventListener('click', function() {
    window.location.href = "manage.html"; // Replace with the proper website URL
});

// Array of symptoms and associated additional symptoms
const symptomAdditionalSymptoms = {
    "fever": ["Chills", "Sweating", "Fatigue"],
    "cough": ["Sore throat", "Runny nose", "Shortness of breath"],
    "chest-pain": ["Pain in arm", "Pain in jaw", "Sweating"],
    "nausea": ["Vomiting", "Diarrhea", "Abdominal pain"],
    "headache": ["Dizziness", "Nausea", "Sensitivity to light"],
    "fatigue": ["Weakness", "Lack of energy", "Difficulty concentrating"],
    "abdominal-pain": ["Bloating", "Constipation", "Diarrhea"],
    "dizziness": ["Lightheadedness", "Vertigo", "Nausea"],
    "shortness-of-breath": ["Wheezing", "Chest tightness", "Rapid breathing"],
    "low-blood-pressure": ["Dizziness", "Fainting", "Blurred vision"],
    "high-blood-pressure": ["Headache", "Fatigue", "Vision problems"],
    // Add more symptoms and associated additional symptoms as needed
    "joint-pain": ["Swelling", "Stiffness", "Redness"],
    "muscle-weakness": ["Cramps", "Twitching", "Difficulty lifting"],
    "skin-rash": ["Itching", "Bumps", "Redness"],
    "vision-changes": ["Blurry vision", "Double vision", "Seeing halos"],
    "urinary-issues": ["Frequent urination", "Burning sensation", "Blood in urine"],
    "sleep-disturbances": ["Insomnia", "Nightmares", "Restless legs"],
    "memory-problems": ["Forgetfulness", "Confusion", "Difficulty concentrating"],
    "difficulty-swallowing": ["Throat pain", "Feeling of something stuck", "Drooling"],
};

// Function to populate additional symptoms based on selected symptoms
document.querySelectorAll('input[name="symptom"]').forEach(function(symptomCheckbox) {
symptomCheckbox.addEventListener('change', function() {
const selectedSymptoms = Array.from(document.querySelectorAll('input[name="symptom"]:checked')).map(symptom => symptom.value);
const additionalSymptomsSection = document.getElementById('additionalSymptomsSection');
const additionalSymptomsDropdown = document.getElementById('additionalSymptoms');
additionalSymptomsDropdown.innerHTML = ''; // Clear previous options

if (selectedSymptoms.length > 0) {
    let additionalSymptomsHTML = '';
    selectedSymptoms.forEach(symptom => {
        if (symptomAdditionalSymptoms.hasOwnProperty(symptom)) {
            additionalSymptomsHTML += <h4>${symptom}:</h4>;
            symptomAdditionalSymptoms[symptom].forEach(additionalSymptom => {
                additionalSymptomsHTML += `
                    <input type="checkbox" id="${additionalSymptom}" name="additionalSymptom" value="${additionalSymptom}">
                    <label for="${additionalSymptom}">${additionalSymptom}</label><br>
                `;
            });
        }
    });
    additionalSymptomsDropdown.innerHTML = additionalSymptomsHTML;
    additionalSymptomsSection.style.display = 'block';
} else {
    additionalSymptomsSection.style.display = 'none';
}
});
});


// Form submission handling
document.getElementById('patientForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    // You can add additional logic here for form validation or other processing
    document.getElementById('submissionMessage').style.display = 'block'; // Show submission message
    // You may also want to reset the form after submission
    // document.getElementById('patientForm').reset();
});