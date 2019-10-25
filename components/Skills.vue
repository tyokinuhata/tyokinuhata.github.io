<template>
  <section id="skills" class="skills">
    <h2>Skills</h2>
    <ul class="skills_wrapper">
      <li class="skills_skill">
        <font-awesome-icon icon="wrench" />
        <span>HTML, CSS, Pug, Sass(scss), Bootstrap</span>
      </li>
      <li class="skills_skill">
        <font-awesome-icon icon="wrench" />
        <span>JavaScript, TypeScript, CoffeeScript, Node.js</span>
      </li>
      <li class="skills_skill">
        <font-awesome-icon icon="wrench" />
        <span>Vue.js, Nuxt.js, React.js, Angular</span>
      </li>
      <li class="skills_skill">
        <font-awesome-icon icon="wrench" />
        <span>and related ecosystems</span>
      </li>
      <li class="skills_skill">
        <font-awesome-icon icon="wrench" />
        <span>PHP, Laravel, Lumen</span>
      </li>
      <li class="skills_skill">
        <font-awesome-icon icon="wrench" />
        <span>and a few backend programming languages</span>
      </li>
      <li class="skills_skill">
        <font-awesome-icon icon="wrench" />
        <span>Docker, Kubernetes</span>
      </li>
      <li class="skills_skill">
        <font-awesome-icon icon="wrench" />
        <span>and related ecosystems</span>
      </li>
      <li class="skills_skill">
        <font-awesome-icon icon="wrench" />
        <span>MySQL, PostgreSQL, SQLite, Redis</span>
      </li>
      <li class="skills_skill">
        <font-awesome-icon icon="wrench" />
        <span>AWS, GCP, Heroku</span>
      </li>
      <li class="skills_skill">
        <font-awesome-icon icon="wrench" />
        <span>TCP/IP, Cisco Router, Catalyst Switch, GNS3</span>
      </li>
      <li class="skills_skill">
        <font-awesome-icon icon="wrench" />
        <span>Network Programming(C, C++)</span>
      </li>
      <li class="skills_skill">
        <font-awesome-icon icon="wrench" />
        <span>Git, CircleCI, Agile</span>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
  .skills {
    background: #fff;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .skills_wrapper {
    padding: 0;
  }

  .skills_skill {
    list-style-type: none;
    font-size: 18px;
    @media (max-width: 600px) {
      font-size: 16px;
    }
  }
</style>
