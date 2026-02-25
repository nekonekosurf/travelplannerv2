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
  { label: 'バンスリン', value: 'Rp 5,000〜500,000', note: '入場〜ダイビング' },
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
  { type: '乳幼児', price: 'Rp 1,600', note: '' },
  { type: '自転車', price: 'Rp 11,000', note: '' },
  { type: 'バイク（500cc以下＋ライダー）', price: 'Rp 31,600', note: '' },
  { type: 'バイク（500cc超）', price: 'Rp 45,000', note: '' },
  { type: '乗用車（5m未満＋ドライバー）', price: 'Rp 213,400', note: '' },
  { type: '中型バス', price: 'Rp 420,400', note: '全長7m未満' },
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
  'ニュピ（バリ・ヒンドゥーの新年/2026年3月19日）前後はフェリー全面運休。バリ島では24時間外出禁止',
  'イドゥル・フィトリ/年末年始は4〜6時間待ちになることも。ピーク時は避ける',
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
    fee: 'Rp 5,000（入場）',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Bangsring_Banyuwangi.jpg/640px-Bangsring_Banyuwangi.jpg',
    highlights: [
      '地元漁師主導のサンゴ礁再生プロジェクト。ダイナマイト漁で壊滅した海を漁師自ら復活させた感動の成功例',
      'シュノーケリング Rp 30,000（器材込）。カラフルなサンゴと熱帯魚が間近に',
      'ルマ・アプン（浮き家）でサメ保全区域へ。ブラックチップリーフシャークと泳げる体験',
      'タブハン島ボートツアー Rp 500,000（10人まで）。白砂の無人島シュノーケリング',
      'ダイビング体験 Rp 150,000〜。フルパッケージ Rp 500,000',
      'カヌー Rp 30,000/60分。バナナボート Rp 150,000（5-6人）',
      '更衣室・シャワー完備。ロッカーはないので貴重品注意',
      'ウェットシーズン（12-2月）は波が高く催行中止の場合あり',
    ],
    season: '4〜10月（乾季）がベスト',
  },
  {
    id: 'tabuhan',
    name: 'プラウ・タブハン島',
    tagline: '無人島の真っ白なビーチとターコイズブルーの海',
    distance: 'バンスリンからボート8-15分',
    hours: '日帰りツアーのみ',
    fee: '入場 Rp 7,000〜 / ボート Rp 500,000〜',
    image: '',
    highlights: [
      '「バニュワンギのモルディブ」と呼ばれる白砂の無人島。高速船8-10分、通常船15分',
      '透明度抜群の海でシュノーケリング。珊瑚礁が島を取り囲む。機材レンタル Rp 30,000〜',
      'タカット・パシル（砂州）が干潮時に現れるフォトスポット',
      'ボートチャーター: 高速船 Rp 750,000（10人まで）/ 通常船 Rp 500,000〜（往復）',
      '外国人入場料 Rp 30,000〜50,000。島にトイレ・売店なし。飲食物持参必須',
    ],
    season: '4〜10月（乾季）',
  },
  {
    id: 'watududol',
    name: 'ワトゥドドル・ビーチ',
    tagline: '2018年ASEAN最清潔ビーチ候補。夕日とタブハン島行きボート',
    distance: '港から約5km（車10分）',
    hours: '06:00〜17:00',
    fee: '入場無料（駐車のみ）',
    image: '',
    highlights: [
      '2018年ASEAN最清潔ビーチにノミネート。広い駐車場とフードコート完備',
      '夕日の名所。17:00-18:00が撮影ベストタイム',
      'タブハン島/メンジャンガン島行きボートチャーター可 Rp 400,000〜600,000',
      '子供用プールあり。家族連れにも人気',
      'Watu Dodol Hotel & Restaurant併設。ビーチ沿いの屋台でシーフードも',
    ],
    season: '通年',
  },
  {
    id: 'dermaga-cinta',
    name: 'デルマガ・チンタ（愛の桟橋）',
    tagline: '「The Sunrise of Java」— バリ海峡越しの日の出スポット',
    distance: '港から約2.5km（車5分）',
    hours: '24時間（日の出 4:30-5:00がベスト）',
    fee: '無料（駐車料金のみ）',
    image: '',
    highlights: [
      '桟橋の先端に立つ木製の「海の扉」。バリ海峡越しの日の出撮影スポットとしてSNSで人気',
      'バニュワンギは「The Sunrise of Java」の異名を持つ。早朝4:30着で日の出を狙う',
      '漁村の桟橋で地元漁師の朝の風景も見られる',
      '所要時間30-45分。散歩にちょうどいい規模',
      '朝は海風が冷たいので上着持参。漁師の作業を邪魔しないよう注意',
    ],
    season: '通年',
  },
  {
    id: 'baluran',
    name: 'バルラン国立公園',
    tagline: '「ジャワのアフリカ」—サバンナと野生動物',
    distance: '港から車30-45分',
    hours: '07:00〜16:00',
    fee: '外国人 Rp 150,000〜240,000',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Savana_Bekol_Taman_Nasional_Baluran.jpg/1024px-Savana_Bekol_Taman_Nasional_Baluran.jpg',
    highlights: [
      '25,000ヘクタールのサバンナ。ジャワスイギュウ、ティモールシカ、野生のクジャクが生息',
      'サバナ・ベコル展望塔（Menara Bekol）から360度のパノラマビュー。朝7-10時が動物遭遇率最高',
      'パンタイ・バマ: マングローブ林+白砂ビーチ。カニクイザルが木から海に飛び込む珍光景',
      '園内レンタル自転車あり。バイクより動物に近づけるとの報告。キャッシュレス決済のみ',
      '食料・飲料は持参推奨。ガイド雇用 Rp 100,000程度（交渉次第）',
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
    fee: 'Rp 5,000〜10,000',
    image: '',
    highlights: [
      '樹齢100-150年のトレンベシ（レインツリー）の巨木が林立する3.8ヘクタールの幻想的な森',
      '映画のロケ地にも使用。「ロード・オブ・ザ・リングのファンゴルンの森」と例えられる',
      '巨大な根が複雑に絡み合い、光と影が織りなすフォトジェニックな空間',
      'インドネシア人に大人気のSNSスポット。週末は混雑するため平日早朝がベスト',
      '遊歩道整備済み。駐車: バイク Rp 2,000 / 車 Rp 5,000',
    ],
    season: '通年（早朝の霧が美しい雨季もおすすめ）',
  },
]

// ===== RESTAURANTS =====
export const restaurants = [
  {
    id: 'nyonya-beng',
    name: 'Warung Nyonya Beng',
    type: 'インドネシア料理',
    price: 'Rp 25,000〜',
    distance: '港から450m',
    desc: '港最寄りの人気食堂。ビュッフェ形式でおかずを選ぶスタイル。ペペス・イカン（バナナの葉包み蒸し魚）が絶品',
    hours: '10:00〜22:00',
    recommended: ['ペペス・イカン・カカップ（蒸し鯛）', 'サユル・アセム（酸味野菜スープ）', 'サンバル・テラシ', 'グループパッケージ Rp 350,000（6名分）'],
  },
  {
    id: 'grafika',
    name: 'Grafika Restaurant',
    type: 'シーフード・インドネシア料理',
    price: 'Rp 20,000〜',
    distance: '港から車5分',
    desc: '海が見える席あり。焼き鳥、蟹スープ、各種シーフードが充実。朝食も可',
    hours: '07:00〜22:00',
    recommended: ['アヤム・バカール（焼き鳥）', 'スープ・クピティン（蟹スープ）', 'イカン・バカール（焼き魚）'],
  },
  {
    id: 'sego-tempong',
    name: 'Warung Sego Tempong Mbok Wah',
    type: 'バニュワンギ郷土料理',
    price: 'Rp 18,000〜30,000',
    distance: '港から車10分',
    desc: 'セゴ・テンポン専門の老舗。注文ごとにサンバルを石臼で挽く。「テンポン＝殴る」級の辛さ',
    hours: '08:00〜21:00',
    recommended: ['セゴ・テンポン Rp 18,000〜（白飯+おかず+激辛サンバル）', 'アヤム・テンポン Rp 25,000（鶏肉付き）'],
  },
  {
    id: 'thalita',
    name: 'Resto Thalita Ketapang',
    type: 'インドネシア料理',
    price: 'Rp 20,000〜',
    distance: '港から車10分',
    desc: '深夜近くまで営業。無料WiFi・充電器あり。ムショラ（祈祷室）完備で旅行者に便利',
    hours: '08:00〜23:59',
    recommended: ['ソト・アヤム（鶏肉スープ）', 'ナシゴレン', 'アヒル料理'],
  },
  {
    id: 'sun-osing',
    name: 'Sun Osing Beach',
    type: 'ビーチフロント・シーフード',
    price: 'Rp 55,000〜70,000',
    distance: '港から車5分',
    desc: 'バリ海峡を望むビーチフロントレストラン。ライブミュージックあり。雰囲気重視の夕食に最適',
    hours: '10:00〜22:00',
    recommended: ['サポ・タフ（豆腐・エビ・キノコの土鍋煮）', 'イカン・バカール', 'ウダン・オシンスパイス焼き'],
  },
  {
    id: 'marlin',
    name: 'Marlin Restaurant & Beach Club',
    type: 'ホテルレストラン',
    price: 'Rp 40,000〜80,000',
    distance: 'Ketapang Indah Hotel内',
    desc: '4つ星ホテル併設。プールサイドダイニング。新鮮なシーフードの質が高い。宿泊客以外も利用可',
    hours: '06:00〜21:00',
    recommended: ['シーフードプラッター', 'ナシゴレン・スペシャル', '朝食ビュッフェ'],
  },
  {
    id: 'rawon-bakso',
    name: 'Rawon & Bakso Sumber Rejeki',
    type: '東ジャワ料理',
    price: 'Rp 15,000〜25,000',
    distance: '港から車7分',
    desc: 'ラウォン（黒い牛肉スープ）とバクソ（肉団子スープ）の専門店。S/M/L/ジャンボから選択',
    hours: '08:00〜21:00',
    recommended: ['ラウォン（クルワックの実で色づけ）', 'バクソ・ウラット（筋入り肉団子）', 'バクソ・テルル（卵入り）'],
  },
  {
    id: 'terminal-food',
    name: 'フェリーターミナル内売店',
    type: '軽食・スナック',
    price: 'Rp 5,000〜15,000',
    distance: 'ターミナル内',
    desc: '出航待ちに便利。カップ麺、パン、飲料水、スナック菓子。船内でも購入可能',
    hours: '24時間',
    recommended: ['インドミー（カップ麺）Rp 5,000', 'コピ Rp 3,000', 'ゴレンガン（揚げ物）Rp 10,000'],
  },
]

// ===== ACCOMMODATION =====
export const hotels = [
  {
    id: 'ketapang-indah',
    name: 'Ketapang Indah Hotel ★★★★',
    price: 'Rp 400,000〜1,500,000',
    type: '4つ星ホテル',
    distance: '港から車5-10分',
    features: '152室。屋外プール、テニスコート、キッズクラブ、Marlin Restaurant併設、24時間ルームサービス、WiFi、朝食ビュッフェ付き',
    note: 'ケタパンエリア最高級。庭園とビーチが好評。TripAdvisor 4.0/5',
    recommended: true,
  },
  {
    id: 'ketapang-bali-homestay',
    name: 'Ketapang Bali Homestay Syariah',
    price: 'Rp 170,000〜',
    type: 'ゲストハウス',
    distance: '港からわずか165m！',
    features: 'WiFi、エアコン/ファン選択。清潔でシンプル',
    note: '港至近で早朝フェリーに最適。シャリーア準拠（カップル/家族向け）',
    recommended: false,
  },
  {
    id: 'saka-house',
    name: 'Saka House',
    price: 'Rp 190,000〜',
    type: 'ゲストハウス',
    distance: '港から約1.2km',
    features: 'バドミントンコート、シャトル、マッサージサービス',
    note: '口コミ評価 9.4/10 — ケタパン周辺で最高評価！',
    recommended: false,
  },
  {
    id: 'reddoorz',
    name: 'RedDoorz near Banyuwangi Baru Station',
    price: 'Rp 120,000〜',
    type: 'バジェットホテル',
    distance: '港から約900m（駅そば）',
    features: 'エアコン、専用バスルーム、WiFi。チェーンで安心',
    note: 'コスパ最優先ならここ。評価 8.3/10',
    recommended: false,
  },
  {
    id: 'grand-hills',
    name: 'Grand Hills Hotel',
    price: 'Rp 100,000〜200,000',
    type: 'バジェットホテル',
    distance: '港から約2km',
    features: '24時間フロント、駐車場、エアコン、テレビ',
    note: '最安クラス。評価 8.0/10。必要最低限で十分な人向け',
    recommended: false,
  },
  {
    id: 'watu-dodol-hotel',
    name: 'Watu Dodol Hotel & Restaurant',
    price: 'Rp 500,000〜',
    type: 'ビーチフロントホテル',
    distance: '港から車10分',
    features: 'ビーチフロント、レストラン併設。海を望む部屋',
    note: 'TripAdvisor バニュワンギB&B 61軒中5位。景色重視なら',
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
