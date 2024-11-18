// The precomputed hash for the password "password" (replace with your own hashed password)
const ferefgaf = "1c59943c6f21fb84ae8b5da01ce9fb9e7aa02df179a0441630ddd5bd5e20b444"; // Example hash of "password"

// Hash the input password and compare with the correct hash
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
}

async function checkPassword() {
    const password = document.getElementById('password').value;
    const hash = await hashPassword(password);
    
    // Compare the entered password hash with the stored hash
    if (hash === ferefgaf) {
        
        window.location.href = "ouma.html"; // Redirect to another page after success
    } else {
        alert("Incorrect password. get out.");
        window.location.href = "index.html"; // Redirect back if failed
    }
}
