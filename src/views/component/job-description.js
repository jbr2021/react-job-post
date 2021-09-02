import React, { useState } from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark.css";
import { useHistory } from "react-router-dom";

const Jobescription = (props) => {
  const [formdata, setFormdata] = useState(props.formData);
  const history = useHistory();
  const goBack = () => {
    history.go(-1);
  }
  return (
    <>
      <div className="card border-primary mb-3">
        <div className="card-header">Job Description</div>
        <div className="card-body">
          <Highlight className="html minHgt425px">
            {"<!DOCTYPE html>\n" +
              "<html>\n" +
              "\t<head>\n" +
              "\t\t<title> " + formdata.jobTitle + " </title>\n" +
              "\t</head>\n" +
              "\t<body>\n" +
              "\t\t<ContactMobile> " + formdata.mobile + " </ContactMobile>\n" +
              "\t\t<ContactEmail> " + formdata.email + " </ContactEmail>\n" +
              "\t\t<VacancyFor> " + formdata.vcancyFor + " </VacancyFor>\n" +
              "\t\t<JobDescription> " + formdata.jobDesc + " </JobDescription>\n" +
              "\t</body>\n" +
              "</html>"}
          </Highlight>
          <button type="button" className="btn btn-info mt-4" onClick={goBack}>
            Back
          </button>
        </div>
      </div>
    </>
  );
};

export default Jobescription;
