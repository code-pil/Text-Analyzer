import React from "react";

export default function About(props) {
  return (
    <>
      <div className={`container my-3 text-${props.mode === 'dark'?'light':'dark'}`}>
        <h1 align="center">About</h1>
        <p align="center">
          In this project, I have used React, React-Router-Dom, and
          React-Bootstrap.
          <br />
          You can analyze your Text Analyzer CONVERT TO UPPERCASE, convert to lowercase, copy text and, remove extra spaces.
          <br />
          Thank you for using this project.
        </p>
      </div>
    </>
  );
}
