# Dockerfile
# 基本イメージを選択
FROM jekyll/jekyll:3.8.0

# 作業ディレクトリを設定
WORKDIR /srv/jekyll

# Gemfileをコピー（Gemfile.lockはオプショナル）
COPY ./src/Gemfile /srv/jekyll/

RUN gem install jekyll-coffeescript

# バンドルインストールを実行
RUN bundle install

# 他のすべてのファイルとディレクトリをコピー
COPY . /srv/jekyll
