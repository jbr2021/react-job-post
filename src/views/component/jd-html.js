import React, { useState } from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark.css";

const JobDescHtml = (props) => {
  //const [formdata, setFormdata] = useState(props.formData);
  return (
    <>
          <Highlight className="html minHgt425px">
            {"<!DOCTYPE html>\n" +
              "<html>\n" +
              " <head>\n" +
              "  <title> " + props.formData.jobTitle + " </title>\n" +
              " </head>\n" +
              " <body>\n" +
              "  <Company> " + props.formData.company + " </Company>\n" +
              "  <ContactMobile> " + props.formData.mobile + " </ContactMobile>\n" +
              "  <ContactEmail> " + props.formData.email + " </ContactEmail>\n" +
              "  <VacancyFor> " + props.formData.vcancyFor + " </VacancyFor>\n" +
              "  <Experience> " + props.formData.expFrom + "year(s) -" + props.formData.expTo + "year(s) </Experience>\n" +
              "  <JobDescription> " + props.formData.jobDesc + " </JobDescription>\n" +
              " </body>\n" +
              "</html>"}
          </Highlight>
    </>
  );
};

export default JobDescHtml;
