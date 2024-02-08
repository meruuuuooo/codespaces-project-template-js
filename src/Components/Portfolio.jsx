/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/tudor-baciu-vc3iVL_znJ8-unsplash.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Simple Employee Management System",
    description:
          "A simple employee management system using Java.",
    url: "https://github.com/meruuuuooo/EmployeeManagementSystem",
  },
  {
    title: "Simple Project Management System",
    description:
      "A simple project management system using Java.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "Flirtopia",
    description:
        "A fun and charming Android app to generate flirty messages!",
    url: "https://github.com/meruuuuooo/Flirtopia",
  },
  {
    title: "Beshiefy - Transform and Copy Text with Fun Emoji Characters!",
    description:
      "Beshiefy is a delightful web application that allows you to transform your input text into a creative representation using fun emoji characters. The app also provides a quick and easy way to copy the transformed text to your clipboard, ready to be pasted anywhere you like!",
    url: "https://github.com/meruuuuooo/Beshiefy",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
