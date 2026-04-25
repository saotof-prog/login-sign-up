document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('formwrapper');
    const toggleBtn = document.getElementById('toggleBtn');
    const toggleHeading = document.getElementById('toggleHeading');
    const toggleText = document.getElementById('toggleText');

    toggleBtn.addEventListener('click', () => {
        wrapper.classList.toggle('active');
        if (wrapper.classList.contains('active')) {
            toggleHeading.textContent = "Already have an account?";
            toggleText.textContent = "Login to your account";
            toggleBtn.textContent = "Login";
        } else {
            toggleHeading.textContent = "Don't have an account?";
            toggleText.textContent = "Sign up to get an account";
            toggleBtn.textContent = "Sign Up";
        }
    });
});
function login() {
  const email = document.querySelector("input[type='email']").value;
  const password = document.querySelector("input[type='password']").value;

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.json())
  .then(data => alert(data.message));
}