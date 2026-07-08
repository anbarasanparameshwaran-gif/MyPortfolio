import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaDownload, FaEye, FaPaperPlane } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext.jsx'
import my_pic from '../assets/my_pic.jpeg'

function FloatingParticles() {
    const particles = Array.from({ length: 15 })
    return (
        <div className="position-absolute inset-0 overflow-hidden" style={{ top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: 'none' }}>
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    className="position-absolute rounded-circle"
                    style={{
                        width: Math.random() * 8 + 4 + 'px',
                        height: Math.random() * 8 + 4 + 'px',
                        background: i % 3 === 0 ? 'rgba(14, 165, 233, 0.4)' : i % 3 === 1 ? 'rgba(6, 182, 212, 0.3)' : 'rgba(30, 58, 95, 0.3)',
                        left: Math.random() * 100 + '%',
                        top: Math.random() * 100 + '%',
                    }}
                    animate={{
                        y: [0, -100, 0],
                        x: [0, Math.random() * 50 - 25, 0],
                        opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    )
}

function FloatingShapes() {
    const shapes = [
        { type: 'circle', size: 80, x: '10%', y: '20%', color: 'rgba(14, 165, 233, 0.1)' },
        { type: 'square', size: 60, x: '80%', y: '15%', color: 'rgba(6, 182, 212, 0.1)' },
        { type: 'circle', size: 100, x: '70%', y: '70%', color: 'rgba(30, 58, 95, 0.08)' },
        { type: 'square', size: 40, x: '20%', y: '80%', color: 'rgba(14, 165, 233, 0.08)' },
    ]

    return (
        <div className="position-absolute inset-0" style={{ top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: 'none' }}>
            {shapes.map((shape, i) => (
                <motion.div
                    key={i}
                    className="position-absolute"
                    style={{
                        width: shape.size,
                        height: shape.size,
                        left: shape.x,
                        top: shape.y,
                        background: shape.color,
                        borderRadius: shape.type === 'circle' ? '50%' : '12px',
                        border: `1px solid ${shape.color}`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />
            ))}
        </div>
    )
}

function TypingEffect({ text, theme }) {
    const [displayText, setDisplayText] = useState('')
    const [index, setIndex] = useState(0)
    const [showCursor, setShowCursor] = useState(true)

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(text.slice(0, index + 1))
                setIndex(index + 1)
            }, 100)
            return () => clearTimeout(timeout)
        } else {
            const blink = setInterval(() => {
                setShowCursor(prev => !prev)
            }, 530)
            return () => clearInterval(blink)
        }
    }, [index, text])

    return (
        <span>
            {displayText}
            <span style={{ color: theme === 'dark' ? '#0ea5e9' : '#1e3a5f', opacity: showCursor ? 1 : 0 }}>
                |
            </span>
        </span>
    )
}

function Hero() {
    const { theme } = useTheme()
    const [isTypingComplete, setIsTypingComplete] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsTypingComplete(true), 3500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <section
            id="home"
            className="position-relative d-flex align-items-center justify-content-center overflow-hidden"
            style={{ minHeight: '100vh', paddingTop: '80px' }}
        >
            <div
                className="position-absolute inset-0"
                style={{
                    background: theme === 'dark'
                        ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)'
                        : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)',
                    zIndex: -1,
                }}
            />

            <FloatingShapes />
            <FloatingParticles />

            <div className="container position-relative" style={{ zIndex: 2 }}>
                <div className="row align-items-center">
                    <div className="col-lg-6 order-2 order-lg-1 text-center text-lg-start">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <p
                                className="fw-medium mb-2"
                                style={{ color: theme === 'dark' ? '#0ea5e9' : '#1e3a5f', fontSize: '1.1rem' }}
                            >
                                Hello, I am
                            </p>
                        </motion.div>

                        <motion.h1
                            className="display-3 fw-bold mb-3"
                            style={{ color: theme === 'dark' ? '#f8fafc' : '#1e293b' }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span style={{ color: theme === 'dark' ? '#0ea5e9' : '#1e3a5f' }}>
                                Anbarasan
                            </span>{' '}
                            Developer
                        </motion.h1>

                        <motion.div
                            className="mb-4"
                            style={{ fontSize: '1.3rem', fontWeight: 500, color: theme === 'dark' ? '#e2e8f0' : '#475569' }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <TypingEffect text="MERN Stack Developer" theme={theme} />
                        </motion.div>

                        <motion.p
                            className="mb-4"
                            style={{ color: theme === 'dark' ? '#94a3b8' : '#64748b', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '500px' }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            I build modern, scalable, and responsive web applications using React, Node.js, Express, and MongoDB. Passionate about creating beautiful user experiences and writing clean, efficient code.
                        </motion.p>

                        <motion.div
                            className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-4"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    to="/contact"
                                    className="btn d-flex align-items-center gap-2 px-4 py-3 rounded-pill text-decoration-none"
                                    style={{
                                        background: theme === 'dark' ? '#0ea5e9' : '#1e3a5f',
                                        color: '#ffffff',
                                        border: 'none',
                                    }}
                                >
                                    <FaPaperPlane size={16} />
                                    Contact Me
                                </Link>
                            </motion.div>
                            <motion.a
                                href="/resume"
                                className="btn d-flex align-items-center gap-2 px-4 py-3 rounded-pill text-decoration-none"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    background: 'transparent',
                                    color: theme === 'dark' ? '#0ea5e9' : '#1e3a5f',
                                    border: `2px solid ${theme === 'dark' ? '#0ea5e9' : '#1e3a5f'}`,
                                }}
                            >
                                <FaEye size={16} />
                                View Resume
                            </motion.a>

                            <motion.a
                                href="/resume.pdf"
                                download="Resume.pdf"
                                className="btn d-flex align-items-center gap-2 px-4 py-3 rounded-pill"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    background: 'transparent',
                                    color: theme === 'dark' ? '#e2e8f0' : '#475569',
                                    border: `2px solid ${theme === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'}`,
                                }}
                            >
                                <FaDownload size={16} />
                                Download Resume
                            </motion.a>
                        </motion.div>

                        <motion.div
                            className="d-flex gap-4 justify-content-center justify-content-lg-start"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                        >
                            {[
                                { icon: <FaGithub size={22} />, href: 'https://github.com/anbarasanparameshwaran-gif', label: 'GitHub' },
                                { icon: <FaLinkedin size={22} />, href: 'https://www.linkedin.com/in/anbarasan-parameshwaran-5b407a219/', label: 'LinkedIn' },
                                { icon: <FaEnvelope size={22} />, href: 'mailto:anbarasanparameshwaran@email.com', label: 'Email' },
                                { icon: <FaInstagram size={22} />, href: 'https://www.instagram.com/_mr__orphan__2.0_?igsh=MTdyODkyZmQ0OWZvMQ==', label: 'Instagram' },
                            ].map((social, i) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="d-flex align-items-center justify-content-center rounded-circle"
                                    whileHover={{ scale: 1.2, y: -3 }}
                                    whileTap={{ scale: 0.9 }}
                                    style={{
                                        width: '44px',
                                        height: '44px',
                                        background: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                                        color: theme === 'dark' ? '#e2e8f0' : '#475569',
                                        textDecoration: 'none',
                                    }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    <div className="col-lg-6 order-1 order-lg-2 d-flex justify-content-center mb-5 mb-lg-0">
                        <motion.div
                            className="position-relative"
                            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
                        >
                            <div
                                className="rounded-circle overflow-hidden position-relative"
                                style={{
                                    width: '320px',
                                    height: '320px',
                                    border: `4px solid ${theme === 'dark' ? '#0ea5e9' : '#1e3a5f'}`,
                                    boxShadow: theme === 'dark'
                                        ? '0 20px 60px rgba(14, 165, 233, 0.3)'
                                        : '0 20px 60px rgba(30, 58, 95, 0.2)',
                                }}
                            >
                                <img
                                    src={my_pic}
                                    alt="Profile"
                                    className="w-100 h-100"
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <motion.div
                                className="position-absolute rounded-circle"
                                style={{
                                    width: '30px',
                                    height: '30px',
                                    background: '#22c55e',
                                    bottom: '50px',
                                    right: '20px',
                                    border: '4px solid ' + (theme === 'dark' ? '#0f172a' : '#f8fafc'),
                                }}
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            <motion.div
                className="position-absolute bottom-4 left-50"
                style={{ transform: 'translateX(-50%)', zIndex: 2 }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                        width: '40px',
                        height: '40px',
                        border: `2px solid ${theme === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'}`,
                        cursor: 'pointer',
                    }}
                    onClick={() => scrollToSection('about')}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={theme === 'dark' ? '#e2e8f0' : '#475569'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
