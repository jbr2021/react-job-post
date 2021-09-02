import React, { useState } from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark.css";

const JobDescJava = (props) => {
  return (
    <>
          <Highlight className="java minHgt425px">
            {              
              (props.formData.jobTitle != "" ? "import [" + props.formData.jobTitle + "];\n" : "") +
              "class [" + props.formData.company + "]{\n"+
              "public static void main(String args[]){\n"+
              "  try{\n"+
              "   if(Candidate.requirement().match(\"" + props.formData.vcancyFor + "\")){\n"+
              (props.formData.mobile != "" ? "    System.out.println(\"Contact Mobile No. : "+props.formData.mobile+"\");\n" : "")+
              (props.formData.email != "" ? "    System.out.println(\"Contact Email ID : "+props.formData.email+"\");\n" : "")+
              (props.formData.expFrom != "" ? "    System.out.println(\"Experience : "+props.formData.expFrom + "year(s) -" + props.formData.expTo+"year(s)\");\n" : "")+
              (props.formData.jobDesc != "" ? "    System.out.println(\"Job Description : "+props.formData.jobDesc+"\");\n" : "")+
			        "   }\n"+
              "  }\n"+
              "  catch(ProfileNotMatchException ex){\n"+
              "  ex.RecommendOther();\n"+
		          "  }\n"+
	            " }\n"+
              "}\n"
            }
          </Highlight>
    </>
  );
};

export default JobDescJava;
