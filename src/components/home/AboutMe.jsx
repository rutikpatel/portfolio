import React from "react";
import axios from "axios";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, link, imgSize, capstone_project , cover_letter, academic_credentials}) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));

  React.useEffect(() => {
    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);

  const handleRequest = async () => {
    const instaLink = "https://www.instagram.com/";
    const instaQuery = "/?__a=1";
    try {
      const response = await axios.get(instaLink + link + instaQuery);
      setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
    } catch (error) {
      setShowPic(false);
      console.error(error.message);
    }
  };

  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0">
      <div className="container container-fluid">
        <div className="row" style={{display:"flex",justifyContent:"space-between"}}>
          <div className={`col-lg-${showPic ? "7" : "12"}`}>
            <h2 className="display-4 mb-5 text-center">{heading}</h2>
            <p className="lead text-center">{message}</p>
            {cover_letter && (
              <p className="lead text-center">
                <a
                  className="btn btn-outline-dark btn-lg"
                  href={capstone_project}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Capstone Project
                </a>&nbsp;
                <a
                  className="btn btn-outline-dark btn-lg"
                  href={cover_letter}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Cover Letter"
                >
                Cover Letter
                </a>&nbsp;
                <a
                  className="btn btn-outline-dark btn-lg"
                  href={academic_credentials}
                  target="_blank"
                  rel="noreferrer"
                  role="button"
                  aria-label="Academic Credentials"
                >
                Academic Credentials
                </a>
              </p>
            )}
          </div>
          <div className="col-auto d-none d-lg-block align-self-center">
            {showPic && (
              <img
                className="border border-secondary rounded-circle"
                src={profilePicUrl}
                alt="profilepicture"
                width={350}
                height={imgSize}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
