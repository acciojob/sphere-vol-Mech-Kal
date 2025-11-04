function volume_sphere() {
    //Write your code here
    const radius = parseFloat(document.getElementById('radius').value);
    const volumeField = document.getElementById('volume');

    if (isNaN(radius) || radius <= 0) {
       // alert("Please enter a valid positive number for radius.");
        volumeField.value = "";
        return false;
    }

    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volumeField.value = volume.toFixed(2);

    return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
