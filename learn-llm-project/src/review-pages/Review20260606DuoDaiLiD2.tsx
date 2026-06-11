import { Card } from '@heroui/react';

const stats = [
  { value: '3', label: '闭卷题总量', color: 'text-[#6b89a8]' },
  { value: '1', label: '薄弱点焊死', color: 'text-[#7a9985]' },
  { value: '2', label: '修正轮次', color: 'text-[#c9b687]' },
  { value: '1', label: '兄弟记忆缺口', color: 'text-[#eef0f3]' },
];

const examResults = [
  { item: '协同过滤 = 多视角并行 + 汇总', status: 'pass', note: '不再犯"复制流水线"错误' },
  { item: 'fan-out/fan-in 结构图', status: 'pass', note: '图画得清晰完整' },
  { item: '三种模式直觉判断', status: 'pass', note: '一次全对' },
  { item: '上下文隔离 · 上', status: 'pass', note: '专业化 — 两轮后对了' },
  { item: '上下文隔离 · 下', status: 'pass', note: 'subgraph / 独立 state / message filter' },
  { item: '上下文隔离 · 兄', status: 'partial', note: '记得任务拆分，漏了 tool 子集划分' },
];

const correctionChain = [
  {
    tag: '协同过滤 · 修正链',
    title: '从"复制流水线"到"视角多样性"',
    steps: [
      { round: '第一轮', text: '"同一份任务，不同专家分析汇总" — 方向对但没对比复制流水线' },
      { round: '第二轮', text: '"复制给三个人没人汇总" — 只说形式（有无 Aggregator）没说本质' },
      { round: '最终版', text: '"核心力量来自视角的不同" — 精准命中本质！' },
    ],
  },
  {
    tag: '上下文隔离 · 修正链',
    title: '从"概念混乱"到"三层归位"',
    steps: [
      { round: '首次', text: '"上=agent实现 下=工具调用 兄=上下文隔离" — 全偏，还把主体放进兄弟' },
      { round: '二次', text: '"上=如何构建专业agent 下=状态图/检查点" — 方向对但不够锋利' },
      { round: '最终', text: '上=专业化 下=subgraph/独立state/filter ✓ 兄=任务拆分 ✓（漏 tool 子集划分）' },
    ],
  },
];

const sceneDecisions = [
  { scene: '法律+财务+技术评估合同', mode: '协同过滤', reason: '多视角并行评估同一材料' },
  { scene: '翻译→摘要→提取', mode: '任务转接', reason: '线性串行处理' },
  { scene: '开放性架构讨论', mode: '群聊', reason: '多对多互相质疑补充' },
];

const d7Preview = [
  '"tool 子集划分"必须答出 — 三兄弟口诀：隔信息 / 分任务 / 限工具',
  '误用多代理的 3 个坏后果（协调开销暴涨 / 错误源放大 / 调试难度上升）',
  '设计动机的"主动选择"视角（不只是逃避痛点）',
  '多代理 vs 微服务三大差异（通信/调度/错误）',
  '用 LangGraph 描述协同过滤 fan-out/fan-in 实现',
];

const tags = [
  '多代理',
  '协同过滤',
  'fan-out/fan-in',
  '视角多样性',
  '上下文隔离',
  '专业化',
  '上下兄弟问三句',
  'D2',
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

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { text: string; cls: string }> = {
    pass: { text: 'PASS', cls: 'bg-[#7a9985]/15 text-[#7a9985] border border-[#7a9985]/30' },
    partial: { text: '半对', cls: 'bg-[#c9b687]/12 text-[#c9b687] border border-[#c9b687]/30' },
    fail: { text: 'FAIL', cls: 'bg-[#a87c5c]/12 text-[#a87c5c] border border-[#a87c5c]/30' },
  };
  const badge = map[status] ?? map.fail;
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-[0.65rem] font-medium tracking-wide ${badge.cls}`}>
      {badge.text}
    </span>
  );
}

function Review20260606DuoDaiLiD2() {
  return (
    <article className="react-review-page">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="react-review-hero">
        <span className="eyebrow">REVIEW · 2026 · 06 · 06 · 多代理设计模式 D2</span>
        <h1>协同过滤薄弱点<strong>焊死</strong><br />上下兄弟分层<strong>半稳</strong></h1>
        <p>
          协同过滤从"复制流水线"到"多视角互补"——这个两次复犯的薄弱点今天正式焊死。
          fan-out/fan-in 图画得漂亮。上下文隔离的分层定位仍有遗漏，D7 继续追。
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

      {/* ═══════════════ SECTION 01: 焊死瞬间 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 01 · 焊死瞬间 · 协同过滤" title="从'复制流水线'到'视角多样性'">
        <Card className="react-review-card">
          <Card.Header>
            <Card.Description>学习者最终输出 · 原话</Card.Description>
            <Card.Title>"协同过滤的核心力量来自视角的不同，而相同的视角，大模型输出的答案虽然有随机性，但是视角是一致的。"</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-[#7a9985]">
              <StatusBadge status="pass" /> 从两次复犯"复制流水线"到精准说出"视角多样性"——从"知道"到"内化"的跨越。
            </p>
          </Card.Content>
        </Card>

        <blockquote className="border-l-3 border-[#c9b687] pl-6 py-4 my-6 bg-[#c9b687]/5 text-sm text-slate-200 rounded-r-lg">
          <strong>焊死公式：</strong>协同过滤 = 多视角并行 + 汇总。威力来自视角多样性，不是数量。三个相同的 agent 只是重复同一视角。
        </blockquote>
      </ReviewSection>

      {/* ═══════════════ SECTION 02: Fan-out/Fan-in ═══════════════ */}
      <ReviewSection eyebrow="SECTION 02 · 结构验证 · fan-out / fan-in" title="亲手画图：数据流完整">
        <pre className="react-review-ascii">{`[ 用户原始输入 / 任务 Prompt ]
                 │
 ┌───────────────┼───────────────┐     (Fan-out: 任务分发)
 ▼               ▼               ▼
┌────────┐  ┌────────┐  ┌────────┐
│Agent A │  │Agent B │  │Agent C │    [不同专长 · 不同视角]
│(Llama) │  │(DeepSk)│  │(Claude)│
└────────┘  └────────┘  └────────┘
 │               │               │
 └───────────────┼───────────────┘     (Fan-in: 数据汇聚)
                 ▼
        ┌─────────────────┐
        │   Aggregator    │            [对比异同 · 剔除噪声 · 融合]
        │  (裁判 + 总编)  │
        └─────────────────┘
                 ▼
        [ 最终高质量输出 ]`}</pre>
        <p className="text-sm text-[#8a929e] mt-2">
          <StatusBadge status="pass" /> 图结构正确。标注"各模型发挥自身优势"证明理解到位。与 6/4 "画成三条流水线"相比已是质的飞跃。
        </p>
      </ReviewSection>

      {/* ═══════════════ SECTION 03: 模式判断 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 03 · 直觉验证 · 三种模式判断" title="三种场景：一次全对">
        <div className="react-review-table-wrap">
          <table className="react-review-table">
            <thead>
              <tr>
                <th>场景</th>
                <th>正确模式</th>
                <th>判断依据</th>
                <th>结果</th>
              </tr>
            </thead>
            <tbody>
              {sceneDecisions.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.scene}</td>
                  <td><strong>{row.mode}</strong></td>
                  <td>{row.reason}</td>
                  <td><StatusBadge status="pass" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ReviewSection>

      {/* ═══════════════ SECTION 04: 上下文隔离分层 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 04 · 盲点自查 · 上下文隔离分层" title="上·下 OK，兄弟差一个">
        <pre className="react-review-ascii">{`第 3 层（理念目标）    专业化 Specialization
                       │
第 2 层（工程手段）    上下文隔离 / 任务拆分 / tool 子集划分   ← 三兄弟
                       │
第 1 层（底层工具）    subgraph / 独立 state / message filter

口诀：隔信息 / 分任务 / 限工具 — 都服务于"专业化"`}</pre>

        <div className="react-review-grid two">
          <Card className="react-review-card">
            <Card.Header>
              <Card.Description>学习者回答</Card.Description>
              <Card.Title>三层定位结果</Card.Title>
            </Card.Header>
            <Card.Content className="space-y-2">
              <p className="text-sm">上：专业性 <StatusBadge status="pass" /></p>
              <p className="text-sm">下：subgraph / 独立 state / message filter <StatusBadge status="pass" /></p>
              <p className="text-sm">兄：任务拆分 <StatusBadge status="partial" /> <span className="text-[#c9b687]">（漏了 tool 子集划分）</span></p>
            </Card.Content>
          </Card>

          <Card className="react-review-card">
            <Card.Header>
              <Card.Description>D7 必焊口诀</Card.Description>
              <Card.Title>三兄弟各管什么</Card.Title>
            </Card.Header>
            <Card.Content className="space-y-2">
              <p className="text-sm">上下文隔离 = <strong>信息独立</strong>（只看该看的）</p>
              <p className="text-sm">任务拆分 = <strong>职责独立</strong>（只做该做的）</p>
              <p className="text-sm">tool 子集划分 = <strong>能力独立</strong>（只调该调的）</p>
            </Card.Content>
          </Card>
        </div>
      </ReviewSection>

      {/* ═══════════════ SECTION 05: 修正轨迹 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 05 · 修正过程 · 两轮迭代" title="从模糊到精准的修正链">
        {correctionChain.map((chain, idx) => (
          <Card className="react-review-card" key={idx}>
            <Card.Header>
              <Card.Description>{chain.tag}</Card.Description>
              <Card.Title>{chain.title}</Card.Title>
            </Card.Header>
            <Card.Content>
              <div className="space-y-3">
                {chain.steps.map((step, i) => (
                  <div key={i} className="flex gap-3 text-sm">
                    <span className="shrink-0 text-[#6b89a8] font-mono text-xs w-12">{step.round}</span>
                    <span className="text-[#b6bdc7]">{step.text}</span>
                  </div>
                ))}
              </div>
            </Card.Content>
          </Card>
        ))}
      </ReviewSection>

      {/* ═══════════════ SECTION 06: 综合报告 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 06 · D2 总评 · 成绩表" title="通过项 5/6，遗留 1 项">
        <div className="react-review-table-wrap">
          <table className="react-review-table">
            <thead>
              <tr>
                <th>检查项</th>
                <th>状态</th>
                <th>备注</th>
              </tr>
            </thead>
            <tbody>
              {examResults.map((row, idx) => (
                <tr key={idx}>
                  <td>{row.item}</td>
                  <td><StatusBadge status={row.status} /></td>
                  <td className="text-[#8a929e]">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ReviewSection>

      {/* ═══════════════ SECTION 07: D7 预告 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 07 · 复习计划 · D7 预告" title="6/11 D7 综合压测：5 题跨章节">
        <ol className="react-review-checklist">
          {d7Preview.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>
      </ReviewSection>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="react-review-footer">
        <div className="flex justify-between flex-wrap gap-4 text-xs font-mono text-[#8a929e] mb-6">
          <div>2026 · 06 · 06 · 多代理设计模式 D2</div>
          <div>3 题 · 1 薄弱点焊死 · 2 修正轮次</div>
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

export default Review20260606DuoDaiLiD2;
