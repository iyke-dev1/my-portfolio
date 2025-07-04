import React from "react";
import './Portfolio.css';
import { Mail, Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="container">
      <header className="header">
      <img
  src={`${import.meta.env.BASE_URL}profile.jpg`}
  alt="Iyke Eze"
  width={200}
  height={200}
/>

        <h1>Iyke Eze</h1>
        <p>Flutter Developer</p>
        <div className="social-icons">
          <a href="mailto:ezecletus113@gmail.com"><Mail /></a>
          <a href="https://github.com/iyke-dev1" target="_blank" rel="noreferrer"><Github /></a>
          <a href="https://www.linkedin.com/in/cletus-eze-9881aa263" target="_blank" rel="noreferrer"><Linkedin /></a>
        </div>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          I'm a passionate Flutter developer with experience in building cross-platform mobile applications. I specialize in developing scalable, responsive, and feature-rich apps using Flutter and Dart. I enjoy turning complex problems into elegant solutions with clean and maintainable code.
        </p>
      </section>

      <section>
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Flutter Chat App</h3>
          <p>A real-time messaging app with Firebase, Firestore, push notifications, and media sharing.</p>
          <ul>
            <li>Firebase Authentication</li>
            <li>Real-time chat with Firestore</li>
            <li>Push Notifications (FCM)</li>
          </ul>
          <p className="text-sm">GitHub: <a href="https://github.com/iyke-dev1" target="_blank" rel="noreferrer">View Code</a></p>
        </div>

        <div className="project-card">
          <h3>E-commerce App</h3>
          <p>A full-featured mobile commerce app with cart, checkout, Firebase Auth, and Stripe payments.</p>
          <ul>
            <li>Product listings and cart</li>
            <li>User authentication</li>
            <li>Stripe payment integration</li>
          </ul>
          <p className="text-sm">GitHub: <a href="https://github.com/iyke-dev1" target="_blank" rel="noreferrer">View Code</a></p>
        </div>

        <div className="project-card">
          <h3>Flutter Resume App</h3>
          <p>A beautiful resume-style app made using Flutter, with interactive sections and download capability.</p>
          <ul>
            <li>Professional layout</li>
            <li>Interactive UI with animations</li>
            <li>Downloadable PDF resume</li>
          </ul>
          <p className="text-sm">GitHub: <a href="https://github.com/iyke-dev1" target="_blank" rel="noreferrer">View Code</a></p>
        </div>
      </section>

      <section>
        <h2>Skills & Tools</h2>
        <ul>
          <li>Dart, Flutter</li>
          <li>Firebase, Firestore, Cloud Functions</li>
          <li>State Management (Getx, Provider)</li>
          <li>Stripe API, RESTful APIs</li>
          <li>Git, VS Code, Android Studio</li>
        </ul>
      </section>

      <section>
        <h2>Resume</h2>
        <p>You can download my resume below:</p>
        <a href={`${import.meta.env.BASE_URL}Cletus_Eze_Resume.pdf`} download>
        <button>Download Resume (PDF)</button>
        </a>
      </section>
    </div>
  );
}
