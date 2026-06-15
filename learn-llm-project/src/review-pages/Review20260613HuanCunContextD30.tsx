import { Card } from '@heroui/react';

const stats = [
  { value: '2', label: '复习主题', color: 'text-[#6b89a8]' },
  { value: '3', label: '综合题', color: 'text-[#eef0f3]' },
  { value: '2', label: '退化点重焊', color: 'text-[#c9b687]' },
  { value: '✓', label: '通过 · 进入长期记忆', color: 'text-[#5a9a7a]' },
];

const cacheJudgments = [
  {
    query: '"什么是牛顿第三定律"',
    temporal: '否',
    personal: '否',
    result: '✅ 两关都过 → 语义缓存',
    pass: true,
  },
  {
    query: '"帮我分析我的作文"',
    temporal: '否',
    personal: '是（绑定具体作文）',
    result: '❌ 第②关拦下 → 提示词缓存可用',
    pass: false,
  },
  {
    query: '"怎么解这道二次函数题"',
    temporal: '否',
    personal: '是（"这道"绑定具体题目）',
    result: '❌ 第②关拦下 → 不适合语义缓存',
    pass: false,
  },
];

const contextQuestions = [
  {
    question: '① 当前任务和上一个任务相关吗？',
    answer: '相关，不 /clear',
    detail: '整个会话围绕同一篇作文展开，context 中的信息有连续性。',
  },
  {
    question: '② 这个动作需要读很多文件吗？',
    answer: '否，不开 subagent',
    detail: '单文件场景。追问：如果要调取 10 篇历史作文做趋势分析 → 触发 subagent。',
  },
  {
    question: '③ 这次改动跨了几个文件？',
    answer: '不跨，不用 Plan Mode',
    detail: '所有操作都在同一份文档上进行。',
  },
  {
    question: '④ 关键信息放在哪里？',
    answer: '作文放开头（Lost in the Middle）',
    detail: '2000 字作文是核心依赖，放在 context 前段避开 U 型注意力塌陷区。',
  },
];

const weakPoints = [
  {
    title: '两道生死题问法',
    body: '只记得关键词，问句形式退化。重新接触后立刻恢复——提取通道生锈，知识未消失。',
    status: '已修复',
  },
  {
    title: 'checkpoint = Controllable',
    body: 'D7 焊死的归类 D30 出现三选犹豫。跨章节钩子需更多实战激活。已重焊。',
    status: '已修复',
  },
  {
    title: '开工 4 问措辞抽象化',
    body: '从"具体可操作信号"退化为"抽象判断"。方向没偏，精度下降。可接受。',
    status: '轻度退化',
  },
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

function Review20260613HuanCunContextD30() {
  return (
    <article className="react-review-page">
      {/* HERO */}
      <section className="react-review-hero">
        <span className="eyebrow">REVIEW · 2026 · 06 · 13 · 缓存 + CLAUDE CODE 上下文管理 D30</span>
        <h1>缓存 + 上下文管理<strong> D30 通过</strong></h1>
        <p>
          5/21 双毕业项回访。核心框架 23 天后依然站得住——缓存三兄弟命中机制分得清，
          开工 4 问映射能力在，错误累积公式秒出。薄弱点暴露在"两道生死题问法退化"和
          "checkpoint = Controllable 归类犹豫"。整体通过，正式进入长期记忆区。
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

      {/* SECTION 01 · 缓存决策验证 */}
      <ReviewSection eyebrow="SECTION 01 · 缓存 · 两道生死题重焊" title="在线教育 AI 助手缓存设计">
        <div className="react-review-grid two mb-6">
          <Card className="react-review-card">
            <Card.Header>
              <Card.Description className="text-[#6b89a8]">生死题 ①</Card.Description>
              <Card.Title>输出会随时间变化吗？</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">问时效性。如果今天和明天的答案不同，语义缓存就有过期风险。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card">
            <Card.Header>
              <Card.Description className="text-[#6b89a8]">生死题 ②</Card.Description>
              <Card.Title>输出依赖私人上下文吗？</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">问独特性。如果不同用户的相同问法需要不同答案，缓存命中 = 张冠李戴。</p>
            </Card.Content>
          </Card>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#1f2937]">
                <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#8a929e] font-normal">提问</th>
                <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#8a929e] font-normal">① 时效性</th>
                <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#8a929e] font-normal">② 私人依赖</th>
                <th className="text-left py-3 px-4 text-xs uppercase tracking-wider text-[#8a929e] font-normal">结论</th>
              </tr>
            </thead>
            <tbody>
              {cacheJudgments.map((row, idx) => (
                <tr key={idx} className="border-b border-[#1f2937]">
                  <td className="py-3 px-4 text-[#eef0f3] font-medium text-sm">{row.query}</td>
                  <td className={`py-3 px-4 ${row.temporal === '否' ? 'text-[#5a9a7a]' : 'text-[#a86b5c]'}`}>{row.temporal}</td>
                  <td className={`py-3 px-4 ${row.personal === '否' ? 'text-[#5a9a7a]' : 'text-[#a86b5c]'}`}>{row.personal}</td>
                  <td className="py-3 px-4 text-[#d8dde3] text-sm">{row.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <details className="mt-6">
          <summary>"这道"的陷阱</summary>
          <div className="details-body">
            <p>初次回答时把"这道二次函数题"判为"有时效性"——其实数学公式不会随时间变。
            真正的关键是<strong>"这道"= 绑定了具体题目 = 私人上下文</strong>。时效性 vs 私人依赖需在提取时分清。</p>
          </div>
        </details>

        <details>
          <summary>作文题 → 提示词缓存的连接</summary>
          <div className="details-body">
            <p>作文全文作为<strong>不变前缀</strong>，后续逐段批改只改后缀——这是提示词缓存的经典命中模式。
            虽然语义/精确缓存不能用（私人数据），但提示词缓存在会话内能省计算。跨兄弟调取能力 ✓。</p>
          </div>
        </details>
      </ReviewSection>

      {/* SECTION 02 · Context 管理 */}
      <ReviewSection eyebrow="SECTION 02 · CONTEXT · 开工 4 问实战" title="作文批改场景的 Context 管理">
        <ol className="react-review-checklist">
          {contextQuestions.map((item, idx) => (
            <li key={idx}>
              <strong>{item.question}</strong>
              <span className="text-[#5a9a7a] font-mono text-xs ml-2">→ {item.answer}</span>
              <p className="text-xs text-[#8a929e] mt-1">{item.detail}</p>
            </li>
          ))}
        </ol>

        <details className="mt-6">
          <summary>追问：subagent 的触发双条件</summary>
          <div className="details-body">
            <p>触发 subagent 的两个信号：<strong>① 任务独立</strong>（子任务可在隔离 context 完成）+
            <strong>② 需要读多个文件</strong>（主 context 装不下）。两者同时满足时启动，主 agent 只收摘要。</p>
          </div>
        </details>
      </ReviewSection>

      {/* SECTION 03 · 跨章节 */}
      <ReviewSection eyebrow="SECTION 03 · 跨章节 · 错误累积 × TCC" title="解题链 + Checkpoint + TCC 归类">
        <div className="react-review-grid two mb-6">
          <Card className="react-review-card">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">公式验证 · 通过</Card.Description>
              <Card.Title>1 - 0.95⁴ ≈ 18.55%</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">错误累积公式 1 - p^N 秒出。4 步 95% 看似高，但约五分之一翻车。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">方案设计 · 通过</Card.Description>
              <Card.Title>动 p + 动结构</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">方案 A：换强模型提高 p。方案 B：checkpoint 切分为局部低阶 N。落地完整。</p>
            </Card.Content>
          </Card>
        </div>

        <pre className="react-review-ascii">{`AI 解题 4 步链 · 错误累积分析

成功率：0.95⁴ ≈ 0.815
失败率：1 - 0.815 ≈ 18.55%

降低方案：
┌─ 方案 A：动 p ──── 换更强模型（95% → 99%）
│                   1 - 0.99⁴ ≈ 3.9%
│
└─ 方案 B：动结构 ── 每步后插 checkpoint
                    验证器检查 → 不通过 → 错误信息回传 → 局部重试

checkpoint 工程落地三要素：
  ① 谁检查 → 验证器模型
  ② 检查什么 → 当前步输出是否正确
  ③ 不通过怎么办 → 带错误信息的局部重试`}</pre>

        <h3 className="text-[#eef0f3] font-light text-lg mt-8 mb-4">TCC 归类 · 犹豫后重焊</h3>
        <div className="react-review-grid two">
          <Card className="react-review-card border-[#6b3f3a]">
            <Card.Header>
              <Card.Description className="text-[#a86b5c]">暴露 · 归类犹豫</Card.Description>
              <Card.Title>T → C → Consistency 三选</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">首答 T+C 双维度，改口 Consistency。暴露 checkpoint=Controllable 链接松动。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card border-[#5a9a7a]/30">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">重焊 · 已修复</Card.Description>
              <Card.Title>checkpoint = Controllable 的儿子</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">拦截、回退、重试、局部低阶 N —— 全是"管得住"的具体实现。</p>
            </Card.Content>
          </Card>
        </div>

        <pre className="react-review-ascii">{`TCC 三兄弟各管什么（重焊版）

Transparent  看得见 → 日志、过程可视化、决策链展示
Controllable 管得住 → checkpoint、重试、打断、回滚、人类审批
Consistency  信得过 → 行为稳定、不矛盾、输出可预期

口诀：checkpoint = Controllable 的儿子`}</pre>
      </ReviewSection>

      {/* SECTION 04 · 薄弱点 */}
      <ReviewSection eyebrow="SECTION 04 · 退化分析" title="D30 暴露的退化点">
        <div className="react-review-grid three">
          {weakPoints.map((item, idx) => (
            <Card className="react-review-card border-[#6b3f3a]" key={idx}>
              <Card.Header>
                <Card.Description className="text-[#a86b5c]">{item.status}</Card.Description>
                <Card.Title>{item.title}</Card.Title>
              </Card.Header>
              <Card.Content>
                <p className="text-xs text-[#b6bec8]">{item.body}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </ReviewSection>

      {/* SECTION 05 · 结论 */}
      <ReviewSection eyebrow="SECTION 05 · 结论" title="D30 判定：通过 · 进入长期记忆区">
        <p className="text-sm text-[#d8dde3] leading-relaxed mb-4">
          缓存和 Claude Code 上下文管理两个主题经过 D1 → D7 → D30 全程跟踪，
          核心框架判断力和工程落地能力在 23 天无接触后依然站得住。退化点均为提取通道生锈（而非知识消失），
          重新接触后快速恢复。正式进入长期记忆区，不再安排定期复习。
        </p>
        <blockquote className="border-l-3 border-[#c9b687] pl-6 py-3 bg-[#c9b687]/5 rounded-r-lg italic text-sm text-[#c9b687]">
          "D30 通过不是'你都会了'——D30 通过是'核心框架已经编进你的思维操作系统里了'。"
        </blockquote>
      </ReviewSection>

      {/* FOOTER */}
      <footer className="react-review-footer">
        <div className="flex justify-between flex-wrap gap-4 text-xs font-mono text-[#8a929e] mb-6">
          <div>2026 · 06 · 13 · 缓存 + Claude Code 上下文管理 · D30 综合压测</div>
          <div>3 题 · 通过 · 2 退化点重焊 · 进入长期记忆</div>
        </div>
        <div className="tag-row">
          {['缓存', '两道生死题', '三兄弟', '提示词缓存', 'Claude Code', '开工 4 问', 'Lost in the Middle', '错误累积', 'checkpoint', 'Controllable', 'TCC', 'D30', '长期记忆'].map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </div>
      </footer>
    </article>
  );
}

export default Review20260613HuanCunContextD30;
