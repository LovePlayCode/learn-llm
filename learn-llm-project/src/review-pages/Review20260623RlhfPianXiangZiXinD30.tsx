import { Card } from '@heroui/react';

const stats = [
  { value: '3', label: '综合题', color: 'text-[#6b89a8]' },
  { value: '4', label: '因果链环节', color: 'text-[#eef0f3]' },
  { value: '3', label: '工程缓解方案', color: 'text-[#c9b687]' },
  { value: '✓', label: '跨章节连接建立', color: 'text-[#5a9a7a]' },
];

const weakPoints = [
  {
    title: '因果链第一因定位',
    body: '首答把奖励模型当第一因，漏掉了"人类标注员认知偏误"。经引导后修正。提取通道略有生锈，知识未消失。',
    status: '需关注',
  },
  {
    title: '跨章节主动联想不足',
    body: '第三题（RLHF × 错误累积）无法独立启动，需引导才能把两章知识碰撞。"主动联想"习惯尚未形成肌肉记忆。',
    status: '需关注',
  },
  {
    title: 'PPO 拼写修正',
    body: 'PP0（零）→ PPO（字母 O）。细节问题，不影响理解。',
    status: '已修复',
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

function Review20260623RlhfPianXiangZiXinD30() {
  return (
    <article className="react-review-page">
      {/* HERO */}
      <section className="react-review-hero">
        <span className="eyebrow">REVIEW · 2026 · 06 · 23 · RLHF 偏向自信 D30</span>
        <h1>RLHF 偏向自信<strong> D30 通过</strong></h1>
        <p>
          D30 综合压测：因果链还原、工程缓解方案设计、跨章节关联（RLHF × 错误累积）。
          因果链四环节完整复述通过，工程方案覆盖提示词/RAG/logprobs 三个层面，
          跨章节在引导下推出"过度自信使刹车系统失明"的核心结论。整体通过。
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

      {/* SECTION 01 · 因果链 */}
      <ReviewSection eyebrow="SECTION 01 · 因果链还原" title="RLHF 为什么训练出「过度自信」">
        <pre className="react-review-ascii">{`RLHF 过度自信因果链（四环节）

人类标注员有认知偏误（自信 = 专业 = 可靠）
    │
    ▼
标注时不自觉把"斩钉截铁"的回答排在前面
    │
    ▼
奖励模型（RM）从标注数据中学习，继承了这个偏好
    │
    ▼
PPO 强化学习阶段，模型为了最大化 RM 给的分数
    │
    ▼
学会了"哪怕不确定，也要用斩钉截铁的语气说话"
    │
    ▼
结果：过度自信成为系统性倾向（被训练机制结构性焊入）

关键洞察：第一因是人类偏误，不是奖励模型本身。
RM 只是忠实地学会了人类的偏见。
RLHF 的根本局限 = 人类偏好 ≠ 客观正确`}</pre>

        <div className="react-review-grid two mb-6">
          <Card className="react-review-card border-[#5a9a7a]/30">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">通过</Card.Description>
              <Card.Title>四环节完整复述</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">补完后一次性复述通过：人类偏误 → RM 继承 → PPO 放大 → 系统性倾向。用了"系统性倾向"一词，说明理解了结构性问题。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card border-[#6b3f3a]">
            <Card.Header>
              <Card.Description className="text-[#a86b5c]">首答暴露</Card.Description>
              <Card.Title>第一因定位偏移</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">首次回答把奖励模型当成第一因，漏掉了"人类标注员的认知偏误"这个真正源头。经引导后修正。</p>
            </Card.Content>
          </Card>
        </div>
      </ReviewSection>

      {/* SECTION 02 · 工程方案 */}
      <ReviewSection eyebrow="SECTION 02 · 工程缓解方案" title="三层缓解：提示词 / RAG / logprobs">
        <div className="react-review-grid two mb-6">
          <Card className="react-review-card border-[#5a9a7a]/30">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">方案 ① · 指令层</Card.Description>
              <Card.Title>提示词工程</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">明确告诉模型允许说"不知道"，不能捏造事实。本质是推理阶段用指令覆盖训练阶段的偏好——效果有但有限，因为训练出的讨好倾向根深蒂固。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card border-[#5a9a7a]/30">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">方案 ② · 架构层</Card.Description>
              <Card.Title>RAG 事实锚点</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">提供可验证的事实依据，让模型的回答有据可查。检索不到相关文档时，可设计为输出"未找到相关依据"——间接帮助表达不确定性。</p>
            </Card.Content>
          </Card>
        </div>
        <Card className="react-review-card border-[#5a9a7a]/30">
          <Card.Header>
            <Card.Description className="text-[#5a9a7a]">方案 ③ · 输出层 · 引导后答出</Card.Description>
            <Card.Title>logprobs 置信度检测</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xs text-[#b6bec8]">模型生成每个 token 时输出的对数概率天然反映信心程度。工程上：平均 logprobs 低于阈值时自动插入"此回答置信度较低"或触发人工审核。不需重新训练，直接从输出层检测"嘴硬但心虚"。</p>
          </Card.Content>
        </Card>

        <details className="mt-6">
          <summary>三层方案的层级关系</summary>
          <div className="details-body">
            <p>① 提示词工程 —— 最轻量，推理时覆盖，效果有限</p>
            <p>② RAG —— 架构层，提供事实锚点，解决"对不对"而非"自不自信"</p>
            <p>③ logprobs —— 输出层，直接量化信心程度，可自动化检测</p>
            <p className="mt-2">三者不是互斥的，实际部署中往往组合使用。</p>
          </div>
        </details>
      </ReviewSection>

      {/* SECTION 03 · 跨章节 */}
      <ReviewSection eyebrow="SECTION 03 · 跨章节 · RLHF × 错误累积" title="过度自信使「刹车系统」失明">
        <div className="react-review-grid two mb-6">
          <Card className="react-review-card">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">随机出错</Card.Description>
              <Card.Title>犹豫信号可被拦截</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">模型不确定时表现出犹豫 → checkpoint / 人类审批 / 自我检查有机会拦截 → N 被切短 → 错误累积可控。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card border-[#6b3f3a]">
            <Card.Header>
              <Card.Description className="text-[#a86b5c]">过度自信</Card.Description>
              <Card.Title>错误"隐身"绕过所有检查</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">每一步都伪装成正确 → checkpoint / 审批机制查不出问题 → 等于整条链的刹车系统失明 → N 步带着隐藏错误一路狂奔到终点。</p>
            </Card.Content>
          </Card>
        </div>

        <pre className="react-review-ascii">{`对比：随机出错 vs 过度自信

┌─────────────────────────────────────────────────────┐
│  随机出错                                            │
│  Step1(✓) → Step2(❌ 犹豫) → checkpoint 拦截!       │
│                                → 回退重试 → 修正    │
│  结果：N 被切短，错误累积可控                         │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│  过度自信                                            │
│  Step1(✓) → Step2(❌ 斩钉截铁) → checkpoint 放行    │
│            → Step3(基于错误继续) → ... → StepN       │
│  结果：错误隐身，刹车失灵，全链走完才发现              │
└─────────────────────────────────────────────────────┘

核心结论：
过度自信不是让 p 变大，
而是让你的"刹车系统"失明——
错误率没变，但你修复它的能力被废掉了。`}</pre>

        <blockquote className="border-l-3 border-[#c9b687] pl-6 py-3 bg-[#c9b687]/5 rounded-r-lg italic text-sm text-[#c9b687]">
          "过度自信不是让 p 变大，而是让你的刹车系统失明——错误率没变，但你修复它的能力被废掉了。"
        </blockquote>
      </ReviewSection>

      {/* SECTION 04 · 退化分析 */}
      <ReviewSection eyebrow="SECTION 04 · 退化分析" title="D30 暴露的退化点">
        <div className="react-review-grid three">
          {weakPoints.map((item, idx) => (
            <Card className={`react-review-card ${item.status === '已修复' ? 'border-[#5a9a7a]/30' : 'border-[#6b3f3a]'}`} key={idx}>
              <Card.Header>
                <Card.Description className={item.status === '已修复' ? 'text-[#5a9a7a]' : 'text-[#a86b5c]'}>{item.status}</Card.Description>
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
      <ReviewSection eyebrow="SECTION 05 · 结论" title="D30 判定：通过">
        <p className="text-sm text-[#d8dde3] leading-relaxed mb-4">
          RLHF 偏向自信的因果链在 D30 后依然可完整还原（经一轮引导修正第一因定位），
          工程缓解方案能覆盖三个层面，跨章节连接在引导下成功建立。
          退化点为"主动联想"习惯——知识都在，但需要外力触发碰撞。
          建议在未来遇到多步 Agent 场景时，主动问自己："如果每一步都过度自信，我的刹车还能工作吗？"
        </p>
        <blockquote className="border-l-3 border-[#c9b687] pl-6 py-3 bg-[#c9b687]/5 rounded-r-lg italic text-sm text-[#c9b687]">
          "D30 通过不代表永远不忘——它代表核心逻辑链已经编进你的思维操作系统，下次提取只需要一个正确的触发词。"
        </blockquote>
      </ReviewSection>

      {/* FOOTER */}
      <footer className="react-review-footer">
        <div className="flex justify-between flex-wrap gap-4 text-xs font-mono text-[#8a929e] mb-6">
          <div>2026 · 06 · 23 · RLHF 偏向自信 · D30 综合压测</div>
          <div>3 题 · 通过 · 跨章节连接建立</div>
        </div>
        <div className="tag-row">
          {['RLHF', '偏向自信', '因果链', '人类标注员', '奖励模型', 'PPO', '提示词工程', 'RAG', 'logprobs', '错误累积', 'checkpoint', '刹车系统失明', 'D30'].map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </div>
      </footer>
    </article>
  );
}

export default Review20260623RlhfPianXiangZiXinD30;
