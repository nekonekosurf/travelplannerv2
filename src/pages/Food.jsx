import { Link } from 'react-router-dom'

const dishes = [
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

const drinkList = [
  { name: 'コピ・ルアク（Kopi Luwak）', desc: '世界一高いコーヒー。ジャコウネコの消化を経たコーヒー豆。観光地では試飲できる場所も多い' },
  { name: 'テ・ボトル（Teh Botol）', desc: 'インドネシア版の午後ティー。甘い紅茶のボトル飲料。コンビニでRp5,000' },
  { name: 'コピ・スス（Kopi Susu）', desc: 'インドネシアのミルクコーヒー。練乳入りで甘い' },
  { name: 'バンドレック（Bandrek）', desc: '生姜とスパイスの温かいドリンク。バンドン高原の寒い夜にぴったり' },
  { name: 'ジャムウ（Jamu）', desc: 'インドネシアの伝統的なハーブドリンク。ウコン、生姜、タマリンドなどで作る' },
]

const safetyTips = [
  '屋台の食事は基本安全。火が通ったものを選べばOK',
  '氷入り飲料は、コンビニの袋入り氷を使っている店なら安心',
  '水道水は絶対に飲まない。ペットボトルの水を買う（Rp3,000〜5,000）',
  '辛さは「tidak pedas（ティダ プダス＝辛くしないで）」で調整可能',
  'お腹が心配なら最初の2-3日はレストラン中心で。慣れたら屋台デビュー',
  'ワルン（warung）＝小さな食堂。安くて美味い。英語メニューはないことが多い',
]

export default function Food() {
  return (
    <div>
      <div className="bg-sunset-600 px-4 py-8 text-white">
        <h1 className="text-2xl font-black">インドネシアの食</h1>
        <p className="text-sm opacity-90 mt-1">旅先で食べたい料理ガイド</p>
      </div>

      <div className="px-4 py-6 space-y-6">
        <p className="text-sm text-gray-600 leading-relaxed">
          インドネシア料理は「辛い・甘い・うまい」のトライアングル。ケチャップマニス（甘い醤油）、サンバル（唐辛子ペースト）、ココナッツミルクが味の土台。屋台（カキリマ）で食べるのが一番安くて本物の味に出会える。
        </p>

        <h2 className="text-lg font-bold text-gray-800">定番料理10選</h2>

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
            {safetyTips.map((t, i) => (
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
