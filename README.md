# member_personal_webpages
今井研究室のメンバーの個人ページをまとめたリポジトリです。Next.jsを使用しています。(TypeScriptはあえて使用していません)

## 個人ページ実装方法
1. `app/members/`に、自分の名前のディレクトリを作成し、その中に`page.jsx`と`data.js`を他の人のものからコピーしてください
2. `public/members/`に、自分の名前のディレクトリを作成し、その中に自分の写真や動画を保存してください。
3. `page.jsx`：data.jsのimport先のみ変更
4. `data.js`：自分の情報に書き換えてください

## ローカル検証方法
```bash
yarn dev
```
http://localhost:3000/member_personal_webpages/members/自分の名前/ にアクセスしてください。

## デプロイ方法
mainブランチにpushすると、自動的にデプロイされます。

そのため基本的にはpull requestを作成することを推奨します。

## 注意
- 自分の名前はユニークなものにしてください。
- 過去メンバーは`past_members/`に移動することを推奨します。
  - ただし移動するとurlが機能しなくなるので、注意してください。
