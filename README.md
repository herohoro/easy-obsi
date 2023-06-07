# easy-obsidian-memo

日本語  

  

# easy-notion-blog

  

[![GitHub stars](https://img.shields.io/github/stars/otoyo/easy-notion-blog)](https://github.com/herohoro/easy-obsidian-memo/stargazers)

[![GitHub license](https://img.shields.io/github/license/otoyo/easy-notion-blog)](https://github.com/herohoro/easy-obsidian-memo/blob/master/LICENSE)

  



  

あっという間に Notion Blog を始めることができていた...
easy-notion-blogの **【魔改造版】**

==作りやすさ==を重視しているため、
必要最小限のコードに留めています。

- :rocket: Next.js最新版に対応しているためページの読み込みが**爆速**

- :pencil: **自分の~~Notion~~ Obsidianで**ブログが書ける

- :hammer_and_wrench: ブログの見た目を**自分好みにカスタマイズ可能**

- :white_check_mark: **~~Notion 公式API~~ Obsidian プラグイン**を使っているので~~安心~~ 簡単なコードで実現


オリジナルで改造するために参考になるeasy-notion-blogのコードを残しています。
改造する上で参考になる記述が沢山あるので、のぞいてみてください⭐

[easy愛好家が集まってこっそり開発継続中のeasy-notion-blog](https://github.com/herohoro/zutto2_easy-notion-blog)
※ 元々開発されていたotoyoさんは[astro-notion-blog](https://github.com/otoyo/astro-notion-blog)の開発に専念しています  



## スクリーンショット

  

### :camera_flash: ブログ側

  


  

### :camera_flash: Notion側

  


  

## クイックスタート

  

### 必要要件

  

- [Vercel](https://vercel.com/) アカウント

- Git

  

### 手順

  


1. [vercel.com](https://vercel.com/) にログイン

2. プロジェクトを新規作成しリポジトリとして `YOUR NAME/easy-obsidian-memo` をインポート(チームの作成はスキップ)

3. デプロイが完了すると Obsidian memo が見えるようになります

  



  

## デモ

.....準備中  




  

## カスタマイズするには

  

### 追加の必要要件

  

- Node.js v18 もしくはそれ以上

- [Yarn](https://yarnpkg.com/getting-started)


  

### STEP01_サンプルのmdファイルを表示


  

1. このリポジトリをフォークしてローカルに clone します

2. 依存関係をインストールしローカルサーバーを起動します

  

```sh

# 依存関係のインストール

yarn install

  

# 開発サーバー(localhost:3000) の起動

yarn dev

```

  

3. ブラウザで [http://localhost:3000](http://localhost:3000) を開きます  

4. 開発サーバーを停止するにはターミナルで `Ctrl+C` を押します。

  


  
### STEP02_Obsidian Vault内のmdを接続


1. Obsidianで「Obsidian Git」プラグインをインストールする
2. Obsidianで新たなVaultを作ります
3. Vault nameを==posts==にします
4. LocationはSTEP01で使っていたeasy-obsidian-memo内にあるlib>obsidianにします
5. Obsidian上でObsidian Gitを有効にする

obsidianで編集するとその差分がGitHubのcommit候補に上がります。
自動にする場合はobsidian Gitの設定から行ってください。
  



  

---

  

easy-obsidian-memo は [otoyo/easy-notion-blog](https://github.com/otoyo/easy-notion-blog) と [herohoro/ zutto2_easy-notion-blog](https://github.com/herohoro/zutto2_easy-notion-blog) をベースにしています。
