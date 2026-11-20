import { useRef, useEffect } from 'react';
import { FaBriefcase, FaCalendarAlt, FaCertificate } from 'react-icons/fa';
import './Experience.css';

const experienceData = [
  {
    id: 1,
    role: 'Infosys Springboard Virtual Intern (Batch 1)',
    company: 'Infosys Limited · Springboard',
    duration: 'June 29, 2026 - August 31, 2026',
    type: 'Intelligent Contract Analysis & Obligation Tracking',
    points: [
      'Completed the prestigious 9-week Infosys Springboard 7.0 Virtual Internship (Batch 1) focused on "Intelligent Contract Analysis and Proactive Obligation Tracking System".',
      'Engineered an AI-powered system utilizing NLP and machine learning techniques to parse complex legal contracts, extract key clauses, and automatically identify binding obligations.',
      'Designed proactive obligation tracking and alert workflows to monitor deadlines, deliverables, and compliance status, significantly reducing manual audit overhead.',
      'Developed responsive full-stack web dashboards utilizing React.js and Python backend architectures, building secure RESTful APIs for real-time document analysis and reporting.',
      'Collaborated within an enterprise Agile framework, adhering to industry best practices in software architecture, code reviews, and Git version control.'
    ],
    color: '#00d4ff',
    badge: 'Completed'
  },
  {
    id: 2,
    role: 'AI for Sustainability Virtual Intern',
    company: '1M1B (AICTE & IBM Certified)',
    duration: 'May 14, 2026 - June 26, 2026',
    type: 'AI / ML Intern',
    points: [
      'Applied advanced Machine Learning, Generative AI, and Retrieval-Augmented Generation (RAG) Frameworks to real-world scenarios, improving AI context retrieval accuracy by 25% within test environments.',
      'Developed a sustainability-focused AI project utilizing IBM Granite Models, managing the entire lifecycle from concept to implementation.',
      'Presented technical findings and project demos to a panel of 5+ industry mentors.'
    ],
    color: '#7c3aed',
    badge: 'Certified'
  }
];

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.scroll-reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
            entry.target.querySelectorAll('.experience__item').forEach((el, i) => {
              setTimeout(() => el.classList.add('experience__item--visible'), i * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience section" ref={sectionRef}>
      <div className="experience__bg-orb" />
      <div className="container">
        <div className="section-header">
          <div className="section-tag scroll-reveal">Career Journey</div>
          <h2 className="section-title scroll-reveal">
            My <span>Experience</span>
          </h2>
          <p className="section-subtitle scroll-reveal">
            Internships and projects where I applied AI, software engineering, and full-stack development skills.
          </p>
        </div>

        <div className="experience__timeline">
          <div className="experience__line" />

          {experienceData.map((item, index) => (
            <div key={item.id} className="experience__item">
              {/* Dot on the timeline */}
              <div
                className="experience__dot"
                style={{
                  '--dot-color': item.color,
                  '--animation-delay': `${index * 0.2}s`
                }}
              >
                <FaBriefcase size={14} />
              </div>

              {/* Card content */}
              <div
                className="experience__card glass-card"
                style={{ '--card-accent': item.color }}
              >
                <div className="experience__header">
                  <div className="experience__title-info">
                    <span className="experience__badge-tag" style={{ background: `${item.color}15`, color: item.color }}>
                      {item.badge}
                    </span>
                    <h3 className="experience__role">{item.role}</h3>
                    <h4 className="experience__company">{item.company}</h4>
                  </div>

                  <div className="experience__meta">
                    <span className="experience__duration">
                      <FaCalendarAlt size={12} /> {item.duration}
                    </span>
                    <span className="experience__type">{item.type}</span>
                  </div>
                </div>

                <div className="experience__body">
                  <ul className="experience__points">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="experience__point">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
