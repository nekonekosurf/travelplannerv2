// Malang Guide — structured data from research notes

export const sections = [
  { id: 'overview', label: '概要' },
  { id: 'temples', label: '寺院' },
  { id: 'nature', label: '自然' },
  { id: 'colonial', label: '街歩き' },
  { id: 'food', label: '食事' },
  { id: 'stay', label: '宿泊' },
  { id: 'transport', label: '交通' },
  { id: 'safety', label: '安全' },
]

export const mapSpots = [
  { name: 'マラン・コタバル駅', lat: -7.9774, lng: 112.6341 },
  { name: 'チャンディ・シンゴサリ', lat: -7.88778, lng: 112.66389 },
  { name: 'チャンディ・キダル', lat: -8.0286, lng: 112.7700 },
  { name: 'チャンディ・ジャゴ', lat: -8.00611, lng: 112.76361 },
  { name: 'チャンディ・バドゥッ', lat: -7.9578, lng: 112.5985 },
  { name: 'スンブラワン仏塔', lat: -7.850, lng: 112.660 },
  { name: 'コバン・ロンド滝', lat: -7.8820, lng: 112.4550 },
  { name: 'トゥンパックスウ滝', lat: -8.2300, lng: 112.9200 },
  { name: 'バトゥ市', lat: -7.8700, lng: 112.5283 },
  { name: 'ブロモ山', lat: -7.9425, lng: 112.9530 },
]

export const mapPois = [
  { name: 'トコ・オエン', type: 'restaurant', lat: -7.9778, lng: 112.6325, detail: '1930年開業レトロカフェ' },
  { name: 'Bakso President', type: 'restaurant', lat: -7.9646, lng: 112.6503, detail: 'バクソ Rp12,000〜' },
  { name: 'Rawon Nguling', type: 'restaurant', lat: -7.9780, lng: 112.6350, detail: 'ラウォン Rp14,000〜' },
  { name: 'Java Dancer Coffee', type: 'cafe', lat: -7.9757, lng: 112.6318, detail: 'スペシャルティコーヒー 4.5/5' },
  { name: 'Pecel Kawi', type: 'restaurant', lat: -7.9760, lng: 112.6240, detail: 'ナシ・ペチェル Rp10,000〜' },
  { name: 'ジョディパン虹の村', type: 'landmark', lat: -7.9830, lng: 112.6370, detail: 'カラフルな壁画の集落' },
  { name: 'アルンアルン・トゥグ', type: 'landmark', lat: -7.9770, lng: 112.6340, detail: '中央広場・独立記念碑' },
  { name: 'ATM BCA Malang', type: 'atm', lat: -7.9775, lng: 112.6330, detail: 'BCA/BRI 24時間' },
  { name: 'Indomaret Malang', type: 'convenience', lat: -7.9780, lng: 112.6345, detail: '24時間コンビニ' },
  { name: 'Omah Motorent', type: 'transit', lat: -7.9770, lng: 112.6335, detail: 'バイクレンタル Rp80,000〜' },
]

export const budgetSummary = [
  { label: 'ブロモツアー', value: 'Rp 350,000〜500,000', note: 'マラン発共有ツアー' },
  { label: 'バイクレンタル', value: 'Rp 60,000〜100,000', note: '1日（Honda Beat）' },
  { label: '宿泊', value: 'Rp 60,000〜350,000', note: 'ドミ〜中級個室' },
  { label: '食事', value: 'Rp 10,000〜35,000', note: '1食あたり' },
]

// ===== TEMPLES =====

export const singosariHistory = {
  title: 'ケン・アロクと呪いの短剣',
  subtitle: 'シンゴサリ王朝の血塗られた建国史',
  story: [
    '1222年、野心家ケン・アロクは、権力者トゥングル・アムトゥンの妻ケン・デデスに執着。名工ムプ・ガンドリンに短剣（クリス）を5ヶ月で作らせた。',
    '完成を急かされた鍛冶師は呪いをかけた——「この短剣は貴様と7人の王を殺すだろう」',
    'ケン・アロクは短剣でトゥングル・アムトゥンを暗殺し、シンゴサリ王朝を建国。しかし呪い通り、彼自身も1227年に同じ短剣で殺された。',
    '呪いの犠牲者7人: ムプ・ガンドリン → トゥングル・アムトゥン → ケボ・イジョ → ケン・アロク → キ・プンガラサン → アヌサパティ → トジャヤ',
    '最後の王ケルタナガラ（1268-1292）の暗殺後、娘婿ラデン・ウィジャヤがマジャパヒト帝国（1293年）を建国した。',
  ],
}

export const temples = [
  {
    id: 'singosari',
    name: 'チャンディ・シンゴサリ',
    subtitle: '13世紀・ケルタナガラ王の葬祭殿',
    period: '13世紀',
    fee: '寄付制（Rp 5,000〜）',
    hours: '08:00-16:00',
    distance: '北10km（車20-30分）',
    gps: '-7.88778, 112.66389',
    address: 'Jl. Kertanegara, Candirenggo, Singosari',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Candi_Singosari.jpg/640px-Candi_Singosari.jpg',
    highlights: [
      '未完成の葬祭殿 — シヴァ神と仏教の融合様式',
      '3.7mの守護神ドヴァラパラ像（本殿から西200mに2体）',
      '下層はシヴァ様式、上層は仏教様式',
      '1930年代にオランダが部分修復',
    ],
    tips: 'ドヴァラパラ像は本殿から西に200m。見落としがち',
  },
  {
    id: 'kidal',
    name: 'チャンディ・キダル',
    subtitle: '1248年・アヌサパティ王の墓 / ガルーダ浮彫',
    period: '1248年',
    fee: '無料',
    hours: '07:00-17:00',
    distance: '東20km（車40-50分）',
    gps: '-8.0286, 112.7700',
    address: 'Rejokidal Village, Tumpang District',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Candi_Kidal.jpg/640px-Candi_Kidal.jpg',
    highlights: [
      'ガルーダヤ浮彫3面 — インドネシア国章ガルーダの原型',
      '南面: 蛇を持ち上げるガルーダ / 東面: 不死の霊薬を運ぶ / 北面: 母を解放',
      '反時計回りに読む（プラダクシナ）',
      '四隅にライオン像',
    ],
    tips: '浮彫は反時計回りに読む。南→東→北の順',
  },
  {
    id: 'jago',
    name: 'チャンディ・ジャゴ',
    subtitle: '1268-1280年・ワヤン風浮彫',
    period: '1268-1280年',
    fee: '無料',
    hours: '07:00-17:00',
    distance: '東20km（車40-50分）',
    gps: '-8.00611, 112.76361',
    address: 'Jl. Wisnuwardhana, Ronggowuni, Tumpang',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Candi_Jago_2.jpg/640px-Candi_Jago_2.jpg',
    highlights: [
      'ワヤン（影絵芝居）風の独特な浮彫',
      '5つの物語: クンジャラカルナ、アルジュナヴィヴァーハ、クリシュナヤナ等',
      '基壇 23m × 14m',
    ],
    tips: null,
    warning: '2025-2027年修復工事中。足場が設置されている可能性あり',
  },
  {
    id: 'badut',
    name: 'チャンディ・バドゥッ',
    subtitle: '760年・東ジャワ最古の寺院',
    period: '760年',
    fee: '無料',
    hours: '08:00-15:00',
    distance: '西6km（車15分）',
    gps: '-7.9578, 112.5985',
    address: 'Jl. Candi 5D, Karangwidoro, Dau',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Candi_Badut.jpg/640px-Candi_Badut.jpg',
    highlights: [
      '東ジャワ最古 — マランの「誕生日」はこの寺院に基づく',
      '1921年にオランダ人モーリーン・ブレッヒャーが発見',
      '1925-1926年に修復',
      '装飾のない2mの台座が特徴',
    ],
    tips: 'Grab約Rp 10,000。アンコットATルートでもアクセス可',
  },
  {
    id: 'sumberawan',
    name: 'スンブラワン仏塔',
    subtitle: '東ジャワ唯一の仏教ストゥーパ',
    period: '時代不詳',
    fee: 'Rp 5,000',
    hours: '08:00-17:00',
    distance: '北15km',
    gps: '-7.850, 112.660',
    address: 'Desa Toyomarto, Kec. Singosari',
    image: null,
    highlights: [
      '東ジャワで唯一の仏塔',
      '標高650mの松と竹の森の中',
      '入口から500-700m歩く',
      '日本人ブロガーが「初めての日本人訪問者かも」と記録',
    ],
    tips: 'シンゴサリ寺院と組み合わせて半日コースに最適',
  },
]

export const templeRoutes = [
  {
    name: '半日シンゴサリ・コース（午前）',
    duration: '約4時間',
    temples: 'シンゴサリ → スンブラワン',
    transport: 'バイク推奨',
    distance: '約25km',
  },
  {
    name: '半日トゥンパン・コース（午後）',
    duration: '約3時間',
    temples: 'ジャゴ → キダル',
    transport: 'バイク推奨',
    distance: '約25km',
  },
  {
    name: '1日完全寺院コース',
    duration: '約8時間',
    temples: 'バドゥッ → シンゴサリ → スンブラワン → 昼食 → ジャゴ → キダル',
    transport: 'バイク最適（Grab×4は高額）',
    distance: '60-70km',
  },
]

// ===== NATURE =====

export const waterfalls = [
  {
    id: 'coban-rondo',
    name: 'コバン・ロンド滝',
    subtitle: '84m・車椅子アクセス可',
    height: '84m',
    fee: 'Rp 35,000（平日）/ Rp 40,000（週末）',
    hours: '07:00-17:00',
    distance: '西32km（車1時間）',
    gps: '-7.8820, 112.4550',
    address: 'Jl. Coban Rondo No.30, Pandesari, Pujon',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Air_Terjun_Coban_Rondo.jpg/640px-Air_Terjun_Coban_Rondo.jpg',
    highlights: [
      '標高1,135m — 涼しい高原の滝',
      '車椅子対応の100m遊歩道',
      'アクティビティ: ATV・アーチェリー・フライングフォックス',
      '迷路（壁高2m、2週間ごとにルート変更）',
    ],
    warning: '野生のサルに注意。食べ物・サングラスを奪われる',
    parking: 'バイク Rp 4,000 / 車 Rp 10,000',
  },
  {
    id: 'tumpak-sewu',
    name: 'トゥンパックスウ滝',
    subtitle: '120m・「インドネシアのナイアガラ」',
    height: '120m',
    fee: '外国人 Rp 70,000〜150,000',
    hours: '07:00-15:00',
    distance: '南70km（車2.5-3時間）',
    gps: '-8.2300, 112.9200',
    address: 'Lumajang/Malang県境',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Tumpak_Sewu_Waterfall.jpg/640px-Tumpak_Sewu_Waterfall.jpg',
    highlights: [
      '半円形に流れ落ちる圧巻の景観',
      '展望台 + 滝壺への下降（約45分）',
      'ゴア・テテス洞窟（滝の裏側）',
    ],
    warning: '下降路は急勾配で滑りやすい。ガイド推奨（Rp 100,000-200,000）。防水バッグ必須',
    parking: 'バイク Rp 10,000 / 車 Rp 15,000',
  },
  {
    id: 'coban-pelangi',
    name: 'コバン・プランギ（虹の滝）',
    subtitle: '10:00-14:00に虹が出現',
    height: '不明',
    fee: 'Rp 10,000（平日）/ Rp 15,000（週末）',
    hours: '07:00-17:00',
    distance: '東30km',
    gps: '-7.9800, 112.8300',
    address: 'Gubugklakah, Poncokusumo',
    image: null,
    highlights: [
      '10:00-14:00に虹が出やすい',
      '滝壺で泳げる天然プール',
      '片道1.5kmのトレッキング',
    ],
    warning: '公共交通なし。バイクまたはチャーター車で',
    parking: null,
  },
]

export const bromoInfo = {
  name: 'ブロモ山',
  elevation: '2,329m（火口縁）',
  viewpoint: 'ペナンジャカン展望台 2,770m',
  fee: '外国人 Rp 220,000（平日）/ Rp 320,000（週末）',
  booking: 'bookingbromo.bromotenggersemeru.org（オンライン予約必須）',
  distance: 'マランから約53km（車2.5-3時間）',
  temperature: '夜明け 0-5℃',
  steps: '火口縁まで253段',
  horseRide: 'Rp 100,000-150,000',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Mt._Bromo_sunrise.jpg/640px-Mt._Bromo_sunrise.jpg',
  tours: [
    {
      type: '共有ジープツアー（マラン発）',
      price: 'Rp 350,000-500,000/人',
      note: '01:00出発 → 日の出 → 火口 → 帰着09:00-10:00',
      recommended: true,
    },
    {
      type: 'プライベートジープ',
      price: 'Rp 800,000-1,200,000/車',
      note: '4人まで乗車可。時間の融通が利く',
      recommended: false,
    },
  ],
  tips: [
    '入場料は現金不可 — QRIS決済のみ',
    '防寒着必須（フリース+ダウン+手袋+ニット帽）。夜明けは0-5℃',
    '砂の海（Sea of Sand）を歩くのでスニーカー以上の靴が必要',
    '馬に乗る場合は行きだけにする（帰りは歩いた方が早い）',
    'オンライン予約が必須。当日購入不可',
    '乾季（6-10月）は雲海確率が高い',
  ],
}

export const batuHighland = {
  name: 'バトゥ高原',
  elevation: '800-1,100m',
  distance: 'マランから北西20km（車30-45分）',
  spots: [
    {
      name: 'りんご狩り',
      fee: 'Rp 20,000-85,000',
      detail: 'マナラギ（甘い）とアンナ（酸味）の2品種。日本と同じ袋掛け技法',
      farms: 'Agro Rakyat / Makmur Abadi / Kusuma Argowisata',
    },
    {
      name: 'ミュージアム・アンクット（交通博物館）',
      fee: 'Rp 100,000（平日）/ Rp 120,000（週末）',
      detail: '3.8ha、450台以上の車両。ハリウッド・ヨーロッパ・ギャングスタータウン等のゾーン',
      hours: '08:30-16:30',
    },
    {
      name: 'ジャティムパーク1',
      fee: '〜Rp 100,000（平日）',
      detail: '60以上の乗り物、5つのジェットコースター。トペン王国（2,000枚の仮面）',
      hours: '08:30-16:30',
    },
    {
      name: 'ジャティムパーク2',
      fee: 'Rp 125,000-170,000',
      detail: '22ha、300種以上の動物。ムセウム・サトワ（1,000種以上の標本）',
      hours: '09:30-17:30',
    },
    {
      name: 'セレクタ公園',
      fee: 'Rp 48,000-50,000',
      detail: '1928年オランダ人創設。花園・プール・遊園地。標高1,100m',
      hours: '06:00-17:00',
    },
  ],
}

// ===== COLONIAL / CITY WALK =====

export const tokoOenInfo = {
  name: 'トコ・オエン',
  year: '1930年（マラン支店）',
  origin: '1922年にジョグジャカルタでLiem Gien Nioが創業',
  hours: '08:00-21:30',
  gps: '-7.9778, 112.6325',
  phone: '(0341) 364 052',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Toko_Oen.jpg/640px-Toko_Oen.jpg',
  highlights: [
    'アールデコの内装が完全に残る',
    '現存するのはマランとスマラン店のみ',
    'アイスクリーム: Rp 15,000〜45,000（名物トゥッティ・フルッティ）',
    'ビスティック・リダ（牛タンステーキ）: Rp 65,000-85,000',
    'ナシゴレン: Rp 45,000-60,000',
  ],
}

export const colonialSpots = [
  {
    id: 'ijen-boulevard',
    name: 'イジェン大通り',
    detail: 'オランダ植民地時代の高級住宅街。並木道の両側にコロニアル建築',
    extra: '日曜カーフリーデー 05:00-09:30',
    image: null,
  },
  {
    id: 'kayutangan',
    name: 'カユタンガン・ヘリテージ',
    detail: '約60棟のアールデコ住宅群。一部は内部も見学可能',
    extra: 'Rp 5,000 / 07:00-18:30 / 駅から1km',
    image: null,
  },
  {
    id: 'alun-alun',
    name: 'アルンアルン・トゥグ',
    detail: '1920年トーマス・カルステン設計の中央広場。マラン独立記念碑（1946年建立）',
    extra: '記念碑の寸法に独立記念日17-8-45が暗号化されている',
    image: null,
  },
  {
    id: 'balai-kota',
    name: 'バライ・コタ（市庁舎）',
    detail: '1927年建築。ジャワのモスク風階段屋根。設計はスマランのHFホルン',
    extra: '内部は通常非公開',
    image: null,
  },
  {
    id: 'masjid-agung',
    name: 'マスジッド・アグン・ジャミ',
    detail: '1890-1903年建築。ジャワ風タジュグ屋根とアラブ式ドームの融合。チーク材の柱24本',
    extra: '服装規定あり（長袖長ズボン、女性はヒジャブ — 入口で借りられる）',
    image: null,
  },
]

export const jodipanInfo = {
  name: 'ジョディパン虹の村',
  year: '2016年',
  fee: 'Rp 3,000-10,000',
  story: 'ムハマディヤ大学の学生8人が90棟のスラム家屋をペイント。PT Indana Paint社がCSRでRp 2億を提供。チケット収入の80%は住民に還元',
  adjacent: '隣接: カンプン・ビル（青い村）、カンプン・トリディ（3Dアート壁画）',
  gps: '-7.9830, 112.6370',
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Kampung_Warna-Warni_Jodipan_2.jpg/640px-Kampung_Warna-Warni_Jodipan_2.jpg',
}

// ===== FOOD =====

export const localDishes = [
  {
    id: 'bakso',
    name: 'バクソ・マラン',
    highlight: true,
    desc: 'マラン名物の肉団子スープ。バクソ・ハルス（滑らか）、バクソ・ウラッ（筋入り）、バクソ・テルール（うずら卵入り）、シオマイ、パンシット・ゴレン等を組み合わせるプラスマナン（ビュッフェ）式が特徴',
    price: 'Rp 10,000〜34,000',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Bakso_Malang.jpg/640px-Bakso_Malang.jpg',
    restaurants: [
      { name: 'Bakso President（1970年代〜）', address: 'Jl. Sunandar Priyo Sudarmo', hours: '08:00-21:30', note: '線路沿いの名店。Campur Spesial Rp 34,000' },
      { name: 'Bakso Kota Cak Man（1980年〜）', address: 'Jl. Letjend S. Parman No. 56A', hours: '10:30-20:00', note: 'プラスマナン方式の元祖' },
      { name: 'Bakso Bakar Pahlawan Trip', address: 'Jl. Pahlawan Trip No. 3A', hours: '火-日 09:00-22:00（月休）', note: '焼きバクソ Rp 10,000-17,000/個' },
    ],
  },
  {
    id: 'rawon',
    name: 'ラウォン（黒い牛肉スープ）',
    highlight: false,
    desc: 'クルワック（パンギウム）の実を使った真っ黒なスープ。ナッツのような深みにレモングラスとガランガルが香る。もやし・サンバル・塩卵を添えて',
    price: 'Rp 14,000〜40,000',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Rawon_Daging.jpg/640px-Rawon_Daging.jpg',
    restaurants: [
      { name: 'Rawon Nguling（1982年〜）', address: 'Jl. Zainul Arifin No. 62', hours: '07:00-16:00', note: 'ラウォン・デンクル Rp 35,000。TasteAtlas掲載' },
      { name: 'Rawon Brintik（1942年〜）', address: 'Jl. KH Ahmad Dahlan No. 39', hours: '05:00-16:00', note: '最古。3種の肉から選択' },
      { name: 'Rawon Rampal（1957年〜）', address: 'Jl. Panglima Sudirman No. 71A', hours: '07:00-14:00', note: '今も薪で調理' },
    ],
  },
  {
    id: 'cwie-mie',
    name: 'チュウィー・ミー',
    highlight: false,
    desc: '福建系華人移民由来の卵麺。ケチャップマニス・にんにく油・チリソースで和え、鶏ひき肉・ネギ・揚げエシャロットをトッピング。パンシットスープ付き',
    price: 'Rp 12,000〜25,000',
    image: null,
    restaurants: [
      { name: 'Hot Cui Mie', address: 'Jl. Kawi No. 20, Kauman', hours: '昼〜21:30', note: 'Rp 15,000' },
      { name: 'Cwie Mie Kahuripan', address: 'Jl. Brigjend. Katamso No. 21', hours: '営業中', note: 'Rp 15,000-25,000' },
      { name: 'Mie Tan', address: 'Jl. JA Suprapto II No. 34', hours: '夕方〜21:00', note: 'Rp 12,000' },
    ],
  },
  {
    id: 'nasi-pecel',
    name: 'ナシ・ペチェル',
    highlight: false,
    desc: 'バナナの葉に盛った白飯に茹で野菜（ほうれん草・もやし・インゲン・キャベツ）とピーナッツソース。マラン風はクンチュル（ハーブ）とコブミカンの葉が特徴',
    price: 'Rp 10,000〜20,000',
    image: null,
    restaurants: [
      { name: 'Pecel Kawi Hj. Musilah（1975年〜）', address: 'Jl. Kawi Atas Kios No. 43B', hours: '平日06:30-18:00 / 週末05:00-18:00', note: '辛さ調整可。Rp 10,000-20,000' },
    ],
  },
  {
    id: 'rujak-cingur',
    name: 'ルジャック・チンクル',
    highlight: false,
    desc: '牛の鼻（チンクル）+ 豆腐 + テンペ + 果物 + ロントンを、ペティス・ウダン（発酵海老ペースト）と黒ピーナッツソースで和えた独特の一品',
    price: 'Rp 15,000〜30,000',
    image: null,
    restaurants: [
      { name: 'Rujak Cingur Mentawai（1969年〜）', address: 'Jl. Mentawai No. 56', hours: '営業中', note: '' },
      { name: 'Rujak Cingur Pojok（1977年〜）', address: 'Jl. Sumba', hours: '09:00-15:00', note: '' },
    ],
  },
  {
    id: 'tahu-telur',
    name: 'タフ・テルール（豆腐卵）',
    highlight: false,
    desc: '揚げ豆腐のオムレツにペティスまたはピーナッツソースをかける。学生フード。ペティス派とカチャン（ピーナッツ）派で論争あり',
    price: 'Rp 6,000〜15,000',
    image: null,
    restaurants: [
      { name: 'Pak Suroto（1979年〜）', address: 'Jl. Terusan Ijen No. 857', hours: '営業中', note: 'ペティス派の代表格' },
      { name: 'Cak Srupin（1988年〜）', address: 'Jl. Merdeka Timur（アルンアルン向かい）', hours: '営業中', note: 'ナシ+タフテルール Rp 12,000' },
    ],
  },
  {
    id: 'orem-orem',
    name: 'オレムオレム',
    highlight: false,
    desc: 'スライスしたテンペ・鶏肉・ロントンをターメリック入りココナッツミルクで煮込んだマラン発祥の料理。「おふくろの味」',
    price: 'Rp 8,000〜15,000',
    image: null,
    restaurants: [
      { name: 'Orem-orem Arema（1995年〜）', address: 'Jl. Irian Jaya No. 1', hours: '09:00-16:00', note: '' },
    ],
  },
]

export const streetFoodAreas = [
  { name: 'パサール・ブサール・ナイトマーケット', location: 'Jl. Kyai Tamin No. 15-49', hours: '18:00〜深夜', note: '土日がベスト。現金のみ' },
  { name: 'スーハット通り（大学エリア）', location: 'Jl. Soekarno Hatta', hours: '一部24時間営業', note: 'Rawon Cak Wot（22:00-03:00）等の深夜屋台あり' },
  { name: 'アルンアルン周辺', location: 'Jl. Merdeka Timur', hours: '夕方〜', note: 'タフテルール Cak Srupinが有名' },
]

export const coffeeInfo = {
  intro: 'マランはジャワ産コーヒーの中心地のひとつ。スペシャルティコーヒーショップが市内に多数',
  shops: [
    { name: 'Java Dancer Coffee Roaster', address: 'Jl. Jakarta No. 59', rating: '4.5/5（2,425件）', detail: 'サイフォン・フレンチプレス・トゥブルック。パンケーキも絶品', budget: 'Rp 25,000-60,000' },
    { name: 'Kopi Calf', address: '市内', rating: '高評価', detail: 'ローカルで人気のサードウェーブ', budget: 'Rp 20,000-50,000' },
    { name: 'Lafayette', address: '市内', rating: '高評価', detail: 'ルーフトップカフェ', budget: 'Rp 25,000-60,000' },
  ],
  uniqueCafes: [
    { name: 'Meow Cat Cafe', detail: '猫カフェ' },
    { name: 'Pawvillion', detail: '犬カフェ' },
    { name: 'Dancok', detail: '森の中のアウトドアカフェ。ライブミュージック' },
  ],
}

export const souvenirs = [
  { name: 'テンペチップス（Keripik Tempe）', detail: 'カンプン・サナンに500軒の生産者。フレーバー多数: オリジナル・チーズ・BBQ・海老・海苔・ピザ等', price: 'Rp 5,000-6,000/袋', shop: 'Keripik Tempe Rohani（1988年〜）Jl. Sanan No. 125' },
  { name: 'りんご製品（バトゥ産）', detail: 'サリ・アペル（ジュース）330ml / チップス / ドドル / 酢', price: 'Rp 8,000〜', shop: 'Brawijaya Istana（バトゥ市最大）' },
  { name: 'ピア・チャップ・マンコック', detail: '中身入りパイ。多数のフレーバー', price: '各種', shop: '市内4店舗' },
  { name: 'ラピス・トゥグ・マラン', detail: 'レイヤーケーキ4種（チョコパンダン・オリジナル・ブラウニー等）', price: '各種', shop: '市内' },
]

// ===== ACCOMMODATION =====

export const accommodations = {
  budget: [
    { name: 'ホステル（ドミトリー）', price: 'Rp 60,000-80,000', features: 'WiFi、共用キッチン、ツアー手配可' },
    { name: 'Splendid Inn', price: 'Rp 150,000〜', features: 'コロニアル建築の元富豪邸。中庭朝食' },
    { name: 'Ibis Styles Malang', price: 'Rp 250,000〜', features: '便利な立地。リーズナブル' },
  ],
  luxury: [
    {
      name: 'Hotel Tugu Malang',
      price: 'Rp 1,500,000〜3,000,000',
      features: 'マラン唯一の5つ星。44室、8カテゴリー。「生きた博物館」',
      highlights: [
        '全室異なるデザイン',
        '16:00に無料インドネシアン・ハイティー',
        'アプサラ・スパ（1960年代ビューティーサロン風）',
        'トペン・マランガン仮面舞踊（毎月15日公演）',
        '楽天トラベルで予約可',
      ],
    },
  ],
}

// ===== TRANSPORT =====

export const transportToCity = {
  fromYogya: {
    name: 'ジョグジャカルタ → マラン（鉄道）',
    trains: [
      { name: 'マリオボロ急行', duration: '6時間45分', economy: 'Rp 260,000', executive: 'Rp 380,000' },
      { name: 'ガジャヤナ号', duration: '7時間20分', economy: '—', executive: 'Rp 380,000〜' },
      { name: 'マラバル号', duration: '7時間26分', economy: 'Rp 260,000〜', executive: '—' },
    ],
    booking: 'KAIアプリ（外国人はOTP問題あり → Traveloka/tiket.comを推奨）またはIndomaret/Alfamartのレジで購入',
  },
  fromSurabaya: {
    name: 'スラバヤ → マラン（鉄道）',
    train: { name: 'アルジュノ急行', duration: '1時間50分', fare: 'Rp 35,000-60,000' },
  },
}

export const localTransport = [
  { name: 'Grab / GoJek', detail: '市内移動の基本。バイクタクシーなら格安', fare: 'Rp 5,000-20,000' },
  { name: 'アンコット（Angkot）', detail: '市内ミニバス。ルート多数', fare: 'Rp 3,500-5,000' },
  { name: 'バイクレンタル', detail: '寺院巡りに最適。駅近くに複数店舗', fare: 'Rp 60,000-100,000/日' },
]

// ===== MOTORBIKE RENTAL =====

export const bikeRentalShops = [
  {
    id: 'omah',
    name: 'Omah Motorent',
    recommended: true,
    address: 'Jl. Trunojoyo No.80（駅から100m）',
    hours: '07:00-19:00',
    whatsapp: '0822 3328 7000',
    beat: 'Rp 80,000（国内）/ 〜Rp 100,000（外国人）',
    deposit: 'パスポート原本',
    includes: 'SNIヘルメット、STNK',
    note: 'Google 2,000件以上の高評価。車両3年以内。空港ドロップオフ可',
  },
  {
    id: 'sunday',
    name: 'Sunday Motorent',
    recommended: false,
    address: 'Jl. Bukit Tanggul Blok S1 No.48',
    hours: '営業時間不明',
    whatsapp: '0852 8877 4000',
    beat: 'Rp 70,000',
    deposit: 'ID + パスポート/保険/クレジットカード',
    includes: 'ヘルメット2個、レインコート、無料デリバリー',
    note: '60台以上。駅/空港/ホテル/大学へ無料配達',
  },
  {
    id: 'rent-a-motor',
    name: 'Rent-a-Motor',
    recommended: false,
    address: '市内',
    hours: '07:30-17:00',
    whatsapp: '+62 85604909049',
    beat: 'Rp 59,500（最安）',
    deposit: 'Rp 800,000',
    includes: 'ヘルメット2個、レインコート、24時間サポート',
    note: '最安値だがデポジットが高額',
  },
  {
    id: 'chibi',
    name: 'Chibi Rental Motor',
    recommended: false,
    address: 'Jl. Kertanegara No.8B',
    hours: '06:00-20:00',
    whatsapp: '+62 81331009293',
    beat: 'Rp 75,000',
    deposit: '不明',
    includes: '基本装備',
    note: '早朝6時オープン。NMAX Rp 125,000',
  },
  {
    id: 'erc',
    name: 'ERC Trans',
    recommended: false,
    address: 'Jl. Untung Suropati Selatan No.6（駅東100m）',
    hours: '07:00-23:00',
    whatsapp: '081233930143',
    beat: 'Rp 70,000',
    deposit: 'Rp 50,000/日/台',
    includes: 'ヘルメット2個、レインジャケット2着',
    note: '夜23時まで営業。正規営業許可あり',
  },
  {
    id: 'moto',
    name: 'MOTO East Java',
    recommended: false,
    address: 'Jl. Simpang Sulfat Utara 63',
    hours: '月-金 08:00-22:00 / 土日 07:00-22:00',
    whatsapp: '+62 8123399902',
    beat: '—（ダートバイク専門）',
    deposit: '不明',
    includes: 'CRF 150: Rp 280,000/24h。フル装備 Rp 50,000',
    note: 'ブロモをバイクで走る唯一の選択肢。ガイド付きオールインクルーシブ Rp 500,000/人（5名以上）',
  },
]

export const bikeRoutes = [
  { name: '市内ライド', distance: '5-15km', difficulty: '★', time: '—', note: '初心者OK' },
  { name: 'マラン → シンゴサリ寺院', distance: '12km', difficulty: '★', time: '20-30分', note: '良い道路' },
  { name: '寺院3箇所巡回', distance: '60-70km', difficulty: '★★', time: '3-4時間', note: 'バイクが最適解' },
  { name: 'マラン → バトゥ', distance: '17-20km', difficulty: '★', time: '30-45分', note: '良い道路。初ライドに最適' },
  { name: 'マラン → コバン・ロンド', distance: '30km', difficulty: '★★', time: '45-60分', note: '山道あり。Vario 125以上推奨' },
  { name: 'マラン → トゥンパックスウ', distance: '70km', difficulty: '★★', time: '2.5-3時間', note: 'Google Mapsのショートカットは罠（悪路）' },
  { name: 'マラン → ブロモ', distance: '50-70km', difficulty: '★★★★★', time: '2.5-3時間', note: 'スクーターでは絶対に行かないこと' },
]

export const bikeLegalRisks = [
  { risk: 'IDP（国際運転免許証）', detail: '日本はジュネーブ条約、インドネシアはウィーン条約 — 厳密には相互承認外。実務上は通用するが保証なし。JAFで取得。原付免許（50cc）は不可、普通二輪以上が必要' },
  { risk: '警察の検問（ラジア）', detail: '定期的に実施。STNK + 国内免許 + IDPの3点を提示。書類不備1件につきRp 300,000-500,000の罰金' },
  { risk: '保険', detail: 'レンタル店は保険を提供しない。旅行保険もIDP無しではバイク事故の補償を拒否する可能性が高い。LUMA保険はバイク事故をカバー' },
  { risk: '外国人医療費', detail: '現地料金の150-500%。RSUD Dr. Saiful Anwar（Class A）: Jl. Jaksa Agung Suprapto No.2, Tel: (0341) 362101' },
]

export const bikeChecklist = [
  'IDPに二輪カテゴリーがあるか確認（原付50ccは不可）',
  '旅行保険がバイク事故を補償するか確認',
  'WhatsApp番号をレンタル店に保存',
  '緊急電話番号を保存（112 / 118-119 / 110）',
  '病院の電話番号を保存（RSUD: 0341-362101）',
  'パスポート・IDP・免許証を携帯',
  'バイクの状態を確認（ブレーキ・ライト・ミラー・タイヤ）',
  '既存の傷を写真撮影',
  '含まれるもの確認（ヘルメット・レインコート・STNK）',
  '故障時の連絡先を確認',
  '出発前に燃料を満タンに',
  'Google Mapsのオフラインマップをダウンロード',
]

export const bromoBikeWarning = {
  title: 'ブロモ山にスクーターで行ってはいけない理由',
  reasons: [
    '砂の海（Sea of Sand）約5kmは自動スクーターでは走行不可能',
    '急な下り坂でブレーキが効かなくなる危険性',
    '暗闘 + 砂 + ジープの組み合わせが致命的',
    '国立公園・交通局・警察がスクーター禁止の看板を設置済み',
  ],
  alternative: 'MOTO East Java（Honda CRF 150）でガイド付きツアー。Rp 500,000/人（5名以上）',
}

// ===== SAFETY =====

export const safetyAlerts = [
  { spot: '滝（全般）', warning: '雨季は水量急増し危険。足場は苔で滑りやすい。トゥンパックスウの下降路は特に要注意。防水バッグ必須' },
  { spot: 'ブロモ山', warning: '活火山。事前オンライン予約必須。夜明けは0-5℃。火口縁に柵なし。入場料はQRIS決済のみ（現金不可）' },
  { spot: 'バイク', warning: 'インドネシアは東南アジアで最も交通事故死亡率が高い国のひとつ。IDP問題・保険問題に要注意。ブロモにスクーターで行かないこと' },
  { spot: '野生のサル', warning: 'コバン・ロンド滝周辺に多数。食べ物・サングラス・スマホを奪われる。手に持たない・見せない' },
  { spot: '詐欺・ぼったくり', warning: 'トゥンパックスウの入場料は外国人Rp 70,000-150,000。Rp 100,000以上請求されたら確認を' },
]

export const emergencyContacts = [
  { name: '総合緊急（112）', number: '112' },
  { name: '警察', number: '110' },
  { name: '救急車', number: '118 / 119' },
  { name: '消防', number: '113' },
  { name: 'RSUD Dr. Saiful Anwar（メイン病院）', number: '(0341) 362101', address: 'Jl. Jaksa Agung Suprapto No.2' },
  { name: 'RS Lavalette', number: '—', address: 'Jl. WR Supratman No.10' },
]
