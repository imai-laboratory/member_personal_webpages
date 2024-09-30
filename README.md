# member_personal_webpages
今井研究室のメンバーの個人ページをまとめたリポジトリです。Next.jsを使用しています。(TypeScriptは使用していません)

## 個人ページ実装方法
1. `app/members/`以下に、自分の名前のディレクトリを作成してください。
2. そのディレクトリ内に、page.jsxを作成してください。
3. page.jsxをコンポーネントを使い、自由に実装してください。こだわりがない方は他の方のページを参考にし、データのみを変更してください。

## ローカル検証方法
```bash
yarn dev
```
http://localhost:3000/member_personal_webpages/members/自分の名前/ にアクセスしてください。

## デプロイ方法
mainブランチにpushすると、自動的にデプロイされます。
基本的にはpull requestを作成することを推奨します。
