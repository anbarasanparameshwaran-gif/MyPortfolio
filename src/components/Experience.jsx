import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCalendarAlt, FaBuilding, FaTasks } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext.jsx'

const experiences = [
    {
        title: 'MERN Stack Intern',
        company: 'Tech Solutions Pvt. Ltd.',
        duration: 'Jun 2026 – Present',
        type: 'Full-time',
        location: 'Coimbatore, India',
        description: [
            'Learning and applying React, Node.js, Express.js, and MongoDB to develop full-stack web applications',
            'Assisting in the development and testing of RESTful APIs under the guidance of senior developers',
            'Contributing to bug fixes, feature implementation, and application performance improvements',
            'Collaborating with the development and UI/UX teams to build responsive and user-friendly web interfaces',
            'Participating in code reviews, debugging sessions, and Agile team meetings while following software development best practices',
        ],
    },
    {
        title: 'Php Developer Intern & Work',
        company: 'Carifer Technologies Pvt Ltd.',
        duration: 'Mar 2024 – May 2025',
        type: 'Full-time',
        location: 'Erode, India',
        description: [
            'Developing and maintaining web applications using PHP, Laravel, MySQL, HTML, CSS, JavaScript, and Bootstrap under the guidance of senior developers',
            'Designing, developing, and testing RESTful APIs for seamless communication between frontend and backend systems',
            'Assisting in DevOps activities, including application deployment, Git version control, and server configuration',
            'Collaborating with cross-functional teams to implement new features, debug issues, and optimize application performance',
            'Gaining hands-on experience with software development best practices, database management, API integration, and Agile development methodologies',
        ],
    },
]

function TimelineItem({ exp, index, theme }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })
    const isLeft = index % 2 === 0

    return (
        <motion.div
            ref={ref}
            className={`row mb-5 ${isLeft ? '' : 'flex-row-reverse'}`}
            initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -100 : 100 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
        >
            <div className="col-lg-6 d-flex align-items-center">
                <div
                    className="w-100 p-4 rounded-4"
                    style={{
                        background: theme === 'dark'
                            ? 'rgba(30, 41, 59, 0.8)'
                            : 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(10px)',
                        border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                        boxShadow: theme === 'dark'
                            ? '0 10px 40px rgba(0,0,0,0.3)'
                            : '0 10px 40px rgba(0,0,0,0.08)',
                    }}
                >
                    <div className="d-flex align-items-center gap-2 mb-2">
                        <span
                            className="badge rounded-pill px-3 py-1"
                            style={{
                                background: theme === 'dark' ? 'rgba(14, 165, 233, 0.2)' : 'rgba(30, 58, 95, 0.1)',
                                color: theme === 'dark' ? '#0ea5e9' : '#1e3a5f',
                                fontSize: '0.75rem',
                            }}
                        >
                            {exp.type}
                        </span>
                    </div>

                    <h4 className="fw-bold mb-2" style={{ color: theme === 'dark' ? '#f8fafc' : '#1e293b' }}>
                        {exp.title}
                    </h4>

                    <div className="d-flex align-items-center gap-2 mb-2">
                        <FaBuilding style={{ color: theme === 'dark' ? '#0ea5e9' : '#1e3a5f' }} />
                        <span style={{ color: theme === 'dark' ? '#e2e8f0' : '#475569', fontWeight: 500 }}>
                            {exp.company}
                        </span>
                    </div>

                    <div className="d-flex align-items-center gap-2 mb-3">
                        <FaCalendarAlt style={{ color: theme === 'dark' ? '#0ea5e9' : '#1e3a5f' }} />
                        <span style={{ color: theme === 'dark' ? '#94a3b8' : '#64748b' }}>
                            {exp.duration} | {exp.location}
                        </span>
                    </div>

                    <div className="d-flex align-items-start gap-2">
                        <FaTasks style={{ color: theme === 'dark' ? '#0ea5e9' : '#1e3a5f', marginTop: '3px' }} />
                        <ul className="list-unstyled mb-0">
                            {exp.description.map((item, i) => (
                                <li key={i} className="mb-1" style={{ color: theme === 'dark' ? '#94a3b8' : '#64748b', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center position-relative">
                <div
                    className="position-absolute rounded-circle"
                    style={{
                        width: '20px',
                        height: '20px',
                        background: theme === 'dark' ? '#0ea5e9' : '#1e3a5f',
                        border: `4px solid ${theme === 'dark' ? '#0f172a' : '#f8fafc'}`,
                        zIndex: 2,
                    }}
                />
                <div
                    className="position-absolute"
                    style={{
                        width: '2px',
                        height: '100%',
                        background: theme === 'dark' ? 'rgba(14, 165, 233, 0.3)' : 'rgba(30, 58, 95, 0.2)',
                        top: index === 0 ? '50%' : '0',
                        bottom: index === experiences.length - 1 ? '50%' : '0',
                    }}
                />
            </div>
        </motion.div>
    )
}

function Experience() {
    const { theme } = useTheme()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section
            id="experience"
            className="position-relative py-5"
            style={{
                background: theme === 'dark'
                    ? 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)'
                    : 'linear-gradient(180deg, #e2e8f0 0%, #f8fafc 100%)',
            }}
        >
            <div className="container py-5">
                <motion.div
                    ref={ref}
                    className="text-center mb-5"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="fw-bold mb-2" style={{ color: theme === 'dark' ? '#f8fafc' : '#1e293b' }}>
                        My <span style={{ color: theme === 'dark' ? '#0ea5e9' : '#1e3a5f' }}>Experience</span>
                    </h2>
                    <div
                        className="mx-auto"
                        style={{ width: '60px', height: '4px', background: theme === 'dark' ? '#0ea5e9' : '#1e3a5f', borderRadius: '2px' }}
                    />
                </motion.div>

                <div className="position-relative">
                    {experiences.map((exp, index) => (
                        <TimelineItem key={exp.title} exp={exp} index={index} theme={theme} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
