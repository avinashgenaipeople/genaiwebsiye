import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

export default function Analytics() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Google Analytics page view
    window.gtag?.('config', 'G-04G3Z2GC7K', { page_path: pathname })

    // Facebook Pixel page view
    window.fbq?.('track', 'PageView')
  }, [pathname])

  return null
}
