import { useTheme } from '../context/ThemeContext.jsx'

function Loading() {
    const { theme } = useTheme()

    return (
        <div
            className="d-flex flex-column align-items-center justify-content-center min-vh-100"
            style={{
                background: theme === 'dark' ? '#0f172a' : '#f8fafc',
            }}
        >
            <div className="spinner mb-4" style={{ borderTopColor: theme === 'dark' ? '#0ea5e9' : '#1e3a5f' }} />
            <p className="fw-medium" style={{ color: theme === 'dark' ? '#e2e8f0' : '#475569' }}>
                Loading Portfolio...
            </p>
        </div>
    )
}

export default Loading
