import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => (
  <div className="page">
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="display-1 text-dark-grey d-none d-lg-block">Hello <img src="/assets/img/react-icon.svg" alt="React Logo" width="168" height="119" /><span className="text-react-blue">React</span></h1>
          <h1 className="display-1 text-dark-grey d-none d-md-block d-lg-none">Hello<br /> <img src="/assets/img/react-icon.svg" alt="React Logo" width="168" height="119" /><span className="text-react-blue">React</span></h1>
          <h1 className="display-3 text-dark-grey d-none d-sm-block d-md-none">Hello<br /> <img src="/assets/img/react-icon.svg" alt="React Logo" width="84" height="60" /><span className="text-react-blue">React</span></h1>
          <h1 className="display-4 text-dark-grey d-block d-sm-none">Hello<br /> <img src="/assets/img/react-icon.svg" alt="React Logo" width="84" height="60" /><span className="text-react-blue">React</span></h1>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <p className="lead">
            Welcome to the <span className="text-blue">LEAN</span><strong>STACKS</strong> React starter project.
            This project provides a template to kickstart React single-page applications
            utilizing a curated <Link to="/stacks">Technology Stack</Link> for optimal testability, maintainability,
            and operability.
        </p>
        </div>
      </div>
    </div>
  </div>
);

export default LandingPage;
