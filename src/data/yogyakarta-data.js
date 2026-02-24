// Yogyakarta Guide — structured data
// ジョグジャカルタ（Day 5-6）完全ガイド — 2つのUNESCO世界遺産と古都文化

export const sections = [
  { id: 'overview', label: '概要' },
  { id: 'borobudur', label: 'ボロブドゥール' },
  { id: 'prambanan', label: 'プランバナン' },
  { id: 'city', label: '市内観光' },
  { id: 'food', label: '食事' },
  { id: 'batik', label: 'バティック' },
  { id: 'stay', label: '宿泊' },
  { id: 'transport', label: '交通' },
  { id: 'safety', label: '安全' },
]

export const mapSpots = [
  { name: 'ボロブドゥール寺院', lat: -7.6079, lng: 110.2038 },
  { name: 'プランバナン寺院', lat: -7.7520, lng: 110.4914 },
  { name: 'クラトン（王宮）', lat: -7.8052, lng: 110.3639 },
  { name: 'タマンサリ（水の城）', lat: -7.8100, lng: 110.3590 },
  { name: 'マリオボロ通り', lat: -7.7893, lng: 110.3649 },
  { name: 'トゥグ駅', lat: -7.7891, lng: 110.3614 },
  { name: 'ジョンブラン洞窟', lat: -8.0468, lng: 110.6403 },
]

export const mapPois = [
  { name: 'ATM BCA マリオボロ', type: 'atm', lat: -7.7920, lng: 110.3650, detail: '24時間対応' },
  { name: 'ATM BNI マリオボロ', type: 'atm', lat: -7.7950, lng: 110.3648, detail: '24時間対応' },
  { name: 'Gudeg Yu Djum', type: 'restaurant', lat: -7.8010, lng: 110.3680, detail: 'グデグ名店 IDR 20,000〜' },
  { name: 'Gudeg Bu Tjitro 1925', type: 'restaurant', lat: -7.7850, lng: 110.3930, detail: '最古参グデグ IDR 25,000〜' },
  { name: 'Angkringan Lik Man', type: 'restaurant', lat: -7.7880, lng: 110.3645, detail: 'コピジョス発祥 IDR 5,000〜' },
  { name: 'ブリンハルジョ市場', type: 'restaurant', lat: -7.7980, lng: 110.3665, detail: 'バティック・土産・食品' },
  { name: 'Kimia Farma 薬局', type: 'convenience', lat: -7.7930, lng: 110.3655, detail: '薬局' },
]

export const budgetSummary = [
  { label: '宿泊（2泊）', value: 'IDR 200,000〜600,000', note: 'ホステル〜ミッドレンジ' },
  { label: 'ボロブドゥール', value: 'IDR 455,000〜1,000,000', note: '登頂〜サンライズ' },
  { label: 'プランバナン', value: 'IDR 362,500', note: '外国人料金' },
  { label: '食事（2日分）', value: 'IDR 100,000〜200,000', note: 'ローカル食堂・屋台' },
]

// ===== BOROBUDUR =====
export const borobudurInfo = {
  name: 'ボロブドゥール寺院',
  nameEn: 'Candi Borobudur',
  unesco: '1991年 世界文化遺産「ボロブドゥール寺院群」',
  built: '8世紀後半〜9世紀前半（770-820年頃）、シャイレンドラ朝',
  location: 'マゲラン県ボロブドゥール村（ジョグジャ市中心部から北西約40km）',
  hours: '敷地: 06:00-17:00 / 遺跡登頂: 08:30-17:30（最終入場15:30）',
  significance: '世界三大仏教遺跡の一つ（アンコール・ワット、バガン遺跡と並ぶ）。世界最大の仏教寺院。',
  description: 'ボロブドゥールは丘の上に建てられた巨大な立体曼荼羅で、仏教の宇宙観を建築で表現している。',
}

export const borobudurLayers = [
  { layer: '下層', name: 'カーマダートゥ（欲界）', structure: '基壇部分（隠れたレリーフ160面）', meaning: '欲望に支配された世界' },
  { layer: '中層', name: 'ルーパダートゥ（色界）', structure: '5層の方形テラス', meaning: '物質的な形はあるが欲望を克服しつつある世界' },
  { layer: '上層', name: 'アルーパダートゥ（無色界）', structure: '3層の円形テラス + 中央ストゥーパ', meaning: '形をも超越した悟りの世界' },
]

export const borobudurNumbers = [
  { item: 'プラットフォーム', value: '9層（方形6層 + 円形3層）' },
  { item: 'ストゥーパ（釣鐘型仏塔）', value: '72基（透かし彫り）+ 中央大ストゥーパ1基' },
  { item: '仏像', value: '元々504体（現存約300体）' },
  { item: 'レリーフパネル', value: '2,672面（総面積2,500m2以上）' },
]

export const borobudurTickets = [
  { type: 'Temple Ground（敷地のみ）', adult: 'IDR 412,500（約$25）', child: 'IDR 247,500', note: '寺院の周囲公園を散策。登頂不可' },
  { type: 'Temple Structure（登頂付き）', adult: 'IDR 455,000（約$28）', child: 'IDR 273,000', note: 'ガイド付きで遺跡内部に登れる（30分制・1時間150名限定）' },
  { type: 'サンライズチケット', adult: 'IDR 1,000,000（約$62）', child: 'IDR 650,000', note: '04:30から入場。マノハラホテル経由。1日100名限定' },
  { type: 'コンビチケット（+プランバナン）', adult: 'IDR 675,000（約$42）', child: '—', note: '両方を訪問する場合はお得' },
]

export const borobudurTimeSlots = {
  start: '08:30',
  end: '15:30',
  sessionsPerDay: 8,
  maxPerSession: 150,
  maxPerDay: 1200,
  bestSession: '08:30受付、09:00-10:00（最も涼しく空いている）',
  sandals: '登頂時には特別サンダル（ウパナット）が貸与される（靴での入場不可）',
}

export const borobudurSunrise = {
  meeting: '04:00-04:30（ホテルピックアップは03:30頃）',
  entry: '04:30からマノハラホテル専用ゲートより入場',
  duration: '04:30-06:30（約2時間）',
  price: 'IDR 1,000,000/人',
  capacity: '1日100名限定',
  includes: 'サンライズ入場料、ガイド、朝食（軽食・コーヒー/紅茶）',
  booking: '前日15:00までに予約必須。パスポートコピー要',
  tourPrices: [
    { people: '1名', price: 'US$90〜' },
    { people: '2名', price: 'US$62〜/人' },
    { people: '3名', price: 'US$53〜/人' },
    { people: '4名以上', price: 'US$49〜/人' },
  ],
}

export const punthukSetumbu = {
  name: 'ストゥンブの丘（Punthuk Setumbu）',
  location: 'ボロブドゥールから西に約5km、カランレジョ村',
  fee: '外国人 IDR 50,000 / ローカル IDR 15,000',
  experience: '駐車場から丘の上まで約20分の徒歩。霧の中からボロブドゥールが浮かび上がる絶景',
  merits: 'マノハラの1/20の価格。メラピ山・メルバブ山とボロブドゥールのコラボ撮影可能',
  demerits: '寺院そのものには行けない。雨季は滑りやすい',
  extra: '「チキンチャーチ」（鶏の形の教会）も見える',
}

export const borobudurPhotoRules = [
  '2025年以降、ボロブドゥール寺院内での個人撮影は全面禁止',
  'スマートフォン、カメラ、GoPro等すべてのデバイスが対象',
  'スタッフが常時監視しており、違反者は警告・退場の対象',
  '寺院の外（敷地内の公園部分）での撮影は可能',
  'ストゥンブの丘からの撮影には制限なし',
]

export const borobudurScams = [
  { type: '通貨すり替え', detail: '「20だけ」と言われてUSD20を要求される', counter: '値段は必ずIDRで確認。事前に値段を書いてもらう' },
  { type: 'バティック工房への強制立ち寄り', detail: 'ツアー車がバティック店・銀製品店に寄る', counter: 'コミッション稼ぎ。断固として断るか事前に「寄らない」と交渉' },
  { type: 'チケット種別の不明瞭さ', detail: 'Ground（敷地のみ）をStructure（登頂付き）と偽って売る', counter: '公式サイトで事前購入' },
  { type: '自称ガイド', detail: '入口付近で「無料で案内する」と声をかけ、最後に高額請求', counter: '公式ガイド以外は断る。Structureチケットにはガイド料含む' },
]

export const borobudurDress = [
  '肩と膝を覆う服装が推奨（寺院は宗教施設）',
  'ショートパンツの場合は入口でサロン（腰巻き布）を巻いてもらえる（無料）',
  '登頂時はウパナットサンダルに履き替え必須（靴・サンダルは預ける）',
  'サンライズ時は朝冷えるため長袖推奨',
]

export const borobudurAccess = [
  { method: 'DAMRI バス', from: 'マリオボロ（Bank Indonesia前）', price: 'IDR 35,000', duration: '約1時間20分', note: '05:30, 06:00, 11:00, 12:30発' },
  { method: 'DAMRI バス（空港発）', from: 'YIA空港', price: 'IDR 35,000', duration: '約1時間30分', note: '08:00〜18:00（2時間おき）' },
  { method: 'Grab/Gojek（配車）', from: 'ジョグジャ市内', price: 'IDR 150,000-200,000', duration: '約1-1.5時間', note: '帰りの配車が難しい場合あり' },
  { method: 'チャーター車', from: 'ジョグジャ市内', price: 'IDR 500,000-800,000/日', duration: '自由', note: 'ボロブドゥール+プランバナンの1日周遊に最適' },
  { method: 'ツアー', from: 'ジョグジャ市内', price: 'US$40-90/人', duration: '終日', note: 'サンライズ+ボロブドゥール+プランバナンパッケージ' },
]

// ===== PRAMBANAN =====
export const prambananInfo = {
  name: 'プランバナン寺院群',
  nameEn: 'Candi Prambanan / Candi Rara Jonggrang',
  unesco: '1991年 世界文化遺産「プランバナン寺院群」',
  built: '9世紀（850年頃）、サンジャヤ朝（古マタラム王国）',
  religion: 'ヒンドゥー教（ボロブドゥールの仏教と対をなす）',
  location: 'ジョグジャカルタ市中心部から東へ約17km',
  hours: '07:00-17:00（チケット窓口 06:30-17:00）',
  adultFee: 'IDR 362,500（US$25）',
  childFee: 'IDR 217,500（US$15）',
  templeCount: '240以上の寺院が点在する広大な遺跡群',
}

export const prambananMainTemples = [
  { name: 'シヴァ寺院（Candi Siwa）', height: '47m', deity: 'シヴァ', features: '最大・最高の主寺院。内部にシヴァ像、ドゥルガ像（「Rara Jonggrang」の伝説）、ガネーシャ像、アガスティア像' },
  { name: 'ブラフマー寺院（Candi Brahma）', height: '33m', deity: 'ブラフマー', features: '創造神。ラーマーヤナ叙事詩のレリーフ（後半）' },
  { name: 'ヴィシュヌ寺院（Candi Wisnu）', height: '33m', deity: 'ヴィシュヌ', features: '維持神。クリシュナの物語のレリーフ' },
]

export const prambananVahanas = [
  { name: 'ナンディ寺院', mainTemple: 'シヴァ', vehicle: '牡牛ナンディ' },
  { name: 'ハンサ寺院', mainTemple: 'ブラフマー', vehicle: '白鳥ハンサ' },
  { name: 'ガルーダ寺院', mainTemple: 'ヴィシュヌ', vehicle: '鷲ガルーダ' },
]

export const ramayanaBallet = {
  days: '火・木・土曜日（通年）、金曜日（不定期）',
  time: '19:30-21:30（約2時間）',
  venueDry: '屋外オープンシアター（プランバナン寺院がバックに見える絶景）（乾季 5-10月）',
  venueWet: '屋内トリムルティ劇場（規模は小さいが快適）（雨季 11-4月）',
  priceRange: 'IDR 150,000-450,000',
  booking: 'オンライン予約推奨（特に週末・休日は売り切れやすい）',
  note: 'プランバナン寺院の入場券とバレエチケットは別売り。日中に寺院を見学し、夜にバレエを見る場合は2枚必要',
  seats: [
    { class: 'VIP', price: 'IDR 450,000', features: '最前列。ステージに最も近い' },
    { class: 'Special', price: 'IDR 300,000', features: '中央付近。全体が見渡せる' },
    { class: 'Standard', price: 'IDR 150,000', features: '後方。コスパ最高' },
  ],
}

export const nearbyTemples = [
  {
    id: 'sewu',
    name: 'スウ寺院（Candi Sewu）',
    distance: 'プランバナンから北へ800m（徒歩15分）',
    fee: 'プランバナン入場券に含む',
    built: '8世紀（プランバナンより古い）',
    religion: '仏教',
    scale: '249の寺院からなる大複合体（名前は「千」の意味だが実際は249）',
    highlight: 'ヒンドゥーのプランバナンと仏教のスウが隣接する宗教共存の象徴',
  },
  {
    id: 'plaosan',
    name: 'プラオサン寺院（Candi Plaosan）',
    distance: 'プランバナンから北東へ約1.5km',
    fee: 'IDR 5,000',
    hours: '火-日 08:00-16:00',
    religion: '仏教とヒンドゥー教の融合',
    highlight: 'プラオサン・ロール（北）とプラオサン・キドゥル（南）の2つの複合体。Gojekで約IDR 20,000',
  },
]

// ===== CITY ATTRACTIONS =====
export const kratonInfo = {
  name: 'クラトン（王宮）',
  nameEn: 'Keraton Ngayogyakarta Hadiningrat',
  hours: '火-日 08:30-15:00（最終入場14:00）/ 金曜は11:00まで',
  closed: '月曜、王室の儀式がある日',
  fee: '外国人 IDR 15,000',
  payment: '現金のみ',
  highlights: [
    'バンサル・クマグンガン（大広間）: ジャワ建築の傑作。王室の儀式に使われる',
    '博物館部分: スルタンの歴代の衣装、ワヤン人形、武器、ガムラン楽器コレクション',
    '現役の宮廷: スルタン・ハメンクブウォノ10世が実際に居住・統治している',
    'アブディ・ダレム（宮廷使用人）: 伝統衣装を身にまとった宮廷使用人が今も勤務',
  ],
  performances: [
    { day: '火曜', content: 'ガムラン音楽', time: '09:00〜' },
    { day: '水曜', content: 'ワヤン・ゴレック（木偶人形劇）', time: '09:30〜' },
    { day: '木曜', content: 'ワヤン・クリット（影絵人形劇）', time: '09:30〜' },
    { day: '金曜', content: 'モチョパット（伝統詩の朗読）', time: '09:30〜' },
    { day: '土曜', content: 'ワヤン・オラン（人間による舞踊劇）', time: '09:30〜' },
    { day: '日曜', content: 'ジャワ伝統舞踊', time: '09:30〜' },
  ],
}

export const tamanSari = {
  name: 'タマンサリ（水の城）',
  nameEn: 'Taman Sari',
  hours: '09:00-15:00',
  fee: '外国人 IDR 25,000〜',
  distanceFromKraton: '徒歩約10分（南西方向）',
  highlights: [
    '王妃の沐浴場: 3つのプール。スルタンが2階のバルコニーから妃たちの入浴を眺めたという伝説',
    'スムル・グムリン（地下モスク）: 螺旋状の地下通路を抜けると現れる円形の礼拝堂。ボロブドゥールに似た構造でインスタ映えスポット',
    '地下トンネル: かつては王宮と南海をつなぐとされた地下通路',
    '周辺集落はバティック工房が密集するアート地区',
  ],
}

export const malioboroStreet = {
  name: 'マリオボロ通り',
  nameEn: 'Jl. Malioboro',
  description: 'トゥグ駅からクラトンまで南北に伸びる約2kmの大通り',
  hours: '24時間（店舗 09:00-22:00、屋台 夕方〜深夜）',
  highlights: [
    'バティック土産物ショッピング: バティックシャツ IDR 50,000〜、バティック布 IDR 35,000〜',
    'ブリンハルジョ市場: 1758年創業のジョグジャ最古の市場。1階が土産・バティック、2階が日用品・食品',
    'ストリートフード: 夕方から歩行者天国になりレセハン（地べた座り）で食事を楽しむ',
    'アンドン（馬車）乗車: IDR 50,000-100,000（要交渉）',
    '夜のネオンとストリートパフォーマー: 週末は特に賑わう',
  ],
}

export const prawirotaman = {
  name: 'プラウィロタマン地区',
  nameEn: 'Prawirotaman',
  description: '「外国人村」の異名を持つバックパッカー地区',
  features: [
    '安宿・カフェ・バー・アートギャラリーが密集。静かで歩きやすい',
    '欧米系バックパッカーが多い。日本人は少なめ',
    'ViaVia Guest House（ベルギー系のNGOカフェ兼宿）が有名',
    'クラトンの南、徒歩約15分',
  ],
}

export const kotagede = {
  name: 'コタグデ — 銀の里',
  nameEn: 'Kotagede',
  distance: 'ジョグジャ市中心部から南東へ約7km',
  fee: '博物館は無料（要予約）',
  highlights: [
    '銀細工工房の見学・購入',
    'マタラム王国初代首都の遺跡',
    '古いジャワ建築',
  ],
  prices: 'リング IDR 50,000〜、ピアス IDR 30,000〜、ネックレス IDR 100,000〜',
}

export const fortVredeburg = {
  name: 'フレデブルク要塞博物館',
  nameEn: 'Fort Vredeburg Museum',
  hours: '火-日 08:00-16:00',
  fee: '外国人 IDR 10,000-20,000',
  description: 'オランダ植民地時代の城塞を改装。インドネシア独立闘争のジオラマ展示',
  duration: '45-60分',
}

export const jomblangCave = {
  name: 'ジョンブラン洞窟',
  nameEn: 'Goa Jomblang',
  location: 'グヌンキドゥル県、ジョグジャ市内から南東へ約60km',
  hours: '08:00-14:00（09:30以降の到着は不可）',
  fee: 'IDR 500,000/人（ガイド・装備込み）',
  highlight: '垂直の洞窟口から射し込む太陽光の柱「天国の光」（Heaven\'s Light）。正午前後（10:00-12:00頃）がベスト',
  descent: '60mの垂直の穴をロープで降下（スタッフが確保、初心者OK）',
  process: [
    '07:00: ジョグジャ市内を出発（所要1.5時間）',
    '08:30: 到着、受付・ブリーフィング・装備（ヘルメット・ハーネス・長靴）',
    'ロープを使って60mの垂直の穴を降下',
    '暗闇の中を約250m歩いてグルブッグ洞窟へ',
    '光が射し込む時間帯に到着するよう調整',
    '再びロープで60m登る。全体で約3-4時間',
  ],
  tips: [
    '普通の体力があれば大丈夫。閉所恐怖症の人には不向き',
    '汚れてもいい服、長ズボン必須。長靴は貸し出し',
    'カメラ: 防水対策推奨。暗いためスマホでは撮影困難',
    '2025年現在は予約不要。07:00出発で早めに到着すればOK',
    'ベスト時期: 乾季（5-10月）。雨季は水位が上がり閉鎖されることあり',
  ],
  tourPrices: [
    { people: '1名', price: 'US$90' },
    { people: '2名', price: 'US$62/人' },
    { people: '3名', price: 'US$53/人' },
    { people: '4名以上', price: 'US$49/人' },
  ],
}

// ===== FOOD =====
export const gudegShops = [
  { name: 'Gudeg Bu Tjitro 1925', address: 'Jl. Janti No.330', features: '1925年創業の最古参。甘すぎず上品な味。2階にレセハン席あり、生ガムラン演奏付き。缶詰グデグも販売', hours: '06:00-21:00', price: 'IDR 25,000-40,000' },
  { name: 'Gudeg Yu Djum', address: 'Jl. Wijilan No.167', features: '1951年創業。ウィジラン通り（グデグ通り）の代表格。観光客に最も有名', hours: '06:00-22:00', price: 'IDR 20,000-35,000' },
  { name: 'Gudeg Sagan', address: 'サガン地区', features: '甘さ控えめ。外国人の口にも合う。ココナッツミルクの深みとスパイスのバランスが良い', hours: '〜23:00', price: 'IDR 20,000-30,000' },
  { name: 'Gudeg Pawon', address: 'Jl. Janturan（プラウィロタマン近く）', features: '薪火で炊く本格派。夜21:30-深夜0:00のみ営業。行列必至', hours: '21:30-00:00', price: 'IDR 25,000-35,000' },
  { name: 'Gudeg Bu Djuminten', address: 'Jl. Asem Gede No.14', features: '1926年創業。甘塩のバランスが絶妙。地元民に愛される', hours: '朝〜昼', price: 'IDR 20,000-30,000' },
]

export const sateKlathak = {
  name: 'サテ・クラタック',
  description: '普通のサテ（竹串）と違い、自転車のスポーク（鉄串）に厚切りの羊肉を刺して炭火焼き。味付けは塩のみ。肉の旨味がダイレクトに味わえる。',
  shops: [
    { name: 'Sate Klathak Pak Pong（本店）', address: 'Jl. Sultan Agung No.18, Pleret, Bantul', note: '最も有名。スープ（ブロス）付き', hours: '09:00-23:30' },
    { name: 'Sate Klathak Pak Pong 3', address: 'Jl. Imogiri Barat No.16, Sewon, Bantul', note: '市内からのアクセスが最も便利な支店', hours: '09:00-23:30' },
  ],
  warning: '本店はジョグジャ市内から南へ約15km（車30分）',
}

export const kopiJoss = {
  name: 'コピ・ジョス',
  description: 'ジョグジャ発祥の名物コーヒー。熱々のコーヒーに真っ赤に焼けた炭を「ジョス！」と音を立てて投入する。炭がカフェインと酸味を吸着し、マイルドな味わいに。',
  shop: 'アンクリンガン・リック・マン（Angkringan Lik Man）',
  location: 'トゥグ・ジョグジャ記念碑の近く、マリオボロ通り北端',
  hours: '夕方〜深夜',
  price: 'IDR 5,000-8,000',
}

export const otherFoods = [
  { name: 'ナシ・クチン（猫飯）', description: 'バナナの葉に一口サイズのご飯とおかずを包んだもの。アンクリンガンで数種類を食べ比べるのが定番', price: '1包 IDR 2,000-5,000' },
  { name: 'オセン・メルコン（爆竹炒め）', description: '牛肉を大量の赤唐辛子で激辛に炒めた料理。名前の通り爆発的な辛さ', shop: 'Oseng Mercon Bu Narti（Jl. KH Ahmad Dahlan）' },
  { name: 'ウェダン・ロンデ', description: '温かい生姜湯にもち米団子・ピーナッツを浮かべたデザート飲料。夜の冷える時に最適', shop: 'Wedang Ronde Mbah Payem（北広場周辺）', price: 'IDR 8,000-15,000' },
  { name: 'アヤム・ゴレン（ジャワ風フライドチキン）', description: 'スパイスで下味を付けてから揚げるため骨の中まで味が染みている', price: 'IDR 20,000-40,000' },
]

export const bakpiaComparison = [
  { brand: 'Bakpia Pathok 25', location: '王宮（クラトン）近く', features: '元祖ブランド。試食可能。緑豆が特に人気。フレーバーのバリエーションが豊富（パイナップル、チョコ、クンブなど）', price: '1箱（15個入）IDR 30,000-50,000' },
  { brand: 'Bakpia Pathok 75', location: 'Jl. Karel Sasuit Tubun No.75', features: '伝統的製法を維持。フルーツフレーバーも展開。ロゴは緑地に赤三角の75', price: '同程度' },
]

export const angkringanInfo = {
  description: '天秤棒で運ぶ移動式屋台（現在は固定も多い）。ナシ・クチン、ゴレンガン（揚げ物）、サテ・ウズラ卵、コピ・ジョスなどを提供。ゴザに座って食べる。',
  shops: [
    { name: 'Angkringan Lik Man', location: 'トゥグ・ジョグジャ近く', note: 'コピ・ジョス発祥の店。夕方〜深夜' },
    { name: 'Angkringan Kota Barat', location: 'UGM大学近く', note: '学生街の安くて美味い屋台群' },
    { name: 'マリオボロ通り沿い', location: 'マリオボロ通り', note: '夕方以降、通り沿いにずらりと並ぶ' },
  ],
  budget: 'ナシクチン2-3個 + 揚げ物 + コピジョスで合計 IDR 15,000-25,000（約150-250円）',
}

// ===== BATIK =====
export const batikTypes = [
  { type: 'Batik Tulis（手描きバティック）', method: '職人が蝋筆（チャンティン）で一つ一つ手描き。数日〜数週間かかる', price: 'IDR 200,000〜数百万' },
  { type: 'Batik Cap（スタンプバティック）', method: '銅製のスタンプで模様を押す。手描きより量産向き', price: 'IDR 50,000-200,000' },
  { type: 'Batik Print（プリントバティック）', method: '機械印刷。最も安価', price: 'IDR 35,000-100,000' },
]

export const batikAuthenticity = [
  '裏表: 本物の手描きバティックは裏にも模様が見える（染料が浸透している）',
  '触感: 蝋の残留でわずかにザラザラした手触り',
  'パターンの均一性: 手描きは一つ一つ微妙に異なる',
]

export const batikSpots = [
  { name: 'ブリンハルジョ市場（Pasar Beringharjo）', features: '1758年創業。1階がバティック・土産。最安値で買える。値切り必須（最初の提示価格の50-60%を目指す）', location: 'マリオボロ通り東側' },
  { name: 'Museum Batik Yogyakarta', features: '1,200点以上のバティックコレクション。バティック制作体験（3時間 IDR 40,000〜）。入場料 IDR 20,000（ガイド付き）', location: 'Jl. Dr. Sutomo No.13A' },
  { name: 'タマンサリ周辺のバティック工房', features: '観光客向けだが制作過程が見られる', location: 'タマンサリ南側' },
  { name: 'Batik Winotosastro', features: '高品質な手描きバティック専門店', location: 'Jl. Tirtodipuran No.54' },
]

// ===== ACCOMMODATION =====
export const accommodations = {
  malioboro: {
    area: 'マリオボロ地区（駅近・便利）',
    hotels: [
      { name: 'POP! Hotel Malioboro', type: 'ホテル', price: 'IDR 300,000-500,000', features: 'トゥグ駅から徒歩2分。清潔でコスパ最高。部屋は狭い' },
      { name: 'Hotel Neo Malioboro by ASTON', type: 'ホテル', price: 'IDR 400,000-700,000', features: 'マリオボロ通りから322m。朝食ビュッフェ付き' },
      { name: 'Jambuluwuk Malioboro Hotel', type: 'ホテル', price: 'IDR 500,000-800,000', features: 'マリオボロ、クラトン、ブリンハルジョ市場まで徒歩10分圏内' },
      { name: 'Hubs Hostel Yogyakarta', type: 'ホステル', price: 'IDR 100,000-150,000', features: 'バックパッカー向け。WiFi完備' },
    ],
  },
  prawirotaman: {
    area: 'プラウィロタマン地区（バックパッカー・カフェ街）',
    hotels: [
      { name: 'OtU Hostel by Ostic', type: 'ホステル', price: 'IDR 78,000〜', features: 'プール、共有キッチン、WiFi、AC、ボードゲーム。コスパ最強' },
      { name: 'Wonderloft Hostel Jogja', type: 'ホステル', price: 'IDR 105,000〜', features: '各種ルームタイプあり' },
      { name: 'Losmanos Hostel', type: 'ホステル', price: 'IDR 150,000〜', features: 'プール、WiFi、スパ、AC、朝食付き' },
      { name: 'ViaVia Guest House', type: 'ゲストハウス', price: 'IDR 160,000〜', features: 'ベルギー系NGO運営。旅人の情報交換に最適' },
      { name: 'Greenhost Boutique Hotel', type: 'ブティックホテル', price: 'IDR 400,000-700,000', features: '屋上バー、エコフレンドリー、おしゃれ' },
    ],
  },
  borobudur: {
    area: 'ボロブドゥール近郊（サンライズ狙い）',
    hotels: [
      { name: 'Manohara Borobudur', type: 'ホテル', price: 'IDR 800,000-1,500,000', features: '寺院敷地内唯一のホテル。サンライズチケット手配に最も便利', recommended: true },
      { name: 'Sarasvati Borobudur', type: 'ホテル', price: 'IDR 500,000〜', features: '寺院近く。清潔で快適' },
      { name: 'Efata Homestay', type: 'ホームステイ', price: 'IDR 150,000〜', features: '寺院まで徒歩5分。バジェット最適' },
      { name: 'Nabhan Homestay', type: 'ホームステイ', price: 'IDR 100,000〜', features: '最安価帯' },
      { name: 'Omah Garengpoeng', type: 'ゲストハウス', price: 'IDR 250,000〜', features: '伝統的なジャワ式ジョグロ家屋。庭園ビュー' },
    ],
  },
}

// ===== TRANSPORT =====
export const pangandaranToYogya = {
  description: 'パンガンダランからジョグジャカルタへは直通の交通手段がない。バンジャール駅まで移動し、列車に乗り換える。',
  route1: {
    name: 'パンガンダラン → バンジャール → ジョグジャカルタ（推奨）',
    legs: [
      { segment: 'パンガンダラン → バンジャール', method: 'バス（毎時運行）', price: 'IDR 30,000', duration: '約2.5時間' },
      { segment: 'バンジャール → ジョグジャカルタ', method: '列車（1日6本）', price: 'IDR 140,000-320,000', duration: '4-5時間' },
    ],
  },
  route2: {
    name: 'パンガンダラン → シダレジャ → ジョグジャカルタ（代替）',
    legs: [
      { segment: 'パンガンダラン → シダレジャ', method: 'プライベートミニバス', price: 'IDR 50,000-80,000', duration: '約2時間' },
      { segment: 'シダレジャ → ジョグジャカルタ', method: '列車', price: 'IDR 100,000-250,000', duration: '約3-4時間' },
    ],
  },
  booking: 'KAI公式サイト（kai.id）、tiket.com、traveloka.comで事前予約可能',
}

export const yogyaToMalang = {
  description: 'ジョグジャカルタ → マラン（鉄道）',
  recommended: 'Malioboro Express（10:50発、17:30着）がおすすめ。日中の移動で景色が楽しめる。所要約6時間40分。',
  trains: [
    { name: 'Malabar', class: 'エコノミー/エグゼクティブ', departure: '00:56', arrival: '06:30頃', price: 'IDR 260,000-380,000' },
    { name: 'Kertanegara', class: 'エコノミー', departure: '01:29', arrival: '07:00頃', price: 'IDR 260,000' },
    { name: 'Malioboro Express', class: 'エコノミー/エグゼクティブ', departure: '10:50', arrival: '17:30', price: 'IDR 260,000-380,000' },
    { name: 'Malabar（午後）', class: 'エコノミー/エグゼクティブ', departure: '16:35', arrival: '22:00頃', price: 'IDR 260,000-380,000' },
    { name: 'Gajayana', class: 'エグゼ/ラグジュアリー', departure: '21:10', arrival: '03:00頃', price: 'IDR 380,000-500,000' },
  ],
}

export const cityTransport = [
  { type: 'Trans Jogja バス', price: 'IDR 3,500（現金）/ IDR 2,700（電子マネー）', detail: '17コリドール。05:30-21:30運行。エアコン付き。プランバナン寺院近くにもバス停あり' },
  { type: 'Grab/Gojek（配車アプリ）', price: 'バイク IDR 5,000-20,000 / 車 IDR 15,000-50,000', detail: '最も便利。メーター制で安心' },
  { type: 'ベチャック（三輪人力車）', price: 'IDR 20,000-40,000', detail: '短距離向け。交渉制。事前に価格確認必須' },
  { type: 'アンドン（馬車）', price: 'IDR 50,000-100,000', detail: '観光用。マリオボロ周辺で乗れる' },
  { type: 'レンタルバイク', price: 'IDR 70,000-100,000/日', detail: '国際免許証推奨。交通は混沌としている' },
]

// ===== SAFETY =====
export const safetyAlerts = [
  {
    spot: 'ボロブドゥール寺院',
    warning: '2025年以降、寺院内での個人撮影が全面禁止。スマホ・カメラ・GoPro等すべて対象。違反者は警告・退場の対象。敷地内の公園での撮影は可能',
  },
  {
    spot: 'マリオボロ通り・プランバナン周辺',
    warning: 'スリ・ひったくりに注意。貴重品は前面に。バイクひったくりに注意。荷物は常に身体に接触させる',
  },
  {
    spot: 'ぼったくり',
    warning: 'ベチャック・アンドン・土産物店で頻発。乗車前に値段を決める。値切りは最初の提示価格の50-60%を目指す。通貨すり替え詐欺にも注意',
  },
  {
    spot: '交通事故',
    warning: 'バイクの交通量が非常に多い。信号・横断歩道はほぼない。道路を渡る時は手を挙げてゆっくり進む',
  },
  {
    spot: '地震・火山リスク',
    warning: '2006年M6.4地震（死者5,700名以上）の記憶が残る。メラピ火山（北30km）は世界で最も活発な火山の一つ。2010年の噴火では300名以上が死亡。避難経路を確認しておくこと',
  },
  {
    spot: '服装',
    warning: '人口の約90%がイスラム教徒。寺院では肩・膝を覆う服装を。ボロブドゥールではウパナットサンダル着用必須',
  },
]

// ===== ITINERARIES =====
export const modelItineraries = {
  planA: {
    name: 'プランA: ボロブドゥール・サンライズ + プランバナン（1日で2大遺産制覇）',
    note: 'チャーター車またはツアー参加が必須（公共交通では時間的に困難）',
    steps: [
      { time: '03:30', content: 'ジョグジャ市内のホテル出発', note: 'サンライズツアーのピックアップ' },
      { time: '04:30', content: 'ボロブドゥール到着、マノハラホテルから入場', note: 'サンライズチケット IDR 1,000,000' },
      { time: '05:00-06:00', content: '寺院最上段から日の出鑑賞', note: '' },
      { time: '06:00-06:30', content: '朝食（マノハラホテルにて）', note: '軽食・コーヒー付き' },
      { time: '08:30-10:00', content: 'ボロブドゥール遺跡登頂（朝一番のセッション）', note: '' },
      { time: '10:30', content: 'ボロブドゥール出発', note: 'プランバナンまで約1.5-2時間' },
      { time: '12:30', content: '昼食（途中のローカル食堂）', note: '' },
      { time: '14:00-16:30', content: 'プランバナン寺院群見学', note: 'メイン3寺院 + スウ寺院' },
      { time: '16:30-17:00', content: 'プランバナンで夕日鑑賞', note: '' },
      { time: '19:30', content: '（オプション）ラーマーヤナ・バレエ鑑賞', note: '火・木・土曜日のみ' },
    ],
    cost: 'チャーター車 IDR 500,000-800,000/日 + 各入場料。ツアー US$40-90/人',
  },
  planB: {
    name: 'プランB: ストゥンブの丘サンライズ + ボロブドゥール + 市内観光',
    note: 'マノハラのサンライズチケットが取れなかった場合の代替プラン',
    steps: [
      { time: '04:00', content: 'ホテル出発', note: '' },
      { time: '05:00', content: 'ストゥンブの丘で日の出鑑賞', note: 'IDR 50,000。霧の中のボロブドゥールの絶景' },
      { time: '06:30', content: 'ボロブドゥール近くで朝食', note: '' },
      { time: '08:30-10:00', content: 'ボロブドゥール遺跡登頂', note: 'Structure チケット IDR 455,000' },
      { time: '12:00', content: 'グデグ・ランチ（ウィジラン通り）', note: '' },
      { time: '13:30', content: 'クラトン（王宮）見学', note: 'IDR 15,000' },
      { time: '14:30', content: 'タマンサリ（水の城）', note: 'IDR 25,000。地下モスクは必見' },
      { time: '15:30', content: 'マリオボロ通り散策', note: 'バティック土産、ブリンハルジョ市場' },
      { time: '18:00', content: 'アンクリンガンで夕食', note: 'ナシクチン + コピジョス' },
    ],
  },
  planC: {
    name: 'プランC: Day 5（パンガンダランから到着日）の半日プラン',
    note: 'パンガンダランからの移動で半日は消えるので、午後〜夜の過ごし方',
    steps: [
      { time: '午前中', content: 'パンガンダラン → バンジャール駅へバス移動', note: 'IDR 30,000、2.5時間' },
      { time: '昼頃', content: 'バンジャール駅から列車出発', note: 'IDR 140,000-320,000' },
      { time: '夕方', content: 'ジョグジャカルタ（トゥグ駅）到着', note: 'ホテルチェックイン' },
      { time: '夕方', content: 'マリオボロ通り散策', note: '夕方からが活気づく' },
      { time: '夜', content: 'アンクリンガンでコピジョス + ナシクチン', note: 'Angkringan Lik Man' },
      { time: '(火・木・土)', content: 'ラーマーヤナ・バレエ（19:30-21:30）', note: '事前予約必須' },
    ],
  },
  planD: {
    name: 'プランD: Day 5にプランバナン、Day 6にボロブドゥール（2日間フルプラン）',
    note: '時間に余裕がある場合の2日間分割プラン',
    day5: [
      { time: '午後', content: 'ジョグジャカルタ到着、ホテルチェックイン', note: '' },
      { time: '15:00', content: 'プランバナン寺院へ', note: 'Trans Jogjaバスまたは Grab' },
      { time: '15:00-17:00', content: 'プランバナン寺院群見学', note: '夕日に間に合うように' },
      { time: '17:00', content: 'プランバナンで夕日鑑賞', note: '' },
      { time: '19:30', content: 'ラーマーヤナ・バレエ', note: '火・木・土の場合' },
    ],
    day6: [
      { time: '03:30', content: 'ホテル出発（サンライズツアー）', note: '' },
      { time: '04:30-06:30', content: 'ボロブドゥール・サンライズ', note: '' },
      { time: '08:30-10:00', content: 'ボロブドゥール遺跡登頂', note: '' },
      { time: '11:00', content: 'ジョグジャ市内に帰着', note: '' },
      { time: '12:00', content: 'グデグ・ランチ', note: '' },
      { time: '13:30', content: 'クラトン（王宮）見学', note: '' },
      { time: '14:30', content: 'タマンサリ（水の城）', note: '' },
      { time: '15:30', content: 'マリオボロ通り & バティック買い物', note: '' },
      { time: '18:00', content: 'アンクリンガンでコピジョス + ナシクチン', note: '' },
      { time: '20:00', content: 'グデグ・パウォン', note: '夜しか営業しない名店。行列覚悟' },
    ],
  },
}

// ===== PRACTICAL =====
export const practicalInfo = [
  { label: 'ATM', desc: '至る所にあり。BCA、BNI、Mandiriが主要。マリオボロ通り沿いに多数' },
  { label: '両替', desc: 'マリオボロ通りの両替商は手数料が高い場合あり。銀行ATMでの引き出しが最もレート良い' },
  { label: '病院', desc: 'RS Bethesda（Jl. Jend. Sudirman No.70）、RS Panti Rapih（Jl. Cik Di Tiro No.30）' },
  { label: '薬局', desc: 'Kimia Farma、Guardianがマリオボロ周辺に複数' },
  { label: 'WiFi', desc: 'ほとんどのホテル・カフェで無料WiFi。速度は良好' },
  { label: 'SIMカード', desc: 'Telkomsel、XL Axiata。空港や通信ショップで購入可（パスポート必要）。5GB IDR 50,000程度' },
  { label: '電圧', desc: '220V/50Hz（日本と異なる。変換プラグ必要: Cタイプ）' },
]
