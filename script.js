document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const convertButton = document.getElementById("convert");
    const resultDisplay = document.getElementById("result");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;

        if (isNaN(temperature)) {
            resultDisplay.textContent = "Please enter a valid temperature.";
            return;
        }

        let convertedTemperature;
        let resultUnit;

        if (unit === "celsius") {
            convertedTemperature = (temperature - 32) * (5 / 9);
            resultUnit = "Celsius";
        } else if (unit === "fahrenheit") {
            convertedTemperature = (temperature * 9 / 5) + 32;
            resultUnit = "Fahrenheit";
        } else if (unit === "kelvin") {
            convertedTemperature = temperature + 273.15;
            resultUnit = "Kelvin";
        }

        resultDisplay.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${resultUnit}`;
    });
});
