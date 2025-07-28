document.getElementById('surveyForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value,
    instagram: form.instagram.value,
    youtube: form.youtube.value,
    facebook: form.facebook.value,
    twitter: form.twitter.value,
    linkedin: form.linkedin.value
  };

  // Replace with your Google Apps Script Web App URL
  fetch('https://script.google.com/macros/s/AKfycbz82K08ERDVeAZBpikGUzf_WbJs473zEOu_bWco7OE9BxGkFuSWG2CFff1Zd3U2Tt-ZIQ/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  // Transition to thank-you message
  document.getElementById('formContainer').classList.add('hidden');
  document.getElementById('thankYou').classList.remove('hidden');
});
