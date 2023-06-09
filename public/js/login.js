const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const user = document.querySelector("#user-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (user && password) {
    // Send the user and password to the server
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ user, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

const login = async (event) => {
  event.preventDefault();
  document.location.replace("/login");
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document.querySelector("#login").addEventListener("click", login);
