// Bali Guide — structured data from research notes
// Last updated: 2026-02-24

export const sections = [
  { id: 'overview', label: '概要' },
  { id: 'areas', label: 'エリア' },
  { id: 'transport', label: '交通' },
  { id: 'practical', label: '実用情報' },
  { id: 'stay', label: '宿泊' },
  { id: 'safety', label: '安全' },
]

export const mapSpots = [
  { name: 'ギリマヌク港', lat: -8.1628, lng: 114.4413 },
  { name: 'ロビナ', lat: -8.1522, lng: 115.0228 },
  { name: 'ウブド', lat: -8.5069, lng: 115.2624 },
  { name: 'クタ / レギアン', lat: -8.7220, lng: 115.1693 },
  { name: 'スミニャック', lat: -8.6874, lng: 115.1582 },
  { name: 'チャングー', lat: -8.6478, lng: 115.1385 },
  { name: 'サヌール', lat: -8.6872, lng: 115.2631 },
  { name: 'ヌサドゥア', lat: -8.8005, lng: 115.2311 },
  { name: 'ウルワツ', lat: -8.8291, lng: 115.0849 },
  { name: 'ジンバラン', lat: -8.7654, lng: 115.1592 },
  { name: 'デンパサール', lat: -8.6500, lng: 115.2167 },
  { name: 'アメッド', lat: -8.3487, lng: 115.6555 },
  { name: 'シデメン', lat: -8.4460, lng: 115.5010 },
  { name: 'ングラライ空港 (DPS)', lat: -8.7482, lng: 115.1672 },
]

export const mapPois = [
  { name: 'タナロット寺院', type: 'landmark', lat: -8.6212, lng: 115.0868, detail: '海上の寺院・夕日の名所' },
  { name: 'ウルワツ寺院', type: 'landmark', lat: -8.8291, lng: 115.0849, detail: '断崖の寺院・ケチャダンス' },
  { name: 'テガラランの棚田', type: 'landmark', lat: -8.4312, lng: 115.2788, detail: 'ウブド近郊・入場 Rp15,000〜' },
  { name: 'モンキーフォレスト', type: 'landmark', lat: -8.5189, lng: 115.2589, detail: '入場 Rp100,000〜' },
  { name: 'バリ博物館', type: 'landmark', lat: -8.6560, lng: 115.2220, detail: 'デンパサール・Puputan広場横' },
  { name: 'ティルタ・エンプル寺院', type: 'landmark', lat: -8.4154, lng: 115.3156, detail: '聖水の沐浴寺院' },
  { name: 'ATM BCA Kuta', type: 'atm', lat: -8.7200, lng: 115.1700, detail: 'BCA/BNI/Mandiri 24時間' },
  { name: 'BIMC Hospital Nusa Dua', type: 'pharmacy', lat: -8.7983, lng: 115.2280, detail: '24時間救急 +62-361-3000911' },
  { name: 'Siloam Hospital Kuta', type: 'pharmacy', lat: -8.7180, lng: 115.1720, detail: '24時間 +62-361-779911' },
]

export const budgetSummary = [
  { label: 'バリ観光税', value: 'Rp 150,000', note: '外国人1回入島時（必須）' },
  { label: 'バイクレンタル', value: 'Rp 70,000〜150,000', note: '1日（IDP必須）' },
  { label: '宿泊', value: 'Rp 150,000〜7,000,000+', note: 'ドミ〜高級リゾート' },
  { label: '食事', value: 'Rp 25,000〜200,000', note: 'ワルン〜レストラン' },
]

// ===== OVERVIEW =====

export const overviewFacts = [
  { label: '面積', value: '5,780 km2' },
  { label: '人口', value: '約420万人' },
  { label: '最高地点', value: 'アグン山 3,031m' },
  { label: '気候', value: '熱帯（乾季5-10月/雨季11-4月）' },
  { label: '平均気温', value: '27-30°C（年間）' },
  { label: '湿度', value: '約85%' },
]

export const historyTimeline = [
  { era: '〜14世紀', title: 'ヒンドゥー王国時代', desc: 'バリ島に独自のヒンドゥー王国が繁栄。稲作文化と寺院建設が発展' },
  { era: '1343年', title: 'マジャパヒト帝国', desc: 'ジャワ東部のマジャパヒト帝国がバリに植民地を建設。ヒンドゥー・ジャワ文化の基盤形成' },
  { era: '1520年頃', title: 'イスラム化とバリへの避難', desc: 'ジャワ島がイスラム化。ヒンドゥー貴族・僧侶・芸術家がバリに大量移住。現在のバリ文化の源流' },
  { era: '1906-1908年', title: 'ププタン（集団自決）', desc: 'オランダ軍侵攻に対し、バドゥン王国（1906年）とクルンクン王国（1908年）の王族が集団自決。約3,000人が犠牲に' },
  { era: '1945年', title: 'インドネシア独立', desc: 'オランダからの独立。バリはインドネシア共和国の一州となる' },
  { era: '2002年', title: 'バリ島爆弾テロ', desc: 'クタの繁華街で爆弾テロ。死者202名（多くが外国人観光客）。観光業に壊滅的打撃。2005年にも再度テロ発生' },
  { era: '2010年代〜', title: '観光復興と急成長', desc: 'デジタルノマドの聖地化、インフラ整備、空港拡張。年間600万人超の外国人が訪問' },
]

export const cultureInfo = [
  {
    id: 'tri-hita-karana',
    title: 'トリ・ヒタ・カラナ（Tri Hita Karana）',
    desc: 'バリ人の生活哲学。「幸福の三つの原因」の意。神と人間の調和（Parhyangan）、人間同士の調和（Pawongan）、人間と自然の調和（Palemahan）の三原則。建築・農業・共同体のすべてに浸透している',
  },
  {
    id: 'canang-sari',
    title: 'チャナン・サリ（Canang Sari / 毎日の供物）',
    desc: '椰子の葉で編んだ小さなトレイに色とりどりの花、線香、スナック、硬貨を載せた日常の供物。寺院、家の玄関、店先、車のダッシュボードにまで置かれる。地面の供物を踏まないよう注意',
  },
  {
    id: 'nyepi',
    title: 'ニュピ（Nyepi / 静寂の日）',
    desc: 'バリ・ヒンドゥー暦の新年。24時間の完全沈黙・断食・瞑想。外出禁止、照明制限、商業活動停止。ングラライ空港も24時間閉鎖される。前夜にはオゴオゴ（巨大な鬼の張りぼて）パレードが行われる',
  },
  {
    id: 'galungan',
    title: 'ガルンガン & クニンガン',
    desc: 'ガルンガン: 善（ダルマ）が悪（アダルマ）に勝利した日。祖先の霊が地上に戻る。ペンジョール（竹のデコレーション）が道路脇に並ぶ。クニンガン: 10日後に祖先が天に帰る日。210日周期（ウク暦）',
  },
  {
    id: 'melasti',
    title: 'ムラスティ（Melasti）',
    desc: 'ニュピの3日前に行われる浄化の儀式。寺院の御神体を海に運び清める。白装束のバリ人の大行列が海岸に向かう壮大な光景',
  },
]

export const casteSystem = [
  { caste: 'ブラフマナ（Brahmana）', color: '白', role: '僧侶・宗教指導者', title: 'Ida Bagus / Ida Ayu', pct: '約5%' },
  { caste: 'クシャトリヤ（Ksatriya）', color: '赤', role: '王族・貴族・武士', title: 'Anak Agung / Cokorda / Dewa', pct: '約5%' },
  { caste: 'ワイシャ（Waisya）', color: '黄', role: '商人・行政官', title: 'Gusti', pct: '約5%' },
  { caste: 'スードラ（Sudra）', color: '黒', role: '農民・労働者（最多数派）', title: 'Wayan / Made / Nyoman / Ketut', pct: '約85%' },
]

// ===== AREAS =====

export const areas = [
  {
    id: 'gilimanuk',
    name: 'ギリマヌク',
    tagline: 'フェリー到着地・西バリの玄関口',
    character: 'ジャワ島からのフェリーが着く通過点。西バリ国立公園の入口でもある',
    bestFor: 'フェリー到着者の中継地点、西バリ国立公園探訪',
    priceLevel: '安い',
    keyLandmarks: ['ギリマヌク港（24時間運航）', '西バリ国立公園（20分）', 'ムンジャンガン島（ダイビングの名所）', 'ギリマヌク考古学博物館', 'プムトゥラン・ビーチ'],
    distances: { toUbud: '129km / 約3.5時間', toKuta: '132km / 約3時間', toLovina: '76km / 約2時間', toAirport: '140km / 約3.5時間' },
    accommodation: 'Rp 150,000〜400,000（簡易宿・通過点なので宿泊施設は限定的）',
    tips: 'ほとんどの旅行者はここで泊まらず南部へ直行。ただし西バリ国立公園に行くならここが最寄り',
  },
  {
    id: 'lovina',
    name: 'ロビナ',
    tagline: '北海岸のドルフィン・ウォッチング',
    character: '静かな北海岸の漁村エリア。黒砂ビーチと野生イルカで有名。南部の喧騒とは無縁',
    bestFor: '静かに過ごしたい人、イルカ好き、シュノーケリング、温泉',
    priceLevel: '安い〜中',
    keyLandmarks: ['ドルフィンツアー（Rp 100,000〜/人・早朝）', 'バンジャール温泉（Air Panas Banjar / Rp 25,000）', 'バンジャール仏教寺院（Rp 25,000）', 'ギットギット滝（車30分）', 'プランクトンツアー（生物発光）'],
    distances: { toGilimanuk: '76km / 約2時間', toUbud: '70km / 約2.5時間', toAirport: '90km / 約3時間' },
    accommodation: 'Rp 200,000〜900,000（ゲストハウス〜中級ホテル）',
    tips: 'カリブクブク地区が中心。ドルフィンツアーは早朝5:30出発。前泊がベスト',
  },
  {
    id: 'ubud',
    name: 'ウブド',
    tagline: '文化と芸術の中心・棚田の景色',
    character: 'バリ文化の心臓部。ヨガ・アート・伝統舞踊・棚田・寺院が凝縮。スピリチュアルな雰囲気',
    bestFor: '文化体験、ヨガ・ウェルネス、アート好き、自然散策、カップル',
    priceLevel: '中〜高',
    keyLandmarks: [
      'テガラランの棚田（入場 Rp 15,000〜50,000）',
      'モンキーフォレスト（入場: 平日 Rp 100,000 / 週末 Rp 120,000）',
      'ティルタ・エンプル寺院（聖水の沐浴）',
      'ウブド王宮（Puri Saren / 毎晩の伝統舞踊）',
      'ウブドアートマーケット',
      'チャンプアン・リッジウォーク（無料の絶景散歩道）',
      'ゴア・ガジャ（象の洞窟寺院）',
    ],
    distances: { toAirport: '40km / 1〜1.5時間', toKuta: '35km / 1〜1.5時間', toSanur: '25km / 45分' },
    accommodation: 'Rp 200,000〜5,000,000+（ゲストハウス〜高級ヴィラ）',
    tips: 'Grab/GoJekの台数が少なめ。1日チャーターが効率的。中心部は歩いて回れるが棚田や寺院は車/バイクが必要',
  },
  {
    id: 'kuta-legian-seminyak',
    name: 'クタ / レギアン / スミニャック',
    tagline: 'ビーチ・ナイトライフ・ショッピング',
    character: 'バリ観光発祥の地。空港至近。クタは格安バックパッカー向け、レギアンは中間、スミニャックは洗練されたカフェ・ブティック街',
    bestFor: 'ビーチ、サーフィン、ナイトライフ、ショッピング、初心者',
    priceLevel: 'クタ=安い / スミニャック=中〜高',
    keyLandmarks: ['クタ・ビーチ（サーフィン発祥地）', 'レギアン・ダブルシックスビーチ（ナイトライフの中心）', 'スミニャック・ブティック通り（Jl. Oberoi / Jl. Kayu Aya）', 'ビーチウォーク・ショッピングセンター（クタ）', 'ポテト・ヘッド・ビーチクラブ（スミニャック）'],
    distances: { toAirport: '3-10km / 10〜35分', toUbud: '35km / 1〜1.5時間', toCanggu: '12km / 30〜45分' },
    accommodation: 'クタ: Rp 100,000〜500,000 / スミニャック: Rp 500,000〜3,000,000+',
    tips: '空港から最も近い滞在エリア。交通渋滞がひどい。クタの客引きは激しめ。スミニャック北部はおしゃれだが歩きにくい',
  },
  {
    id: 'canggu',
    name: 'チャングー',
    tagline: 'デジタルノマドの聖地・サーフ天国',
    character: '2010年代に急成長したヒップなエリア。コワーキング、サーフ、ヨガ、ヴィーガンカフェが集中。国際色豊か',
    bestFor: 'デジタルノマド、サーファー、ヨガ好き、カフェ巡り、長期滞在',
    priceLevel: '中',
    keyLandmarks: ['バトゥ・ボロン・ビーチ（初心者サーフ）', 'エコービーチ（中級サーフ）', 'タナロット寺院（車15分・海上の寺院・夕日）', 'コワーキング: Outpost / BWork / Tribal'],
    distances: { toAirport: '20km / 45〜60分', toSeminyak: '8km / 20〜30分', toUbud: '30km / 1時間' },
    accommodation: 'Rp 150,000〜2,500,000（ドミ〜ヴィラ）',
    coworking: 'Outpost: Rp 700,000〜2,500,000/月 / BWork: Rp 900,000〜3,200,000/月 / 1日パス: Rp 180,000〜',
    tips: 'サーフレッスン Rp 300,000〜500,000/回。月額のヴィラ+バイクが長期滞在の定番。交通渋滞が年々悪化中',
  },
  {
    id: 'sanur',
    name: 'サヌール',
    tagline: '穏やかな東海岸ビーチ・ファミリー向け',
    character: 'リーフに守られた穏やかなビーチ。欧米シニアとファミリーに人気。南部の喧騒から離れた落ち着いた雰囲気',
    bestFor: 'ファミリー、シニア、静かに過ごしたい人、ヌサ島へのボート乗り場',
    priceLevel: '中',
    keyLandmarks: ['サヌール・ビーチプロムナード（遊歩道）', 'サヌール港（ヌサ・ペニダ/レンボンガン行きファストボート）', 'ル・マイヨール美術館', 'ハーディーズ・ショッピングセンター'],
    distances: { toAirport: '15km / 25〜35分', toUbud: '25km / 45分', toKuta: '12km / 25分' },
    accommodation: 'Rp 300,000〜2,500,000（ゲストハウス〜リゾート）',
    tips: 'ヌサ島行きのファストボートはここから出発。朝早い便が多いので前泊推奨',
  },
  {
    id: 'nusa-dua',
    name: 'ヌサドゥア',
    tagline: '高級リゾートの楽園',
    character: 'インドネシア政府が計画開発した高級リゾートエンクレーブ（ITDC管理区域）。白砂ビーチ、ゲートコミュニティ、5つ星ホテルが集中',
    bestFor: 'ラグジュアリー旅行者、ハネムーン、ゴルフ、家族連れ',
    priceLevel: '高',
    keyLandmarks: ['ITDC リゾートエリア（19の国際5つ星ブランド）', 'ウォーター・ブロー（断崖に打ち付ける波・無料）', 'バリ・コレクション（ショッピングモール）', 'バリ・ナショナル・ゴルフクラブ', 'ヌサドゥア・ビーチ'],
    distances: { toAirport: '12km / 20〜30分', toUbud: '40km / 1.5時間', toUluwatu: '20km / 40分' },
    accommodation: 'Rp 1,500,000〜10,000,000+（主に5つ星リゾート）',
    tips: 'St. Regis、Ritz-Carlton、Conrad、Westin、Sofitel等が集中。リゾート外には安い飲食店もある',
  },
  {
    id: 'uluwatu',
    name: 'ウルワツ',
    tagline: '断崖絶壁の寺院・サーフの聖地',
    character: 'バリ南端の石灰岩の断崖。壮大な海の景色とサンセット。上級者向けサーフスポットが点在',
    bestFor: 'サーファー（中〜上級）、絶景好き、静かなヴィラ滞在',
    priceLevel: '中〜高',
    keyLandmarks: [
      'ウルワツ寺院（入場 Rp 50,000 / ケチャダンス Rp 150,000）',
      'ケチャダンス（18:00 & 19:00 / 約1時間 / 月〜日）',
      'パダンパダンビーチ（映画「食べて祈って恋をして」のロケ地）',
      'シングル・フィン（崖上のサーフバー・日曜サンセットパーティ）',
    ],
    distances: { toAirport: '18km / 30〜45分', toKuta: '20km / 35〜50分', toJimbaran: '12km / 25分' },
    accommodation: 'Rp 300,000〜5,000,000+（ゲストハウス〜クリフトップヴィラ）',
    tips: 'エリアが広く交通手段がないと不便。バイクか専用車が必須。寺院ではサルに注意（眼鏡・帽子を奪われる）',
  },
  {
    id: 'jimbaran',
    name: 'ジンバラン',
    tagline: '夕日とシーフードの浜辺ディナー',
    character: '空港のすぐ南。美しい湾とビーチ沿いのシーフードカフェが名物。落ち着いた雰囲気',
    bestFor: 'シーフード好き、サンセット鑑賞、空港近くでの滞在',
    priceLevel: '中',
    keyLandmarks: ['ジンバランビーチのシーフードカフェ群（夕日ディナー）', 'ジンバラン魚市場（Pasar Ikan Kedonganan）', 'ガルーダ・ウィスヌ・クンチャナ像（GWK文化公園）'],
    distances: { toAirport: '5km / 10〜15分', toKuta: '8km / 15〜25分', toUluwatu: '12km / 25分' },
    accommodation: 'Rp 400,000〜5,000,000+（中級ホテル〜高級リゾート）',
    seafoodDinner: 'ビーチカフェ: Rp 90,000〜600,000/人（内容による。ロブスター付きは Rp 700,000〜）',
    tips: '夕方17:00頃に到着し日没を見ながらの食事がベスト。レストランは客引きが激しいが値段は事前にメニュー確認',
  },
  {
    id: 'denpasar',
    name: 'デンパサール',
    tagline: 'バリの州都・ローカルな一面',
    character: 'バリの行政・商業の中心地。観光地ではないが、バリのリアルな生活が見られる。歴史的建造物もある',
    bestFor: 'ローカル体験、市場巡り、歴史好き',
    priceLevel: '安い',
    keyLandmarks: ['ププタン広場（1906年の集団自決を記念）', 'バドゥン市場（バリ最大の伝統市場）', 'バリ博物館（Rp 50,000）', 'バリ・アートセンター', 'ジャガットナタ寺院'],
    distances: { toAirport: '13km / 25〜40分', toUbud: '25km / 45〜60分', toSanur: '5km / 10〜15分' },
    accommodation: 'Rp 150,000〜500,000（ビジネスホテル・ゲストハウス）',
    tips: '観光客向けではないが物価は最安。バドゥン市場は早朝がベスト。渋滞がひどい',
  },
  {
    id: 'amed',
    name: 'アメッド',
    tagline: '静かな北東海岸・ダイビングの宝庫',
    character: 'バリ北東の静かな漁村。透明度の高い海でのダイビング・シュノーケリングが目的。開発が進んでおらず素朴',
    bestFor: 'ダイバー、シュノーケラー、静けさを求める人',
    priceLevel: '安い〜中',
    keyLandmarks: [
      '日本軍の沈船ポイント（深度6-12m / シュノーケル可 / 入場 Rp 25,000-30,000）',
      'USSリバティ号沈船（トゥランベン / 車20分 / 世界的ダイブサイト）',
      'ジュメルック湾（サンゴ礁シュノーケリング）',
      'アメッドのサンライズ＆アグン山ビュー',
    ],
    distances: { toUbud: '65km / 2〜2.5時間', toAirport: '85km / 2.5〜3時間', toSidemen: '40km / 1.5時間' },
    accommodation: 'Rp 200,000〜2,000,000（ゲストハウス Rp 450,000〜 / リゾート Rp 900,000〜）',
    divingPrices: 'ファンダイブ: Rp 300,000〜 / 体験ダイブ: Rp 700,000〜 / OW取得: Rp 3,100,000〜',
    tips: 'ATMが少ない。現金を多めに持参。Grab/GoJekはほぼ使えない。バイクかチャーター車が必要',
  },
  {
    id: 'nusa-islands',
    name: 'ヌサ・ペニダ / レンボンガン / チュニンガン',
    tagline: '絶景の離島トリオ',
    character: 'バリ本島の南東に浮かぶ3島。断崖絶壁の絶景、マンタ、透明な海。ペニダが最大で最も見所が多い',
    bestFor: '絶景スポット巡り、ダイビング（マンタ）、冒険好き',
    priceLevel: '安い〜中',
    keyLandmarks: [
      'クリンキンビーチ（T-Rex型の断崖・ヌサペニダ最有名スポット）',
      'ブロークンビーチ（円形の断崖・天然アーチ）',
      'エンジェルズ・ビラボン（天然インフィニティプール）',
      'マンタポイント（ダイビング・マンタレイ遭遇率高）',
      'クリスタルベイ（シュノーケリング・夕日）',
      'ドリームビーチ（レンボンガン）',
      'イエローブリッジ（レンボンガン↔チュニンガン間の橋）',
    ],
    access: 'サヌール港からファストボート 30-40分（Rp 106,000〜 / 片道）',
    entryFee: '島入域料: 大人 Rp 25,000 / 子供 Rp 15,000（3島共通・カード決済のみ）',
    accommodation: 'Rp 150,000〜2,000,000（ゲストハウス〜リゾート）',
    tips: 'ヌサペニダの道路は悪路が多い。バイク運転経験がない人はツアー参加推奨。日帰り可能だが1泊がベター',
  },
  {
    id: 'sidemen',
    name: 'シデメン',
    tagline: '静かな棚田の隠れ家',
    character: 'カランガスム県の東バリ。アグン山を背景にした美しい棚田。ウブドの混雑を嫌う人の代替地',
    bestFor: 'ウブドの雰囲気を人混みなしで味わいたい人、棚田トレッキング、織物体験',
    priceLevel: '安い〜中',
    keyLandmarks: [
      'シデメン棚田トレッキング（入場 Rp 25,000〜）',
      'アグン山の眺望',
      'イカット織り工房見学',
      'トゥカッド・ウンダ渓谷',
    ],
    distances: { toUbud: '35km / 1.5〜2時間', toAirport: '50km / 2時間', toAmed: '40km / 1.5時間' },
    accommodation: 'Rp 200,000〜1,500,000（ホームステイ〜棚田ビューヴィラ）',
    tips: '公共交通はほぼなし。バイクかチャーター車が必要。ATMも限定的なので現金持参',
  },
]

// ===== TRANSPORT =====

export const gilimanukDistances = [
  { destination: 'ロビナ（北海岸）', distance: '76 km', time: '約2時間', route: '海岸沿い国道を東へ' },
  { destination: 'ウブド', distance: '129 km', time: '約3.5時間', route: '南下してバイパス経由' },
  { destination: 'クタ / 空港', distance: '132 km', time: '約3〜3.5時間', route: '南海岸バイパス経由' },
  { destination: 'デンパサール', distance: '128 km', time: '約3時間', route: 'ウブン・バスターミナル行き' },
  { destination: 'サヌール', distance: '130 km', time: '約3〜3.5時間', route: 'デンパサール経由' },
  { destination: 'チャングー', distance: '115 km', time: '約2.5〜3時間', route: '南海岸バイパス経由' },
]

export const gilimanukTransportOptions = [
  { mode: '公共バス / ミニバス', price: 'Rp 60,000〜80,000', time: '4〜5時間', note: 'ウブン・バスターミナル（デンパサール）行き。発車は満席次第。そこからGrab/GoJekで目的地へ' },
  { mode: 'チャーター車（港の客引き）', price: 'Rp 500,000〜800,000', time: '3〜3.5時間', note: '値段交渉必須。事前にGrab等で相場を確認しておくこと' },
  { mode: 'Peramaシャトル', price: 'Rp 100,000〜175,000', time: '4〜5時間', note: '要事前予約。ウブド・クタ等の主要拠点まで。本数は限定的' },
  { mode: 'Grab / GoJek', price: 'Rp 400,000〜600,000', time: '3〜3.5時間', note: 'ギリマヌクでの配車は難しい場合あり。台数が少ないエリア' },
]

export const airportInfo = {
  name: 'ングラライ国際空港（I Gusti Ngurah Rai International Airport）',
  code: 'DPS',
  location: 'バリ南部トゥバン地区。デンパサール中心部から約13km',
  terminals: '国内線ターミナル・国際線ターミナルの2棟（徒歩圏内・Festival Plaza で接続）',
  operatingHours: '24時間',
  distanceToCities: [
    { city: 'クタ', time: '10〜15分', distance: '3-4km' },
    { city: 'スミニャック', time: '25〜35分', distance: '8km' },
    { city: 'チャングー', time: '45〜60分', distance: '20km' },
    { city: 'サヌール', time: '25〜35分', distance: '15km' },
    { city: 'ウブド', time: '60〜90分', distance: '40km' },
    { city: 'ヌサドゥア', time: '20〜30分', distance: '12km' },
    { city: 'ウルワツ', time: '30〜45分', distance: '18km' },
  ],
  transportOptions: [
    { mode: '空港タクシー（固定料金）', price: 'Rp 80,000〜350,000', note: '到着ロビーのカウンターで行き先を告げる。固定料金表あり' },
    { mode: 'Grab / GoJek', price: 'Rp 50,000〜250,000', note: 'ターミナル内でのピックアップ不可。指定のピックアップゾーンまで徒歩が必要' },
    { mode: 'ホテル送迎', price: '無料〜Rp 200,000', note: '多くの中〜高級ホテルが送迎サービスを提供' },
  ],
}

export const rideHailing = {
  apps: ['Grab（最も普及）', 'GoJek（GoPay連携で便利）'],
  availability: '南バリ（クタ・スミニャック・チャングー・ジンバラン・ヌサドゥア）= 台数多い / ウブド = やや少ない / 北部・東部（ロビナ・アメッド・シデメン）= ほぼ使えない',
  typicalFares: [
    { route: '空港 → スミニャック', fare: 'Rp 90,000〜180,000' },
    { route: '空港 → ウブド', fare: 'Rp 200,000〜350,000' },
    { route: 'スミニャック → ウブド', fare: 'Rp 200,000〜350,000' },
    { route: 'クタ内の短距離（3-5km）', fare: 'Rp 20,000〜50,000' },
    { route: 'チャングー → スミニャック', fare: 'Rp 50,000〜100,000' },
  ],
  notes: [
    'サージ（需要増）で2-3倍になることも',
    'バイク便（GoRide / GrabBike）は車の約1/3〜1/2の料金',
    '一部の観光スポット・ホテル前ではGrab/GoJekが「制限ゾーン」で使えない場合がある（ローカルタクシーの縄張り）',
  ],
}

export const scooterRental = {
  priceRange: [
    { model: 'Honda Scoopy / Beat', daily: 'Rp 70,000〜100,000', weekly: 'Rp 350,000〜560,000', monthly: 'Rp 900,000〜1,200,000' },
    { model: 'Honda Vario 125', daily: 'Rp 100,000〜150,000', weekly: 'Rp 560,000〜900,000', monthly: 'Rp 1,200,000〜1,800,000' },
    { model: 'Yamaha NMAX / Aerox', daily: 'Rp 150,000〜180,000', weekly: 'Rp 800,000〜1,100,000', monthly: 'Rp 1,500,000〜2,200,000' },
  ],
  requirements: [
    '国際運転免許証（IDP）: 必須。カテゴリA（二輪）の記載が必要',
    '自国の有効な運転免許証も同時携帯が必須（IDPだけでは無効）',
    'IDPは出国前に母国で取得すること。バリ現地では取得不可',
    'PDF・スマホ画面表示は拒否されることが多い。物理的な冊子を持参',
  ],
  penalties: [
    'IDP未所持: 罰金 Rp 300,000〜500,000（書類1件あたり）',
    '無免許運転: 最大4ヶ月の禁固刑 or 罰金 Rp 1,000,000',
    '事故時: 保険未加入の場合、全額自己負担（骨折で数百万〜数千万ルピア）',
  ],
  warnings: [
    'バリの交通は混沌としている。信号無視、逆走、歩行者の飛び出しが日常',
    '外国人のバイク事故はバリでの死亡・重傷原因の第1位',
    '雨季の路面は滑りやすい。排水が悪い箇所で水たまりが見えにくい',
    '警察の検問は特にクタ・チャングーで頻繁。IDPチェックが目的',
  ],
}

export const privateDriver = {
  dailyRate: 'Rp 600,000〜1,200,000（8〜10時間）',
  includes: '車両 + ドライバー + ガソリン（入場料・駐車料・食事は含まず）',
  vehicles: [
    { type: 'Toyota Avanza（6人乗り）', price: 'Rp 600,000〜800,000/日' },
    { type: 'Toyota Innova（7人乗り）', price: 'Rp 900,000〜1,200,000/日' },
    { type: 'ミニバス（12人乗り）', price: 'Rp 1,200,000〜1,800,000/日' },
  ],
  tips: [
    '北部・東部（ロビナ・アメッド等）へ行く場合は追加料金 Rp 200,000〜400,000',
    'チップの目安: Rp 50,000〜100,000/日',
    'ホテルのフロントで手配可能。事前にWhatsAppで予約も可',
    '日本語ガイドドライバーはRp 1,000,000〜1,500,000/日',
  ],
}

export const peramaShuttle = {
  phone: '0361-750808 / 0361-751875',
  website: 'peramatour.com',
  booking: 'オンライン予約は出発7日前まで。電話予約も可',
  routes: [
    { from: 'クタ', to: 'ウブド', price: 'Rp 50,000', time: '約1.5時間' },
    { from: 'クタ', to: 'パダンバイ港', price: 'Rp 75,000', time: '約2時間' },
    { from: 'クタ', to: 'ロビナ', price: 'Rp 125,000', time: '約4時間' },
    { from: 'クタ', to: 'サヌール', price: 'Rp 50,000', time: '約30分' },
    { from: 'アメッド', to: '空港 / クタ', price: 'Rp 175,000', time: '約3時間' },
    { from: 'ウブド', to: 'ロビナ', price: 'Rp 100,000', time: '約3時間' },
  ],
  departures: '主要便は 07:00 / 11:30 / 17:00（路線により異なる）',
}

export const kuraKuraBus = {
  website: 'kura2bus.com',
  operatingHours: '8:30〜23:00（毎日）',
  frequency: '10〜20分間隔',
  routes: [
    { line: 'クタ / レギアン / スミニャック線', price: 'Rp 20,000〜' },
    { line: 'ウブド線', price: 'Rp 80,000' },
    { line: '全5路線（2025年時点。15路線に拡大予定）', price: '' },
  ],
  passes: [
    { type: '片道', price: 'Rp 20,000〜80,000' },
    { type: '7日パス', price: 'Rp 250,000（全路線乗り放題）' },
  ],
  features: ['エアコン完備', '無料WiFi', 'USB充電', '6歳未満は無料（大人同伴）', 'リアルタイム位置追跡アプリ'],
}

export const bluebirdTaxi = {
  flagDown: 'Rp 7,000（初乗り）',
  perKm: 'Rp 6,500〜10,000/km',
  phone: '0361-701111',
  app: 'MyBluebird（iOS / Android）',
  features: [
    'メーター制で透明な料金（必ずメーターを使うよう確認）',
    '英語対応ドライバーが多い',
    '水色のロゴが目印。偽ブルーバードに注意（車体の色やロゴが微妙に違う）',
    'アプリから「Fixed Price」と「Meter」が選べる',
  ],
}

export const fastBoats = {
  nusaIslands: [
    {
      route: 'サヌール → ヌサ・ペニダ',
      time: '約40分',
      price: 'Rp 106,000〜380,000（片道）',
      departures: '8:00〜16:00（多数の便あり）',
    },
    {
      route: 'サヌール → ヌサ・レンボンガン',
      time: '約30分',
      price: 'Rp 115,000〜380,000（片道）',
      departures: '8:15 / 10:00 / 12:00 / 13:45 / 16:00 等',
    },
  ],
  giliIslands: [
    {
      route: 'バリ → ギリ・トラワンガン',
      time: '約2時間',
      price: 'Rp 380,000〜700,000（片道 / USD 24-44相当）',
      departures: '毎日20便以上',
      operators: 'Eka Jaya / Gili Getaway / Scoot / Freebird Express 等',
    },
  ],
  tips: [
    'ピークシーズンは事前予約必須',
    '波が高い日は欠航あり（特に雨季）',
    '酔い止めを事前に服用推奨',
    '出港30分前にはチェックイン',
  ],
}

// ===== PRACTICAL INFO =====

export const moneyInfo = {
  currency: 'インドネシア・ルピア（IDR / Rp）',
  atms: [
    'BCA、BNI、Mandiri、BRIが最も信頼できる',
    '必ず銀行支店内のATMを使用。路上の独立型ATMはスキミングリスクが高い',
    '1回の引出上限: 通常 Rp 2,500,000（ATMにより Rp 1,250,000〜3,000,000）',
    '手数料: 多くのATMで Rp 0〜50,000/回（海外カード）',
    '北部・東部（ロビナ・アメッド・シデメン）はATMが少ない。南部で引き出しておく',
  ],
  moneyChangers: [
    '「PVA Berizin」ロゴのある正規両替商を使うこと',
    '相場より極端に良いレートの両替商は詐欺（スリ替え手品）の可能性大',
    '信頼できるチェーン: BMC、Central Kuta、Dirgahayu',
    '空港の両替レートは悪い。市内で両替する方が得',
  ],
  qris: [
    'QRIS（Quick Response Code Indonesian Standard）: インドネシア統一QR決済',
    '2025年末から外国人向けITTPが展開開始。一部の外国銀行アプリからもQRISスキャン可能に',
    'ローカルアプリ: GoPay（GoJek内）/ OVO / ShopeePay / DANA — 国際カードをリンクして利用可能',
    '屋台・ワルンでもQRIS対応が急速に拡大中',
  ],
  tips: [
    '現金は依然として必要。特にローカル市場、小さなワルン、タクシー、農村部',
    'カード決済は中〜高級レストラン、ホテル、ビーチクラブ、大型店で対応',
    '高額紙幣（Rp 100,000）は小さな店で出すとお釣りがないことがある。Rp 20,000-50,000を常に持つ',
  ],
}

export const simCardInfo = [
  {
    carrier: 'Telkomsel（最大手・推奨）',
    plan: 'Tourist SIM Card: 25GB / 30日間 / 通話25分付き',
    price: 'Rp 150,000（GraPARIショップ）/ 空港は USD 23前後（割高）',
    coverage: 'バリ全域で最も安定。山間部・離島でも電波が入りやすい',
    where: 'GraPARI（テルコムセル直営店）、空港カウンター、街中の携帯ショップ',
  },
  {
    carrier: 'XL Axiata',
    plan: '15GB〜260GB（プランにより異なる / 30日）',
    price: 'Rp 100,000〜200,000',
    coverage: '都市部・観光地は問題なし。山間部・離島では Telkomsel に劣る',
    where: 'XLセンター、街中の携帯ショップ',
  },
  {
    carrier: 'eSIM（事前購入）',
    plan: 'Holafly / Airalo / Nomad 等の旅行用eSIM',
    price: 'USD 6〜25（プランにより異なる）',
    coverage: 'Telkomsel / Indosat / XL のネットワークを利用',
    where: 'オンラインで事前購入。到着前にアクティベート可能',
  },
]

export const touristTax = {
  amount: 'Rp 150,000（約 USD 10 / 約 JPY 1,500）',
  who: '全外国人（年齢問わず・乳児含む）。1回の入島ごと',
  payment: [
    '事前オンライン: lovebali.baliprov.go.id で支払い → QRコードを受信',
    '空港カウンター: 到着時に専用カウンターで支払い（キャッシュレスのみ）',
    'フェリー到着時: ギリマヌク港でも支払い可能（要確認）',
  ],
  exemptions: 'KITAS/KITAP保持者、外交ビザ、学生ビザ保持者は免除申請可',
}

export const weatherByMonth = [
  { month: '1月', temp: '23-31°C', rain: '350mm', season: '雨季', note: '最多雨。午後に激しいスコール' },
  { month: '2月', temp: '23-31°C', rain: '280mm', season: '雨季', note: '引き続き雨多い。ニュピの時期' },
  { month: '3月', temp: '23-31°C', rain: '240mm', season: '雨季', note: '雨は徐々に減少' },
  { month: '4月', temp: '23-32°C', rain: '100mm', season: '移行期', note: '雨季から乾季への移行。過ごしやすい' },
  { month: '5月', temp: '22-31°C', rain: '85mm', season: '乾季', note: '乾季スタート。快適' },
  { month: '6月', temp: '21-30°C', rain: '60mm', season: '乾季', note: 'ベストシーズン開始。湿度低い' },
  { month: '7月', temp: '20-30°C', rain: '55mm', season: '乾季', note: 'ベストシーズン。ハイシーズン料金' },
  { month: '8月', temp: '20-30°C', rain: '25mm', season: '乾季', note: '最も乾燥。最も混雑する月' },
  { month: '9月', temp: '21-31°C', rain: '45mm', season: '乾季', note: 'ベストシーズン。8月より空いてる' },
  { month: '10月', temp: '22-32°C', rain: '65mm', season: '移行期', note: '乾季終盤。時折にわか雨' },
  { month: '11月', temp: '23-32°C', rain: '180mm', season: '雨季', note: '雨季突入。料金下がり始める' },
  { month: '12月', temp: '23-31°C', rain: '280mm', season: '雨季', note: '年末年始はハイシーズン料金' },
]

export const emergencyNumbers = [
  { service: '総合緊急番号', number: '112', note: '警察・消防・救急すべて' },
  { service: '警察', number: '110', note: '' },
  { service: '救急車 / 医療', number: '118 / 119', note: '' },
  { service: '消防', number: '113', note: '' },
  { service: '観光客支援センター', number: '+62-361-224111', note: '' },
  { service: 'BIMC Hospital Nusa Dua', number: '+62-361-3000911', note: 'Kawasan ITDC Blok D, Nusa Dua（24時間救急）' },
  { service: 'BIMC Hospital Kuta', number: '+62-361-761263', note: 'Jl. Bypass Ngurah Rai No.100X（24時間）' },
  { service: 'Siloam Hospital Kuta', number: '+62-361-779911', note: 'Jl. Sunset Road No.818（24時間）' },
  { service: 'Kasih Ibu Hospital Denpasar', number: '+62-361-227911', note: 'デンパサール市内（24時間）' },
  { service: 'RS Sanglah（州立総合病院）', number: '+62-361-227911', note: 'バリ最大の公立病院。日本語スタッフなし' },
]

export const hospitals = [
  {
    name: 'BIMC Hospital Nusa Dua',
    address: 'Kawasan ITDC Blok D, Jl. Nusa Dua, Benoa, Kuta Selatan, Badung 80363',
    phone: '+62-361-3000911',
    hours: '24時間（救急）',
    features: '外国人向け。英語対応。国際保険対応。最も信頼される民間病院',
  },
  {
    name: 'BIMC Hospital Kuta',
    address: 'Jl. Bypass Ngurah Rai No.100X, Kuta',
    phone: '+62-361-761263',
    hours: '24時間',
    features: '南バリの外国人向け主要病院',
  },
  {
    name: 'Siloam Hospital Kuta',
    address: 'Jl. Sunset Road No.818, Kuta, Badung 80361',
    phone: '+62-361-779911',
    hours: '24時間',
    features: '大手チェーン。英語対応。総合的な医療サービス',
  },
  {
    name: 'Kasih Ibu Hospital',
    address: 'Jl. Teuku Umar No.120, Denpasar',
    phone: '+62-361-227911',
    hours: '24時間',
    features: 'デンパサール中心。比較的リーズナブル',
  },
]

// ===== SAFETY =====

export const safetyAlerts = [
  {
    category: '薬物',
    level: 'critical',
    desc: 'インドネシアの薬物法は極めて厳格。少量の所持でも長期禁固刑。販売・製造は死刑の可能性。大麻・CBD・THC含むすべてが違法。医療用大麻も違法',
  },
  {
    category: '交通事故',
    level: 'critical',
    desc: '外国人のバリでの死亡・重傷原因の第1位はバイク事故。IDP未所持の場合、保険が適用されない可能性。飲酒運転は厳禁',
  },
  {
    category: '離岸流（リップカレント）',
    level: 'warning',
    desc: '南海岸のビーチ（特にクタ・レギアン）は離岸流が強い。赤旗が立っている場所では遊泳禁止。流された場合は岸と平行に泳ぐ',
  },
  {
    category: '飲料スパイキング',
    level: 'warning',
    desc: 'クラブやバーでの飲料への薬物混入が報告されている。作られる過程を見守り、放置した飲み物は飲まない。知らない人からの飲み物は断る',
  },
  {
    category: 'ひったくり',
    level: 'warning',
    desc: 'バイクでのひったくりが報告あり。歩道側の手でバッグを持つ。スマホを道路側で使わない。貴重品はホテルのセーフティボックスに',
  },
  {
    category: 'サル',
    level: 'warning',
    desc: 'モンキーフォレスト・ウルワツ寺院のサルは攻撃的。眼鏡、帽子、サングラス、食べ物、光るものは奪われる。サルが近づいたら目を合わせない',
  },
  {
    category: '詐欺・ぼったくり',
    level: 'info',
    desc: '両替詐欺（スリ替え手品）、タクシーメーター不使用、お寺の「お布施」強要、ネイルサロン・タトゥーでの法外な請求。「観光税」と称する偽の徴収サイトにも注意',
  },
  {
    category: 'メタノール中毒',
    level: 'warning',
    desc: '安価な密造酒「アラック」にメタノールが混入し、死亡事故が毎年発生。出所不明の安い酒は飲まない。Rp 30,000以下のカクテルは注意',
  },
]

export const templeEtiquette = [
  { rule: '服装', desc: 'サロン（腰布）とスレンダン（帯）を着用。肩と膝を覆うこと。主要寺院の入口で貸出・販売あり（Rp 10,000〜20,000）' },
  { rule: '生理中の女性', desc: '寺院への入場は禁止。これはバリ・ヒンドゥーの宗教的慣習に基づく' },
  { rule: '供物を踏まない', desc: '地面に置かれた花の供物（チャナン・サリ）を踏まないよう注意。非常に失礼とされる' },
  { rule: '左手', desc: '左手は不浄とされる。物の受け渡し、食事、握手は右手で。やむを得ない場合は両手で' },
  { rule: '頭', desc: '人の頭を触らない。バリ文化では頭は最も神聖な部位' },
  { rule: '写真', desc: '祈祷中の人を撮影する際は許可を得る。ドローン禁止の寺院が多い' },
  { rule: '座り方', desc: '寺院内では足の裏を祭壇に向けない。あぐらか正座が望ましい' },
  { rule: '宗教行列', desc: 'バリの道路で宗教行列に遭遇したら、車を停めて敬意を持って待つ。行列を横切らない' },
]

// ===== ACCOMMODATION =====

export const accommodationGuide = {
  budget: {
    range: 'Rp 100,000〜400,000/泊',
    description: 'ホステルのドミトリー（Rp 100,000〜180,000）、ゲストハウスの個室（Rp 200,000〜400,000）。ファン/エアコン、共用バスルーム〜プライベートバスルーム',
    bestAreas: 'クタ、チャングー、ウブド、アメッド、ロビナ',
  },
  midRange: {
    range: 'Rp 400,000〜1,800,000/泊',
    description: '3〜4つ星ホテル、ブティックホテル、プール付きヴィラ。エアコン、朝食付きが多い',
    bestAreas: 'スミニャック、チャングー、ウブド、サヌール、ジンバラン',
  },
  luxury: {
    range: 'Rp 1,800,000〜10,000,000+/泊',
    description: '5つ星リゾート、プライベートプール付きヴィラ、スパ、バトラーサービス',
    bestAreas: 'ヌサドゥア、ウブド、ウルワツ、スミニャック、ジンバラン',
  },
  byTravelerType: [
    { type: 'バックパッカー', areas: 'クタ、チャングー、ウブド', reason: '安宿・ドミ多数、ナイトライフ、コミュニティ' },
    { type: 'デジタルノマド', areas: 'チャングー、ウブド', reason: 'コワーキング、WiFi、長期滞在向けヴィラ' },
    { type: 'ファミリー', areas: 'サヌール、ヌサドゥア', reason: '穏やかなビーチ、キッズクラブ、リゾート' },
    { type: 'ハネムーン', areas: 'ウブド、ウルワツ、ヌサドゥア', reason: '棚田ビュー、崖上ヴィラ、5つ星' },
    { type: 'サーファー', areas: 'チャングー、ウルワツ、クタ', reason: 'サーフスポット近接、サーフキャンプ' },
    { type: 'ダイバー', areas: 'アメッド、ヌサ・ペニダ', reason: 'ダイブショップ直結、沈船・マンタ' },
    { type: '静かに過ごしたい', areas: 'シデメン、ロビナ、アメッド', reason: '観光客少、棚田、海、素朴な雰囲気' },
  ],
  bookingTips: [
    'ハイシーズン（7-8月、年末年始、ガルンガン前後）は2-3ヶ月前に予約',
    'ローシーズン（1-3月、10-11月）は当日でも空きあり。値引き交渉可',
    'Booking.com / Agoda が最も普及。直接予約の方が安い場合もある',
    '長期滞在（1ヶ月+）は直接交渉で大幅割引。Facebook グループ「Bali Accommodation」が情報源',
    'ニュピ（バリ新年）前後はホテルが割高。外出禁止なので注意',
  ],
}
