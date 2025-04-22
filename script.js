let emails = [
  { from: "Netflix", subject: "Your subscription is active", body: "Thanks for joining us!" },
  { from: "GitHub", subject: "You've got a pull request", body: "Someone sent you code!" }
];

function renderInbox() {
  const container = document.getElementById("emailList");
  container.innerHTML = "";
  emails.forEach(email => {
    const el = document.createElement("div");
    el.className = "email";
    el.innerHTML = `<strong>${email.from}</strong><br><b>${email.subject}</b><p>${email.body}</p>`;
    container.appendChild(el);
  });
}

function openCompose() {
  document.getElementById("composeModal").style.display = "block";
}

function closeCompose() {
  document.getElementById("composeModal").style.display = "none";
}

function sendEmail() {
  const to = document.getElementById("to").value;
  const subject = document.getElementById("subject").value;
  const body = document.getElementById("body").value;
  emails.unshift({ from: to, subject: subject, body: body });
  renderInbox();
  closeCompose();
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

window.onload = renderInbox;
