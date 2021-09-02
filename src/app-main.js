import React, { useState } from "react";
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';

//import "./css/cosmo/bootstrap.min.css";
import "./css/custom.css";

import AppMainHeader from "./views/shared/app-main-header";
import JobDescHtml from "./views/component/jd-html";
import JobDescJava from "./views/component/jd-java";
import JobDescJavaScript from "./views/component/jd-js";
import JobDescJSON from "./views/component/jd-json";


const themes = {
  cosmo: '/css/cosmo/bootstrap.min.css',
  cerulean: '/css/cerulean/bootstrap.min.css',
  cyborg: '/css/cyborg/bootstrap.min.css',
  vapor: '/css/vapor/bootstrap.min.css',
  journal: '/css/journal/bootstrap.min.css',
  lumen: '/css/lumen/bootstrap.min.css',
  darkly: '/css/darkly/bootstrap.min.css',
  litera: '/css/litera/bootstrap.min.css',
  morph: '/css/morph/bootstrap.min.css',
  quartz: '/css/quartz/bootstrap.min.css',
  slate: '/css/slate/bootstrap.min.css',
  spacelab: '/css/spacelab/bootstrap.min.css',
  superhero: '/css/superhero/bootstrap.min.css',
  united: '/css/united/bootstrap.min.css'
};
function AppMain() {
  const[langOption, setLangOption] = useState(false);
  function funSetFormData(){
      setLangOption(!langOption);
  }
  const [formData, setFormdata] = useState({
    company : "",
    jobTitle: "",
    email: "",
    mobile: "",
    vcancyFor: "",
    expFrom: 0,
    expTo: 1,
    jobDesc: "",
  });
  
  const[jobDescPg, setJobDescPg] = useState('json');
  const[jobDescDrpdwn, setJobDescDrpdwn] = useState('Json Format');//Select Language
  const setJobDescPage = (val, ttl) =>{
    setJobDescPg(val);
    setJobDescDrpdwn(ttl);
  }

  const[cssName, setCssName] = useState('cosmo');
  const setTheme = (styleName) => {
    setCssName(styleName);
  }
  

  return (
    <ThemeSwitcherProvider defaultTheme={cssName} insertionPoint={document.getElementById('inject-styles-here')} themeMap={themes}>
      <AppMainHeader handlerSetTheme={setTheme} />
      <div className="container pad-topBottom-90px">
        <div className="row">
          <div className="col-lg-5">
            <div className="card mb-3">
              <div className="card-header minHgt59px">
                  <div className="row">
                      <div className="col-sm-7">
                          Enter Job Description
                      </div>
                      <div className="col-sm-5">
                        <ul className="nav nav-pills">
                            <li className="nav-item dropdown" onClick={funSetFormData}>
                                <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" onClick={funSetFormData}>{jobDescDrpdwn}</span>
                                <div className={langOption ? "dropdown-menu show" : "dropdown-menu" }>
                                    <span className="dropdown-item" onClick={() => setJobDescPage('html','HTML Language')}>HTML Language</span>
                                    <span className="dropdown-item" onClick={() => setJobDescPage('java','JAVA Language')}>JAVA Language</span>
                                    <span className="dropdown-item" onClick={() => setJobDescPage('js','JavaScript Language')}>JavaScript Language</span>
                                    <span className="dropdown-item" onClick={() => setJobDescPage('json','JSON Format')}>JSON Format</span>
                                    {/* <span className="dropdown-item" onClick={() => setJobDescPage('csharp', 'C# Language')}>C# Language</span>
                                    <span className="dropdown-item" onClick={() => setJobDescPage('c','C Language')}>C Language</span>
                                    <span className="dropdown-item" onClick={() => setJobDescPage('node', 'Node Js Language')}>Node Js Language</span> */}
                                </div>
                            </li>
                        </ul>
                      </div>
                  </div>
              </div>
              <div className="card-body minHgt478px">
                  <fieldset>
                    <div className="form-group row mb-2">
                      <label className="col-sm-4 col-form-label">Company Name</label>
                      <div className="col-sm-8">
                        <input type="text" className="form-control" placeholder="Enter Company name" value={formData.company}
                          onChange={(e) => setFormdata({ ...formData, company: e.target.value, })} />
                      </div>
                    </div>
                    <div className="form-group row mb-2">
                      <label className="col-sm-4 col-form-label">Job Title</label>
                      <div className="col-sm-8">
                        <input type="text" className="form-control" placeholder="Enter Job Title" value={formData.jobTitle}
                          onChange={(e) => setFormdata({ ...formData, jobTitle: e.target.value, })} />
                      </div>
                    </div>
                    <div className="form-group row mb-2">
                      <label className="col-sm-4 col-form-label">Designation</label>
                      <div className="col-sm-8">
                        <input type="text" className="form-control" placeholder="For Eg. Java Developer, HR, Sales Manager etc.." value={formData.vcancyFor}
                          onChange={(e) => setFormdata({ ...formData, vcancyFor: e.target.value }) } />                        
                      </div>
                    </div>
                    <div className="form-group row mb-2">
                      <label className="col-sm-4 col-form-label">Email ID</label>
                      <div className="col-sm-8">
                        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter Email ID" value={formData.email}
                          onChange={(e) => setFormdata({ ...formData, email: e.target.value })} />
                      </div>
                    </div>
                    <div className="form-group row mb-2">
                      <label className="col-sm-4 col-form-label">Mobile Number</label>
                      <div className="col-sm-8">
                        <input type="number" className="form-control" placeholder="Enter Mobile Number" value={formData.mobile}
                          onChange={(e) => setFormdata({ ...formData, mobile: e.target.value }) } />
                      </div>
                    </div>
                    <div className="form-group row mb-2">
                      <label className="col-sm-4 col-form-label">Experience</label>
                      <div className="col-sm-4">
                        <input type="number" className="form-control" placeholder="Enter Experience From in year(s)" value={formData.expFrom}
                          onChange={(e) => setFormdata({ ...formData, expFrom: e.target.value }) } />                        
                      </div>
                      <div className="col-sm-4">
                        <input type="number" className="form-control" placeholder="Enter Experience To in year(s)" value={formData.expTo}
                          onChange={(e) => setFormdata({ ...formData, expTo: e.target.value }) } />                        
                      </div>
                    </div>
                    <div className="form-group mb-2">
                      <label className="col-form-label">Job Description</label>
                      <textarea className="form-control" rows="3" defaultValue={formData.jobDesc}
                        onChange={(e) => setFormdata({ ...formData, jobDesc: e.target.value }) }></textarea>
                    </div>                    
                  </fieldset>
                
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="card mb-3">
                <div className="card-header minHgt59px">
                  Job Description in {jobDescDrpdwn == 'Select Language' ? '' : jobDescDrpdwn}
                </div>
                {/* <div className="card-header minHgt59px">
                  <div className="row">
                      <div className="col-sm-3">
                        Job Description in 
                      </div>
                      <div className="col-sm-9">
                        <ul className="nav nav-pills">
                            <li className="nav-item dropdown" onClick={funSetFormData}>
                                <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" onClick={funSetFormData}>{jobDescDrpdwn}</span>
                                <div className={langOption ? "dropdown-menu show" : "dropdown-menu" }>
                                    <span className="dropdown-item" onClick={() => setJobDescPage('html','HTML Language')}>HTML Language</span>
                                    <span className="dropdown-item" onClick={() => setJobDescPage('java','JAVA Language')}>JAVA Language</span>
                                    <span className="dropdown-item" onClick={() => setJobDescPage('js','JavaScript Language')}>JavaScript Language</span>
                                    <span className="dropdown-item" onClick={() => setJobDescPage('json','JSON Format')}>JSON Format</span>
                                </div>
                            </li>
                        </ul>
                      </div>
                    </div>
                </div> */}
                <div className="card-body minHgt478px">
                    { jobDescPg == "java" ? <JobDescJava formData={formData}/> : jobDescPg == "js" ? <JobDescJavaScript formData={formData}/> : jobDescPg == "html" ? <JobDescHtml formData={formData}/> : <JobDescJSON formData={formData}/> }
                </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer id="footer" className="navbar-expand-lg fixed-bottom navbar-dark bg-primary pt-3 pb-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
          <ul className="navbar-nav me-auto">
              <li className="nav-item"><p>Made by <span>Anonymous</span>.</p></li>
              <li className="nav-item ps-4"><p>Code released under the <span >MIT License</span>.</p></li>
            </ul>
          </div>
        </div>
        </div>
      </footer>
    </ThemeSwitcherProvider>
  );
}

export default AppMain;
