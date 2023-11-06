function calculateAge() {
    const dobInput = document.getElementById("dob").value;
    const dob = new Date(dobInput);
    const today = new Date();

    if (dob > today) {
        alert("Please enter a valid date of birth.");
        return;
    }

    const age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById("result").textContent = "Your age is " + age + " years.";
}
