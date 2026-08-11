import { Card } from '@heroui/react';

const stats = [
  { value: '5', label: '闭卷题', color: 'text-[#6b89a8]' },
  { value: '5', label: '通过', color: 'text-[#eef0f3]' },
  { value: '2', label: '元层级焊死', color: 'text-[#5a9a7a]' },
  { value: '1', label: '跨章节缝合', color: 'text-[#c9b687]' },
];

const d30Warnings = [
  {
    title: '五类威胁 / 三档安全边界首轮慢',
    body: '可信赖 Agent 章内容，对元认知 D30 是借用上下文。今天先忘后捞，提取通道偏慢，建议季度回访再验。',
    status: '需关注',
  },
  {
    title: '协调层元认知"上/兄"层级·新焊',
    body: '从"纠错家族"修正回"元认知家族"才归位。已稳，但属本次新焊点，需巩固防复发为"质检"或"纠错家族"。',
    status: '需关注',
  },
  {
    title: 'Evaluator 双层级路由·防退化',
    body: '"答案层→纠错 / 策略层→元认知"分流是本次厘清的，若日后偷懒把所有失败送进 self-Reflection，Over-Reflection 循环复燃。',
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

function Review20260727YuanRenZhiD30() {
  return (
    <article className="react-review-page">
      {/* HERO */}
      <section className="react-review-hero">
        <span className="eyebrow">REVIEW · 2026 · 07 · 27 · 元认知 Metacognition D30 综合应用</span>
        <h1>元认知 D30 综合应用<strong> 五题闭卷 + 跨章节缝合</strong></h1>
        <p>
          距上次接触（2026-07-01 D7）已 26 天。以五道闭卷题验证元认知是否进入"能当工具使出来"的长期记忆区。
          最大亮点：协调层元认知的"上下兄弟"层级从混淆到焊死，双层级路由设计完整；压轴题 5 把
          元认知 × 可信赖 Agent × 错误累积 三章缝成一张网。
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

      {/* SECTION 01 · 概念辨析闭卷 */}
      <ReviewSection eyebrow="SECTION 01 · 概念辨析闭卷" title="题 1 + 题 2 · 改策略vs改答案 · 协调层元认知vs质检">
        <div className="react-review-grid two mb-6">
          <Card className="react-review-card border-[#5a9a7a]/30">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">通过</Card.Description>
              <Card.Title>题 1 · 元认知 vs 普通纠错</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">用"做题"类比：元认知调思路（方法/标准层），普通纠错只改答案（结果层）。边界题验证：同方法重算只改 37→39 = 普通纠错；"怀疑算错"只是监控苗头，没升级成换方法就不算元认知。钥匙焊死：方法没变只改结果=普通纠错；方法/标准变了=元认知。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card border-[#5a9a7a]/30">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">从混淆到焊死</Card.Description>
              <Card.Title>题 2 · 协调层元认知 vs 质检</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">首轮答成"检查输出对不对"——那是质检。经上下兄弟修正后归位：上=元认知家族（非纠错家族）；兄=质检（同住协调层，质检查产物、它查策略）；下=修改协作策略/换更强模型。本次最关键元层级修复。</p>
            </Card.Content>
          </Card>
        </div>

        <pre className="react-review-ascii">{`协调层元认知 · 上下兄弟分层（题 2 收口版）

第 3 层（家族 / 理念）      元认知 Metacognition
                            = "改策略，不只改答案"（战略级）
                                  │
第 2 层（具体方法 / 兄弟）    ├── 协调层元认知  → 审视「协作策略对不对」
                            │       （分配 / 模式 / Agent 选择）
                            │
                            └── 质检 Quality Check → 审视「产物对不对」
                                    （验收标准 / 边界 / 合规）  ← 兄弟，非它自己

🔑 质检问"东西做对没"，协调层元认知问"我这样安排对没对"。`}</pre>
      </ReviewSection>

      {/* SECTION 02 · Over-Reflection */}
      <ReviewSection eyebrow="SECTION 02 · 应用 · Over-Reflection" title="题 3 · 三个场景判断 + 过度反思代价">
        <div className="react-review-grid three mb-6">
          <Card className="react-review-card border-[#5a9a7a]/30">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">不反思</Card.Description>
              <Card.Title>(a) 酒店偶尔选错</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">熟悉任务常规小错，错的只是输出层，策略没毛病。泛泛"模型有偏差"可优化为"熟悉任务常规小错，做法本身没问题"。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card border-[#5a9a7a]/30">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">该反思</Card.Description>
              <Card.Title>(b) 新领域首跑不通</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">执行路径可能全错，需回溯决策、重新生成决策。这是 7/01 曾栽过的坑（当时判成不需反思），今天主动判对。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card border-[#5a9a7a]/30">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">该反思</Card.Description>
              <Card.Title>(c) 用户连说三次不对</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">连续不满意说明初始决策就偏了，属于策略层问题，需反思。</p>
            </Card.Content>
          </Card>
        </div>

        <Card className="react-review-card border-[#5a9a7a]/30 mb-6">
          <Card.Header>
            <Card.Description className="text-[#5a9a7a]">超出预期</Card.Description>
            <Card.Title>过度反思 Over-Reflection 的代价</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xs text-[#b6bec8]">若错误地对(a)也反思：① 成本（反复调模型烧 token）；② 速度（延迟飙升）；③ 循环——"一直改但第一次方案已对"，把对的改坏；④ 根因——问题本身不清或无解时再反思也空转。导出工程护栏：反思设预算 + 用"错的是答案还是策略"尺子分流。</p>
          </Card.Content>
        </Card>
      </ReviewSection>

      {/* SECTION 03 · 设计元认知模块 */}
      <ReviewSection eyebrow="SECTION 03 · 应用 · 设计元认知模块" title="题 4 · 无状态三缺失 + 双层级路由">
        <Card className="react-review-card border-[#5a9a7a]/30 mb-6">
          <Card.Header>
            <Card.Description className="text-[#5a9a7a]">通过</Card.Description>
            <Card.Title>电商客服 Agent 的元认知模块</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xs text-[#b6bec8]">加 Evaluator + self-Reflection 两节点：Evaluator 每最小任务后评估，self-Reflection 反思后注入执行节点影响决策。补齐无状态三缺失：① 决策历史存储 = Reasoning Chain（存做了啥+为啥）；② 评估机制 = Evaluator；③ 策略切换逻辑 = 注入执行节点。</p>
          </Card.Content>
        </Card>

        <pre className="react-review-ascii">{`元认知模块 · 双层级路由（题 4 收口版）

        ┌──────── 决策历史存储 (Reasoning Chain：做了啥 + 为啥)
        │
执行节点 ──完成最小任务──▶ Evaluator（双层级判断）
                              │
              ┌───────────────┴───────────────┐
         答案层坏                              策略层坏
   （准确性 / 事实性 / 格式 / 约束）      （目标完成度 / 系统健康度）
              │                                 │
         纠错 / 重试                        self-Reflection / 重规划
              │                                 │
              └────────▶ 注入执行节点，影响下一轮决策 ◀──┘

🔑 同一 Evaluator 可看两层，但下游必须分流：答案层→纠错，策略层→元认知。`}</pre>

        <Card className="react-review-card border-[#6b89a8]/30 mb-6">
          <Card.Header>
            <Card.Description className="text-[#6b89a8]">关键修正</Card.Description>
            <Card.Title>双层级必须分流</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xs text-[#b6bec8]">五维度不是一家人：准确性/事实性/格式约束属答案层（纠错/重试）；目标完成度/系统健康度属策略层（self-Reflection/重规划）。若答案小错也触发反思，则 7/01 戒掉的 Over-Reflection 循环复燃。Evaluator 判完要"路由"，不能"判完就反思"。</p>
          </Card.Content>
        </Card>
      </ReviewSection>

      {/* SECTION 04 · 跨章节缝合 */}
      <ReviewSection eyebrow="SECTION 04 · 综合 · 跨章节缝合 ⭐" title="题 5 · 元认知 × 可信赖 Agent × 错误累积">
        <Card className="react-review-card border-[#5a9a7a]/30 mb-6">
          <Card.Header>
            <Card.Description className="text-[#5a9a7a]">通过</Card.Description>
            <Card.Title>缝合结论</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xs text-[#b6bec8]">敌人 = 错误累积 1−p^N。checkpoint = 安全网（固定位置插暂停、局部重试、把 N 切小段）。元认知 = 主动刹车（动态觉察、早发现早止损，比安全网更靠前）；挡住越权/过度代理两类输出侧威胁，常导向人类审批档（本质即 HITL 版 checkpoint）。三者合作把 N 压到最小。</p>
          </Card.Content>
        </Card>

        <pre className="react-review-ascii">{`元认知 × checkpoint × 错误累积 三者配合

敌人：错误累积 1 − p^N（每步错 p，连走 N 步翻车）
  │
  ├── checkpoint = 安全网（位置驱动）
  │     在预设固定关口插暂停（调外部工具前 / 支付前）
  │     到这个点就查，不管当时有没有问题 → 局部重试，把 N 切小段
  │
  └── 元认知 = 主动刹车（信号驱动）
        动态觉察，持续监控策略 / 威胁苗头
        一旦发现越权 / 过度代理征兆就立刻刹
        → 常导向「人类审批」档（HITL 版 checkpoint）

配合：元认知能早刹就早刹（主动刹车），
      刹不住或到固定关口还有 checkpoint 兜底（安全网）。`}</pre>

        <Card className="react-review-card border-[#6b89a8]/30 mb-6">
          <Card.Header>
            <Card.Description className="text-[#6b89a8]">先忘后捞</Card.Description>
            <Card.Title>前置缺口补救：五类威胁 + 三档安全边界</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xs text-[#b6bec8]">题 5 前发现已遗忘，用"输入/推理/输出"与"能不能反悔"两锚点捞回：五类威胁 = 提示词注入·知识库投毒·幻觉·越权·过度代理；三档安全边界 = 自动执行·人类审批·绝对禁止。"过度代理=擅自替用户做太多自主决策"已能说清动作。</p>
          </Card.Content>
        </Card>
      </ReviewSection>

      {/* SECTION 05 · 盲点与追击 */}
      <ReviewSection eyebrow="SECTION 05 · 盲点与追击" title="需关注的退化风险">
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

      {/* SECTION 06 · 结论 */}
      <ReviewSection eyebrow="SECTION 06 · 结论" title="五题全过 · 进入长期记忆区">
        <p className="text-sm text-[#d8dde3] leading-relaxed mb-4">
          本次 D30 五题闭卷全过。最大价值不是具体知识点，而是三件事真正"用出来了"：① 协调层元认知的"上下兄弟"从混淆到焊死；
          ② 无状态三缺失 + 双层级路由，能独立设计可运行的元认知模块；③ 压轴把元认知 × 可信赖 Agent × 错误累积缝成网——
          "主动刹车 vs 安全网"的骨架在全新场景里自动展开。元认知正式进入长期记忆区。
        </p>
        <blockquote className="border-l-3 border-[#c9b687] pl-6 py-3 bg-[#c9b687]/5 rounded-r-lg italic text-sm text-[#c9b687]">
          "今天最漂亮的一刻：题 2 从'纠错家族'改回'元认知家族'——之前三次碰协调层元认知都栽在'质检'坑里，这次自己用上下兄弟捋出来了。分层意识不是背定义，是能反向审查自己的答案。"
        </blockquote>
      </ReviewSection>

      {/* FOOTER */}
      <footer className="react-review-footer">
        <div className="flex justify-between flex-wrap gap-4 text-xs font-mono text-[#8a929e] mb-6">
          <div>2026 · 07 · 27 · 元认知 Metacognition D30 综合应用</div>
          <div>5 题 · 全部通过 · 跨章节缝合</div>
        </div>
        <div className="tag-row">
          {['元认知', 'Metacognition', '改策略不只改答案', '协调层元认知', '上下兄弟问三句', 'Over-Reflection', '无状态三缺失', '双层级路由', 'Reasoning Chain', '可信赖 Agent', '五类威胁', '三档安全边界', '错误累积 1−p^N', 'checkpoint 安全网', '主动刹车', 'D30 综合'].map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </div>
      </footer>
    </article>
  );
}

export default Review20260727YuanRenZhiD30;
