import React from "react";

import Bar from "./Bar";
import {tools,languages} from '../data/resume_data'


const Resume = () => {
  return (
    <div className="container resume">
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Education</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Computer Science Enginnering</h5>
            <p className="resume-card__name">
              Lovely Professional University(2021)
            </p>
            {/* <p className="resume-card__details">
              I did my B.tech in Computer Science & Engineering
              from Lovely professional University
            </p> */}
          </div>
        </div>
        {/* <div className="col-lg-6 resume-card">
          <h4 className="resume-card__heading">Experience</h4>
          <div className="resume-card__body">
            <h5 className="resume-card__title">Intern</h5>
            <p className="resume-card__name">TCS (2020)</p>
            <p className="resume-card__details">
              I work as a intern in TCS and also completed some projects on
              testing
            </p>
          </div>
        </div> */}
      </div>

      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="reume-language__heading">Language and Framework</h5>
          <div className="resume-language__body mt-3">
            {languages.map((language) => (
              <Bar value={language} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="reume-language__heading">Tools and Softwares</h5>
          <div className="resume-language__body mt-3">
            {tools.map((tool) => (
              <Bar value={tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
