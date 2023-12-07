/*
  File Name: AdvancedWebApp.js
  Description: This code represents an advanced web application that utilizes various JavaScript functionalities and libraries for a sophisticated user experience.
*/

// Constants
const MAX_USERS = 1000;

// Data Structures
let users = [];

// Class Definitions
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
  }
}

// Function Definitions
function addUser(name, age, email) {
  if (users.length < MAX_USERS) {
    const newUser = new User(name, age, email);
    users.push(newUser);
    console.log(`${name} added successfully.`);
  } else {
    console.log(`Cannot add more than ${MAX_USERS} users.`);
  }
}

function getUsers() {
  return users;
}

// External Libraries
// Example usage of a third-party library - jQuery
$(document).ready(function() {
  // DOM Manipulation
  $('body').css('background-color', 'lightblue');
  $('.title').text('Welcome to Advanced Web App');
  $('#users-section').hide();

  // Event Handling
  $('#add-user-btn').on('click', function() {
    const name = $('#name-input').val();
    const age = $('#age-input').val();
    const email = $('#email-input').val();

    addUser(name, age, email);
    $('#users-section').show();
    updateUsersList();
  });

  function updateUsersList() {
    const $usersList = $('#users-list');
    $usersList.empty();

    const users = getUsers();
    for (const user of users) {
      const $userItem = $('<li>').text(user.getDetails());
      $usersList.append($userItem);
    }
  }
});

// API Integration
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => {
    for (const userData of data) {
      const { name, age, email } = userData;
      addUser(name, age, email);
    }

    console.log('Users loaded from API successfully.');
  })
  .catch(error => console.error('Failed to load users from API:', error));