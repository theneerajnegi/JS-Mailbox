const inbox = document.getElementById('inbox');
const modal = document.getElementById('composeModal');

const emails = [
  { from: "Microsoft Account Team", subject: "Security alert", body: "New sign-in from iPhone" },
  { from: "Amazon.in", subject: "Your order has been shipped!", body: "Track your package now." },
];

function renderInbox() {
  inbox.innerHTML = '';
  emails.forEach((mail, i) => {
    inbox.innerHTML += `
      <div class="email">
        <strong>${mail.from}</strong><br>
        <div><b>${mail.subject}</b></div>
        <div>${mail.body}</div>
      </div>
    `;
  });
}

function openCompose() {
  modal.style.display = 'block';
}

function closeCompose() {
  modal.style.display = 'none';
}

function sendEmail() {
  const subject = document.getElementById('subject').value;
  const body = document.getElementById('body').value;
  const to = document.getElementById('to').value;

  emails.unshift({ from: to, subject: subject, body: body });
  renderInbox();
  closeCompose();
}

// Initialize inbox
renderInbox();
