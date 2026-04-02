import Logo from "/logo.png";

export const Footer: React.FC = () => {
  const studyLinks = [
    { name: "Grades 8-12", link: "#", color: "var(--color-cyan)" },
    { name: "All Subjects", link: "#", color: "var(--color-orange)" },
    { name: "Past Papers", link: "#", color: "var(--color-lime)" },
    { name: "Practice Quizzes", link: "#", color: "var(--color-magenta)" },
  ];

  const accountLinks = [
    { name: "Log In", link: "#", color: "var(--color-red)" },
    { name: "Sign Up Free", link: "#", color: "var(--color-cyan)" },
    { name: "Dashboard", link: "#", color: "var(--color-pink)" },
  ];

  const footerBottomLinks = [
    { name: "About Us", link: "#" },
    { name: "Contact Us", link: "#" },
    { name: "Terms & Conditions", link: "#" },
    { name: "Privacy Policy", link: "#" },
  ];

  return (
    <footer className="footer">
      <section className="footer-top">
        <div className='footer-logo-container'>
          <img src={Logo} alt="Study Bridge Logo" />
          <p className='text-aside grow-0'>
            StudyBridge provides equal access to curriculum-aligned educational
            materials for every South African student, for free
          </p>
        </div>
        <div className="flex flex-col gap-3 w-full max-w-100">
          <h3>STUDY</h3>
          <hr />
          {studyLinks.map((studyLink, index) => {
            return (
              <button
                key={index}
                className="study-footer-link"
                style={
                  {
                    "--study-link-color": studyLink.color,
                  } as React.CSSProperties
                }
              >
                {studyLink.name}
              </button>
            );
          })}
        </div>
        <div className="flex flex-col gap-3 mb-20 w-full max-w-100">
          <h3>Account</h3>
          <hr />
          {accountLinks.map((accountLink, index) => {
            return (
              <button
                key={index}
                className="account-footer-link"
                style={
                  {
                    "--account-link-color": accountLink.color,
                  } as React.CSSProperties
                }
              >
                {accountLink.name}
              </button>
            );
          })}
        </div>
      </section>
      <hr />
      <section className="footer-bottom">
        <div className="footer-bottom-links">
          {footerBottomLinks.map((footerBottomLink, index) => {
            return (
              <button key={index}>
                {footerBottomLink.name}
              </button>
            );
          })}
        </div>
        <p>
          &copy; {new Date().getFullYear()} StudyBridge. Bridging Students to
          success
        </p>
        <p>All rights reserved</p>
      </section>
    </footer>
  );
};
