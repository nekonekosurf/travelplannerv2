const WEEKDAYS = ['日', '月', '火', '水', '木', '金', '土']

// "2026-08-04" -> "8/4(火)"
export function formatDateJa(dateStr) {
  if (!dateStr) return ''
  const [y, m, d] = dateStr.split('-').map(Number)
  if (!y || !m || !d) return dateStr
  const wd = WEEKDAYS[new Date(y, m - 1, d).getDay()]
  return `${m}/${d}(${wd})`
}
