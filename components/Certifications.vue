<template>
  <section id="certifications" class="certifications">
    <h2>Certificates</h2>
    <ul>
      <li class="certifications_certificate">
        <font-awesome-icon icon="pencil-alt" />
        <span>ITパスポート試験 (2016)</span>
      </li>
      <li class="certifications_certificate">
        <font-awesome-icon icon="pencil-alt" />
        <span>基本情報技術者試験 (2016)</span>
      </li>
      <li class="certifications_certificate">
        <font-awesome-icon icon="pencil-alt" />
        <span>情報セキュリティマネジメント試験 (2017)</span>
      </li>
      <li class="certifications_certificate">
        <font-awesome-icon icon="pencil-alt" />
        <span>C言語プログラミング能力認定試験 3級 (2017)</span>
      </li>
      <li class="certifications_certificate">
        <font-awesome-icon icon="pencil-alt" />
        <span>応用情報技術者試験 (2017)</span>
      </li>
      <li class="certifications_certificate">
        <font-awesome-icon icon="pencil-alt" />
        <span>C言語プログラミング能力認定試験 2級 (2018)</span>
      </li>
      <li class="certifications_certificate">
        <font-awesome-icon icon="pencil-alt" />
        <span>工事担任者 DD第三種 (2018)</span>
      </li>
      <li class="certifications_certificate">
        <font-awesome-icon icon="pencil-alt" />
        <span>.com Master ADVANCE★★ (2018)</span>
      </li>
      <li class="certifications_certificate">
        <font-awesome-icon icon="pencil-alt" />
        <span>第四級アマチュア無線技士 (2018)</span>
      </li>
      <li class="certifications_certificate">
        <font-awesome-icon icon="pencil-alt" />
        <span>危険物取扱者 乙種4類 (2018)</span>
      </li>
      <li class="certifications_certificate">
        <font-awesome-icon icon="pencil-alt" />
        <span>情報処理安全確保支援士 (2019)</span>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
  .certifications {
    background: #fff;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .certifications_certificate {
    list-style-type: none;
    font-size: 20px;
    @media (max-width: 600px) {
      font-size: 16px;
    }
  }
</style>
