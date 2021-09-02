import React, { useState } from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark.css";

const JobDescJSON = (props) => {
  return (
    <>
      <Highlight className="JSON minHgt425px">
        {
          "[\n"+
          " {\n"+
          (props.formData.company != "" ? "  \"Company\": \""+props.formData.company+"\",\n" : "")+
          (props.formData.jobTitle != "" ? "  \"Job Title\": \""+props.formData.jobTitle+"\",\n" : "")+
          (props.formData.vcancyFor != "" ? "  \"Designation\": \""+props.formData.vcancyFor+"\",\n" : "")+
          (props.formData.mobile != "" ? "  \"Contact Mobile Number\": \""+props.formData.mobile+"\",\n" : "")+
          (props.formData.email != 0 ? "  \"Contact Email ID\": \""+props.formData.email+"\",\n" : "")+
          (props.formData.expFrom > 0 ? "  \"Experience\": \""+props.formData.expFrom + "year(s) - " + props.formData.expTo + "year(s)\",\n" : "")+
          "  \"Description\": {\"Job Description\": \""+ props.formData.jobDesc + "\", \"sensitive\": true}\n"+
          " }\n"+
          "]"
        }
      </Highlight>
    </>
  );
};

export default JobDescJSON;
