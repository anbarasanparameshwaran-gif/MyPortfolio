import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext.jsx'

function BackToTop() {
    const [visible, setVisible] = useState(false)
    const { theme } = useTheme()

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-colors"
                    style={{
                        background: theme === 'dark' ? '#0ea5e9' : '#1e3a5f',
                        color: '#ffffff',
                    }}
                >
                    <FaArrowUp size={20} />
                </motion.button>
            )}
        </AnimatePresence>
    )
}

export default BackToTop
