const contactForm = document.getElementById('contactForm'); 
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

// Use the existing feedback container from the HTML
const feedbackContainer = document.getElementById('feedbackDisplay');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent actual form submission

  // Clear any previous output
  feedbackContainer.innerHTML = '';

  // Get input values
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const subject = subjectInput.value.trim();
  const message = messageInput.value.trim();

  // Validate required fields
  if (!name || !email || !message) {
    alert('Please fill in all required fields.');
    return;
  }

  // Create and display result
  const resultHTML = `
    <h3>Your Submitted Info:</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject || '(None)'}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  feedbackContainer.innerHTML = resultHTML;
  feedbackContainer.classList.add('active'); // Optional: for CSS styling

  // Optional: Reset form
  contactForm.reset();
});
