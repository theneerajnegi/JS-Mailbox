let emails = [
  { from: "Amazon", subject: "Your order has shipped", body: "Your item is on the way." },
  { from: "LinkedIn", subject: "New connection", body: "You have a new connection request." }
];

function renderInbox() {
  const container = document.getElementById('emailList');
  container.innerHTML = '';
  emails.forEach(email => {
    const div = document.createElement('div');
    div.className = 'email';
    div.innerHTML = `<strong>${email.from}</strong><br><b>${email.subject}</b><p>${email.body}</p>`;
    container.appendChild(div);
  });
}

function openCompose() {
  document.getElementById('composeModal').style.display = 'block';
}

function closeCompose() {
  document.getElementById('composeModal').style.display = 'none';
}

function sendEmail() {
  const to = document.getElementById('to').value;
  const subject = document.getElementById('subject').value;
  const body = document.getElementById('body').value;
  emails.unshift({ from: to, subject: subject, body: body });
  renderInbox();
  closeCompose();
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

window.onload = renderInbox;
