document.addEventListener("DOMContentLoaded", () => {
  const adminLoginForm = document.getElementById("adminLoginForm");

  adminLoginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(adminLoginForm);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch(
        "http://localhost:3000/v1/auth/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("jwtToken", data.tokens.access.token);
        alert("Login successful");
        window.location.href = "admin.html"; // Redirect to admin page
      } else {
        alert("Failed to login");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  });
});
