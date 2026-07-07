import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FaCode, FaServer, FaDatabase, FaTools, FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker, FaLaptopCode } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiMysql, SiPhp, SiLaravel } from 'react-icons/si'
import { useTheme } from '../context/ThemeContext.jsx'

const skillCategories = [
    {
        title: 'Frontend',
        icon: <FaCode />,
        skills: [
            { name: 'HTML', icon: <FaHtml5 />, percentage: 95 },
            { name: 'CSS', icon: <FaCss3Alt />, percentage: 90 },
            { name: 'Bootstrap', icon: <FaBootstrap />, percentage: 88 },
            { name: 'JavaScript', icon: <FaJs />, percentage: 92 },
            { name: 'React', icon: <FaReact />, percentage: 90 },
        ],
    },
    {
        title: 'Backend',
        icon: <FaServer />,
        skills: [
            { name: 'Node.js', icon: <FaNodeJs />, percentage: 88 },
            { name: 'Express.js', icon: <SiExpress />, percentage: 85 },
            { name: 'PHP', icon: <SiPhp />, percentage: 85 },
            { name: 'Laravel', icon: <SiLaravel />, percentage: 82 },
        ],
    },
    {
        title: 'Database',
        icon: <FaDatabase />,
        skills: [
            { name: 'MongoDB', icon: <SiMongodb />, percentage: 85 },
            { name: 'MySQL', icon: <SiMysql />, percentage: 80 },
            { name: 'REST API', icon: <FaServer />, percentage: 88 },
        ],
    },
    {
        title: 'Tools',
        icon: <FaTools />,
        skills: [
            { name: 'Git', icon: <FaGitAlt />, percentage: 90 },
            { name: 'GitHub', icon: <FaGithub />, percentage: 88 },
            { name: 'VS Code', icon: <FaLaptopCode />, percentage: 95 },
        ],
    },
]

function ProgressBar({ percentage, theme, delay }) {
    const [width, setWidth] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => setWidth(percentage), delay * 1000)
            return () => clearTimeout(timer)
        }
    }, [isInView, percentage, delay])

    return (
        <div ref={ref} className="w-100">
            <div
                className="rounded-pill overflow-hidden"
                style={{
                    height: '8px',
                    background: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)',
                }}
            >
                <motion.div
                    className="h-100 rounded-pill"
                    style={{
                        background: theme === 'dark'
                            ? 'linear-gradient(90deg, #0ea5e9, #06b6d4)'
                            : 'linear-gradient(90deg, #1e3a5f, #2c5282)',
                        width: `${width}%`,
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${width}%` }}
                    transition={{ duration: 1.5, ease: 'easeOut', delay }}
                />
            </div>
        </div>
    )
}

function SkillCard({ category, theme, index }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <motion.div
            ref={ref}
            className="col-12 col-md-6 col-lg-3 mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
        >
            <div
                className="p-4 rounded-4 h-100"
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
                <div className="d-flex align-items-center gap-2 mb-4">
                    <div
                        className="d-flex align-items-center justify-content-center rounded-circle"
                        style={{
                            width: '44px',
                            height: '44px',
                            background: theme === 'dark' ? 'rgba(14, 165, 233, 0.2)' : 'rgba(30, 58, 95, 0.1)',
                            color: theme === 'dark' ? '#0ea5e9' : '#1e3a5f',
                        }}
                    >
                        {category.icon}
                    </div>
                    <h5 className="fw-bold mb-0" style={{ color: theme === 'dark' ? '#f8fafc' : '#1e293b' }}>
                        {category.title}
                    </h5>
                </div>

                <div className="d-flex flex-column gap-3">
                    {category.skills.map((skill, skillIndex) => (
                        <div key={skill.name}>
                            <div className="d-flex justify-content-between align-items-center mb-1">
                                <div className="d-flex align-items-center gap-2">
                                    <span style={{ color: theme === 'dark' ? '#0ea5e9' : '#1e3a5f', fontSize: '1.1rem' }}>
                                        {skill.icon}
                                    </span>
                                    <span className="fw-medium" style={{ color: theme === 'dark' ? '#e2e8f0' : '#475569', fontSize: '0.9rem' }}>
                                        {skill.name}
                                    </span>
                                </div>
                                <span className="small fw-bold" style={{ color: theme === 'dark' ? '#0ea5e9' : '#1e3a5f' }}>
                                    {skill.percentage}%
                                </span>
                            </div>
                            <ProgressBar percentage={skill.percentage} theme={theme} delay={skillIndex * 0.1} />
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

function Skills() {
    const { theme } = useTheme()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section
            id="skills"
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
                        My <span style={{ color: theme === 'dark' ? '#0ea5e9' : '#1e3a5f' }}>Skills</span>
                    </h2>
                    <div
                        className="mx-auto"
                        style={{ width: '60px', height: '4px', background: theme === 'dark' ? '#0ea5e9' : '#1e3a5f', borderRadius: '2px' }}
                    />
                    <p className="mt-3" style={{ color: theme === 'dark' ? '#94a3b8' : '#64748b' }}>
                        Technologies and tools I work with daily
                    </p>
                </motion.div>

                <div className="row">
                    {skillCategories.map((category, index) => (
                        <SkillCard key={category.title} category={category} theme={theme} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
