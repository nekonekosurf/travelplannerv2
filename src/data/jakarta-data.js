// Jakarta Transit Guide — structured data
// ジャカルタ（Day 1: 空港→ガンビル駅→バンドンへの鉄道）
// リサーチノート（2026-02-25）に基づく正確なデータ

export const sections = [
  { id: 'overview', label: '概要' },
  { id: 'airport', label: '空港' },
  { id: 'transport', label: '移動' },
  { id: 'gambir', label: 'ガンビル駅' },
  { id: 'trains', label: '列車' },
  { id: 'sightseeing', label: '観光' },
  { id: 'food', label: '食事' },
  { id: 'safety', label: '安全' },
]

export const mapSpots = [
  { name: 'スカルノ・ハッタ国際空港 (CGK)', lat: -6.1256, lng: 106.6559 },
  { name: 'ガンビル駅', lat: -6.1767, lng: 106.8303 },
  { name: 'BNI City駅（空港鉄道）', lat: -6.2016, lng: 106.8197 },
  { name: 'モナス（独立記念塔）', lat: -6.1753, lng: 106.8272 },
  { name: 'イスティクラル・モスク', lat: -6.1703, lng: 106.8319 },
  { name: 'ジャカルタ大聖堂', lat: -6.1697, lng: 106.8310 },
  { name: 'コタ・トゥア（旧市街）', lat: -6.1352, lng: 106.8133 },
]

export const mapPois = [
  { name: 'Solaria ガンビル駅', type: 'restaurant', lat: -6.1765, lng: 106.8304, detail: '駅2F インドネシア料理チェーン' },
  { name: 'KFC ガンビル駅', type: 'restaurant', lat: -6.1764, lng: 106.8303, detail: '駅1F ファストフード' },
  { name: 'Indomaret ガンビル駅', type: 'convenience', lat: -6.1758, lng: 106.8304, detail: '駅構内コンビニ' },
  { name: 'ATM BCA ガンビル駅', type: 'atm', lat: -6.1768, lng: 106.8305, detail: 'BCA/Mandiri/BNI 24時間' },
  { name: 'Starbucks ガンビル駅', type: 'cafe', lat: -6.1766, lng: 106.8306, detail: '駅1F WiFi利用可' },
  { name: 'キミア・ファルマ薬局', type: 'pharmacy', lat: -6.1767, lng: 106.8307, detail: '駅南口1F 薬局' },
]

export const budgetSummary = [
  { label: 'VOA（到着ビザ）', value: 'Rp 500,000', note: '約4,630円・30日間' },
  { label: 'SIMカード', value: 'Rp 150,000', note: 'Telkomsel Tourist SIM' },
  { label: '空港→ガンビル', value: 'Rp 100,000〜', note: '空港鉄道+Grab' },
  { label: 'JKT→BDG列車', value: 'Rp 150,000〜450,000', note: 'Economy〜Panoramic' },
]

// ===== AIRPORT =====
export const airportInfo = {
  name: 'スカルノ・ハッタ国際空港 (CGK)',
  terminals: [
    { name: 'ターミナル1', airlines: '国内線LCC（ライオンエア等）', note: '1A/1B/1Cの3棟。古い設備' },
    { name: 'ターミナル2', airlines: '国内線（ガルーダ国内線）+ 一部国際線', note: '2D/2E/2Fの3棟' },
    { name: 'ターミナル3', airlines: '国際線メイン（ガルーダ国際線、ANA、JAL、シンガポール航空等）', note: '最新・最大。日本からの直行便はすべてT3に到着' },
  ],
  arrivalFlow: [
    { step: 1, title: '降機・到着コンコース', desc: 'ボーディングブリッジを渡って到着コンコースへ' },
    { step: 2, title: 'All Indonesia Document Verification', desc: 'デジタル入国カード（All Indonesia Arrival Card）のQRコード確認。事前登録必須' },
    { step: 3, title: 'VOA（到着ビザ）カウンター', desc: '入国審査の手前右側。「VISA ON ARRIVAL」の看板あり。IDR 500,000' },
    { step: 4, title: '入国審査（Immigration）', desc: '自動ゲート78台 + 有人カウンター。パスポートとVOAレシート提示' },
    { step: 5, title: '手荷物受取（Baggage Claim）', desc: 'フライト番号でベルト番号を確認して受取' },
    { step: 6, title: '税関（Customs）', desc: '緑: 申告なし / 赤: 申告あり。IMEI登録もここで' },
    { step: 7, title: '到着ロビー', desc: 'SIMカード・両替・ATM・交通手段へアクセス' },
  ],
  voa: {
    fee: 'IDR 500,000（約4,630円 / 約$35 USD）',
    payment: 'クレジットカード（Visa/Master）、現金（USD/IDR）',
    requirements: 'パスポート（残存6ヶ月以上）、帰国便または第三国行きチケット',
    duration: '30日間（延長可能: IDR 500,000追加で+30日）',
    waitTime: '15〜40分（混雑状況による）',
    eVoa: 'molina.imigrasi.go.id で事前にe-VOA申請可能。カウンター待ちを省略できる',
  },
  arrivalCard: {
    name: 'All Indonesia Arrival Card',
    mandatory: true,
    since: '2025年8月18日〜義務化',
    url: 'https://all-indonesia.com/',
    desc: '到着3日前からサイトで登録可能。パスポート情報・滞在先・フライト情報を入力。QRコードが発行される',
  },
  simCards: [
    { provider: 'Telkomsel Tourist SIM', price: 'IDR 150,000', data: '25GB + 25分通話/30日間', location: 'T3到着ロビーのTelkomselカウンター', note: '最も広いカバー率。ジャワ・バリ全域で安定。10〜15分で購入・アクティベーション完了', recommended: true },
    { provider: 'XL Axiata Tourist SIM', price: 'IDR 100,000〜200,000', data: '15GB〜25GB/30日間', location: '到着ロビー内', note: 'ジャワ・バリは問題なし。山間部やや弱い', recommended: false },
    { provider: 'Indosat (IM3) Tourist Plan', price: 'IDR 100,000〜', data: '15GB〜/30日間', location: '到着ロビー内', note: 'コスパ良いが一部地方でカバー弱い', recommended: false },
  ],
  simTips: [
    'パスポート提示必須。スタッフがSIM挿入・APN設定・アクティベーションまで対応',
    'eSIM派: Holafly、Airalo等で事前購入可。ただしGrab/GoJek登録にはインドネシア番号が必要なので物理SIMが汎用的',
    'IMEI登録: 海外で購入したスマートフォンを現地SIMで使う場合、税関でIMEI登録が必要。登録しないと90日後にSIMが使えなくなる',
    'データ残量確認: Telkomsel *888# / XL *123# に発信',
  ],
  moneyExchange: [
    'ATM: 到着ロビーにBCA/BNI/Mandiri/BRI。国際カード（Visa/Master/JCB）対応。24時間',
    '両替所: 到着ロビー内。レートは市内より5〜10%悪い。最低限（IDR 500,000〜1,000,000程度）に留める',
    '推奨: ATMで海外キャッシング（レート良好）→ 市内で追加両替。WiseデビットカードやSony Bank WALLETが最もレートが良い',
    '注意: 空港の両替所で手数料を別途取る店や旧紙幣を混ぜる店あり。受け取った紙幣はその場で数えること',
  ],
  exchangeRates: [
    { from: '1 JPY', to: '約108 IDR' },
    { from: '1 USD', to: '約16,300 IDR' },
    { from: '100,000 IDR', to: '約926 JPY' },
  ],
  airportTips: [
    '空港WiFi: 無料（CGK Free WiFi）。接続不安定なのでSIMカード購入推奨',
    'ターミナル間移動: スカイトレイン（無料自動運転モノレール）。05:00〜00:00運行、T1→T3 約10分',
    '荷物預かり: .box（T3国内線到着ホール Gate 3付近）IDR 70,000〜100,000/24時間。24時間営業',
    '充電: 到着ロビー・出発ロビーにコンセント多数。Type C/A',
    'タバコ: 空港全館禁煙。喫煙所は各ターミナル外に設置',
  ],
}

// ===== TRANSPORT: Airport → Gambir =====
export const airportToCity = [
  {
    id: 'kai-bandara',
    name: '空港鉄道（KAI Bandara）→ Grab',
    price: 'IDR 30,000〜70,000 + タクシー約IDR 30,000',
    duration: '約50分 + 10分',
    route: 'SHIA駅（空港）→ BNI City駅 → Grabでガンビル駅',
    recommended: true,
    steps: [
      'T3到着ロビーから「Airport Train」の案内表示に従いSHIA駅へ（T3から直接徒歩でアクセス可能）',
      'チケット購入: 自動券売機 or Railinkアプリ。クレジットカード・デビットカード・電子マネー対応（現金不可）',
      'Premium IDR 30,000 / Executive IDR 70,000。エアコン・無料WiFi・USB充電完備',
      '06:20〜23:20運行、約30分間隔。BNI City駅まで約46分',
      'BNI City駅到着後、Grabタクシーでガンビル駅へ（IDR 20,000〜40,000、7〜15分）',
    ],
    note: '渋滞ゼロで時間が最も読める。合計約IDR 100,000〜110,000、所要約1時間が推奨ルート',
  },
  {
    id: 'damri',
    name: 'DAMRIバス（ガンビル直通）',
    price: 'IDR 40,000〜80,000',
    duration: '50分〜1.5時間',
    route: 'CGK空港 → ガンビル駅（直通）',
    recommended: false,
    steps: [
      '各ターミナル前の「Bus」案内表示に従いDAMRIバス乗り場へ',
      '路線名「JAC Gambir」のバスに乗車',
      'カウンターで購入 or 車内で運転手に支払い。予約不要',
      '06:00〜24:00運行、約15〜60分間隔',
    ],
    note: 'ガンビル直通で乗り換えなし。ただし渋滞で2時間以上かかるリスクあり。朝7:00〜10:00、夕方16:00〜20:00は特に渋滞がひどい',
  },
  {
    id: 'taxi',
    name: 'タクシー（BlueBird）',
    price: 'IDR 200,000〜350,000',
    duration: '40分〜1.5時間',
    route: 'CGK空港 → ガンビル駅',
    recommended: false,
    steps: [
      'T3到着ロビー前の公式タクシー乗り場へ（行き先を告げてから配車）',
      'Blue Bird（水色の車体、青い鳥マーク）を指名。メーター制',
      '料金はメーター＋高速道路通行料（IDR 25,000前後）',
      '公式アプリ「My Blue Bird」で配車するのが最も安全',
    ],
    note: '荷物が多い時に便利。偽Blue Birdに注意。声をかけてくる客引きは非公式タクシー',
  },
  {
    id: 'grab',
    name: 'Grab / GoJek',
    price: 'IDR 200,000〜300,000',
    duration: '40分〜1.5時間',
    route: 'CGK空港 → ガンビル駅',
    recommended: false,
    steps: [
      '到着ロビーを出て各ターミナル指定のRide-hailingピックアップポイントへ',
      'アプリで行き先「Gambir Station」を入力。料金事前表示',
      'Grab: 国際クレジットカード対応 / GoJek: 現金 or GoPay',
    ],
    note: 'アプリで料金確定できて安心。ただし渋滞時は時間が読めない。両方インストールして料金比較がおすすめ',
  },
]

export const bniToGambir = [
  { method: 'タクシー / Grab', fare: 'IDR 20,000〜40,000', duration: '7〜15分', note: '最も早い。BNI City駅前にタクシーあり' },
  { method: 'Grab Bike（バイクタクシー）', fare: 'IDR 10,000〜15,000', duration: '約10分', note: '荷物少なければ最速最安' },
  { method: 'TransJakarta BRT', fare: 'IDR 3,500', duration: '15〜20分', note: 'Tosari→Balai Kota下車。安いが路線を調べる必要あり' },
]

// ===== GAMBIR STATION =====
export const gambirInfo = {
  name: 'ガンビル駅（Stasiun Gambir）',
  address: 'Jl. Medan Merdeka Timur No.1, Jakarta Pusat 10110',
  description: 'ジャカルタの主要鉄道駅。バンドン・ジョグジャカルタ・スラバヤ方面の長距離列車が発着。モナスまで徒歩15分',
  facilities: [
    { name: 'チケットカウンター', detail: '1階メインホール。有人窓口でパスポート提示して購入可能' },
    { name: 'Executive Lounge', detail: '2階。エアコン・WiFi・軽食・飲み物付き。エグゼクティブクラス乗客は無料' },
    { name: 'レストラン', detail: '1階: KFC、Starbucks。2階: Solaria（インドネシア料理チェーン）' },
    { name: 'コンビニ', detail: '1階 Alfamart / Indomaret。飲料・軽食・日用品' },
    { name: 'ATM', detail: '1階 BRI/BNI/Mandiri/BCA。24時間利用可能' },
    { name: '荷物預かり（ロッカー）', detail: '1階南門（Pintu Selatan）、Rail Transit Suite隣。M: IDR 10,000/h、L: IDR 15,000/h、XL: IDR 20,000/h' },
    { name: 'トイレ', detail: '各階。利用料 IDR 2,000〜5,000。清潔' },
    { name: 'シャワー', detail: '1階南門エリア、Rail Transit Suite内。利用料あり' },
    { name: '礼拝室（Musholla）', detail: '各階に設置。清潔に保たれている' },
    { name: 'WiFi', detail: '全館無料WiFi（速度は遅い場合あり）' },
    { name: 'バリアフリー', detail: 'スロープ、エレベーター、点字ブロック完備' },
  ],
}

export const lockerPrices = [
  { size: 'M（リュック程度）', hour1: 'IDR 10,000', hour2: 'IDR 20,000', hour12: 'IDR 60,000', hour24: 'IDR 80,000' },
  { size: 'L（中型スーツケース）', hour1: 'IDR 15,000', hour2: 'IDR 30,000', hour12: 'IDR 90,000', hour24: 'IDR 120,000' },
  { size: 'XL（大型スーツケース）', hour1: 'IDR 20,000', hour2: 'IDR 40,000', hour12: 'IDR 100,000', hour24: 'IDR 140,000' },
]

export const boardingProcess = [
  { step: 1, title: '駅到着・セキュリティチェック', desc: 'メインエントランスから入場。荷物X線検査あり' },
  { step: 2, title: 'チケット確認', desc: '紙チケット or e-boarding pass + パスポートを提示' },
  { step: 3, title: '待合室へ', desc: 'エグゼクティブクラスの場合は2階Executive Lounge利用可' },
  { step: 4, title: 'ホームへの案内', desc: '出発15〜30分前にアナウンス。ホームに移動' },
  { step: 5, title: '乗車', desc: '号車番号（Kereta）と座席番号（Nomor Tempat Duduk）を確認して乗車' },
]

// ===== TRAINS: Jakarta → Bandung =====
export const jakartaToBandung = [
  {
    id: 'parahyangan',
    name: 'Parahyangan（パラヒャンガン）',
    recommended: true,
    duration: '約3時間',
    from: 'ガンビル駅',
    to: 'バンドン駅',
    classes: [
      { name: 'Economy', fare: 'IDR 150,000（約1,390円）', seats: '2+2列', features: 'エアコンあり。リクライニング浅め。十分快適' },
      { name: 'Executive', fare: 'IDR 200,000〜250,000（約1,850〜2,310円）', seats: '2+2列ゆったり', features: '広い座席、深いリクライニング、食事サービスあり' },
      { name: 'Luxury', fare: 'IDR 435,000〜450,000（約4,030〜4,170円）', seats: '2+1列', features: '革張りシート、電源コンセント、食事付き' },
      { name: 'Panoramic', fare: 'IDR 435,000〜450,000（約4,030〜4,170円）', seats: '2+1列', features: '天井まで広がるガラス窓。茶畑や棚田の絶景。SNS映え' },
    ],
    schedule: [
      { number: 'KA 132', depart: '07:30', arrive: '10:21', duration: '約2時間51分', note: '朝の人気便' },
      { number: 'KA 138', depart: '09:15', arrive: '12:18', duration: '約3時間03分', note: '' },
      { number: 'KA 136', depart: '10:05', arrive: '13:18', duration: '約3時間13分', note: '' },
      { number: 'KA 134', depart: '18:25', arrive: '21:20', duration: '約2時間55分', note: '夕方便' },
      { number: 'KA 140', depart: '23:05', arrive: '02:02', duration: '約2時間57分', note: '深夜便' },
    ],
    trainFeatures: [
      'エアコン全クラス完備（やや寒い場合あり。上着持参推奨）',
      'Executive以上: 各席にコンセント、食事サービスあり（ナシゴレン・パラヒャンガン等）',
      '洋式トイレあり。ペーパー持参推奨',
      '座席は回転可能。4人掛けボックスシートにアレンジできる',
      'WiFiなし。モバイルデータ推奨',
    ],
    scenery: 'ガンビルを出ると最初の30分はジャカルタの住宅密集地帯。その後田園風景に変わり、プルワカルタからチマヒにかけてが最も景色が良い。右側の窓側席（偶数番号席）がおすすめ',
  },
  {
    id: 'whoosh',
    name: 'Whoosh（ウーシュ）高速鉄道',
    recommended: false,
    duration: '約35分',
    from: 'ハリム駅（ジャカルタ東部）',
    to: 'テガルアル駅（バンドン郊外）',
    classes: [
      { name: 'Premium Economy', fare: 'IDR 250,000', seats: '3+2列', features: '最も安い。十分快適' },
      { name: 'Business', fare: 'IDR 450,000', seats: '2+2列', features: 'ゆったりシート' },
      { name: 'First', fare: 'IDR 600,000', seats: '2+1列', features: '最高級。食事付き' },
    ],
    schedule: [],
    trainFeatures: [
      '2023年10月開業。中国製高速鉄道。最高速度350km/h',
      '1日31往復（62本）。約20〜30分間隔で運行',
      '予約: Tiket.com、Traveloka、公式サイト ticket.kcic.co.id',
    ],
    scenery: '',
    caveat: 'ハリム駅はガンビルから遠い（LRTで30〜40分）。バンドン側のテガルアル駅もバンドン市中心部から約15km離れている。合計の移動時間を考えるとParahyanganの方がトータルで便利な場合が多い',
  },
  {
    id: 'papandayan',
    name: 'Papandayan（パパンダヤン）等',
    recommended: false,
    duration: '約3時間',
    from: 'ガンビル駅',
    to: 'バンドン駅',
    classes: [
      { name: 'Economy', fare: 'IDR 80,000〜100,000', seats: '2+2列', features: 'エアコン付き。最安オプション' },
      { name: 'Executive', fare: 'IDR 100,000〜200,000', seats: '2+2列', features: '食事サービスあり' },
    ],
    schedule: [],
    trainFeatures: [
      '1日に34本以上のジャカルタ〜バンドン便が運行',
      'Parahyangan以外にもPapandayan、Serayu等複数の列車あり',
      '最新の時刻表はTravelokaまたはTiket.comで確認',
    ],
    scenery: '',
  },
]

export const trainBookingTips = [
  { title: 'Traveloka（推奨）', desc: '国際クレカ対応。日程検索・座席指定可能。英語対応。外国人に最も使いやすい' },
  { title: 'Tiket.com', desc: '国際クレカ対応。Whoosh高速鉄道のチケットはTiket.comのみで購入可能' },
  { title: '12go.asia', desc: '英語に完全対応。手数料がやや高いが確実に予約できる' },
  { title: 'KAI Access（公式）', desc: 'NIK（16桁の国民ID番号）を要求されてエラーになる報告多数。国際クレカ非対応。外国人は使いにくい' },
  { title: '駅窓口（当日）', desc: 'ガンビル駅1階でパスポート提示して購入。人気路線は売り切れリスクあり。出発3時間前には到着推奨' },
]

export const trainBookingGeneral = [
  '予約タイミング: 出発の7〜14日前がベスト。人気時間帯は2〜3日前で売り切れることも',
  '座席指定: Travelokaでは座席指定可能。窓側を希望する場合は早めに',
  'パスポート: 予約時にパスポート番号入力。乗車時にパスポート原本の提示が必要',
  'イドゥル・フィトリ期間（2026年は3月下旬頃）は全列車が大混雑。可能なら避ける',
  'Executive クラスがコスパ最良。Panoramicは景色を楽しみたいなら価値あり（空きが少ないので早めの予約必須）',
]

// ===== SIGHTSEEING =====
export const quickSightseeing = [
  {
    id: 'monas',
    name: 'モナス（Monumen Nasional / 国家記念塔）',
    distance: 'ガンビル駅から徒歩約15分（1.2km）',
    hours: '火〜日 08:00〜16:00、19:00〜22:00（週末は〜00:00）。月曜定休',
    fee: '外国人: IDR 55,000（JakCard IDR 50,000が別途必要）',
    time: '外観のみ30分 / 展望台まで1.5時間',
    desc: '高さ132mのインドネシア独立記念塔。頂上に35kgの金箔を貼った炎のモニュメント。広大なムルデカ広場の中央に立つ。展望台は1日の入場数制限あり',
    tips: '北側入口が展望台チケットカウンターに近い。朝一番（8時開場直後）に訪問すると待ち時間が短い。月曜は定休日なので注意',
  },
  {
    id: 'istiqlal',
    name: 'イスティクラル・モスク（Masjid Istiqlal）',
    distance: 'モナスから徒歩約10分（800m）',
    hours: '04:00〜22:00（礼拝時間中は見学エリア制限あり）',
    fee: '無料',
    time: '20〜40分',
    desc: '東南アジア最大のモスク。収容人数20万人。1978年完成。肩と膝が隠れる服装必須。ノースリーブ・短パン不可。女性はスカーフ推奨（入口で無料貸出あり）',
    tips: 'イスラム教の巨大モスクとカトリック大聖堂が道を挟んで向かい合う、宗教的寛容性の象徴',
  },
  {
    id: 'cathedral',
    name: 'ジャカルタ大聖堂（Katedral Jakarta）',
    distance: 'イスティクラル・モスクの真向かい（地下トンネルで接続）',
    hours: '月火木金土日 08:00〜20:00（水曜定休）',
    fee: '無料',
    time: '15〜20分',
    desc: '1901年完成のネオゴシック様式のカトリック大聖堂。地下トンネルでモスクと行き来でき、忙しい道路を渡らずに移動可能',
    tips: '肩と膝が隠れる服装で訪問。モスクとセットで見るのがおすすめ',
  },
  {
    id: 'kota-tua',
    name: 'コタ・トゥア（Kota Tua / 旧市街）',
    distance: 'ガンビル駅からタクシー約15分、TransJakartaで約20分',
    hours: '広場: 24時間 / 博物館: 火〜日 09:00〜17:00（月曜休館）',
    fee: '広場: 無料 / 博物館: 外国人 IDR 50,000前後',
    time: '1.5〜2時間',
    desc: 'オランダ植民地時代の旧バタヴィア。ファタヒラ広場を中心にジャカルタ歴史博物館、ワヤン人形博物館、美術・陶磁器博物館が集中',
    tips: 'カフェ・バタヴィア: 1805年築のコロニアル建築を改装。ナシゴレン IDR 75,000〜。列車の時間に余裕がある場合のみ',
  },
]

export const modelCourse = {
  title: '2〜2.5時間モデルコース',
  steps: [
    { time: '', title: 'ガンビル駅', desc: '荷物をロッカーに預ける（IDR 15,000〜20,000/1時間）' },
    { time: '徒歩15分', title: 'モナス', desc: '外観見学 + 写真撮影（30分）' },
    { time: '徒歩10分', title: 'イスティクラル・モスク', desc: '内部見学（20分）' },
    { time: '地下トンネル5分', title: 'ジャカルタ大聖堂', desc: '内部見学（15分）' },
    { time: '徒歩10分 or Grab 5分', title: 'ガンビル駅に戻る', desc: '駅構内で食事（30分）→ 列車に乗車' },
  ],
  totalCost: '約IDR 50,000〜100,000（ロッカー + 交通費）',
}

// ===== FOOD =====
export const signatureDishes = [
  { name: 'ナシゴレン（Nasi Goreng）', desc: 'インドネシア式炒飯。甘い醤油（ケチャップマニス）で味付け。目玉焼き・エビせんべいトッピング', price: 'IDR 15,000〜50,000' },
  { name: 'ソト・ベタウィ（Soto Betawi）', desc: 'ジャカルタ発祥。牛肉・牛モツをココナッツミルクと牛乳のブレンドスープで煮込む。濃厚クリーミー', price: 'IDR 25,000〜45,000' },
  { name: 'ケラッ・テロール（Kerak Telor）', desc: 'ジャカルタの伝統おやつ。もち米と卵をフライパンで焼き、ココナッツフレーク・エビ・スパイスをトッピング', price: 'IDR 15,000〜25,000' },
  { name: 'ナシ・ウドゥック（Nasi Uduk）', desc: 'ココナッツミルクで炊いたご飯。揚げ鶏、テンペ、サンバル等と食べる。ジャカルタの朝食定番', price: 'IDR 15,000〜35,000' },
  { name: 'ガドガド（Gado-gado）', desc: '温野菜のピーナッツソースサラダ。揚げ豆腐・テンペ・卵も入る。ベジタリアン対応', price: 'IDR 15,000〜30,000' },
  { name: 'バクソ（Bakso）', desc: '牛肉の肉団子スープ。屋台で食べるのが醍醐味。サイズ選択可能', price: 'IDR 10,000〜25,000' },
  { name: 'ミーゴレン（Mie Goreng）', desc: 'インドネシア式焼きそば。甘い醤油味。野菜・卵入り', price: 'IDR 15,000〜40,000' },
]

export const restaurants = [
  {
    id: 'solaria',
    name: 'Solaria ガンビル駅',
    type: 'インドネシア料理チェーン',
    price: 'IDR 30,000〜70,000',
    distance: '駅構内2階',
    desc: 'インドネシア料理の定番チェーン。安定した味でメニューが豊富。ナシゴレン、ミーゴレン、スープ等。冷房が効いた快適な店内',
    hours: '07:00〜22:00',
    recommended: ['ナシゴレン IDR 35,000', 'ミーゴレン IDR 30,000', 'ソト・アヤム IDR 40,000'],
  },
  {
    id: 'kfc',
    name: 'KFC ガンビル駅',
    type: 'フライドチキン',
    price: 'IDR 25,000〜50,000',
    distance: '駅構内1階',
    desc: 'インドネシアKFCはライス付きが定番。日本のKFCとは違うインドネシア独自メニューも。安心の選択肢',
    hours: '07:00〜22:00',
    recommended: ['オリジナルチキン+ライス IDR 35,000', 'スパイシーチキンセット IDR 45,000'],
  },
  {
    id: 'soto-betawi',
    name: 'Soto Betawi H. Husein（駅周辺）',
    type: 'ジャカルタ郷土料理',
    price: 'IDR 30,000〜50,000',
    distance: '駅周辺エリア',
    desc: 'ジャカルタ名物ソト・ベタウィの専門店。ココナッツミルクと牛乳のブレンドスープに牛肉・牛モツが入った濃厚スープ。日本人の口にもよく合う',
    hours: '08:00〜21:00',
    recommended: ['ソト・ベタウィ IDR 35,000', 'ケルプック（エビせんべい）追加 IDR 5,000'],
  },
  {
    id: 'nasi-goreng-kambing',
    name: 'Nasi Goreng Kambing Kebon Sirih',
    type: 'ナシゴレン専門',
    price: 'IDR 35,000〜60,000',
    distance: 'ガンビルからGrab約20分',
    desc: '1958年創業の老舗。ナシゴレン・カンビン（羊肉炒飯）が名物。羊臭さが少なく日本人にも食べやすいと評判',
    hours: '10:00〜22:00',
    recommended: ['ナシゴレン・カンビン IDR 45,000', 'サテ・カンビン IDR 40,000'],
  },
  {
    id: 'nasi-uduk',
    name: 'ナシ・ウドゥック屋台（駅周辺）',
    type: 'ベタウィ料理',
    price: 'IDR 10,000〜20,000',
    distance: '駅周辺',
    desc: 'ココナッツミルクで炊いた香りのよいご飯に、揚げ鶏、テンペ、卵、クルプックを添えた朝食の定番。朝限定の屋台が多い',
    hours: '05:00〜12:00',
    recommended: ['ナシ・ウドゥック・コンプリット IDR 15,000'],
  },
  {
    id: 'indomaret',
    name: 'Indomaret / Alfamart',
    type: 'コンビニ',
    price: 'IDR 5,000〜30,000',
    distance: '駅構内1階',
    desc: 'カップ麺、パン、飲料。GoPay/OVOチャージも可能。列車内用の飲み物・軽食の調達に便利',
    hours: '05:00〜23:00',
    recommended: ['Aqua（ミネラルウォーター）IDR 4,000', 'インドミー（カップ麺）IDR 5,000', 'テ・ボトル IDR 5,000'],
  },
]

// ===== PRACTICAL INFO =====
export const practicalInfo = [
  { label: 'VOA', desc: '到着ビザ IDR 500,000（30日間）。e-VOA事前申請推奨（molina.imigrasi.go.id）' },
  { label: 'All Indonesia Arrival Card', desc: '到着3日前から事前登録必須（all-indonesia.com）。QRコードを取得しておく' },
  { label: 'SIMカード', desc: '空港T3でTelkomsel Tourist SIM IDR 150,000が推奨。25GB/30日間' },
  { label: 'QRIS', desc: 'インドネシア統一QR決済。GoPay/OVO/Dana等で利用。屋台からコンビニまで広く普及' },
  { label: 'Grab/GoJek', desc: 'Grab: 国際クレカ対応で外国人向き。GoJek: 現金 or GoPay。両方インストール推奨' },
  { label: '電圧', desc: '220V/50Hz。プラグ形状はCタイプ（ヨーロッパ型2穴丸ピン）' },
  { label: '水道水', desc: '絶対に飲まない。ペットボトル水 IDR 3,000〜5,000' },
  { label: 'チップ', desc: '基本不要。高級レストランは10%サービス料込み。ポーターに IDR 10,000〜20,000。右手で渡す' },
  { label: '日本大使館', desc: 'Jl. M.H. Thamrin No.24, Jakarta。+62-21-3192-4308' },
]

// ===== SAFETY =====
export const safetyAlerts = [
  {
    spot: '非公式タクシー',
    warning: '空港出口で「タクシー？」と声をかけてくる客引きは高確率でぼったくり。メーターなし・高額請求。必ずGrab/GoJekアプリか公式Blue Birdタクシー乗り場を利用。偽Blue Birdも存在するため公式アプリ「My Blue Bird」で配車が最安全',
  },
  {
    spot: '両替詐欺',
    warning: 'レートが良すぎる両替所に注意。計算を誤魔化す・紙幣を抜く手口あり。空港では銀行系ATMを利用。市内では評判の良い両替商（Dolarindo等）のみ',
  },
  {
    spot: 'スリ・置き引き',
    warning: '空港到着ロビー、駅構内、混雑する通りで注意。バッグは体の前に。スマホの歩きながら操作は控える。タナアバン市場は特にスリ多発',
  },
  {
    spot: 'ガイド詐欺',
    warning: '「無料で案内する」と近づいてくる人は最後に法外な料金を請求。断る時は「Tidak, terima kasih」（ノーサンキュー）',
  },
  {
    spot: '注意エリア（夜間）',
    warning: 'ガンビル駅周辺・モナス公園は夜間の一人歩きに注意。アンチョール港周辺は治安が悪く夜間は避ける',
  },
  {
    spot: '交通安全',
    warning: '横断歩道でも車は止まらない。歩道をバイクが走ることもある。ジャカルタの渋滞は世界最悪レベル。時間に余裕を持った移動が鉄則',
  },
]

export const emergencyContacts = [
  { name: '総合緊急通報', number: '112' },
  { name: '警察', number: '110' },
  { name: '消防', number: '113' },
  { name: '救急車', number: '119' },
  { name: '在インドネシア日本国大使館', number: '+62-21-3192-4308' },
  { name: '観光警察', number: '+62-21-526-4073' },
  { name: 'Blue Bird タクシー（忘れ物等）', number: '+62-21-7917-1234' },
]

// ===== MODEL SCHEDULES =====
export const modelSchedules = [
  {
    id: 'pattern-a',
    title: 'パターンA: 朝到着 → 午前中にバンドンへ',
    desc: '観光なし。最短でバンドンへ向かう',
    steps: [
      { time: '06:00', desc: 'CGK到着（入国審査・VOA・荷物受取: 約1時間）' },
      { time: '07:00', desc: 'SIMカード購入 + ATMで現金引き出し（15分）' },
      { time: '07:15', desc: '空港鉄道SHIA駅へ移動（10分）' },
      { time: '07:30', desc: '空港鉄道乗車 → BNI City駅（46分）' },
      { time: '08:16', desc: 'BNI City駅到着' },
      { time: '08:20', desc: 'Grabでガンビル駅へ（10分）' },
      { time: '08:30', desc: 'ガンビル駅到着 → チェックイン・軽食' },
      { time: '09:15', desc: 'KA 138 ガンビル発' },
      { time: '12:18', desc: 'バンドン到着' },
    ],
  },
  {
    id: 'pattern-b',
    title: 'パターンB: 朝到着 → ジャカルタ観光 → 夕方バンドンへ',
    desc: 'モナス・モスク・大聖堂を回ってから夕方便で移動',
    steps: [
      { time: '06:00', desc: 'CGK到着（入国審査・VOA・荷物受取: 約1時間）' },
      { time: '07:00', desc: 'SIMカード購入 + ATM（15分）' },
      { time: '07:15', desc: 'DAMRI or 空港鉄道でガンビル駅方面へ' },
      { time: '08:30', desc: 'ガンビル駅到着 → 荷物をロッカーに預ける' },
      { time: '09:00', desc: 'モナス見学（外観: 30分）' },
      { time: '09:30', desc: 'イスティクラル・モスク（20分）' },
      { time: '09:50', desc: 'ジャカルタ大聖堂（15分）' },
      { time: '10:15', desc: 'ガンビル駅に戻る → 昼食（30分）' },
      { time: '18:25', desc: 'KA 134 ガンビル発（半日かけてコタ・トゥアまで回ることも可能）' },
      { time: '21:20', desc: 'バンドン到着' },
    ],
  },
  {
    id: 'pattern-c',
    title: 'パターンC: 午後〜夕方到着 → 夕方/深夜便でバンドンへ',
    desc: '午後着の場合。夕食を楽しんでから移動',
    steps: [
      { time: '15:00', desc: 'CGK到着（入国審査等: 1時間）' },
      { time: '16:00', desc: 'SIMカード + 両替' },
      { time: '16:30', desc: '空港鉄道 or DAMRIでガンビル駅へ' },
      { time: '18:00', desc: 'ガンビル駅到着 → 食事（ソト・ベタウィを堪能）' },
      { time: '18:25', desc: 'KA 134 ガンビル発' },
      { time: '21:20', desc: 'バンドン到着（or 23:05 KA 140 深夜便でバンドン02:02着）' },
    ],
  },
]

// ===== COST ESTIMATE =====
export const costEstimate = [
  { item: 'VOA（到着ビザ）', idr: 500000, jpy: 4630 },
  { item: 'SIMカード（Telkomsel）', idr: 150000, jpy: 1390 },
  { item: '空港鉄道（Premium）', idr: 30000, jpy: 280 },
  { item: 'BNI City→ガンビル（Grab）', idr: 30000, jpy: 280 },
  { item: 'ガンビル駅ロッカー（2時間L）', idr: 30000, jpy: 280 },
  { item: '昼食', idr: 40000, jpy: 370 },
  { item: 'バンドン行き列車（Executive）', idr: 250000, jpy: 2310 },
]

// ===== INDONESIAN PHRASES =====
export const survivalPhrases = [
  { ja: 'ありがとう', id: 'Terima kasih', reading: 'テリマカシ' },
  { ja: 'ごめんなさい', id: 'Maaf', reading: 'マアフ' },
  { ja: 'いくらですか？', id: 'Berapa harganya?', reading: 'ブラパ ハルガニャ？' },
  { ja: 'ガンビル駅はどこですか？', id: 'Di mana Stasiun Gambir?', reading: 'ディマナ スタシウン ガンビル？' },
  { ja: 'いりません', id: 'Tidak, terima kasih', reading: 'ティダッ、テリマカシ' },
  { ja: '助けてください', id: 'Tolong!', reading: 'トロン！' },
  { ja: 'お会計', id: 'Minta bill', reading: 'ミンタ ビル' },
  { ja: 'おいしい', id: 'Enak!', reading: 'エナッ！' },
  { ja: '辛くしないでください', id: 'Tidak pedas', reading: 'ティダッ プダス' },
  { ja: '水', id: 'Air putih', reading: 'アイル プティ' },
]

// ===== WEATHER =====
export const weatherInfo = {
  climate: '熱帯モンスーン気候。2〜3月は雨季の真っただ中',
  february: { highTemp: '31℃', lowTemp: '24℃', rainfall: '326mm（年間最多月）', rainyDays: '14〜18日', humidity: '80〜90%' },
  rainPattern: '1日中降り続くのではなく、午後を中心に1〜3時間の激しいスコール。朝は晴れることが多い',
  floodRisk: 'ジャカルタは低地のため大雨時に道路冠水の可能性あり。冠水した道路は歩かない',
  clothing: [
    '速乾性の薄手Tシャツ・リネンシャツ（綿100%は汗で乾きにくい）',
    '薄手の長ズボン（モスク訪問時は膝を覆う必要あり）',
    '折りたたみ傘 + レインポンチョ（必須。突然のスコール対策）',
    '薄手のカーディガン/パーカー（列車・バス・モールの冷房が強い）',
    'サンダル + 防水スニーカー（雨季は足元が濡れやすい）',
    '日焼け止め SPF30以上 + 帽子（UV指数11+）',
    '虫除けスプレー（DEET入り。デング熱対策）',
  ],
}
