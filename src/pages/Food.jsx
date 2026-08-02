import { Link } from 'react-router-dom'
import { getCurrentTrip, getCurrentTripId } from '../data/tripLoader'

const indonesiaDishes = [
  {
    name: 'ナシゴレン（Nasi Goreng）',
    desc: 'インドネシアの国民食。甘辛いケチャップマニス（甘い醤油）で炒めたチャーハン。目玉焼きとクルプック（えびせん）がのっているのが定番。屋台からレストランまでどこでも食べられる。',
    price: 'Rp15,000〜35,000（約140〜330円）',
    where: 'インドネシア全土。どの街にもある',
  },
  {
    name: 'ミーゴレン（Mie Goreng）',
    desc: 'ナシゴレンの麺バージョン。甘辛い焼きそばで、野菜と卵が入る。インドミー（即席麺ブランド）をベースにした屋台版も絶品。',
    price: 'Rp12,000〜30,000（約110〜280円）',
    where: 'インドネシア全土',
  },
  {
    name: 'バソ（Bakso）',
    desc: 'インドネシア版の肉団子スープ。もちもちの牛肉団子がビーフブロスに浮かんでいる。ビーフン、揚げワンタン、豆腐などが入ることも。サンバルと甘い醤油で味を調整して食べる。',
    price: 'Rp15,000〜35,000（約140〜330円）',
    where: 'インドネシア全土。特にバンドン・マランが激戦区',
  },
  {
    name: 'サテ（Sate/Satay）',
    desc: '串焼き肉。鶏・羊・牛などをスパイスで漬け込んで炭火焼きに。ピーナッツソースかケチャップマニスをつけて食べる。マドゥラ式（ピーナッツ）とパダン式（カレー風味）が有名。',
    price: 'Rp20,000〜40,000（約190〜380円）/10本',
    where: 'インドネシア全土。夜の屋台が多い',
  },
  {
    name: 'ナシ・パダン（Nasi Padang）',
    desc: '西スマトラ・パダン料理のビュッフェスタイル。ご飯と一緒に、ルンダン（牛肉煮込み）、アヤム・ゴレン（揚げ鶏）、サンバル、野菜料理などを好きなだけ選ぶ。取った分だけ払うシステム。',
    price: 'Rp25,000〜60,000（約235〜560円）',
    where: 'インドネシア全土。「Rumah Makan Padang」の看板が目印',
  },
  {
    name: 'ルンダン（Rendang）',
    desc: 'CNN「世界で最も美味しい料理」1位に選ばれたこともある牛肉のスパイス煮込み。ココナッツミルクとスパイスで長時間煮込んで作る。パダン料理屋で食べるのが一番。',
    price: 'ナシ・パダンの一品として Rp10,000〜20,000加算',
    where: 'パダン料理レストラン',
  },
  {
    name: 'バタゴール（Batagor）',
    desc: 'バンドン名物。魚のすり身を揚げたもので、ピーナッツソースをたっぷりかけて食べる。サクサクの食感とコクのあるソースが絶妙。バンドン以外ではなかなか出会えない。',
    price: 'Rp15,000〜25,000（約140〜235円）',
    where: 'バンドン（Day 1-2）',
  },
  {
    name: 'ナシ・ティンベル（Nasi Timbel）',
    desc: 'スンダ料理（西ジャワ）の定番。バナナの葉で包んだご飯に、揚げ鶏、テンペ、サンバル、生野菜がついたセット。葉の香りがご飯に移って食欲をそそる。',
    price: 'Rp25,000〜50,000（約235〜470円）',
    where: 'バンドン周辺のスンダ料理レストラン',
  },
  {
    name: 'マルタバック（Martabak）',
    desc: 'インドネシアの国民的おやつ。甘い版（マルタバック・マニス）はチョコ・チーズ・ピーナッツを挟んだ厚焼きパンケーキ。しょっぱい版（マルタバック・テロール）は卵と肉入りの揚げ餃子風。',
    price: 'Rp20,000〜50,000（約190〜470円）',
    where: 'インドネシア全土。夜の屋台で',
  },
  {
    name: 'エス・チェンドル（Es Cendol）',
    desc: '緑色のゼリー状の米粉麺がかき氷の上にのった冷たいデザート。ココナッツミルクとグラ・メラ（パームシュガー）のシロップで甘くして食べる。暑い日に最高。',
    price: 'Rp8,000〜15,000（約75〜140円）',
    where: 'インドネシア全土。屋台やレストランで',
  },
]

const indonesiaDrinks = [
  { name: 'コピ・ルアク（Kopi Luwak）', desc: '世界一高いコーヒー。ジャコウネコの消化を経たコーヒー豆。※動物福祉の懸念あり（ケージ飼育が多い）。倫理的な調達か確認するか、通常のインドネシアコーヒーを楽しむのも良い' },
  { name: 'テ・ボトル（Teh Botol）', desc: 'インドネシア版の午後ティー。甘い紅茶のボトル飲料。コンビニでRp5,000' },
  { name: 'コピ・スス（Kopi Susu）', desc: 'インドネシアのミルクコーヒー。練乳入りで甘い' },
  { name: 'バンドレック（Bandrek）', desc: '生姜とスパイスの温かいドリンク。バンドン高原の寒い夜にぴったり' },
  { name: 'ジャムウ（Jamu）', desc: 'インドネシアの伝統的なハーブドリンク。ウコン、生姜、タマリンドなどで作る' },
]

const cebuDishes = [
  { name: 'セブ・レチョン（Lechon Cebu）', desc: '子豚の丸焼き。皮はパリパリ、肉はジューシー、ハーブとレモングラスで味付け。CNNが「世界一の豚料理」と評した。Zubuchon、Rico\'s、CNT、House of Lechonが有名店。', price: '1人前 PHP 200-400（約530-1,060円）', where: 'セブシティ全域（Day 2）' },
  { name: 'シシグ（Sisig）', desc: '豚耳・ほほ肉・玉ねぎ・チリを鉄板でジュージュー焼き、最後に生卵を割り入れる。San Miguelビールとの相性が最強の代表料理。', price: 'PHP 200-350（約530-925円）', where: 'フィリピン全土' },
  { name: 'シニガン（Sinigang）', desc: 'タマリンドの酸味スープ。豚（na baboy）、エビ（na sugpo）、魚など具材自在。野菜と一緒に煮込まれた酸っぱい味が暑さに効く。', price: 'PHP 250-450（約660-1,190円）', where: 'フィリピン全土' },
  { name: 'アドボ（Adobo）', desc: 'フィリピンの国民食。鶏か豚を醤油・酢・ニンニク・ローリエで煮込んだ料理。地域ごとにレシピが少しずつ違う。', price: 'PHP 180-300（約475-790円）', where: 'フィリピン全土' },
  { name: 'カレカレ（Kare-Kare）', desc: '牛尾・牛足・牛モツをピーナッツソースで煮込んだスタウ。エビペースト（Bagoong）を添えて食べる濃厚料理。', price: 'PHP 350-600（約925-1,580円）', where: 'フィリピン全土。地元レストラン' },
  { name: 'ハロハロ（Halo-Halo）', desc: 'タガログ語で「混ぜ混ぜ」の意味。かき氷に小豆・タピオカ・寒天・ココナッツ・パープルヤム（ウベ）アイス・プリンを盛った極彩色デザート。', price: 'PHP 80-200（約210-530円）', where: 'フィリピン全土。Chowking、Razon\'sが定番' },
  { name: 'キニラウ（Kinilaw）', desc: 'フィリピン式セビーチェ。新鮮な生魚をココナッツ酢、生姜、玉ねぎ、唐辛子で締めた前菜。火を使わず酸で煮る南国の知恵。', price: 'PHP 250-500（約660-1,320円）', where: 'マクタン島のシーフード店（Day 3）' },
  { name: 'パンシット（Pancit）', desc: 'フィリピン版焼きそば。Pancit Canton（中華麺）、Pancit Bihon（細米麺）、Pancit Palabok（オレンジ色のソースがけ）など種類豊富。', price: 'PHP 150-300（約400-790円）', where: 'フィリピン全土' },
  { name: 'レチョン・マノック（Lechon Manok）', desc: '鶏の丸焼き。レモングラスを詰めて炭火でじっくり焼く。Andok\'s、Sr. Pedro等のチェーンが安くて旨い。1羽 PHP 200-300の庶民の味方。', price: 'PHP 200-300/1羽', where: 'Andok\'s、Sr. Pedroの店舗' },
  { name: 'ドライマンゴー（Dried Mango）', desc: 'セブ名物のお土産。フィリピン産マンゴーの完熟果実を乾燥させたもの。7D、Cebu Brand、Profoodが有名。空港・モールで買える。', price: 'PHP 150-400/袋', where: 'SM Seaside、空港、Ayala（お土産）' },
]

const cebuDrinks = [
  { name: 'San Miguel Pale Pilsen', desc: 'フィリピン国民ビール。シシグ・BBQと相性◎。レストランPHP 80-120、コンビニPHP 50-70' },
  { name: 'Red Horse Beer', desc: 'San Migの強めビール（アルコール6.9%）。フィリピンの飲み会の定番' },
  { name: 'Calamansi Juice', desc: 'フィリピンライム（カラマンシー）の搾りジュース。爽快な酸味でビタミンC補給' },
  { name: 'Buko Juice', desc: 'ヤシの実ジュース。実をその場で割って提供。屋台でPHP 30-50' },
  { name: 'Mango Shake', desc: 'フィリピン産マンゴーを凍らせてミキサーへ。世界一甘いと言われる完熟マンゴーの幸福' },
  { name: 'Tanduay Rum', desc: 'フィリピン産ラム酒。シングルボトルPHP 100台で買える。コーラ割り（クバリブレ）で' },
  { name: 'Sago\'t Gulaman', desc: 'タピオカと寒天入りの甘いジュース。屋台でPHP 20-30' },
]

const cebuSafetyTips = [
  '水道水は絶対に飲まない。歯磨きもペットボトルで（PHP20）。屋台の氷も避ける',
  '生野菜サラダ・カットフルーツは旅行者下痢のリスク。火が通ったものを選ぶ',
  '屋台のBBQ（Larsian等）は焼きたて・熱いものを。冷めたものは避ける',
  '【カジノで】無料アルコールは控えめに。判断力が鈍る',
  '【深夜便前】脂っこいレチョン大盛りは避け、軽めに（消化負担で寝不足悪化）',
  '【ピーナッツアレルギー注意】カレカレ、サテのソースに使われる',
  '【シーフードアレルギー注意】Kinilaw・Bagoongはエビ・魚介類',
  'レチョンの皮は美味だが油分が多い。最初は少量から',
  '食前の手洗い/アルコールジェル消毒を徹底',
]

const safetyTips = [
  '屋台の食事は多くの場合安全だが旅行者下痢のリスクあり。火が通ったもの・注文後に調理されるものを選ぶ',
  '氷入り飲料は、コンビニの袋入り氷を使っている店なら安心',
  '水道水は絶対に飲まない。ペットボトルの水を買う（Rp3,000〜5,000）',
  '辛さは「tidak pedas（ティダ プダス＝辛くしないで）」で調整可能',
  'お腹が心配なら最初の2-3日はレストラン中心で。慣れたら屋台デビュー',
  'ワルン（warung）＝小さな食堂。安くて美味い。英語メニューはないことが多い',
  '【アレルギー注意】ピーナッツ（サテ、バタゴールのソース）、エビ（クルプック、テラシ）、大豆（テンペ、ケチャップマニス）が多用される',
  'アレルギーがある場合は「Saya alergi ~（サヤ アレルギ〜）」のカードを用意すると安心',
  '食前の手洗い/アルコールジェル消毒を徹底。携帯用ジェルは常備すること',
]

export default function Food() {
  const tripId = getCurrentTripId()
  const guide = getCurrentTrip().foodGuide
  const isCebu = tripId === 'cebu'
  const dishes = guide?.dishes || (isCebu ? cebuDishes : indonesiaDishes)
  const drinkList = guide?.drinks || (isCebu ? cebuDrinks : indonesiaDrinks)
  const tips = guide?.safetyTips || (isCebu ? cebuSafetyTips : safetyTips)
  const title = guide?.title || (isCebu ? 'フィリピンの食' : 'インドネシアの食')
  const intro = guide?.intro || (isCebu
    ? 'フィリピン料理はスペイン・米・中国・マレーの影響が混ざり合った独自の世界。レチョン（豚の丸焼き）、シシグ、シニガンの酸味、マンゴー、そしてSan Miguelビール。セブはレチョンの本場、マクタンはシーフード天国。'
    : 'インドネシア料理は「辛い・甘い・うまい」のトライアングル。ケチャップマニス（甘い醤油）、サンバル（唐辛子ペースト）、ココナッツミルクが味の土台。屋台（カキリマ）で食べるのが一番安くて本物の味に出会える。')

  return (
    <div>
      <div className="bg-sunset-600 px-4 py-8 text-white">
        <h1 className="text-2xl font-black">{title}</h1>
        <p className="text-sm opacity-90 mt-1">旅先で食べたい料理ガイド</p>
      </div>

      <div className="px-4 py-6 space-y-6">
        <p className="text-sm text-gray-600 leading-relaxed">
          {intro}
        </p>

        <h2 className="text-lg font-bold text-gray-800">定番料理{dishes.length}選</h2>

        <div className="space-y-4">
          {dishes.map((d, i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-sand-200">
              <h3 className="font-bold text-gray-800">{d.name}</h3>
              <p className="text-sm text-gray-600 mt-1 leading-relaxed">{d.desc}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="text-xs bg-sunset-50 text-sunset-700 px-2 py-1 rounded-full">
                  {d.price}
                </span>
                <span className="text-xs bg-ocean-50 text-ocean-700 px-2 py-1 rounded-full">
                  {d.where}
                </span>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-lg font-bold text-gray-800 mt-6">飲み物</h2>
        <div className="space-y-2">
          {drinkList.map((d, i) => (
            <div key={i} className="bg-white rounded-xl p-3 shadow-sm border border-sand-200">
              <h4 className="font-bold text-sm text-gray-800">{d.name}</h4>
              <p className="text-xs text-gray-600 mt-0.5">{d.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-lg font-bold text-gray-800 mt-6">食の安全メモ</h2>
        <div className="bg-yellow-50 rounded-2xl p-4">
          <ul className="space-y-2">
            {tips.map((t, i) => (
              <li key={i} className="text-xs text-gray-700 flex gap-2">
                <span className="text-yellow-500 flex-shrink-0">&#9679;</span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <Link
          to="/"
          className="block bg-sunset-600 text-white text-center rounded-xl py-3 text-sm font-medium"
        >
          ホームに戻る
        </Link>
      </div>
    </div>
  )
}
