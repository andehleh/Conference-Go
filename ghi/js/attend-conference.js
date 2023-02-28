window.addEventListener('DOMContentLoaded', async () => {
  const selectTag = document.getElementById('conference');

  const form = document.getElementById('create-attendee-form');
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form))

    const attendeeUrl = 'http://localhost:8001/api/attendees/';
    const fetchOptions = {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const attendeeResponse = await fetch(attendeeUrl, fetchOptions);
    if (attendeeResponse.ok) {
      const success = document.getElementById('success-message');
      form.classList.add('d-none');
      success.classList.remove('d-none');
    } else {
      console.log(attendeeResponse);
    }
  });

  const url = 'http://localhost:8000/api/conferences/';
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();

    for (let conference of data.conferences) {
      const option = document.createElement('option');
      option.value = conference.href;
      option.innerHTML = conference.name;
      selectTag.appendChild(option);
    }

    selectTag.classList.remove('d-none');
    const spinner = document.getElementById('loading-conference-spinner');
    spinner.classList.add('d-none');
  }

});
















