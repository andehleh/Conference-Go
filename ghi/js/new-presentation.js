window.addEventListener("DOMContentLoaded", async () => {
  const url = "http://localhost:8000/api/conferences/";
  const response = await fetch(url);

  if (response.ok) {
    const data = await response.json();
    const selectTag = document.getElementById("conference");
    for (let conference of data.conferences) {
      const option = document.createElement("option");
      option.value = conference.id;
      option.innerHTML = conference.name;
      selectTag.appendChild(option);
    }
  } else {
    console.error("Error loading conferences:", response.statusText);
  }

  const formTag = document.getElementById("create-presentation-form");
  formTag.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(formTag);
    console.log(formData);
    const json = JSON.stringify(Object.fromEntries(formData));
    console.log(json);
    const conferenceJson = JSON.parse(json);
    const confID = conferenceJson.conference;
    const locationUrl = `http://localhost:8000/api/conferences/${confID}/presentations/`;
    const fetchConfig = {
      method: "post",
      body: json,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(locationUrl, fetchConfig);
    if (response.ok) {
      formTag.reset();
      const newPresentation = await response.json();
      console.log(newPresentation);
    }
  });
});
