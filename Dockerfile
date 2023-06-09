# ベースイメージを指定
FROM node:16

# 作業ディレクトリを指定
WORKDIR /app

# package.json と yarn.lockをコピー
COPY package.json yarn.lock ./

# 依存関係をインストール
RUN yarn install

# アプリケーションのソースコードをコピー
COPY . .

# 開発用サーバーを起動するコマンド
# CMD ["yarn", "start"]
