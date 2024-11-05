import React from 'react';

function ProjectCard({src, link, alt, title, desc}) {
  return (
    <a href={link} target="_blank">
        <img src={src} alt={alt} className="hover" />
        <h3>{title}</h3>
        <p>{desc}</p>
    </a>
  )
};

export default ProjectCard;