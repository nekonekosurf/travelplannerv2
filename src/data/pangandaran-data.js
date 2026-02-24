// Pangandaran Guide — structured data
// パンガンダラン（西ジャワ州）Day 3-4 完全ガイド

export const sections = [
  { id: 'overview', label: '概要' },
  { id: 'beaches', label: 'ビーチ' },
  { id: 'green-canyon', label: 'グリーンキャニオン' },
  { id: 'activities', label: 'アクティビティ' },
  { id: 'food', label: '食事' },
  { id: 'stay', label: '宿泊' },
  { id: 'transport', label: '交通' },
  { id: 'safety', label: '安全' },
]

export const mapSpots = [
  { name: '西ビーチ（Pantai Barat）', lat: -7.6920, lng: 108.6550 },
  { name: '東ビーチ（Pantai Timur）', lat: -7.6910, lng: 108.6610 },
  { name: '自然保護区（Cagar Alam）', lat: -7.7050, lng: 108.6570 },
  { name: 'グリーンキャニオン（Cukang Taneuh）', lat: -7.7289, lng: 108.4881 },
  { name: 'バトゥ・ヒウ（Batu Hiu）', lat: -7.7200, lng: 108.5200 },
  { name: 'バトゥ・カラス（Batu Karas）', lat: -7.7400, lng: 108.5000 },
  { name: 'チトゥマン（Citumang）', lat: -7.7100, lng: 108.5100 },
]

export const mapPois = [
  { name: 'ATMセンター（BNI/Mandiri/BJB）', type: 'atm', lat: -7.6900, lng: 108.6540, detail: '西ビーチ通り 24時間' },
  { name: 'パサール・イカン（魚市場）', type: 'restaurant', lat: -7.6880, lng: 108.6620, detail: '東ビーチ北端 09:00-23:00' },
  { name: 'Seafood Gila', type: 'restaurant', lat: -7.6925, lng: 108.6545, detail: 'シーフード Rp15,000〜' },
  { name: 'Warung Nasi Pa Djaja', type: 'restaurant', lat: -7.6895, lng: 108.6560, detail: 'スンダ料理 Rp12,000〜' },
  { name: 'パンガンダラン・バスターミナル', type: 'transport', lat: -7.6870, lng: 108.6530, detail: 'バンドン方面バス発着' },
  { name: 'RSUD Pangandaran（県立病院）', type: 'medical', lat: -7.6850, lng: 108.6500, detail: '基本的な医療対応' },
]

export const budgetSummary = [
  { label: '宿泊（1泊）', value: 'Rp 100,000〜300,000', note: 'ホームステイ〜ゲストハウス' },
  { label: '食事（1食）', value: 'Rp 15,000〜80,000', note: 'ワルン〜シーフード' },
  { label: 'グリーンキャニオン', value: 'Rp 65,000〜', note: '入場+ボート（5人割）' },
  { label: 'レンタルバイク', value: 'Rp 70,000〜100,000', note: '1日・ヘルメット付き' },
]

// ===== BEACHES & NATURE RESERVE =====
export const beachInfo = {
  west: {
    name: 'パンタイ・バラット（西ビーチ）',
    description: 'パンガンダラン半島の西側に延びる約2kmの砂浜。メインのツーリストエリア。',
    features: [
      '比較的穏やかな波（珊瑚礁がブレイクウォーターの役目）',
      '遊泳可（南部よりは安全だが離岸流に注意）',
      'サーフィンレッスン Rp 200,000-250,000/日',
      '乗馬・ATV・カヤック・ミニ・デルマン（馬車）',
      '宿・レストラン・土産物屋が集中',
      '漁師の船をチャーターしてパシール・プティへ（Rp 50,000-100,000）',
    ],
    highlight: '毎日インド洋に沈む夕日が見られる絶好のサンセットスポット',
  },
  east: {
    name: 'パンタイ・ティムール（東ビーチ）',
    description: '半島の東側。西ビーチとは歩いて10分程度の距離。',
    features: [
      '白い砂浜。波が荒く遊泳には不向き',
      'ジェットスキー・バナナボート・ドーナツボート',
      '北端にパサール・イカン（魚市場）',
      '西ビーチより静か。ローカル色が強い',
    ],
    highlight: '朝の散歩に最適な日の出スポット',
  },
  tip: '朝は東海岸で日の出、夕方は西海岸で夕日 — 同じ場所から徒歩圏内で楽しめるのがパンガンダランの独特な魅力',
}

export const natureReserve = {
  name: 'チャガール・アラム・パンガンダラン（自然保護区）',
  description: '半島南部の530ヘクタールを占める国立公園。二次林の熱帯雨林、チーク林、草原が混在。',
  entryFee: {
    foreigner: { weekday: 'Rp 210,000', weekend: 'Rp 310,000' },
    local: { weekday: 'Rp 16,000', weekend: 'Rp 21,000' },
  },
  hours: '07:00-17:00（日没前に退出）',
  gates: '西ゲートと東ゲートの2箇所',
  guideFee: 'Rp 350,000/グループ（4名まで、3時間、平日）/ Rp 400,000（週末）',
  duration: '2-4時間（コースにより異なる）',
  wildlife: [
    'カニクイザル（長尾マカク）',
    'キジャン（ホエジカ / barking deer）',
    '野生バンテン（牛）',
    'ヤマアラシ',
    'オオトカゲ',
    'サイチョウ（hornbill）',
    '各種チョウ類',
  ],
  trails: [
    { name: 'ショートコース', duration: '2時間', route: '西ゲート → 洞窟 → ヒンドゥー遺跡 → 東ゲート' },
    { name: 'ロングコース', duration: '3-4時間', route: '上記 + 台地横断 → パシール・プティ → 海岸線 → 帰還' },
  ],
  highlights: [
    'グア・ジュパン（Gua Jepang）— 第二次世界大戦中に日本軍が使用した洞窟。懐中電灯必携',
    'バトゥ・カルデ（Batu Kalde）— ヒンドゥー寺院跡遺跡',
    'パシール・プティ（Pasir Putih）— 白砂の入り江。シュノーケリングの名所',
  ],
  snorkeling: [
    { spot: 'パシール・プティ（西ビーチ付近）', detail: '白砂ビーチ。機材レンタル可。初心者にはガイド付き' },
    { spot: '東ビーチ海洋公園（Taman Laut）', detail: '高速ボートで約10分。バトゥ・ブアヤ、バトゥ・ラヤール1&2 を巡る' },
    { spot: '料金目安', detail: 'シュノーケリングツアー Rp 150,000-300,000/人（ボート・機材込み）' },
  ],
}

// ===== GREEN CANYON =====
export const greenCanyon = {
  name: 'グリーンキャニオン（Cukang Taneuh）',
  tagline: 'パンガンダラン最大の目玉アトラクション',
  description: 'チジュラン川が石灰岩を浸食して作った翡翠色の渓谷。正式名称はCukang Taneuh（スンダ語で「土の橋」）。',
  location: 'パンガンダランから北西へ約31km（車で約45分）',
  entryFee: 'Rp 20,000/人',
  boatCharter: 'Rp 225,000/隻（最大5名乗り）',
  hours: '07:30-16:00（金曜は13:00から）',
  duration: 'ボートツアー往復 約45分〜1時間',
  closure: '雨季に川が増水すると安全のため閉鎖（特に12月〜2月に注意）',
  experience: [
    { step: 1, title: 'チケット購入 & ボート乗り場', desc: '入口でチケットを買い、ボート乗り場へ' },
    { step: 2, title: 'ロングテールボートで川を遡上', desc: 'エメラルドグリーンの川をエンジン付き木製ボートで約15-20分遡上' },
    { step: 3, title: '峡谷に到着', desc: '両側から切り立った石灰岩の崖。高さ数十メートルの崖にコケやシダ、鍾乳石と石筍' },
    { step: 4, title: '岩を登って峡谷の奥へ', desc: '壁面から水が滝のように流れ落ち、木漏れ日が差し込む幻想的な光景' },
    { step: 5, title: '泳ぐ・飛び込む', desc: '渓谷内のプール状の深い場所で遊泳可。クリフジャンプ（7-9m）も可能（自己責任）' },
  ],
  lightConditions: [
    { time: '07:30-09:00', light: '朝の柔らかい光が峡谷に差し込む。水の色が最も鮮やかなエメラルド', rating: 5 },
    { time: '09:00-11:00', light: '日光がかなり入り写真映え。まだ比較的涼しい', rating: 4 },
    { time: '11:00-14:00', light: '真上からの光。峡谷内は日陰が多くまだ美しいが暑い', rating: 3 },
    { time: '14:00-16:00', light: '午後の光。雨季は午後のスコールのリスク', rating: 2 },
  ],
  photoTips: '防水カメラ / GoPro 必携。スマホは防水ケースに入れること。朝一番（7:30の開場直後）がベスト — 混雑前で水も澄んでいる。',
  bodyRafting: [
    { course: 'ショートトラック（セミ）', distance: '約5km', duration: '2-3時間', price: 'Rp 175,000-300,000/人', content: 'ボートで入口まで → 泳ぎ・岩登り・ジャンプ' },
    { course: 'ロングトラック', distance: '約10km', duration: '4-5時間', price: 'Rp 300,000-410,000/人', content: 'フルコース。急流・クリフジャンプ3箇所（5-8m）' },
  ],
  bodyRaftingDetails: [
    'ライフジャケット・ヘルメット・ウォーターシューズは提供される',
    'ジャンプスポット3箇所: 2箇所が5-6m、1箇所が7-8m（スキップ可）',
    '緑の熱帯雨林に囲まれ、猿や鳥を見ながら川を下る',
    '途中の休憩所でコーヒー・紅茶・カップヌードル購入可',
    '朝出発推奨: 午前中に開始しないと日没までに終わらない可能性',
  ],
  checklist: [
    '水着（泳げる服装）',
    'ウォーターシューズ（岩場で必須。現地で購入・レンタルも可）',
    '防水バッグ（ドライバッグ）',
    '防水カメラ or スマホ防水ケース',
    '日焼け止め（ウォータープルーフ）',
    'タオル & 着替え（ボートに置いておく）',
    '現金（ATM・銀行なし。パンガンダラン市内で下ろしておくこと）',
    '朝食を必ず食べてから行く（冷水で体力消耗するため）',
  ],
  rainySeasonInfo: [
    { condition: '小雨・曇り', response: '通常通り営業。水はやや濁る' },
    { condition: '大雨後', response: '川が増水し濁流に。安全のため閉鎖。当日朝に確認が必要' },
    { condition: '連日豪雨', response: '数日間閉鎖されることも。雨季（10月〜4月）は事前に宿で状況確認を' },
  ],
}

// ===== BATU HIU =====
export const batuHiu = {
  name: 'バトゥ・ヒウ（Batu Hiu）',
  tagline: '「サメのヒレ岩」—ドラマチックな海食崖の絶景',
  location: 'パンガンダランから西へ約22km（車で約35分）',
  entryFee: '無料（駐車場料金のみ: バイク Rp 7,500 / 車 Rp 19,500）',
  hours: '常時開放（日中推奨）',
  duration: '30分〜1時間',
  highlights: [
    'インド洋の荒波に削られた石灰岩がサメのヒレのようにそびえる絶景',
    '西向きの崖からインド洋に沈む夕日を眺められる。市内ビーチより人が少なく劇的',
    '崖の下に海食洞がいくつかあり、潮が引いた時に探検可能',
    '断崖に打ちつけるインド洋の大波は圧巻。雨季はさらに荒々しい',
  ],
  safetyNote: '柵がない場所が多い。崖の端には近づきすぎないこと。濡れた岩は滑りやすい。子連れは十分注意',
  access: 'パンガンダラン市内からバイク（オジェック）で35分程度。レンタルバイクで自力で行くか、宿で半日ツアーを手配（バトゥ・ヒウ + バトゥ・カラスのコンビが定番）',
}

// ===== BATU KARAS =====
export const batuKaras = {
  name: 'バトゥ・カラス（Batu Karas）',
  tagline: '「ジャワの隠れたサーフ・パラダイス」',
  location: 'パンガンダランから約20km（車/バイクで30-40分）',
  description: '1970年代から変わっていないようなゆるやかな時間が流れるサーフ村。バリのクタとは真逆。',
  surfInfo: {
    mainBreak: 'The Point（ポイントブレイク）— 砂底、ゆっくりピーリングする波',
    level: '世界で最も初心者に適したサーフポイントの一つ',
    lessonPrice: '2時間 US$20以下（ボードレンタル込み）— インドネシア最安クラス',
    boardRental: 'Rp 50,000-100,000/日',
    bestSeason: '乾季（5月〜9月）',
    schools: ['Pangandaran Surf School And Camp', 'USurf Lessons Batukaras', 'Amazon Surf Camp'],
  },
  restaurants: [
    { name: 'Kokyo', genre: 'カフェ', detail: '日本語で「故郷」。コーヒー・抹茶ドリンクが人気' },
    { name: 'Salt Cafe', genre: 'カフェ', detail: 'スムージーボウル、軽食。Kokyoの隣' },
    { name: 'House of Sawah', genre: 'レストラン・バー', detail: '田んぼテラス席。火曜のタコチューズデー（タコス＆マルガリータ半額+ライブ音楽）' },
    { name: 'Bayview Seafood', genre: 'シーフード', detail: '新鮮なローカルシーフード' },
    { name: 'Warung Ma Engkar', genre: 'ワルン', detail: 'レンコ（スンダ風ココナッツチキンスープ）が名物。サーフ後の回復食' },
  ],
  nightlife: '基本的にナイトライフはほぼない。House of Sawahでの週1-2回のイベントが唯一の社交場。ビーチでの焚き火＋ギター弾き語りが「ナイトライフ」',
}

// ===== CITUMANG =====
export const citumang = {
  name: 'チトゥマン・ボディラフティング（Citumang）',
  tagline: 'グリーンキャニオンより難易度が低く、家族向け',
  location: 'パンガンダランから約30km',
  entryFee: 'Rp 15,000/人',
  raftingPrice: 'Rp 69,000〜175,000/人（10名以上グループ割引）',
  hours: '08:00-17:00',
  courseDistance: '約2km',
  duration: '2-3時間（休憩込み）',
  difficulty: '低い — 子供・高齢者も参加可能',
  highlights: [
    '透明度の高い清流を、ライフジャケット＋ヘルメットで流される',
    '天然のウォータースライダー的な箇所あり',
    '途中に休憩スポット（座って景色を楽しむ）',
    '川底が見えるほど水が透明',
    '周囲は熱帯雨林。鳥のさえずりが聞こえる',
  ],
  restrictions: '心臓病、高血圧、てんかん、めまい症、貧血、喘息、糖尿病、妊婦は参加不可',
  comparison: [
    { item: '難易度', greenCanyon: '中〜高', citumang: '低' },
    { item: '所要時間', greenCanyon: '45分（ボート）/ 4-5時間（ラフティング）', citumang: '2-3時間' },
    { item: 'ジャンプスポット', greenCanyon: '7-9m', citumang: 'なし / 低い' },
    { item: '景観', greenCanyon: '石灰岩の峡谷・鍾乳石', citumang: '緑の渓流・森林' },
    { item: '家族向け', greenCanyon: 'ボートツアーは◎、ラフティングは△', citumang: '◎' },
    { item: '料金', greenCanyon: 'ボート Rp 225,000/隻 + 入場料', citumang: 'Rp 69,000-175,000/人' },
  ],
}

// ===== OTHER ATTRACTIONS =====
export const otherAttractions = [
  {
    id: 'karapyak',
    name: 'カラピャック・ビーチ（Pantai Karapyak）',
    alias: 'Paradise Beach（パラダイスビーチ）',
    location: 'パンガンダランから約20km（車で30-40分）',
    fee: 'Rp 10,000/人',
    detail: '広大な岩礁地帯。干潮時にサンゴ岩の表面が現れ独特な自然のパターン。徒歩で探検可能。観光客はほぼいない',
  },
  {
    id: 'mangrove',
    name: 'マングローブ林（Mangrove Forest Batukaras）',
    location: 'バトゥ・カラス近く',
    fee: '要確認',
    detail: '木道（ボードウォーク）が整備済み。カヌー/カヤックでマングローブの水路を巡るツアーもある',
  },
  {
    id: 'pasir-putih',
    name: 'パシール・プティ（Pasir Putih / 白砂ビーチ）',
    location: '自然保護区内',
    fee: '保護区入場料に含む',
    detail: '砕けたサンゴの白い砂と透明な海水。シュノーケリングの名所。漁師のボートで西ビーチからアクセス（Rp 50,000-100,000）',
  },
  {
    id: 'gua-jepang',
    name: 'グア・ジュパン（Gua Jepang / 日本軍洞窟）',
    location: '自然保護区内',
    fee: '保護区入場料に含む',
    detail: '第二次世界大戦中に日本軍が防御陣地として使用した洞窟。内部は暗く懐中電灯が必要。保護区のガイドツアーに含まれることが多い',
  },
  {
    id: 'cottage-industry',
    name: 'コテージ・インダストリー・ツアー',
    location: 'パンガンダラン周辺の村',
    fee: '約 Rp 150,000/日（ガイド付き）',
    detail: 'クルプック工場（えびせんべい製造見学）、パームシュガー工場（椰子砂糖の製造）、ココナッツ産業（オイル・ファイバー加工）、ローカル朝市',
  },
]

// ===== SEAFOOD & FOOD =====
export const seafoodGuide = {
  name: 'パサール・イカン（Pasar Ikan / 魚市場）',
  tagline: 'パンガンダラン最大の食体験',
  location: 'Jalan Pantai Timur, Pangandaran（東ビーチ北端）',
  hours: '09:00-23:00（夕方以降が雰囲気◎）',
  system: '新鮮な魚介を重量で選ぶ → 調理法を指定（バカール＝炭火焼き / ゴレン＝揚げ）→ サイドディッシュを追加',
  priceRange: 'Rp 15,000-250,000/kg（魚介の種類による）',
  budgetTip: '「1人あたりの予算はこれくらい」とスタッフに伝えておまかせが楽。Rp 50,000-100,000/人で十分満足',
  fishPrices: [
    { fish: '鯛（スナッパー）', indonesian: 'Kakap', price: 'Rp 80,000-120,000/kg' },
    { fish: 'エビ', indonesian: 'Udang', price: 'Rp 100,000-180,000/kg' },
    { fish: 'カニ', indonesian: 'Kepiting', price: 'Rp 80,000-150,000/kg' },
    { fish: 'イカ', indonesian: 'Cumi-cumi', price: 'Rp 60,000-100,000/kg' },
    { fish: 'ロブスター', indonesian: 'Lobster', price: 'Rp 200,000-400,000/kg' },
    { fish: 'サバ系の魚', indonesian: 'Tongkol / Tuna', price: 'Rp 30,000-60,000/kg' },
  ],
  marketRestaurants: [
    'RM Risma Seafood — パサール・イカンの定番。常に賑わう',
    'RM Ditha — 地元民にも人気',
    'Kidang Mas — 大きめの席。グループ向き',
    'Karya Bahari — 幅広いメニュー。Rp 15,000-250,000',
    'Tunas Rezeki — 新鮮さに定評',
  ],
}

export const sundaneseDishes = [
  { name: 'イカン・バカール（Ikan Bakar）', desc: '炭火焼き魚。パンガンダランの定番中の定番。サンバルを添えて', price: 'Rp 25,000-80,000' },
  { name: 'ナシ・リウェッ（Nasi Liwet）', desc: 'ココナッツミルクで炊いたご飯。鶏肉・テンペ・塩魚付き。土鍋で提供されることも', price: 'Rp 15,000-100,000' },
  { name: 'ペペス・イカン（Pepes Ikan）', desc: 'バナナの葉で包んで蒸した魚。ショウガの花、ガランガル、サラム葉の香り', price: 'Rp 20,000-40,000' },
  { name: 'ナシ・ティンベル（Nasi Timbel）', desc: 'バナナの葉で包んだご飯 + フライドチキン + テンペ + 豆腐 + 塩魚のセット', price: 'Rp 35,000' },
  { name: 'サテ・ガルングン（Sate Galunggung）', desc: 'パンガンダラン名物の魚のサテ（串焼き）', price: 'Rp 15,000-25,000' },
  { name: 'カンクン炒め（Kangkung）', desc: '空芯菜炒め。定番のサイドディッシュ', price: 'Rp 10,000-15,000' },
  { name: 'パキス（Pakis）', desc: 'シダの若芽の炒め物。スンダ料理特有', price: 'Rp 10,000-15,000' },
]

export const restaurants = [
  {
    id: 'seafood-gila',
    name: 'Seafood Gila',
    type: 'シーフード',
    location: '西ビーチ付近',
    price: 'Rp 15,000-180,000',
    desc: '炭火焼きシーフード。パダン、オイスター、甘酢、ブラックペッパーなど各種ソースが選べる',
    hours: '営業時間は要確認',
  },
  {
    id: 'pa-djaja',
    name: 'Warung Nasi Pa Djaja',
    type: 'スンダ料理',
    location: '市内中心部',
    price: 'Rp 12,000-35,000',
    desc: '数十種類のスンダおかずから選ぶビュッフェスタイル。ベジタリアンオプション多数',
    hours: '営業時間は要確認',
  },
  {
    id: 'dapoer-kampoeng',
    name: 'Warung Dapoer Kampoeng',
    type: 'スンダ料理',
    location: 'Jalan Cijulang（グリーンキャニオン方面）',
    price: 'Rp 15,000-100,000',
    desc: 'ナシ・リウェッを土鍋で提供。グリーンキャニオン訪問と合わせて',
    hours: '営業時間は要確認',
  },
  {
    id: 'bamboo-cafe',
    name: 'Bamboo Cafe & Resto',
    type: '多国籍',
    location: '西ビーチ沿い',
    price: 'Rp 20,000-80,000',
    desc: '西洋料理 & インドネシア料理。冷たいビールあり。ビーチビュー',
    hours: '営業時間は要確認',
  },
  {
    id: 'restaurant-relax',
    name: 'Restaurant Relax',
    type: '多国籍',
    location: '西ビーチエリア',
    price: 'Rp 25,000-80,000',
    desc: 'ブラートヴルスト、マカロニ、グラーシュなどドイツ系メニューも。安定した品質',
    hours: '営業時間は要確認',
  },
  {
    id: 'tropical-warung',
    name: 'Tropical Warung',
    type: 'シーフード',
    location: 'Pantai Madasari, Cimerak',
    price: 'Rp 30,000-200,000',
    desc: '炭火焼きエビ・ロブスター・カニ。ビーチ沿いの自然な雰囲気',
    hours: '08:00-17:00',
  },
]

// ===== ACCOMMODATION =====
export const accommodations = [
  {
    id: 'mini-tiga',
    name: 'Mini Tiga Homestay',
    type: 'ホームステイ',
    price: 'Rp 100,000-150,000/泊',
    features: 'ビーチから90m。朝食付き。WiFi無料。バー併設。ツアー手配可。評価8.7/10',
    note: 'バックパッカーの定番。西ビーチ北端',
    recommended: true,
    budget: true,
  },
  {
    id: 'bamboo-house',
    name: 'Bamboo House',
    type: 'ゲストハウス',
    price: 'Rp 100,000-200,000/泊',
    features: '全室AC。朝食・WiFi付。スクーターレンタル手配可。ツアー手配可',
    note: '西ビーチ北端のバックパッカーエリア',
    recommended: false,
    budget: true,
  },
  {
    id: 'rinjani',
    name: 'Rinjani Homestay',
    type: 'ホームステイ',
    price: 'Rp 80,000-120,000/泊（US$8〜）',
    features: 'シンプルだが清潔。最安クラス',
    note: '予算重視の方に',
    recommended: false,
    budget: true,
  },
  {
    id: 'rinjani3',
    name: 'Rinjani 3 Homestay',
    type: 'ホームステイ',
    price: 'Rp 120,000-180,000/泊',
    features: 'Rinjaniの別館。やや新しい',
    note: '',
    recommended: false,
    budget: true,
  },
  {
    id: 'jm-homestay',
    name: 'JM Homestay',
    type: 'ホームステイ',
    price: 'Rp 150,000-250,000/泊',
    features: 'ビーチから徒歩6分。無料駐車場',
    note: '',
    recommended: false,
    budget: false,
  },
  {
    id: 'villadevi',
    name: 'Villadevi',
    type: 'ヴィラ',
    price: 'Rp 300,000-500,000/泊',
    features: '家族・グループ向け。キッチン付き',
    note: '中〜長期滞在にも',
    recommended: false,
    budget: false,
  },
  {
    id: 'baleku',
    name: "Bale'ku",
    type: 'ゲストハウス',
    price: 'Rp 200,000-400,000/泊',
    features: '清潔でモダンなデザイン',
    note: '',
    recommended: false,
    budget: false,
  },
  {
    id: 'homestay-pangandaran',
    name: 'Homestay Pangandaran',
    type: 'ホームステイ',
    price: 'Rp 150,000-300,000/泊',
    features: 'Booking.comで予約可。基本的な設備',
    note: '',
    recommended: false,
    budget: false,
  },
]

export const stayTips = [
  '西ビーチ北端（バスターミナル寄り）: バックパッカー・エリア。Mini Tiga、Bamboo Houseなど安宿が集中',
  '西ビーチ中央〜南: 中級ホテル。ビーチアクセス良好',
  '東ビーチ側: 静か。パサール・イカンに近い',
  'バトゥ・カラス: パンガンダラン市内より静か。サーフ目的ならこちら',
  'AC付き推奨: 常に高温多湿なのでエアコンは快適さに大きく影響',
  '予約方法: Booking.com、Traveloka、Agodaで事前予約推奨。ウォークインも可だが週末は危険',
]

export const weekendWarning = '平日の1.5〜3倍に価格高騰。レバラン（イドゥル・フィトリ）期間と年末年始は1年前から予約が埋まることも。平日は交渉余地あり。'

// ===== TRANSPORT =====
export const transportAccess = [
  { method: 'Bus Budiman（定期バス）', duration: '5時間45分〜8時間', price: 'Rp 75,000-115,000', note: 'Cicaheum Terminal発。03:00-10:00は毎時運行、15:00にも便あり。AC・リクライニング' },
  { method: 'Putri Munggaran（トラベル）', duration: '約6時間', price: 'Rp 125,000', note: 'ドア・トゥ・ドア送迎' },
  { method: 'Ozan Travel', duration: '約6時間', price: 'Rp 200,000', note: '05:00発 / 22:00発の2便。快適' },
  { method: 'Nadira Trans', duration: '約6時間', price: 'Rp 300,000', note: '09:30 / 16:00 / 19:30の3便。最も快適' },
  { method: 'Sari Harum ミニバス', duration: '約6時間', price: 'Rp 100,000', note: 'ドア・トゥ・ドア' },
  { method: '列車 + バス', duration: '3-4時間 + 1.5-2.5時間', price: 'Rp 140,000-350,000（合計）', note: 'バンドン→バンジャール（列車）→ パンガンダラン（バス）。乗り換え必要だが快適' },
]

export const localTransport = [
  { type: 'ベチャ（Becak / 三輪自転車）', price: 'Rp 10,000〜（交渉制）', desc: '市内の短距離移動。ビーチ→市場など' },
  { type: 'オジェック（Ojek / バイクタクシー）', price: 'Rp 15,000-50,000', desc: '中距離移動。バトゥ・ヒウ方面など' },
  { type: 'レンタルバイク（スクーター）', price: 'Rp 70,000-100,000/日', desc: '最も自由度が高い。ヘルメット2個・レインコート付き' },
  { type: 'レンタカー（ドライバー付き）', price: 'Rp 500,000/日', desc: 'グループ向き。旅行代理店で手配' },
  { type: '自転車レンタル', price: 'Rp 30,000-50,000/日', desc: '市内散策。ビーチ沿いの移動に' },
  { type: '徒歩', price: '無料', desc: 'ターミナル→ビーチは200m。西→東ビーチも徒歩10分' },
]

export const banjarStation = {
  name: 'バンジャール駅（Banjar Station）',
  description: 'パンガンダランに最も近い鉄道駅。パンガンダラン→ジョグジャカルタの移動に不可欠。',
  accessFromPangandaran: [
    { method: 'ローカルバス', duration: '1.5-2.5時間', price: 'Rp 25,000-30,000', note: 'パンガンダラン・バスターミナルから毎時運行' },
    { method: 'ミニバス（ホテル手配）', duration: '1.5時間', price: 'Rp 50,000-100,000/人', note: 'ドア・トゥ・ドア' },
    { method: 'オジェック / チャーター', duration: '1-1.5時間', price: 'Rp 150,000-200,000', note: '急ぎの場合' },
  ],
  trainsToYogyakarta: [
    { name: 'Kahuripan', class: 'エコノミー', departure: '02:44', arrival: '05:54（Wates着）', duration: '約3時間', price: 'Rp 80,000-140,000' },
    { name: 'Kutojaya Selatan', class: 'エコノミー', departure: '早朝', arrival: '—', duration: '約4-5時間', price: 'Rp 80,000-140,000' },
    { name: 'Lodaya', class: 'ビジネス', departure: '09:58', arrival: '13:12', duration: '約3時間15分', price: 'Rp 200,000-320,000' },
    { name: 'Malabar', class: 'エグゼクティブ', departure: '—', arrival: '—', duration: '約4時間', price: 'Rp 250,000-350,000' },
    { name: 'Argo Wilis', class: 'エグゼクティブ', departure: '—', arrival: '—', duration: '約3-4時間', price: 'Rp 300,000+' },
    { name: 'Pasundan', class: 'エコノミー', departure: '—', arrival: '—', duration: '約5時間', price: 'Rp 80,000-150,000' },
    { name: 'Serayu', class: 'エコノミー', departure: '—', arrival: '—', duration: '約5時間', price: 'Rp 80,000-150,000' },
    { name: 'Pangandaran', class: 'エコノミー', departure: '—', arrival: '—', duration: '約4-5時間', price: 'Rp 100,000-160,000' },
  ],
  bookingMethods: [
    { method: 'KAI Access アプリ', detail: 'インドネシア国鉄の公式アプリ。最も確実' },
    { method: 'Tiket.com', detail: 'オンライン予約サイト。英語対応' },
    { method: 'Traveloka', detail: 'オンライン予約。プロモーション価格あり' },
    { method: '旅行代理店', detail: 'パンガンダラン市内で代行購入可。手数料 Rp 20,000-50,000' },
    { method: '駅の窓口', detail: 'バンジャール駅で直接購入。満席リスクあり' },
  ],
  importantNote: '人気列車（Lodaya、Argo Wilis）は早めに予約しないと満席に。レバラン期間前後は数週間前に完売。エコノミーは比較的取りやすい。',
}

// ===== PRACTICAL INFO =====
export const practicalInfo = [
  { label: 'ATM', desc: '西ビーチ通りにBNI / Mandiri / BJBの3台。24時間。グリーンキャニオン・バトゥ・カラス・バトゥ・ヒウ周辺にはATMなし' },
  { label: '現金', desc: 'クレジットカードはほぼ使えない。食事・交通・アクティビティすべて現金。バンドンで十分に下ろしておくこと' },
  { label: '2日分の目安', desc: 'Rp 1,000,000〜1,500,000（約10,000〜15,000円）で宿泊・食事・アクティビティに余裕あり' },
  { label: 'WiFi', desc: '多くのホームステイ・ゲストハウスで無料WiFi。速度はバンドンより遅い' },
  { label: '携帯電波', desc: 'Telkomselが最も安定。4G接続可能だが場所により不安定' },
  { label: '医療', desc: 'RSUD Pangandaran（県立総合病院）あり。重症はタシクマラヤ（車3時間）かバンドンへ搬送' },
  { label: '蚊対策', desc: 'DEET含有の虫除け必携。デング熱リスクあり。夕方以降は長袖・長ズボン推奨' },
  { label: 'Googleマップ', desc: 'パンガンダラン周辺では不正確なことがある。道に迷ったら地元民に聞くのが最善' },
]

// ===== TSUNAMI SAFETY =====
export const tsunamiSafety = {
  history: '2006年7月17日、M7.7の地震により津波が襲来。最大遡上高8.5m、死者668名。1921年にもM7.5の地震で津波被害あり。メガスラスト帯に位置。',
  certification: '2022年にUNESCO津波レディ（Tsunami Ready）認定を取得',
  infrastructure: [
    '津波ハザードマップ整備済み',
    '避難経路標識（Jalur Evakuasi Tsunami）が市内各所に設置',
    '集合場所標識・避難ビル（TES: Tempat Evakuasi Sementara）完備',
    'ホテルとの連携による避難シェルター体制',
    'インドネシア気象庁（BMKG）の津波警報システム稼働中',
  ],
  evacuationProtocol: [
    '地震を感じたら → 揺れが収まるのを待つ',
    '即座に高台へ避難（徒歩で行ける最も高い場所）',
    '自然保護区内の丘（標高約150m）も緊急避難先',
    '公式の解除情報が出るまで待機',
  ],
  travelerAdvice: '宿にチェックインしたら、まず避難経路を確認すること。地震を感じたら高台へ。',
}

// ===== SAFETY ALERTS =====
export const safetyAlerts = [
  {
    spot: '津波リスク',
    warning: 'パンガンダランは2006年に津波被害（死者668名）。現在はUNESCO津波レディ認定済みだが、地震を感じたら即座に高台へ避難。宿チェックイン時に避難経路を必ず確認',
  },
  {
    spot: 'グリーンキャニオン',
    warning: '雨季（10月〜4月）は川の増水で閉鎖の可能性あり。事前に宿で確認を。ボディラフティングのクリフジャンプ（7-9m）は自己責任。防水対策必須',
  },
  {
    spot: 'バトゥ・ヒウ（断崖絶壁）',
    warning: '柵がない場所が多い。崖の端に近づきすぎないこと。濡れた岩は滑りやすい。子連れは特に注意',
  },
  {
    spot: '離岸流（ビーチ）',
    warning: '東ビーチは波が荒く遊泳不向き。西ビーチも南部で離岸流に注意。遊泳可能エリアを確認すること',
  },
  {
    spot: '現金・ATM',
    warning: 'ATMは市内中心部のみ。クレジットカードはほぼ使えない。グリーンキャニオン・バトゥ・カラス周辺にATMなし。バンドンで十分な現金を用意',
  },
  {
    spot: '自然保護区の野生動物',
    warning: 'サルに餌を与えないこと（攻撃的になる）。食べ物を見せない、目を合わせない。オオトカゲにも近づかない',
  },
]

// ===== MODEL ITINERARIES =====
export const modelItineraries = {
  day3: {
    title: 'Day 3: バンドンからパンガンダランへ移動',
    items: [
      { time: '06:00', title: 'バンドン出発', desc: 'Bus Budiman / Cicaheum Terminal、またはドア・トゥ・ドアのトラベル。早朝発で渋滞回避' },
      { time: '06:00-12:00', title: '移動（約5-7時間）', desc: '車窓からジャワ島南部の農村風景を楽しむ。途中休憩1-2回' },
      { time: '12:00-13:00', title: 'パンガンダラン到着 → チェックイン', desc: 'Mini Tiga Homestay or Bamboo House推奨' },
      { time: '13:00-14:00', title: '昼食 — パサール・イカンでシーフード', desc: '東ビーチ北端の魚市場。炭火焼き魚を堪能' },
      { time: '14:30-15:30', title: '西ビーチ散策', desc: 'ビーチ沿いを歩く。ベチャに乗って雰囲気を味わう' },
      { time: '15:30-16:00', title: 'ATMで現金引き出し', desc: '西ビーチ通りのATMセンター。翌日のグリーンキャニオン用' },
      { time: '16:00-17:30', title: '自然保護区ショートウォーク', desc: '西ゲートから1時間程度。グア・ジュパン（日本軍洞窟）見学' },
      { time: '17:30-18:30', title: '西ビーチでサンセット', desc: 'パンガンダランのハイライトの一つ' },
      { time: '18:30-20:00', title: '夕食', desc: 'Seafood Gila or Bamboo Cafe & Resto。ビール片手にビーチディナー' },
    ],
  },
  planA: {
    title: 'Day 4 プランA: グリーンキャニオン + バトゥ・ヒウ',
    items: [
      { time: '06:30', title: '朝食 → レンタルバイクで出発', desc: '宿で朝食 or ワルンでナシ・リウェッ' },
      { time: '07:00-07:45', title: 'パンガンダラン → グリーンキャニオン', desc: 'バイク約45分。朝の涼しい空気の中をドライブ' },
      { time: '08:00-10:00', title: 'グリーンキャニオンのボートツアー', desc: '朝一番の光が最高。混雑前。エメラルドの渓谷を堪能' },
      { time: '10:00-10:30', title: 'Warung Dapoer Kampoengで休憩', desc: '土鍋のナシ・リウェッ' },
      { time: '10:30-11:30', title: 'グリーンキャニオン → バトゥ・ヒウ', desc: 'バイク約30分。海岸沿いの道を南下' },
      { time: '11:30-12:30', title: 'バトゥ・ヒウ見学', desc: '断崖絶壁とインド洋の大波' },
      { time: '12:30-13:30', title: 'バトゥ・ヒウ → パンガンダラン', desc: 'バイク約35分' },
      { time: '13:30-14:30', title: '昼食 — Warung Nasi Pa Djaja', desc: 'スンダ料理のビュッフェ' },
      { time: '15:00-17:00', title: '自然保護区 or シュノーケリング', desc: 'ロングコース or パシール・プティ' },
      { time: '17:30-18:30', title: '最後のサンセット @ 西ビーチ', desc: '' },
      { time: '19:00-20:30', title: 'パサール・イカンでお別れシーフード宴', desc: '' },
    ],
  },
  planB: {
    title: 'Day 4 プランB: グリーンキャニオン + バトゥ・カラス',
    items: [
      { time: '06:30', title: '朝食 → レンタルバイクで出発', desc: '' },
      { time: '07:00-07:45', title: 'パンガンダラン → グリーンキャニオン', desc: '' },
      { time: '08:00-10:00', title: 'グリーンキャニオンのボートツアー', desc: '' },
      { time: '10:30-11:00', title: 'グリーンキャニオン → バトゥ・カラス', desc: 'バイク約20分' },
      { time: '11:00-13:00', title: 'バトゥ・カラスでサーフィン体験', desc: '2時間レッスン US$20以下。初心者に最適な波' },
      { time: '13:00-14:00', title: 'バトゥ・カラスで昼食', desc: 'Kokyo or House of Sawah' },
      { time: '14:30-15:00', title: 'バトゥ・カラス → パンガンダラン', desc: '' },
      { time: '15:30-17:00', title: '自然保護区散策 or ビーチ', desc: '' },
      { time: '17:30-18:30', title: 'サンセット @ 西ビーチ', desc: '' },
      { time: '19:00-', title: '夕食 & 翌日の移動準備', desc: '' },
    ],
  },
  planC: {
    title: 'Day 4 プランC: フル・アドベンチャー（ボディラフティング）',
    items: [
      { time: '05:30', title: '早めの朝食', desc: 'しっかり食べること（体力消耗するため）' },
      { time: '06:00-06:45', title: 'パンガンダラン → グリーンキャニオン', desc: '' },
      { time: '07:00-12:00', title: 'グリーンキャニオン・ボディラフティング', desc: '約5時間。10km。クリフジャンプ3箇所。上級者向け' },
      { time: '12:00-13:00', title: '昼食 & 休憩', desc: 'グリーンキャニオン近くのワルン' },
      { time: '13:30-14:30', title: '帰還 → シャワー & 休憩', desc: '' },
      { time: '15:00-17:00', title: 'のんびりビーチ or 自然保護区', desc: '体力と相談' },
      { time: '17:30-', title: 'サンセット → 夕食', desc: '' },
    ],
  },
}

// ===== BEER INFO =====
export const beerInfo = 'パンガンダランはイスラム教地域だが、外国人向けのレストラン・カフェではビンタンビール（Rp 30,000-50,000）が飲める。Bamboo Cafe、Restaurant Relax、Mini Tiga Homestayのバーなど。'

// ===== EMERGENCY CONTACTS =====
export const emergencyContacts = [
  { label: '警察', number: '110' },
  { label: '救急車', number: '118 / 119' },
  { label: 'RSUD Pangandaran（県立病院）', number: '市内' },
  { label: '在ジャカルタ日本国大使館', number: '(021) 3192-4308' },
  { label: 'BMKG（津波警報）', number: 'bmkg.go.id' },
]
