import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import HeroImage from '../components/HeroImage'
import RouteMap from '../components/RouteMap'

const timeline = [
  {
    time: '08:40',
    label: 'チャンギ空港到着',
    desc: 'シンガポール・チャンギ国際空港に到着。2024年9月から全外国人が自動化ゲート（顔認証）を利用可能。日本のパスポートはビザ不要（30日間）。',
    tips: [
      '入国審査は自動ゲートで約10秒。列を含めて15-30分で通過',
      '荷物が最終目的地までスルーチェックインされているか確認。スルーなら荷物受取不要',
      'スルーでない場合は荷物を受け取り、再チェックイン時間を考慮すること',
    ],
    icon: '✈',
    lat: 1.3644,
    lng: 103.9915,
    name: 'チャンギ空港',
  },
  {
    time: '09:15',
    label: 'MRTでマリーナベイへ出発',
    desc: 'チャンギ空港駅（CG2）からMRT East-West Line（緑）に乗車。タナメラ駅（EW4）で同じホームの反対側の電車に乗り換え（改札を出ない）。ラッフルズプレイス駅（EW14）まで約35-40分。',
    tips: [
      '改札でVisaまたはMastercardのタッチ決済カードをタップするだけ（SimplyGo）。EZ-Linkカード購入不要',
      '【重要】JCBカードはMRT改札では使えない。Visa/Mastercardを持参すること',
      '登録不要。海外発行カードもそのまま使える。Apple Pay/Google Payも可',
      '片道 約SGD 2.00-2.50（約220-280円）+ 外国カード手数料 SGD 0.60/日',
      'タナメラ駅では電車を降りたら同じホームの向かい側の電車（Joo Koon/Tuas Link方面）に乗るだけ',
    ],
    icon: '🚇',
    lat: 1.3644,
    lng: 103.9915,
    name: 'チャンギ空港MRT駅',
  },
  {
    time: '09:55',
    label: 'ラッフルズプレイス駅到着',
    desc: 'ラッフルズプレイス駅（EW14）Exit Hから地上へ。金融街のビル群を抜け、フラトンホテル（英国植民地時代の建築）の横を通ってマーライオン公園へ。徒歩5-10分。',
    icon: '🚶',
    lat: 1.2840,
    lng: 103.8514,
    name: 'ラッフルズプレイス駅',
  },
  {
    time: '10:05',
    label: 'マーライオン公園',
    desc: 'シンガポールのシンボル、高さ8.6mのマーライオン像。口から水を吐く姿の向こうにマリーナベイサンズが見える、定番の撮影スポット。入場無料・24時間開放。',
    tips: [
      '対岸のマリーナベイサンズと一緒に撮るのが定番構図',
      '朝は逆光になりにくく写真撮影に最適',
    ],
    icon: '🦁',
    lat: 1.2868,
    lng: 103.8545,
    name: 'マーライオン公園',
  },
  {
    time: '10:25',
    label: 'ヘリックスブリッジ → マリーナベイサンズ',
    desc: 'マーライオン公園からウォーターフロントを歩き、DNA二重らせん構造のヘリックスブリッジ（全長280m）を渡る。4つの展望デッキからマリーナベイの360度パノラマ。橋を渡るとマリーナベイサンズ直結。',
    tips: [
      'ヘリックスブリッジは無料・24時間通行可',
      '展望デッキからの眺めが絶景。写真スポット多数',
      'マリーナベイサンズの外観とアートサイエンスミュージアム（蓮の花型）を間近で見られる',
    ],
    icon: '🏙',
    lat: 1.2864,
    lng: 103.8613,
    name: 'マリーナベイサンズ',
  },
  {
    time: '10:45',
    label: 'ガーデンズ・バイ・ザ・ベイ（スーパーツリー）',
    desc: 'マリーナベイサンズからドラゴンフライブリッジを渡って徒歩5分。高さ25-50mの人工ツリー18本が立ち並ぶ近未来的な庭園。地上のスーパーツリー・グローブは入場無料。',
    tips: [
      'スーパーツリー・グローブ: 無料、5:00-26:00（翌2:00）',
      '空中遊歩道（OCBC Skyway）はSGD 14（有料）。時間があれば',
      '滞在は20-30分でサクッと見られる',
    ],
    icon: '🌳',
    lat: 1.2816,
    lng: 103.8636,
    name: 'ガーデンズ・バイ・ザ・ベイ',
  },
  {
    time: '11:15',
    label: 'ベイフロント駅からMRTで空港へ',
    desc: 'ガーデンズ・バイ・ザ・ベイからベイフロント駅（DT16/CE1、マリーナベイサンズ地下直結）へ。Downtown Line → East-West Line経由でチャンギ空港駅へ戻る。約40-50分。',
    tips: [
      'ベイフロント駅はMBS地下のショッピングモールからアクセス',
      '帰りもVisaまたはMastercardをタップするだけ',
      'ラッフルズプレイス駅に戻って乗り換える方法（Bayfront→Raffles Place→Changi Airport）が分かりやすい',
    ],
    icon: '🚇',
    lat: 1.2823,
    lng: 103.8594,
    name: 'ベイフロント駅',
  },
  {
    time: '12:00',
    label: 'チャンギ空港到着・出国手続き',
    desc: '空港に戻り、出国手続き。シンガポールの出国審査も自動ゲート（顔認証）で高速。セキュリティチェックを通過してゲートへ。免税店も充実。',
    tips: [
      '出国審査+セキュリティで約30分を見込む',
      'チャンギ空港は免税店・レストラン・庭園が充実。早く着いても退屈しない',
      'Jewel Changi Airport（滝のある複合施設）はターミナル1側。時間があれば',
    ],
    icon: '✈',
    lat: 1.3644,
    lng: 103.9915,
    name: 'チャンギ空港',
  },
  {
    time: '14:50',
    label: '出発',
    desc: 'シンガポールを離れ、次の目的地へ。',
    icon: '🛫',
    lat: 1.3644,
    lng: 103.9915,
    name: 'チャンギ空港',
  },
]

const mapSpots = timeline
  .filter((t) => t.lat && t.lng)
  .reduce((acc, t) => {
    if (!acc.find((s) => s.name === t.name)) {
      acc.push({ name: t.name, lat: t.lat, lng: t.lng })
    }
    return acc
  }, [])

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
          Bonus: Transit
        </span>
        <h1 className="text-2xl font-black">シンガポール弾丸トランジット</h1>
        <p className="text-sm opacity-90 mt-1">6時間でマリーナベイを歩く</p>
      </HeroImage>

      <div className="px-4 py-4">
        <p className="text-sm text-gray-700 leading-relaxed">
          チャンギ空港で乗り継ぎの6時間を活用して、シンガポールの象徴マーライオンとマリーナベイサンズを巡るプラン。MRTの改札はクレジットカードのタッチ決済だけでOK。現金不要で身軽に回れる。
        </p>

        {/* Quick info cards */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="bg-white border border-sand-200 rounded-lg p-2">
            <span className="text-xs text-gray-500 block">✈ 到着</span>
            <span className="text-sm font-bold">08:40</span>
          </div>
          <div className="bg-white border border-sand-200 rounded-lg p-2">
            <span className="text-xs text-gray-500 block">🛫 出発</span>
            <span className="text-sm font-bold">14:50</span>
          </div>
          <div className="bg-white border border-sand-200 rounded-lg p-2">
            <span className="text-xs text-gray-500 block">🚇 移動手段</span>
            <span className="text-sm font-bold">MRT（電車）</span>
          </div>
          <div className="bg-white border border-sand-200 rounded-lg p-2">
            <span className="text-xs text-gray-500 block">💳 決済</span>
            <span className="text-sm font-bold">カードのみでOK</span>
          </div>
          <div className="bg-white border border-sand-200 rounded-lg p-2">
            <span className="text-xs text-gray-500 block">💰 交通費</span>
            <span className="text-sm font-bold">約SGD 5（約550円）</span>
          </div>
          <div className="bg-white border border-sand-200 rounded-lg p-2">
            <span className="text-xs text-gray-500 block">🚶 観光時間</span>
            <span className="text-sm font-bold">約1.5時間</span>
          </div>
        </div>

        {/* Important notice */}
        <div className="mt-4 bg-amber-50 border border-amber-300 rounded-xl p-3">
          <p className="text-sm font-bold text-amber-800">MRTの支払い方法</p>
          <ul className="text-xs text-amber-700 mt-1 space-y-1">
            <li>Visa / Mastercard のタッチ決済カードを改札にタップするだけ</li>
            <li>Apple Pay / Google Pay でもOK（Visa/Mastercard連携）</li>
            <li className="font-bold">JCBはMRT改札では使えません。Visa/Mastercardを持参</li>
            <li>登録不要。EZ-Linkカード購入不要。外国発行カードそのまま使える</li>
            <li>外国カード手数料: SGD 0.60/日（約70円）</li>
          </ul>
        </div>

        {/* Luggage warning */}
        <div className="mt-3 bg-red-50 border border-red-300 rounded-xl p-3">
          <p className="text-sm font-bold text-red-800">荷物の確認（重要）</p>
          <ul className="text-xs text-red-700 mt-1 space-y-1">
            <li><strong>スルーチェックイン（荷物が最終目的地まで）:</strong> 荷物受取不要。入国→観光→出国だけでOK</li>
            <li><strong>別切り航空券の場合:</strong> 荷物を受け取り、観光後に再チェックインが必要。観光時間が大幅に短くなる</li>
            <li>事前に航空会社に確認しておくこと</li>
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

      {/* Timeline */}
      <div className="px-4 pb-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4 border-l-[3px] border-emerald-500 pl-3">
          タイムライン
        </h3>
        <div className="space-y-0">
          {timeline.map((item, i) => (
            <div key={i} className="flex gap-3">
              {/* Timeline line */}
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                  {item.icon}
                </div>
                {i < timeline.length - 1 && (
                  <div className="w-0.5 bg-emerald-200 flex-1 min-h-[20px]" />
                )}
              </div>
              {/* Content */}
              <div className="pb-5 flex-1 min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-bold text-emerald-600">{item.time}</span>
                  <h4 className="text-sm font-bold text-gray-800">{item.label}</h4>
                </div>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
                {item.tips && (
                  <ul className="mt-2 space-y-1">
                    {item.tips.map((tip, j) => (
                      <li key={j} className="text-xs text-gray-500 flex gap-1">
                        <span className="text-emerald-500 flex-shrink-0">-</span>
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

          {/* Outbound route */}
          <p className="text-xs font-bold text-gray-700 mt-3 mb-2">行き: 空港 → マリーナベイ</p>
          <div className="flex items-center gap-1 flex-wrap text-xs">
            <span className="bg-green-100 border border-green-400 rounded px-2 py-1 font-medium">Changi Airport<br /><span className="text-[10px] text-gray-500">CG2</span></span>
            <span className="text-gray-400">→</span>
            <span className="bg-yellow-100 border border-yellow-400 rounded px-2 py-1 font-medium">Tanah Merah<br /><span className="text-[10px] text-red-500">乗り換え（同ホーム）</span></span>
            <span className="text-gray-400">→</span>
            <span className="text-gray-400 text-[10px]">約25分</span>
            <span className="text-gray-400">→</span>
            <span className="bg-green-100 border border-green-400 rounded px-2 py-1 font-medium">Raffles Place<br /><span className="text-[10px] text-gray-500">EW14</span></span>
          </div>
          <p className="text-[10px] text-gray-500 mt-1">所要時間: 約35-40分（乗り換え待ち含む）</p>

          {/* Return route */}
          <p className="text-xs font-bold text-gray-700 mt-4 mb-2">帰り: マリーナベイ → 空港</p>
          <div className="flex items-center gap-1 flex-wrap text-xs">
            <span className="bg-green-100 border border-green-400 rounded px-2 py-1 font-medium">Raffles Place<br /><span className="text-[10px] text-gray-500">EW14</span></span>
            <span className="text-gray-400">→</span>
            <span className="text-gray-400 text-[10px]">約25分</span>
            <span className="text-gray-400">→</span>
            <span className="bg-yellow-100 border border-yellow-400 rounded px-2 py-1 font-medium">Tanah Merah<br /><span className="text-[10px] text-red-500">Changi Airport行きに乗換</span></span>
            <span className="text-gray-400">→</span>
            <span className="bg-green-100 border border-green-400 rounded px-2 py-1 font-medium">Changi Airport<br /><span className="text-[10px] text-gray-500">CG2</span></span>
          </div>
          <p className="text-[10px] text-gray-500 mt-1">所要時間: 約35-40分</p>

          <div className="mt-3 bg-white rounded-lg p-2 border border-sand-200">
            <p className="text-[10px] text-gray-600">
              <strong>タナメラ駅の乗り換え:</strong> チャンギ空港支線はタナメラ駅が終点。降りたら同じホームの反対側に来る電車（Joo Koon / Tuas Link方面）に乗るだけ。改札を出る必要なし。待ち時間3-7分。
            </p>
          </div>
        </div>
      </div>

      {/* Practical tips */}
      <div className="px-4 pb-6 border-t border-sand-200 pt-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3 border-l-[3px] border-emerald-500 pl-3">
          現金なしで過ごすコツ
        </h3>
        <div className="space-y-2">
          <div className="bg-white border border-sand-200 rounded-lg p-3">
            <p className="text-sm font-bold text-gray-800">🚇 MRT</p>
            <p className="text-xs text-gray-600">Visa/Mastercardタッチ決済でそのまま乗れる</p>
          </div>
          <div className="bg-white border border-sand-200 rounded-lg p-3">
            <p className="text-sm font-bold text-gray-800">🍽 飲食</p>
            <p className="text-xs text-gray-600">マリーナベイサンズ周辺のカフェ・レストランはカード決済OK。ホーカーセンター（屋台街）は現金のみの店も多い</p>
          </div>
          <div className="bg-white border border-sand-200 rounded-lg p-3">
            <p className="text-sm font-bold text-gray-800">🏪 コンビニ</p>
            <p className="text-xs text-gray-600">7-Eleven等はカード・タッチ決済対応</p>
          </div>
          <div className="bg-white border border-sand-200 rounded-lg p-3">
            <p className="text-sm font-bold text-gray-800">📱 通信</p>
            <p className="text-xs text-gray-600">チャンギ空港のフリーWiFiが高速。短時間ならSIM不要。Google Mapsのオフラインマップを事前ダウンロード推奨</p>
          </div>
        </div>
      </div>

      {/* Walking route summary */}
      <div className="px-4 pb-6 border-t border-sand-200 pt-6">
        <h3 className="text-lg font-bold text-gray-800 mb-3 border-l-[3px] border-emerald-500 pl-3">
          徒歩ルートまとめ
        </h3>
        <div className="bg-emerald-50 rounded-xl p-4">
          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0">1</span>
              <span>ラッフルズプレイス駅 Exit H</span>
              <span className="text-gray-400 text-[10px]">徒歩5分 →</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0">2</span>
              <span className="font-bold">マーライオン公園</span>
              <span className="text-gray-400 text-[10px]">徒歩10分 →</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0">3</span>
              <span className="font-bold">ヘリックスブリッジ</span>
              <span className="text-gray-400 text-[10px]">徒歩5分 →</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0">4</span>
              <span className="font-bold">マリーナベイサンズ</span>
              <span className="text-gray-400 text-[10px]">徒歩5分 →</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0">5</span>
              <span className="font-bold">ガーデンズ・バイ・ザ・ベイ</span>
            </div>
          </div>
          <p className="text-[10px] text-gray-500 mt-3">全行程 約3.5km / すべて入場無料 / 所要約1.5時間</p>
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
