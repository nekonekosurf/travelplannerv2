import { useState, useEffect, useRef } from 'react'

const variantStyles = {
  default: 'bg-white border-sand-200',
  warning: 'bg-red-50 border-red-200',
  highlight: 'bg-green-50 border-green-200',
}

export default function Accordion({
  title,
  subtitle,
  icon,
  badge,
  defaultOpen = false,
  forceOpen = false,
  id,
  variant = 'default',
  children,
}) {
  const [open, setOpen] = useState(defaultOpen)
  const ref = useRef(null)

  useEffect(() => {
    if (forceOpen && !open) {
      setOpen(true)
    }
  }, [forceOpen])

  return (
    <div
      id={id}
      ref={ref}
      className={`rounded-2xl border shadow-sm overflow-hidden ${variantStyles[variant] || variantStyles.default}`}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full text-left px-4 py-3 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:ring-inset"
      >
        {icon && <span className="text-lg flex-shrink-0">{icon}</span>}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-gray-800 leading-snug">{title}</p>
          {subtitle && !open && (
            <p className="text-xs text-gray-500 mt-0.5 truncate">{subtitle}</p>
          )}
        </div>
        {badge && (
          <span className="text-[10px] font-bold bg-green-600 text-white px-2 py-0.5 rounded-full flex-shrink-0 whitespace-nowrap">
            {badge}
          </span>
        )}
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-gray-700 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}
