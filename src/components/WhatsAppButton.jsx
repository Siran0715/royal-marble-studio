import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/12135550199"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200, damping: 14 }}
      whileHover={{ scale: 1.08 }}
      className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-black/20"
    >
      <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor">
        <path d="M16.04 3C9.37 3 3.94 8.4 3.94 15.05c0 2.23.6 4.32 1.65 6.12L3 29l8.02-2.55a12.9 12.9 0 0 0 5.02 1c6.67 0 12.1-5.4 12.1-12.05C28.13 8.4 22.71 3 16.04 3zm0 22.02c-1.72 0-3.4-.46-4.86-1.34l-.35-.2-3.85 1.22 1.24-3.7-.23-.38a9.96 9.96 0 0 1-1.55-5.32c0-5.53 4.52-10.02 10.1-10.02 5.6 0 10.1 4.5 10.1 10.02 0 5.53-4.5 10.02-10.1 10.02zm5.5-7.5c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.5.7.3 1.26.48 1.69.62.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
      </svg>
    </motion.a>
  )
}
