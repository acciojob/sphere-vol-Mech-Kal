function volume_sphere() {
    const radius = parseFloat(document.getElementById('radius').value);
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById('volume').value = volume;
    return false; // prevent reload
}

window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
