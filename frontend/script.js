
document.getElementById('myForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: name, email: email}),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
