import Head from "katatema/head";
import React from "react";
import Style from "../stylesheets/main.scss";

export default class Index extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    return(
      <div>
        <Head>
          <meta charSet="utf-8"/>
          <title>Yattecast</title>
        </Head>
        <Style/>
        <main className="main">
          <section className="main-section">
            <div className="container">
              <h1 className="hero-heading">
                Yattecast
              </h1>
              <p className="hero-description">
                Podcastサイトをつくるためのテンプレート
              </p>
              <h2 className="hero-sub-heading">
                簡単・便利・最高
              </h2>
              <p className="hero-description">
                サイトを公開するには、録音した音源と説明文をGitHubに置くだけ。<br/>
                再生用のプレーヤーやiTunes用のRSSフィードなども自動で用意されます。
              </p>
              <div className="hero-button-wrapper">
                <a href="https://github.com/r7kamura/yattecast" className="button">
                  GitHubでforkして使う
                </a>
              </div>
            </div>
          </section>
          <section className="main-section">
            <div className="container">
              <img src="https://cloud.githubusercontent.com/assets/111689/20457744/38c370fe-aed5-11e6-8344-751294065161.png" alt="demo" className="demo-image"/>
              <p>
                デモサイト:
                <a href="https://yatteiki.fm" target="_blank">yatteiki.fm</a>
              </p>
            </div>
          </section>
          <section className="main-section">
            <div className="container">
              <div className="row">
                <div className="column-small-4 feature">
                  <div className="feature-image" style={{ backgroundImage: "url(https://unsplash.it/400/200/?image=827)" }}/>
                  <h3 className="feature-heading">
                    シンプルなデザイン
                  </h3>
                  <p className="feature-description">
                    Podcastの主役はあくまで音声。コンテンツを際立たせるためにシンプルなデザインを採用しています。
                  </p>
                </div>
                <div className="column-small-4 feature">
                  <div className="feature-image" style={{ backgroundImage: "url(https://unsplash.it/400/200/?image=861)" }}/>
                  <h3 className="feature-heading">
                    RSSフィード
                  </h3>
                  <p className="feature-description">
                    用意されたデータを元に、iTunesで配信するために必要なRSSフィードを自動で生成します。
                  </p>
                </div>
                <div className="column-small-4 feature">
                  <div className="feature-image" style={{ backgroundImage: "url(https://unsplash.it/400/200/?image=532)" }}/>
                  <h3 className="feature-heading">
                    細かい配慮
                  </h3>
                  <p className="feature-description">
                    倍速再生対応のプレーヤーや、出演者一覧、Twitterボタンなど、Podcastに便利な機能を予め用意しています。
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="main-section">
            <h2>
              Podcastをはじめよう
            </h2>
            <p>
              会話を録音して、Yattecastで公開しよう
            </p>
            <div className="hero-button-wrapper">
              <a href="https://github.com/r7kamura/yattecast" className="button">
                GitHubでforkして使う
              </a>
            </div>
          </section>
        </main>
        <footer className="footer">
          <div className="container">
            <table className="footer-table">
              <tbody>
                <tr>
                  <td>製作者</td>
                  <td><a href="https://github.com/r7kamura" target="_blank">r7kamura</a></td>
                </tr>
                <tr>
                  <td>ライセンス</td>
                  <td><a href="https://opensource.org/licenses/MIT" target="_blank">MIT</a></td>
                </tr>
                <tr>
                  <td>ソースコード</td>
                  <td><a href="https://github.com/r7kamura/yattecast" target="_blank">GitHub</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </footer>
      </div>
    );
  }
};