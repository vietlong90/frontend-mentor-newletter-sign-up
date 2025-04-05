window.onload = function() {
  var formEmail = document.getElementById('form-email');
  var emailInput = document.getElementById('txt_email');
  var card = document.getElementById('card');
  var cardNoti = document.getElementById('card-noti');
  var cardButtonSubmit = document.getElementById('submit-email');
  var cardButtomNotiClose = document.getElementById('btn-close');
  var spanEmail = document.getElementById('email');

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  emailInput.addEventListener('input', function() {
    console.log('Input event triggered');
    const email = emailInput.value;

    const validEmail = regexEmail.test(email);

    if (email && !validEmail) {
      if (formEmail.classList.contains('valid')) {
        formEmail.classList.remove('valid');
      }
      formEmail.classList.add('error');
    } else {
      if (formEmail.classList.contains('error')) {
        formEmail.classList.remove('error');
      }
    }
    if (email && validEmail) {
      formEmail.classList.add('valid');
    }
    if (!email) {
      if (formEmail.classList.contains('valid')) {
        formEmail.classList.remove('valid');
      }
    }
  });

  cardButtonSubmit.addEventListener('click', function(e) {
    e.preventDefault();
    const email = emailInput.value;
    const validEmail = regexEmail.test(email);

    if (email && validEmail) {
      spanEmail.innerHTML = email;
      card.classList.toggle('d-none');
      cardNoti.classList.toggle('d-none');
    }
  });

  cardButtomNotiClose.addEventListener('click', function() {
    card.classList.toggle('d-none');
    cardNoti.classList.toggle('d-none');
    emailInput.value = '';
    if (formEmail.classList.contains('valid')) {
      formEmail.classList.remove('valid');
    }
  });
};