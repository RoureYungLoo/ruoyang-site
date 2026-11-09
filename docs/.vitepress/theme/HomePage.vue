<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

const searchInput = ref(null);
const query = ref("");
const activePath = ref("foundation");

const topics = [
  {
    icon: "01",
    title: "计算机基础",
    description: "从底层原理建立稳定的知识骨架。",
    tags: [
      { label: "网络", link: "/computer-science-fundamentals/computer-networks/" },
      { label: "操作系统", link: "/computer-science-fundamentals/operating-systems/" },
      { label: "数据结构", link: "/computer-science-fundamentals/data-structures/" },
      { label: "算法", link: "/computer-science-fundamentals/algorithm-analysis-and-design/" },
    ],
    link: "/computer-science-fundamentals/computer-networks/",
    accent: "blue",
  },
  {
    icon: "02",
    title: "编程语言",
    description: "语言特性、工程实践与运行机制。",
    tags: [
      { label: "Java", link: "/programming-languages/java/" },
      { label: "C", link: "/programming-languages/c/" },
      { label: "C++", link: "/programming-languages/c-plus-plus/" },
      { label: "JavaScript", link: "/programming-languages/javascript/" },
    ],
    link: "/programming-languages/java/",
    accent: "violet",
  },
  {
    icon: "03",
    title: "数据与存储",
    description: "关系型数据库、缓存与数据系统。",
    tags: [
      { label: "MySQL", link: "/databases/relational/mysql/" },
      { label: "Redis", link: "/databases/non-relational/redis/" },
      { label: "数据库概览", link: "/databases/" },
      { label: "MongoDB", link: "/databases/non-relational/mongodb/" },
    ],
    link: "/databases/",
    accent: "green",
  },
  {
    icon: "04",
    title: "中间件",
    description: "构建可靠服务所需的基础设施。",
    tags: [
      { label: "Kafka", link: "/message-queues/kafka/" },
      { label: "RocketMQ", link: "/message-queues/rocketmq/" },
      { label: "Nginx", link: "/nginx/" },
      { label: "ElasticSearch", link: "/middleware/elasticsearch/" },
    ],
    link: "/middleware/elasticsearch/",
    accent: "orange",
  },
  {
    icon: "05",
    title: "Spring 生态",
    description: "Java 后端开发的核心框架体系。",
    tags: [
      { label: "Spring", link: "/spring/framework/" },
      { label: "Spring Boot", link: "/spring/boot/" },
      { label: "Spring Cloud", link: "/spring/cloud/" },
    ],
    link: "/spring/framework/",
    accent: "lime",
  },
  {
    icon: "06",
    title: "面试与实践",
    description: "把零散知识转化为解决问题的能力。",
    tags: [
      { label: "Java", link: "/interviews/java/base" },
      { label: "MySQL", link: "/interviews/mysql/mysql" },
      { label: "Redis", link: "/interviews/redis/redis" },
      { label: "场景题", link: "/interviews/scenes/" },
    ],
    link: "/interviews/",
    accent: "pink",
  },
];

const learningPaths = [
  {
    id: "foundation",
    label: "基础进阶",
    title: "从原理到实现",
    description: "适合系统补齐计算机基础，理解软件运行的底层逻辑。",
    steps: [
      { title: "计算机网络", detail: "协议、分层与网络实践", link: "/computer-science-fundamentals/computer-networks/" },
      { title: "操作系统", detail: "进程、内存与 Linux", link: "/computer-science-fundamentals/operating-systems/" },
      { title: "数据结构", detail: "组织和处理数据的方法", link: "/computer-science-fundamentals/data-structures/" },
      { title: "算法分析", detail: "复杂度、设计与实现", link: "/computer-science-fundamentals/algorithm-analysis-and-design/" },
    ],
  },
  {
    id: "backend",
    label: "Java 后端",
    title: "构建后端工程能力",
    description: "从语言基础出发，逐步进入框架、数据库和服务基础设施。",
    steps: [
      { title: "Java 基础", detail: "语法、类型与面向对象", link: "/programming-languages/java/" },
      { title: "Spring Framework", detail: "容器与应用基础", link: "/spring/framework/" },
      { title: "数据存储", detail: "MySQL、Redis 与 MongoDB", link: "/databases/" },
      { title: "消息队列", detail: "Kafka 与 RocketMQ", link: "/message-queues/kafka/" },
    ],
  },
  {
    id: "interview",
    label: "面试复习",
    title: "建立可表达的知识体系",
    description: "围绕高频主题快速回顾，并通过场景问题检验理解深度。",
    steps: [
      { title: "Java 面试题", detail: "集合、并发、JVM 与反射", link: "/interviews/java/base" },
      { title: "MySQL 面试题", detail: "索引、事务与优化", link: "/interviews/mysql/mysql" },
      { title: "Redis 面试题", detail: "数据结构、缓存与高可用", link: "/interviews/redis/redis" },
      { title: "场景面试题", detail: "综合分析与方案设计", link: "/interviews/scenes/" },
    ],
  },
];

const updates = [
  { date: "09.07", title: "C 语言软件与项目实践", link: "/programming-languages/c/C-based_software", type: "C" },
  { date: "09.05", title: "VPN 原理与实践", link: "/computer-science-fundamentals/computer-networks/vpn", type: "网络" },
  { date: "08.28", title: "API 测试工具技术选型", link: "/graphical-user-interface/", type: "工具" },
  { date: "08.27", title: "大数据与算法", link: "/programmatic-advertising/big_data_and_algorithm", type: "架构" },
];

const filteredTopics = computed(() => {
  const keyword = query.value.trim().toLocaleLowerCase();
  if (!keyword) return topics;

  return topics.filter((topic) =>
    [topic.title, topic.description, ...topic.tags.map((tag) => tag.label)]
      .join(" ")
      .toLocaleLowerCase()
      .includes(keyword),
  );
});

const selectedPath = computed(() =>
  learningPaths.find((path) => path.id === activePath.value),
);

function handleShortcut(event) {
  if (event.key === "/" && !event.ctrlKey && !event.metaKey && !event.altKey) {
    const target = event.target;
    if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) return;
    event.preventDefault();
    searchInput.value?.focus();
  }
}

onMounted(() => window.addEventListener("keydown", handleShortcut));
onBeforeUnmount(() => window.removeEventListener("keydown", handleShortcut));
</script>

<template>
  <main class="knowledge-home">
    <section class="hero-section">
      <div class="hero-orb hero-orb-one" aria-hidden="true"></div>
      <div class="hero-orb hero-orb-two" aria-hidden="true"></div>
      <div class="hero-grid">
        <div class="hero-content">
          <p class="eyebrow"><span></span> PERSONAL KNOWLEDGE BASE · 持续更新</p>
          <h1>记录所学，<br /><strong>连接知识。</strong></h1>
          <p class="hero-copy">
            关于软件开发、计算机基础与工程实践的持续整理。<br />从一个问题出发，找到下一条值得探索的路径。
          </p>
          <div class="hero-actions">
            <a class="primary-action" href="#knowledge">浏览知识领域 <span>→</span></a>
            <a class="secondary-action" href="/latest">查看最近更新</a>
          </div>
          <label class="topic-search">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" /></svg>
            <input ref="searchInput" v-model="query" type="search" aria-label="筛选首页知识领域" placeholder="筛选知识领域，例如 Java、网络、Redis" />
            <kbd>/</kbd>
          </label>
        </div>

        <div class="knowledge-visual" aria-label="知识地图">
          <div class="visual-header"><span>KNOWLEDGE MAP</span><i></i></div>
          <div class="map-canvas">
            <svg class="map-lines" viewBox="0 0 400 330" aria-hidden="true">
              <path d="M200 165 92 82M200 165 306 72M200 165 326 236M200 165 92 252" />
              <circle cx="200" cy="165" r="94" />
            </svg>
            <div class="map-core"><b>Tech</b><span>Notes</span></div>
            <a class="map-node node-one" href="/computer-science-fundamentals/computer-networks/"><small>01</small><strong>基础</strong></a>
            <a class="map-node node-two" href="/programming-languages/java/"><small>02</small><strong>语言</strong></a>
            <a class="map-node node-three" href="/databases/"><small>03</small><strong>数据</strong></a>
            <a class="map-node node-four" href="/interviews/"><small>04</small><strong>实践</strong></a>
            <span class="map-pulse pulse-one"></span>
            <span class="map-pulse pulse-two"></span>
          </div>
          <div class="visual-footer">
            <span><i></i> 持续构建中</span>
            <a href="#knowledge">浏览全部领域 ↓</a>
          </div>
        </div>
      </div>
      <div class="hero-metrics" aria-label="知识库数据">
        <div><strong>130+</strong><span>篇笔记</span></div>
        <div><strong>10+</strong><span>知识领域</span></div>
        <div><strong>持续</strong><span>整理更新</span></div>
      </div>
    </section>

    <section id="knowledge" class="section-block topics-section">
      <div class="section-heading">
        <div><p class="section-index">01 / KNOWLEDGE</p><h2>探索知识领域</h2></div>
        <p>{{ query ? `找到 ${filteredTopics.length} 个相关领域` : "从核心主题开始，逐步建立自己的知识地图。" }}</p>
      </div>
      <div v-if="filteredTopics.length" class="topic-grid">
        <article v-for="topic in filteredTopics" :key="topic.title" class="topic-card" :class="`accent-${topic.accent}`">
          <div class="topic-number">{{ topic.icon }}</div>
          <a class="topic-arrow" :href="topic.link" :aria-label="`查看${topic.title}`">↗</a>
          <h3><a :href="topic.link">{{ topic.title }}</a></h3>
          <p>{{ topic.description }}</p>
          <div class="topic-tags">
            <a v-for="tag in topic.tags" :key="tag.label" :href="tag.link">{{ tag.label }}</a>
          </div>
        </article>
      </div>
      <div v-else class="empty-state">
        <strong>暂时没有匹配的领域</strong>
        <p>换个关键词试试，或清除筛选查看全部内容。</p>
        <button type="button" @click="query = ''">清除筛选</button>
      </div>
    </section>

    <section class="section-block path-section">
      <div class="section-heading">
        <div><p class="section-index">02 / ROADMAP</p><h2>选择一条学习路径</h2></div>
      </div>
      <div class="path-layout">
        <div class="path-tabs" role="tablist" aria-label="学习路径">
          <button v-for="path in learningPaths" :key="path.id" type="button" role="tab" :aria-selected="activePath === path.id" :class="{ active: activePath === path.id }" @click="activePath = path.id">
            {{ path.label }} <span>→</span>
          </button>
        </div>
        <div class="path-content">
          <div class="path-intro"><p>CURATED PATH</p><h3>{{ selectedPath.title }}</h3><span>{{ selectedPath.description }}</span></div>
          <div class="path-steps">
            <a v-for="(step, index) in selectedPath.steps" :key="step.title" :href="step.link">
              <b>{{ String(index + 1).padStart(2, "0") }}</b>
              <span><strong>{{ step.title }}</strong><small>{{ step.detail }}</small></span>
              <i>↗</i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section-block updates-section">
      <div class="section-heading">
        <div><p class="section-index">03 / RECENT</p><h2>最近更新</h2></div>
        <a href="/latest">查看归档 →</a>
      </div>
      <div class="update-list">
        <a v-for="update in updates" :key="update.title" :href="update.link">
          <time>{{ update.date }}</time><span class="update-type">{{ update.type }}</span><strong>{{ update.title }}</strong><i>阅读 →</i>
        </a>
      </div>
    </section>

    <section class="home-quote">
      <p>“学而不思则罔，思而不学则殆。”</p>
      <span>保持记录，也保持思考。</span>
    </section>
  </main>
</template>

<style scoped>
:global(.custom-home-page .VPDoc) { padding: 0; }
:global(.custom-home-page .VPDoc .container), :global(.custom-home-page .VPDoc .content) { max-width: none; }
:global(.custom-home-page .VPDoc .content-container) { max-width: none; }
.knowledge-home { --home-accent: #5b6cff; width: min(92%, 1440px); margin: 0 auto; padding: 28px 24px 80px; color: var(--vp-c-text-1); }
.hero-section { position: relative; display: flex; flex-direction: column; justify-content: center; overflow: hidden; padding: 52px clamp(28px, 5.5vw, 76px) 30px; border: 1px solid var(--vp-c-divider); border-radius: 28px; background: linear-gradient(135deg, var(--vp-c-bg-soft), var(--vp-c-bg) 60%); isolation: isolate; }
.hero-grid { position: relative; z-index: 2; display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(320px, .82fr); align-items: center; gap: clamp(34px, 5vw, 72px); }
.hero-content { min-width: 0; }
.eyebrow, .section-index { color: var(--home-accent); font: 700 11px/1.4 ui-monospace, SFMono-Regular, Menlo, monospace; letter-spacing: .18em; }
.eyebrow span { display: inline-block; width: 24px; height: 1px; margin: 0 10px 3px 0; background: currentColor; }
.hero-section h1 { margin: 20px 0; max-width: 720px; font-size: clamp(48px, 6vw, 76px); line-height: .98; letter-spacing: -.055em; font-weight: 760; }
.hero-section h1 strong { color: transparent; background: linear-gradient(110deg, #5b6cff, #a855f7 55%, #ec4899); background-clip: text; -webkit-background-clip: text; }
.hero-copy { color: var(--vp-c-text-2); font-size: clamp(16px, 2vw, 19px); line-height: 1.8; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 26px; }
.hero-actions a { display: inline-flex; align-items: center; justify-content: center; height: 46px; padding: 0 22px; border-radius: 12px; font-weight: 650; transition: transform .2s, box-shadow .2s, border-color .2s; }
.hero-actions a:hover { transform: translateY(-2px); }
.primary-action { color: white !important; background: var(--home-accent); box-shadow: 0 12px 30px color-mix(in srgb, var(--home-accent) 28%, transparent); }
.primary-action span { margin-left: 18px; }
.secondary-action { color: var(--vp-c-text-1) !important; border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg); }
.topic-search { display: flex; align-items: center; gap: 12px; max-width: 570px; height: 50px; margin-top: 28px; padding: 0 16px; border: 1px solid var(--vp-c-divider); border-radius: 14px; background: color-mix(in srgb, var(--vp-c-bg) 86%, transparent); box-shadow: 0 12px 40px rgba(0,0,0,.06); transition: border-color .2s, box-shadow .2s; }
.topic-search:focus-within { border-color: var(--home-accent); box-shadow: 0 0 0 3px color-mix(in srgb, var(--home-accent) 14%, transparent); }
.topic-search svg { width: 20px; fill: none; stroke: var(--vp-c-text-3); stroke-width: 1.8; }
.topic-search input { min-width: 0; flex: 1; border: 0; outline: 0; color: var(--vp-c-text-1); background: transparent; font: inherit; }
.topic-search kbd { padding: 2px 8px; border: 1px solid var(--vp-c-divider); border-radius: 6px; color: var(--vp-c-text-3); background: var(--vp-c-bg-soft); }
.hero-metrics { position: relative; z-index: 2; display: flex; gap: clamp(28px, 6vw, 72px); margin-top: 30px; padding-top: 22px; border-top: 1px solid color-mix(in srgb, var(--vp-c-divider) 72%, transparent); }
.hero-metrics div { display: grid; gap: 2px; }
.hero-metrics strong { font-size: 25px; }
.hero-metrics span { color: var(--vp-c-text-3); font-size: 12px; }
.knowledge-visual { position: relative; min-height: 380px; overflow: hidden; border: 1px solid color-mix(in srgb, var(--home-accent) 24%, var(--vp-c-divider)); border-radius: 24px; background: color-mix(in srgb, var(--vp-c-bg) 82%, transparent); box-shadow: 0 24px 60px rgba(28, 35, 90, .11); backdrop-filter: blur(12px); }
.visual-header, .visual-footer { position: relative; z-index: 3; display: flex; align-items: center; justify-content: space-between; padding: 18px 20px; color: var(--vp-c-text-3); font: 700 10px ui-monospace, monospace; letter-spacing: .12em; }
.visual-header { border-bottom: 1px solid var(--vp-c-divider); }
.visual-header i { width: 7px; height: 7px; border-radius: 50%; background: #10b981; box-shadow: 0 0 0 5px rgba(16,185,129,.12); }
.map-canvas { position: relative; height: 280px; }
.map-lines { position: absolute; inset: 0; width: 100%; height: 100%; fill: none; stroke: color-mix(in srgb, var(--home-accent) 26%, var(--vp-c-divider)); stroke-width: 1; stroke-dasharray: 4 7; }
.map-lines circle { stroke-dasharray: 2 9; transform-origin: 200px 165px; animation: orbit 28s linear infinite; }
.map-core { position: absolute; top: 50%; left: 50%; display: grid; place-content: center; width: 104px; height: 104px; border: 1px solid color-mix(in srgb, var(--home-accent) 48%, transparent); border-radius: 50%; color: white; text-align: center; background: linear-gradient(145deg, #6978ff, #7450d8); box-shadow: 0 18px 45px rgba(91,108,255,.3); transform: translate(-50%, -50%); }
.map-core b { font-size: 20px; line-height: 1; }.map-core span { margin-top: 5px; font: 10px ui-monospace, monospace; letter-spacing: .16em; opacity: .75; }
.map-node { position: absolute; z-index: 2; display: grid; gap: 2px; min-width: 72px; padding: 11px 13px; border: 1px solid var(--vp-c-divider); border-radius: 12px; color: var(--vp-c-text-1) !important; background: var(--vp-c-bg); box-shadow: 0 8px 24px rgba(0,0,0,.08); transition: transform .2s, border-color .2s, box-shadow .2s; }
.map-node:hover { z-index: 4; border-color: var(--home-accent); box-shadow: 0 12px 30px rgba(91,108,255,.18); transform: translateY(-4px); }
.map-node small { color: var(--home-accent); font: 700 9px ui-monospace, monospace; }.map-node strong { font-size: 14px; }
.node-one { top: 35px; left: 22px; }.node-two { top: 24px; right: 20px; }.node-three { right: 12px; bottom: 28px; }.node-four { bottom: 18px; left: 24px; }
.map-pulse { position: absolute; width: 8px; height: 8px; border-radius: 50%; background: var(--home-accent); box-shadow: 0 0 0 7px color-mix(in srgb, var(--home-accent) 12%, transparent); animation: pulse 2.4s ease-out infinite; }.pulse-one { top: 82px; left: 48%; }.pulse-two { right: 28%; bottom: 60px; animation-delay: -1.2s; }
.visual-footer { border-top: 1px solid var(--vp-c-divider); letter-spacing: 0; }.visual-footer > span { display: flex; align-items: center; gap: 8px; }.visual-footer > span i { width: 6px; height: 6px; border-radius: 50%; background: #10b981; }.visual-footer a { color: var(--home-accent); }
.hero-orb { position: absolute; z-index: 0; border-radius: 50%; filter: blur(2px); opacity: .55; animation: drift 9s ease-in-out infinite alternate; }
.hero-orb-one { width: 360px; height: 360px; top: -140px; right: -80px; background: radial-gradient(circle at 35% 35%, rgba(91,108,255,.5), transparent 66%); }
.hero-orb-two { width: 300px; height: 300px; right: 14%; bottom: -180px; background: radial-gradient(circle, rgba(236,72,153,.3), transparent 68%); animation-delay: -4s; }
.section-block { padding-top: 96px; }
.section-heading { display: flex; align-items: end; justify-content: space-between; gap: 30px; margin-bottom: 30px; }
.section-heading h2 { margin: 7px 0 0; font-size: clamp(28px, 4vw, 42px); letter-spacing: -.035em; }
.section-heading > p, .section-heading > a { max-width: 430px; margin: 0; color: var(--vp-c-text-2); }
.topic-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.topic-card { --card-accent: #5b6cff; position: relative; min-height: 280px; padding: 28px; overflow: hidden; border: 1px solid var(--vp-c-divider); border-radius: 20px; color: var(--vp-c-text-1) !important; background: var(--vp-c-bg-soft); transition: transform .25s, border-color .25s, box-shadow .25s; }
.topic-card::after { content: ""; position: absolute; width: 150px; height: 150px; right: -75px; bottom: -75px; border-radius: 50%; background: color-mix(in srgb, var(--card-accent) 18%, transparent); transition: transform .3s; }
.topic-card:hover { transform: translateY(-5px); border-color: color-mix(in srgb, var(--card-accent) 55%, var(--vp-c-divider)); box-shadow: 0 18px 45px rgba(0,0,0,.09); }
.topic-card:hover::after { transform: scale(1.3); }
.topic-number { color: var(--card-accent); font: 700 12px ui-monospace, monospace; }
.topic-arrow { position: absolute; top: 24px; right: 26px; font-size: 20px; transition: transform .2s; }
.topic-card:hover .topic-arrow { transform: translate(3px, -3px); }
.topic-card h3 { margin: 42px 0 10px; font-size: 23px; }
.topic-card h3 a { color: var(--vp-c-text-1); }
.topic-card p { min-height: 50px; margin: 0; color: var(--vp-c-text-2); line-height: 1.65; }
.topic-tags { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 24px; }
.topic-tags a { position: relative; z-index: 1; padding: 4px 9px; border: 1px solid transparent; border-radius: 6px; color: var(--vp-c-text-2); background: var(--vp-c-bg); font-size: 11px; transition: color .2s, border-color .2s, transform .2s; }
.topic-tags a:hover { color: var(--card-accent); border-color: var(--card-accent); transform: translateY(-2px); }
.accent-violet { --card-accent: #8b5cf6; }.accent-green { --card-accent: #10b981; }.accent-orange { --card-accent: #f59e0b; }.accent-lime { --card-accent: #65a30d; }.accent-pink { --card-accent: #ec4899; }
.empty-state { padding: 60px 20px; border: 1px dashed var(--vp-c-divider); border-radius: 20px; text-align: center; }
.empty-state p { color: var(--vp-c-text-2); }.empty-state button { padding: 9px 16px; border-radius: 9px; color: white; background: var(--home-accent); }
.path-layout { display: grid; grid-template-columns: 240px 1fr; overflow: hidden; border: 1px solid var(--vp-c-divider); border-radius: 22px; background: var(--vp-c-bg-soft); }
.path-tabs { padding: 18px; border-right: 1px solid var(--vp-c-divider); }
.path-tabs button { display: flex; justify-content: space-between; width: 100%; padding: 15px 14px; border-radius: 10px; color: var(--vp-c-text-2); text-align: left; transition: color .2s, background .2s; }
.path-tabs button:hover, .path-tabs button.active { color: var(--vp-c-text-1); background: var(--vp-c-bg); }
.path-tabs button.active { box-shadow: inset 3px 0 var(--home-accent); }
.path-content { padding: clamp(28px, 5vw, 52px); }
.path-intro p { color: var(--home-accent); font: 700 10px ui-monospace, monospace; letter-spacing: .16em; }.path-intro h3 { margin: 8px 0; font-size: 30px; }.path-intro > span { color: var(--vp-c-text-2); }
.path-steps { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 34px; }
.path-steps a { display: flex; align-items: center; gap: 15px; padding: 16px; border: 1px solid var(--vp-c-divider); border-radius: 12px; color: var(--vp-c-text-1) !important; background: var(--vp-c-bg); transition: border-color .2s, transform .2s; }
.path-steps a:hover { border-color: var(--home-accent); transform: translateX(3px); }.path-steps b { color: var(--home-accent); font: 700 11px ui-monospace, monospace; }.path-steps span { display: grid; flex: 1; }.path-steps small { margin-top: 3px; color: var(--vp-c-text-3); }.path-steps i { font-style: normal; }
.update-list { border-top: 1px solid var(--vp-c-divider); }
.update-list a { display: grid; grid-template-columns: 70px 70px 1fr auto; align-items: center; gap: 16px; padding: 20px 8px; border-bottom: 1px solid var(--vp-c-divider); color: var(--vp-c-text-1) !important; transition: padding .2s, background .2s; }
.update-list a:hover { padding-left: 16px; background: var(--vp-c-bg-soft); }.update-list time { color: var(--vp-c-text-3); font: 12px ui-monospace, monospace; }.update-type { color: var(--home-accent); font-size: 12px; }.update-list i { color: var(--vp-c-text-3); font-size: 12px; font-style: normal; }
.home-quote { margin-top: 96px; padding: 60px 24px; border-radius: 24px; text-align: center; background: linear-gradient(120deg, color-mix(in srgb, var(--home-accent) 12%, var(--vp-c-bg-soft)), var(--vp-c-bg-soft)); }.home-quote p { margin: 0 0 12px; font: 600 clamp(24px, 4vw, 38px)/1.4 serif; }.home-quote span { color: var(--vp-c-text-2); }
@keyframes drift { to { transform: translate3d(-35px, 25px, 0) scale(1.08); } }
@keyframes orbit { to { transform: rotate(360deg); } }
@keyframes pulse { 70%, 100% { box-shadow: 0 0 0 15px transparent; } }
@media (max-width: 960px) { .hero-grid { grid-template-columns: 1fr; }.knowledge-visual { display: none; }.hero-content { max-width: 720px; }.hero-section { padding-top: 48px; } }
@media (max-width: 780px) { .knowledge-home { width: 100%; padding: 14px 16px 60px; }.hero-section { padding: 38px 22px 26px; border-radius: 22px; }.eyebrow { font-size: 9px; letter-spacing: .12em; }.hero-section h1 { margin: 18px 0; font-size: clamp(43px, 13vw, 54px); }.hero-copy { font-size: 15px; line-height: 1.7; }.hero-copy br { display: none; }.hero-actions { margin-top: 22px; }.hero-actions a { height: 44px; padding: 0 17px; }.topic-search { height: 48px; margin-top: 24px; }.topic-search kbd { display: none; }.hero-metrics { justify-content: space-between; gap: 14px; margin-top: 26px; padding-top: 18px; }.hero-metrics strong { font-size: 20px; }.hero-metrics span { font-size: 11px; }.topic-grid { grid-template-columns: 1fr; }.section-heading { align-items: start; flex-direction: column; }.path-layout { grid-template-columns: 1fr; }.path-tabs { display: flex; gap: 6px; overflow-x: auto; border-right: 0; border-bottom: 1px solid var(--vp-c-divider); }.path-tabs button { min-width: 120px; }.path-tabs button.active { box-shadow: inset 0 -3px var(--home-accent); }.path-steps { grid-template-columns: 1fr; }.update-list a { grid-template-columns: 54px 54px 1fr; }.update-list i { display: none; } }
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; } }
</style>
