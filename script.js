// Show the selected form based on the button clicked
function showForm(formType) {
    // Hide all forms initially
    document.getElementById("delegateForm").style.display = "none";
    document.getElementById("participantForm").style.display = "none";
    document.getElementById("volunteerForm").style.display = "none";
    document.getElementById("partnerForm").style.display = "none";

    // Show the selected form
    document.getElementById(`${formType}Form`).style.display = "block";
}

// Simple form submission handling
function submitForm(formId) {
    const form = document.getElementById(formId);
    alert("Thank you for registering! Your information has been submitted.");
    form.reset();
    form.style.display = "none";
}

// Donation function
function makeDonation() {
    const amount = document.getElementById("donationAmount").value;
    if (amount) {
        alert(`Thank you for your generous donation of KSH ${amount}!`);
        document.getElementById("donationAmount").value = ""; // Clear input field
    } else {
        alert("Please enter a donation amount.");
    }
}

async function makeDonation() {
    const amount = document.getElementById("donationAmount").value;
    if (amount && amount > 0) {
        try {
            const response = await fetch("http://localhost:3000/pay", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ amount: amount })
            });

            const data = await response.json();
            alert(data.message);
        } catch (error) {
            console.error("Donation Error:", error);
            alert("Failed to initiate donation. Please try again later.");
        }
    } else {
        alert("Please enter a valid donation amount.");
    }
}
