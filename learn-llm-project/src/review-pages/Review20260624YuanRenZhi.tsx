import { Card } from '@heroui/react';

const stats = [
  { value: '3', label: 'A层知识点', color: 'text-[#6b89a8]' },
  { value: '3', label: '追问通过', color: 'text-[#eef0f3]' },
  { value: '1', label: '工程切入点', color: 'text-[#c9b687]' },
  { value: '✓', label: '层级关系焊死', color: 'text-[#5a9a7a]' },
];

const weakPoints = [
  {
    title: 'LLM无状态性与架构层元认知的关系',
    body: '首答将"LLM是通用的不适合做元认知"作为理由，未抓住核心——LLM单次推理无状态，无法存储跨轮次决策历史。经引导后理解。',
    status: '需加强',
  },
  {
    title: '何时触发/不触发反思的判断标准',
    body: '知道"over-reflection会适得其反"，但具体判断标准（什么复杂度的任务才值得反思）尚未形成清晰规则。',
    status: '需关注',
  },
  {
    title: '元认知与应用场景的关系表述',
    body: '首答说"元认知包含规划/RAG/代码生成"，混淆了理念层和应用层的关系。修正后正确：元认知可注入这些场景。',
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

function Review20260624YuanRenZhi() {
  return (
    <article className="react-review-page">
      {/* HERO */}
      <section className="react-review-hero">
        <span className="eyebrow">LEARN · 2026 · 06 · 24 · 元认知 Metacognition</span>
        <h1>AI 智能体中的<strong>元认知</strong></h1>
        <p>
          元认知 = 对自身推理过程的审视与调控。它让 Agent 不仅能"改答案"，
          更能"改产生答案的策略"。本次学习建立了元认知与规划/纠正型RAG/代码生成的层级关系，
          并找到在 ReAct Agent 中注入元认知能力的最佳切入点。
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

      {/* SECTION 01 · 核心定义 */}
      <ReviewSection eyebrow="SECTION 01 · 核心定义" title="元认知：改策略，不只是改答案">
        <pre className="react-review-ascii">{`元认知的四大能力：

  自我反思        策略调整        错误检测        资源管理
  Reflect        Adjust         Detect         Manage
  评估自身表现    基于反思切换    自主检测并      优化时间与
  识别改进空间    决策规则       修正错误        计算资源

关键区分：
  纠错 = 行为层面（发现问题 → 修正结果）
  元认知 = 认知层面（审视推理过程 → 调整策略 → 持续进化）`}</pre>

        <div className="react-review-grid two mb-6">
          <Card className="react-review-card border-[#5a9a7a]/30">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">A层 · 焊死</Card.Description>
              <Card.Title>元认知 vs 普通纠错</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">普通纠错："推荐错了，换一个。" 元认知："我为什么总是按热门度排序？这个选取方式本身有问题吗？" 前者改答案，后者改产生答案的思维模式。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card border-[#5a9a7a]/30">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">A层 · 焊死</Card.Description>
              <Card.Title>没有元认知的 Agent</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">会发现问题、给出正确答案，但下次相同任务可能还会犯错——因为从不审视自己的决策策略本身。逐次修补，不改根源模式。</p>
            </Card.Content>
          </Card>
        </div>
      </ReviewSection>

      {/* SECTION 02 · 层级关系 */}
      <ReviewSection eyebrow="SECTION 02 · 层级关系" title="上下兄弟：元认知的家族结构">
        <pre className="react-review-ascii">{`第3层（上层理念）：   元认知
                  "对自身推理过程的审视与调控"
                         │
         ┌───────────────┼───────────────┐
         │               │               │
第2层：  规划          纠正型RAG       代码生成Agent
      (Planning)    (Corrective RAG)   (Code Gen)
         │               │               │
         │        ┌──────┼──────┐        │
第1层：  │        │      │      │        │
      步骤拆解  检索   评估/过滤  重排序  exec执行

关键洞察：
  不是"元认知包含它们"
  而是"元认知的思维方式可以注入到这些场景中，让它们变得更智能"`}</pre>

        <div className="react-review-grid three mb-6">
          <Card className="react-review-card">
            <Card.Header>
              <Card.Description className="text-[#6b89a8]">兄弟 A</Card.Description>
              <Card.Title>规划 Planning</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">明确目标 → 拆解步骤 → 迭代优化。迭代不是 for 循环（机械重复），而是每一轮之间有认知状态的变化。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card">
            <Card.Header>
              <Card.Description className="text-[#6b89a8]">兄弟 B</Card.Description>
              <Card.Title>纠正型 RAG</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">任务进行中触发。发现信息不足或质量不够时，重新检索 → 评估相关性 → 过滤/重排序 → 改进输出。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card">
            <Card.Header>
              <Card.Description className="text-[#6b89a8]">兄弟 C</Card.Description>
              <Card.Title>代码生成 Agent</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">用 AI 模型编写和执行代码解决问题。结合反馈调整生成策略，SQL-as-RAG 是典型应用。</p>
            </Card.Content>
          </Card>
        </div>
      </ReviewSection>

      {/* SECTION 03 · 对比辨析 */}
      <ReviewSection eyebrow="SECTION 03 · 对比辨析" title="纠正型 RAG vs 先发式上下文加载">
        <div className="react-review-grid two mb-6">
          <Card className="react-review-card">
            <Card.Header>
              <Card.Description className="text-[#6b89a8]">纠正型 RAG</Card.Description>
              <Card.Title>运行时触发</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">启动时机：任务进行中，发现当前输出不够好或信息不足时触发。核心动作：重新检索 + 评估 + 过滤。类比：做题时发现不会了再翻书。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card">
            <Card.Header>
              <Card.Description className="text-[#6b89a8]">先发式上下文加载</Card.Description>
              <Card.Title>任务前预加载</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">启动时机：任务开始前，预判需要什么背景信息。核心动作：将相关上下文预先装入模型。类比：考试前把公式表放桌上。</p>
            </Card.Content>
          </Card>
        </div>

        <blockquote className="border-l-3 border-[#c9b687] pl-6 py-3 bg-[#c9b687]/5 rounded-r-lg italic text-sm text-[#c9b687]">
          "纠正型 RAG 不一定要'错'才触发——信息不足或质量不够也是触发条件。"
        </blockquote>
      </ReviewSection>

      {/* SECTION 04 · 工程连接 */}
      <ReviewSection eyebrow="SECTION 04 · 工程连接" title="在 ReAct Agent 中注入元认知">
        <div className="react-review-grid two mb-6">
          <Card className="react-review-card border-[#5a9a7a]/30">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">工程切入点 · 确认</Card.Description>
              <Card.Title>工具调用后加 Reflection 层</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">ReAct 的 Observation 之后，加一个策略级反思："我用的这种调用工具的方式本身合理吗？结果和目标的差距是信息不足还是策略错误？"</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card border-[#a86b5c]/30">
            <Card.Header>
              <Card.Description className="text-[#a86b5c]">注意事项</Card.Description>
              <Card.Title>避免 Over-Reflection</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">元认知不是每一步都反思。简单任务直接执行才是最优。好的架构需要判断什么时候该反思、什么时候该直接干。</p>
            </Card.Content>
          </Card>
        </div>

        <pre className="react-review-ascii">{`ReAct 的认知层级进化：

普通 ReAct：
  Reasoning → Action → Observation → Reasoning → ...
  （战术级：看到结果，决定下一步做什么）

加入元认知的 ReAct：
  Reasoning → Action → Observation → Reflection → Reasoning → ...
  （战略级：审视"我一直用这种方式，这种方式本身合理吗？"）

差异：
  ReAct = 逐步纠正（每轮改答案）
  +元认知 = 策略级反思（改产生答案的方式）`}</pre>
      </ReviewSection>

      {/* SECTION 05 · 深层理解 */}
      <ReviewSection eyebrow="SECTION 05 · 深层理解" title="为什么元认知必须在架构层实现">
        <div className="react-review-grid two mb-6">
          <Card className="react-review-card border-[#a86b5c]/30">
            <Card.Header>
              <Card.Description className="text-[#a86b5c]">需加强</Card.Description>
              <Card.Title>LLM 单次推理是无状态的</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">LLM 没有"上一次我用了什么策略、效果如何"的跨轮次记忆。元认知需要：① 跨多轮的决策历史 ② 对历史的评估机制 ③ 基于评估的策略切换逻辑。这些必须在 Agent 框架里搭。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card">
            <Card.Header>
              <Card.Description className="text-[#6b89a8]">角色分工</Card.Description>
              <Card.Title>LLM = 思考引擎，Agent = 元认知骨架</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">LLM 提供推理能力（单次智能），但外部状态管理、反馈循环、策略存储是架构层的责任。</p>
            </Card.Content>
          </Card>
        </div>
      </ReviewSection>

      {/* SECTION 06 · 经典案例 */}
      <ReviewSection eyebrow="SECTION 06 · 经典案例" title="酒店推荐 Agent 的元认知过程">
        <pre className="react-review-ascii">{`酒店推荐 Agent 元认知示例：

第1步 · 初始决策：
  策略 = "选最便宜的" → 推荐 Budget Inn（$80, 质量6）

第2步 · 反思与评估：
  用户反馈 = "bad"（太便宜 / 质量低）
  Agent 不是简单换个酒店，而是审视策略本身：
  "我一直选最便宜的，这个策略是不是有问题？"

第3步 · 策略切换：
  从 'cheapest' 切换到 'highest_quality'
  → 推荐 Luxury Stay（$200, 质量9）

关键：改的是决策规则本身，不只是换了个推荐结果。`}</pre>
      </ReviewSection>

      {/* SECTION 07 · 退化分析 */}
      <ReviewSection eyebrow="SECTION 07 · 学习暴露点" title="需要加强的薄弱环节">
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

      {/* SECTION 08 · 结论 */}
      <ReviewSection eyebrow="SECTION 08 · 结论" title="学习完成 · 复习计划启动">
        <p className="text-sm text-[#d8dde3] leading-relaxed mb-4">
          本次学习核心成果：① 精确区分了元认知与普通纠错（改策略 vs 改答案）
          ② 建立了"上下兄弟"层级关系（理念层→应用场景→底层工具）
          ③ 找到在 ReAct Agent 中注入元认知的最佳切入点（工具调用后加 Reflection 层）。
          薄弱点为 LLM 无状态性的深层理解和 Over-Reflection 的判断标准。
        </p>
        <blockquote className="border-l-3 border-[#c9b687] pl-6 py-3 bg-[#c9b687]/5 rounded-r-lg italic text-sm text-[#c9b687]">
          "元认知让 Agent 从'逐次修补'升级为'持续进化'——不是每次做对，而是每次做错后变得更聪明。"
        </blockquote>
      </ReviewSection>

      {/* FOOTER */}
      <footer className="react-review-footer">
        <div className="flex justify-between flex-wrap gap-4 text-xs font-mono text-[#8a929e] mb-6">
          <div>2026 · 06 · 24 · 元认知 Metacognition · 初学</div>
          <div>A层3点 · 追问3通过 · 工程切入点1个</div>
        </div>
        <div className="tag-row">
          {['元认知', 'Metacognition', 'ReAct', 'Reflection', '纠正型RAG', '先发式加载', '规划', '代码生成', '策略切换', 'Over-Reflection', '无状态LLM', '初学'].map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </div>
      </footer>
    </article>
  );
}

export default Review20260624YuanRenZhi;
