import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import HeroImage from '../components/HeroImage'
import RouteMap from '../components/RouteMap'

const nightTimeline = [
  {
    time: '20:40',
    label: 'チャンギ空港到着',
    desc: 'シンガポール・チャンギ国際空港に到着。自動化ゲート（顔認証）で入国審査は約10秒。荷物を受け取ってMRTへ。',
    tips: [
      '入国審査は自動ゲート利用可（日本パスポート・ビザ不要30日間）',
      '荷物受取を含め約30-45分で出口へ',
    ],
    icon: '✈',
  },
  {
    time: '21:30',
    label: 'MRTでチャイナタウンへ',
    desc: 'チャンギ空港駅（CG2）→ タナメラ駅で乗り換え → チャイナタウン駅（NE4/DT19）まで約45分。MRT最終は23:30頃なので余裕あり。',
    tips: [
      'Visa/Mastercardのタッチ決済で改札をタップするだけ。EZ-Link不要',
      '【重要】JCBはMRT改札で使えない。Visa/Mastercardを持参',
      'タナメラ駅で同じホームの反対側の電車に乗り換え（改札を出ない）',
      '片道 約SGD 2.00-2.50（約220-280円）',
    ],
    icon: '🚇',
  },
  {
    time: '22:15',
    label: 'ホテルにチェックイン',
    desc: 'チャイナタウン駅周辺のホテルにチェックイン。荷物を置いたら夜の街へ。',
    icon: '🏨',
  },
  {
    time: '22:30',
    label: 'バクテー（肉骨茶）で夜食',
    desc: 'シンガポール名物バクテーを食べに行く。胡椒の効いた澄んだスープで豚のスペアリブを煮込んだ、シンガポールのソウルフード。ご飯と油条（揚げパン）と一緒に。',
    tips: [
      'Outram Ya Hua Bak Kut Teh: 朝7:00-深夜3:00（日曜〜0:00）。Tanjong Pagar駅から徒歩5分。チャイナタウンからも徒歩15分',
      'Founder Bak Kut Teh（Bugis店）: 18:00-翌2:00。ガーリックが効いた濃厚スタイル',
      '予算: 1人 SGD 12-20（約1,300-2,200円）。スペアリブ SGD 8.60〜 + ライス + 油条',
      'Song Fa（松發）はチャンギ空港T3にもあり（〜24:00）。到着直後に食べるのもアリ',
    ],
    icon: '🍖',
  },
  {
    time: '23:30',
    label: 'ホテルで就寝',
    desc: '明日の朝に備えて就寝。チャイナタウンの夜はネオンが美しい。',
    icon: '🌙',
  },
]

const morningTimeline = [
  {
    time: '07:30',
    label: 'カヤトーストで朝食',
    desc: 'シンガポールの朝食の定番、Ya Kun Kaya Toast。カヤジャム（ココナッツ＆パンダン）を塗ったカリカリトーストと、温泉卵、コピ（練乳コーヒー）のセット。',
    tips: [
      'Ya Kun Kaya Toast: Far East Square店（チャイナタウン/ラッフルズプレイス近く）7:30-15:30',
      'Set A（トースト+温泉卵2個+コーヒー）SGD 6.90（約760円）',
      '温泉卵は醤油をかけてトーストにつけて食べるのがシンガポール流',
    ],
    icon: '🍞',
  },
  {
    time: '08:15',
    label: 'チャイナタウン朝散策',
    desc: 'ホテル周辺のチャイナタウンを朝散策。パゴダ通り・テンプル通りの雰囲気を楽しむ。佛牙寺龍華院（Buddha Tooth Relic Temple）は金色の壮麗な仏教寺院で入場無料。',
    tips: [
      '佛牙寺龍華院: 9:00-12:00, 15:00-18:00。金ピカの内装は圧巻',
      'チャイナタウンの商店は9:00頃から開く。朝は地元の人々の生活が見られる',
    ],
    icon: '🏮',
  },
  {
    time: '09:00',
    label: 'Maxwell Food Centre でチキンライス',
    desc: 'シンガポールNo.1のホーカーセンター。天天海南鶏飯（Tian Tian）のチキンライスはミシュラン・ビブグルマン獲得。ジューシーな蒸し鶏とオイリーなご飯の組み合わせが絶品。',
    tips: [
      '天天海南鶏飯: 火-日 10:00-20:00（月休）。チキンライス SGD 5-6',
      '10:00前でも開いているストールは多い。混む前の朝がおすすめ',
      'Ah Tai（天天の元料理人の店）は行列が短くて同じクオリティ',
      'カード使えない店が多い。現金が少しあると安心（SGD 10-20程度）',
    ],
    icon: '🍗',
  },
  {
    time: '09:45',
    label: 'マーライオン公園',
    desc: 'チャイナタウンからラッフルズプレイス駅方面へ徒歩15分。シンガポールのシンボル、高さ8.6mのマーライオン像。対岸のマリーナベイサンズとの定番写真を撮影。入場無料。',
    icon: '🦁',
  },
  {
    time: '10:05',
    label: 'ヘリックスブリッジ → マリーナベイサンズ',
    desc: 'ウォーターフロントを歩き、DNA二重らせん構造のヘリックスブリッジ（全長280m）を渡る。橋を渡るとマリーナベイサンズ直結。アートサイエンスミュージアム（蓮の花型）も間近に。',
    tips: [
      'ヘリックスブリッジは無料・24時間通行可。4つの展望デッキからの眺めが絶景',
    ],
    icon: '🏙',
  },
  {
    time: '10:25',
    label: 'ガーデンズ・バイ・ザ・ベイ（スーパーツリー）',
    desc: 'MBSからドラゴンフライブリッジを渡って徒歩5分。高さ25-50mの人工ツリー18本が立ち並ぶ近未来庭園。スーパーツリー・グローブは入場無料。',
    tips: [
      'スーパーツリー・グローブ: 無料、5:00-翌2:00',
      '空中遊歩道（OCBC Skyway）はSGD 14。時間があれば',
    ],
    icon: '🌳',
  },
  {
    time: '10:55',
    label: 'MRTでチャンギ空港へ',
    desc: 'ベイフロント駅（DT16、MBS地下直結）からMRTでチャンギ空港へ。ラッフルズプレイス経由で約40-50分。',
    tips: [
      'Visa/Mastercardタップで乗車。帰りも同じカードを使うこと',
    ],
    icon: '🚇',
  },
  {
    time: '11:45',
    label: 'チャンギ空港到着・出国',
    desc: '空港到着。出国審査も自動ゲートで高速。免税店で最後の買い物も。Jewel Changi Airport（滝のある複合施設）はT1側。',
    tips: [
      '出国審査+セキュリティで約30分',
      'チャンギ空港の免税店・レストランは充実。早めに着いても退屈しない',
    ],
    icon: '✈',
  },
  {
    time: '14:50',
    label: '出発',
    desc: 'シンガポールを出発。次の目的地へ。',
    icon: '🛫',
  },
]

const mapSpots = [
  { name: 'チャンギ空港', lat: 1.3644, lng: 103.9915 },
  { name: 'チャイナタウン', lat: 1.2836, lng: 103.8443 },
  { name: 'Ya Hua バクテー', lat: 1.2742, lng: 103.8428 },
  { name: 'Maxwell Food Centre', lat: 1.2804, lng: 103.8447 },
  { name: 'マーライオン公園', lat: 1.2868, lng: 103.8545 },
  { name: 'マリーナベイサンズ', lat: 1.2864, lng: 103.8613 },
  { name: 'ガーデンズ・バイ・ザ・ベイ', lat: 1.2816, lng: 103.8636 },
]

function TimelineSection({ title, items, color = 'emerald' }) {
  return (
    <div className="px-4 pb-6">
      <h3 className={`text-lg font-bold text-gray-800 mb-4 border-l-[3px] border-${color}-500 pl-3`}>
        {title}
      </h3>
      <div className="space-y-0">
        {items.map((item, i) => (
          <div key={i} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className={`w-9 h-9 bg-${color}-600 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0`}>
                {item.icon}
              </div>
              {i < items.length - 1 && (
                <div className={`w-0.5 bg-${color}-200 flex-1 min-h-[20px]`} />
              )}
            </div>
            <div className="pb-5 flex-1 min-w-0">
              <div className="flex items-baseline gap-2">
                <span className={`text-xs font-bold text-${color}-600`}>{item.time}</span>
                <h4 className="text-sm font-bold text-gray-800">{item.label}</h4>
              </div>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
              {item.tips && (
                <ul className="mt-2 space-y-1">
                  {item.tips.map((tip, j) => (
                    <li key={j} className="text-xs text-gray-500 flex gap-1">
                      <span className={`text-${color}-500 flex-shrink-0`}>-</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function SingaporeTransit() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pb-14">
      <HeroImage
        url="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Marina_Bay_Sands_in_the_evening_-_20101120.jpg/960px-Marina_Bay_Sands_in_the_evening_-_20101120.jpg"
        alt="マリーナベイサンズ、シンガポール"
        overlay
      >
        <span className="text-xs font-bold bg-emerald-600 px-3 py-1 rounded-full inline-block mb-2">
          Bonus
        </span>
        <h1 className="text-2xl font-black">シンガポール1泊トランジット</h1>
        <p className="text-sm opacity-90 mt-1">バクテーの夜とマリーナベイの朝</p>
      </HeroImage>

      <div className="px-4 py-4">
        <p className="text-sm text-gray-700 leading-relaxed">
          夜着・翌午後発のトランジットでシンガポールを味わい尽くす1泊プラン。夜はチャイナタウンに泊まり、名物バクテーで夜食。翌朝はカヤトーストとチキンライスを食べ歩き、マーライオン→マリーナベイサンズ→ガーデンズを巡って空港へ。MRTはクレジットカードだけで乗れる。
        </p>

        {/* Quick info cards */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="bg-white border border-sand-200 rounded-lg p-2">
            <span className="text-xs text-gray-500 block">✈ 到着</span>
            <span className="text-sm font-bold">20:40（夜）</span>
          </div>
          <div className="bg-white border border-sand-200 rounded-lg p-2">
            <span className="text-xs text-gray-500 block">🛫 出発</span>
            <span className="text-sm font-bold">翌日 14:50</span>
          </div>
          <div className="bg-white border border-sand-200 rounded-lg p-2">
            <span className="text-xs text-gray-500 block">🏨 宿泊</span>
            <span className="text-sm font-bold">チャイナタウン1泊</span>
          </div>
          <div className="bg-white border border-sand-200 rounded-lg p-2">
            <span className="text-xs text-gray-500 block">💳 決済</span>
            <span className="text-sm font-bold">カードのみでOK</span>
          </div>
          <div className="bg-white border border-sand-200 rounded-lg p-2">
            <span className="text-xs text-gray-500 block">💰 交通費</span>
            <span className="text-sm font-bold">MRT全行程 約SGD 8</span>
          </div>
          <div className="bg-white border border-sand-200 rounded-lg p-2">
            <span className="text-xs text-gray-500 block">🚶 観光時間</span>
            <span className="text-sm font-bold">翌朝 約3時間</span>
          </div>
        </div>

        {/* MRT payment info */}
        <div className="mt-4 bg-amber-50 border border-amber-300 rounded-xl p-3">
          <p className="text-sm font-bold text-amber-800">MRTの支払い方法</p>
          <ul className="text-xs text-amber-700 mt-1 space-y-1">
            <li>Visa / Mastercard のタッチ決済カードを改札にタップするだけ</li>
            <li>Apple Pay / Google Pay でもOK（Visa/Mastercard連携）</li>
            <li className="font-bold">JCBはMRT改札では使えません。Visa/Mastercardを持参</li>
            <li>登録不要。EZ-Linkカード購入不要。外国発行カードそのまま使える</li>
          </ul>
        </div>
      </div>

      {/* Map */}
      <div className="px-4 pb-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2 border-l-[3px] border-emerald-500 pl-3">
          ルートマップ
        </h3>
        <RouteMap spots={mapSpots} pois={[]} height="300px" />
      </div>

      {/* Night timeline */}
      <div className="border-t border-sand-200 pt-6 mt-2">
        <TimelineSection title="Day 1 — 夜の到着" items={nightTimeline} color="indigo" />
      </div>

      {/* Morning timeline */}
      <div className="border-t border-sand-200 pt-6 mt-2">
        <TimelineSection title="Day 2 — 朝の観光 → 空港" items={morningTimeline} color="emerald" />
      </div>

      {/* Hotel recommendations */}
      <div className="px-4 pb-6 border-t border-sand-200 pt-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3 border-l-[3px] border-emerald-500 pl-3">
          宿泊（チャイナタウン周辺）
        </h3>
        <p className="text-xs text-gray-500 mb-3">マリーナベイまで徒歩15分 or MRT 1駅。バクテーの名店も徒歩圏内。</p>
        <div className="space-y-2">
          <div className="bg-white border border-sand-200 rounded-xl p-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-bold text-gray-800">Hotel 81 Chinatown</p>
                <p className="text-xs text-gray-500">Chinatown MRT 徒歩3分</p>
              </div>
              <span className="text-xs font-bold text-emerald-600">SGD 75-100</span>
            </div>
            <p className="text-xs text-gray-600 mt-1">181 New Bridge Road。シンプルだが清潔。Maxwell Food Centre徒歩5分。Agoda/Booking.comで早割SGD 65〜の場合も。</p>
          </div>
          <div className="bg-white border border-sand-200 rounded-xl p-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-bold text-gray-800">Hotel 81 Bugis</p>
                <p className="text-xs text-gray-500">Bugis MRT 徒歩5分</p>
              </div>
              <span className="text-xs font-bold text-emerald-600">SGD 70-95</span>
            </div>
            <p className="text-xs text-gray-600 mt-1">31 Jalan Sultan。アラブストリート/ハジレーン徒歩圏内。Founder BKT Bugis店も近い。</p>
          </div>
          <div className="bg-white border border-sand-200 rounded-xl p-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-bold text-gray-800">Hotel 81 Lavender</p>
                <p className="text-xs text-gray-500">Lavender MRT 徒歩3分</p>
              </div>
              <span className="text-xs font-bold text-emerald-600">SGD 65-90</span>
            </div>
            <p className="text-xs text-gray-600 mt-1">70 Lavender Street。チェーン最安価格帯。East-West Line直通で空港アクセス抜群。</p>
          </div>
          <div className="bg-white border border-sand-200 rounded-xl p-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-bold text-gray-800">CUBE Boutique Capsule Hotel</p>
                <p className="text-xs text-gray-500">Chinatown MRT 徒歩2分</p>
              </div>
              <span className="text-xs font-bold text-orange-600">SGD 40-55</span>
            </div>
            <p className="text-xs text-gray-600 mt-1">Smith Street。カプセルホテル。チャイナタウンの食街のど真ん中。最安で泊まるならここ。</p>
          </div>
        </div>
        <p className="text-[10px] text-gray-400 mt-2">※ SGD 45-55（約5,000円）で個室は厳しい。カプセルホテルか、Hotel 81を早割で予約するのがベスト。Agoda/Booking.comで要比較。</p>
      </div>

      {/* Food guide */}
      <div className="px-4 pb-6 border-t border-sand-200 pt-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3 border-l-[3px] border-emerald-500 pl-3">
          食べるべきもの
        </h3>
        <div className="space-y-3">
          <div className="bg-white border-l-4 border-orange-500 rounded-r-xl p-3">
            <p className="text-sm font-bold text-gray-800">🍖 バクテー（肉骨茶）</p>
            <p className="text-xs text-gray-600 mt-1">胡椒たっぷりの澄んだスープで豚スペアリブを煮込んだシンガポールの国民食。ご飯と油条（揚げパン）必須。</p>
            <div className="mt-2 space-y-1 text-xs text-gray-500">
              <p><strong>Outram Ya Hua</strong> — Tanjong Pagar駅5分。7:00-翌3:00。SGD 8.60〜。深夜OK</p>
              <p><strong>Founder BKT</strong> — Bugis店。18:00-翌2:00。ガーリック強め。SGD 9.90〜</p>
              <p><strong>Song Fa（松發）</strong> — チャンギ空港T3。〜24:00。到着直後に食べるならここ</p>
            </div>
          </div>
          <div className="bg-white border-l-4 border-yellow-500 rounded-r-xl p-3">
            <p className="text-sm font-bold text-gray-800">🍗 海南鶏飯（チキンライス）</p>
            <p className="text-xs text-gray-600 mt-1">蒸し鶏+鶏の脂で炊いたご飯+3種のソース。シンガポールの国民食その2。</p>
            <div className="mt-2 text-xs text-gray-500">
              <p><strong>天天海南鶏飯</strong> — Maxwell Food Centre。ミシュラン。SGD 5-6。火-日10:00-20:00</p>
            </div>
          </div>
          <div className="bg-white border-l-4 border-amber-500 rounded-r-xl p-3">
            <p className="text-sm font-bold text-gray-800">🍞 カヤトースト</p>
            <p className="text-xs text-gray-600 mt-1">カヤジャム（ココナッツ+パンダン）のカリカリトースト + 温泉卵 + コピ（練乳コーヒー）。</p>
            <div className="mt-2 text-xs text-gray-500">
              <p><strong>Ya Kun Kaya Toast</strong> — Far East Square店（ラッフルズプレイス近く）。Set A SGD 6.90</p>
            </div>
          </div>
        </div>
      </div>

      {/* MRT Route diagram */}
      <div className="px-4 pb-6 border-t border-sand-200 pt-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3 border-l-[3px] border-emerald-500 pl-3">
          MRT乗り換えガイド
        </h3>
        <div className="bg-gray-50 rounded-xl p-4">
          <div className="flex items-center gap-2 text-xs">
            <span className="bg-green-600 text-white px-2 py-0.5 rounded font-bold">EWL</span>
            <span className="text-gray-500">East-West Line（緑）</span>
          </div>

          <p className="text-xs font-bold text-gray-700 mt-3 mb-2">空港 → チャイナタウン</p>
          <div className="flex items-center gap-1 flex-wrap text-xs">
            <span className="bg-green-100 border border-green-400 rounded px-2 py-1 font-medium">Changi Airport<br /><span className="text-[10px] text-gray-500">CG2</span></span>
            <span className="text-gray-400">→</span>
            <span className="bg-yellow-100 border border-yellow-400 rounded px-2 py-1 font-medium">Tanah Merah<br /><span className="text-[10px] text-red-500">乗換（同ホーム）</span></span>
            <span className="text-gray-400">→</span>
            <span className="bg-green-100 border border-green-400 rounded px-2 py-1 font-medium">Outram Park<br /><span className="text-[10px] text-gray-500">EW16</span></span>
            <span className="text-gray-400">→</span>
            <span className="bg-purple-100 border border-purple-400 rounded px-2 py-1 font-medium">Chinatown<br /><span className="text-[10px] text-gray-500">NE4</span></span>
          </div>
          <p className="text-[10px] text-gray-500 mt-1">所要時間: 約45分</p>

          <p className="text-xs font-bold text-gray-700 mt-4 mb-2">チャイナタウン → マリーナベイ → 空港</p>
          <div className="flex items-center gap-1 flex-wrap text-xs">
            <span className="bg-purple-100 border border-purple-400 rounded px-2 py-1 font-medium">Chinatown<br /><span className="text-[10px] text-gray-500">NE4</span></span>
            <span className="text-gray-400">→</span>
            <span className="text-[10px] text-gray-400">徒歩15分</span>
            <span className="text-gray-400">→</span>
            <span className="bg-green-100 border border-green-400 rounded px-2 py-1 font-medium">Raffles Place<br /><span className="text-[10px] text-gray-500">EW14</span></span>
            <span className="text-gray-400">→</span>
            <span className="text-[10px] text-gray-400">観光後</span>
            <span className="text-gray-400">→</span>
            <span className="bg-green-100 border border-green-400 rounded px-2 py-1 font-medium">Changi Airport<br /><span className="text-[10px] text-gray-500">CG2</span></span>
          </div>
          <p className="text-[10px] text-gray-500 mt-1">朝はチャイナタウンからマーライオンまで徒歩15分。観光後にMRTで空港へ約40分。</p>

          <div className="mt-3 bg-white rounded-lg p-2 border border-sand-200">
            <p className="text-[10px] text-gray-600">
              <strong>タナメラ駅の乗り換え:</strong> チャンギ空港支線はタナメラ駅が終点。降りたら同じホームの反対側に来る電車に乗るだけ。改札を出る必要なし。
            </p>
          </div>
        </div>
      </div>

      {/* Cashless tips */}
      <div className="px-4 pb-6 border-t border-sand-200 pt-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3 border-l-[3px] border-emerald-500 pl-3">
          現金なしで過ごすコツ
        </h3>
        <div className="space-y-2">
          <div className="bg-white border border-sand-200 rounded-lg p-3">
            <p className="text-sm font-bold text-gray-800">🚇 MRT・ホテル</p>
            <p className="text-xs text-gray-600">Visa/Mastercardタッチ決済で乗車OK。ホテルもカード決済。</p>
          </div>
          <div className="bg-white border border-sand-200 rounded-lg p-3">
            <p className="text-sm font-bold text-gray-800">🍽 レストラン・カフェ</p>
            <p className="text-xs text-gray-600">Ya Kun、Song Fa等のチェーン店はカードOK。</p>
          </div>
          <div className="bg-white border border-sand-200 rounded-lg p-3">
            <p className="text-sm font-bold text-gray-800">⚠ ホーカーセンター</p>
            <p className="text-xs text-gray-600">Maxwell等の屋台は現金のみの店が多い。SGD 10-20の現金があると安心。空港の両替所でカードから少額引き出し可。</p>
          </div>
        </div>
      </div>

      {/* Budget summary */}
      <div className="px-4 pb-6 border-t border-sand-200 pt-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3 border-l-[3px] border-emerald-500 pl-3">
          予算めやす（2人分）
        </h3>
        <div className="bg-emerald-50 rounded-xl p-4">
          <div className="space-y-1 text-xs">
            <div className="flex justify-between"><span>ホテル1泊（Hotel 81等）</span><span className="font-bold">SGD 65-100</span></div>
            <div className="flex justify-between"><span>MRT全行程（2人×3回）</span><span className="font-bold">SGD 12-16</span></div>
            <div className="flex justify-between"><span>バクテー夕食（2人）</span><span className="font-bold">SGD 25-40</span></div>
            <div className="flex justify-between"><span>カヤトースト朝食（2人）</span><span className="font-bold">SGD 14</span></div>
            <div className="flex justify-between"><span>チキンライス等（2人）</span><span className="font-bold">SGD 10-16</span></div>
            <div className="border-t border-emerald-300 mt-2 pt-2 flex justify-between font-bold">
              <span>合計</span><span>SGD 126-186（約14,000-20,500円）</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-4">
        <Link
          to="/"
          className="block text-center bg-sand-100 rounded-xl py-4 text-sm font-medium text-gray-700"
        >
          &larr; ホームに戻る
        </Link>
      </div>
    </div>
  )
}
