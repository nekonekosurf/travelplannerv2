// Ketapang Guide — structured data
// ケタパン港エリア（バニュワンギ北部）フェリー前泊ガイド

export const sections = [
  { id: 'overview', label: '概要' },
  { id: 'ferry', label: 'フェリー' },
  { id: 'attractions', label: '観光' },
  { id: 'food', label: '食事' },
  { id: 'stay', label: '宿泊' },
  { id: 'transport', label: '交通' },
  { id: 'safety', label: '安全' },
]

export const mapSpots = [
  { name: 'ケタパン港（フェリーターミナル）', lat: -8.1593, lng: 114.4168 },
  { name: 'バンスリン・アンダーウォーター', lat: -8.0980, lng: 114.3800 },
  { name: 'プラウ・タブハン', lat: -8.0700, lng: 114.3000 },
  { name: 'ワトゥドドル・ビーチ', lat: -8.1790, lng: 114.3700 },
  { name: 'デルマガ・チンタ（愛の桟橋）', lat: -8.1620, lng: 114.4100 },
  { name: 'バルラン国立公園', lat: -7.8500, lng: 114.3700 },
  { name: 'デ・ジャワタン（ガジュマルの森）', lat: -8.4410, lng: 114.2530 },
  { name: 'クタパン駅', lat: -8.1620, lng: 114.4080 },
]

export const mapPois = [
  { name: 'RM Padang Sederhana', type: 'restaurant', lat: -8.1600, lng: 114.4140, detail: 'パダン料理 Rp15,000〜' },
  { name: 'Warung Laut Ketapang', type: 'restaurant', lat: -8.1590, lng: 114.4130, detail: 'シーフード Rp25,000〜' },
  { name: 'Indomaret Ketapang', type: 'convenience', lat: -8.1605, lng: 114.4135, detail: '24時間コンビニ' },
  { name: 'ATM BRI Ketapang', type: 'atm', lat: -8.1608, lng: 114.4145, detail: 'BRI 24時間' },
]

export const budgetSummary = [
  { label: 'フェリー（徒歩）', value: 'Rp 10,600', note: '大人1名' },
  { label: '宿泊（1泊）', value: 'Rp 100,000〜300,000', note: 'ゲストハウス〜ホテル' },
  { label: '食事', value: 'Rp 10,000〜35,000', note: '1食あたり' },
  { label: 'バンスリン', value: 'Rp 15,000〜150,000', note: '入場+シュノーケリング' },
]

// ===== FERRY =====
export const ferryQuickInfo = [
  { label: '航路', value: 'ケタパン→ギリマヌク' },
  { label: '所要時間', value: '45分〜1時間' },
  { label: '運航', value: '24時間（15-30分間隔）' },
  { label: '徒歩料金', value: 'Rp 10,600' },
]

export const ferryPrices = [
  { type: '徒歩旅客（大人）', price: 'Rp 10,600', note: '' },
  { type: '徒歩旅客（子供）', price: 'Rp 6,500', note: '3-12歳' },
  { type: 'バイク（ライダー込）', price: 'Rp 35,000〜46,000', note: '排気量による' },
  { type: '車（ドライバー込）', price: 'Rp 130,000〜290,000', note: '車種による' },
  { type: 'バス', price: 'Rp 185,000〜', note: 'ミニバス〜大型' },
]

export const ferryTips = [
  '早朝便（5:00-7:00）は空いている。混雑は朝8-10時と夕方16-18時',
  'Ferizyアプリで事前購入が最もスムーズ。窓口は現金のみ、長い列になることも',
  '出航15-20分前にはターミナルに到着すること。出航間際は乗れない場合あり',
  '船内は冷房が効いている。上着1枚あると快適',
  '2階デッキからバリ海峡の眺めが良い。写真撮影スポット',
  'パスポートを求められることは稀だが念のため携帯。防水ケースに入れておく',
  '船内にトイレ・小売店あり。カップ麺 Rp 5,000程度',
  'ギリマヌク到着後はGrab/タクシーでバリ各地へ。ロヴィナ約2時間、クタ約4時間',
  '荒天時は欠航あり。特に12-2月の雨季は注意',
  'ターミナル周辺に飲食店・屋台あり。出航待ちの間に食事可能',
]

export const ferryProcess = [
  { step: 1, title: 'ターミナル到着', desc: 'ケタパン港フェリーターミナルへ。駅から徒歩10分、Grab約5分' },
  { step: 2, title: 'チケット購入', desc: 'Ferizyアプリ（推奨）or 窓口。身分証（パスポート）提示' },
  { step: 3, title: '待合室で待機', desc: '出航アナウンスを待つ。電光掲示板で船名と出発時刻を確認' },
  { step: 4, title: '乗船', desc: '徒歩旅客は車両の横を通って乗船。2階客室がおすすめ' },
  { step: 5, title: 'ギリマヌク到着', desc: 'バリ島ギリマヌク港着。入国審査はなし（同じインドネシア国内）' },
]

// ===== ATTRACTIONS =====
export const nearbyAttractions = [
  {
    id: 'bangsring',
    name: 'バンスリン・アンダーウォーター',
    tagline: 'ケタパン港から車10分。珊瑚再生プロジェクトの海',
    distance: '港から約7km（車10分）',
    hours: '07:00〜16:00',
    fee: 'Rp 15,000（入場）',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Banyuwangi-Bangsring-underwater.jpg/640px-Banyuwangi-Bangsring-underwater.jpg',
    highlights: [
      '地元漁師主導のサンゴ礁再生プロジェクト。かつてダイナマイト漁で壊滅した海を復活させた成功例',
      'シュノーケリング Rp 50,000〜（器材レンタル込）。カラフルなサンゴと熱帯魚が間近に',
      'フローティングネット（浮き網）でサメやウミガメと一緒に泳げる体験 Rp 100,000〜',
      '沖合のプラウ・タブハン島へのボートツアー Rp 150,000〜（往復）',
      'グラスボトムボートあり。泳げない人でも海底のサンゴを見られる',
      '更衣室・シャワー完備。ロッカーはないので貴重品注意',
      'ウェットシーズン（12-2月）は波が高く催行中止の場合あり',
    ],
    season: '4〜10月（乾季）がベスト',
  },
  {
    id: 'tabuhan',
    name: 'プラウ・タブハン島',
    tagline: '無人島の真っ白なビーチとターコイズブルーの海',
    distance: 'バンスリンからボート30分',
    hours: '日帰りツアーのみ',
    fee: 'Rp 150,000〜（ボート往復）',
    image: '',
    highlights: [
      'バンスリンまたはケタパンからボートで約30分の小さな無人島',
      '透明度抜群の海でシュノーケリング。珊瑚礁が島を取り囲む',
      '白い砂浜でのんびり過ごす。日陰は少ないので帽子・日焼け止め必須',
      'ボートツアーはバンスリンで手配。朝8-9時出発が多い',
      '島にはトイレ・売店なし。飲料水と軽食を持参すること',
    ],
    season: '4〜10月（乾季）',
  },
  {
    id: 'watududol',
    name: 'ワトゥドドル・ビーチ',
    tagline: '巨岩が点在する黒砂のビーチ。夕日スポット',
    distance: '港から約5km（車7分）',
    hours: '24時間（日中推奨）',
    fee: 'Rp 5,000（駐車場）',
    image: '',
    highlights: [
      '黒砂の浜に巨大な岩が散在する独特の景観',
      '夕日の名所。17:00-18:00が撮影ベストタイム',
      '地元の人の憩いの場。週末は家族連れで賑わう',
      '波が強いので遊泳には不向き。景色と写真を楽しむビーチ',
      '周辺に屋台あり。焼きトウモロコシ Rp 5,000〜',
    ],
    season: '通年',
  },
  {
    id: 'dermaga-cinta',
    name: 'デルマガ・チンタ（愛の桟橋）',
    tagline: 'マングローブの中のフォトジェニックな木道',
    distance: '港から約3km（車5分）',
    hours: '08:00〜17:00',
    fee: 'Rp 10,000',
    image: '',
    highlights: [
      'マングローブ林の中に整備された木道を歩けるエコツーリズムスポット',
      'SNS映えするカラフルな装飾とフォトスポットが多数',
      'マングローブの根の間を泳ぐ小魚やカニを観察できる',
      '所要時間30-45分。散歩にちょうどいい規模',
      '夕方は蚊が多い。虫除けスプレー推奨',
    ],
    season: '通年',
  },
  {
    id: 'baluran',
    name: 'バルラン国立公園',
    tagline: '「ジャワのアフリカ」—サバンナと野生動物',
    distance: '港から約60km（車1.5時間）',
    hours: '07:00〜17:00',
    fee: '外国人 Rp 150,000',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Savana_Bekol_Taman_Nasional_Baluran.jpg/1024px-Savana_Bekol_Taman_Nasional_Baluran.jpg',
    highlights: [
      '東ジャワ北端に広がるサバンナ。アフリカを思わせる草原に野生の水牛やシカが群れる',
      'ベコル・サバンナが一番の見どころ。朝6-8時が動物が活発で写真映えする',
      'バマ・ビーチ（園内）は静かな白砂ビーチ。マングローブ+サンゴ礁の稀有な組み合わせ',
      '園内の道路状態は良好だが自家用車/バイクが必要。公共交通なし',
      'ツアー（バニュワンギ発）Rp 300,000〜。マランからの日帰りは遠すぎる',
      '野生のサルが多い。食べ物を見せない・車の窓を閉めること',
    ],
    season: '6〜11月（乾季。サバンナが黄金色に）',
  },
  {
    id: 'jawatan',
    name: 'デ・ジャワタン（ガジュマルの森）',
    tagline: 'ロード・オブ・ザ・リングのような幻想的な森',
    distance: '港から約45km（車1時間）',
    hours: '07:00〜17:00',
    fee: 'Rp 10,000',
    image: '',
    highlights: [
      '樹齢数百年のガジュマル（バニヤンツリー）が密集する神秘的な森',
      '映画のワンシーンのような光と影のコントラスト。早朝の光線が最も美しい',
      'インドネシア人に大人気のSNSスポット。週末は混雑するため平日早朝がベスト',
      '遊歩道が整備されており歩きやすい。所要時間1-2時間',
      'ブンチュルク（Benculuk）地区。ケタパン港からは南へ約1時間',
    ],
    season: '通年（早朝の霧が美しい雨季もおすすめ）',
  },
]

// ===== RESTAURANTS =====
export const restaurants = [
  {
    id: 'warung-laut',
    name: 'Warung Laut Ketapang',
    type: 'シーフード',
    price: 'Rp 25,000〜60,000',
    distance: '港から徒歩5分',
    desc: '港近くの海鮮食堂。イカン・バカール（焼き魚）とエビが新鮮。フェリー待ちの旅行者に人気',
    hours: '10:00〜21:00',
    recommended: ['イカン・バカール（焼き魚）Rp 30,000〜', 'ウダン・バカール（焼きエビ）Rp 40,000〜', 'カンクン・テラシ（空芯菜炒め）Rp 15,000'],
  },
  {
    id: 'padang-sederhana',
    name: 'RM Padang Sederhana',
    type: 'パダン料理',
    price: 'Rp 15,000〜30,000',
    distance: '港から徒歩7分',
    desc: 'インドネシア全土にあるパダン料理チェーン。ガラスケースから好きなおかずを選ぶスタイル。確実にハズレなし',
    hours: '07:00〜22:00',
    recommended: ['ルンダン（牛肉のスパイス煮込み）', 'アヤム・ポップ（鶏肉の蒸し焼き）', 'サンバル・イジョ（青唐辛子サンバル）'],
  },
  {
    id: 'nasi-tempong-area',
    name: 'ナシ・テンポン屋台群',
    type: 'ローカル屋台',
    price: 'Rp 10,000〜15,000',
    distance: '港周辺',
    desc: 'バニュワンギ名物の激辛ご飯「ナシ・テンポン」を出す屋台。朝から営業している店が多い',
    hours: '06:00〜14:00（朝食中心）',
    recommended: ['ナシ・テンポン Rp 10,000（白飯+おかず+激辛サンバル）', 'アヤム・テンポン Rp 12,000（鶏肉付き）'],
  },
  {
    id: 'depot-bu-yuli',
    name: 'Depot Bu Yuli',
    type: 'ジャワ料理',
    price: 'Rp 12,000〜25,000',
    distance: '港から車5分',
    desc: '地元で評判の家庭料理の店。ソト・アヤム（鶏肉スープ）とナシ・チャンプルがおいしい',
    hours: '08:00〜20:00',
    recommended: ['ソト・アヤム Rp 12,000', 'ナシ・チャンプル Rp 15,000', 'エス・チャンプル Rp 8,000'],
  },
  {
    id: 'seafood-pantai',
    name: 'ワトゥドドル・ビーチ屋台',
    type: 'ビーチ屋台',
    price: 'Rp 15,000〜40,000',
    distance: '港から車7分',
    desc: 'ワトゥドドルビーチ沿いの屋台群。夕日を見ながらシーフードを楽しめる。焼きトウモロコシ Rp 5,000〜もおすすめ',
    hours: '10:00〜21:00',
    recommended: ['イカン・ゴレン（揚げ魚）Rp 20,000〜', 'ケラン・バカール（焼き貝）Rp 25,000〜', 'ジュス・マンガ（マンゴージュース）Rp 8,000'],
  },
  {
    id: 'terminal-food',
    name: 'フェリーターミナル内売店',
    type: '軽食・スナック',
    price: 'Rp 5,000〜15,000',
    distance: 'ターミナル内',
    desc: '出航待ちに便利。カップ麺、パン、飲料水、スナック菓子。船内でも購入可能',
    hours: '24時間',
    recommended: ['インドミー（カップ麺）Rp 5,000', 'コピ・サチェット（インスタントコーヒー）Rp 3,000', 'ゴレンガン（揚げ物盛り合わせ）Rp 10,000'],
  },
]

// ===== ACCOMMODATION =====
export const hotels = [
  {
    id: 'ketapang-indah',
    name: 'Ketapang Indah Hotel',
    price: 'Rp 300,000〜500,000',
    type: '中級ホテル',
    distance: '港から車5分',
    features: 'エアコン、WiFi、朝食付き、プール、レストラン。敷地内にシカ園あり',
    note: 'ケタパンエリアで最も設備が整ったホテル。ファミリーにも人気',
    recommended: true,
  },
  {
    id: 'hotel-& amir',
    name: 'Hotel & Amir',
    price: 'Rp 150,000〜250,000',
    type: 'バジェットホテル',
    distance: '港から車3分',
    features: 'エアコン、WiFi、清潔。シンプルだが必要十分',
    note: '1泊だけならコスパ良好。チェックイン柔軟',
    recommended: false,
  },
  {
    id: 'grand-surya',
    name: 'Grand Surya Hotel',
    price: 'Rp 200,000〜350,000',
    type: 'ビジネスホテル',
    distance: '港から車7分',
    features: 'エアコン、WiFi、朝食付き、駐車場。清潔で広めの部屋',
    note: 'ビジネス客も利用するしっかりしたホテル',
    recommended: false,
  },
  {
    id: 'penginapan-port',
    name: 'ケタパン港周辺ゲストハウス群',
    price: 'Rp 80,000〜150,000',
    type: 'ゲストハウス',
    distance: '港から徒歩5-10分',
    features: 'ファン/エアコン選択、共用トイレ。最低限の設備',
    note: '深夜/早朝フェリー利用者向け。Googleマップで「penginapan ketapang」で検索',
    recommended: false,
  },
  {
    id: 'mimpi-bali',
    name: 'Mimpi Resort Menjangan',
    price: 'Rp 800,000〜1,500,000',
    type: 'リゾート',
    distance: 'ギリマヌク港から車30分（バリ島側）',
    features: '温泉プール、ダイビングセンター、レストラン。ムンジャンガン島の拠点',
    note: 'バリ到着後すぐ泊まるなら。西部バリ国立公園のすぐそば',
    recommended: false,
  },
]

// ===== TRANSPORT =====
export const transportToKetapang = {
  fromBanyuwangi: {
    train: {
      route: 'バニュワンギ・コタ駅 → クタパン駅',
      fare: 'Rp 5,000〜10,000',
      duration: '約20分',
      note: '1日数本。KAI Commuter（通勤列車）。時刻表はKAIアプリで確認',
    },
    grab: {
      route: 'バニュワンギ市内 → ケタパン港',
      fare: 'Rp 30,000〜50,000',
      duration: '約20-30分',
      note: '24時間利用可。最も確実な移動手段',
    },
    angkot: {
      route: 'アンコット（乗り合いミニバス）',
      fare: 'Rp 5,000〜10,000',
      duration: '約30-40分',
      note: 'ルート名を確認。「Ketapang」と運転手に伝える',
    },
  },
  fromMalang: {
    train: {
      route: 'マラン駅 → バニュワンギ・コタ駅',
      fare: 'Rp 65,000〜180,000',
      duration: '約5.5〜7時間',
      trains: [
        { name: 'Sri Tanjung', class: 'エグゼクティブ/ビジネス', fare: 'Rp 120,000〜180,000', departure: '06:45', arrival: '13:30' },
        { name: 'Probowangi', class: 'エコノミー', fare: 'Rp 65,000', departure: '05:45', arrival: '12:25' },
      ],
      note: 'KAIアクセスアプリで予約。早めに購入すると確実',
    },
  },
}

export const localTransport = [
  { type: 'Grab/Gojek', desc: '配車アプリ。ケタパン港周辺は台数少なめだが基本使える', price: '初乗り Rp 5,000〜' },
  { type: 'オジェック（バイクタクシー）', desc: '港前に待機。Grabより高いが即乗れる', price: '交渉制 Rp 10,000〜' },
  { type: 'レンタルバイク', desc: 'バニュワンギ市内でレンタル。ケタパン港近辺にはショップなし', price: 'Rp 70,000〜/日' },
]

// ===== SAFETY =====
export const safetyAlerts = [
  {
    spot: 'フェリー乗船',
    warning: '2025年にバリ海峡でフェリー事故発生（死亡6名、行方不明約30名）。ライフジャケットの場所を確認し、デッキに近い席を選ぶこと。荒天時は無理に乗船しない',
  },
  {
    spot: 'バンスリン/タブハン島',
    warning: '海の状態は日によって異なる。ライフジャケット着用必須。離岸流に注意。貴重品はロッカーなし—最小限のみ持参',
  },
  {
    spot: 'ケタパン港周辺（夜間）',
    warning: 'フェリーターミナル周辺は24時間営業だが、裏通りは暗い。深夜の到着/出発時は港内の待合室で過ごすのが安全',
  },
  {
    spot: 'スリ・置き引き',
    warning: 'フェリー乗船時の混雑に注意。バックパックは前に抱える。スマホの出しっぱなし注意',
  },
]

// ===== PRACTICAL INFO =====
export const practicalInfo = [
  { label: 'ATM', desc: 'ケタパン港ターミナル内にBRI ATMあり。駅周辺にもBCA/Mandiri' },
  { label: 'コンビニ', desc: 'Indomaret/Alfamartが港の周辺に数軒。24時間営業' },
  { label: 'SIMカード', desc: 'フェリーターミナル周辺の携帯ショップで購入可。Telkomselが電波良好' },
  { label: '両替', desc: '港周辺のレートは悪い。バニュワンギ市内で済ませること' },
  { label: 'トイレ', desc: 'フェリーターミナル内に公衆トイレあり（Rp 2,000）。船内にもあり' },
  { label: '荷物預かり', desc: '正式なサービスはなし。ホテルにチェックアウト後預けるのが一般的' },
  { label: '電波', desc: 'ケタパン港周辺はTelkomsel/XL共に4G。海上はやや不安定' },
  { label: '時差', desc: 'バリ島（WITA, UTC+8）に渡るとジャワ島（WIB, UTC+7）から+1時間' },
]

// ===== ONE-NIGHT ITINERARY =====
export const overnightPlan = [
  {
    time: '14:00-15:00',
    title: 'ケタパン到着・チェックイン',
    desc: 'バニュワンギからGrab/電車でケタパン港周辺のホテルへ。荷物を置いて軽装に',
    icon: '🏨',
  },
  {
    time: '15:00-17:00',
    title: 'バンスリン・アンダーウォーター',
    desc: '港から車10分。シュノーケリングで珊瑚と熱帯魚を堪能。浮き網体験でサメと泳ぐことも',
    icon: '🤿',
  },
  {
    time: '17:00-18:30',
    title: 'ワトゥドドルで夕日',
    desc: 'バンスリンから車10分。巨岩のビーチで夕日を見ながら屋台でスナック',
    icon: '🌅',
  },
  {
    time: '19:00-20:00',
    title: '夕食: シーフード',
    desc: 'Warung Laut Ketapangで焼き魚と焼きエビ。ビールも Rp 25,000〜',
    icon: '🦐',
  },
  {
    time: '20:00-',
    title: 'ホテルで休息',
    desc: '翌日のフェリーに備えて早めに就寝。出発時間を確認しておく',
    icon: '😴',
  },
  {
    time: '翌朝 07:00',
    title: 'フェリーでバリ島へ',
    desc: '朝食後、ケタパン港へ。7時台の便で出発すればバリ島午前着',
    icon: '⛴️',
  },
]

// Japanese blogger tips
export const japaneseInsights = [
  'ケタパン港は「通過点」として見過ごされがちだが、バンスリンのシュノーケリングは穴場中の穴場',
  'フェリーは見た目より安定している。酔い止めは念のため持っておくと安心',
  'ターミナルの待合室はエアコンが効いていて快適。長時間待ちも苦にならない',
  'ケタパン駅は小さいが雰囲気がよい。ローカル列車の旅を味わえる',
  'バリ島のギリマヌク港到着後、西部バリ国立公園（ムンジャンガン島）が近い。時間があればぜひ',
  '港の周辺で売っている「クエ・ラピス」（層状のお菓子）がお土産におすすめ Rp 15,000〜',
]
