    const contactForm = document.getElementById('contactForm');
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');

      // Get error message elements
      const nameError = document.getElementById('nameError');
      const emailError = document.getElementById('emailError');
      const messageError = document.getElementById('messageError');

      // Get display elements
      const feedbackDisplay = document.getElementById('feedbackDisplay');
      const nameDisplay = document.getElementById('nameDisplay');
      const emailDisplay = document.getElementById('emailDisplay');
      const subjectDisplay = document.getElementById('subjectDisplay');
      const messageDisplay = document.getElementById('messageDisplay');

      // Real-time validation and display
      nameInput.addEventListener('input', () => {
        nameDisplay.textContent = nameInput.value;
        updateFeedbackDisplay();
        validateName();
      });

      emailInput.addEventListener('input', () => {
        emailDisplay.textContent = emailInput.value;
        updateFeedbackDisplay();
        validateEmail();
      });

      subjectInput.addEventListener('input', () => {
        subjectDisplay.textContent = subjectInput.value;
        updateFeedbackDisplay();
      });

      messageInput.addEventListener('input', () => {
        messageDisplay.textContent = messageInput.value;
        updateFeedbackDisplay();
        validateMessage();
      });

      // Form submission
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();

        // If all required fields are valid, show the feedback
        if (isNameValid && isEmailValid && isMessageValid) {
          feedbackDisplay.classList.add('active');
          // Scroll to feedback display
          feedbackDisplay.scrollIntoView({ behavior: 'smooth' });
        }
      });

      // Validation functions
      function validateName() {
        if (nameInput.value.trim() === '') {
          nameError.classList.remove('hidden');
          nameInput.style.borderColor = '#e74c3c';
          return false;
        } else {
          nameError.classList.add('hidden');
          nameInput.style.borderColor = '#ddd';
          return true;
        }
      }

      function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
          emailError.classList.remove('hidden');
          emailInput.style.borderColor = '#e74c3c';
          return false;
        } else {
          emailError.classList.add('hidden');
          emailInput.style.borderColor = '#ddd';
          return true;
        }
      }

      function validateMessage() {
        if (messageInput.value.trim() === '') {
          messageError.classList.remove('hidden');
          messageInput.style.borderColor = '#e74c3c';
          return false;
        } else {
          messageError.classList.add('hidden');
          messageInput.style.borderColor = '#ddd';
          return true;
        }
      }

      // Update feedback display visibility
      function updateFeedbackDisplay() {
        // Show feedback section if any field has content
        if (nameInput.value || emailInput.value || subjectInput.value || messageInput.value) {
          feedbackDisplay.classList.add('active');
        } else {
          feedbackDisplay.classList.remove('active');
        }
      }
