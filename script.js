fetch('http://localhost:3000/users') // Replace with your local server endpoint
  .then(response => response.json()) // Parse the JSON response
  .then(data => console.log(data))   // Log the data to the console
  .catch(error => console.error('Error:', error)); // Catch and log errors