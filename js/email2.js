const insertData = async () => {
  const email = document.getElementById("email").value;
  const checkbox = document.getElementById("check_box").checked;

  const validEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email.match(validEmailRegex)) {
    showAlert("Please enter a valid email address.");
  } else if (!checkbox) {
    showAlert("You must agree to the terms before submitting.");
  } else {
    showAlert("Thank you! Your inquiry has been successfully submitted.");

    try {
      const response = await fetch("https://kronex-backend.vercel.app/email", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });

      const result = await response.json();

      if (result) {
        document.getElementById("email_form").reset(); // Reset the form after successful submission
      }
    } catch (error) {
      console.error("Error:", error);
      showAlert("An error occurred. Please try again later.");
    }
  }


  // Automatically hide the alert message after 3 seconds (3000 milliseconds)
  setTimeout(function () {
    alertMessage.textContent = "";
  }, 3000);



    // Automatically hide the alert message after 3 seconds (3000 milliseconds)
    setTimeout(function() {
      alertMessage.textContent = '';
    }, 2000);

    // Clear the input field
    document.getElementById('email').value = '';
    document.getElementById('check_box').checked = false;
};

const showAlert = (message) => {
  const alertMessage = document.getElementById("alertMessage");
  alertMessage.textContent = message;
};
