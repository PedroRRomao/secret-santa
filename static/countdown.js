        // Set the date we're counting down to (December 25, current year)
        const targetDate = new Date(new Date().getFullYear(), 11, 25).getTime();

        // Update the countdown every 1 second
        const countdown = setInterval(function() {
            // Get the current date and time
            const currentDate = new Date().getTime();

            // Calculate the time remaining in milliseconds
            const timeRemaining = targetDate - currentDate;

            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            // Display the countdown in an element with the id "countdown"
            const countdownElement = document.getElementById("countdown");
            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

            // If the countdown has reached zero, display a message
            if (timeRemaining < 0) {
                clearInterval(countdown);
                countdownElement.innerHTML = "Merry Christmas!";
            }
        }, 1000); // Update every 1 second