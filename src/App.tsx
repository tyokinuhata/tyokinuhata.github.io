import React from 'react';
import portfolio from './portfolio.json';
import icon from './icon.png';
import './App.css';
import type { About, Certification, Certifications, JobHistories, JobHistory, Link, Links, Skills, StudyHistories, StudyHistory } from './portfolio';

function App() {
  const about: About = portfolio.about
  const links: Links = portfolio.links
  const certifications: Certifications = portfolio.certifications
  const studyHistories: StudyHistories = portfolio.study_histories
  const jobHistories: JobHistories = portfolio.job_histories
  const skills: Skills = portfolio.skills

  return (
    <div className="Container">
      <img src={icon} alt="icon" width="200" />
      <h1>About</h1>
      <ul>
        <li>🤓 Name: {about.name.hn}({about.name.rn.first} {about.name.rn.last})</li>
        <li>✉️ Email: <a href={`mailto:${about.email}`}>{about.email}</a></li>
        <li>📍 Location: {about.location}</li>
        <li>🎂 Birthday: {about.birthday}</li>
        <li>💖 Like: {about.like.join(' / ')}</li>
      </ul>
      <h1>Links</h1>
      <ul>
        {links.map((link: Link) => {
          return (
            <li>
              <a href={link.url} target="_blank" rel='noreferrer'>{link.name}</a>
            </li>
          )
        })}
      </ul>
      <h1>Certifications</h1>
      <ul>
        {certifications.map((certification: Certification) => {
          return (
            <li>{certification.name}({certification.year})</li>
          )
        })}
      </ul>
      <h1>Study Histories</h1>
      <ul>
        {studyHistories.map((history: StudyHistory) => {
          return (
            <li>{history.name} {history.dept}({history.begin}~{history.end})</li>
          )
        })}
      </ul>
      <h1>Job Histories</h1>
      <ul>
        {jobHistories.map((history: JobHistory) => {
          return (
            <li>{history.name}({history.begin}~{history.end})</li>
          )
        })}
      </ul>
      <h1>Skills</h1>
      <ul>
        <li>{skills.join(' / ')}</li>
      </ul>
    </div>
  );
}

export default App;
