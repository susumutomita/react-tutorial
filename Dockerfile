# ベースイメージを指定
FROM node:16

# 作業ディレクトリを指定
WORKDIR /app

# package.json と package-lock.json をコピー
COPY . /app/

# アプリケーションのソースコードをコピー
COPY . .

# 開発用サーバーを起動するコマンド
# CMD ["npm", "start"]
