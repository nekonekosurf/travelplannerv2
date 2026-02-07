export default function SafetyAlerts({ alerts, className = '' }) {
  if (!alerts || alerts.length === 0) return null

  return (
    <div className={className}>
      {alerts.map((alert, i) => (
        <div
          key={i}
          className="bg-red-50 border-l-4 border-red-600 rounded-r-xl p-3 mb-2"
        >
          <div className="flex items-start gap-2">
            <svg
              className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
            </svg>
            <div>
              <p className="text-xs font-bold text-red-800">{alert.spot}</p>
              <p className="text-xs text-red-700 mt-1 leading-relaxed">
                {alert.warning}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
