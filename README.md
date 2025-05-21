# 欸冷 | 個人成長部落格

本專案是一個基於 Next.js 與 Tailwind CSS 打造的靜態部落格，支援 MDX、響應式設計、主題切換與多種現代化功能，適合技術分享、學習筆記與個人作品展示。

## 使用技術

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MDX](https://mdxjs.com/)
- [TypeScript](https://www.typescriptlang.org/)

## 特色功能

- 支援 Markdown/MDX 格式文章
- 文章自動生成目錄、標籤、作者資訊
- 內建 RSS、Sitemap、自動 SEO
- 支援主題切換（深色/淺色/系統）
- 支援專案頁、作者頁、標籤頁
- 部署於 Vercel，支援自動化部署

## 專案結構

```
├── data/           # 文章、作者、專案資料
├── public/         # 靜態資源（圖片、字型、robots.txt 等）
├── scripts/        # 自動化腳本（如 sitemap、rss 生成）
├── src/            # 主要程式碼（components, layouts, pages, lib 等）
├── types/          # TypeScript 型別定義
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 快速開始

1. 安裝依賴

   ```bash
   npm install
   ```

2. 啟動開發伺服器

   ```bash
   npm run dev
   ```

3. 打開瀏覽器並前往 [http://localhost:3000](http://localhost:3000)

## 如何新增文章

1. 執行腳本快速產生文章模板：

   ```bash
   node scripts/compose.js
   ```

2. 依照指示輸入標題、標籤等資訊，文章會自動建立於 `data/blog/` 目錄下。

3. 使用 Markdown/MDX 編輯內容，支援插入圖片、程式碼區塊、數學公式等。

## 部署

推薦使用 [Vercel](https://vercel.com/) 一鍵部署，或自行部署至任何支援 Node.js 的平台。

## 參考/致謝

- [tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog)
- [Next.js 官方文件](https://nextjs.org/docs)
- [Tailwind CSS 官方文件](https://tailwindcss.com/docs)

---

如有問題歡迎來信聯絡：h105483342@gmail.com