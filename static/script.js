document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const questionnaireForm = document.getElementById("questionnaireForm");
    const answersContainer = document.getElementById("answers");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            // Handle login logic here
        });
    }

    if (questionnaireForm) {
        questionnaireForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent the default form submission behavior
            // Handle questionnaire submission here

            // You can add your logic to send the form data to the server
        });
    }

    // Fetch answers from the server
    if (answersContainer) {
        fetch("/api/answers")  // Update the endpoint to the one in your Flask app
            .then((response) => response.json())
            .then((answers) => {
                for (const key in answers) {
                    const answerItem = document.createElement("p");
                    answerItem.innerHTML = `<strong>${key}:</strong> ${answers[key]}`;
                    answersContainer.appendChild(answerItem);
                }
            })
            .catch((error) => console.error(error));
    }
});
