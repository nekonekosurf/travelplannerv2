import { useState } from 'react'
import SpotCard from './SpotCard'

const periodColors = {
  morning: 'bg-yellow-400',
  afternoon: 'bg-sunset-500',
  evening: 'bg-indigo-500',
}

const periodLabels = {
  morning: '朝',
  afternoon: '昼',
  evening: '夜',
}

export default function TimelineItem({ item, isLast }) {
  const [expanded, setExpanded] = useState(false)
  const dotColor = periodColors[item.period] || 'bg-gray-400'

  return (
    <div className={`relative ${isLast ? '' : 'pb-6'}`}>
      <div className={`absolute -left-5 top-1 w-3 h-3 rounded-full ${dotColor} ring-4 ring-sand-50`} />

      <div className="ml-2">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-medium text-gray-500">{item.time}</span>
          <span className="text-xs text-gray-500">{periodLabels[item.period]}</span>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="w-full text-left rounded-lg p-1 -m-1 focus:outline-none focus:ring-2 focus:ring-sunset-500 focus:ring-offset-1"
        >
          <h4 className="font-bold text-gray-800 flex items-center gap-2">
            {item.title}
            <svg
              className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${expanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </h4>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>
        </button>

        {item.images?.[0] && !expanded && (
          <button
            onClick={() => setExpanded(true)}
            className="mt-3 w-full rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-sunset-500"
            aria-label={`${item.title}の詳細を表示`}
          >
            <img
              src={item.images[0].url}
              alt={item.images[0].alt}
              loading="lazy"
              className="w-full h-52 object-cover"
            />
          </button>
        )}

        {expanded && <SpotCard item={item} onClose={() => setExpanded(false)} />}
      </div>
    </div>
  )
}
