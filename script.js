function volume_sphere() {
    const radius = parseFloat(document.getElementById('radius').value);
    const volumeField = document.getElementById('volume');

    // Calculate volume (even if input is invalid)
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Directly assign the value (no rounding, no alert)
    volumeField.value = volume;

    return false; // Prevent form submission
}
