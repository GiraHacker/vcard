import React from "react";

export default function Social({ socials }) {
  return (
    <div className="social-links">
      <ul>
        {socials.map((social) => (
          <li key={`social${social.name}`}>
            <a href={social.link} target="_blank" rel="noreferrer">
              <i className={`fab ${social.icon}`}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
