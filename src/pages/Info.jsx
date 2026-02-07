import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import tripData from '../../data/trip.json'

export default function Info() {
  const info = tripData.practicalInfo

  const [checked, setChecked] = useState(() => {
    try {
      const saved = localStorage.getItem('packing-checklist')
      return saved ? JSON.parse(saved) : {}
    } catch {
      return {}
    }
  })

  useEffect(() => {
    localStorage.setItem('packing-checklist', JSON.stringify(checked))
  }, [checked])

  const toggleCheck = (i) => {
    setChecked((prev) => ({ ...prev, [i]: !prev[i] }))
  }

  return (
    <div>
      <div className="bg-ocean-600 px-4 py-8 text-white">
        <h1 className="text-2xl font-black">実用情報</h1>
        <p className="text-sm opacity-90 mt-1">旅に必要な基本情報まとめ</p>
      </div>

      <div className="px-4 py-6 space-y-6">
        {info.health && (
          <Section title="健康・病気対策">
            <p className="text-sm text-gray-700">{info.health.description}</p>
            <p className="text-xs text-gray-500 mt-1">{info.health.climate}</p>
            <p className="text-xs text-gray-500">時差: {info.health.timeDifference}</p>

            {info.health.diseases?.map((d, i) => (
              <div key={i} className="mt-3 bg-red-50 rounded-xl p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded-full">
                    リスク: {d.risk}
                  </span>
                  <span className="text-sm font-bold text-red-800">{d.name}</span>
                </div>
                <p className="text-xs text-gray-700">{d.description}</p>
                <p className="text-xs text-gray-700 mt-1">症状: {d.symptoms}</p>
                <p className="text-xs font-bold text-red-700 mt-1">{d.note}</p>
                <div className="mt-2">
                  <p className="text-xs font-bold text-gray-600">予防:</p>
                  {d.prevention.map((p, j) => (
                    <p key={j} className="text-xs text-gray-600 mt-0.5">&#9679; {p}</p>
                  ))}
                </div>
              </div>
            ))}

            {info.health.vaccinations?.length > 0 && (
              <div className="mt-3">
                <p className="text-xs font-bold text-gray-600 mb-1">推奨ワクチン:</p>
                {info.health.vaccinations.map((v, i) => (
                  <p key={i} className="text-xs text-gray-600">&#9679; {v}</p>
                ))}
              </div>
            )}

            {info.health.heatAndSun?.length > 0 && (
              <div className="mt-3">
                <p className="text-xs font-bold text-gray-600 mb-1">熱中症・紫外線対策:</p>
                {info.health.heatAndSun.map((t, i) => (
                  <p key={i} className="text-xs text-gray-600">&#9679; {t}</p>
                ))}
              </div>
            )}

            {info.health.foodSafety?.length > 0 && (
              <div className="mt-3">
                <p className="text-xs font-bold text-gray-600 mb-1">食の安全:</p>
                {info.health.foodSafety.map((t, i) => (
                  <p key={i} className="text-xs text-gray-600">&#9679; {t}</p>
                ))}
              </div>
            )}

            {info.health.medications?.length > 0 && (
              <div className="mt-3">
                <p className="text-xs font-bold text-gray-600 mb-1">持参すべき薬:</p>
                {info.health.medications.map((m, i) => (
                  <p key={i} className="text-xs text-gray-600">&#9679; {m}</p>
                ))}
              </div>
            )}
          </Section>
        )}

        {info.insurance && (
          <Section title="海外旅行保険">
            <p className="text-sm text-gray-700 font-medium">{info.insurance.description}</p>
            {info.insurance.recommendations?.map((r, i) => (
              <p key={i} className="text-xs text-gray-600 mt-1">&#9679; {r}</p>
            ))}
          </Section>
        )}

        {info.safety && (
          <Section title="安全・防犯">
            {info.safety.scamPrevention?.length > 0 && (
              <div className="mb-3">
                <p className="text-xs font-bold text-gray-600 mb-1">詐欺・ぼったくり対策:</p>
                {info.safety.scamPrevention.map((s, i) => (
                  <p key={i} className="text-xs text-gray-600 mt-1">&#9679; {s}</p>
                ))}
              </div>
            )}
            {info.safety.trafficSafety && (
              <div className="mb-3 bg-yellow-50 rounded-lg p-2">
                <p className="text-xs font-bold text-yellow-700">交通安全:</p>
                <p className="text-xs text-gray-700 mt-0.5">{info.safety.trafficSafety}</p>
              </div>
            )}
            {info.safety.earthquakeTsunami?.length > 0 && (
              <div>
                <p className="text-xs font-bold text-gray-600 mb-1">地震・津波:</p>
                {info.safety.earthquakeTsunami.map((e, i) => (
                  <p key={i} className="text-xs text-gray-600 mt-0.5">&#9679; {e}</p>
                ))}
              </div>
            )}
          </Section>
        )}

        {info.emergencyProcedures?.length > 0 && (
          <Section title="緊急時の対処法">
            {info.emergencyProcedures.map((proc, i) => (
              <div key={i} className={`${i > 0 ? 'mt-3 pt-3 border-t border-sand-200' : ''}`}>
                <p className="text-sm font-bold text-gray-800">{proc.situation}</p>
                <ol className="mt-1 space-y-1">
                  {proc.steps.map((step, j) => (
                    <li key={j} className="text-xs text-gray-600 flex gap-2">
                      <span className="text-ocean-500 font-bold flex-shrink-0">{j + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </Section>
        )}

        {info.visa?.description && (
          <Section title="ビザ・入国">
            <p className="text-sm text-gray-700">{info.visa.description}</p>
            {info.visa.details?.map((d, i) => (
              <p key={i} className="text-xs text-gray-600 mt-1">&#9679; {d}</p>
            ))}
          </Section>
        )}

        {info.currency?.description && (
          <Section title="通貨・両替">
            <p className="text-sm text-gray-700">{info.currency.description}</p>
            {info.currency.tips?.map((t, i) => (
              <p key={i} className="text-xs text-gray-600 mt-1">&#9679; {t}</p>
            ))}
          </Section>
        )}

        {info.sim?.description && (
          <Section title="SIMカード">
            <p className="text-sm text-gray-700">{info.sim.description}</p>
            {info.sim.carriers?.map((c, i) => (
              <div key={i} className="mt-2 bg-sand-100 rounded-lg p-2">
                <p className="text-sm font-medium">{c.name}</p>
                <p className="text-xs text-gray-600">{c.plan} — {c.cost}</p>
              </div>
            ))}
          </Section>
        )}

        {info.electricity?.voltage && (
          <Section title="電圧・プラグ">
            <p className="text-sm text-gray-700">
              電圧: {info.electricity.voltage}　プラグ: {info.electricity.plugType}
            </p>
          </Section>
        )}

        {info.emergency?.embassy && (
          <Section title="緊急連絡先">
            <div className="space-y-3">
              <a
                href="tel:+62-21-3192-4308"
                className="flex items-center gap-3 bg-red-50 rounded-xl p-3 active:bg-red-100"
              >
                <span className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                </span>
                <div>
                  <p className="text-xs text-gray-500">日本大使館</p>
                  <p className="text-sm font-bold text-gray-800">{info.emergency.embassy}</p>
                </div>
              </a>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:110"
                  className="flex items-center gap-2 bg-blue-50 rounded-xl p-3 active:bg-blue-100"
                >
                  <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  </span>
                  <div>
                    <p className="text-xs text-gray-500">警察</p>
                    <p className="text-sm font-bold text-gray-800">{info.emergency.police}</p>
                  </div>
                </a>
                <a
                  href="tel:118"
                  className="flex items-center gap-2 bg-red-50 rounded-xl p-3 active:bg-red-100"
                >
                  <span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  </span>
                  <div>
                    <p className="text-xs text-gray-500">救急車</p>
                    <p className="text-sm font-bold text-gray-800">{info.emergency.ambulance}</p>
                  </div>
                </a>
              </div>
              {info.emergency.hospital && (
                <p className="text-xs text-gray-500 mt-1">{info.emergency.hospital}</p>
              )}
            </div>
          </Section>
        )}

        {info.packing?.length > 0 && (
          <Section title="持ち物チェックリスト">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {info.packing.map((item, i) => (
                <label key={i} className="flex items-start gap-2 text-sm text-gray-700 py-1 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded mt-0.5 flex-shrink-0"
                    checked={!!checked[i]}
                    onChange={() => toggleCheck(i)}
                  />
                  <span className={checked[i] ? 'line-through text-gray-400' : ''}>{item}</span>
                </label>
              ))}
            </div>
          </Section>
        )}

        {info.phrases?.length > 0 && (
          <Section title="インドネシア語フレーズ">
            <div className="space-y-2">
              {info.phrases.map((p, i) => (
                <div key={i} className="flex justify-between bg-sand-100 rounded-lg p-2">
                  <span className="text-sm text-gray-700">{p.ja}</span>
                  <span className="text-sm font-medium text-ocean-700">{p.id}</span>
                </div>
              ))}
            </div>
          </Section>
        )}

        <Link
          to="/"
          className="block bg-sunset-600 text-white text-center rounded-xl py-3 text-sm font-medium"
        >
          ホームに戻る
        </Link>
      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-sand-200">
      <h2 className="font-bold text-gray-800 mb-3">{title}</h2>
      {children}
    </div>
  )
}
