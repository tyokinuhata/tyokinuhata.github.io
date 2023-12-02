import React, { ReactElement } from 'react';
import portfolio from './portfolio.json';
import icon from './images/icon.png';
import icon2 from './images/icon2.jpg';
import icon3 from './images/icon3.jpg';
import icon4 from './images/icon4.jpg';
import './App.css';
import { getAge } from './utility';
import type {
  About,
  Link,
  Links,
  Experience,
  Experiences,
  Education,
  Educations,
  Certification,
  Certifications,
  OtherHistory,
  OtherHistories,
  Internship,
  Internships,
} from './portfolio';

export const App = (): ReactElement => {
  const about: About = portfolio.about
  const links: Links = portfolio.links
  const certifications: Certifications = portfolio.certifications
  const educations: Educations = portfolio.educations
  const experiences: Experiences = portfolio.experiences
  const internships: Internships = portfolio.internships
  const otherHistories: OtherHistories = portfolio.other_histories

  oishu()

  return (
    <div className="Container">
      <h1>{portfolio.title}</h1>
      <img src={icon} alt="icon" width="200" />
      <img src={icon2} alt="icon" width="200" />
      <img src={icon3} alt="icon" width="200" />
      <img src={icon4} alt="icon" width="200" />
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
              <a href={link.url} target="_blank" rel="noreferrer noopener">{link.name}</a>
            </li>
          )
        })}
      </ul>
      <h2>{experiences.title}</h2>
      <ul>
        {experiences.values.map((experience: Experience): React.ReactElement => {
          return (
            <li key={experience.name}>
              <a href={experience.url} target="_blank" rel="noreferrer noopener">{experience.name}</a>
              ({experience.begin}~{experience.end ?? "現在"})
              <ul>
                {experience.desc.map((desc: string): React.ReactElement => {
                  return (<li key={desc}>{desc}</li>)
                })}
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
              <a href={education.url} target="_blank" rel="noreferrer noopener">{education.name} {education.dept}</a>
              ({education.begin}~{education.end})
            </li>
          )
        })}
      </ul>
      <h2>{internships.title}</h2>
      <ul>
        {internships.values.map((internship: Internship): React.ReactElement => {
          return (
            <li key={`${internship.name}-${internship.desc}`}>
              <a href={internship.url} target="_blank" rel="noreferrer noopener">{internship.name}</a>
              ({internship.begin})
              <ul>
                {internship.desc.map((desc: string): React.ReactElement => {
                  return (<li key={desc}>{desc}</li>)
                })}
              </ul>
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
              {history.url && <a href={history.url} target="_blank" rel="noreferrer noopener">{history.name}</a>}
              {!history.url && history.name}
              ({history.begin})
            </li>
          )
        })}
      </ul>
    </div>
  );
}

const oishu = (): void => {
  console.log("┌（┌ ˘ ³˘）┐ｵｲｼｭ")
}
