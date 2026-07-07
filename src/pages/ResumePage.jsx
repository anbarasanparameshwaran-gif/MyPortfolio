import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaDownload, FaEye, FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext.jsx'

function ResumePage() {
    const { theme } = useTheme()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <div
            className="min-vh-100"
            style={{
                background: theme === 'dark'
                    ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
                    : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
                paddingTop: '100px',
                paddingBottom: '60px',
            }}
        >
            <div className="container">
                <motion.div
                    ref={ref}
                    className="mb-4 d-flex flex-wrap align-items-center justify-content-between gap-3"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="d-flex align-items-center gap-3">
                        <motion.div
                            whileHover={{ scale: 1.05, x: -3 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                to="/"
                                className="btn d-flex align-items-center gap-2 rounded-pill"
                                style={{
                                    background: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                                    color: theme === 'dark' ? '#e2e8f0' : '#475569',
                                    border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}`,
                                }}
                            >
                                <FaArrowLeft size={14} />
                                Back to Home
                            </Link>
                        </motion.div>
                        <h2 className="fw-bold mb-0" style={{ color: theme === 'dark' ? '#f8fafc' : '#1e293b' }}>
                            My <span style={{ color: theme === 'dark' ? '#0ea5e9' : '#1e3a5f' }}>Resume</span>
                        </h2>
                    </div>

                    <div className="d-flex gap-3">
                        <motion.a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn d-flex align-items-center gap-2 rounded-pill"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: 'transparent',
                                color: theme === 'dark' ? '#e2e8f0' : '#475569',
                                border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'}`,
                            }}
                        >
                            <FaEye size={14} />
                            View Full
                        </motion.a>
                        <motion.a
                            href="/resume.pdf"
                            download="Resume.pdf"
                            className="btn d-flex align-items-center gap-2 rounded-pill"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: theme === 'dark' ? '#0ea5e9' : '#1e3a5f',
                                color: '#ffffff',
                                border: 'none',
                            }}
                        >
                            <FaDownload size={14} />
                            Download Resume
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    className="rounded-4 overflow-hidden"
                    style={{
                        background: theme === 'dark' ? '#1e293b' : '#ffffff',
                        border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                        boxShadow: theme === 'dark'
                            ? '0 10px 40px rgba(0,0,0,0.3)'
                            : '0 10px 40px rgba(0,0,0,0.08)',
                        height: 'calc(100vh - 200px)',
                        minHeight: '500px',
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="h-100 w-100 position-relative">
                        <div className="d-flex align-items-center justify-content-center h-100 flex-column gap-3 p-4">
                            <div className="text-center">
                                <div
                                    className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        background: theme === 'dark' ? 'rgba(14, 165, 233, 0.2)' : 'rgba(30, 58, 95, 0.1)',
                                        color: theme === 'dark' ? '#0ea5e9' : '#1e3a5f',
                                    }}
                                >
                                    <FaDownload size={32} />
                                </div>
                                <h5 className="fw-bold mb-2" style={{ color: theme === 'dark' ? '#f8fafc' : '#1e293b' }}>
                                    Resume PDF
                                </h5>
                                <p className="mb-4" style={{ color: theme === 'dark' ? '#94a3b8' : '#64748b' }}>
                                    Click below to download or view the resume
                                </p>
                                <div className="d-flex flex-wrap gap-3 justify-content-center">
                                    <motion.a
                                        href="/resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn d-flex align-items-center gap-2 px-4 py-2 rounded-pill"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{
                                            background: 'transparent',
                                            color: theme === 'dark' ? '#e2e8f0' : '#475569',
                                            border: `2px solid ${theme === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'}`,
                                        }}
                                    >
                                        <FaEye size={14} />
                                        View in Browser
                                    </motion.a>
                                    <motion.a
                                        href="/resume.pdf"
                                        download="Resume.pdf"
                                        className="btn d-flex align-items-center gap-2 px-4 py-2 rounded-pill"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{
                                            background: theme === 'dark' ? '#0ea5e9' : '#1e3a5f',
                                            color: '#ffffff',
                                            border: 'none',
                                        }}
                                    >
                                        <FaDownload size={14} />
                                        Download PDF
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default ResumePage
