import type { FC } from "react";
import portfolioData from "../data/portfolio.json";
import type { Portfolio } from "../types/portfolio";
import { calculateAge } from "../utils/date";

// Import images with vite-imagetools transformations
import iconOriginal from "../assets/icon.png";
import iconWebp from "../assets/icon.png?format=webp";
import iconAvif from "../assets/icon.png?format=avif";

import icon2Original from "../assets/icon2.jpg";
import icon2Webp from "../assets/icon2.jpg?format=webp";
import icon2Avif from "../assets/icon2.jpg?format=avif";

import icon3Original from "../assets/icon3.jpg";
import icon3Webp from "../assets/icon3.jpg?format=webp";
import icon3Avif from "../assets/icon3.jpg?format=avif";

import icon4Original from "../assets/icon4.jpg";
import icon4Webp from "../assets/icon4.jpg?format=webp";
import icon4Avif from "../assets/icon4.jpg?format=avif";
import "./Top.css";

const portfolio = portfolioData as Portfolio;

const Top: FC = () => {
  return (
    <div className="top-container">
      <h1>{portfolio.title}</h1>

      {/* Icons section */}
      <div className="icon-container">
        {/* Icon 1 */}
        <picture>
          <source srcSet={iconAvif} type="image/avif" />
          <source srcSet={iconWebp} type="image/webp" />
          <img src={iconOriginal} alt="Icon" className="icon" width="200" height="200" />
        </picture>

        {/* Icon 2 */}
        <picture>
          <source srcSet={icon2Avif} type="image/avif" />
          <source srcSet={icon2Webp} type="image/webp" />
          <img src={icon2Original} alt="Icon 2" className="icon" width="200" height="200" />
        </picture>

        {/* Icon 3 */}
        <picture>
          <source srcSet={icon3Avif} type="image/avif" />
          <source srcSet={icon3Webp} type="image/webp" />
          <img src={icon3Original} alt="Icon 3" className="icon" width="200" height="200" />
        </picture>

        {/* Icon 4 */}
        <picture>
          <source srcSet={icon4Avif} type="image/avif" />
          <source srcSet={icon4Webp} type="image/webp" />
          <img src={icon4Original} alt="Icon 4" className="icon" width="200" height="200" />
        </picture>
      </div>

      {/* About section */}
      <section>
        <h2>{portfolio.about.title}</h2>
        <ul>
          <li>
            {portfolio.about.name.icon} {portfolio.about.name.key}: {portfolio.about.name.value.hn}{" "}
            ({portfolio.about.name.value.rn.first} {portfolio.about.name.value.rn.last})
          </li>
          <li>
            {portfolio.about.email.icon} {portfolio.about.email.key}:{" "}
            <a href={`mailto:${portfolio.about.email.value}`}>{portfolio.about.email.value}</a>
          </li>
          <li>
            {portfolio.about.location.icon} {portfolio.about.location.key}:{" "}
            {portfolio.about.location.value}
          </li>
          <li>
            {portfolio.about.birthday.icon} {portfolio.about.birthday.key}:{" "}
            {portfolio.about.birthday.value} (Age: {calculateAge(portfolio.about.birthday.value)})
          </li>
          <li>
            {portfolio.about.like.icon} {portfolio.about.like.key}:{" "}
            {portfolio.about.like.value.join(", ")}
          </li>
          <li>
            {portfolio.about.motto.icon} {portfolio.about.motto.key}:{" "}
            <a href={portfolio.about.motto.link} target="_blank" rel="noopener noreferrer">
              {portfolio.about.motto.value}
            </a>
          </li>
        </ul>
      </section>

      {/* Links section */}
      <section>
        <h2>{portfolio.links.title}</h2>
        <ul>
          {portfolio.links.values.map(link => (
            <li key={link.name}>
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
          {portfolio.experiences.values.map(experience => (
            <li key={experience.name}>
              <a href={experience.url} target="_blank" rel="noopener noreferrer">
                {experience.name}
              </a>
              ({experience.begin} - {experience.end || "Present"})
              <ul>
                {experience.desc.map(description => (
                  <li key={description}>{description}</li>
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
          {portfolio.educations.values.map(education => (
            <li key={education.name}>
              <a href={education.url} target="_blank" rel="noopener noreferrer">
                {education.name}
              </a>
              ({education.begin} - {education.end || "Present"})
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
          {portfolio.internships.values.map(internship => (
            <li key={internship.name}>
              <a href={internship.url} target="_blank" rel="noopener noreferrer">
                {internship.name}
              </a>
              ({internship.begin})
              <ul>
                {internship.desc.map(description => (
                  <li key={description}>{description}</li>
                ))}
                <li>Technologies: {internship.tech.join(", ")}</li>
              </ul>
            </li>
          ))}
        </ul>
      </section>

      {/* Certifications section */}
      <section>
        <h2>{portfolio.certifications.title}</h2>
        <ul>
          {portfolio.certifications.values.map(certification => (
            <li key={certification.name}>
              {certification.name} ({certification.year})
            </li>
          ))}
        </ul>
      </section>

      {/* Other Histories section */}
      <section>
        <h2>{portfolio.otherHistories.title}</h2>
        <ul>
          {portfolio.otherHistories.values.map(history => (
            <li key={history.name}>
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
