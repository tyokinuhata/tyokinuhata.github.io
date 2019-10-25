<template>
  <section id="histories" class="histories">
    <h2>Histories</h2>
    <ul class="histories_wrapper">
      <li class="histories_history">
        <font-awesome-icon icon="school" />
        <a href="http://www2.kobe-c.ed.jp/snk-hs/" target="_blank">神戸市立神港高等学校</a>
        <span>情報処理科 (2014 - 2017)</span>
        <ul>
          <li>
            商業と情報の２つを軸に学ぶ.
          </li>
        </ul>
      </li>
      <li class="histories_history">
        <font-awesome-icon icon="school" />
        <a href="https://www.oic.ac.jp/" target="_blank">大阪情報コンピュータ専門学校</a>
        <span>総合情報メディア学科 (2017 - 現在)</span>
        <ul>
          <li>
            <a href="https://itc.moe/" target="_blank">ITCreate部</a>
            <span>に所属. ハッカソンの出場やカンファレンスへの出展・スタッフ, 勉強会やLT大会の主催等, 幅広く活動する.</span>
          </li>
        </ul>
      </li>
      <li class="histories_history">
        <font-awesome-icon icon="building" />
        <a href="https://chatbox-inc.com/" target="_blank">株式会社chatbox</a>
        <span>(2017 - 現在)</span>
        <ul>
          <li>アルバイトとして入社.</li>
          <li>Laravel/Nuxt.jsを用いた受託開発を中心に従事する.</li>
        </ul>
      </li>
      <li class="histories_history">
        <font-awesome-icon icon="building" />
        <a href="https://www.inform.co.jp/" target="_blank">インフォームシステム株式会社</a>
        <span>(2017 - 2018)</span>
        <ul>
          <li>アルバイトとして入社.</li>
          <li>Laravelを用いた受託開発を中心に従事する.</li>
        </ul>
      </li>
      <li class="histories_history">
        <font-awesome-icon icon="building" />
        <a href="https://geeks.ne.jp/" target="_blank">GEEKS株式会社</a>
        <span>(2018 - 現在)</span>
        <ul>
          <li>アルバイトとして入社.</li>
          <li>社内向けの在庫管理システムや勤怠管理システムの設計・開発に従事.</li>
          <li>主にLaravel/Angularを用いて開発.</li>
        </ul>
      </li>
      <li class="histories_history">
        <font-awesome-icon icon="bicycle" />
        <span>大阪 - 名古屋 ママチャリ走破 (2019)</span>
        <ul>
          <li>膝を壊す.</li>
        </ul>
      </li>
      <li class="histories_history">
        <font-awesome-icon icon="trophy" />
        <a href="https://spajam.jp/2019/entry/kansai/" target="_blank">SPAJAM2019 関西予選</a>
        <span>最優秀賞受賞 (2019)</span>
        <ul>
          <li>セルフで座禅を行える超画期的なシステムを構築.</li>
          <li>スマートフォンのジャイロセンサやRaspberry Pi等を用いて開発.</li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
  .histories {
    background: #fff;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .histories_wrapper {
    max-width: 700px;
    width: 100%;
  }

  .histories_history {
    list-style-type: none;
    font-size: 18px;
    @media (max-width: 600px) {
      font-size: 16px;
    }
  }
</style>
