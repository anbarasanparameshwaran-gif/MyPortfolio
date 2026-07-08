import { useState, useEffect } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSun, FaMoon, FaBars, FaTimes, FaDownload } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext.jsx'

const navLinks = [
    { to: '/', label: 'Home', section: 'home' },
    { to: '/about', label: 'About Me', section: 'about' },
    { to: '/experience', label: 'Experience', section: 'experience' },
    { to: '/skills', label: 'Skills', section: 'skills' },
    { to: '/contact', label: 'Contact', section: 'contact' },
    { to: '/resume', label: 'Resume', isPage: true },
]

function Navbar() {
    const { theme, toggleTheme } = useTheme()
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setMobileOpen(false)
    }, [location])

    useEffect(() => {
        const hash = window.location.hash.replace('#', '')
        if (!hash) return

        const target = document.getElementById(hash)
        if (target) {
            setTimeout(() => {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }, 100)
        }
    }, [location])

    const handleNavClick = (e, link) => {
        if (link.isPage) {
            setMobileOpen(false)
            return
        }

        e.preventDefault()
        setMobileOpen(false)

        if (location.pathname === '/') {
            const target = document.getElementById(link.section)
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
            return
        }

        navigate(`/${link.section ? `#${link.section}` : ''}`)
    }

    return (
        <motion.nav
            className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
            style={{
                background: scrolled
                    ? theme === 'dark'
                        ? 'rgba(15, 23, 42, 0.95)'
                        : 'rgba(255, 255, 255, 0.95)'
                    : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none',
                borderBottom: scrolled
                    ? theme === 'dark'
                        ? '1px solid rgba(255,255,255,0.1)'
                        : '1px solid rgba(0,0,0,0.05)'
                    : 'none',
            }}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <div className="container mx-auto px-4 py-3 d-flex justify-content-between align-items-center">
                <motion.div
                    className="d-flex align-items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                >
                    <NavLink to="/" className="text-decoration-none">
                        <span
                            className="fw-bold fs-4"
                            style={{
                                color: theme === 'dark' ? '#0ea5e9' : '#1e3a5f',
                                fontFamily: 'monospace',
                            }}
                        >
                            &lt;Portfolio/&gt;
                        </span>
                    </NavLink>
                </motion.div>

                <div className="d-none d-lg-flex align-items-center gap-4">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.label}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {link.isPage ? (
                                <NavLink
                                    to={link.to}
                                    className={({ isActive }) =>
                                        `text-decoration-none fw-medium transition-colors ${isActive ? 'active-nav-link' : ''}`
                                    }
                                    style={({ isActive }) => ({
                                        color: isActive
                                            ? theme === 'dark'
                                                ? '#0ea5e9'
                                                : '#1e3a5f'
                                            : theme === 'dark'
                                                ? '#e2e8f0'
                                                : '#475569',
                                        position: 'relative',
                                    })}
                                >
                                    {link.label}
                                </NavLink>
                            ) : (
                                <a
                                    href={link.to}
                                    onClick={(e) => handleNavClick(e, link)}
                                    className="text-decoration-none fw-medium transition-colors"
                                    style={{
                                        color: theme === 'dark' ? '#e2e8f0' : '#475569',
                                        position: 'relative',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.color = theme === 'dark' ? '#0ea5e9' : '#1e3a5f'
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.color = theme === 'dark' ? '#e2e8f0' : '#475569'
                                    }}
                                >
                                    {link.label}
                                </a>
                            )}
                        </motion.div>
                    ))}

                    <div className="d-flex align-items-center gap-3">
                        <motion.button
                            onClick={toggleTheme}
                            whileHover={{ scale: 1.1, rotate: 180 }}
                            whileTap={{ scale: 0.9 }}
                            className="btn btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center"
                            style={{
                                background: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                                color: theme === 'dark' ? '#f59e0b' : '#1e3a5f',
                                border: 'none',
                                width: '38px',
                                height: '38px',
                            }}
                            title="Toggle Theme"
                        >
                            {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
                        </motion.button>

                        <motion.a
                            href="/resume.pdf"
                            download="Resume.pdf"
                            className="btn btn-sm d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: theme === 'dark' ? '#0ea5e9' : '#1e3a5f',
                                color: '#ffffff',
                                border: 'none',
                            }}
                        >
                            <FaDownload size={14} />
                            Resume
                        </motion.a>
                    </div>
                </div>

                <button
                    className="d-lg-none btn p-2"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    style={{
                        color: theme === 'dark' ? '#e2e8f0' : '#1e293b',
                        border: 'none',
                        background: 'transparent',
                    }}
                >
                    {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="d-lg-none"
                        style={{
                            background: theme === 'dark' ? 'rgba(15, 23, 42, 0.98)' : 'rgba(255, 255, 255, 0.98)',
                            backdropFilter: 'blur(12px)',
                        }}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="container px-4 py-4 d-flex flex-column gap-3">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    {link.isPage ? (
                                        <NavLink
                                            to={link.to}
                                            onClick={() => setMobileOpen(false)}
                                            className={({ isActive }) =>
                                                `text-decoration-none fw-medium d-block py-2 ${isActive ? 'text-info' : ''}`
                                            }
                                            style={({ isActive }) => ({
                                                color: isActive
                                                    ? theme === 'dark'
                                                        ? '#0ea5e9'
                                                        : '#1e3a5f'
                                                    : theme === 'dark'
                                                        ? '#e2e8f0'
                                                        : '#475569',
                                            })}
                                        >
                                            {link.label}
                                        </NavLink>
                                    ) : (
                                        <a
                                            href={link.to}
                                            onClick={(e) => handleNavClick(e, link)}
                                            className="text-decoration-none fw-medium d-block py-2"
                                            style={{
                                                color: theme === 'dark' ? '#e2e8f0' : '#475569',
                                            }}
                                        >
                                            {link.label}
                                        </a>
                                    )}
                                </motion.div>
                            ))}
                            <div className="d-flex align-items-center gap-3 mt-2">
                                <button
                                    onClick={toggleTheme}
                                    className="btn btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center"
                                    style={{
                                        background: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                                        color: theme === 'dark' ? '#f59e0b' : '#1e3a5f',
                                        border: 'none',
                                        width: '38px',
                                        height: '38px',
                                    }}
                                >
                                    {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
                                </button>
                                <a
                                    href="/resume.pdf"
                                    download="Resume.pdf"
                                    className="btn btn-sm d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
                                    style={{
                                        background: theme === 'dark' ? '#0ea5e9' : '#1e3a5f',
                                        color: '#ffffff',
                                        border: 'none',
                                    }}
                                >
                                    <FaDownload size={14} />
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar
