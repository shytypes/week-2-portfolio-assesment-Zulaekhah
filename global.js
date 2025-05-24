const formContainer = document.getElementById('formContainer');

const form = document.createElement('form');
form.id = 'contactForm';
form.method = 'POST';
form.action = '#';

const fields = [
  { label: 'Name', id: 'name', type: 'text', required: true },
  { label: 'Email', id: 'email', type: 'email', required: true },
  { label: 'Subject', id: 'subject', type: 'text', required: false },
  { label: 'Message', id: 'message', type: 'textarea', required: true }
];

fields.forEach(field => {
  const formGroup = document.createElement('div');
  formGroup.className = 'form-group';

  const label = document.createElement('label');
  label.htmlFor = field.id;
  label.innerHTML = `${field.label} ${field.required ? '<span class="required">*</span>' : ''}`;

  let input;
  if (field.type === 'textarea') {
    input = document.createElement('textarea');
  } else {
    input = document.createElement('input');
    input.type = field.type;
  }

  input.id = field.id;
  input.name = field.id;
  if (field.required) input.required = true;

  formGroup.appendChild(label);
  formGroup.appendChild(input);

  // Error span
  if (field.required) {
    const errorSpan = document.createElement('span');
    errorSpan.id = field.id + 'Error';
    errorSpan.textContent = `${field.label} is required.`;
    errorSpan.classList.add('error', 'hidden');
    formGroup.appendChild(errorSpan);
  }

  form.appendChild(formGroup);
});

const submitBtn = document.createElement('button');
submitBtn.type = 'submit';
submitBtn.textContent = 'Send Message';
form.appendChild(submitBtn);

formContainer.appendChild(form);

// Create feedback display area
const feedbackDisplay = document.createElement('div');
feedbackDisplay.id = 'feedbackDisplay';
feedbackDisplay.classList.add('hidden');
feedbackDisplay.innerHTML = `
  <h3>Preview:</h3>
  <p><strong>Name:</strong> <span id="nameDisplay"></span></p>
  <p><strong>Email:</strong> <span id="emailDisplay"></span></p>
  <p><strong>Subject:</strong> <span id="subjectDisplay"></span></p>
  <p><strong>Message:</strong> <span id="messageDisplay"></span></p>
`;
formContainer.appendChild(feedbackDisplay);
