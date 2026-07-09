import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaMapMarkerAlt, FaBriefcase, FaEnvelope, FaPhone, FaGraduationCap, FaBullseye } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext.jsx';
import my_pic from '../assets/my_pic.jpeg'

const infoCards = [
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Erode, Tamil Nadu, India' },
    { icon: <FaBriefcase />, label: 'Experience', value: '1+ Years' },
    { icon: <FaEnvelope />, label: 'Email', value: 'anbarasanparameshwaran.com' },
    { icon: <FaPhone />, label: 'Phone', value: '+91 63690 27421' },
]

const education = [
    { degree: 'Master of Computer Applications', school: 'Anna University', year: '2022 - 2024', grade: 'CGPA: 8.5/10' },
    { degree: 'Bachelor of Computer Applications', school: 'Bharathiar University', year: '2019 - 2022', grade: 'CGPA: 7.5/10' },
]

const careerObjective = "To leverage my expertise in MERN Stack development to build innovative, scalable, and user-centric web applications. I aim to contribute to a dynamic organization while continuously expanding my technical skills and staying at the forefront of modern web technologies."

function AnimatedCard({ children, delay = 0, className = '' }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

function About() {
    const { theme } = useTheme()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section
            id="about"
            className="position-relative py-5"
            style={{
                background: theme === 'dark'
                    ? 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)'
                    : 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)',
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
                        About <span style={{ color: theme === 'dark' ? '#0ea5e9' : '#1e3a5f' }}>Me</span>
                    </h2>
                    <div
                        className="mx-auto"
                        style={{ width: '60px', height: '4px', background: theme === 'dark' ? '#0ea5e9' : '#1e3a5f', borderRadius: '2px' }}
                    />
                </motion.div>

                <div className="row align-items-center mb-5">
                    <div className="col-lg-5 mb-4 mb-lg-0">
                        <AnimatedCard>
                            <div className="position-relative rounded-4 overflow-hidden" style={{ maxWidth: '400px' }}>
                                <img
                                    src={my_pic}
                                    alt="About Me"
                                    className="w-100 rounded-4"
                                    style={{ objectFit: 'cover', aspectRatio: '3/4' }}
                                />
                                <div
                                    className="position-absolute bottom-0 start-0 w-100 p-4"
                                    style={{
                                        background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                                    }}
                                >
                                    <p className="text-white fw-bold mb-0 fs-5">Anbarasan Parameshwaran</p>
                                    <p className="text-white-50 mb-0">MERN Stack Developer</p>
                                </div>
                            </div>
                        </AnimatedCard>
                    </div>

                    <div className="col-lg-7">
                        <AnimatedCard delay={0.2}>
                            <div className="mb-4">
                                <h3 className="fw-bold mb-3" style={{ color: theme === 'dark' ? '#f8fafc' : '#1e293b' }}>
                                    Who I Am
                                </h3>
                                <p style={{ color: theme === 'dark' ? '#94a3b8' : '#64748b', lineHeight: 1.8, fontSize: '1.05rem' }}>
                                    I am a passionate and dedicated MERN Stack Developer with over 1 years of professional experience in building full-stack web applications. I specialize in creating modern, responsive, and high-performance applications using React, Node.js, Express, and MongoDB.
                                </p>
                                <p style={{ color: theme === 'dark' ? '#94a3b8' : '#64748b', lineHeight: 1.8, fontSize: '1.05rem' }}>
                                    My journey in software development started during my college years, and since then I have been committed to writing clean, maintainable code and delivering exceptional user experiences. I love solving complex problems and continuously learning new technologies.
                                </p>
                            </div>
                        </AnimatedCard>

                        <AnimatedCard delay={0.3}>
                            <div className="mb-4 p-4 rounded-4" style={{ background: theme === 'dark' ? 'rgba(14, 165, 233, 0.1)' : 'rgba(30, 58, 95, 0.05)', borderLeft: `4px solid ${theme === 'dark' ? '#0ea5e9' : '#1e3a5f'}` }}>
                                <h4 className="fw-bold mb-2 d-flex align-items-center gap-2" style={{ color: theme === 'dark' ? '#f8fafc' : '#1e293b' }}>
                                    <FaBullseye style={{ color: theme === 'dark' ? '#0ea5e9' : '#1e3a5f' }} />
                                    Career Objective
                                </h4>
                                <p className="mb-0" style={{ color: theme === 'dark' ? '#94a3b8' : '#64748b', lineHeight: 1.7 }}>
                                    {careerObjective}
                                </p>
                            </div>
                        </AnimatedCard>

                        <AnimatedCard delay={0.4}>
                            <div className="mb-4">
                                <h4 className="fw-bold mb-3 d-flex align-items-center gap-2" style={{ color: theme === 'dark' ? '#f8fafc' : '#1e293b' }}>
                                    <FaGraduationCap style={{ color: theme === 'dark' ? '#0ea5e9' : '#1e3a5f' }} />
                                    Education
                                </h4>
                                {education.map((edu, i) => (
                                    <div
                                        key={i}
                                        className="p-3 mb-2 rounded-3"
                                        style={{ background: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)' }}
                                    >
                                        <p className="fw-bold mb-1" style={{ color: theme === 'dark' ? '#f8fafc' : '#1e293b' }}>
                                            {edu.degree}
                                        </p>
                                        <p className="mb-0 small" style={{ color: theme === 'dark' ? '#94a3b8' : '#64748b' }}>
                                            {edu.school} | {edu.year} | {edu.grade}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </AnimatedCard>
                    </div>
                </div>

                <div className="row g-4">
                    {infoCards.map((card, index) => (
                        <div className="col-6 col-md-3" key={card.label}>
                            <AnimatedCard delay={index * 0.1}>
                                <motion.div
                                    className="text-center p-4 rounded-4 h-100"
                                    style={{
                                        background: theme === 'dark'
                                            ? 'rgba(255, 255, 255, 0.05)'
                                            : 'rgba(255, 255, 255, 0.7)',
                                        backdropFilter: 'blur(10px)',
                                        border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: theme === 'dark'
                                            ? '0 10px 30px rgba(14, 165, 233, 0.2)'
                                            : '0 10px 30px rgba(30, 58, 95, 0.15)',
                                    }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <div
                                        className="d-flex align-items-center justify-content-center rounded-circle mx-auto mb-3"
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                            background: theme === 'dark' ? 'rgba(14, 165, 233, 0.2)' : 'rgba(30, 58, 95, 0.1)',
                                            color: theme === 'dark' ? '#0ea5e9' : '#1e3a5f',
                                        }}
                                    >
                                        {card.icon}
                                    </div>
                                    <p className="small fw-medium mb-1" style={{ color: theme === 'dark' ? '#94a3b8' : '#64748b' }}>
                                        {card.label}
                                    </p>
                                    <p className="fw-bold mb-0" style={{ color: theme === 'dark' ? '#f8fafc' : '#1e293b', fontSize: '0.95rem' }}>
                                        {card.value}
                                    </p>
                                </motion.div>
                            </AnimatedCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About
