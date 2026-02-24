// Bandung Guide — structured data
// バンドン（西ジャワ）Day 1-2 完全ガイド

export const sections = [
  { id: 'overview', label: '概要' },
  { id: 'transport', label: '交通' },
  { id: 'kawah-putih', label: 'カワプティ' },
  { id: 'tangkuban', label: 'タンクバン' },
  { id: 'ciwidey', label: 'チウィデイ' },
  { id: 'colonial', label: 'コロニアル' },
  { id: 'food', label: '食事' },
  { id: 'stay', label: '宿泊' },
  { id: 'pangandaran', label: '移動' },
  { id: 'safety', label: '安全' },
]

export const mapSpots = [
  { name: 'バンドン駅', lat: -6.9124, lng: 107.6087 },
  { name: 'カワプティ火口湖', lat: -7.1658, lng: 107.4040 },
  { name: 'タンクバン・プラフ火山', lat: -6.7597, lng: 107.6000 },
  { name: 'シトゥ・パテンガン湖', lat: -7.1667, lng: 107.3667 },
  { name: 'ゲドゥン・サテ', lat: -6.9025, lng: 107.6189 },
  { name: 'ブラガ通り', lat: -6.9183, lng: 107.6094 },
]

export const mapPois = [
  { name: 'ATM BCA Bandung Station', type: 'atm', lat: -6.9130, lng: 107.6090, detail: 'BCA 24時間' },
  { name: 'ATM Mandiri Braga', type: 'atm', lat: -6.9185, lng: 107.6100, detail: 'Mandiri 24時間' },
  { name: 'Sindang Reret', type: 'restaurant', lat: -6.9050, lng: 107.6220, detail: 'スンダ料理 IDR 50,000〜' },
  { name: 'Batagor Kingsley', type: 'restaurant', lat: -6.9100, lng: 107.6100, detail: 'バタゴール IDR 12,000〜' },
  { name: 'Indomaret Braga', type: 'convenience', lat: -6.9180, lng: 107.6085, detail: '24時間コンビニ' },
  { name: 'Kopi Aroma', type: 'restaurant', lat: -6.9156, lng: 107.6136, detail: '1930年創業の焙煎所' },
]

export const budgetSummary = [
  { label: '交通（JKT→BDG）', value: 'IDR 125,000〜', note: '在来線Economy〜Whoosh' },
  { label: '宿泊（1泊）', value: 'IDR 200,000〜', note: 'バジェット〜中級' },
  { label: 'カワプティ入場', value: 'IDR 122,000', note: '外国人・シャトル込み' },
  { label: '食事（1食）', value: 'IDR 15,000〜', note: '屋台〜レストラン' },
]

// ===== TRANSPORT =====
export const transportFromJakarta = {
  whoosh: {
    name: 'Whoosh高速鉄道（推奨）',
    route: 'Halim（東ジャカルタ）→ Tegalluar（バンドン東部）',
    duration: '約50分',
    frequency: '毎日40便（約30分間隔）',
    classes: [
      { name: 'Premium Economy', price: 'IDR 150,000〜', note: '最安クラス' },
      { name: 'Business', price: 'IDR 450,000', note: '広い座席' },
      { name: 'First (VIP)', price: 'IDR 600,000', note: '最上級' },
    ],
    booking: 'ticket.kcic.co.id / Traveloka / tiket.com',
    tips: [
      'Halim駅へのアクセス: Jabodebek LRT（Cawang駅連絡）またはGrab/タクシー',
      'Tegalluar駅からバンドン市街まで約15km。フィーダーバス（DAMRI）またはGrab（IDR 30,000〜50,000、約30分）',
      '車内は清潔で快適。ただしTegalluar駅はバンドン中心部から離れている',
    ],
  },
  parahyangan: {
    name: '在来線 Argo Parahyangan',
    route: 'Jakarta Gambir → Bandung駅（市街中心部）',
    duration: '約3時間',
    frequency: '1日34便（2025年時点）',
    classes: [
      { name: 'Economy', price: 'IDR 125,000', note: 'リクライニング・エアコン' },
      { name: 'Executive', price: 'IDR 175,000', note: '広め・フットレスト' },
      { name: 'Panoramic Executive', price: 'IDR 352,000〜375,000', note: '天窓付きガラス車両・絶景' },
    ],
    booking: 'KAI Accessアプリ / Traveloka / tiket.com（H-90から予約可）',
    tips: [
      'Bandung駅は市街中心部、Braga Streetまで徒歩15分。二次交通不要',
      'Panoramic車両は特に人気。週末は2週間前予約推奨',
      '2025年2月に運行再開した伝統的な鉄道ルート',
    ],
  },
  bus: {
    name: '車 / バス',
    options: [
      { type: '高速道路（Cipularang）', duration: '2.5〜4時間', price: '高速料金 IDR 70,000前後', note: '週末は大渋滞（5時間超も）' },
      { type: 'DAMRIバス', duration: '3〜4時間', price: 'IDR 80,000〜120,000', note: 'Gambir/Kampung Rambutan → Leuwipanjang' },
      { type: 'トラベルシャトル', duration: '3〜4時間', price: 'IDR 85,000〜150,000', note: 'Xtrans, Daytrans等。door-to-door' },
    ],
  },
}

// ===== KAWAH PUTIH =====
export const kawahPutihInfo = {
  name: 'カワプティ火口湖（Kawah Putih）',
  gps: '-7.1658, 107.4040',
  altitude: '2,430m',
  diameter: '約500m',
  hours: '07:00〜17:00 WIB（最終入場16:00）',
  formed: '約400年前の間欠泉活動',
  volcano: 'パトハ山（Gunung Patuha）、休火山',
  prices: [
    { category: '外国人（シャトル込み）', price: 'IDR 122,000', note: 'オンタンアンティン往復含む' },
    { category: '外国人（シャトルなし）', price: 'IDR 90,000', note: '自家用車で上まで行く場合' },
    { category: 'サンライズチケット（8:00前）', price: 'IDR 143,000', note: '早朝の霧を狙う人向け' },
    { category: 'インドネシア人（シャトル込み）', price: 'IDR 63,000', note: '国内料金' },
    { category: '駐車場（下部）', price: 'IDR 11,000', note: '一般駐車場' },
    { category: '駐車場（火口近く）', price: 'IDR 150,000', note: '自家用車の場合' },
  ],
  shuttle: {
    name: 'オンタンアンティン（Ontang-Anting）',
    desc: '下部駐車場から火口湖まで約5kmの道を運行する小型オープンサイドバス',
    operation: '10人集まり次第出発。最大待ち時間30分',
    duration: '片道約10分',
    note: '外国人IDR 122,000の入場料に含まれる。風が強いので上着必携',
  },
  access: [
    { step: 1, title: 'バンドン市街 → Leuwipanjang Terminal', desc: 'Trans Metro BandungバスまたはGrab' },
    { step: 2, title: 'Leuwipanjang → Ciwidey Terminal', desc: 'エルフ/ミニバス、IDR 20,000、約1.5時間' },
    { step: 3, title: 'Ciwidey → Kawah Putih', desc: 'アンコット/ミニバス、IDR 10,000〜15,000、約30分' },
  ],
  charter: [
    { type: 'Grab Carチャーター', price: 'IDR 350,000〜500,000', note: '往復・待機時間込み。最も効率的' },
    { type: 'ツアー参加', price: 'IDR 300,000〜600,000/人', note: 'カワプティ+シトゥパテンガン+茶園セット' },
    { type: '公共交通（3回乗り継ぎ）', price: 'IDR 40,000〜50,000', note: '片道3時間+。冒険好き向き' },
  ],
  safety: [
    '火口湖での滞在は15〜30分に制限すること',
    '硫黄臭が非常に強い。風向きによっては目や喉が痛む',
    'N95マスク持参推奨。ただしSO2ガスには効果が限定的',
    '呼吸器疾患・心臓疾患の方、妊婦、乳幼児は入場不可',
    '硫黄濃度が高い日は管理者判断で臨時閉鎖あり',
    '柵を越えて水際に近づくのは絶対禁止',
  ],
  photography: [
    { point: 'ベストタイム', detail: '7:00〜10:00（霧と軟らかい光が幻想的）' },
    { point: '湖の色変化', detail: '硫黄濃度・天候により白→翡翠色→青緑に変化' },
    { point: '霧の演出', detail: '早朝は霧が湖面を漂い、神秘的な写真が撮れる' },
    { point: '注意点', detail: '硫黄蒸気でレンズが曇る。レンズクロスを頻繁に使用' },
    { point: '三脚', detail: '使用可。ただし他の観光客の邪魔にならないこと' },
    { point: 'ドローン', detail: '基本的に使用禁止' },
  ],
  weather: [
    '標高2,430mのため気温は8〜22度。市街地より10度以上低い',
    '必携品: フリースorダウンジャケット、長ズボン、滑りにくい靴',
    '雨季（10〜5月）は午後にスコールの可能性大。午前中の訪問が鉄則',
    '濃霧で何も見えない日もある（特に雨季）。天気予報を確認',
    '乾季（6〜9月）がベストシーズン',
  ],
}

// ===== TANGKUBAN PERAHU =====
export const tangkubanPerahu = {
  name: 'タンクバン・プラフ火山（Tangkuban Perahu）',
  meaning: '「ひっくり返った船」（スンダの伝説サンクリアンに由来）',
  type: '成層火山（活火山）',
  altitude: '2,084m',
  gps: '-6.7597, 107.6000',
  hours: '07:00〜17:00 WIB',
  prices: [
    { category: '外国人（平日）', price: 'IDR 200,000' },
    { category: '外国人（週末・祝日）', price: 'IDR 300,000' },
    { category: 'インドネシア人（平日）', price: 'IDR 30,000' },
    { category: 'インドネシア人（週末）', price: 'IDR 50,000' },
    { category: '駐車場（車）', price: 'IDR 20,000' },
    { category: 'ガイド料', price: 'IDR 100,000〜150,000' },
  ],
  craters: [
    {
      id: 'kawah-ratu',
      name: 'Kawah Ratu（ラトゥ火口 = 女王の火口）',
      desc: '最もアクセスしやすい火口。駐車場から車で火口の縁まで行ける。インドネシアで唯一、車で火口の縁まで行ける火山。',
      highlights: [
        '硫黄の噴気孔が見える。黄色い硫黄の堆積',
        '所要時間: 30分〜1時間',
        '駐車場から車で火口の縁まで直接アクセス可能',
      ],
    },
    {
      id: 'kawah-domas',
      name: 'Kawah Domas（ドマス火口）',
      desc: 'ラトゥ火口から徒歩30分の下り坂（ユーカリ林を通る）。温泉地帯で足湯可能。',
      highlights: [
        '名物: 温泉で茹でた卵（地元の売り子から購入可能）',
        '泥スパ体験あり（追加料金）',
        '硫黄臭がラトゥ火口の10倍強い（マスク推奨）',
        '営業時間: 08:00〜15:30',
        '往復所要時間: 3〜4時間（ゆっくり見学含む）',
        'ガイド推奨（IDR 100,000〜150,000）',
      ],
    },
    {
      id: 'kawah-upas',
      name: 'Kawah Upas（ウパス火口）',
      desc: '一般開放されているがアクセスが限定的。ガイド同伴が必要。',
      highlights: [
        'ガイド同伴必須のクレーター',
        '訪問者が少なく静かな探索が可能',
      ],
    },
    {
      id: 'cikahirupan',
      name: 'Cikahirupan火口',
      desc: '見学可能な4つの火口の一つだが、訪問者は少ない。',
      highlights: [
        '最も知名度の低い火口',
        '静かな環境で自然を楽しめる',
      ],
    },
  ],
  warnings: [
    '2019年7月に噴火あり（火口から噴石が飛散）。活火山であることを忘れないこと',
    '火山活動レベルは随時変更。訪問前にインドネシア火山地質局（PVMBG）の情報を確認',
    '週末は非常に混雑。平日の午前中がベスト',
    '土産物の押し売りがある。はっきり断ること',
  ],
  access: 'バンドン市街から車/Grab: 約1時間（IDR 100,000〜150,000片道）',
}

// ===== CIWIDEY =====
export const ciwideyAttractions = [
  {
    id: 'situ-patenggang',
    name: 'シトゥ・パテンガン湖（Situ Patenggang）',
    gps: '-7.1667, 107.3667',
    altitude: '約1,600m',
    hours: '08:00〜17:00',
    distance: 'Kawah Putihから車で約30分',
    prices: [
      { item: '入場料（個人）', price: 'IDR 25,000' },
      { item: 'ボート乗船', price: 'IDR 30,000/人 or IDR 240,000/船（8人乗り）' },
      { item: 'Pinisi Restoエリア', price: 'IDR 10,000〜20,000（別途）' },
      { item: '通しチケット', price: 'IDR 75,000（お得）' },
    ],
    highlights: [
      'Pinisi Resto: ピニシ船の形をしたレストラン。インスタ映えスポットとして大人気',
      '茶畑の景観: 湖の周囲に広がる茶園が美しい',
      'ボート遊覧: Batu Cinta（愛の石）伝説のスポットへ',
      'スンダの伝説: Ki SantikaとDewi Rengganisの悲恋物語',
    ],
  },
  {
    id: 'ranca-upas',
    name: 'ランチャ・ウパス（Ranca Upas）',
    gps: '-7.1433, 107.3922',
    hours: '24時間（キャンプ場）',
    prices: [
      { item: '外国人入場料', price: 'IDR 44,000' },
      { item: 'インドネシア人', price: 'IDR 35,000' },
      { item: 'キャンプ場込み', price: 'IDR 55,000' },
    ],
    highlights: [
      '鹿保護区: 放し飼いの鹿と触れ合える。エサやり体験可能',
      'キャンプ場: 西ジャワでも人気のキャンプスポット。レンタルテントあり',
      '天然温泉: 温泉プールでリラックス（追加料金）',
      'アウトボンド: アスレチック・冒険エリアあり',
    ],
  },
  {
    id: 'glamping',
    name: 'グランピング・レイクサイド（Glamping Lakeside Rancabali）',
    site: 'glampinglakesiderancabali.com',
    booking: 'WhatsAppのみ（Booking.com / Agoda不可）',
    prices: [
      { item: 'Lakeside Tent（平日）', price: 'IDR 1,590,000' },
      { item: 'Lakeside Tent（週末）', price: 'IDR 1,830,000' },
      { item: 'Lakeside Tent（ハイシーズン）', price: 'IDR 1,912,000' },
      { item: 'New Lakeside Tent（プレミアム）', price: 'IDR 2,040,000〜' },
    ],
    highlights: [
      '湖上フローティングテント。空のプラスチックバレルで浮いている',
      '全9室のみ。早期予約必須',
      '朝食2名分込み。湖とパトハ山のサンライズビュー',
      'インスタ映え目的で人気だが、設備は簡素との口コミもあり',
    ],
  },
  {
    id: 'strawberry',
    name: 'ストロベリーファーム（いちご狩り）',
    fee: 'IDR 10,000〜20,000（カゴ・ハサミ・ジュース1杯込み）',
    duration: '約30分',
    highlights: [
      '入場料 IDR 10,000〜20,000。カゴ・ハサミ・いちごジュース1杯付き',
      '摘んだ分は重量課金（100gあたり IDR 15,000程度）',
      '熟したいちごが見つかるかは運次第（50%程度との口コミ）',
      'スーパーで買うより割高だが体験として楽しい',
      'Ciwidey地区各所（Kawah Putih方面の道沿いに複数あり）',
    ],
  },
]

// ===== TEA PLANTATIONS =====
export const teaPlantations = [
  {
    id: 'rancabali',
    name: 'ランチャバリ茶園（Rancabali）',
    location: 'Ciwidey地区、Kawah PutihやSitu Patenggangの近く',
    fee: 'IDR 15,000〜20,000',
    duration: '1〜2時間',
    highlights: [
      '茶畑の中を散策できるウォーキングコース',
      '茶工場見学: 茶葉の摘み取りから製茶までの工程を見学可能',
      '写真撮影スポットとして人気（緑の絨毯のような景観）',
      'Glamping Lakesideはこの茶園の中にある',
    ],
  },
  {
    id: 'malabar',
    name: 'マラバル茶園（Malabar）',
    location: 'Pangalengan地区、バンドン市街から南東へ約40km',
    fee: '要確認',
    duration: '半日',
    highlights: [
      'オランダ植民地時代にK.A.R. Bosscha（ボッスハ天文台の人物）が経営',
      'かつてオランダ王室御用達の茶を生産',
      '植民地時代のインドネシア茶産業の象徴的存在',
      '現在も広大な茶畑が広がり散策可能',
    ],
  },
  {
    id: 'gambung',
    name: 'ガンブン茶園（Gambung）',
    location: 'Ciwidey地区',
    fee: '要確認',
    duration: '1〜2時間',
    highlights: [
      '茶の研究センター（Pusat Penelitian Teh dan Kina）併設',
      '各種茶のテイスティング体験（IDR 20,000〜50,000程度）',
      '収穫体験も可能（事前予約推奨）',
      '紅茶・緑茶・白茶（最高級・少量生産）の味比べ',
    ],
  },
]

// ===== COLONIAL HERITAGE =====
export const colonialHeritage = [
  {
    id: 'gedung-merdeka',
    name: 'ゲドゥン・ムルデカ（アジアアフリカ会議場）',
    address: 'Jl. Asia Afrika No.65, Bandung',
    gps: '-6.9217, 107.6069',
    built: '1895年（当初は社交クラブ Concordia）',
    hours: '火〜日 08:00〜16:00（月曜休館）',
    fee: '無料',
    highlights: [
      '1955年アジアアフリカ会議（バンドン会議）の会場。29カ国が参加',
      'スカルノ大統領が開会演説。ネルー、周恩来、ナセルらが参加',
      '平和十原則（Dasasila Bandung）を採択。非同盟運動の基礎に',
      '博物館にスカルノの等身大蝋人形、会議場の復元展示',
      '無料入場。歴史好きには必見',
    ],
  },
  {
    id: 'gedung-sate',
    name: 'ゲドゥン・サテ（Gedung Sate）',
    address: 'Jl. Diponegoro No.22, Bandung',
    gps: '-6.9025, 107.6189',
    architect: 'J. Gerber（オランダ人）',
    built: '1924年竣工',
    hours: '火〜日 09:30〜16:00（月曜・祝日休館）',
    fee: '要事前予約（公式サイトから）',
    highlights: [
      '中央の尖塔に6つの球体。サテ（串焼き）に見えることが名前の由来',
      '6つの球体は建設費600万ギルダーを象徴',
      'ルネサンス、ムーア、インドネシア伝統様式の融合',
      '展望台のCoffee Morningカフェでバンドン市街360度パノラマ',
      '博物館: VR/AR体験、オランダ東インド時代の映像資料',
      '現在は西ジャワ州知事庁舎として使用',
    ],
  },
  {
    id: 'villa-isola',
    name: 'ヴィラ・イゾラ（Villa Isola）',
    address: 'UPI（インドネシア教育大学）キャンパス内',
    gps: '-6.8636, 107.5939',
    architect: 'Charles Prosper Wolff Schoemaker',
    built: '1933年（わずか6ヶ月で建設）',
    fee: '外観見学可能',
    highlights: [
      'インドネシア最も象徴的なアールデコ建築',
      'オランダ人メディア王D.W. Berrettyの私邸として建設',
      'ジャワの伝統哲学を取り入れた南北軸配置',
      '1942年: 日本軍バンドン司令部として使用',
      '敷地面積12万平米。UPIキャンパス内で外観見学可能',
    ],
  },
  {
    id: 'braga-street',
    name: 'ブラガ通り（Braga Street）',
    address: 'Jl. Braga, Bandung中心部',
    gps: '-6.9183, 107.6094',
    history: '1920〜30年代にバンドンの目抜き通りとして繁栄',
    fee: '無料（散策）',
    highlights: [
      '装飾的なパラペット、ジグザグ模様、熱帯モチーフが特徴',
      'Braga Permai: 1920年創業のレストラン。テラス席でライブ音楽',
      'Wiki Koffie: 学生に人気のカフェ。ベトナムドリップ IDR 15,000',
      'アールデコ様式のファサードが連なる通りを散策するだけで価値あり',
    ],
  },
]

// ===== LOCAL DISHES =====
export const localDishes = [
  { name: 'Nasi Timbel', desc: 'バナナの葉で包んだご飯。揚げ鶏・テンペ・サンバル・ララパン付き', price: 'IDR 25,000〜50,000' },
  { name: 'Karedok', desc: '生野菜のピーナッツソースサラダ（バンドン発祥）。キュウリ、もやし、キャベツ', price: 'IDR 15,000〜30,000' },
  { name: 'Lotek', desc: '茹で野菜のピーナッツソース和え（カレドックの加熱版）', price: 'IDR 15,000〜25,000' },
  { name: 'Sayur Asem', desc: '酸っぱい野菜スープ（タマリンドベース）。ジャックフルーツ、トウモロコシ入り', price: 'IDR 10,000〜20,000' },
  { name: 'Lalapan', desc: '生野菜の盛り合わせ。バジル、キュウリ、レタス等をサンバルにつけて食べる', price: 'セット含まれる' },
  { name: 'Nasi Liwet', desc: 'ココナッツミルクで炊いたご飯。鶏肉、テンペ添え', price: 'IDR 20,000〜40,000' },
  { name: 'Nasi Tutug Oncom', desc: 'オンチョム（大豆発酵食品）を混ぜ込んだご飯', price: 'IDR 15,000〜30,000' },
  { name: 'Gurame Bakar', desc: '淡水魚グラメの炭火焼き。甘辛い醤油ダレ', price: 'IDR 60,000〜120,000' },
  { name: 'Ayam Bakar', desc: '鶏の炭火焼き。下味をじっくり染み込ませてから焼く', price: 'IDR 30,000〜50,000' },
]

// ===== STREET FOOD =====
export const streetFood = [
  { name: 'Batagor', desc: '魚のすり身を豆腐・ワンタン皮に詰めて揚げたもの。ピーナッツソース', price: 'IDR 12,000〜22,000', shop: 'Batagor Kingsley（Jl. Veteran No.25、1982年創業）' },
  { name: 'Siomay', desc: 'バタゴールの蒸し版。キャベツ、じゃがいも、苦瓜入り', price: 'IDR 15,000〜30,000', shop: 'Siomay Kingsley（同上）' },
  { name: 'Surabi', desc: '米粉のパンケーキ。甘い（チョコ、チーズ）or 塩味（オンチョム、卵）', price: 'IDR 6,000〜16,000', shop: 'Surabi Enhaii（Jl. Setiabudi No.194）/ Surabi Cihapit（Jl. Cihapit No.65）' },
  { name: 'Martabak', desc: 'インドネシア式厚焼きパンケーキ。甘い版or塩味', price: 'IDR 30,000〜80,000', shop: '各所の屋台' },
  { name: 'Soto Bandung', desc: '大根と豆のスープ。バンドン版ソト', price: 'IDR 15,000〜25,000', shop: '各所' },
  { name: 'Colenak', desc: '焼きキャッサバに甘いココナッツソース', price: 'IDR 10,000〜20,000', shop: '各所' },
  { name: 'Cuanki', desc: '魚団子と豆腐のスープ', price: 'IDR 10,000〜15,000', shop: '屋台各所' },
]

// ===== RESTAURANTS =====
export const restaurants = [
  {
    id: 'sindang-reret',
    name: 'Sindang Reret',
    address: 'Jl. Surapati No.53, Bandung',
    type: 'スンダ料理',
    price: 'IDR 50,000〜100,000/人',
    desc: '2階建ての老舗。幅広いスンダ料理メニュー。観光客にも地元民にも人気の安定感',
    recommended: ['鶏料理', '魚料理', 'ソト', 'カレドック', 'ロテック'],
  },
  {
    id: 'kampung-daun',
    name: 'Kampung Daun Culture Gallery & Cafe',
    address: 'Jl. Sersan Bajuri（Lembang方面）',
    type: '熱帯雨林レストラン',
    price: 'IDR 80,000〜150,000/人',
    desc: '滝、小川、熱帯植物に囲まれた幻想的空間。各東屋に「ケントンガン」（木鼓）がありウェイターを呼ぶ。バンドン市街から車30〜40分',
    recommended: ['スンダ料理', 'ステーキ', 'パスタ'],
  },
  {
    id: 'warung-imas',
    name: 'Warung Nasi Ibu Imas',
    address: 'バンドン市内',
    type: '24時間営業スンダ料理',
    price: 'IDR 20,000〜50,000/人',
    desc: '辛いサンバルが絶品。地元民が深夜でも通う24時間ワルン',
    recommended: ['カレドック', 'レウンチャ（苦味野菜）', 'アヤムバカール'],
  },
  {
    id: 'sajian-sambara',
    name: 'Sajian Sambara',
    address: 'バンドン市内',
    type: '米料理専門',
    price: 'IDR 30,000〜70,000/人',
    desc: '豊富な米メニュー。ナシリウェット、ナシティンベル、ナシメラ、ナシトゥトゥグオンチョムが揃う',
    recommended: ['ナシティンベルセット', 'ナシリウェット', 'ナシトゥトゥグオンチョム'],
  },
  {
    id: 'dapoer-pandan',
    name: 'Dapoer Pandan Wangi - Patuha',
    address: 'チウィデイ方面',
    type: 'スンダ料理',
    price: 'IDR 40,000〜80,000/人',
    desc: '清潔で快適。アヤムウンクプ、グラメバカールケチャップ、テロンラオス（絶品ナス料理）がおすすめ',
    recommended: ['アヤムウンクプ', 'グラメバカールケチャップ', 'テロンラオス'],
  },
]

// ===== COFFEE SHOPS =====
export const coffeeShops = [
  {
    id: 'kopi-aroma',
    name: 'Kopi Aroma',
    address: 'Jl. Banceuy No.51, Bandung',
    gps: '-6.9156, 107.6136',
    founded: '1930年',
    founder: 'Tan Houw Sian（中国系インドネシア人）',
    type: '店頭販売のみ（カフェではない）',
    highlights: [
      'アラビカ豆は8年間熟成、ロブスタ豆は5年間熟成',
      '長期熟成により酸味とカフェインが減少し、香りと味が向上',
      '薪焙煎（Wood roasting）を今も継続',
      '二代目Widyapratama氏が家族で経営',
      '行列ができることも（特に週末）。開店直後がおすすめ',
    ],
  },
  {
    id: 'wiki-koffie',
    name: 'Wiki Koffie',
    address: 'Braga Street',
    type: 'カフェ',
    price: 'IDR 15,000〜40,000',
    highlights: ['学生に人気', 'ベトナムドリップ IDR 15,000', 'ブラガ通り沿いの好立地'],
  },
  {
    id: 'braga-permai',
    name: 'Braga Permai',
    address: 'Jl. Braga',
    type: 'レストラン兼カフェ',
    price: 'IDR 30,000〜60,000',
    highlights: ['1920年創業（旧Maison Bogarijen）', '植民地時代のヨーロッパ人上流階級御用達', 'テラス席でライブ音楽あり'],
  },
  {
    id: 'warung-purnama',
    name: 'Warung Kopi Purnama',
    address: 'Bandung市内',
    type: '伝統的コーヒー店',
    price: 'IDR 10,000〜',
    highlights: ['1930年創業のもう一つの伝説', '伝統的なインドネシアコーヒー'],
  },
]

// ===== SHOPPING =====
export const shopping = [
  {
    id: 'rumah-mode',
    name: 'Rumah Mode Factory Outlet',
    address: 'Jl. Dr. Setiabudi No.41, Bandung',
    hours: '09:00〜21:00',
    desc: 'バンドン最大・最人気のアウトレット。複数建物の巨大施設。メンズ、レディース、キッズの衣料、バッグ、靴。Tシャツ IDR 50,000〜、ジーンズ IDR 100,000〜',
    note: 'タンクバン・プラフの帰りに寄れる好立地',
  },
  {
    id: 'heritage-fo',
    name: 'Heritage Factory Outlet',
    address: 'Jl. L.L.R.E. Martadinata（Riau通り）',
    hours: '営業中',
    desc: 'バンドンのアウトレットの元祖。白い大きなコロニアル建築。Rumah Modeより高級路線',
    note: 'ブランド品の品揃えが良い',
  },
  {
    id: 'pasar-baru',
    name: 'Pasar Baru（パサール・バル）',
    address: 'Jl. Otto Iskandardinata No.70, Bandung',
    hours: '09:00〜17:00',
    desc: '1884年創業のバンドン最古の市場。4階建てビル。コットン、シルク、バティック、ムスリムウェア。値切り交渉は表示価格の50〜70%が目安',
    note: '早朝が空いている',
  },
]

// ===== ACCOMMODATIONS =====
export const accommodations = {
  station: {
    area: 'バンドン駅周辺（交通の利便性重視）',
    hotels: [
      { name: 'Mogens Boutique Hotel', price: 'IDR 300,000〜', features: '駅から徒歩7分。ミニジム、カフェ、屋上テラス' },
      { name: 'Hotel Mariet', price: 'IDR 200,000〜', features: '駅近、清潔なバジェットホテル' },
    ],
  },
  dago: {
    area: 'Dago地区（カフェ・ナイトライフ重視）',
    hotels: [
      { name: 'The 1O1 Dago', price: 'IDR 500,000〜（USD 33〜）', features: '評価8.0/10。モダンなビジネスホテル' },
      { name: 'Beehive Boutique Hotel', price: 'IDR 350,000〜', features: 'Dago通りから徒歩5分。おしゃれ' },
      { name: 'The Attic Bed & Breakfast', price: 'IDR 200,000〜（USD 13〜）', features: 'バックパッカー向け。コスパ最強' },
      { name: 'Collection O 10 Sweet Karina', price: 'IDR 200,000〜（USD 13〜）', features: '7.4/10。格安清潔' },
    ],
  },
  ciwidey: {
    area: 'Ciwidey地区（自然・カワプティ重視）',
    hotels: [
      { name: 'Glamping Lakeside Rancabali', price: 'IDR 1,590,000〜', features: '湖上フローティングテント。前述参照' },
      { name: 'Ranca Upas Campground', price: 'IDR 55,000〜（テント持参）', features: '鹿のいるキャンプ場' },
      { name: 'Various villa/guesthouse', price: 'IDR 300,000〜600,000', features: 'Ciwidey周辺に多数。Booking.comで検索' },
    ],
  },
}

// ===== LOCAL TRANSPORT =====
export const localTransport = [
  { type: 'Grab / Gojek（推奨）', desc: '安い、便利、メーター詐欺なし。カワプティへの日帰りもGrabチャーターが最も効率的。1日チャーター IDR 350,000〜600,000', price: 'IDR 5,000〜50,000' },
  { type: 'アンコット（Angkot）', desc: '小型ミニバス（10〜15人乗り）。色と番号で識別。停留所なし。手を挙げて乗車、「Kiri!」で下車', price: 'IDR 4,000〜7,000' },
  { type: 'DAMRI（路線バス）', desc: 'Whoosh Tegalluar駅 → バンドン市街のフィーダーバス。空港シャトルもあり', price: 'IDR 25,000〜40,000' },
]

// ===== TO PANGANDARAN =====
export const toPangandaran = {
  bus: [
    { operator: 'Sari Harum', departure: '06:00, 14:00', price: 'IDR 125,000', duration: '5〜6時間', note: '定評あり' },
    { operator: 'V-Trans', departure: '06:00〜14:00', price: 'IDR 130,000〜', duration: '約5時間', note: '' },
    { operator: 'Ozan Travel', departure: '05:00〜22:00', price: 'IDR 140,000〜', duration: '5〜6時間', note: '便数多い' },
    { operator: 'Mypangandaran', departure: '要確認', price: 'IDR 175,000', duration: '5〜6時間', note: '' },
    { operator: 'Citra Trans', departure: '要確認', price: 'IDR 170,000', duration: '5〜6時間', note: '' },
    { operator: 'Bus Budiman（エコノミー）', departure: '03:00〜10:00, 15:00', price: 'IDR 95,000〜110,000', duration: '約8時間', note: '最安。エアコンなし。Cicaheum Terminal発' },
  ],
  train: {
    step1: 'Bandung → Banjar: Pangandaran号（Panoramic車両あり）、約4〜5時間',
    step2: 'Banjar → Pangandaran: バスまたはオジェック、約2時間',
    total: '約6〜7時間。鉄道好きにはおすすめ',
  },
  tips: [
    'パンガンダランへは朝6時発のバス直行便が最も効率的',
    'バンドンを朝出発すれば昼過ぎに到着',
    '鉄道経由はBanjarで乗り換えが必要。時間に余裕を持って',
    'Bus Budimanはエアコンなしだが最安。バックパッカー向け',
  ],
}

// ===== SAFETY =====
export const safetyAlerts = [
  {
    spot: 'カワプティ火口湖 — 硫黄ガス',
    warning: '硫黄ガスが非常に強い。滞在は15〜30分に制限。呼吸器疾患・心臓疾患の方、妊婦、乳幼児は入場不可。N95マスク持参推奨（SO2ガスには効果限定的）。臨時閉鎖の場合あり',
  },
  {
    spot: 'タンクバン・プラフ — 活火山',
    warning: '2019年7月に噴火実績あり。訪問前にインドネシア火山地質局（PVMBG）の最新情報を確認。火口付近では係員の指示に従うこと',
  },
  {
    spot: '高地の気温差',
    warning: 'カワプティ（2,430m）は市街地より10度以上低く、気温8〜22度。タンクバン・プラフ（2,084m）も同様に冷える。フリースまたはダウンジャケット、長ズボン、滑りにくい靴を必携',
  },
  {
    spot: 'スリ・両替詐欺',
    warning: 'Braga Street、ファクトリーアウトレット等の混雑地でスリに注意。両替はストリートの両替商を避け、正規両替所または銀行支店内のATMを利用。スタンドアロン型ATMはスキミングのリスクあり',
  },
  {
    spot: '交通事故',
    warning: 'バイクの運転は非常に危険。観光客は自分では乗らないこと。週末のCipularang高速は大渋滞（5時間超）になることも',
  },
]

// ===== EMERGENCY CONTACTS =====
export const emergencyContacts = [
  { type: '警察', number: '110' },
  { type: '救急', number: '119' },
  { type: '消防', number: '113' },
  { type: 'バンドン市救急センター（PSC 119）', number: '(022) 2031711（24時間）' },
  { type: 'バンドン観光局', number: '(022) 2500064' },
  { type: '在インドネシア日本大使館（ジャカルタ）', number: '(021) 3192-4308' },
]

// ===== HOSPITALS =====
export const hospitals = [
  { name: 'Santosa Hospital Bandung Central', phone: '(022) 4248555', note: '24時間救急。外国人対応可能' },
  { name: 'RS Hasan Sadikin', phone: '(022) 2034953', note: '国立大学病院。最高レベル医療' },
]

// ===== MODEL ITINERARIES =====
export const modelItineraries = {
  day1: {
    title: 'Day 1: ジャカルタ → バンドン（夕方到着）',
    items: [
      { time: '15:00-16:00', title: 'Whoosh高速鉄道でジャカルタ出発', desc: 'Halim駅。Premium Economy IDR 150,000', icon: 'train' },
      { time: '16:00', title: 'Tegalluar駅到着', desc: 'Grabでバンドン市街へ（30分、IDR 40,000）', icon: 'arrive' },
      { time: '17:00', title: 'ホテルチェックイン', desc: 'Dago地区 or バンドン駅周辺', icon: 'hotel' },
      { time: '18:00', title: 'Braga Street散策', desc: 'アールデコ建築を眺めながら夕暮れ散歩', icon: 'walk' },
      { time: '19:00', title: '夕食: Sindang Reret', desc: 'スンダ料理デビュー。ナシティンベル、カレドック', icon: 'food' },
      { time: '20:30', title: 'Surabi Enhaii', desc: '米粉パンケーキ。デザート代わり', icon: 'dessert' },
      { time: '21:30', title: 'ホテル帰着', desc: '翌朝早いので早めに就寝', icon: 'sleep' },
    ],
  },
  day2a: {
    title: 'Day 2 プランA: 南バンドン自然コース（推奨）',
    items: [
      { time: '05:30', title: 'ホテル出発', desc: 'Grab車チャーター（終日 IDR 400,000〜500,000）', icon: 'car' },
      { time: '07:30', title: 'カワプティ到着', desc: '開場直後。霧と幻想的な光', icon: 'nature' },
      { time: '08:00-08:30', title: '火口湖見学・撮影', desc: '15〜30分で退出（硫黄ガス）', icon: 'camera' },
      { time: '09:30', title: 'ランチャバリ茶園散策', desc: '茶畑の中を歩く。30〜45分', icon: 'tea' },
      { time: '10:30', title: 'シトゥ・パテンガン湖', desc: 'ボート遊覧 or Pinisi Restoで軽食', icon: 'lake' },
      { time: '11:30', title: 'ストロベリーファーム', desc: 'いちご狩り体験。30分', icon: 'fruit' },
      { time: '12:30', title: 'Dapoer Pandan Wangiで昼食', desc: 'スンダ料理ランチ', icon: 'food' },
      { time: '14:00', title: 'バンドン市街へ帰路', desc: '', icon: 'car' },
      { time: '15:30', title: 'Gedung Merdeka（会議博物館）', desc: '無料。1955年の歴史を学ぶ', icon: 'museum' },
      { time: '16:30', title: 'Kopi Aroma', desc: '1930年創業の焙煎所。コーヒー豆を土産に', icon: 'coffee' },
      { time: '17:30', title: 'Rumah Mode Factory Outlet', desc: 'ショッピング（〜21:00まで）', icon: 'shop' },
      { time: '19:30', title: '夕食: Kampung Daun', desc: '熱帯雨林の中のディナー（要Grab）', icon: 'food' },
      { time: '21:30', title: 'ホテル帰着', desc: '翌朝の移動準備', icon: 'sleep' },
    ],
  },
  day2b: {
    title: 'Day 2 プランB: バンドン市内文化コース',
    items: [
      { time: '08:00', title: 'ホテル出発', desc: '', icon: 'walk' },
      { time: '08:30', title: 'Gedung Sate見学', desc: '要事前予約。展望台からの360度パノラマ', icon: 'museum' },
      { time: '10:00', title: 'Gedung Merdeka', desc: 'アジアアフリカ会議博物館', icon: 'museum' },
      { time: '11:00', title: 'Braga Streetウォーキングツアー', desc: 'アールデコ建築巡り（2時間）', icon: 'walk' },
      { time: '12:00', title: 'Braga Permaiでランチ', desc: '1920年創業のレストラン', icon: 'food' },
      { time: '13:30', title: 'Kopi Aroma', desc: 'コーヒー豆購入', icon: 'coffee' },
      { time: '14:00', title: 'Pasar Baru', desc: 'テキスタイル・バティック ショッピング', icon: 'shop' },
      { time: '15:30', title: 'Saung Angklung Udjo', desc: 'アンクルン演奏体験（90分）', icon: 'music' },
      { time: '17:30', title: 'Heritage / Rumah Mode', desc: 'ファクトリーアウトレット', icon: 'shop' },
      { time: '19:00', title: 'Batagor Kingsley', desc: 'バタゴールの名店', icon: 'food' },
      { time: '20:00', title: 'Sudirman Night Market', desc: 'マルタバク、屋台グルメ巡り', icon: 'market' },
      { time: '21:30', title: 'ホテル帰着', desc: '', icon: 'sleep' },
    ],
  },
}

// ===== COST ESTIMATE =====
export const costEstimate = [
  { item: '交通（ジャカルタ→バンドン）', budget: 'IDR 125,000', mid: 'IDR 450,000' },
  { item: '宿泊（1泊）', budget: 'IDR 200,000', mid: 'IDR 500,000' },
  { item: 'カワプティ入場', budget: 'IDR 122,000', mid: 'IDR 122,000' },
  { item: 'Grabチャーター（終日）', budget: '---', mid: 'IDR 450,000' },
  { item: '食事（2日分・6食）', budget: 'IDR 150,000', mid: 'IDR 400,000' },
  { item: 'その他入場料', budget: 'IDR 50,000', mid: 'IDR 150,000' },
  { item: 'ショッピング', budget: 'IDR 100,000', mid: 'IDR 500,000' },
  { item: '合計', budget: 'IDR 747,000（約7,000円）', mid: 'IDR 2,572,000（約24,000円）' },
]

// ===== JAPANESE INSIGHTS =====
export const japaneseInsights = [
  'バンドンは「インドネシアの軽井沢」。ジャカルタ（海抜8m・猛暑）から一転、標高768mで涼しく快適',
  'Whooshは快適で車内は清潔だが、Tegalluar駅からの二次交通が課題。在来線ならBandung駅に直結で便利',
  'カワプティは「カワ（噴火口）＋プティ（白い）＝白い噴火口」。硫黄の影響で大地は黄色く、湖は薄い緑色',
  '1955年のアジアアフリカ会議には日本代表団も参加（高碕達之助経済審議庁長官）。歴史的つながりを感じる場所',
  'Villa Isolaは第二次大戦中に日本軍バンドン司令部として使用された歴史がある',
  'スンダ料理は日本人の口に合いやすい。新鮮な野菜とサンバル（辛味調味料）の組み合わせが特徴',
  'バンドンには日本領事館がない。緊急時はジャカルタの日本大使館に連絡',
]
