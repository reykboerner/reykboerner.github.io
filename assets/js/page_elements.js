// Load header
fetch('../../html/header.html')
.then(response => response.text())
.then(data => document.getElementById('header').innerHTML = data);

// Load footer
