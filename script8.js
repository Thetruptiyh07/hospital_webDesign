function showDetails(service) {
    let details;
    switch(service) {
        case 'surgery':
            details = 'Comprehensive surgical services including minimally invasive procedures and complex surgeries performed by experienced surgeons to address a wide range of medical conditions.';
            break;
        case 'pregnancy':
            details = 'Specialized care for expectant mothers, offering prenatal consultations, maternal screenings, and delivery services in a supportive and nurturing environment.';
            break;
        case 'cardiology':
            details = 'Advanced cardiac care focusing on prevention, diagnosis, and treatment of heart conditions, utilizing cutting-edge technology and personalized treatment plans.';
            break;
        case 'neurology':
            details = 'Expert evaluation and management of neurological disorders, including stroke, epilepsy, and movement disorders, with emphasis on innovative therapies and rehabilitation techniques.';
            break;
        case 'radiology':
            details = 'State-of-the-art imaging services such as X-rays, CT scans, and MRI scans, providing precise diagnostic information to guide treatment decisions across various medical specialties.';
            break;
        case 'orthopaedic':
            details = 'Comprehensive musculoskeletal care offering diagnosis, treatment, and rehabilitation for conditions affecting bones, joints, and muscles, including fractures, arthritis, and sports injuries.';
            break;
        case 'cancer':
            details = 'Multidisciplinary approach to cancer care encompassing diagnosis, treatment, and supportive services, with a focus on personalized therapies and compassionate care.';
            break;
        case 'bone_marrow_transplantation':
            details = 'Specialized procedure for patients with hematologic disorders or malignancies, involving the transplantation of healthy stem cells to restore bone marrow function and treat underlying conditions.';
            break;
        case 'urology':
            details = 'Comprehensive urological services for both men and women, addressing conditions such as urinary tract infections, kidney stones, and prostate disorders through medical and surgical interventions.';
            break;
        default:
            details =' Details not available.';
    }
    alert(details);
};