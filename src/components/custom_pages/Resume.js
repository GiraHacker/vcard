import React from "react";
import moment from 'moment';
import 'moment/locale/pt-br';
import ColorText from "../ColorText";
import { removeAllCaracteresSpecial } from "../helpers/utils.js";


export default function Resume({ page }) {
  moment.locale('pt-br');
  const { education, experience, skillB, skillF, knowledges, certificates } =
    page.content;

  const getSkillPercentage = (value) => `${value}%`;

  return (
    <section
      data-id={`${removeAllCaracteresSpecial(page.menu).toLowerCase()}`}
      className="animated-section"
    >
      <div className="page-title">
        <h2>{page.menu}</h2>
      </div>

      <div className="section-content">
        <div className="row">
          <div className="col-xs-12 col-sm-7">
            <div className="block-title">
              <h3>
                {" "}
                <ColorText text={education.title} />
              </h3>
            </div>

            <div className="timeline timeline-second-style clearfix">
              {education.schools.map((school, index) => (
                <div key={`school-${index}`} className="timeline-item clearfix">
                  <div className="left-part">
                    <h5 className="item-period">{school.year}</h5>
                    <span className="item-company">{school.name}</span>
                  </div>
                  <div className="divider"></div>
                  <div className="right-part">
                    <h4 className="item-title">{school.course}</h4>
                    <p>{school.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="white-space-50"></div>

            <div className="block-title">
              <h3>
                <ColorText text={experience.title} />
              </h3>
            </div>

            <div className="timeline timeline-second-style clearfix">
              {experience.list.map((exp, index) => (
                <div
                  key={`experience-${index}`}
                  className="timeline-item clearfix"
                >
                  <div className="left-part">
                    <h5 className="item-period">{`${exp.from} - ${
                      exp.to ? exp.to : "current"
                    }`}</h5>
                    <span className="item-company">{exp.company}</span>
                  </div>
                  <div className="divider"></div>
                  <div className="right-part">
                    <h4 className="item-title">{exp.position}</h4>
                    <p>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-xs-12 col-sm-5">
            <div className="block-title">
              <h3>
                <ColorText text={skillB.title} />
              </h3>
            </div>
            <div className="skills-info skills-second-style">
              {skillB.list.map((skill, index) => (
                <div key={index}>
                  <div className="skill clearfix">
                    <h4>{skill.name}</h4>
                    <div className="skill-value">
                      {getSkillPercentage(skill.value)}
                    </div>
                  </div>
                  <div className={`skill-container`}>
                    <div
                      className="skill-percentage"
                      style={{ width: getSkillPercentage(skill.value) }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="white-space-10"></div>

            <div className="block-title">
              <h3>
                <ColorText text={skillF.title} />
              </h3>
            </div>

            <div className="skills-info skills-second-style">
              {skillF.list.map((skill, index) => (
                <div key={index}>
                  <div className="skill clearfix">
                    <h4>{skill.name}</h4>
                    <div className="skill-value">
                      {getSkillPercentage(skill.value)}
                    </div>
                  </div>
                  <div className={`skill-container`}>
                    <div
                      className="skill-percentage"
                      style={{ width: getSkillPercentage(skill.value) }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="white-space-10"></div>

            <div className="block-title">
              <ColorText text={knowledges.title} />
            </div>

            <ul className="knowledges">
              {knowledges.list.map((know, index) => (
                <li key={index}>{know}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="white-space-50"></div>

        <div className="row">
          <div className="col-xs-12 col-sm-12">
            <div className="block-title">
              <h3>
                {" "}
                <ColorText text={certificates.title} />{" "}
              </h3>
            </div>
          </div>
        </div>

        <div className="row">
          {certificates.list.map((certificate, index) => (
            <div key={index} className="col-xs-12 col-sm-6">
              <div className="certificate-item clearfix">
                <div className="certi-logo">
                  <img src="img/clients/client-1.png" alt="logo" />
                </div>
                <div className="certi-content">
                  <div className="certi-title">
                    <h4>{certificate.course}</h4>
                  </div>
                  <div className="certi-id">
                    <span>{certificate.member}</span>
                  </div>
                  <div className="certi-date">
                    <span>{moment(certificate.date, 'DD/MM/YYYY').format('DD MMMM YYYY')}</span>
                  </div>
                  <div className="certi-company">
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
