import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaArrowUp } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext.jsx'

const quickLinks = [
    { to: '/#home', label: 'Home' },
    { to: '/#about', label: 'About' },
    { to: '/#experience', label: 'Experience' },
    { to: '/#skills', label: 'Skills' },
    //   { to: '/#projects', label: 'Projects' },
    { to: '/resume', label: 'Resume' },
    { to: '/#contact', label: 'Contact' },
]

const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/anbarasanparameshwaran-gif', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/anbarasan-parameshwaran-5b407a219/', label: 'LinkedIn' },
    { icon: <FaEnvelope />, href: 'mailto:anbarasanparameshwaran@email.com', label: 'Email' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/_mr__orphan__2.0_?igsh=MTdyODkyZmQ0OWZvMQ==', label: 'Instagram' },
]

function Footer() {
    const { theme } = useTheme()

    return (
        <footer
            className="position-relative overflow-hidden"
            style={{
                background: theme === 'dark'
                    ? 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)'
                    : 'linear-gradient(180deg, #e2e8f0 0%, #f8fafc 100%)',
                borderTop: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
            }}
        >
            {/* Animated Wave */}
            <div className="position-relative overflow-hidden" style={{ height: '60px' }}>
                <svg
                    viewBox="0 0 1440 120"
                    className="position-absolute w-100"
                    style={{ bottom: 0, left: 0 }}
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,30 1440,60 L1440,120 L0,120 Z"
                        fill={theme === 'dark' ? 'rgba(14, 165, 233, 0.1)' : 'rgba(30, 58, 95, 0.05)'}
                    />
                </svg>
            </div>

            <div className="container py-5">
                <div className="row g-4">
                    <div className="col-lg-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h4
                                className="fw-bold mb-3"
                                style={{ color: theme === 'dark' ? '#f8fafc' : '#1e293b', fontFamily: 'monospace' }}
                            >
                                &lt;Portfolio/&gt;
                            </h4>
                            <p style={{ color: theme === 'dark' ? '#94a3b8' : '#64748b', lineHeight: 1.7 }}>
                                A passionate MERN Stack Developer dedicated to building modern, scalable, and user-friendly web applications. Let's create something amazing together.
                            </p>
                            <div className="d-flex gap-3 mt-3">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="d-flex align-items-center justify-content-center rounded-circle"
                                        whileHover={{ scale: 1.2, y: -3 }}
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            background: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                                            color: theme === 'dark' ? '#e2e8f0' : '#475569',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="col-lg-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h5 className="fw-bold mb-3" style={{ color: theme === 'dark' ? '#f8fafc' : '#1e293b' }}>
                                Quick Links
                            </h5>
                            <div className="row">
                                {quickLinks.map((link) => (
                                    <div className="col-6 mb-2" key={link.label}>
                                        <a
                                            href={link.to}
                                            className="text-decoration-none d-block"
                                            style={{ color: theme === 'dark' ? '#94a3b8' : '#64748b', fontSize: '0.95rem' }}
                                            onMouseEnter={(e) => { e.target.style.color = theme === 'dark' ? '#0ea5e9' : '#1e3a5f' }}
                                            onMouseLeave={(e) => { e.target.style.color = theme === 'dark' ? '#94a3b8' : '#64748b' }}
                                        >
                                            {link.label}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="col-lg-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h5 className="fw-bold mb-3" style={{ color: theme === 'dark' ? '#f8fafc' : '#1e293b' }}>
                                Contact Info
                            </h5>
                            <div className="d-flex flex-column gap-2">
                                <p className="mb-1" style={{ color: theme === 'dark' ? '#94a3b8' : '#64748b' }}>
                                    <span className="fw-medium">Location:</span> Erode, Tamil Nadu, India
                                </p>
                                <p className="mb-1" style={{ color: theme === 'dark' ? '#94a3b8' : '#64748b' }}>
                                    <span className="fw-medium">Email:</span> anbarasanparameshwaran@email.com
                                </p>
                                <p className="mb-1" style={{ color: theme === 'dark' ? '#94a3b8' : '#64748b' }}>
                                    <span className="fw-medium">Phone:</span> +91 63690 27421
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div
                    className="mt-5 pt-4 text-center"
                    style={{ borderTop: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}` }}
                >
                    <p className="mb-0 small" style={{ color: theme === 'dark' ? '#94a3b8' : '#64748b' }}>
                        &copy; {new Date().getFullYear()} Portfolio Developer. All rights reserved. Built with React, Node.js, and passion.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
