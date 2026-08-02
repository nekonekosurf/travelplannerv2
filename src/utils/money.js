// 複数通貨対応: cost オブジェクト { idr | php | inr | npr | usd, jpy } を表示文字列にする
const UNITS = [
  { key: 'idr', symbol: 'Rp', suffix: true },
  { key: 'php', symbol: '₱', suffix: false },
  { key: 'inr', symbol: '₹', suffix: false },
  { key: 'npr', symbol: 'NPR ', suffix: false },
  { key: 'usd', symbol: 'US$', suffix: false },
]

function fmtValue(v) {
  return typeof v === 'number' ? v.toLocaleString() : String(v)
}

// 現地通貨部分のみ（例: "₹390"）。該当キーがなければ null
export function formatLocal(cost) {
  if (!cost) return null
  for (const u of UNITS) {
    const v = cost[u.key]
    if (v === undefined || v === null || v === '' || v === 0) continue
    return u.suffix ? `${fmtValue(v)} ${u.symbol}` : `${u.symbol}${fmtValue(v)}`
  }
  return null
}

// 「現地通貨（¥日本円）」の複合表示（例: "₹390（¥640）"）
export function formatMoney(cost) {
  if (!cost) return null
  const local = formatLocal(cost)
  const jpy = cost.jpy !== undefined && cost.jpy !== null && cost.jpy !== '' && cost.jpy !== 0
    ? `¥${fmtValue(cost.jpy)}`
    : null
  if (local && jpy) return `${local}（${jpy}）`
  return local || jpy
}

// 表示すべき金額が1つでもあるか
export function hasAmount(cost) {
  return formatMoney(cost) !== null
}
