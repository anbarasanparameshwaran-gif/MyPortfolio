import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext.jsx'

const recipientEmail = 'anbarasanparameshwaran@gmail.com'

const contactCards = [
    { icon: <FaMapMarkerAlt size={24} />, label: 'Location', value: 'Erode, Tamil Nadu, India', href: '#' },
    { icon: <FaEnvelope size={24} />, label: 'Email', value: recipientEmail, href: `mailto:${recipientEmail}` },
    { icon: <FaPhone size={24} />, label: 'Phone', value: '+91 63690 27421', href: 'tel:+916369027421' },
    { icon: <FaLinkedin size={24} />, label: 'LinkedIn', value: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/anbarasan-parameshwaran-5b407a219/' },
    { icon: <FaGithub size={24} />, label: 'GitHub', value: 'GitHub Profile', href: 'https://github.com/anbarasanparameshwaran-gif' },
]

function ContactCard({ card, theme, index }) {
    return (
        <motion.a
            href={card.href}
            target={card.href.startsWith('http') ? '_blank' : undefined}
            rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="text-decoration-none col-12 col-md-6 col-lg-4 mb-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <motion.div
                className="p-4 rounded-4 d-flex align-items-center gap-3 h-100"
                style={{
                    background: theme === 'dark'
                        ? 'rgba(30, 41, 59, 0.8)'
                        : 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'}`,
                }}
                whileHover={{
                    scale: 1.03,
                    boxShadow: theme === 'dark'
                        ? '0 10px 30px rgba(14, 165, 233, 0.2)'
                        : '0 10px 30px rgba(30, 58, 95, 0.15)',
                }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <div
                    className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                    style={{
                        width: '50px',
                        height: '50px',
                        background: theme === 'dark' ? 'rgba(14, 165, 233, 0.2)' : 'rgba(30, 58, 95, 0.1)',
                        color: theme === 'dark' ? '#0ea5e9' : '#1e3a5f',
                    }}
                >
                    {card.icon}
                </div>
                <div>
                    <p className="small fw-medium mb-1" style={{ color: theme === 'dark' ? '#94a3b8' : '#64748b' }}>
                        {card.label}
                    </p>
                    <p className="fw-bold mb-0" style={{ color: theme === 'dark' ? '#f8fafc' : '#1e293b' }}>
                        {card.value}
                    </p>
                </div>
            </motion.div>
        </motion.a>
    )
}

function Contact() {
    const { theme } = useTheme()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState({ type: '', message: '' })
    const [loading, setLoading] = useState(false)

    const validate = () => {
        const newErrors = {}
        if (!formData.name.trim()) newErrors.name = 'Name is required'
        if (!formData.email.trim()) newErrors.email = 'Email is required'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format'
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
        if (!formData.message.trim()) newErrors.message = 'Message is required'
        else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters'
        return newErrors
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const validationErrors = validate()
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        setErrors({})
        setLoading(true)
        setStatus({ type: '', message: '' })

        try {
            const formPayload = new URLSearchParams()
            formPayload.append('name', formData.name)
            formPayload.append('email', formData.email)
            formPayload.append('subject', formData.subject)
            formPayload.append('message', formData.message)
            formPayload.append('_subject', `New Portfolio Contact: ${formData.subject}`)
            formPayload.append('_captcha', 'false')
            formPayload.append('_replyto', formData.email)
            formPayload.append('_template', 'table')

            const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json',
                },
                body: formPayload.toString(),
            })

            if (!response.ok) {
                throw new Error('Failed to send message')
            }

            setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' })
            setFormData({ name: '', email: '', subject: '', message: '' })
        } catch (err) {
            setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' })
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
        if (errors[e.target.name]) {
            setErrors(prev => ({ ...prev, [e.target.name]: '' }))
        }
    }

    return (
        <section
            id="contact"
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
                        Get In <span style={{ color: theme === 'dark' ? '#0ea5e9' : '#1e3a5f' }}>Touch</span>
                    </h2>
                    <div
                        className="mx-auto"
                        style={{ width: '60px', height: '4px', background: theme === 'dark' ? '#0ea5e9' : '#1e3a5f', borderRadius: '2px' }}
                    />
                    <p className="mt-3" style={{ color: theme === 'dark' ? '#94a3b8' : '#64748b' }}>
                        Have a project in mind? Let's work together!
                    </p>
                </motion.div>

                <div className="row g-3 mb-5">
                    {contactCards.map((card, index) => (
                        <ContactCard key={card.label} card={card} theme={theme} index={index} />
                    ))}
                </div>

                <motion.div
                    className="row justify-content-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="col-lg-8">
                        <div
                            className="p-4 p-md-5 rounded-4"
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
                            <h4 className="fw-bold mb-4 text-center" style={{ color: theme === 'dark' ? '#f8fafc' : '#1e293b' }}>
                                Send a Message
                            </h4>

                            {status.message && (
                                <motion.div
                                    className={`alert d-flex align-items-center gap-2 mb-4 ${status.type === 'success' ? 'alert-success' : 'alert-danger'}`}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    role="alert"
                                >
                                    {status.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
                                    {status.message}
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} noValidate>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-medium">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                            placeholder="Your Name"
                                        />
                                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-medium">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                            placeholder="your@email.com"
                                        />
                                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-medium">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                                        placeholder="Message Subject"
                                    />
                                    {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                                </div>

                                <div className="mb-4">
                                    <label className="form-label fw-medium">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                        rows="5"
                                        placeholder="Your message..."
                                    />
                                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                                </div>

                                <div className="text-center">
                                    <motion.button
                                        type="submit"
                                        className="btn d-inline-flex align-items-center gap-2 px-5 py-3 rounded-pill"
                                        disabled={loading}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        style={{
                                            background: theme === 'dark' ? '#0ea5e9' : '#1e3a5f',
                                            color: '#ffffff',
                                            border: 'none',
                                            opacity: loading ? 0.7 : 1,
                                        }}
                                    >
                                        {loading ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <FaPaperPlane />
                                                Send Message
                                            </>
                                        )}
                                    </motion.button>
                                </div>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
