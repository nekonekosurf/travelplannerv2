# 旅行UI作成スキル（travel-ui）

## 目的
`data/trip.json` のデータを元に、スマホファーストの旅行ガイドサイトを構築する。

## 技術スタック
- React 18（.jsx）
- Vite
- Tailwind CSS
- React Router（ページ遷移）
- GitHub Pages でホスティング

## デザイン原則

### 絶対ルール
1. **AIらしさ排除**: 「〜をお勧めします」「〜が最適です」等の機械的表現は禁止
2. **旅行雑誌風**: 人間のライターが書いたようなカジュアルで親しみやすい文体
3. **スマホファースト**: 375px幅を基準にデザイン。PC表示は後から対応
4. **片手操作**: 主要操作は画面下半分で完結
5. **画像重視**: テキストの壁を作らない。画像で雰囲気を伝える

### カラーパレット
- メイン: 暖かみのある自然系カラー（サンセットオレンジ、オーシャンブルー）
- 背景: オフホワイト〜薄いベージュ
- テキスト: ダークグレー（#333）
- アクセント: サンゴ色、ターコイズ

### タイポグラフィ
- 見出し: 太字、大きめ（旅行雑誌風）
- 本文: 読みやすいサイズ（16px以上）
- 注意事項: 小さめだが読める（14px）

## ページ構成

### 1. トップページ (`/`)
- ヒーロー画像（全幅、旅行先のメインビジュアル）
- 旅行タイトル・日程サマリー
- ルート概要マップ
- Day別カードグリッド（タップで各日ページへ）
- 実用情報へのリンク

### 2. 日別ページ (`/day/:id`)
- ヒーロー画像
- その日の概要
- タイムライン形式の行程表（朝→昼→夜）
- 各スポットカード（タップで展開/折りたたみ）
  - 写真
  - 説明文
  - アクセス・料金・時間
  - Tips
  - Google Mapsリンク
- 食事おすすめセクション
- 宿泊情報
- 次の日への移動情報

### 3. 実用情報ページ (`/info`)
- ビザ・入国
- 通貨・両替
- SIMカード
- 電圧・プラグ
- 緊急連絡先
- 持ち物チェックリスト
- インドネシア語フレーズ集

## コンポーネント設計

```
src/
├── App.jsx              # ルーティング
├── main.jsx             # エントリーポイント
├── index.css            # Tailwind + カスタムCSS
├── components/
│   ├── Layout.jsx       # 共通レイアウト（ヘッダー/フッター/ナビ）
│   ├── HeroImage.jsx    # ヒーロー画像コンポーネント
│   ├── DayCard.jsx      # トップページのDay別カード
│   ├── Timeline.jsx     # タイムライン全体
│   ├── TimelineItem.jsx # タイムライン各項目
│   ├── SpotCard.jsx     # スポット詳細カード
│   ├── FoodSection.jsx  # 食事セクション
│   ├── TransportInfo.jsx # 移動情報
│   ├── AccommodationCard.jsx # 宿泊カード
│   └── PracticalInfo.jsx # 実用情報
├── pages/
│   ├── Home.jsx         # トップページ
│   ├── DayDetail.jsx    # 日別ページ
│   └── Info.jsx         # 実用情報ページ
└── data/
    └── (tripデータのimport用)
```

## 画像の扱い
- 外部URLを直接 `<img src>` で使用
- `loading="lazy"` で遅延読み込み
- `alt` テキストは必ず設定
- アスペクト比を維持しつつ、幅は100%

## レスポンシブ対応
- モバイル: 375px-768px（メイン）
- タブレット: 768px-1024px
- PC: 1024px以上
- Tailwindのブレークポイント（`sm:`, `md:`, `lg:`）を活用

## パフォーマンス
- 画像は `loading="lazy"`
- コンポーネントの遅延読み込み（`React.lazy`）は初版では不要
- JSONデータはビルド時にバンドル

## 都市ガイドページテンプレート (`/city/:name`)

データ構造 (`cities[name]`):
```json
{
  "name": "都市名（エリア名）",
  "subtitle": "短い説明",
  "description": "詳細説明",
  "center": { "lat": -6.9150, "lng": 107.6090 },
  "areaTips": ["ヒント1", "ヒント2"],
  "landmarks": [{ "name": "名前", "lat": 0, "lng": 0 }],
  "pois": [{
    "name": "POI名", "lat": 0, "lng": 0,
    "type": "restaurant|convenience|atm|cafe|mall|transit|pharmacy",
    "description": "説明",
    "googleMapsUrl": "https://maps.google.com/?q=lat,lng"
  }],
  "relatedDays": [1, 2],
  "backLink": "/day/1",
  "backLinkLabel": "Day 1に戻る"
}
```

POI types と表示:
- `restaurant`: 緑アイコン + 食事カテゴリ
- `convenience`: 青アイコン + コンビニカテゴリ
- `atm`: シアンアイコン + ATMカテゴリ
- `cafe`: 黄アイコン + カフェカテゴリ
- `mall`: ピンクアイコン + ショッピングカテゴリ
- `transit`: 灰アイコン + 交通カテゴリ
- `pharmacy`: 赤アイコン + 薬局カテゴリ

## 品質チェック
ビルド前に以下を確認:
- [ ] スマホ表示で崩れていないか
- [ ] 画像が正しく表示されるか
- [ ] Google Mapsリンクが機能するか
- [ ] ページ遷移がスムーズか
- [ ] AI感のある表現がないか
- [ ] 全10日のDayページが表示されるか
- [ ] 全都市のCityGuideページが表示されるか
