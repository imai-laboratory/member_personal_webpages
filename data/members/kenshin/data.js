const pathName = 'kenshin';
const path = `/member_personal_webpages/members/${pathName}`;

export const profileData = {
  backgroundImage: `${path}/bg.jpg`,
  email: 'nakanishi@ailab.ics.keio.ac.jp',
  grade: '修士課程1年',
  hobbies: 'バスケットボール、散歩、フロント・バックエンド開発、ゲーム（原神・崩壊スターレイル）',
  imageUrl: `${path}/profile.jpg`,
  name: '中西 建心',
  roles: ['Web係', 'AI心理チーム', 'CRESTチーム'],
  socialMediaLists: [ // ./utils/getSocialIcons.jsに存在するアイコンのみ使用できます
    {
      name: "GitHub",
      link: "https://github.com/Kenshin0011",
    },
    {
      name: "Zenn",
      link: "https://zenn.dev/kenshin0011",
    },
    {
      name: "Homepage",
      link: "https://kenshin0011.github.io/my-homepage/",
    },
    {
      name: "Email",
      link: "https://mail.google.com/mail/u/0/?to=nakanishi@ailab.ics.keio.ac.jp&fs=1&tf=cm",
    },
  ],
};

export const researchData = {
  demoUrls: {
    first: {
      description: 'ビデオでは、Aさんとあなたが横にある絵について会話をしていて、Bさんが話を聞いていない場面です(このビデオではAさんとBさんは、gpt4を用いています。あなたは、人間の入力です)。Aさんとあなたの会話の中で聞き逃すと意味が発生する会話が生じると、該当箇所が黄色と赤色で表示されます（アルゴリズムの判定をわかりやすくするために色をつけてます）。ビデオの中では、この場面で、該当箇所を聞き逃すとどうなるかを、Bさんに話を振ることで確かめています。色のついた場所を聞き逃しているBさんが検討違いのことを言い出すのがわかると思います。',
      thumbnail: `${path}/SCAINs_algo.png`,
      title: '聞き逃し支援システム',
      video: `${path}/SCAINs_algo.mp4`,
    },
  },
  contents: {
    description: '自然言語処理を中心に研究しています。ある文脈の中での会話の流れを理解するための技術の開発を行っています。',
    keywords: ['自然言語処理', '対話文脈理解', '大規模言語モデル'],
  }
};

export const publicationsData = {
  publications: [
    {
      authors: [
        "中西建心",
        "土屋碧渡",
        "長谷川麟太郎",
        "前川知行",
        "今井倫太"
      ],
      title:  "聞き逃しを考慮した文脈理解技術の拡張",
      year: "2024",
      page: "3T1-OS-6a-02",
      no: "",
      book: "2024年度人工知能学会全国大会（第38回）",
      draft_pdf_url: "https://www.jstage.jst.go.jp/article/pjsai/JSAI2024/0/JSAI2024_3T1OS6a02/_pdf/-char/ja"
    },
    {
      authors: [
        "中西建心",
        "土屋碧渡",
        "長谷川麟太郎",
        "前川知行",
        "今井倫太"
      ],
      title:  "大規模言語モデルを用いた解釈に影響を与える対話文取得方法の検討",
      year: "2024",
      page: "pp.873-874",
      no: "No.2",
      book: "情報処理学会第86回全国大会",
      draft_pdf_url: "https://drive.google.com/file/d/1Y5vnNS4PQ7F8kZKCH73UGb-cDFmNmQBa/view?usp=sharing"
    },
  ],
};
