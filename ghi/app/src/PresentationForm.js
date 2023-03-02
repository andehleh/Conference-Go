import React, { useEffect, useState } from "react";

function PresentationForm() {
    const [conferences, setConferences] = useState([]);
    const [presenterName, setPresenterName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [presenterEmail, setPresenterEmail] = useState("");
    const [title, setTitle] = useState("");
    const [synopsis, setSynopsis] = useState("");
    const [conference, setConference] = useState("");

   
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.presenter_name = presenterName;
        data.company_name = companyName;
        data.presenter_email = presenterEmail;
        data.title = title;
        data.synopsis = synopsis;
        data.conference = conference
        console.log(data)
        const presentationUrl = `http://localhost:8000${conference}presentations/`;
        

        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        }

        const response = await fetch(presentationUrl, fetchConfig);
        if (response.ok) {
            const newPresentation = await response.json();
            console.log(newPresentation)

            setConference("");
            setPresenterName("");
            setCompanyName("");
            setPresenterEmail("");
            setTitle("");
            setSynopsis("");
            setConference("");

        }

    }

    const handleNameChange = (event) => {
        const value = event.target.value;
        setPresenterName(value);
    };

    const handleEmailChange = (event) => {
        const value = event.target.value;
        setPresenterEmail(value);
    };

    const handleCompanyChange = (event) => {
        const value = event.target.value
        setCompanyName(value);
    };

    const handleTitleChange = (event) => {
        const value = event.target.value;
        setTitle(value);
    };

    const handleSynopsisChange = (event) => {
        const value = event.target.value;
        setSynopsis(value);
    };

    const handleConferenceChange = (event) => {
        const value = event.target.value;
        setConference(value);
    };




const fetchData = async () => {
    const url = "http://localhost:8000/api/conferences/";

    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        setConferences(data.conferences)
    }
}

useEffect(() => {
    fetchData();
}, []);


return (
    <div className="container">
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new presentation</h1>
            <form onSubmit={handleSubmit} id="create-presentation-form">
              <div className="form-floating mb-3">
                <input onChange={handleNameChange} value={presenterName} placeholder="Presenter name" required type="text" name="presenter_name" id="presenter_name" className="form-control"/>
                <label htmlFor="presenter_name">Presenter name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleEmailChange} value={presenterEmail} placeholder="Presenter email" required type="email" name="presenter_email" id="presenter_email" className="form-control"/>
                <label htmlFor="presenter_email">Presenter email</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleCompanyChange} value={companyName} placeholder="Company name" type="text" name="company_name" id="company_name" className="form-control"/>
                <label htmlFor="company_name">Company name</label>
              </div>
              <div className="form-floating mb-3">
                <input onChange={handleTitleChange} value={title} placeholder="Title" required type="text" name="title" id="title" className="form-control"/>
                <label htmlFor="title">Title</label>
              </div>
              <div className="mb-3">
                <label htmlFor="synopsis">Synopsis</label>
                <textarea onChange={handleSynopsisChange} value={synopsis} id="synopsis" rows="3" name="synopsis" className="form-control"></textarea>
              </div>
              <div className="mb-3">
              <select onChange={handleConferenceChange} value={conference} name="conference" id="conference" className="form-select" required>
                    <option value="">Choose a conference</option>
                    {conferences.map(conference => {
                      return (
                        <option key={conference.href} value={conference.href}>{conference.name}</option>
                      )
                    })}
                  </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    </div>



)

}
export default PresentationForm;