document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.getElementById("dropdown");
    const submitButton = document.getElementById("submit");
    const boxesContainer = document.getElementById("boxes");

    submitButton.addEventListener("click", function () {
        const selectedValue = parseInt(dropdown.value, 10);

        // Clear the container
        boxesContainer.innerHTML = '';

        const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "cyan", "brown", "black"];

        for (let i = 0; i < selectedValue; i++) {
            const box = document.createElement("div");
            box.className = "box " + colors[i];

            const decreaseButton = document.createElement("span");
            decreaseButton.innerHTML = "&lt;"; // Left arrow

            const numberElement = document.createElement("span");
            numberElement.textContent = "0";

            const increaseButton = document.createElement("span");
            increaseButton.innerHTML = "&gt;"; // Right arrow

            box.appendChild(decreaseButton);
            box.appendChild(numberElement);
            box.appendChild(increaseButton);

            decreaseButton.addEventListener("click", function () {
                let currentValue = parseInt(numberElement.textContent, 10);
                if (currentValue > 0) {
                    currentValue--;
                    numberElement.textContent = currentValue.toString();
                }
            });

            increaseButton.addEventListener("click", function () {
                let currentValue = parseInt(numberElement.textContent, 10);
                currentValue++;
                numberElement.textContent = currentValue.toString();
            });

            boxesContainer.appendChild(box);
        }
    });
});
