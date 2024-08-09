import React from "react";

export default function Resume() {
  return (
    <>
      <div className="resume-container ">
        <h1 style={{ fontWeight: "600", fontFamily: "TimesNewRoman" }}>
          Resume
        </h1>
        <div className="experience-container">
          <h2>Experience</h2>
          <button
            type="button"
            className="btn btn-primary"
            style={{ borderRadius: "20px" }}
          >
            Resume
          </button>
        </div>
        <div className="experience-box">
          <h4 style={{ color: "rgb(174, 110, 234)" }}>
            1st Aug, 2024 - Present
          </h4>
          <p>WEB DEVELOPMENT INTERNSHIP</p>

          <p>Skillcraft Technology</p>
          <p>Remote</p>
          <p>
            In my role as a Web Development Intern at SkillCraft Technology, I
            handle diverse tasks like feature implementation and optimization. I
            enjoy the hands-on experience and collaborative environment, which
            are greatly enhancing my web development skills.
          </p>
        </div>
        <div className="experience-box">
          <h4 style={{ color: "rgb(174, 110, 234)" }}>
            1st July, 2024 - 1st Aug, 2024
          </h4>
          <p>FRONT-END DEVELOPMENT INTERNSHIP</p>

          <p>IBM SkillsBuild</p>
          <p>Remote</p>
          <p>
            I developed a responsive website based on a provided theme using
            HTML, CSS, JavaScript, and ReactJS. I also contributed to creating
            the design prototype, working with my team to ensure a seamless user
            experience and high-quality design implementation.
          </p>
        </div>

        <h2
          className="experience-container my-4"
          style={{ fontFamily: "TimesNewRoman", fontWeight: "600" }}
        >
          Education
        </h2>
        <div className="experience-box">
          <h4
            style={{
              color: "rgb(174, 110, 234)",
              justifyContent: "flex-start",
            }}
          >
            2020-2021
          </h4>
          <p>
            ST. MARYS ACADEMY -<i>Saharanpur, Uttar Pradesh</i>
          </p>

          <p>Intermediate School</p>
          <p>
            <i>
              (Major in Physics, Chemistry, and Mathematics, Percentage: 93.6%)
            </i>
          </p>
        </div>
        <div className="experience-box">
          <h4
            style={{
              color: "rgb(174, 110, 234)",
              justifyContent: "flex-start",
            }}
          >
            2021-2025
          </h4>
          <p>
            Ajay Kumar Garg Engineering College -<i>Ghaziabad, Uttar Pradesh</i>
          </p>

          <p>Bachelor of Technology </p>
          <p>
            <i>(Computer Science & Engineering, SGPA: 7.9)</i>
          </p>
        </div>
        <div className="experience-box">
          <h4
            style={{
              color: "rgb(174, 110, 234)",
              justifyContent: "flex-start",
            }}
          >
            ADDITIONAL SKILLS
          </h4>

          <ul>
            <li>
              <b>Technical Skills:</b> C/C++, HTML, CSS, JavaScript, React JS,
              Python, Bootstrap
            </li>
            <li>
              <b> Web Development Tools:</b> VS Code, PyCharm, Git, GitHub,
              Canva, Figma, AI
            </li>
            <li>
              {" "}
              <b>Cloud/Databases:</b> Relational Database (MySQL)
            </li>
            <li>
              <b> Relevant Coursework:</b> Data Structures & Algorithms,
              Operating System, Object Oriented Programming Database Management
              System
            </li>
            <li>
              <b>Soft Skills:</b> Collaborative contributor, Leadership, Problem
              – Solver, Adaptability, Presentation-skills
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
