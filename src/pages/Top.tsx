import { FC } from 'react';
import portfolioData from '../data/portfolio.json';
import type { Portfolio } from '../types/portfolio';
import { calculateAge } from '../utils/date';

const portfolio = portfolioData as Portfolio;

const Top: FC = () => {
  return (
    <div>
      <h1>{portfolio.title}</h1>

      {/* About section */}
      <section>
        <h2>{portfolio.about.title}</h2>
        <ul>
          <li>
            {portfolio.about.name.icon} {portfolio.about.name.key}: {portfolio.about.name.value.hn} ({portfolio.about.name.value.rn.first} {portfolio.about.name.value.rn.last})
          </li>
          <li>
            {portfolio.about.email.icon} {portfolio.about.email.key}: {portfolio.about.email.value}
          </li>
          <li>
            {portfolio.about.location.icon} {portfolio.about.location.key}: {portfolio.about.location.value}
          </li>
          <li>
            {portfolio.about.birthday.icon} {portfolio.about.birthday.key}: {portfolio.about.birthday.value} (Age: {calculateAge(portfolio.about.birthday.value)})
          </li>
          <li>
            {portfolio.about.like.icon} {portfolio.about.like.key}: {portfolio.about.like.value.join(', ')}
          </li>
          <li>
            {portfolio.about.motto.icon} {portfolio.about.motto.key}: <a href={portfolio.about.motto.link} target="_blank" rel="noopener noreferrer">{portfolio.about.motto.value}</a>
          </li>
        </ul>
      </section>

      {/* Links section */}
      <section>
        <h2>{portfolio.links.title}</h2>
        <ul>
          {portfolio.links.values.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Experiences section */}
      <section>
        <h2>{portfolio.experiences.title}</h2>
        <ul>
          {portfolio.experiences.values.map((experience, index) => (
            <li key={index}>
              <a href={experience.url} target="_blank" rel="noopener noreferrer">
                {experience.name}
              </a>
              ({experience.begin} - {experience.end || 'Present'})
              <ul>
                {experience.desc.map((description, descIndex) => (
                  <li key={descIndex}>{description}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* Educations section */}
      <section>
        <h2>{portfolio.educations.title}</h2>
        <ul>
          {portfolio.educations.values.map((education, index) => (
            <li key={index}>
              <a href={education.url} target="_blank" rel="noopener noreferrer">
                {education.name}
              </a>
              ({education.begin} - {education.end || 'Present'})
              <ul>
                <li>{education.dept}</li>
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* Internships section */}
      <section>
        <h2>{portfolio.internships.title}</h2>
        <ul>
          {portfolio.internships.values.map((internship, index) => (
            <li key={index}>
              <a href={internship.url} target="_blank" rel="noopener noreferrer">
                {internship.name}
              </a>
              ({internship.begin})
              <ul>
                {internship.desc.map((description, descIndex) => (
                  <li key={descIndex}>{description}</li>
                ))}
                <li>Technologies: {internship.tech.join(', ')}</li>
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* Certifications section */}
      <section>
        <h2>{portfolio.certifications.title}</h2>
        <ul>
          {portfolio.certifications.values.map((certification, index) => (
            <li key={index}>
              {certification.name} ({certification.year})
            </li>
          ))}
        </ul>
      </section>

      {/* Other Histories section */}
      <section>
        <h2>{portfolio.other_histories.title}</h2>
        <ul>
          {portfolio.other_histories.values.map((history, index) => (
            <li key={index}>
              {history.url ? (
                <a href={history.url} target="_blank" rel="noopener noreferrer">
                  {history.name}
                </a>
              ) : (
                history.name
              )}
              ({history.begin})
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Top;
