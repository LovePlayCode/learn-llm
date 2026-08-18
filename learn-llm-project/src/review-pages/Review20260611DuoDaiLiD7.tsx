import { Card } from '@heroui/react';

const stats = [
  { value: '5', label: '总题量', color: 'text-[#c9b687]' },
  { value: '5', label: '通过', color: 'text-[#5a9a7a]' },
  { value: '1', label: 'D2 缺口焊死', color: 'text-[#6b89a8]' },
  { value: '2', label: '精度需 D30 磨', color: 'text-[#eef0f3]' },
];

const results = [
  {
    topic: '多代理 vs 微服务三大差异',
    result: '方向全对 / 精度待磨',
    detail: '三维度都摸到：通信（自然语言 vs API 契约）、调度（LLM动态 vs 代码写死）、错误（概率性 vs 确定性）。表达需更锋利。',
    pass: true,
  },
  {
    topic: 'LangGraph 协同过滤 fan-out/fan-in',
    result: '图结构完整',
    detail: '正确画出 1 起始 + N 并行 Agent + 1 Aggregator。标注"不同专长·不同视角"。State 用数组收集思路正确。',
    pass: true,
  },
  {
    topic: '"主动选择"视角设计哲学',
    result: 'D2 薄弱点修复',
    detail: '三维度正面理由：专业化（上下文隔离+工具注入）、模块化（独立开发测试）、容错性（错误隔离+局部重试）。',
    pass: true,
  },
  {
    topic: '误用多代理的坏后果',
    result: '3/4 自答 + 1 补全',
    detail: '自答：开销暴涨、效果不理想、调试难度。补全："错误源放大"——自然语言传话让偏差扩散到下游。',
    pass: true,
  },
  {
    topic: '上下文隔离三兄弟',
    result: 'D2 缺口正式焊死',
    detail: '用自己的话：筛除无关上下文/给予具体任务/限定工具。D2 漏的"tool 子集划分"全中，且换词表达。',
    pass: true,
  },
];

const vsTable = [
  { dimension: '通信', micro: 'API 契约（确定）', multi: '自然语言（模糊）', keyword: '确定性 vs 模糊性' },
  { dimension: '调度', micro: '代码写死（固定路径）', multi: 'LLM 决定（动态）', keyword: '静态 vs 动态' },
  { dimension: '错误', micro: '确定性（重试）', multi: '概率性（需交叉验证）', keyword: '重试 vs 裁判' },
];

const evolutionLeft = [
  { date: '6/4', text: '画成 3 条独立流水线（错误）' },
  { date: '6/6', text: '"核心力量来自视角的不同"' },
  { date: '6/11', text: '信手画出 fan-out/fan-in 图 + 标注不同专长' },
];

const evolutionRight = [
  { date: '6/4', text: '上下文隔离分层归位' },
  { date: '6/6', text: '隔信息 ✓ 分任务 ✓ 限工具 ✗' },
  { date: '6/11', text: '三个全中且用自己的话' },
];

const designPhilosophy = [
  { label: '专业化', body: '上下文隔离让每个 Agent 专精自己领域，工具按需注入，信噪比极高' },
  { label: '模块化', body: '独立开发、独立测试、独立迭代，团队可并行，改 A 不需重测 B' },
  { label: '容错性', body: '错误隔离在单个 Agent，局部重试不牵连全局，损失可控' },
];

const nextSteps = [
  ['6/12', '缓存 + Claude Code 上下文管理 D30 回访'],
  ['7/4', '多代理设计模式 D30 综合应用（含 Planning Design / 可信赖 Agent 缝合）'],
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

function Review20260611DuoDaiLiD7() {
  return (
    <article className="react-review-page">
      {/* HERO */}
      <section className="react-review-hero">
        <span className="eyebrow">REVIEW · 2026 · 06 · 11 · 多代理设计模式 D7 跨章节综合压测</span>
        <h1>多代理设计模式<strong> D7 通过</strong></h1>
        <p>
          五题闭卷全通过。协同过滤 fan-out/fan-in 图信手拈来。三兄弟口诀从 D2 漏一个到今天全中。
          设计哲学从被动逃避升级到主动选择。误用坏后果补全。
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

      {/* SECTION 01 · 逐题结果 */}
      <ReviewSection eyebrow="SECTION 01 · D7 跨章节综合" title="五题逐一过堂">
        <div className="space-y-3">
          {results.map((row, idx) => (
            <Card className="react-review-card" key={idx}>
              <Card.Content className="flex items-start gap-4">
                <span className={`font-mono text-xs shrink-0 mt-1 ${row.pass ? 'text-[#5a9a7a]' : 'text-[#a86b5c]'}`}>
                  {row.pass ? '✓' : '⚠'}
                </span>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <strong className="text-[#eef0f3] text-sm">{row.topic}</strong>
                    <span className="font-mono text-xs text-[#8a929e]">{row.result}</span>
                  </div>
                  <p className="text-xs text-[#b6bec8] leading-relaxed">{row.detail}</p>
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>
      </ReviewSection>

      {/* SECTION 02 · 精度打磨 */}
      <ReviewSection eyebrow="SECTION 02 · 精度打磨" title="多代理 vs 微服务三大差异（D30 追击）">
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#1f2937]">
                <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#8a929e] font-normal">维度</th>
                <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#8a929e] font-normal">微服务</th>
                <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#8a929e] font-normal">多代理</th>
                <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#8a929e] font-normal">关键词</th>
              </tr>
            </thead>
            <tbody>
              {vsTable.map((row, idx) => (
                <tr key={idx} className="border-b border-[#1f2937]">
                  <td className="py-3 px-4 text-[#c9b687] font-mono text-xs">{row.dimension}</td>
                  <td className="py-3 px-4 text-[#d8dde3]">{row.micro}</td>
                  <td className="py-3 px-4 text-[#d8dde3]">{row.multi}</td>
                  <td className="py-3 px-4 text-[#6b89a8] font-mono text-xs">{row.keyword}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <blockquote className="border-l-3 border-[#6b89a8] pl-6 py-4 my-6 bg-[#6b89a8]/5 text-sm text-slate-200 rounded-r-lg">
          "可预测性"对应的是<strong>调度</strong>维度。"微服务出错只影响当前服务"需要修正——微服务也会级联（有熔断器防），真正区别在于错误的<strong>性质</strong>：确定性 vs 概率性。
        </blockquote>

        <pre className="react-review-ascii">{`误用多代理三大坏后果（标准版）：

1. 协调开销暴涨 → 通信成本、等待时间、同步复杂度
2. 错误源放大   → 自然语言传话让偏差扩散，级联风险
3. 调试难度上升 → 多节点日志分散，复现路径不确定

D30 口诀：开销 · 扩散 · 调试`}</pre>
      </ReviewSection>

      {/* SECTION 03 · 焊死确认 */}
      <ReviewSection eyebrow="SECTION 03 · 焊死确认" title="协同过滤 + 三兄弟：从 D2 到 D7 的进化">
        <div className="react-review-grid two">
          <Card className="react-review-card">
            <Card.Header>
              <Card.Description>协同过滤进化链</Card.Description>
              <Card.Title>从"复制流水线"到"视角多样性"</Card.Title>
            </Card.Header>
            <Card.Content>
              <div className="space-y-2">
                {evolutionLeft.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="font-mono text-xs text-[#6b89a8] shrink-0 mt-0.5">{item.date}</span>
                    <span className="text-xs text-[#d8dde3]">{item.text}</span>
                  </div>
                ))}
              </div>
            </Card.Content>
          </Card>
          <Card className="react-review-card">
            <Card.Header>
              <Card.Description>三兄弟进化链</Card.Description>
              <Card.Title>从"漏一个"到"全中 + 换词"</Card.Title>
            </Card.Header>
            <Card.Content>
              <div className="space-y-2">
                {evolutionRight.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="font-mono text-xs text-[#6b89a8] shrink-0 mt-0.5">{item.date}</span>
                    <span className="text-xs text-[#d8dde3]">{item.text}</span>
                  </div>
                ))}
              </div>
            </Card.Content>
          </Card>
        </div>

        <pre className="react-review-ascii">{`上下文隔离的"上下兄弟"定位（最终稳定版）

第 3 层（理念目标）   专业化 Specialization
                     │
第 2 层（工程手段）   上下文隔离 / 任务拆分 / tool 子集划分
                     │             口诀：隔信息 / 分任务 / 限工具
第 1 层（底层工具）   subgraph / 独立 state / message filter`}</pre>
      </ReviewSection>

      {/* SECTION 04 · 设计哲学 */}
      <ReviewSection eyebrow="SECTION 04 · 设计哲学升级" title="主动选择 vs 被动逃避">
        <div className="react-review-grid two">
          <Card className="react-review-card">
            <Card.Header>
              <Card.Description className="text-[#a86b5c]">旧视角 · 被动逃避</Card.Description>
              <Card.Title>"单代理做不到，所以用多代理"</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">出发点是痛点：上下文太长、工具太多、一个 Agent 搞不定……</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">新视角 · 主动选择</Card.Description>
              <Card.Title>"即使能做，我也主动选多代理"</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">出发点是收益：专业化 + 模块化 + 容错性——工程上本身就是更好的架构。</p>
            </Card.Content>
          </Card>
        </div>

        <ol className="react-review-checklist mt-6">
          {designPhilosophy.map((item, idx) => (
            <li key={idx}><strong>{item.label}</strong> — {item.body}</li>
          ))}
        </ol>
      </ReviewSection>

      {/* SECTION 05 · 下一步 */}
      <ReviewSection eyebrow="SECTION 05 · 复习路线图" title="下一站">
        <div className="react-review-timeline">
          {nextSteps.map((row, idx) => (
            <div className="react-review-timeline-row" key={idx}>
              <strong>{row[0]}</strong>
              <span>{row[1]}</span>
            </div>
          ))}
        </div>

        <ol className="react-review-checklist mt-6">
          <li><strong>多代理 vs 微服务精准表达</strong> — 通信=契约vs自然语言；调度=写死vs动态；错误=确定性vs概率性</li>
          <li><strong>"错误源放大"肌肉记忆</strong> — Agent 间自然语言传话 → 偏差扩散 → 下游把歪的当真继续跑</li>
          <li><strong>D30 综合口诀</strong> — 开销 · 扩散 · 调试</li>
        </ol>
      </ReviewSection>

      {/* FOOTER */}
      <footer className="react-review-footer">
        <div className="flex justify-between flex-wrap gap-4 text-xs font-mono text-[#8a929e] mb-6">
          <div>2026 · 06 · 11 · 多代理设计模式 D7 跨章节综合压测</div>
          <div>5 题 · 5 通过 · 1 缺口焊死 · 2 精度待 D30</div>
        </div>
        <div className="tag-row">
          {['多代理', 'D7', '协同过滤', 'fan-out/fan-in', '上下文隔离', '三兄弟口诀', 'vs 微服务', '主动选择', '误用坏后果', 'LangGraph'].map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </div>
      </footer>
    </article>
  );
}

export default Review20260611DuoDaiLiD7;
