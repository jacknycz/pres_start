import { useEffect, useState } from 'react'

export default function useDarkMode() {
    const [isDark, setIsDark] = useState(() => {
        const theme = localStorage.getItem('theme')
        if (theme === 'dark') return true
        if (theme === 'light') return false
        return window.matchMedia('(prefers-color-scheme: dark)').matches
    })

    useEffect(() => {
        const root = window.document.documentElement
        if (isDark) {
            root.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            root.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }, [isDark])

    return [isDark, () => setIsDark(prev => !prev)]
}
