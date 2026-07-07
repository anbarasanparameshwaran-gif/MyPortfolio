import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext.jsx'

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-featured e-commerce platform with user authentication, product catalog, shopping cart, payment integration, and order management. Built with the MERN stack for scalability.',
        image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
    },
    {
        title: 'Task Management App',
        description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, team workspaces, and progress tracking using websockets.',
        image: 'https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=600',
        technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Tailwind CSS'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
    },
    {
        title: 'Blog Platform',
        description: 'A modern blogging platform with rich text editor, markdown support, user profiles, comments, likes, and social sharing features. SEO optimized with server-side rendering.',
        image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
    },
    {
        title: 'Weather Dashboard',
        description: 'An interactive weather dashboard with real-time data, location-based forecasts, interactive charts, and beautiful visualizations using D3.js.',
        image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
        technologies: ['React', 'D3.js', 'OpenWeather API', 'Tailwind CSS', 'Chart.js'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
    },
    {
        title: 'Chat Application',
        description: 'Real-time chat application with private messaging, group chats, file sharing, and message encryption. Features a modern, responsive UI design.',
        image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
        technologies: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
    },
    {
        title: 'Portfolio Dashboard',
        description: 'A personal analytics dashboard to track portfolio performance, project statistics, and skill growth with beautiful data visualizations and charts.',
        image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
        technologies: ['React', 'Recharts', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
    },
]

function ProjectCard({ project, theme, index }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <motion.div
            ref={ref}
            className="col-12 col-md-6 col-lg-4 mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <motion.div
                className="rounded-4 overflow-hidden h-100 d-flex flex-column"
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
                whileHover={{ y: -10, boxShadow: theme === 'dark' ? '0 20px 50px rgba(14, 165, 233, 0.2)' : '0 20px 50px rgba(30, 58, 95, 0.15)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
                <div className="overflow-hidden" style={{ height: '200px' }}>
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-100 h-100"
                        style={{ objectFit: 'cover' }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>

                <div className="p-4 flex-grow-1 d-flex flex-column">
                    <h5 className="fw-bold mb-2" style={{ color: theme === 'dark' ? '#f8fafc' : '#1e293b' }}>
                        {project.title}
                    </h5>
                    <p className="mb-3 flex-grow-1" style={{ color: theme === 'dark' ? '#94a3b8' : '#64748b', fontSize: '0.95rem', lineHeight: 1.6 }}>
                        {project.description}
                    </p>

                    <div className="d-flex flex-wrap gap-2 mb-3">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="badge rounded-pill px-2 py-1"
                                style={{
                                    background: theme === 'dark' ? 'rgba(14, 165, 233, 0.15)' : 'rgba(30, 58, 95, 0.1)',
                                    color: theme === 'dark' ? '#0ea5e9' : '#1e3a5f',
                                    fontSize: '0.75rem',
                                    fontWeight: 500,
                                }}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="d-flex gap-2 mt-auto">
                        <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm flex-grow-1 d-flex align-items-center justify-content-center gap-2 rounded-pill"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: theme === 'dark' ? '#0ea5e9' : '#1e3a5f',
                                color: '#ffffff',
                                border: 'none',
                            }}
                        >
                            <FaExternalLinkAlt size={12} />
                            Live Demo
                        </motion.a>
                        <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm flex-grow-1 d-flex align-items-center justify-content-center gap-2 rounded-pill"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                background: 'transparent',
                                color: theme === 'dark' ? '#e2e8f0' : '#475569',
                                border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)'}`,
                            }}
                        >
                            <FaGithub size={12} />
                            GitHub
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

function Projects() {
    const { theme } = useTheme()
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section
            id="projects"
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
                        My <span style={{ color: theme === 'dark' ? '#0ea5e9' : '#1e3a5f' }}>Projects</span>
                    </h2>
                    <div
                        className="mx-auto"
                        style={{ width: '60px', height: '4px', background: theme === 'dark' ? '#0ea5e9' : '#1e3a5f', borderRadius: '2px' }}
                    />
                    <p className="mt-3" style={{ color: theme === 'dark' ? '#94a3b8' : '#64748b' }}>
                        Some of my recent work
                    </p>
                </motion.div>

                <div className="row">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} theme={theme} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
