import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState, useRef, useCallback } from 'react'
import HeroImage from '../components/HeroImage'
import Accordion from '../components/Accordion'
import SafetyAlerts from '../components/SafetyAlerts'
import RouteMap from '../components/RouteMap'
import {
  sections,
  mapSpots,
  mapPois,
  budgetSummary,
  beachInfo,
  natureReserve,
  greenCanyon,
  batuHiu,
  batuKaras,
  citumang,
  otherAttractions,
  seafoodGuide,
  sundaneseDishes,
  restaurants,
  accommodations,
  stayTips,
  weekendWarning,
  transportAccess,
  localTransport,
  banjarStation,
  practicalInfo,
  tsunamiSafety,
  safetyAlerts,
  modelItineraries,
  beerInfo,
  emergencyContacts,
} from '../data/pangandaran-data'

export default function PangandaranGuide() {
  const { hash } = useLocation()
  const [activeSection, setActiveSection] = useState('overview')
  const [forceOpenIds, setForceOpenIds] = useState(new Set())
  const sectionRefs = useRef({})

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      setForceOpenIds(new Set([id]))
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 52
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 100)
    }
  }, [hash])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 }
    )
    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollToSection = useCallback((sectionId) => {
    const el = sectionRefs.current[sectionId]
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 52
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, [])

  const scrollToId = useCallback((targetId) => {
    setForceOpenIds((prev) => new Set([...prev, targetId]))
    setTimeout(() => {
      const el = document.getElementById(targetId)
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 52
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }, 100)
  }, [])

  const budgetAccommodations = accommodations.filter((a) => a.budget)
  const midrangeAccommodations = accommodations.filter((a) => !a.budget)

  return (
    <div className="pb-14">
      <HeroImage
        url="https://upload.wikimedia.org/wikipedia/commons/8/83/Green_Canyon_Pangandaran.jpg"
        alt="グリーンキャニオン・パンガンダラン"
        overlay
      >
        <span className="text-xs font-bold bg-ocean-600 px-3 py-1 rounded-full inline-block mb-2">
          Day 3-4
        </span>
        <h1 className="text-2xl font-black">パンガンダラン</h1>
        <p className="text-sm opacity-90 mt-1">エメラルドの渓谷・シーフード天国・秘境ビーチ</p>
      </HeroImage>

      {/* Sticky nav */}
      <nav className="sticky top-0 z-30 bg-white border-b border-sand-200 shadow-sm">
        <div className="flex overflow-x-auto scrollbar-hide">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className={`flex-shrink-0 px-4 py-3 text-xs font-medium border-b-2 transition-colors ${
                activeSection === s.id
                  ? 'border-ocean-600 text-ocean-600'
                  : 'border-transparent text-gray-500'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ===== OVERVIEW ===== */}
      <div id="overview" ref={(el) => (sectionRefs.current.overview = el)} className="px-4 py-6">
        <p className="text-sm text-gray-700 leading-relaxed">
          ジャワ島南岸に突き出す半島の町パンガンダラン。バンドンから南西に約215km、車で5〜7時間。
          ジャカルタやバンドンの都市住民にとっての「近場のビーチリゾート」だが、外国人旅行者にはほとんど知られていない隠れた秘境。
          平日は静かな漁村、週末はジャワ随一のビーチリゾートに変貌する。
        </p>

        <div className="mt-3 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-3">
          <p className="text-xs font-bold text-amber-800">2006年津波の歴史</p>
          <p className="text-xs text-amber-700 mt-1 leading-relaxed">
            {tsunamiSafety.history} 現在は{tsunamiSafety.certification}。避難経路・警報システムが整備済み。
          </p>
        </div>

        {/* Budget cards */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          {budgetSummary.map((b) => (
            <div key={b.label} className="bg-sand-100 rounded-lg p-2">
              <span className="text-xs text-gray-500 block">{b.label}</span>
              <span className="text-sm font-bold">{b.value}</span>
              <span className="text-[10px] text-gray-500 block">{b.note}</span>
            </div>
          ))}
        </div>

        {/* Why Pangandaran */}
        <div className="mt-4 bg-ocean-50 rounded-xl p-3 border border-ocean-200">
          <p className="text-xs font-bold text-ocean-800 mb-1">パンガンダランの魅力</p>
          <ul className="space-y-1">
            <li className="text-xs text-gray-700">
              <span className="font-bold text-ocean-700">観光客が少ない:</span> バリやロンボクとは比較にならないほど外国人旅行者が少なくローカル感が強い
            </li>
            <li className="text-xs text-gray-700">
              <span className="font-bold text-ocean-700">自然の多様性:</span> ジャングル・エメラルドの渓谷・サーフポイント・マングローブ林・鍾乳洞が半径30km内に集結
            </li>
            <li className="text-xs text-gray-700">
              <span className="font-bold text-ocean-700">抜群のシーフード:</span> 漁港直結。パサール・イカン（魚市場）で獲れたての魚を炭火焼き
            </li>
            <li className="text-xs text-gray-700">
              <span className="font-bold text-ocean-700">コスパ:</span> 宿泊1泊 Rp 100,000〜300,000、食事 Rp 15,000〜50,000
            </li>
          </ul>
        </div>

        {/* Practical info */}
        <div className="mt-4 bg-sand-50 rounded-xl p-3 border border-sand-200">
          <p className="text-xs font-bold text-gray-800 mb-1">実用情報</p>
          <ul className="space-y-1">
            {practicalInfo.map((info) => (
              <li key={info.label} className="text-xs text-gray-700">
                <span className="font-bold text-ocean-700">{info.label}:</span> {info.desc}
              </li>
            ))}
          </ul>
        </div>

        {/* Model itinerary Day 3 */}
        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-800 mb-3">{modelItineraries.day3.title}</h3>
          <div className="space-y-3">
            {modelItineraries.day3.items.map((t, i) => (
              <div key={i} className="flex gap-3">
                <div className="flex flex-col items-center flex-shrink-0">
                  <span className="w-6 h-6 rounded-full bg-ocean-600 text-white flex items-center justify-center text-[10px] font-bold">
                    {i + 1}
                  </span>
                  <div className="w-px flex-1 bg-sand-300 mt-1" />
                </div>
                <div className="flex-1 pb-1">
                  <p className="text-[10px] text-gray-500 font-medium">{t.time}</p>
                  <p className="text-xs font-bold text-gray-800">{t.title}</p>
                  {t.desc && <p className="text-xs text-gray-600 leading-relaxed">{t.desc}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="mt-4">
          <h3 className="text-lg font-bold text-gray-800 mb-2">パンガンダラン エリアマップ</h3>
          <RouteMap spots={mapSpots} pois={mapPois} height="350px" />
        </div>
      </div>

      {/* ===== BEACHES & NATURE RESERVE ===== */}
      <div id="beaches" ref={(el) => (sectionRefs.current.beaches = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">ビーチ & 自然保護区</h2>
        <p className="text-xs text-gray-500 mb-4">朝は東で日の出、夕は西で夕日。半島の二面を楽しむ</p>

        {/* Beach comparison */}
        <div className="bg-ocean-50 border border-ocean-200 rounded-2xl p-4 mb-4">
          <p className="text-sm font-black text-gray-800 mb-2">西ビーチ vs 東ビーチ</p>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs font-bold text-ocean-700 mb-1">西ビーチ（サンセット）</p>
              <p className="text-[10px] text-gray-600 leading-relaxed">穏やかな波。遊泳可。宿・レストラン集中。毎日インド洋に沈む夕日</p>
            </div>
            <div>
              <p className="text-xs font-bold text-sunset-600 mb-1">東ビーチ（サンライズ）</p>
              <p className="text-[10px] text-gray-600 leading-relaxed">白い砂浜。波が荒く遊泳不向き。魚市場あり。朝の散歩に最適</p>
            </div>
          </div>
          <div className="mt-2 bg-white rounded-lg p-2">
            <p className="text-[10px] text-gray-700 leading-relaxed">
              <span className="font-bold text-ocean-700">Tips:</span> {beachInfo.tip}
            </p>
          </div>
        </div>

        {/* West Beach */}
        <Accordion
          id="beach-west"
          title={beachInfo.west.name}
          subtitle={beachInfo.west.highlight}
          icon="🌅"
          forceOpen={forceOpenIds.has('beach-west')}
        >
          <p className="text-xs text-gray-700 mt-1 mb-2">{beachInfo.west.description}</p>
          <ul className="space-y-1">
            {beachInfo.west.features.map((f, i) => (
              <li key={i} className="text-xs text-gray-700">
                <span className="text-ocean-600 mr-1">&#9679;</span>{f}
              </li>
            ))}
          </ul>
        </Accordion>

        {/* East Beach */}
        <div className="mt-3">
          <Accordion
            id="beach-east"
            title={beachInfo.east.name}
            subtitle={beachInfo.east.highlight}
            icon="🌄"
            forceOpen={forceOpenIds.has('beach-east')}
          >
            <p className="text-xs text-gray-700 mt-1 mb-2">{beachInfo.east.description}</p>
            <ul className="space-y-1">
              {beachInfo.east.features.map((f, i) => (
                <li key={i} className="text-xs text-gray-700">
                  <span className="text-ocean-600 mr-1">&#9679;</span>{f}
                </li>
              ))}
            </ul>
          </Accordion>
        </div>

        {/* Nature Reserve */}
        <div className="mt-3">
          <Accordion
            id="nature-reserve"
            title={natureReserve.name}
            subtitle="530ha の熱帯雨林・野生動物・洞窟・白砂ビーチ"
            icon="🌿"
            badge={`外国人 ${natureReserve.entryFee.foreigner.weekday}〜`}
            forceOpen={forceOpenIds.has('nature-reserve')}
          >
            <p className="text-xs text-gray-700 mt-1 mb-2">{natureReserve.description}</p>

            {/* Entry fees */}
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-sand-50 rounded-lg p-2 text-center">
                <p className="text-[10px] text-gray-500">外国人（平日）</p>
                <p className="text-xs font-bold">{natureReserve.entryFee.foreigner.weekday}</p>
              </div>
              <div className="bg-sand-50 rounded-lg p-2 text-center">
                <p className="text-[10px] text-gray-500">外国人（週末）</p>
                <p className="text-xs font-bold">{natureReserve.entryFee.foreigner.weekend}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center mb-3">
              <div className="bg-sand-50 rounded-lg p-1.5">
                <p className="text-[10px] text-gray-500">営業</p>
                <p className="text-[10px] font-bold">{natureReserve.hours}</p>
              </div>
              <div className="bg-sand-50 rounded-lg p-1.5">
                <p className="text-[10px] text-gray-500">入口</p>
                <p className="text-[10px] font-bold">{natureReserve.gates}</p>
              </div>
              <div className="bg-sand-50 rounded-lg p-1.5">
                <p className="text-[10px] text-gray-500">所要</p>
                <p className="text-[10px] font-bold">{natureReserve.duration}</p>
              </div>
            </div>

            {/* Wildlife */}
            <p className="text-xs font-bold text-gray-800 mb-1">野生動物</p>
            <div className="flex flex-wrap gap-1 mb-3">
              {natureReserve.wildlife.map((w, i) => (
                <span key={i} className="text-[10px] bg-green-50 text-green-800 px-2 py-0.5 rounded-full border border-green-200">
                  {w}
                </span>
              ))}
            </div>

            {/* Trails */}
            <p className="text-xs font-bold text-gray-800 mb-1">トレイル</p>
            {natureReserve.trails.map((t, i) => (
              <div key={i} className="bg-sand-50 rounded-lg p-2 mb-1">
                <p className="text-xs font-bold">{t.name}（{t.duration}）</p>
                <p className="text-[10px] text-gray-600">{t.route}</p>
              </div>
            ))}
            <p className="text-[10px] text-gray-500 mt-1 mb-3">
              難易度: 中程度。整備された道だが湿気と暑さに注意。水を最低1L持参。ガイド料: {natureReserve.guideFee}
            </p>

            {/* Highlights */}
            <p className="text-xs font-bold text-gray-800 mb-1">見どころ</p>
            <ul className="space-y-1">
              {natureReserve.highlights.map((h, i) => (
                <li key={i} className="text-xs text-gray-700">
                  <span className="text-green-600 mr-1">&#9679;</span>{h}
                </li>
              ))}
            </ul>
          </Accordion>
        </div>

        {/* Snorkeling */}
        <div className="mt-3">
          <Accordion
            id="snorkeling"
            title="シュノーケリング"
            subtitle="Rp 150,000-300,000/人（ボート・機材込み）"
            icon="🤿"
            forceOpen={forceOpenIds.has('snorkeling')}
          >
            <div className="space-y-2 mt-1">
              {natureReserve.snorkeling.map((s, i) => (
                <div key={i} className="bg-sand-50 rounded-lg p-2">
                  <p className="text-xs font-bold text-gray-800">{s.spot}</p>
                  <p className="text-[10px] text-gray-600">{s.detail}</p>
                </div>
              ))}
            </div>
          </Accordion>
        </div>
      </div>

      {/* ===== GREEN CANYON ===== */}
      <div id="green-canyon" ref={(el) => (sectionRefs.current['green-canyon'] = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">グリーンキャニオン</h2>
        <p className="text-xs text-gray-500 mb-4">Cukang Taneuh — 翡翠色の渓谷</p>

        {/* Highlight card */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">💎</span>
            <div>
              <p className="text-sm font-black text-gray-800">{greenCanyon.tagline}</p>
              <p className="text-xs text-gray-600">{greenCanyon.location}</p>
            </div>
          </div>
          <p className="text-xs text-gray-700 leading-relaxed">
            {greenCanyon.description}
          </p>
          <div className="mt-2 grid grid-cols-3 gap-2 text-center">
            <div className="bg-white rounded-lg p-1.5">
              <p className="text-[10px] text-gray-500">入場料</p>
              <p className="text-[10px] font-bold">{greenCanyon.entryFee}</p>
            </div>
            <div className="bg-white rounded-lg p-1.5">
              <p className="text-[10px] text-gray-500">ボート</p>
              <p className="text-[10px] font-bold">{greenCanyon.boatCharter}</p>
            </div>
            <div className="bg-white rounded-lg p-1.5">
              <p className="text-[10px] text-gray-500">営業</p>
              <p className="text-[10px] font-bold">{greenCanyon.hours}</p>
            </div>
          </div>
        </div>

        {/* Light conditions table */}
        <div className="bg-white rounded-2xl border border-sand-200 shadow-sm p-3 mb-4">
          <p className="text-xs font-bold text-gray-800 mb-2">光の条件 & 撮影タイミング</p>
          <table className="w-full text-[10px] border-collapse">
            <thead>
              <tr className="bg-sand-100">
                <th className="text-left p-1.5 font-bold">時間帯</th>
                <th className="text-left p-1.5 font-bold">光の状態</th>
                <th className="text-center p-1.5 font-bold">おすすめ</th>
              </tr>
            </thead>
            <tbody>
              {greenCanyon.lightConditions.map((lc) => (
                <tr key={lc.time} className="border-t border-sand-200">
                  <td className="p-1.5 font-bold whitespace-nowrap">{lc.time}</td>
                  <td className="p-1.5">{lc.light}</td>
                  <td className="p-1.5 text-center">{'★'.repeat(lc.rating)}{'☆'.repeat(5 - lc.rating)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-[10px] text-gray-500 mt-1">{greenCanyon.photoTips}</p>
        </div>

        <div className="space-y-3">
          {/* Boat tour */}
          <Accordion
            id="gc-boat"
            title="ボートツアー体験の流れ"
            subtitle={greenCanyon.duration}
            icon="🚣"
            defaultOpen
            forceOpen={forceOpenIds.has('gc-boat')}
          >
            <div className="space-y-2 mt-1">
              {greenCanyon.experience.map((item) => (
                <div key={item.step} className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                    {item.step}
                  </span>
                  <div>
                    <p className="text-xs font-bold text-gray-800">{item.title}</p>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Accordion>

          {/* Body rafting */}
          <Accordion
            id="gc-rafting"
            title="ボディラフティング"
            subtitle="Rp 175,000〜410,000/人"
            icon="🏊"
            forceOpen={forceOpenIds.has('gc-rafting')}
          >
            <table className="w-full text-[10px] border-collapse mt-1 mb-2">
              <thead>
                <tr className="bg-sand-100">
                  <th className="text-left p-1.5 font-bold">コース</th>
                  <th className="text-left p-1.5 font-bold">距離 / 時間</th>
                  <th className="text-left p-1.5 font-bold">料金</th>
                </tr>
              </thead>
              <tbody>
                {greenCanyon.bodyRafting.map((br) => (
                  <tr key={br.course} className="border-t border-sand-200">
                    <td className="p-1.5 font-bold">{br.course}</td>
                    <td className="p-1.5">{br.distance} / {br.duration}</td>
                    <td className="p-1.5">{br.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ul className="space-y-1">
              {greenCanyon.bodyRaftingDetails.map((d, i) => (
                <li key={i} className="text-xs text-gray-700">
                  <span className="text-green-600 mr-1">&#9679;</span>{d}
                </li>
              ))}
            </ul>
          </Accordion>

          {/* What to bring */}
          <Accordion
            id="gc-checklist"
            title="持ち物チェックリスト"
            subtitle="水着・防水バッグ・現金など"
            icon="🎒"
            forceOpen={forceOpenIds.has('gc-checklist')}
          >
            <ul className="space-y-1 mt-1">
              {greenCanyon.checklist.map((item, i) => (
                <li key={i} className="text-xs text-gray-700 flex gap-2">
                  <span className="text-green-600 flex-shrink-0">☐</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Accordion>

          {/* Rainy season closure */}
          <Accordion
            id="gc-rainy"
            title="雨季の閉鎖について"
            subtitle="10月〜4月は事前確認必須"
            icon="🌧️"
            variant="warning"
            forceOpen={forceOpenIds.has('gc-rainy')}
          >
            <div className="space-y-2 mt-1">
              {greenCanyon.rainySeasonInfo.map((info, i) => (
                <div key={i} className="bg-white rounded-lg p-2">
                  <p className="text-xs font-bold text-red-800">{info.condition}</p>
                  <p className="text-[10px] text-gray-600">{info.response}</p>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-gray-500 mt-2">
              雨季でも毎日閉鎖されるわけではない。乾季のような澄んだエメラルド色は期待できないが、水量が増えて迫力ある景色になることも。
            </p>
          </Accordion>
        </div>
      </div>

      {/* ===== ACTIVITIES ===== */}
      <div id="activities" ref={(el) => (sectionRefs.current.activities = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">アクティビティ</h2>
        <p className="text-xs text-gray-500 mb-4">断崖・サーフィン・渓流・村巡り</p>

        <div className="space-y-3">
          {/* Batu Hiu */}
          <Accordion
            id="activity-batu-hiu"
            title={batuHiu.name}
            subtitle={batuHiu.tagline}
            icon="🦈"
            badge="無料"
            forceOpen={forceOpenIds.has('activity-batu-hiu')}
          >
            <div className="grid grid-cols-2 gap-2 text-center mb-2 mt-1">
              <div className="bg-sand-50 rounded-lg p-1.5">
                <p className="text-[10px] text-gray-500">場所</p>
                <p className="text-[10px] font-bold">{batuHiu.location}</p>
              </div>
              <div className="bg-sand-50 rounded-lg p-1.5">
                <p className="text-[10px] text-gray-500">所要時間</p>
                <p className="text-[10px] font-bold">{batuHiu.duration}</p>
              </div>
            </div>
            <ul className="space-y-1">
              {batuHiu.highlights.map((h, i) => (
                <li key={i} className="text-xs text-gray-700">
                  <span className="text-ocean-600 mr-1">&#9679;</span>{h}
                </li>
              ))}
            </ul>
            <div className="mt-2 bg-red-50 rounded-lg p-2">
              <p className="text-[10px] font-bold text-red-800">安全注意</p>
              <p className="text-[10px] text-red-700">{batuHiu.safetyNote}</p>
            </div>
            <p className="text-[10px] text-gray-500 mt-2">
              <span className="font-bold">アクセス:</span> {batuHiu.access}
            </p>
          </Accordion>

          {/* Batu Karas */}
          <Accordion
            id="activity-batu-karas"
            title={batuKaras.name}
            subtitle={batuKaras.tagline}
            icon="🏄"
            forceOpen={forceOpenIds.has('activity-batu-karas')}
          >
            <p className="text-xs text-gray-700 mt-1 mb-2">{batuKaras.description}</p>

            <p className="text-xs font-bold text-gray-800 mb-1">サーフィン情報</p>
            <div className="grid grid-cols-2 gap-2 text-center mb-2">
              <div className="bg-sand-50 rounded-lg p-1.5">
                <p className="text-[10px] text-gray-500">レッスン</p>
                <p className="text-[10px] font-bold">{batuKaras.surfInfo.lessonPrice}</p>
              </div>
              <div className="bg-sand-50 rounded-lg p-1.5">
                <p className="text-[10px] text-gray-500">ボードレンタル</p>
                <p className="text-[10px] font-bold">{batuKaras.surfInfo.boardRental}</p>
              </div>
            </div>
            <ul className="space-y-1 mb-3">
              <li className="text-xs text-gray-700">
                <span className="text-ocean-600 mr-1">&#9679;</span>
                <span className="font-bold">メインブレイク:</span> {batuKaras.surfInfo.mainBreak}
              </li>
              <li className="text-xs text-gray-700">
                <span className="text-ocean-600 mr-1">&#9679;</span>
                <span className="font-bold">レベル:</span> {batuKaras.surfInfo.level}
              </li>
              <li className="text-xs text-gray-700">
                <span className="text-ocean-600 mr-1">&#9679;</span>
                <span className="font-bold">ベストシーズン:</span> {batuKaras.surfInfo.bestSeason}
              </li>
            </ul>

            <p className="text-xs font-bold text-gray-800 mb-1">サーフスクール</p>
            <div className="flex flex-wrap gap-1 mb-3">
              {batuKaras.surfInfo.schools.map((s, i) => (
                <span key={i} className="text-[10px] bg-ocean-50 text-ocean-800 px-2 py-0.5 rounded-full border border-ocean-200">
                  {s}
                </span>
              ))}
            </div>

            <p className="text-xs font-bold text-gray-800 mb-1">食事 & カフェ</p>
            <div className="space-y-1">
              {batuKaras.restaurants.map((r, i) => (
                <div key={i} className="bg-sand-50 rounded-lg p-2">
                  <p className="text-xs"><span className="font-bold">{r.name}</span> <span className="text-gray-500">({r.genre})</span></p>
                  <p className="text-[10px] text-gray-600">{r.detail}</p>
                </div>
              ))}
            </div>

            <p className="text-[10px] text-gray-500 mt-2">{batuKaras.nightlife}</p>
          </Accordion>

          {/* Citumang */}
          <Accordion
            id="activity-citumang"
            title={citumang.name}
            subtitle={citumang.tagline}
            icon="🏞️"
            badge={citumang.raftingPrice}
            forceOpen={forceOpenIds.has('activity-citumang')}
          >
            <div className="grid grid-cols-3 gap-2 text-center mb-2 mt-1">
              <div className="bg-sand-50 rounded-lg p-1.5">
                <p className="text-[10px] text-gray-500">距離</p>
                <p className="text-[10px] font-bold">{citumang.courseDistance}</p>
              </div>
              <div className="bg-sand-50 rounded-lg p-1.5">
                <p className="text-[10px] text-gray-500">所要</p>
                <p className="text-[10px] font-bold">{citumang.duration}</p>
              </div>
              <div className="bg-sand-50 rounded-lg p-1.5">
                <p className="text-[10px] text-gray-500">難易度</p>
                <p className="text-[10px] font-bold">{citumang.difficulty}</p>
              </div>
            </div>

            <ul className="space-y-1 mb-3">
              {citumang.highlights.map((h, i) => (
                <li key={i} className="text-xs text-gray-700">
                  <span className="text-ocean-600 mr-1">&#9679;</span>{h}
                </li>
              ))}
            </ul>

            <p className="text-xs font-bold text-gray-800 mb-1">グリーンキャニオン vs チトゥマン比較</p>
            <table className="w-full text-[10px] border-collapse mb-2">
              <thead>
                <tr className="bg-sand-100">
                  <th className="text-left p-1.5 font-bold">項目</th>
                  <th className="text-left p-1.5 font-bold">グリーンキャニオン</th>
                  <th className="text-left p-1.5 font-bold">チトゥマン</th>
                </tr>
              </thead>
              <tbody>
                {citumang.comparison.map((c) => (
                  <tr key={c.item} className="border-t border-sand-200">
                    <td className="p-1.5 font-bold">{c.item}</td>
                    <td className="p-1.5">{c.greenCanyon}</td>
                    <td className="p-1.5">{c.citumang}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="bg-red-50 rounded-lg p-2">
              <p className="text-[10px] font-bold text-red-800">参加制限</p>
              <p className="text-[10px] text-red-700">{citumang.restrictions}</p>
            </div>
          </Accordion>

          {/* Other attractions */}
          <Accordion
            id="activity-others"
            title="その他の見どころ"
            subtitle="カラピャック・マングローブ・洞窟・村巡り"
            icon="📍"
            forceOpen={forceOpenIds.has('activity-others')}
          >
            <div className="space-y-2 mt-1">
              {otherAttractions.map((a) => (
                <div key={a.id} className="bg-sand-50 rounded-lg p-2">
                  <p className="text-xs font-bold text-gray-800">{a.name}</p>
                  {a.alias && <p className="text-[10px] text-ocean-600">別名: {a.alias}</p>}
                  <div className="flex gap-3 mt-0.5">
                    <span className="text-[10px] text-gray-500">{a.location}</span>
                    <span className="text-[10px] text-sunset-600 font-bold">{a.fee}</span>
                  </div>
                  <p className="text-[10px] text-gray-600 mt-0.5">{a.detail}</p>
                </div>
              ))}
            </div>
          </Accordion>
        </div>
      </div>

      {/* ===== FOOD ===== */}
      <div id="food" ref={(el) => (sectionRefs.current.food = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">食事</h2>
        <p className="text-xs text-gray-500 mb-4">スンダ料理 & 新鮮シーフード</p>

        {/* Pasar Ikan highlight card */}
        <div className="bg-sunset-50 border border-sunset-200 rounded-2xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🐟</span>
            <div>
              <p className="text-sm font-black text-gray-800">{seafoodGuide.tagline}</p>
              <p className="text-xs text-gray-600">{seafoodGuide.location}</p>
            </div>
          </div>
          <p className="text-xs text-gray-700 leading-relaxed">
            {seafoodGuide.system}
          </p>
          <div className="mt-2 grid grid-cols-2 gap-2 text-center">
            <div className="bg-white rounded-lg p-1.5">
              <p className="text-[10px] text-gray-500">営業</p>
              <p className="text-[10px] font-bold">{seafoodGuide.hours}</p>
            </div>
            <div className="bg-white rounded-lg p-1.5">
              <p className="text-[10px] text-gray-500">価格帯</p>
              <p className="text-[10px] font-bold">{seafoodGuide.priceRange}</p>
            </div>
          </div>
          <p className="text-[10px] text-gray-500 mt-2">
            <span className="font-bold">Tips:</span> {seafoodGuide.budgetTip}
          </p>
        </div>

        <div className="space-y-3">
          {/* Seafood ordering system */}
          <Accordion
            id="food-seafood"
            title="シーフード注文システム & 価格表"
            subtitle="魚介をkg単位で選んで調理法を指定"
            icon="🦐"
            defaultOpen
            forceOpen={forceOpenIds.has('food-seafood')}
          >
            <table className="w-full text-[10px] border-collapse mt-1 mb-2">
              <thead>
                <tr className="bg-sand-100">
                  <th className="text-left p-1.5 font-bold">魚介類</th>
                  <th className="text-left p-1.5 font-bold">インドネシア語</th>
                  <th className="text-left p-1.5 font-bold">価格/kg</th>
                </tr>
              </thead>
              <tbody>
                {seafoodGuide.fishPrices.map((f) => (
                  <tr key={f.fish} className="border-t border-sand-200">
                    <td className="p-1.5 font-bold">{f.fish}</td>
                    <td className="p-1.5 text-gray-500">{f.indonesian}</td>
                    <td className="p-1.5">{f.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="text-xs font-bold text-gray-800 mb-1">パサール・イカンの人気店</p>
            {seafoodGuide.marketRestaurants.map((r, i) => (
              <p key={i} className="text-[10px] text-gray-700 bg-sand-50 rounded-lg p-1.5 mb-1">
                <span className="text-sunset-600 mr-1">&#9679;</span>{r}
              </p>
            ))}
          </Accordion>

          {/* Sundanese dishes */}
          <Accordion
            id="food-sundanese"
            title="スンダ料理の名物"
            subtitle="イカン・バカール、ナシ・リウェッ、ペペス..."
            icon="🍛"
            forceOpen={forceOpenIds.has('food-sundanese')}
          >
            <table className="w-full text-[10px] border-collapse mt-1">
              <thead>
                <tr className="bg-sand-100">
                  <th className="text-left p-1.5 font-bold">料理名</th>
                  <th className="text-left p-1.5 font-bold">説明</th>
                  <th className="text-left p-1.5 font-bold">価格</th>
                </tr>
              </thead>
              <tbody>
                {sundaneseDishes.map((d) => (
                  <tr key={d.name} className="border-t border-sand-200">
                    <td className="p-1.5 font-bold whitespace-nowrap">{d.name}</td>
                    <td className="p-1.5">{d.desc}</td>
                    <td className="p-1.5 whitespace-nowrap">{d.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Accordion>

          {/* Restaurant list */}
          <Accordion
            id="food-restaurants"
            title="おすすめレストラン & ワルン"
            subtitle="6軒の厳選レストラン"
            icon="🍽️"
            forceOpen={forceOpenIds.has('food-restaurants')}
          >
            <div className="space-y-2 mt-1">
              {restaurants.map((r) => (
                <div key={r.id} className="bg-sand-50 rounded-lg p-2">
                  <p className="text-xs font-bold text-gray-800">{r.name}</p>
                  <div className="flex gap-2 mt-0.5">
                    <span className="text-[10px] text-ocean-600">{r.type}</span>
                    <span className="text-[10px] text-sunset-600 font-bold">{r.price}</span>
                  </div>
                  <p className="text-[10px] text-gray-500">{r.location} / {r.hours}</p>
                  <p className="text-[10px] text-gray-600 mt-0.5">{r.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-[10px] text-gray-500 mt-2">{beerInfo}</p>
          </Accordion>
        </div>
      </div>

      {/* ===== ACCOMMODATION ===== */}
      <div id="stay" ref={(el) => (sectionRefs.current.stay = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">宿泊</h2>
        <p className="text-xs text-gray-500 mb-3">西ビーチ周辺のホームステイ & ゲストハウス</p>

        {/* Weekend pricing warning */}
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-3 mb-4">
          <p className="text-xs font-bold text-amber-800">週末・祝日 料金注意</p>
          <p className="text-xs text-amber-700 mt-1">{weekendWarning}</p>
        </div>

        <div className="space-y-3">
          {/* Budget */}
          <Accordion
            id="stay-budget"
            title="バジェット宿（Rp 80,000〜200,000）"
            subtitle="バックパッカー向けホームステイ"
            icon="🏠"
            defaultOpen
            forceOpen={forceOpenIds.has('stay-budget')}
          >
            <div className="space-y-2 mt-1">
              {budgetAccommodations.map((h) => (
                <div key={h.id} className={`rounded-lg p-2 ${h.recommended ? 'bg-green-50 border border-green-200' : 'bg-sand-50'}`}>
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-bold text-gray-800 flex-1">{h.name}</p>
                    {h.recommended && (
                      <span className="text-[10px] font-bold bg-green-600 text-white px-2 py-0.5 rounded-full">
                        おすすめ
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3 mt-0.5">
                    <span className="text-[10px] text-sunset-600 font-bold">{h.price}</span>
                    <span className="text-[10px] text-gray-500">{h.type}</span>
                  </div>
                  <p className="text-[10px] text-gray-600 mt-0.5">{h.features}</p>
                  {h.note && <p className="text-[10px] text-gray-500">{h.note}</p>}
                </div>
              ))}
            </div>
          </Accordion>

          {/* Mid-range */}
          <Accordion
            id="stay-midrange"
            title="ミッドレンジ宿（Rp 150,000〜500,000）"
            subtitle="ヴィラ・モダンゲストハウス"
            icon="🏨"
            forceOpen={forceOpenIds.has('stay-midrange')}
          >
            <div className="space-y-2 mt-1">
              {midrangeAccommodations.map((h) => (
                <div key={h.id} className="bg-sand-50 rounded-lg p-2">
                  <p className="text-xs font-bold text-gray-800">{h.name}</p>
                  <div className="flex gap-3 mt-0.5">
                    <span className="text-[10px] text-sunset-600 font-bold">{h.price}</span>
                    <span className="text-[10px] text-gray-500">{h.type}</span>
                  </div>
                  <p className="text-[10px] text-gray-600 mt-0.5">{h.features}</p>
                  {h.note && <p className="text-[10px] text-gray-500">{h.note}</p>}
                </div>
              ))}
            </div>
          </Accordion>
        </div>

        {/* Stay tips */}
        <div className="mt-4 bg-sand-50 rounded-xl p-3 border border-sand-200">
          <p className="text-xs font-bold text-gray-800 mb-1">宿選びのポイント</p>
          <ul className="space-y-1">
            {stayTips.map((tip, i) => (
              <li key={i} className="text-xs text-gray-700">
                <span className="text-ocean-600 mr-1">&#9679;</span>{tip}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ===== TRANSPORT ===== */}
      <div id="transport" ref={(el) => (sectionRefs.current.transport = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-1">交通</h2>
        <p className="text-xs text-gray-500 mb-4">バンドンから5-7時間。市内はバイクが最強</p>

        <div className="space-y-3">
          {/* Bandung → Pangandaran */}
          <Accordion
            id="transport-bandung"
            title="バンドン → パンガンダラン"
            subtitle="直行バス5-8時間 / 列車+バス"
            icon="🚌"
            defaultOpen
            forceOpen={forceOpenIds.has('transport-bandung')}
          >
            <table className="w-full text-[10px] border-collapse mt-1">
              <thead>
                <tr className="bg-sand-100">
                  <th className="text-left p-1.5 font-bold">手段</th>
                  <th className="text-left p-1.5 font-bold">所要時間</th>
                  <th className="text-left p-1.5 font-bold">料金</th>
                </tr>
              </thead>
              <tbody>
                {transportAccess.map((t) => (
                  <tr key={t.method} className="border-t border-sand-200">
                    <td className="p-1.5 font-bold">{t.method}</td>
                    <td className="p-1.5">{t.duration}</td>
                    <td className="p-1.5">{t.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-2 bg-green-50 rounded-lg p-2">
              <p className="text-[10px] font-bold text-green-800">おすすめルート</p>
              <p className="text-[10px] text-green-700">
                直行バス（Budiman）が最もシンプル。Cicaheum Terminalから直通。早朝発がベスト（渋滞回避）。
                快適さ重視なら列車（バンドン→バンジャール 3-4時間）+ バス（バンジャール→パンガンダラン 1.5-2.5時間）。
              </p>
            </div>
          </Accordion>

          {/* Local transport */}
          <Accordion
            id="transport-local"
            title="パンガンダラン市内の移動"
            subtitle="レンタルバイクが最強"
            icon="🏍️"
            forceOpen={forceOpenIds.has('transport-local')}
          >
            <div className="space-y-1.5 mt-1">
              {localTransport.map((t) => (
                <div key={t.type} className="bg-sand-50 rounded-lg p-2 text-xs">
                  <span className="font-bold">{t.type}</span>
                  <span className="text-sunset-600 ml-1">{t.price}</span>
                  <span className="block text-gray-500 text-[10px]">{t.desc}</span>
                </div>
              ))}
            </div>
            <div className="mt-2 bg-amber-50 rounded-lg p-2">
              <p className="text-[10px] font-bold text-amber-800">Googleマップ注意</p>
              <p className="text-[10px] text-amber-700">
                パンガンダラン周辺ではGoogleマップが不正確なことがある。地元の人に「GPS = Gunakan Penduduk Sekitar（近くの住民を使え）」と言われるほど。道に迷ったら地元民に聞くのが最善。
              </p>
            </div>
          </Accordion>

          {/* Banjar Station & trains to Yogyakarta */}
          <Accordion
            id="transport-banjar"
            title={banjarStation.name}
            subtitle="パンガンダラン → ジョグジャカルタの列車"
            icon="🚂"
            forceOpen={forceOpenIds.has('transport-banjar')}
          >
            <p className="text-xs text-gray-700 mt-1 mb-2">{banjarStation.description}</p>

            {/* Access to Banjar */}
            <p className="text-xs font-bold text-gray-800 mb-1">パンガンダラン → バンジャール</p>
            <div className="space-y-1 mb-3">
              {banjarStation.accessFromPangandaran.map((a, i) => (
                <div key={i} className="bg-sand-50 rounded-lg p-2 text-[10px]">
                  <span className="font-bold">{a.method}</span>
                  <span className="text-sunset-600 ml-1">{a.price}</span>
                  <span className="text-gray-500 ml-1">({a.duration})</span>
                  <span className="block text-gray-500">{a.note}</span>
                </div>
              ))}
            </div>

            {/* Train schedule */}
            <p className="text-xs font-bold text-gray-800 mb-1">バンジャール → ジョグジャカルタ（列車）</p>
            <table className="w-full text-[10px] border-collapse mb-2">
              <thead>
                <tr className="bg-sand-100">
                  <th className="text-left p-1.5 font-bold">列車名</th>
                  <th className="text-left p-1.5 font-bold">クラス</th>
                  <th className="text-left p-1.5 font-bold">出発</th>
                  <th className="text-left p-1.5 font-bold">料金</th>
                </tr>
              </thead>
              <tbody>
                {banjarStation.trainsToYogyakarta.map((t) => (
                  <tr key={t.name} className="border-t border-sand-200">
                    <td className="p-1.5 font-bold">{t.name}</td>
                    <td className="p-1.5">{t.class}</td>
                    <td className="p-1.5">{t.departure}</td>
                    <td className="p-1.5">{t.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Booking methods */}
            <p className="text-xs font-bold text-gray-800 mb-1">チケット予約方法</p>
            <div className="space-y-1 mb-2">
              {banjarStation.bookingMethods.map((b, i) => (
                <div key={i} className="bg-sand-50 rounded-lg p-1.5 text-[10px]">
                  <span className="font-bold">{b.method}:</span> <span className="text-gray-600">{b.detail}</span>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 rounded-lg p-2">
              <p className="text-[10px] font-bold text-amber-800">重要</p>
              <p className="text-[10px] text-amber-700">{banjarStation.importantNote}</p>
            </div>
          </Accordion>
        </div>
      </div>

      {/* ===== SAFETY ===== */}
      <div id="safety" ref={(el) => (sectionRefs.current.safety = el)} className="px-4 pb-6">
        <h2 className="text-xl font-black text-gray-800 mb-4">安全情報</h2>

        {/* Tsunami safety box */}
        <div className="bg-red-50 border border-red-300 rounded-2xl p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🌊</span>
            <div>
              <p className="text-sm font-black text-red-800">津波安全情報</p>
              <p className="text-xs text-red-600">{tsunamiSafety.certification}</p>
            </div>
          </div>
          <p className="text-xs text-gray-700 leading-relaxed mb-2">{tsunamiSafety.history}</p>

          <p className="text-xs font-bold text-gray-800 mb-1">整備済みインフラ</p>
          <ul className="space-y-0.5 mb-2">
            {tsunamiSafety.infrastructure.map((item, i) => (
              <li key={i} className="text-[10px] text-gray-700">
                <span className="text-red-600 mr-1">&#9679;</span>{item}
              </li>
            ))}
          </ul>

          <p className="text-xs font-bold text-gray-800 mb-1">避難行動指針</p>
          <div className="space-y-1">
            {tsunamiSafety.evacuationProtocol.map((step, i) => (
              <div key={i} className="flex gap-2">
                <span className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <p className="text-[10px] text-gray-700">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-2 bg-white rounded-lg p-2">
            <p className="text-[10px] font-bold text-red-800">旅行者へ</p>
            <p className="text-[10px] text-red-700">{tsunamiSafety.travelerAdvice}</p>
          </div>
        </div>

        {/* Safety alerts */}
        <SafetyAlerts alerts={safetyAlerts} />

        {/* Day 4 itinerary options */}
        <div className="mt-4 bg-sand-50 rounded-xl p-4 border border-sand-200">
          <p className="text-xs font-bold text-gray-800 mb-2">Day 4 モデルプラン（3つの選択肢）</p>

          {[modelItineraries.planA, modelItineraries.planB, modelItineraries.planC].map((plan, pi) => (
            <div key={pi} className="mb-3 last:mb-0">
              <p className="text-xs font-bold text-ocean-700 mb-1">{plan.title}</p>
              <div className="space-y-1">
                {plan.items.slice(0, 5).map((item, i) => (
                  <p key={i} className="text-[10px] text-gray-700">
                    <span className="font-bold text-gray-500">{item.time}</span> {item.title}
                    {item.desc && <span className="text-gray-500"> — {item.desc}</span>}
                  </p>
                ))}
                {plan.items.length > 5 && (
                  <p className="text-[10px] text-gray-400">...他 {plan.items.length - 5} 件</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Emergency contacts */}
        <div className="mt-4 bg-red-50 rounded-xl p-4 border border-red-200">
          <p className="text-xs font-bold text-red-800 mb-2">緊急連絡先</p>
          <div className="space-y-1 text-xs text-gray-700">
            {emergencyContacts.map((c, i) => (
              <p key={i}><span className="font-bold">{c.label}:</span> {c.number}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation links */}
      <div className="px-4 pb-8">
        <div className="flex flex-col gap-2">
          <Link
            to="/day/3"
            className="block w-full py-3 bg-ocean-600 text-white text-center text-sm font-bold rounded-xl"
          >
            Day 3 スケジュール →
          </Link>
          <Link
            to="/day/4"
            className="block w-full py-3 bg-ocean-600 text-white text-center text-sm font-bold rounded-xl"
          >
            Day 4 スケジュール →
          </Link>
          <Link
            to="/bandung"
            className="block w-full py-3 bg-sunset-600 text-white text-center text-sm font-bold rounded-xl"
          >
            バンドン ガイド →
          </Link>
          <Link
            to="/yogyakarta"
            className="block w-full py-3 bg-sunset-600 text-white text-center text-sm font-bold rounded-xl"
          >
            ジョグジャカルタ ガイド →
          </Link>
          <Link
            to="/"
            className="block w-full py-3 bg-sand-200 text-gray-700 text-center text-sm font-bold rounded-xl"
          >
            ホームに戻る
          </Link>
        </div>
      </div>
    </div>
  )
}
