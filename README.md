# 飯塚市ポータルサイト

福岡県飯塚市の情報を発信するポータルサイトです。

## 概要

このプロジェクトは、飯塚市の魅力を伝え、市民や観光客に役立つ情報を提供するポータルサイトです。プレーンなHTML、CSS、JavaScriptを使用して構築されており、依存関係が最小限に抑えられています。

## 特徴

- 📱 完全レスポンシブデザイン（PC、タブレット、スマートフォン対応）
- 🎨 モダンでクリーンなUI/UX
- ⚡ 高速な読み込み速度
- ♿ アクセシビリティに配慮した設計
- 🔧 依存関係なし（プレーンなHTML/CSS/JavaScript）

## コンテンツ

### 現在実装されているページ

- **トップページ** (`index.html`)
  - 飯塚市の概要
  - クイックリンク
  - 新着ニュース
  - 市の基本情報

- **ニュース・お知らせ** (`pages/news.html`)
  - 市からの最新情報
  - イベント告知
  - 重要なお知らせ

- **観光情報** (`pages/tourism.html`)
  - 主要観光スポット（伊藤伝右衛門邸、嘉穂劇場など）
  - 飯塚グルメ
  - アクセス情報

- **イベント情報** (`pages/events.html`)
  - 開催予定のイベント
  - 年間イベントカレンダー

## プロジェクト構造

```
town_portal/
├── index.html          # トップページ
├── css/
│   └── style.css      # スタイルシート
├── js/
│   └── main.js        # JavaScript
├── pages/
│   ├── news.html      # ニュースページ
│   ├── tourism.html   # 観光情報ページ
│   └── events.html    # イベント情報ページ
├── images/            # 画像ファイル（今後追加予定）
└── README.md          # このファイル
```

## セットアップ

このサイトは静的HTMLサイトなので、特別なセットアップは不要です。

### ローカルで表示する方法

1. リポジトリをクローン
```bash
git clone https://github.com/minny8/town_portal.git
cd town_portal
```

2. ブラウザでindex.htmlを開く
   - 直接ファイルを開く、または
   - ローカルサーバーを起動する（推奨）

### ローカルサーバーの起動例

**Pythonを使用する場合：**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Node.jsを使用する場合：**
```bash
npx http-server -p 8000
```

ブラウザで `http://localhost:8000` にアクセスしてください。

## 技術スタック

- **HTML5**: セマンティックなマークアップ
- **CSS3**: Flexbox、Grid、カスタムプロパティ（CSS変数）を使用
- **JavaScript (ES6+)**: Vanilla JavaScript（フレームワーク不使用）

## ブラウザ対応

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- モバイルブラウザ（iOS Safari、Chrome for Android）

## 今後の拡張予定

- [ ] 施設案内ページの追加
- [ ] お問い合わせフォーム
- [ ] 検索機能
- [ ] 多言語対応（英語、中国語、韓国語）
- [ ] ダークモード対応
- [ ] 画像ギャラリー
- [ ] CMSとの連携（WordPress、Headless CMSなど）
- [ ] PWA対応

## 貢献

改善提案やバグ報告は、Issuesまたはプルリクエストでお願いします。

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 連絡先

飯塚市ポータルサイトに関するお問い合わせは、以下までお願いします。

- 住所: 〒820-8501 福岡県飯塚市新立岩5番5号
- GitHub: https://github.com/minny8/town_portal