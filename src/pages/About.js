import "./About.css";
const About = () => {
  return (
    <div className="about-page-space">
      <h1 className="about-headline">About Application</h1>
      <p className="about-text">
        This simple web-application was created in 2025 as a final project for
        completing a JavaScript and React course. Its main function is to search
        for books based on their title. To achieve this, it uses the publicly
        available Open Library API. The developer of this application plans to
        expand it in the future with a personalized library, where users will be
        able to save books, rate them, add notes, and more.
      </p>
    </div>
  );
};

export default About;
