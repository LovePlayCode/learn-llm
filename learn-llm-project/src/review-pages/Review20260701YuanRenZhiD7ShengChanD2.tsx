import { Card } from '@heroui/react';

const stats = [
  { value: '11', label: '总题量', color: 'text-[#6b89a8]' },
  { value: '3', label: '复习轮次', color: 'text-[#eef0f3]' },
  { value: '3', label: '跨章节连接', color: 'text-[#5a9a7a]' },
  { value: '✓', label: '全部通过', color: 'text-[#c9b687]' },
];

const d30Warnings = [
  {
    title: '"改策略"意识滑回',
    body: '两次差点从元认知滑回纠错思维。需要把"改策略不只改答案"练成肌肉反应。',
    status: '需关注',
  },
  {
    title: '协调层 vs 质检混淆',
    body: '首答把协调层元认知描述成"检查输出对不对"——这是质检不是元认知。元认知审视的是协作策略。',
    status: '需关注',
  },
  {
    title: 'Over-Reflection 判断标准',
    body: '新领域首次失败=该反思（策略质疑信号），场景C 首答判错。口诀需内化。',
    status: '需关注',
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

function Review20260701YuanRenZhiD7ShengChanD2() {
  return (
    <article className="react-review-page">
      {/* HERO */}
      <section className="react-review-hero">
        <span className="eyebrow">REVIEW · 2026 · 07 · 01 · 元认知 D2+D7 + 生产环境 D2</span>
        <h1>元认知 D7 通过 + 生产环境 D2 通过<strong> 三轮连通</strong></h1>
        <p>
          元认知从 D2 基础验证到 D7 跨章节综合一次性打通。生产环境 D2 三题全过。
          核心焊点："改策略不只改答案"、战术vs战略级思考、协调层元认知审视协作策略、动态觉察 vs 固定checkpoint。
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

      {/* SECTION 01 · 元认知 D2 */}
      <ReviewSection eyebrow="SECTION 01 · 元认知 D2 · 基础验证" title="改策略不只改答案 · 无状态三缺失 · 纠正型vs先发式">
        <div className="react-review-grid three mb-6">
          <Card className="react-review-card border-[#5a9a7a]/30">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">焊死</Card.Description>
              <Card.Title>元认知 vs 纠错</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">普通纠错改答案（换酒店X→酒店Y），元认知改策略（"选最便宜"→"选最高评分"）。方向首答对，精度经磨锐通过。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card border-[#5a9a7a]/30">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">秒出</Card.Description>
              <Card.Title>LLM 无状态性</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">"无状态"关键词秒出。三缺失方向对：决策历史存储、评估机制、策略切换逻辑。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card border-[#5a9a7a]/30">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">通过</Card.Description>
              <Card.Title>纠正型 RAG vs 先发式</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">触发时机：任务中 vs 任务前。类比：考试翻书 vs 考前放公式表。补充：触发条件还包含"信息质量不够"。</p>
            </Card.Content>
          </Card>
        </div>
      </ReviewSection>

      {/* SECTION 02 · 元认知 D7 */}
      <ReviewSection eyebrow="SECTION 02 · 元认知 D7 · 跨章节综合" title="战术vs战略 · 协调层元认知 · 动态觉察切短N">
        <div className="react-review-grid two mb-6">
          <Card className="react-review-card border-[#5a9a7a]/30">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">通过</Card.Description>
              <Card.Title>酒店 Agent 元认知三步</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">执行（按策略输出）→ 反思 Reflection（审视策略本身）→ 策略切换。核心：中间多了审视策略这一步。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card border-[#6b89a8]/30">
            <Card.Header>
              <Card.Description className="text-[#6b89a8]">2/3 首答对</Card.Description>
              <Card.Title>Over-Reflection 判断</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">A不反思✓ B反思✓ C需反思(新类型首次失败=策略质疑信号)——场景C经引导修正。口诀：简单/熟悉=不反思，连续失败/新领域=反思。</p>
            </Card.Content>
          </Card>
        </div>

        <div className="react-review-grid two mb-6">
          <Card className="react-review-card border-[#5a9a7a]/30">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">通过</Card.Description>
              <Card.Title>ReAct vs ReAct+Reflection</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">ReAct 思考是战术级（下一步做什么），加 Reflection 升级为战略级（我的做法本身对不对）。意思到位，补了层级表达。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card border-[#6b89a8]/30">
            <Card.Header>
              <Card.Description className="text-[#6b89a8]">引导后通过</Card.Description>
              <Card.Title>元认知 × 多代理</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">放在协调层。审视的不是个体输出对错（那是质检），而是任务分配、协作模式、Agent选择等策略级决策。</p>
            </Card.Content>
          </Card>
        </div>

        <Card className="react-review-card border-[#5a9a7a]/30 mb-6">
          <Card.Header>
            <Card.Description className="text-[#5a9a7a]">方向对</Card.Description>
            <Card.Title>元认知 × 错误累积：动态觉察切短 N</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xs text-[#b6bec8]">元认知在错误刚发生时主动阻断传播链（早发现早止损）。vs checkpoint 在固定位置插暂停点。两者配合：元认知是主动刹车，checkpoint是安全网兜底。</p>
          </Card.Content>
        </Card>

        <pre className="react-review-ascii">{`元认知切短 N 的机制对比：

checkpoint（固定位置）              元认知（动态觉察）
─────────────────────              ─────────────────────
Step1 → Step2 → [存档] → Step3    Step1 → Step2(策略错)
错误在 Step3 → 从存档重试               → Reflection 发现!
特点：预设位置，被动等待                 → 立刻停下换策略重来
                                   特点：主动觉察，早发现早止损

配合使用：元认知 = 主动刹车 | checkpoint = 安全网兜底`}</pre>
      </ReviewSection>

      {/* SECTION 03 · 生产环境 D2 */}
      <ReviewSection eyebrow="SECTION 03 · 生产环境可观测性与评估 D2" title="Trace/Span 树形 · 评估闭环 · 成本三策略串联">
        <div className="react-review-grid three mb-6">
          <Card className="react-review-card border-[#5a9a7a]/30">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">修正后通过</Card.Description>
              <Card.Title>Trace / Span 结构</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">Trace = 完整任务生命周期。Span = 单步骤，可嵌套子 Span。整体是树形结构。首答误限为叶子节点，修正后通过。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card border-[#5a9a7a]/30">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">精准</Card.Description>
              <Card.Title>评估迭代闭环</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">离线测试 → 部署上线 → 在线收集真实 case → 回流离线测试集 → 优化 → 重复。一句话抓住核心循环。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card border-[#5a9a7a]/30">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">完整</Card.Description>
              <Card.Title>成本三策略串联</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">缓存做围栏（拦截重复）→ 路由做分发（判断复杂度）→ 小模型做兜底（简单不浪费大模型）。顺序、角色、决策逻辑完整。</p>
            </Card.Content>
          </Card>
        </div>

        <pre className="react-review-ascii">{`成本管理串联流：

用户请求 → [缓存·围栏] → [路由·分发] → [大/小模型·执行] → 结果
              │命中→直接返回   │简单→小模型
              │未命中↓         │复杂→大模型`}</pre>
      </ReviewSection>

      {/* SECTION 04 · D30 追击 */}
      <ReviewSection eyebrow="SECTION 04 · D30 追击清单" title="需关注的退化风险">
        <div className="react-review-grid three">
          {d30Warnings.map((item, idx) => (
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
      <ReviewSection eyebrow="SECTION 05 · 结论" title="三轮连通 · 全部通过">
        <p className="text-sm text-[#d8dde3] leading-relaxed mb-4">
          今天三轮连通，把元认知从 D2 基础验证到 D7 跨章节综合一次性打通，
          同时生产环境 D2 三题全过。最大收获不是具体知识点，而是把元认知和之前学的多代理、
          错误累积全部缝到了一起——知识网络越密，提取越快。
        </p>
        <blockquote className="border-l-3 border-[#c9b687] pl-6 py-3 bg-[#c9b687]/5 rounded-r-lg italic text-sm text-[#c9b687]">
          "今天最棒的一刻：把元认知和错误累积缝在一起时——动态觉察 vs 固定checkpoint，这不是两个孤立知识点，而是同一个工程问题的两种解法。"
        </blockquote>
      </ReviewSection>

      {/* FOOTER */}
      <footer className="react-review-footer">
        <div className="flex justify-between flex-wrap gap-4 text-xs font-mono text-[#8a929e] mb-6">
          <div>2026 · 07 · 01 · 元认知 D2+D7 + 生产环境 D2</div>
          <div>11 题 · 全部通过 · 三轮连通</div>
        </div>
        <div className="tag-row">
          {['元认知', 'Metacognition', 'ReAct', 'Reflection', '战术vs战略', '协调层', 'Over-Reflection', '错误累积', '动态觉察', 'checkpoint', 'Trace/Span', '评估闭环', '成本三策略', 'D2', 'D7'].map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </div>
      </footer>
    </article>
  );
}

export default Review20260701YuanRenZhiD7ShengChanD2;
