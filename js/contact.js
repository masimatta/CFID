const sendMsgBtn = document.getElementById("send-message-btn");
sendMsgBtn.addEventListener("click", sendEmail);

function sendEmail() {
  console.log("Send button clicked");
  const name = document.getElementById("contact-name");
  const email = document.getElementById("contact-email");
  const phone = document.getElementById("contact-phone");
  const message = document.getElementById("contact-message");

  const nameErr = document.getElementById("name-err");
  const emailErr = document.getElementById("email-err");
  const phoneErr = document.getElementById("phone-err");
  const messageErr = document.getElementById("message-err");
  let flag = false;

  if (name.value == "") {
    nameErr.classList.remove("hidden");
    flag = true;
  } else {
    nameErr.classList.add("hidden");
  }

  if (email.value == "") {
    emailErr.classList.remove("hidden");
    flag = true;
  } else {
    emailErr.classList.add("hidden");
  }

  if (phone.value == "") {
    phoneErr.classList.remove("hidden");
    flag = true;
  } else {
    phoneErr.classList.add("hidden");
  }

  if (message.value == "") {
    messageErr.classList.remove("hidden");
    flag = true;
  } else {
    messageErr.classList.add("hidden");
  }

  if (flag) return;

  const details = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
  };

  fetch("https://project.hamhospitalfoundation.org/contact-form", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));

  toastr.success("Your message has been sent successfully!");
  name.value = email.value = phone.value = message.value = "";
}
