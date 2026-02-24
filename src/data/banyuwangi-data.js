// Banyuwangi Guide — structured data from research notes

export const sections = [
  { id: 'overview', label: '概要' },
  { id: 'ijen', label: 'イジェン' },
  { id: 'ferry', label: 'フェリー' },
  { id: 'spots', label: '観光' },
  { id: 'food', label: '食事' },
  { id: 'stay', label: '宿泊' },
  { id: 'transport', label: '交通' },
  { id: 'safety', label: '安全' },
]

export const mapSpots = [
  { name: 'バニュワンギ・コタ駅', lat: -8.2180, lng: 114.3570 },
  { name: 'クタパン駅', lat: -8.1620, lng: 114.4080 },
  { name: 'クタパン港', lat: -8.1593, lng: 114.4168 },
  { name: 'イジェン火口（カワ・イジェン）', lat: -8.0583, lng: 114.2420 },
  { name: 'パルトゥディン登山口', lat: -8.0630, lng: 114.2280 },
  { name: 'バルラン国立公園', lat: -7.8500, lng: 114.3700 },
  { name: 'プラウ・メラ', lat: -8.5750, lng: 114.0280 },
  { name: 'デ・ジャワタン森林', lat: -8.4410, lng: 114.2530 },
  { name: 'バニュワンギ市中心', lat: -8.2193, lng: 114.3691 },
]

export const mapPois = [
  { name: 'Nasi Tempong Mbok Nah', type: 'restaurant', lat: -8.2200, lng: 114.3680, detail: 'ナシ・テンポン Rp10,000〜' },
  { name: 'Rujak Soto Mbok Pat', type: 'restaurant', lat: -8.2190, lng: 114.3700, detail: 'ルジャック・ソト Rp10,000〜' },
  { name: 'Indomaret Banyuwangi', type: 'convenience', lat: -8.2185, lng: 114.3680, detail: '24時間コンビニ' },
  { name: 'ATM BCA Banyuwangi', type: 'atm', lat: -8.2188, lng: 114.3688, detail: 'BCA/BRI 24時間' },
]

export const budgetSummary = [
  { label: 'イジェンツアー', value: 'Rp 200,000〜450,000', note: '宿手配が最安' },
  { label: 'フェリー', value: 'Rp 6,500〜10,600', note: '徒歩旅客' },
  { label: '宿泊', value: 'Rp 75,000〜190,000', note: 'ドミ〜個室' },
  { label: '食事', value: 'Rp 10,000〜25,000', note: '1食あたり' },
]

export const ijenBasicInfo = [
  { label: '標高', value: '2,799m（火口縁）' },
  { label: 'トレッキング距離', value: '片道約3〜3.5km' },
  { label: '標高差', value: '約600m' },
  { label: '所要時間', value: '登り1.5〜2時間' },
  { label: '難易度', value: '中級（夜間登山）' },
  { label: '入場料（外国人）', value: 'Rp 100,000〜150,000' },
]

export const ijenEntryFees = [
  { category: '外国人', weekday: 'Rp 100,000', weekend: 'Rp 150,000' },
  { category: '外国人学生', weekday: 'Rp 100,000', weekend: 'Rp 150,000' },
  { category: 'インドネシア国民', weekday: 'Rp 5,000', weekend: 'Rp 7,500' },
  { category: '保険料（全員必須）', weekday: 'Rp 5,000', weekend: 'Rp 5,000' },
]

export const ijenRequirements = [
  { item: '健康証明書', desc: '全訪問者に必須。バニュワンギ市内クリニックで取得', critical: true, link: 'ijen-health' },
  { item: 'オンライン事前予約', desc: '当日購入不可。BBKSDAの公式サイトで事前にチケット購入', critical: true },
  { item: 'ガイド同伴', desc: '2024年1月〜全訪問者に義務化', critical: true },
  { item: 'ガスマスク', desc: '全訪問者に必須。レンタル可（Rp 10,000〜25,000）', critical: true },
  { item: 'QRIS決済', desc: '現金不可。OVO/GoPay/ShopeePay等のアプリが必要', critical: true },
]

export const ijenEquipment = [
  { item: 'ガスマスク', detail: '必須。レンタル可（登山口でRp 10,000〜25,000）', essential: true },
  { item: 'ゴーグル', detail: '推奨。レンタルRp 25,000', essential: false },
  { item: 'ヘッドランプ', detail: '必須（夜間登山のため）', essential: true },
  { item: '防寒着', detail: 'フリース＋ウインドブレーカー。山頂は10℃以下', essential: true },
  { item: '登山靴', detail: 'グリップの効くもの。火口への道は岩だらけで急勾配', essential: true },
  { item: 'タオル', detail: '濡らして鼻口に当てると硫黄ガス軽減に有効', essential: false },
  { item: '水 500ml以上', detail: '推奨1L。脱水は高山病を悪化させる', essential: true },
  { item: '汚れてもよい服', detail: '硫黄臭が付着して取れにくい。帰り用の服を別に用意', essential: false },
  { item: 'モバイルバッテリー', detail: '寒さでスマホの電池が急減。QRIS決済にも必要', essential: true },
]

export const ijenTourOperators = [
  {
    id: 'hostel',
    name: '宿泊先で手配（最安）',
    recommended: true,
    price: 'Rp 200,000〜300,000/人',
    includes: 'ガイド、ガスマスク、ドライバー',
    whatsapp: null,
    details: [
      { hostel: 'Green Ijen Homestay', price: 'Rp 200,000/人', note: '元硫黄鉱夫ガイドBarry付き' },
      { hostel: 'Backpacker Kawah Ijen', price: 'Rp 250,000〜300,000/人', note: 'ツアー後に滝見学付き' },
    ],
    steps: [
      'チェックイン時に「今夜イジェンツアーに行きたい」と伝える',
      'スタッフが提携ガイドに連絡（5-10分）',
      '料金・含まれるものを確認',
      '現金でスタッフに支払い',
      '出発時間（23:00-0:00）を確認し仮眠',
      'ロビーに降りる。ガイド＋ドライバーが車で待機',
    ],
  },
  {
    id: 'blueflame',
    name: 'BlueFlame Tours',
    recommended: false,
    price: 'Rp 450,000/人（シェア）',
    includes: '車両＋ガイド、健康証明書、入場料、ガスマスク、ヘッドライト、水',
    whatsapp: '62877559208​76',
    website: 'blueflametour.com',
    steps: [
      'WhatsAppで「Ijen shared tour + 日付 + 人数」と送信',
      '返信は通常数時間以内',
      '23:00-0:00にホテル出迎え、09:00頃帰着',
    ],
  },
  {
    id: 'expedition',
    name: 'Ijen Expedition Tour',
    recommended: false,
    price: '1名 Rp 975,000 / 2名 Rp 712,000/人',
    includes: '快適な車/ミニバス、入場料、ガイド、ガスマスク、朝食',
    whatsapp: '6285748711646',
    website: 'ijenexpeditiontour.com',
    steps: [
      'WhatsAppで「日程・人数・出発地」を送信',
      '数分以内に見積もり返信',
    ],
  },
  {
    id: 'miner',
    name: 'Ijen Miner Tour',
    recommended: false,
    price: '要確認',
    includes: 'TripAdvisor 4.8/5.0（343件）',
    whatsapp: '6281259111535',
    website: 'ijenminertour.com',
    steps: [
      'WhatsAppまたはウェブサイト経由で予約',
    ],
  },
]

export const ijenHealthClinics = [
  { name: 'Klinik Shinta', address: 'Jl. Gajah Mada No.45, Mojopanggung', hours: '24時間', cost: 'Rp 40,000', phone: null },
  { name: 'Klinik Brawijaya', address: 'Jl. Brawijaya No.46B, Kebalenan', hours: '24時間', cost: 'Rp 30,000〜50,000', phone: '(0333) 423711' },
  { name: 'Yasmin Hospital', address: 'Jl. Letkol Istiqlah No.80-84', hours: '24時間', cost: 'Rp 50,000〜100,000', phone: '+62-852-5935-3001' },
  { name: 'Klinik Prambanan', address: 'Jl. Prambanan No.1', hours: '24時間', cost: 'Rp 30,000〜50,000', phone: null },
  { name: 'Puskesmas Mojopanggung', address: 'Jl. K.H. Agus Salim No.106', hours: '日中のみ', cost: 'Rp 25,000〜', phone: null },
  { name: 'RS Blambangan（県立病院）', address: 'Banyuwangi市内', hours: '24時間', cost: 'Rp 50,000〜', phone: '(0333) 421118' },
]

export const ijenHealthProcess = [
  'パスポートのコピーを提出',
  '既往歴の確認（心臓病・喘息・高血圧）',
  '血圧測定',
  '脈拍測定',
  '体温測定',
  '証明書発行（所要約10-15分）',
]

export const ijenHealthDenied = [
  '心臓疾患のある人',
  '喘息・重度の呼吸器疾患',
  '体重100kg超',
  '妊婦',
  '3歳未満の幼児',
  '極度の高血圧',
]

export const ijenTrekTimeline = [
  { time: '22:00-23:00', title: '出発前の準備', desc: '防寒着を重ね着（長袖＋フリース＋ウインドブレーカー）。スマホ満充電。持ち物最終確認', icon: '🎒' },
  { time: '23:00-00:00', title: 'ホテルピックアップ', desc: 'ガイド＋ドライバーが車で宿泊先に迎え。ガスマスクとヘッドライト配布', icon: '🚐' },
  { time: '00:00-00:30', title: 'クリニック立ち寄り', desc: '健康証明書未取得の場合、24時間クリニックへ。血圧・脈拍・体温測定。約10-15分', icon: '🏥' },
  { time: '00:30-01:30', title: 'パルトゥディンへドライブ', desc: 'バニュワンギ市内から西へ。標高が上がるにつれ気温が急降下。山道はつづら折り', icon: '🚗' },
  { time: '01:30-02:00', title: 'パルトゥディン到着・入場', desc: '駐車場でワルン（売店）営業中。ゲートでEチケット・健康証明書・パスポート提示。QRISで支払い', icon: '🎫' },
  { time: '02:00-02:30', title: '登山開始（最初の1km）', desc: '幅3-4mの緩やかな土の道。ヘッドライトの光の列が上へ続く', icon: '🥾' },
  { time: '02:30-03:15', title: '最も急な区間（1-2km）', desc: '傾斜が急激にきつくなる。砂利と岩の混じった道。ここが最もキツい区間', icon: '⛰️' },
  { time: '03:15-03:30', title: '火口縁に到着（2-3km）', desc: '風が強まり気温さらに低下（5-10℃）。硫黄の匂いが漂い始める', icon: '🌋' },
  { time: '03:30-05:00', title: 'ブルーファイア鑑賞', desc: '火口底への急勾配の岩場を下降。600℃の硫黄ガスが青い炎を上げて燃焼。暗闇でのみ可視', icon: '🔥' },
  { time: '05:00-05:30', title: '火口縁に戻り日の出待ち', desc: '火口底から登り返し。日の出5:15-5:30頃。火口湖がターコイズ色に輝く', icon: '🌅' },
  { time: '05:30-07:00', title: '下山', desc: '来た道を戻る。約1-1.5時間。明るい中で周囲の山々のパノラマを楽しめる', icon: '🏔️' },
  { time: '07:30-09:00', title: 'ホテル帰着', desc: 'ツアー車両でバニュワンギのホテルへ。シャワー・仮眠。硫黄臭の服は即洗濯', icon: '🏨' },
]

export const ijenTips = [
  'ブルーファイアの「見え方」に期待値を調整する。ネット上の写真は長時間露光。肉眼ではもっと小さく、淡い青い炎に見える。それでも暗闇の火口で見る青い炎は十分に感動的',
  'ガスマスクは「濡れタオル」と併用する。ツアー配布の簡易ガスマスクだけでは不十分な場面がある。濡らしたタオルを鼻と口に当て、その上からガスマスク装着',
  'カメラのレンズ曇り対策。硫黄ガスと湿気で一瞬で曇る。レンズクロス複数枚持参。ジップロックでカメラを保護',
  'トイレは登山前に済ませる。パルトゥディンの簡易トイレ（Rp 2,000-5,000）が最後のチャンス。往復4-5時間トイレなし',
  '水は「最低」500ml、推奨1L。標高2,400mの登山は発汗量が多い。脱水は高山病を悪化させる',
  '硫黄鉱夫への配慮。70-90kgの硫黄を背負って登ってくる鉱夫には「絶対に」道を譲る。写真は一声かけてから',
  '風向きの急変に備える。「黄色い雲」が迫ってきたら即座に風上へ移動。パニックで走ると転倒の危険',
  '帰りの服を別に用意する。硫黄臭は洗っても完全には取れない。ビニール袋で汚れた服を密封',
  'スマホの予備バッテリーは必須。寒さで急減。QRISでの入場料支払い、Eチケット表示など生命線',
  '火口底への降下は「任意」。体力に不安がある場合、火口縁から日の出と火口湖を見るだけでも十分に価値がある',
  '乾季でも雨は降る。レインコートは念のため持参。ザックの防水カバーも忘れずに',
  '火口縁に柵はない。暗闇で地形が見えにくく、一歩間違えば酸性湖（pH 0.5）に落下。ガイドの指示する範囲内で行動',
]

export const lamborghiniCart = {
  what: '硫黄運搬用の手押し一輪車を改造した人力カート。「ランボルギーニ」の愛称',
  structure: '幅約70cm、車輪2つ。仰向けに寝てバーにつかまる。3人で押し引き',
  price: '登り Rp 600,000 / 下り Rp 200,000（往復 Rp 800,000）',
  section: 'パルトゥディン登山口〜火口縁（片道約3km）。火口底への降下は対応外',
  users: '体力に自信のない年配者や膝を痛めた人が主な利用者',
}

export const ferryQuickInfo = [
  { label: '運賃（大人）', value: 'Rp 6,500' },
  { label: '所要時間', value: '30〜45分' },
  { label: '運航間隔', value: '15〜30分ごと' },
  { label: '運航時間', value: '24時間' },
]

export const ferryBooking = [
  {
    id: 'ferizy',
    name: 'Ferizyアプリ（推奨）',
    recommended: true,
    steps: [
      'Google Play / App Storeで「Ferizy」をダウンロード',
      'Google MailまたはFacebookでログイン',
      '出発港「Ketapang」→ 到着港「Gilimanuk」を選択',
      '「Pejalan Kaki / Foot Passenger」、日付、人数を入力',
      '氏名、パスポート番号を入力',
      'QRIS / OVO / ShopeePay / コンビニ払いで支払い',
      'Eチケットがメールとアプリ内に届く',
    ],
    note: 'ウェブ版: trip.ferizy.com からも購入可能。徒歩大人 Rp 10,600（レギュラークラス）',
  },
  {
    id: 'counter',
    name: '港のチケット窓口',
    recommended: false,
    steps: [
      '港ターミナル内のカウンターへ',
      'パスポート提示 → 旅客輸送フォームに記入',
      '支払い（現金OK）',
    ],
    note: '2025年以降デジタル移行が進み、窓口で買えない場合が出てきている',
  },
  {
    id: 'tiket',
    name: 'tiket.com',
    recommended: false,
    steps: [
      'tiket.com にアクセス',
      'フェリーのセクションからKetapang→Gilimanukを検索',
      'オンライン決済',
    ],
    note: null,
  },
]

export const ferrySteps = [
  { step: 1, title: '旅客入口を探す', desc: '車両レーンとは別の「旅客入口（Penumpang / Passenger）」へ。看板が分かりにくいとの口コミあり' },
  { step: 2, title: 'セキュリティチェック', desc: '簡単な荷物検査' },
  { step: 3, title: '待合エリアで待機', desc: '屋根付きの待合スペースあり。次の便を待つ（15-30分間隔）' },
  { step: 4, title: '乗船', desc: 'アナウンスまたはスタッフの指示で乗船。車両の後に徒歩旅客が乗り込む' },
  { step: 5, title: '船内で過ごす', desc: '上階の客室へ。エアコン席、充電ステーション、カフェテリアあり。デッキでバリ海峡の景色も楽しめる' },
]

export const ferryOnboard = [
  'エアコン付き客室にプラスチック座席',
  '礼拝室、トイレ、テレビ、充電ステーション',
  'カフェテリア（コーヒー、カップ麺、スナック、冷たい飲料）',
  '外のデッキでバリ海峡の景色を楽しめる',
]

export const ferryArrival = [
  '船着岸後、車両が先に下船 → 徒歩旅客が下船',
  'ギリマヌク港ターミナルへ出る',
  '移動手段: Grab/GoJek（バリ南部へ3-5時間）、公共バス（デンパサール行きRp 60,000-80,000）、チャーター車（客引きと交渉）',
]

export const touristSpots = [
  {
    id: 'baluran',
    name: 'バルラン国立公園',
    tagline: '「ジャワのアフリカ」のサバンナ',
    fee: 'Rp 165,000〜',
    distance: '車で約1〜1.5時間',
    hours: '07:00〜16:00',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/%22Baluran%22_Africa_van_Java.jpg/640px-%22Baluran%22_Africa_van_Java.jpg',
    highlights: [
      'ベコル・サバンナ: ジャワ島最大の草原',
      'バマ・ビーチ: シュノーケリングでサンゴ礁',
      'ジャワバンテン（絶滅危惧種の野牛）、クジャク',
    ],
    season: '5月〜12月がベスト',
  },
  {
    id: 'pulau-merah',
    name: 'プラウ・メラ（Red Island）',
    tagline: '干潮時に渡れる赤い島と壮大な夕日',
    fee: 'Rp 8,000〜10,000',
    distance: '約60km南（車1.5時間）',
    hours: '07:00-17:00',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Sunset_at_pulau_merah_banyuwangi.jpg/640px-Sunset_at_pulau_merah_banyuwangi.jpg',
    highlights: [
      '干潮時に徒歩で島に渡れる。寺院あり',
      'サーフィン: 波高3m超の日も',
      '壮大なサンセットスポット',
    ],
    season: '乾季がおすすめ',
  },
  {
    id: 'sukamade',
    name: 'スカマデ・ビーチ',
    tagline: 'ウミガメの聖地。産卵＆子ガメ放流体験',
    fee: 'Rp 150,000〜200,000',
    distance: '約97km（車5時間）',
    hours: '1泊2日ツアー推奨',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Green_Sea_Turtle_laying_her_eggs_on_Sukamade_beach.jpg/640px-Green_Sea_Turtle_laying_her_eggs_on_Sukamade_beach.jpg',
    highlights: [
      '夜間のウミガメ産卵観察',
      '翌朝の子ガメ放流体験',
      '4WDジープでのオフロード移動',
    ],
    season: '通年（宿泊施設は基本的）',
  },
  {
    id: 'tabuhan',
    name: 'タブハン島',
    tagline: '白砂とサンゴ礁の無人島',
    fee: 'Rp 30,000〜50,000',
    distance: 'ボートで30-45分',
    hours: '日中',
    image: null,
    highlights: [
      '透明な海と美しいサンゴ礁',
      'シュノーケリング・カイトサーフィン',
      'ボートRp 500,000（10人まで割り勘可）',
    ],
    season: '4月〜10月',
  },
  {
    id: 'jagir',
    name: 'ジャギール滝',
    tagline: '市内から20分の双子の滝',
    fee: 'Rp 5,000',
    distance: '市内から車20分',
    hours: '日中',
    image: null,
    highlights: [
      '双子の滝、天然プールで水遊び可能',
      '入口から徒歩約10分の簡単なトレイル',
      '近くにクテガン滝もあり',
    ],
    season: '通年',
  },
  {
    id: 'djawatan',
    name: 'デ・ジャワタン森林公園',
    tagline: 'ファンタジー映画のような幻想的な古木の森',
    fee: 'Rp 20,000',
    distance: '約34km南（車1時間）',
    hours: '08:00〜17:00',
    image: null,
    highlights: [
      'オランダ植民地時代からの苔むした巨木',
      '馬車レンタルあり',
      '家族連れに人気',
    ],
    season: '通年',
  },
  {
    id: 'alas-purwo',
    name: 'アラス・プルウォ国立公園',
    tagline: 'ジャワ島最東端。G-Landサーフスポット',
    fee: 'Rp 150,000〜200,000',
    distance: '車で約1時間40分',
    hours: '日中',
    image: null,
    highlights: [
      'G-Land: アジア屈指のサーフスポット（経験者向け）',
      'マングローブ林、白砂ビーチ',
      'インドクジャク、キャンプ',
    ],
    season: 'サーフ: 3月〜11月',
  },
  {
    id: 'gandrung-terakota',
    name: 'タマン・ガンドルン・テラコッタ',
    tagline: '1,000体以上のテラコッタ像が並ぶ文化庭園',
    fee: 'Rp 100,000（ガイド・飲食・舞踊鑑賞込み）',
    distance: 'イジェンへの途中（リチン地区）',
    hours: '08:00〜17:00',
    image: null,
    highlights: [
      '水田の中に1,000体以上のガンドルン踊り子像',
      'ライブパフォーマンス、工芸ワークショップ',
      'イジェンツアーと組み合わせやすい立地',
    ],
    season: '通年',
  },
]

export const localDishes = [
  {
    id: 'nasi-tempong',
    name: 'ナシ・テンポン',
    highlight: true,
    desc: 'バニュワンギ最代表の激辛料理。白飯＋おかず＋生唐辛子サンバル。「テンポン（殴る）」は辛さの衝撃を表現',
    price: 'Rp 10,000〜',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Nasi_tempong_ikan_goreng_1.jpg/640px-Nasi_tempong_ikan_goreng_1.jpg',
    restaurants: [
      { name: 'Nasi Tempong Mbok Nah', address: 'Jl. Kolonel Sugiono No.6', hours: '08:00-00:00' },
      { name: 'Warung Nasi Tempong Mbak Ndut', address: 'Jl. Kolonel Sugiono', hours: '10:00-23:00' },
      { name: 'Sego Tempong Mbok Wah', address: 'Jl. Gembrung No.220', hours: '08:00-22:00' },
    ],
  },
  {
    id: 'rujak-soto',
    name: 'ルジャック・ソト',
    highlight: false,
    desc: 'ルジャック（野菜サラダ）とソト（スープ）の合体。辛い・酸っぱい・甘い・旨味が一度に味わえる',
    price: 'Rp 8,000〜',
    image: null,
    restaurants: [
      { name: 'Rujak Soto Mbok Pat（伝説的名店）', address: 'Jl. Kyai Saleh No.53', hours: '10:00-15:00' },
      { name: 'Rujak Soto Bu No（1980年創業）', address: 'Jl. Letnan Sulaiman Gang VI', hours: '08:00-17:00' },
      { name: 'Rujak Soto Mak Sum', address: 'Jl. Letjen D.I Panjaitan No.49', hours: '11:30-20:30' },
    ],
  },
  {
    id: 'pecel-rawon',
    name: 'プチェル・ラウォン',
    highlight: false,
    desc: 'ピーナッツソースかけ野菜ご飯と、クルワック（黒い木の実）を使った黒いスープのセット',
    price: 'Rp 10,000〜',
    image: null,
    restaurants: [],
  },
  {
    id: 'sego-cawuk',
    name: 'セゴ・チャウック',
    highlight: false,
    desc: '白飯にすりおろしココナッツ、焼きヤングコーン、タマリンドスープをかけた爽やかな朝食',
    price: 'Rp 8,000〜',
    image: null,
    restaurants: [],
  },
  {
    id: 'pecel-pitik',
    name: 'プチェル・ピティック',
    highlight: false,
    desc: '若い地鶏を辛甘い調味料で調理し、ローストココナッツと共に提供。元来はオシン族の儀式料理',
    price: 'Rp 15,000〜',
    image: null,
    restaurants: [],
  },
]

export const streetFoodAreas = [
  { name: 'プチナン・ストリートフード', location: 'Jl. Ikan Gurame, Karangrejo（関帝廟周辺）', hours: '夕方〜', note: '中華系とローカルのハラル屋台' },
  { name: 'パサール・コパット', location: 'Jl. Nusa Indah, Boyolangu', hours: '土曜 18:00-21:00', note: '軽食・重食の屋台市場' },
  { name: 'パサール・カンポン・オシン', location: 'Kemiren, Glagah', hours: '日曜 06:00-09:00', note: 'オシン族の伝統料理が味わえる朝市' },
]

export const coffeeInfo = {
  intro: 'バニュワンギはインドネシア有数のコーヒー産地。イジェン高原を中心にアラビカ種とロブスタ種が栽培される',
  farms: [
    { name: 'カリクラタック農園', note: 'ロブスタ・アラビカ・カカオ・シナモン', duration: '半日' },
    { name: 'テレムン村', note: 'コピ・ルアック（ジャコウネコ珈琲）の産地', duration: '3時間〜' },
    { name: 'ブラワン農園', note: 'イジェン高原の高品質アラビカ', duration: '半日' },
  ],
}

export const accommodations = {
  ijenFriendly: [
    {
      name: 'Backpacker Kawah Ijen',
      price: 'Rp 75,000〜（ドミ）/ Rp 175,000〜（個室）',
      features: 'WiFi、ツアーデスク、レストラン/カフェ併設',
      tour: 'Rp 250,000/人（平日）、滝見学付き',
      location: 'バニュワンギ・コタ駅近く',
    },
    {
      name: 'Green Ijen Homestay',
      price: '要確認',
      features: 'AC/ファン、WiFi、温水シャワー',
      tour: 'Rp 200,000/人（元硫黄鉱夫ガイド付き）',
      location: 'ターミナル・ブランバンガンから5分',
    },
    {
      name: 'Ijen Backpacker',
      price: 'Rp 80,000〜',
      features: 'WiFi、無料飲料水/コーヒー',
      tour: 'パッケージツアー手配可',
      location: 'クタパン駅から徒歩2分、フェリー港から徒歩4分',
    },
    {
      name: 'Mango Tree Homestay',
      price: 'Rp 150,000〜',
      features: 'AC、WiFi、シャワー、24時間フロント',
      tour: 'イジェンツアー手配可',
      location: '市中心部',
    },
    {
      name: 'Zzz Ijen Hostel',
      price: '要確認',
      features: 'WiFi、ミニガーデン、共用キッチン',
      tour: 'ツアー手配可、ローカル情報に詳しいスタッフ',
      location: '市中心部から約1km',
    },
  ],
  highland: [
    { name: 'Ijen Resort & Villas', price: 'Rp 800,000〜', note: '熱帯雨林と水田に囲まれたリゾート' },
    { name: 'Jiwa Jawa Resort Ijen', price: 'Rp 700,000〜', note: 'イジェン高原の密林に佇むリゾート' },
    { name: 'Kampung Joglo Ijen', price: 'Rp 300,000〜', note: '水田ビュー、プール、川探検' },
    { name: 'Bamboo & B', price: 'Rp 250,000〜', note: '竹建築のユニークな宿' },
  ],
  southCoast: [
    { name: 'Banana Homestay', price: '要確認', note: 'グランド・ワトゥドドルビーチから14km。長期滞在割引あり' },
    { name: 'Java Turtle Lodge Meru Betiri', price: '要確認', note: 'スカマデ海岸のウミガメ産卵地隣接' },
  ],
}

export const transportToCity = {
  train: {
    name: 'タワン・アルン号（KA Tawang Alun）',
    route: 'マラン・コタラマ → バニュワンギ・バル（クタパン）',
    depart: '15:50',
    arrive: '約22:30',
    duration: '約6時間37分',
    fare: 'Rp 62,000〜',
    booking: 'KAI公式サイト (kai.id) / Traveloka / tiket.com',
    notes: [
      'エコノミーエアコン車両。1日1便',
      'バニュワンギ・コタ駅（BWI）: 市中心部',
      'クタパン駅（KTG）: フェリー港近く。市中心から北へ約10-12km',
    ],
  },
  bus: {
    name: 'バス（複数社）',
    duration: '約8時間49分',
    fare: 'Rp 72,000〜200,000',
    companies: 'Setia Hati Travel, PUTRI TRAVEL, Sigarwotrans',
  },
}

export const localTransport = [
  { name: 'Grab / GoJek', detail: 'バイク・車両とも利用可。最も便利', fare: 'アプリ表示額' },
  { name: 'アンコット（Angkot）', detail: '市内ミニバス。11路線。06:00-22:00運行', fare: 'Rp 5,000〜10,000' },
  { name: 'オジェック（Ojek）', detail: '伝統的バイクタクシー。料金交渉制', fare: '距離による' },
  { name: 'バイクレンタル', detail: '1日レンタル', fare: '約 Rp 75,000/日' },
  { name: '無料DAMRIバス', detail: '観光用無料シャトル。イジェン・テルク・イジョ・プレンクンビーチ方面', fare: '無料' },
]

export const toKetapang = {
  options: [
    { method: '電車', detail: 'バニュワンギ・コタ → クタパン駅（5分、1日5本）', recommended: true },
    { method: 'Grab/GoJek', detail: '約10km北。アプリで配車', recommended: false },
    { method: 'アンコット', detail: '路線バスで移動可能', recommended: false },
  ],
}

export const safetyAlerts = [
  { spot: '硫黄ガス', warning: '風向きが急変し、濃いガスに巻かれることがある。パニックにならず風上に移動しガイドの指示に従うこと' },
  { spot: '呼吸器疾患', warning: '喘息・呼吸器系の持病がある人は火口への降下は絶対に避ける' },
  { spot: '酸性湖', warning: 'pH 0.5以下。水に触れると重度の化学火傷の危険' },
  { spot: '足場', warning: '火口への下降路は急勾配の岩場。滑落注意' },
  { spot: '火山活動', warning: '活火山であり、活動レベルの上昇で突然閉鎖されることがある（2024年7-9月 約2ヶ月間閉鎖）' },
  { spot: 'フェリー沈没事故（2025年）', warning: '2025年にバリ海峡でフェリー沈没事故が発生（6名死亡）。悪天候時は運航遅延/中止あり。パスポートは防水ケースで携帯' },
]
