import React, { useState } from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark.css";

const JobDescJavaScript = (props) => {
  return (
    <>
      <Highlight className="JavaScript minHgt425px">
        {
          "import jobRequirement from \"" + props.formData.jobTitle + "\";\n"+
          "function [" + props.formData.company + "](){\n"+
          " try{\n"+
          "  if(Candidate.Match(\"" + props.formData.vcancyFor + "\")){\n"+
          "   console.log(\"Contact Mobile No. : "+props.formData.mobile+"\");\n"+
          "   console.log(\"Contact Email ID : "+props.formData.email+"\");\n"+
          "   console.log(\"Experience : " + props.formData.expFrom + "year(s) -" + props.formData.expTo + "year(s) \");\n"+
          "   console.log(\"Job Description : "+props.formData.jobDesc+"\");\n"+
          "  }\n"+
          "  else{\n"+
          "   ex.RecommendOther();\n"+
          "  }\n"+
          " }\n"+
          " catch(ex){\n"+
          " ex.RecommendOther();\n"+
		      " }\n"+
          "}\n"
        }
      </Highlight>
    </>
  );
};

export default JobDescJavaScript;
