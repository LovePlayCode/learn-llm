import { Card } from '@heroui/react';

const stats = [
  { value: '6', label: '合格 Plan 的核心字段', color: 'text-[#6b89a8]' },
  { value: '5', label: '最终闭卷复述问题', color: 'text-[#c9b687]' },
  { value: 'A-', label: '本章当前掌握等级', color: 'text-[#7a9985]' },
];

const coreMechanism = [
  {
    tag: 'Before',
    title: '直接让一个 Agent 做到底',
    body: '容易遇到上下文压力、角色过泛、工具选择混乱、质量不可检查、失败后只能整体重来等问题。',
  },
  {
    tag: 'After',
    title: '先 Planning，再执行',
    body: '先识别最终目标，再拆解子任务、建立依赖、分配 Agent/工具、定义输出和验收标准，最后汇总结果。',
  },
];

const conceptLayers = [
  {
    tag: '上 · 理念层',
    title: 'AI Agent 工作流设计',
    body: 'Planning Design 属于 Agent 系统中的工作流组织能力，负责让复杂任务有全局结构。',
  },
  {
    tag: '中 · 机制层',
    title: 'Planning Design',
    body: '把模糊或复杂请求转化为可执行、可分配、可检查、可迭代的计划。',
  },
  {
    tag: '下 · 操作层',
    title: '底层操作',
    body: '任务拆分、结构化输出、路由、工具调用、依赖管理、验收检查、重新规划。',
  },
];

const checklistItems = [
  { title: '清晰的总体目标', body: '用户最终要什么。' },
  { title: '全局约束', body: '预算、时间、偏好、质量要求、不可违背条件。' },
  { title: '子任务列表', body: '每个任务边界清楚，可单独执行。' },
  { title: '依赖关系', body: '谁依赖谁，哪些步骤可以并行，哪些必须串行。' },
  { title: 'Agent / 工具分配', body: '每个子任务交给最合适的执行者。' },
  { title: '预期输出与验收标准', body: '结果如何被后续步骤使用，如何判断是否完成。' },
];

const comparisonScenarios = [
  {
    tag: 'Weak Plan',
    title: '只是列出任务',
    items: [
      '酒店、行程、交通、餐饮。',
      '缺少依赖关系。',
      '缺少输出格式。',
      '缺少验收标准。',
    ],
  },
  {
    tag: 'Strong Plan',
    title: '定义执行链路',
    items: [
      '酒店候选影响行程规划。',
      '行程结果影响交通方案。',
      '行程位置和酒店位置影响餐饮推荐。',
      '最终由汇总 Agent 生成完整方案。',
    ],
  },
];

const connections = [
  {
    title: 'Planning 与工具调用的关系',
    body: '工具调用是底层执行手段，Planning 决定哪些子任务需要调用哪些工具，以及工具结果如何进入下一步。',
  },
  {
    title: 'Planning 与多 Agent 协作的关系',
    body: '在系统设计层，它们可以是兄弟能力；在具体执行层，Planning 可以调用多 Agent 协作，把不同子任务分配给专门代理。',
  },
  {
    title: 'Planning 与结构化输出的关系',
    body: '结构化输出是让计划可被机器解析和路由的关键形式。没有结构化输出，Plan 容易停留在自然语言说明，难以稳定执行。',
  },
  {
    title: 'Planning 与重新规划的关系',
    body: 'Planning 不是一次性动作。用户改需求、工具失败、结果不完整、现实约束变化时，都可能触发局部重试或重新规划。',
  },
];

const timeline = [
  ['Stage 01', '从“生成 plan 并分配 Agent”开始，抓住主流程，但任务拆分和依赖还不够显性。'],
  ['Stage 02', '能写出目标、约束、Agent 分配 and JSON 输出，开始具备结构化计划意识。'],
  ['Stage 03', '意识到酒店、行程、交通、餐饮之间不是简单并行，而是存在依赖链。'],
  ['Stage 04', '能用上下兄弟定位 Planning：上属工作流设计，下调任务拆分、路由、工具调用、重新规划。'],
];

const reportCards = [
  {
    title: 'A Layer · 必须掌握',
    body: '总体目标识别、任务拆分、Agent/工具分配、依赖关系、验收与汇总。当前掌握较稳，但第一题“解决什么问题”仍需表达更精确。',
  },
  {
    title: 'B Layer · 需要理解',
    body: '结构化输出、多 Agent 编排、迭代重新规划。已经理解大方向，后续要通过代码或伪代码继续加固。',
  },
  {
    title: 'C Layer · 查阅即可',
    body: 'Pydantic 具体写法、框架 API、Magentic-One 细节、特定字段命名规则。需要时再查，不必现在死记。',
  },
];

const reviewPlan = [
  ['第 2 天', '闭卷回答：合格 Plan 至少包含哪些字段？为什么依赖关系不能省略？举一个任务依赖例子。'],
  ['第 7 天', '用一个新场景重新设计 Planning JSON：目标、约束、子任务、依赖、Agent 分配、最终汇总。'],
  ['第 30 天', '实现或伪实现一个 Planning Agent：输入用户请求，输出结构化计划，并能根据失败结果重新规划。'],
  ['下一步行动', '把“列任务”升级为“写依赖链”。每次遇到复杂 Agent 需求，都先画出输入、产出和依赖。'],
];

const tags = [
  'Planning Design',
  'AI Agent Workflow',
  'Structured Output',
  'Spaced Repetition',
  'Ebbinghaus',
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

function Review20260603PlanningDesign() {
  return (
    <article className="react-review-page">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="react-review-hero">
        <span className="eyebrow">LEARN · 2026 · 06 · 03 · Planning Design 规划设计学习报告</span>
        <h1>Planning <strong>Design</strong></h1>
        <p>
          本次学习目标：学会把复杂用户请求拆成多个可执行子任务，并分配给合适的 Agent 或工具，同时保持全局目标、依赖关系和验收标准不丢失。
        </p>

        <div className="react-review-stats">
          {stats.map((stat, idx) => (
            <Card className="react-review-stat" key={idx} variant="secondary">
              <strong className={stat.color}>{stat.value}</strong>
              <span>{stat.label}</span>
            </Card>
          ))}
        </div>
      </section>

      {/* ═══════════════ SECTION 01 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 01 · 核心机制" title="从模糊请求到可执行工作流">
        <div className="react-review-grid two">
          {coreMechanism.map((item, idx) => (
            <Card className="react-review-card" key={idx} variant="default">
              <Card.Header>
                <span className="tag text-[#6b89a8] font-mono text-xs">{item.tag}</span>
                <Card.Title>{item.title}</Card.Title>
              </Card.Header>
              <Card.Content>
                <p className="text-sm text-[#b6bdc7] leading-relaxed">{item.body}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </ReviewSection>

      {/* ═══════════════ SECTION 02 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 02 · 流程映射" title="ASCII 规划设计工作流">
        <pre className="react-review-ascii">{`用户复杂请求
    │
    ▼
识别总体目标 ── 明确用户最终要达成什么
    │
    ▼
拆分子任务 ── 把复杂任务切成边界清楚的小任务
    │
    ▼
建立依赖关系 ── 判断谁先做、谁依赖谁、哪些可并行
    │
    ▼
分配 Agent / 工具 ── 专门任务交给专门能力
    │
    ▼
结构化输出 ── JSON / Schema / Pydantic 便于系统解析
    │
    ▼
检查与汇总 ── 对照全局约束和验收标准生成最终答案
    │
    ▼
异常或需求变化 ── 触发局部重试或重新规划`}</pre>
      </ReviewSection>

      {/* ═══════════════ SECTION 03 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 03 · 概念分层" title="上下兄弟：系统定位与底层零件">
        <div className="react-review-grid three">
          {conceptLayers.map((layer, idx) => (
            <Card className="react-review-card" key={idx} variant="default">
              <Card.Header>
                <span className="tag text-[#c9b687] font-mono text-xs">{layer.tag}</span>
                <Card.Title>{layer.title}</Card.Title>
              </Card.Header>
              <Card.Content>
                <p className="text-sm text-[#b6bdc7] leading-relaxed">{layer.body}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </ReviewSection>

      {/* ═══════════════ SECTION 04 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 04 · 标准规范" title="合格 Plan 的核心字段清单">
        <ol className="react-review-checklist">
          {checklistItems.map((item, idx) => (
            <li key={idx}>
              <strong>{item.title}</strong> — {item.body}
            </li>
          ))}
        </ol>
      </ReviewSection>

      {/* ═══════════════ SECTION 05 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 05 · 实战对比" title="关键对比：清单列任务 vs 依赖流设计">
        <div className="react-review-grid two">
          {comparisonScenarios.map((sc, idx) => (
            <Card className="react-review-card" key={idx} variant="default">
              <Card.Header>
                <span className="tag text-[#6b89a8] font-mono text-xs">{sc.tag}</span>
                <Card.Title>{sc.title}</Card.Title>
              </Card.Header>
              <Card.Content>
                <ul className="list-disc pl-4 space-y-2">
                  {sc.items.map((item, i) => (
                    <li className="text-sm text-[#b6bdc7]" key={i}>{item}</li>
                  ))}
                </ul>
              </Card.Content>
            </Card>
          ))}
        </div>
      </ReviewSection>

      {/* ═══════════════ SECTION 06 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 06 · 深度关联" title="横向连接与深度追问">
        {connections.map((c, idx) => (
          <details className="react-review-section details" key={idx}>
            <summary>{c.title}</summary>
            <div className="detail-body pt-2">
              <p className="text-sm text-[#b6bdc7] leading-relaxed">{c.body}</p>
            </div>
          </details>
        ))}
      </ReviewSection>

      {/* ═══════════════ SECTION 07 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 07 · 元学习" title="本次思维进步轨迹">
        <div className="react-review-timeline">
          {timeline.map((row, idx) => (
            <div className="react-review-timeline-row" key={idx}>
              <strong>{row[0]}</strong>
              <span>{row[1]}</span>
            </div>
          ))}
        </div>
      </ReviewSection>

      {/* ═══════════════ SECTION 08 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 08 · 掌握矩阵" title="学习报告网格">
        <div className="react-review-grid three">
          {reportCards.map((card, idx) => (
            <Card className="react-review-card" key={idx} variant="default">
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

      {/* ═══════════════ SECTION 09 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 09 · 艾宾浩斯" title="时间线上的复习计划">
        <div className="react-review-grid two">
          {reviewPlan.map((row, idx) => (
            <Card className="react-review-card" key={idx} variant="default">
              <Card.Header>
                <Card.Title>{row[0]}</Card.Title>
              </Card.Header>
              <Card.Content>
                <p className="text-sm text-[#b6bdc7] leading-relaxed">{row[1]}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </ReviewSection>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="react-review-footer">
        <div className="flex justify-between flex-wrap gap-4 text-xs font-mono text-[#8a929e] mb-6">
          <div>2026 · 06 · 03 · Planning Design 初学 · 6 核心字段 · A- 掌握</div>
          <div>大模型理解与规划 · 依赖关系设计 · 异常重规划</div>
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

export default Review20260603PlanningDesign;
