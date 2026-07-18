import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Edutech Academy',
  description:
    'Learn about Edutech Academy — our mission, learning philosophy, and the team behind the platform.',
}

export default function LegalPage() {
  return (
    <>
      <section className="legal-section legal-last-block">
        <div className="section-container">
          <div className="legal-content">
            <h1>About Edutech Academy</h1>

            <p>
              Edutech Academy is a modern educational platform dedicated to preparing the next
              generation of technology professionals. Our mission is to bridge the gap between
              education and the real-world IT industry by providing practical, project-based
              learning experiences that develop both technical expertise and problem-solving skills.
            </p>
            <p>
              We believe that learning should extend far beyond theory. Every program is designed
              around hands-on practice, real development workflows, collaboration, and industry
              standards to help students gain confidence and become job-ready software engineers.
            </p>

            <h2>Our Mission</h2>
            <p>
              Our goal is to create an environment where students can learn modern technologies,
              build meaningful projects, collaborate with mentors, and continuously improve their
              skills in an ever-evolving technology landscape.
            </p>

            <h2>What We Offer</h2>
            <ul>
              <li>Comprehensive programming courses</li>
              <li>Project-based learning with real-world applications</li>
              <li>Experienced mentors and personalized guidance</li>
              <li>Modern web development technologies and best practices</li>
              <li>Career preparation and portfolio development</li>
              <li>Continuous learning resources and community support</li>
            </ul>

            <h2>Who This Platform Is For</h2>
            <p>
              Edutech Academy welcomes aspiring developers, university students, career changers,
              and professionals looking to strengthen their technical skills. Whether you&apos;re
              writing your first line of code or expanding your existing knowledge, our learning
              environment is built to support every stage of your journey.
            </p>

            <h2>Our Learning Philosophy</h2>
            <p>
              Technology evolves every day, and education should evolve with it. We focus on
              teaching practical development, clean code principles, modern software engineering
              practices, user experience, teamwork, and continuous improvement rather than
              memorizing concepts without application.
            </p>

            <h2>About This Website</h2>
            <p>
              This website represents the digital experience of Edutech Academy and has been
              designed with a strong focus on usability, accessibility, performance, and responsive
              design. Every section has been carefully crafted to provide a modern browsing
              experience across desktop, tablet, and mobile devices.
            </p>

            <h2>Website Developer</h2>
            <p>
              This website was designed and developed by <strong>Nikoloz Gigiashvili</strong>, a
              Full-Stack Software Engineer passionate about building modern, scalable, and
              high-performance web applications. The project demonstrates attention to detail, clean
              architecture, responsive development, and modern UI/UX implementation.
            </p>
            <ul>
              <li>
                LinkedIn:{' '}
                <a
                  href="https://www.linkedin.com/in/nikoloz-gigiashvili/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/nikoloz-gigiashvili
                </a>
              </li>
              <li>
                GitHub:{' '}
                <a href="https://github.com/NikolozWDev" target="_blank" rel="noopener noreferrer">
                  github.com/NikolozWDev
                </a>
              </li>
            </ul>

            <h2>Our Commitment</h2>
            <p>
              We are committed to delivering high-quality education, maintaining an engaging
              learning environment, and continuously improving both our educational programs and
              digital platform to meet the needs of future technology professionals.
            </p>

            <h2>Contact</h2>
            <p>
              If you would like to learn more about Edutech Academy, our educational programs, or
              the website itself, please feel free to get in touch through our official
              communication channels.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
