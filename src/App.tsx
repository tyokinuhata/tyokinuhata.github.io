import React from 'react';
import portfolio from './portfolio.json';
import icon from './icon.png';
import './App.css';
import { getAge } from './utility';
import type { About, Certification, Certifications, Experiences, Experience, Link, Links, OtherHistories, OtherHistory, Educations, Education } from './portfolio';

function App() {
  const about: About = portfolio.about
  const links: Links = portfolio.links
  const certifications: Certifications = portfolio.certifications
  const educations: Educations = portfolio.educations
  const experiences: Experiences = portfolio.experiences
  const otherHistories: OtherHistories = portfolio.other_histories

  return (
    <div className="Container">
      <h1>{portfolio.title}</h1>
      <img src={icon} alt="icon" width="200" />
      <h2>{about.title}</h2>
      <ul>
        <li>{about.name.icon} {about.name.key}: {about.name.value.hn}({about.name.value.rn.first} {about.name.value.rn.last})</li>
        <li>{about.email.icon} {about.email.key}: <a href={`mailto:${about.email.value}`}>{about.email.value}</a></li>
        <li>{about.location.icon} {about.location.key}: {about.location.value}</li>
        <li>
          <span>{about.birthday.icon} {about.birthday.key}: {about.birthday.value}</span>
          <span> (Age: {getAge(about.birthday.value)})</span>
        </li>
        <li>{about.like.icon} {about.like.key}: {about.like.value.join(' / ')}</li>
        <li>{about.bio.icon} {about.bio.key}: {about.bio.value}</li>
      </ul>
      <h2>{links.title}</h2>
      <ul>
        {links.values.map((link: Link) => {
          return (
            <li key={link.name}>
              <a href={link.url} target="_blank" rel="noreferrer">{link.name}</a>
            </li>
          )
        })}
      </ul>
      <h2>{experiences.title}</h2>
      <ul>
        {experiences.values.map((experience: Experience): React.ReactElement => {
          return (
            <li key={experience.name}>
              <a href={experience.url} target="_blank" rel="noreferrer">{experience.name}</a>
              ({experience.begin}~{experience.end})
              <ul>
                {experience.desc.map((desc: string): React.ReactElement => {
                  return (<li key={desc}>{desc}</li>)
                })}
                <li>{experience.tech.join(" / ")}</li>
              </ul>
            </li>
          )
        })}
      </ul>
      <h2>{educations.title}</h2>
      <ul>
        {educations.values.map((education: Education): React.ReactElement => {
          return (
            <li key={education.name}>
              <a href={education.url} target="_blank" rel="noreferrer">{education.name} {education.dept}</a>
              ({education.begin}~{education.end})
            </li>
          )
        })}
      </ul>
      <h2>{certifications.title}</h2>
      <ul>
        {certifications.values.map((certification: Certification): React.ReactElement => {
          return (
            <li key={certification.name}>{certification.name}({certification.year})</li>
          )
        })}
      </ul>
      <h2>{otherHistories.title}</h2>
      <ul>
        {otherHistories.values.map((history: OtherHistory): React.ReactElement => {
          return (
            <li key={history.name}>
              {history.url && <a href={history.url} target="_blank" rel="noreferrer">{history.name}</a>}
              {!history.url && history.name}
              ({history.begin})
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
