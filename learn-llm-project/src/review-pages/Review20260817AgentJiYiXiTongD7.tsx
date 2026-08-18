import { Card } from '@heroui/react';

const stats = [
  { value: '9', label: '闭卷小问', color: 'text-[#6b89a8]' },
  { value: '2', label: '锈钉重焊', color: 'text-[#c97a6b]' },
  { value: '6', label: '补针修正', color: 'text-[#5a9a7a]' },
  { value: '3', label: '自发洞察', color: 'text-[#c9b687]' },
];

const blindspots = [
  {
    title: '① 三层家族树锈掉两颗钉子 → 已重焊',
    body: '类型压平（五种并排）+ RAG 降级（与 Mem0 并列），初学当天盲点 1、4 的原位复发，典型 7 天衰减。重焊后立稳，D30 首验防复发。',
  },
  {
    title: '② 工作 vs 短期记忆边界：弃权 → 已讲授',
    body: '判据：寿命跟一个任务走（草稿纸）还是跟整段会话走（会议记录）。学习日标记的薄弱点，今日正式厘清。',
  },
  {
    title: '③ "增删改查"串入"查" → 读写路径分层',
    body: '查 = 情报员读路径，不在 Mem0 写流水线。流水线只做加/改/删三种更新决策。',
  },
  {
    title: '④ "提示词构建"术语陷阱 → 动态注入',
    body: '知识 Agent 的注入姓"上下文工程"不姓"提示工程"（运行时 vs 设计期）。附赠区分：提示词注入 = 安全攻击术语。',
  },
  {
    title: '⑤ 缓存处方只用"用户关联"一个轴 → 双轴齐用',
    body: '报了两道生死题却只用一道半。实体记忆要分缓存类型（语义✗/提示词✓）；情节记忆必须上 TTL 时效判断。',
  },
  {
    title: '⑥ 兄弟名单含自己 → 已修正',
    body: '问"兄"时先把自己摘出去——站进家族里看关系，而不是站在外面背名单。',
  },
];

const highlights = [
  {
    title: '自发推导「提示工程 ⊆ 上下文工程」⭐',
    body: '学完 ⊆ 关系当场迁移到新概念，还看穿"对立是教学手法、包含才是事实结构"。',
  },
  {
    title: '"判断是否需要"过滤器留存',
    body: 'A2 自发带出相关性过滤（不能什么都存）——核心挑战层面的理解，不是背流程。',
  },
  {
    title: '"删"（遗忘能力）7 天后仍亮',
    body: '初学高光时刻存活；另自发补充向量构建成本最高的工程视角，超出课本。',
  },
  {
    title: '诚实换真讲解',
    body: '多处直接说"不会/忘记了"——诚实比答对更值钱，每次都换来针对性补讲。',
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

function Review20260817AgentJiYiXiTongD7() {
  return (
    <article className="react-review-page">
      {/* HERO */}
      <section className="react-review-hero">
        <span className="eyebrow">REVIEW · D7 · 2026 · 08 · 17 · Agent 记忆系统（学习日 08-10）</span>
        <h1>Agent 记忆系统 D7 跨章节综合<strong> 含 D2 基础补验</strong></h1>
        <p>
          距学习日 7 天（D2 逾期 5 天未做，折叠进本场开头补验）。9 问闭卷，一题一评。
          最大发现：初学当天"焊死"的三层家族树有两颗钉子锈掉（类型压平 + RAG 降级），现场重焊立稳；
          最大亮点：自发推导出「提示工程 ⊆ 上下文工程」，⊆ 关系模式完成自发迁移。
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

      {/* SECTION 01 · D2 补验 */}
      <ReviewSection eyebrow="SECTION 01 · D2 基础补验" title="A1–A3 · 家族树重焊 + 双角色 + 上下兄弟">
        <Card className="react-review-card border-[#c97a6b]/30 mb-6">
          <Card.Header>
            <Card.Description className="text-[#c97a6b]">首轮翻车 → 三轮修成</Card.Description>
            <Card.Title>A1 · 三层结构图（两颗锈钉）</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xs text-[#b6bec8]">首轮把「长期/短期/工作/情景/个人偏好」五个类型压平在同一层，工具层只剩"向量数据库"——初学盲点第 1 条原位复发（锈钉一号）。二轮骨架归位但 RAG 仍与 Mem0 并列——盲点第 4 条同步复发（锈钉二号）。三轮画出正确家族树。附加题「工作 vs 短期记忆边界」弃权 → 现场讲授。</p>
          </Card.Content>
        </Card>

        <pre className="react-review-ascii">{`第3层：Agent Memory（记忆系统）
          │
第2层·时效：工作记忆(任务级) │ 短期记忆(会话级) │ 长期记忆(跨会话)
                                                      │
                          第2层·内容：角色记忆 │ 情节记忆 │ 实体记忆
                                                      │
          ———— RAG（设计模式：检索→注入→生成，高于工具）————
                                                      │
第1层·工具：Mem0 / Cognee —— 向量 + 图 + KV 三种存储混合

🔑 工作记忆=手边草稿纸（任务结束就扔）｜短期记忆=会议记录本（会话结束才合上）
   一段会话可含多个任务 → 时效维度上是兄弟，不是父子`}</pre>

        <div className="react-review-grid two mb-6">
          <Card className="react-review-card border-[#5a9a7a]/30">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">补丁后通过</Card.Description>
              <Card.Title>A2 · 双角色（存档员 + 情报员）</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">方向与时机全对，亮点是自发说出"判断是否需要存入"——相关性过滤意识留存。缺两处：角色工牌与写路径中间工序「加工」（去噪、压缩、结构化）。没有加工，记忆库变垃圾场 → 分心失败模式回归。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card border-[#5a9a7a]/30">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">补丁后通过</Card.Description>
              <Card.Title>A3 · 情节记忆上下兄弟</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">「上」连爷爷都请出（长期记忆 → Agent Memory），重焊见效。「兄」把自己列进了兄弟名单——站进家族看关系时先把自己摘出去。「下」补上存储能力：情节记忆靠向量·语义相似搜索找回。</p>
            </Card.Content>
          </Card>
        </div>
      </ReviewSection>

      {/* SECTION 02 · D7 跨章节 */}
      <ReviewSection eyebrow="SECTION 02 · D7 跨章节综合" title="B1–B3 · Mem0 · 元认知 · ⊆ 关系">
        <Card className="react-review-card border-[#5a9a7a]/30 mb-6">
          <Card.Header>
            <Card.Description className="text-[#5a9a7a]">补丁后通过</Card.Description>
            <Card.Title>B1 · Mem0 两阶段 + 三存储</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xs text-[#b6bec8]">提取 ✓ / 更新决策 ✓，但答成"增删改查"——查是情报员的读路径，不在写流水线。亮点："删"（遗忘能力）7 天后仍留存。图=关系穿梭 ✓；精确匹配误答向量 → 修正为 KV。本质答对（三种存取方式根本不同），并自发补充构建成本视角（向量最贵）——课本外洞察；精修：图也不便宜，真正便宜到家的是 KV。</p>
          </Card.Content>
        </Card>

        <pre className="react-review-ascii">{`写路径（两阶段流水线）：提取（LLM总结对话→记忆片段） → 更新决策（加 / 改 / 删）
读路径（不在流水线内）：情报员检索 → 注入上下文

向量 = 模糊语义相似  → 情节记忆（"和这经历类似的"）
图   = 实体关系穿梭  → 实体记忆·关系面（"小王关联哪些偏好"）
KV   = 精确匹配      → 实体记忆·事实面（"小王住哪个城市"）
角色记忆 = 每轮直接注入 system prompt（基本不靠"查"）`}</pre>

        <div className="react-review-grid two mb-6">
          <Card className="react-review-card border-[#5a9a7a]/30">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">通过</Card.Description>
              <Card.Title>B2 · Memory × 元认知</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">三问全对：审视对象（思考过程 vs 对话历史）、目的（改决策 vs 补信息）、分工（改变 vs 辅助）。收口：两者同为「审视 → 提取 → 应用」循环，套在不同对象上。口诀：元认知改"怎么想"，知识 Agent 管"手里有什么"。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card border-[#6b89a8]/30">
            <Card.Header>
              <Card.Description className="text-[#6b89a8]">术语陷阱修正</Card.Description>
              <Card.Title>B3 · 知识 Agent ⊆ 上下文工程</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">方向正确但答成"提示词构建"——静态阵营的词！正确归属：检索→注入 = 上下文工程的动态注入策略。五种上下文类型已补讲：指令 / 知识（★长期记忆挂此户）/ 工具 / 对话历史 / 用户偏好——知识 Agent 只管"长期记忆"一种来源，故为真子集。</p>
            </Card.Content>
          </Card>
        </div>

        <pre className="react-review-ascii">{`上下文工程（管整个窗口的全部信息流 · 运行时动态调配）
   ├── ⊇ 提示工程（产出 = 五种类型第①类"指令"，静态写好交运行时管理）
   └── ⊇ 知识 Agent（管"知识/记忆"类型的检索→注入）

🔑 对立是教学手法，包含才是事实结构。
   提示工程 = 开工前写剧本（设计期·静态）
   上下文工程 = 演出中当导播（运行期·动态）
   ⚠️ 术语警报：提示词注入(Prompt Injection) = 安全攻击术语，与提示工程不同户口`}</pre>
      </ReviewSection>

      {/* SECTION 03 · B4 B5 */}
      <ReviewSection eyebrow="SECTION 03 · D7 跨章节综合" title="B4–B5 · 独立三理由 · 缓存处方">
        <Card className="react-review-card border-[#5a9a7a]/30 mb-6">
          <Card.Header>
            <Card.Description className="text-[#5a9a7a]">通过</Card.Description>
            <Card.Title>B4 · 知识 Agent 为何独立</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xs text-[#b6bec8]">① 上下文隔离 ✓——自发缝入 Lost in the Middle（分心），一条答案串起记忆×上下文工程×多代理三章。② 权限面 ✓——顺势补全失败域（记忆 bug 拖垮业务）。③ 异步运行——经"用户要等归档吗"场景引导后答出 ✓。</p>
          </Card.Content>
        </Card>

        <Card className="react-review-card border-[#6b89a8]/30 mb-6">
          <Card.Header>
            <Card.Description className="text-[#6b89a8]">补丁后通过</Card.Description>
            <Card.Title>B5 · 缓存生死题 × 四种记忆</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xs text-[#b6bec8]">两道生死题报名字 ✓（"实效性"→修"时效性"）。角色记忆 ✓。但处方阶段只用了"用户关联"轴，"时效性"轴几乎闲置——报完题不用题，是本场最可惜的失分方式。情节 vs 实体已补讲：档案卡（"是"什么·KV精确查）vs 日记（"发生"过什么·向量相似搜）。</p>
          </Card.Content>
        </Card>

        <pre className="react-review-ascii">{`缓存处方表（两道生死题：① 时效性 ② 用户关联度）

角色记忆 ✓ 可缓存        —— 基本不变 + 与用户无关
实体记忆 ⚠️ 语义缓存✗ / 提示词缓存✓ —— 稳定但高度私人
           （语义缓存按"问题相似"命中 → 张三的问题可能命中李四的答案，隐私串味）
           （提示词缓存复用同用户稳定前缀的 KV 计算 → 省算力不跨用户）
情节记忆 ⚠️ 带 TTL 判断时效 —— 私人 + 可能过时（"上个月住北京"会搬家）
工作记忆 ✗ 不缓存        —— 时效极短，任务结束即弃，缓存无意义`}</pre>
      </ReviewSection>

      {/* SECTION 04 · 盲点自查 */}
      <ReviewSection eyebrow="SECTION 04 · 盲点自查" title="今日新焊与补针">
        <div className="react-review-grid three">
          {blindspots.map((item, idx) => (
            <Card className="react-review-card border-[#6b3f3a]" key={idx}>
              <Card.Header>
                <Card.Description className="text-[#a86b5c]">已修正</Card.Description>
                <Card.Title>{item.title}</Card.Title>
              </Card.Header>
              <Card.Content>
                <p className="text-xs text-[#b6bec8]">{item.body}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </ReviewSection>

      {/* SECTION 05 · 亮点 */}
      <ReviewSection eyebrow="SECTION 05 · 今日亮点" title="自发生长的洞察">
        <div className="react-review-grid two">
          {highlights.map((item, idx) => (
            <Card className="react-review-card border-[#5a9a7a]/30" key={idx}>
              <Card.Header>
                <Card.Description className="text-[#5a9a7a]">亮点</Card.Description>
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
      <ReviewSection eyebrow="SECTION 06 · 结论与计划" title="通过 · 骨架在细节漏 · 后续排期">
        <p className="text-sm text-[#d8dde3] leading-relaxed mb-4">
          本场 D7（含 D2 补验）9 问全部收口。整体画像是"骨架在、细节漏"的典型 7 天衰减：三层树、双角色、流水线、⊆ 关系、独立三理由都还在；
          术语精度、记忆边界、缓存双轴这些细节需要补针。两颗层级锈钉重焊后立稳，"上下兄弟问三句"仍需用到条件反射。
          后续：08-18 清开发核心模式 D2 + A 层 D2（趁新鲜）；08-19 上下文工程抢救（今日 B3 暴露五种类型已褪色）；08-20 智能体协议抢救；09-09 记忆系统 D30 首验今日新焊点。
        </p>
        <blockquote className="border-l-3 border-[#c9b687] pl-6 py-3 bg-[#c9b687]/5 rounded-r-lg italic text-sm text-[#c9b687]">
          "今天最漂亮的一刻：学完知识 Agent ⊆ 上下文工程，你当场反推出'提示工程也 ⊆ 上下文工程'——对立是教学手法，包含才是事实结构。你读的不是文字，是结构。"
        </blockquote>
      </ReviewSection>

      {/* FOOTER */}
      <footer className="react-review-footer">
        <div className="flex justify-between flex-wrap gap-4 text-xs font-mono text-[#8a929e] mb-6">
          <div>2026 · 08 · 17 · Agent 记忆系统 D7 跨章节综合（含 D2 补验）</div>
          <div>9 问 · 全部收口 · 2 锈钉重焊</div>
        </div>
        <div className="tag-row">
          {['Agent 记忆系统', 'D7 跨章节', 'D2 补验', '上下兄弟问三句', 'Mem0 两阶段', '三种存储', '存档员 情报员', '缓存生死题', '语义缓存 vs 提示词缓存', '知识 Agent ⊆ 上下文工程', '提示工程 ⊆ 上下文工程', 'Lost in the Middle', '锈钉重焊', '诚实换真讲解'].map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </div>
      </footer>
    </article>
  );
}

export default Review20260817AgentJiYiXiTongD7;
