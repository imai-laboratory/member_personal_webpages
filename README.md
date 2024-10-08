# member_personal_webpages
今井研究室のメンバーの個人ページをまとめたリポジトリです。Next.jsとTailwind CSSを使用しています。(TypeScriptはあえて使用していません)

## 個人ページ実装方法
1. `data/members/`に、自分の名前のディレクトリを作成し、その中に`data.js`を他の人のものからコピーし、自分の情報に書き換えてください。
2. 自分の写真や動画は、`public/members/`に自分の名前のディレクトリを作成して保存してください。

## ローカル検証方法
```bash
yarn dev
```
http://localhost:3000/member_personal_webpages/自分の名前/ にアクセスしてください。

## デプロイ方法
mainブランチにpushすると、自動的にデプロイされます。\
そのため基本的にはpull requestを作成することを推奨します。

## 注意
- 自分の名前はユニークなものにしてください。
- 過去メンバーは`data/past_members/`に移動することを推奨します。
  - ただし移動するとurlが機能しなくなるので、注意してください。
- 新しいデザインを作成するときは、`app/_components/designs`にコンポーネントを追加してください。
  - page.jsxで分岐することを推奨します。
