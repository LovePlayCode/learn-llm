import { Card } from '@heroui/react';

const stats = [
  { value: '3', label: '核心模式 群聊/转接/协同', color: 'text-[#6b89a8]' },
  { value: '4', label: '多代理优势 质量·规模·容错·模块', color: 'text-[#c9b687]' },
  { value: '5', label: '构建模块 通信·协调·架构·可视·人介入', color: 'text-[#7a9985]' },
  { value: '2', label: '需复习薄弱点 协同过滤·设计动机', color: 'text-[#9d8660]' },
];

const corePatterns = [
  {
    tag: 'PATTERN 01',
    title: '群聊 Group Chat',
    body: '多对多沟通、信息透明，所有 Agent 在共享对话里讨论。适合开放性问题、头脑风暴和交叉验证。',
  },
  {
    tag: 'PATTERN 02',
    title: '任务转接 Handoff',
    body: '1 对 1 流水线接力，A → B → C 串行处理一份输入。适合任务可线性拆分、每段有明确下一棒的场景。',
  },
  {
    tag: 'PATTERN 03',
    title: '协同过滤 Collaborative',
    body: '多视角并行 + 汇总。同一个客户需求分发给 N 个不同专长的 Agent 独立分析，最后合成综合答案。⚠️ 不是复制流水线！',
  },
];

const fourAdvantages = [
  {
    tag: '质量维度',
    title: '专业化 Specialization',
    body: '每个 Agent 是某领域专家，prompt / 工具集 / 模型可独立优化。同时享受上下文隔离——不被无关信息打扰。',
  },
  {
    tag: '规模维度',
    title: '可扩展性 Scalability',
    body: 'Agent 可并行执行，整体吞吐显著提升。增加新能力 = 加一个新 Agent，不需要改老 Agent。',
  },
  {
    tag: '健壮性维度',
    title: '容错性 Fault Tolerance',
    body: '某 Agent 失败/超时不影响整体，可以局部重试，不需要整链重头来过。',
  },
  {
    tag: '工程维度',
    title: '模块化 Modularity',
    body: '每个 Agent 边界清晰，可独立测试、独立演进、独立替换。这跟微服务火起来是同一个道理。',
  },
];

const horizontalConnections = [
  {
    title: '多代理 vs 单代理 + ReAct 循环：本质差异是什么？',
    body: '① 上下文隔离：单代理所有动作共享同一上下文；多代理每个 Agent 独立。② 专业化：单代理是全能选手，多代理是专家团队。③ 协调层（新增维度）：单代理无此概念；多代理必须回答"谁说话、说给谁、何时停"——这是一个全新的概念维度。',
  },
  {
    title: '多代理 vs 微服务架构：哪里像、哪里不像？',
    body: '【像】都是"专业化拆分 + 协作完成"的工程哲学，模块化、可独立演进、可独立测试。【不像 · 通信】微服务用 API 契约（确定性）；多代理用自然语言/消息（LLM 解读，模糊）。【不像 · 调度】微服务"调用谁"是代码写死；多代理"调用谁"可能是另一个 LLM 决定的（动态）。【不像 · 错误】微服务错误是确定性（503 / 超时 → 重试）；多代理错误是概率性（幻觉 / 漂移 → 需要裁判 Agent 交叉验证）。',
  },
  {
    title: '多代理 vs LangGraph 单图多节点：是同一个东西吗？',
    body: 'LangGraph 的 multi-agent 本质上就是把"每个 Agent 封装成 Node"。但 LangGraph 也支持非 Agent 的 Node（路由、工具、条件分支）。所以：每个 Agent 是 Node，但不是每个 Node 都是 Agent。',
  },
];

const alternatives = [
  {
    tag: '替代 01',
    title: '更长上下文窗口（Gemini 1M / Claude 200k）',
    body: '① 训练成本极高；② 即使长，lost in the middle 问题依然存在；③ 解决了"容量"问题，但解决不了"专业化"和"模块化"问题。',
  },
  {
    tag: '替代 02',
    title: 'Prompt 角色切换（同一 LLM 演不同角色）',
    body: '① 没有真正的上下文隔离——前一个角色说过的话还在历史里污染下一个；② 无法并行——一次只能演一个角色；③ 同一模型能力分布固定，难真正"切换"成专家。',
  },
];

const timeline: Array<[string, string]> = [
  ['STAGE 01', '预设答案给出"上下文隔离"工程嗅觉，但漏了"规模/扩展"那条优势。'],
  ['STAGE 02', '5 步咖啡厅故事第一版：4 项要求漏 3 项（无类比开场 / 无 3 维度 / Agent 用字母）。'],
  ['STAGE 03', '反馈后补出"3 个不同维度"+ 起人话角色名 + 接力镜头，故事完整跑通。'],
  ['STAGE 04', '"上下兄弟问三句"从"想不出" → RAG 演示 → 章节 vs 目的辨析 → 三项全中 + 推理清晰。'],
  ['STAGE 05', '能用 LangGraph 的 State / Node / Edge 反推多代理的实现选择。'],
];

const highlights = [
  {
    title: '工程嗅觉 · "上下文隔离"洞察',
    body: '原文里没有显式写"上下文隔离"作为优势，但你从 LangGraph 实战经验里直接说出了 lost-in-the-middle + 上下文窗口物理限制——这是真正下场写过代码的人才说得出的话。',
  },
  {
    title: '自我修正 · 协同过滤错误回退',
    body: '第一版把协同过滤定义成"派活+验收"（其实是 Orchestrator）——你回去翻原文核对后主动推翻自己。"敢于推翻已说出口的"是非常稀缺的学习品质。',
  },
  {
    title: '餐厅故事的"小黄进协作链"',
    body: '第二版你把小黄从"独立打扫的旁支"改写成了"上菜员端走时立刻清洁，保证下一轮使用"——这一笔不只是塞进来，而是让小黄变成协作链的关键一环。讲故事能力的真正跃迁。',
  },
  {
    title: '上下兄弟工具焊死的瞬间',
    body: '从"想不出" → RAG 演示 → "上"答错方向（章节归属） → 拎出"章节 vs 目的"辨析 → 三项全中 + 自主推理出"工程手段"层。元能力被一次性焊死的复刻。',
  },
];

const blindspots = [
  {
    title: '⚡ 协同过滤 · 第二次复犯（必须重点跟进）',
    body: '子题 3 实现题里，你又把协同过滤画成"复制 3 条流水线"——这跟之前误解为"派活+验收"是同一家族错误：把"协作"理解成"复制"，没抓到"多视角并行 + 汇总"的核心。D2 必须用一道实现题再考一次。',
  },
  {
    title: '设计动机偏"痛点驱动"',
    body: '"为什么是这样设计"还是停在"单代理不行所以多代理"——被动逃避视角。需要补上"主动选择视角"——分工带来的模块化、可测试、可演进本身就是好东西，与单代理是否有瓶颈无关。',
  },
  {
    title: '误用多代理的"坏后果"题没答完',
    body: '题 3 问了 a) 何时不用 + b) 误用会怎样，只答了 a)。误用后果：协调开销暴涨 / 错误源放大 / 调试难度上升。D7 综合题要补。',
  },
  {
    title: 'Edge vs Node 内部逻辑职责分层小混淆',
    body: '实践题里把"待洗盘子数 ≥ 1"这种 Node 内部判断错放在了 Edge 上。Edge 处理"流向哪里"；Node 内部判断处理"我要不要干活"。',
  },
];

const reportCards = [
  {
    title: 'A Layer · 必须深入',
    body: '多代理本质定义、三种核心模式（特别是协同过滤的"多视角并行+汇总"）、上下文隔离归类、4 大优势的 3 个维度。',
  },
  {
    title: 'B Layer · 需要理解',
    body: '5 个构建模块（通信/协调/架构/可视/人介入）、3 种部署架构（集中/去中心/混合）、横向连接到微服务和单代理的对比。',
  },
  {
    title: 'C Layer · 查阅即可',
    body: 'Microsoft 代理框架的具体 API、日志/监控/可视化工具的具体选型、退款流程等具体场景细节。',
  },
];

const tags = [
  '多代理',
  '群聊 / 转接 / 协同过滤',
  '专业化',
  '上下文隔离',
  '上下兄弟问三句',
  'LangGraph',
  'fan-out / fan-in',
  'vs 微服务',
];

function ReviewSection({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="react-review-section">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function Review20260604DuoDaiLi() {
  return (
    <article className="react-review-page">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="react-review-hero">
        <span className="eyebrow">LEARN · 2026 · 06 · 04 · 多代理设计模式 初学</span>
        <h1>Multi-<strong>Agent</strong> 设计模式</h1>
        <p>
          通关 A：能对一位完全不懂 Agent 的同事，用 5 分钟讲清楚"为什么有时候要用多个 AI 而不是一个 AI"，并举一个具体例子。
          本次最大焊点：<em>"上下兄弟问三句"思维工具被一次性焊死</em>，从"想不出"走到三项全中。
        </p>

        <div className="react-review-stats">
          {stats.map((stat, idx) => (
            <Card className="react-review-stat" key={idx}>
              <strong className={stat.color}>{stat.value}</strong>
              <span>{stat.label}</span>
            </Card>
          ))}
        </div>
      </section>

      {/* ═══════════════ SECTION 01 · 三种核心模式 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 01 · 核心模式对比" title="群聊 / 任务转接 / 协同过滤">
        <div className="react-review-grid three">
          {corePatterns.map((pattern, idx) => (
            <Card className="react-review-card" key={idx}>
              <Card.Header>
                <span className="tag text-[#6b89a8] font-mono text-xs">{pattern.tag}</span>
                <Card.Title>{pattern.title}</Card.Title>
              </Card.Header>
              <Card.Content>
                <p className="text-sm text-[#b6bdc7] leading-relaxed">{pattern.body}</p>
              </Card.Content>
            </Card>
          ))}
        </div>

        <pre className="react-review-ascii">{`三种模式的"接力图"对比

  群聊：    A ⇄ B ⇄ C    （多对多，共享对话）

  任务转接： A → B → C    （流水线，一份输入串行）

  协同过滤： 客户需求 ──┬→ 口味派 ─┐
                       ├→ 营养派 ─┤→ 汇总 → 综合推荐
                       └→ 性价比 ─┘
            （fan-out 多视角并行 + fan-in 汇总）`}</pre>
      </ReviewSection>

      {/* ═══════════════ SECTION 02 · 上下兄弟焊死 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 02 · 思维工具焊死" title='"上下文隔离"的上下兄弟分层'>
        <pre className="react-review-ascii">{`第 3 层（爷爷 · 理念目标）
                      专业化（每个 Agent 专注自己的领域）
                              ▲
                              │ 服务于
       ┌──────────────────────┼──────────────────────┐
       │                      │                      │
   第 2 层（兄弟）          第 2 层（兄弟）         第 2 层（兄弟）
   ┌────────────┐         ┌──────────────┐       ┌──────────────┐
   │ 任务拆分   │         │  上下文隔离   │       │ tool 子集划分│
   └────────────┘         └──────────────┘       └──────────────┘
                              │
                              │ 调用了
                              ▼
                      第 1 层（儿子 · 工具）
                      LangGraph: subgraph / 独立 state / message filter

🎯 结论：上下文隔离 = 第 2 层"具体方法" = 工程手段
   为了实现"专业化"这个理念目标，所采用的工程手段。
   做完之后享受到的好处（可重试 / 可验证 / 单点不连累全局）才是工程收益。`}</pre>
      </ReviewSection>

      {/* ═══════════════ SECTION 03 · 4 大优势 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 03 · 4 大优势" title="3 个维度覆盖 4 大优势">
        <div className="react-review-grid two">
          {fourAdvantages.map((adv, idx) => (
            <Card className="react-review-card" key={idx}>
              <Card.Header>
                <span className="tag text-[#c9b687] font-mono text-xs">{adv.tag}</span>
                <Card.Title>{adv.title}</Card.Title>
              </Card.Header>
              <Card.Content>
                <p className="text-sm text-[#b6bdc7] leading-relaxed">{adv.body}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </ReviewSection>

      {/* ═══════════════ SECTION 04 · 横向连接 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 04 · 横向连接" title="vs 单代理  ·  vs 微服务  ·  vs LangGraph">
        {horizontalConnections.map((conn, idx) => (
          <details className="react-review-section details" key={idx}>
            <summary>{conn.title}</summary>
            <div className="detail-body pt-2">
              <p className="text-sm text-[#b6bdc7] leading-relaxed">{conn.body}</p>
            </div>
          </details>
        ))}
      </ReviewSection>

      {/* ═══════════════ SECTION 05 · 替代方案分析 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 05 · 替代方案 · 反事实" title="不用多代理还有什么办法？为何没完全取代？">
        <div className="react-review-grid two">
          {alternatives.map((alt, idx) => (
            <Card className="react-review-card" key={idx}>
              <Card.Header>
                <span className="tag text-[#6b89a8] font-mono text-xs">{alt.tag}</span>
                <Card.Title>{alt.title}</Card.Title>
              </Card.Header>
              <Card.Content>
                <p className="text-sm text-[#b6bdc7] leading-relaxed">{alt.body}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </ReviewSection>

      {/* ═══════════════ SECTION 06 · 思维进步轨迹 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 06 · 元学习" title="本次思维进步轨迹">
        <div className="react-review-timeline">
          {timeline.map((row, idx) => (
            <div className="react-review-timeline-row" key={idx}>
              <strong>{row[0]}</strong>
              <span>{row[1]}</span>
            </div>
          ))}
        </div>
      </ReviewSection>

      {/* ═══════════════ SECTION 07 · 高光时刻 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 07 · 高光时刻" title="今天值得记住的几个瞬间">
        {highlights.map((h, idx) => (
          <Card className="react-review-card" key={idx} style={{ marginBottom: '12px', borderLeft: '3px solid #c9b687' }}>
            <Card.Header>
              <Card.Title style={{ color: '#c9b687' }}>{h.title}</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-sm text-[#b6bdc7] leading-relaxed">{h.body}</p>
            </Card.Content>
          </Card>
        ))}
      </ReviewSection>

      {/* ═══════════════ SECTION 08 · 盲点自查 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 08 · 盲点自查" title="今天暴露的薄弱点 (D2 / D7 重点)">
        {blindspots.map((b, idx) => (
          <Card className="react-review-card" key={idx} style={{ marginBottom: '12px', borderLeft: '3px solid #a66b5f' }}>
            <Card.Header>
              <Card.Title style={{ color: '#c9806f' }}>{b.title}</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-sm text-[#b6bdc7] leading-relaxed">{b.body}</p>
            </Card.Content>
          </Card>
        ))}
      </ReviewSection>

      {/* ═══════════════ SECTION 09 · 掌握矩阵 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 09 · 掌握矩阵" title="A / B / C 三层学习报告">
        <div className="react-review-grid three">
          {reportCards.map((card, idx) => (
            <Card className="react-review-card" key={idx}>
              <Card.Header>
                <Card.Title>{card.title}</Card.Title>
              </Card.Header>
              <Card.Content>
                <p className="text-sm text-[#b6bdc7] leading-relaxed">{card.body}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </ReviewSection>

      {/* ═══════════════ SECTION 10 · 复习计划 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 10 · 艾宾浩斯" title="未来的复习计划">
        <div className="react-review-grid two">
          <Card className="react-review-card">
            <Card.Header><Card.Title>D2 · 06-06</Card.Title></Card.Header>
            <Card.Content>
              <p className="text-sm text-[#b6bdc7] leading-relaxed">3 题闭卷：① 协同过滤本质（必须答出"多视角并行+汇总"）② 三种模式判断决策树 ③ 上下文隔离的"上下兄弟"分层 + 归类。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card">
            <Card.Header><Card.Title>D7 · 06-11</Card.Title></Card.Header>
            <Card.Content>
              <p className="text-sm text-[#b6bdc7] leading-relaxed">5 题含跨章节：① 多代理 vs 微服务对比 ② 用 LangGraph 描述协同过滤的 fan-out/fan-in 实现 ③ 主动选择视角下的设计哲学 ④ 误用多代理的 3 个坏后果 ⑤ 新场景模式选型。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card">
            <Card.Header><Card.Title>D30 · 07-04</Card.Title></Card.Header>
            <Card.Content>
              <p className="text-sm text-[#b6bdc7] leading-relaxed">综合题：用今天学的多代理思维，重新审视一个你以前用 LangGraph 写过的项目，回答"如果重做会用哪种模式 + 为什么"，并把这一章和 Planning Design / 可信赖 Agent 缝合在一起。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card">
            <Card.Header><Card.Title>下一步行动</Card.Title></Card.Header>
            <Card.Content>
              <p className="text-sm text-[#b6bdc7] leading-relaxed">把"协同过滤 = 多视角并行汇总"焊死。每次想起协同过滤，先在脑子里画那张 fan-out/fan-in 图——不画就别答题。</p>
            </Card.Content>
          </Card>
        </div>
      </ReviewSection>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="react-review-footer">
        <div className="flex justify-between flex-wrap gap-4 text-xs font-mono text-[#8a929e] mb-6">
          <div>2026 · 06 · 04 · 多代理设计模式 · 初学 · 通关 A 已达标</div>
          <div>上下兄弟焊死 · 协同过滤待 D2 复检</div>
        </div>
        <div className="tag-row">
          {tags.map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </div>
      </footer>
    </article>
  );
}

export default Review20260604DuoDaiLi;
