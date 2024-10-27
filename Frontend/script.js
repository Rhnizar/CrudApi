const apiUrl = 'http://localhost:3000/users';

// Create User
async function createUser() {
    const name = document.getElementById('createUserName').value;
    const email = document.getElementById('createUserEmail').value;
    const age = document.getElementById('createUserAge').value;
    
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, age }),
    });
    
    if (response.ok) {
        alert('User created successfully!');
        fetchUsers(); // Refresh the users list
    } else {
        alert('Failed to create user.');
    }
    document.getElementById('createUserName').value = "";
    document.getElementById('createUserEmail').value = "";
    document.getElementById('createUserAge').value = "";
    // document.getElementById('updateUserAge').value = "";
}

// Read Users
async function fetchUsers() {
    const response = await fetch(apiUrl);
    const users = await response.json();
    const usersList = document.getElementById('usersList');
    usersList.innerHTML = ''; // Clear the list
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `ID: ${user.id}, Name: ${user.name}, Email: ${user.email}, Age: ${user.age}`;
        usersList.appendChild(li);
    });
}

// Update User
async function updateUser() {
    const id = document.getElementById('updateUserId').value;
    const name = document.getElementById('updateUserName').value;
    const email = document.getElementById('updateUserEmail').value;
    const age = document.getElementById('updateUserAge').value;
    
    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, age }),
    });
    
    if (response.ok) {
        alert('User updated successfully!');
        fetchUsers(); // Refresh the users list
    } else {
        alert('Failed to update user.');
    }
    document.getElementById('updateUserId').value = "";
    document.getElementById('updateUserName').value = "";
    document.getElementById('updateUserEmail').value = "";
    document.getElementById('updateUserAge').value = "";

}

// Delete User
async function deleteUser() {
    const id = document.getElementById('deleteUserId').value;
    
    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    });
    
    if (response.ok) {
        alert('User deleted successfully!');
        fetchUsers(); // Refresh the users list
    } else {
        alert('Failed to delete user.');
    }
}

// Fetch users on page load
document.addEventListener('DOMContentLoaded', fetchUsers);
