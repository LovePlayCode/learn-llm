import { Card } from '@heroui/react';

const stats = [
  { value: '5', label: '上下文类型', color: 'text-[#58a6ff]' },
  { value: '4', label: '失败模式', color: 'text-[#f85149]' },
  { value: '6', label: '管理策略', color: 'text-[#3fb950]' },
  { value: '3', label: '追问通过', color: 'text-[#d29922]' },
  { value: '3', label: '纵向追问', color: 'text-[#a371f7]' },
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

function Review20260806ShangXiaWenGongCheng() {
  return (
    <article className="react-review-page">
      {/* HERO */}
      <section className="react-review-hero">
        <span className="eyebrow">LEARN · 2026 · 08 · 06 · 上下文工程</span>
        <h1>上下文工程<br /><strong>Context Engineering</strong></h1>
        <p>
          提示工程关注"静态的指令"，上下文工程管理"动态的信息流"——确保 Agent 在每一个步骤都拿到恰到好处的上下文，
          不多也不少。本次学习从项目实际痛点出发（上下文过长 + Agent 行为不稳定），系统掌握了五种类型、四种失败模式和六种管理策略。
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
      <ReviewSection eyebrow="SECTION 01 · 核心定义" title="上下文工程 vs 提示工程：静态 vs 动态">
        <p>
          <strong>提示工程（Prompt Engineering）</strong>专注于<strong>静态</strong>指令的构建——写好 system prompt、设计 few-shot examples、调格式。
          它的对象是"一次性注入的那段文本"。
        </p>
        <p>
          <strong>上下文工程（Context Engineering）</strong>管理的是<strong>动态</strong>信息流——随着 Agent 执行的每一步，
          需要不断裁剪、压缩、注入新的上下文。它的对象是"整个执行过程中进入模型窗口的全部内容"。
        </p>
        <div className="react-review-highlight">
          <strong>💡 一句话区分：</strong>提示工程管"写什么"，上下文工程管"给什么、什么时候给、给多少"。
        </div>
      </ReviewSection>

      {/* SECTION 02 · 知识地图 */}
      <ReviewSection eyebrow="SECTION 02 · 知识地图" title="核心概念三层结构">
        <pre className="react-review-ascii">{`                    上下文工程（Context Engineering）
                         │
          ┌──────────────┼──────────────┐
          │              │              │
    ① 是什么？       ② 为什么难？     ③ 怎么做？
          │              │              │
    ┌─────┴─────┐   ┌───┴───┐    ┌─────┴──────┐
    │ vs 提示工程 │   │4种失败│    │ 管理策略    │
    │ 静态 vs 动态│   │模式   │    │ 6种武器     │
    └─────┬─────┘   │(A2)   │    └─────┬──────┘
          │         └───┬───┘          │
          │             │              │
    ┌─────┴─────┐  ┌────┴────┐   ┌────┴──────────┐
    │ 5种上下文  │  │中毒 分心│   │压缩 摘要 剪枝  │
    │ 类型 (B1)  │  │混淆 冲突│   │沙箱 多Agent委托│
    └───────────┘  └─────────┘   │代理便签 运行时状态│
                                 └─────────────────┘`}</pre>
      </ReviewSection>

      {/* SECTION 03 · 链条 */}
      <ReviewSection eyebrow="SECTION 03 · 五种类型 + 四种失败模式 + 六种策略" title="核心链条：原材料 → 故障 → 修理手段">
        <h3>五种上下文类型（原材料）</h3>
        <div className="react-review-table-wrap">
          <table className="react-review-table">
            <thead>
              <tr><th>类型</th><th>内容</th><th>爆炸风险</th></tr>
            </thead>
            <tbody>
              <tr><td>指令 Instructions</td><td>规则、示例（few-shot）、工具描述</td><td>🟡 中 — few-shot 太多 → 分心</td></tr>
              <tr><td>知识 Knowledge</td><td>事实、数据库信息、长期记忆</td><td>🟡 中 — 太多 → 分心 / 矛盾 → 冲突</td></tr>
              <tr><td>工具 Tools</td><td>外部函数、API、MCP 服务</td><td>🔴 高 — 50 个工具 → 混淆</td></tr>
              <tr><td>对话历史 History</td><td>多轮用户交互 + Agent 自身输出</td><td>🔴 极高 — 指数爆炸</td></tr>
              <tr><td>用户偏好 Preferences</td><td>学习到的行为模式</td><td>🟢 低 — 通常可控</td></tr>
            </tbody>
          </table>
        </div>

        <h3>四种失败模式（故障）</h3>
        <div className="react-review-kp-grid">
          <Card className="react-review-kp">
            <span className="kp-label">🔴 失败 01</span>
            <span className="kp-title">上下文中毒 Poisoning</span>
            <span className="kp-body">错误信息进入上下文后自循环引用，Agent 沿着错误链路越走越远，<strong>不报错、很自信、全盘错</strong>。四种中最隐蔽。</span>
          </Card>
          <Card className="react-review-kp">
            <span className="kp-label">🟠 失败 02</span>
            <span className="kp-title">上下文分心 Distraction</span>
            <span className="kp-body">信息量太大，模型注意力被历史/知识稀释，<strong>原始意图被埋在中间</strong>（Lost in the Middle），逐渐偏离目标。</span>
          </Card>
          <Card className="react-review-kp">
            <span className="kp-label">🟡 失败 03</span>
            <span className="kp-title">上下文混淆 Confusion</span>
            <span className="kp-body">工具太多（50 个 MCP function），模型面对一堆描述 <strong>不知道该选哪个</strong>，甚至选错了工具。</span>
          </Card>
          <Card className="react-review-kp">
            <span className="kp-label">🟢 失败 04</span>
            <span className="kp-title">上下文冲突 Conflict</span>
            <span className="kp-body">上下文中存在<strong>矛盾信息</strong>（如用户旧偏好和新偏好并存），模型产出不一致的推理。</span>
          </Card>
        </div>

        <h3>完整关系链条</h3>
        <pre className="react-review-ascii">{`┌─────────────────────────────────────────────────────────────────┐
│              类型 → 失败模式 → 策略  完整映射                       │
│                                                                 │
│  对话历史 ──→ 分心 (Lost in the Middle)                           │
│     └──→ 策略：上下文压缩 + 摘要（旧历史压成摘要，保留核心意图）      │
│                                                                 │
│  工具 ──→ 混淆 (不知道该选哪个)                                    │
│     └──→ 策略：动态注入 / 按需工具加载（只给当前步骤需要的工具）      │
│                                                                 │
│  知识 ──→ 分心 (量太大)                                           │
│     └──→ 策略：压缩上下文、摘要                                    │
│  知识 ──→ 冲突 (新旧矛盾)                                          │
│     └──→ 策略：代理便签（一致性校验）、知识剪枝                      │
│                                                                 │
│  指令 ──→ 分心 (few-shot 范例太多 → 注意力被劫持)                   │
│     └──→ 策略：剪枝（只保留关键范例）                                │
│                                                                 │
│  任意类型 ──→ 中毒 (错误自循环)                                     │
│     └──→ 策略：沙箱隔离 + 校验 + Agent 便签                         │
└─────────────────────────────────────────────────────────────────┘`}</pre>
      </ReviewSection>

      {/* SECTION 04 · 亮点 */}
      <ReviewSection eyebrow="SECTION 04 · 学习亮点" title="学习者表现追踪">
        <h3>⭐ 金光时刻</h3>
        <ul>
          <li><strong>"银弹"洞察：</strong>追问"为什么要把失败分成四种而不是统称'上下文出错了'"时，学习者独立说出"如果统称一个名字，解决方案就是一个统一的银弹方案——但事实上很难出现统一的银弹"——精准命中分类的工程价值。</li>
          <li><strong>中毒最阴险：</strong>纵向追问"哪种失败最隐蔽"时，学习者指出中毒"会沿着中毒的链路一直走下去，最终导致任务质量不高"——抓住了中毒自循环+不报错的本质特征。</li>
          <li><strong>Lost in the Middle 自发引用：</strong>在诊断"Agent 越聊越偏"时，学习者直接调用论文发现解释分心现象，展示跨章节知识迁移能力。</li>
        </ul>

        <h3>🔍 需要加强</h3>
        <ul>
          <li><span className="tag tag-warn">术语边界</span> 初轮把 few-shot examples 归为"知识"→ 应是"指令（Instructions）"的子类</li>
          <li><span className="tag tag-warn">失败模式辨识</span> "范例太多"会触发分心（Distraction），不是混淆（Confusion）。混淆 = "分不清该用哪个工具"；分心 = "被别的东西吸引了注意力"</li>
          <li><span className="tag tag-warn">架构思维</span> 第三问"框架层 vs Agent 层"的回答缺少"组合"视角——实际业界实践是框架提供原语（compress/summarize/pruneTools），Agent 自主配置策略</li>
        </ul>

        <h3>✨ 修正记录</h3>
        <ul>
          <li>第一轮复述只"罗列"概念未说关系 → 追问后用链条格式正确表达"类型 → 失败 → 策略"</li>
          <li>RAG vs 上下文工程：从"上下文工程包含 RAG"修正为"RAG 是上下文工程工具箱里的一把特定工具"</li>
          <li>MCP 归类精准：独立判断 MCP 属于"工具"类型，会引入上下文混淆风险</li>
        </ul>
      </ReviewSection>

      {/* SECTION 05 · 纵向追问 */}
      <ReviewSection eyebrow="SECTION 05 · 纵向追问" title="为什么是这样设计的？">
        <div className="react-review-table-wrap">
          <table className="react-review-table">
            <thead>
              <tr><th>追问</th><th>学习者回答</th><th>评判</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>为什么分四种失败模式？</td>
                <td>"将错误分类，可以用细致的策略去解决问题，统一叫'上下文出错'说明解决方案是统一的银弹"</td>
                <td><span className="tag tag-good">🌟 优秀</span> 抓住了设计哲学的核心——精确诊断 → 精确武器库</td>
              </tr>
              <tr>
                <td>哪种失败模式最阴险？</td>
                <td>"上下文中毒比较严重，如果某一步中毒了，Agent会沿着中毒的链路一直走下去"</td>
                <td><span className="tag tag-good">✅ 精准</span> 中毒的自循环 + 不报错 = 最隐蔽</td>
              </tr>
              <tr>
                <td>上下文管理放在哪一层？</td>
                <td>"每个Agent自己管自己，可以细致化管理；框架层统一管，整个框架有点臃肿"</td>
                <td><span className="tag tag-warn">🟡 方向对</span> 缺少"组合"思维——实践中框架提供原语，Agent 自配策略</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ReviewSection>

      {/* SECTION 06 · 横向连接 */}
      <ReviewSection eyebrow="SECTION 06 · 横向连接" title="与旧知识的焊接">
        <div className="react-review-kp-grid">
          <Card className="react-review-kp">
            <span className="kp-label">连接 01</span>
            <span className="kp-title">RAG ⊂ 上下文工程工具箱</span>
            <span className="kp-body">RAG 只管"从知识库动态检索相关文档"，上下文工程还管对话历史压缩、工具描述剪枝、冲突知识校验。RAG 是上下文工程中"动态注入知识"策略的一种实现方式。</span>
          </Card>
          <Card className="react-review-kp">
            <span className="kp-label">连接 02</span>
            <span className="kp-title">Few-shot = 指令，不是知识</span>
            <span className="kp-body">在提示词工程里塞范例的目的是告诉模型"怎么答、用什么格式"——这本质是下达指令。在五种类型中属于 Instructions，范例太多 → 分心（不是混淆）。</span>
          </Card>
          <Card className="react-review-kp">
            <span className="kp-label">连接 03</span>
            <span className="kp-title">MCP → 工具 → 混淆</span>
            <span className="kp-body">MCP 是工具类型的标准化封装。连接十几个 MCP Server → 数百个 function → 上下文混淆。策略：按需注入（动态剪枝）。</span>
          </Card>
          <Card className="react-review-kp">
            <span className="kp-label">连接 04</span>
            <span className="kp-title">上下文压缩 × 缓存体系</span>
            <span className="kp-body">上下文工程的"摘要+压缩"与之前学的"缓存三兄弟"（精确/语义/提示词缓存）形成了互补——缓存省计算，压缩省 token 窗口。</span>
          </Card>
        </div>
      </ReviewSection>

      {/* SECTION 07 · 学习报告 */}
      <ReviewSection eyebrow="SECTION 07 · 学习报告" title="📊 本单元学习报告">
        <div className="react-review-table-wrap">
          <table className="react-review-table">
            <thead>
              <tr><th>维度</th><th>评估</th></tr>
            </thead>
            <tbody>
              <tr><td>学习内容</td><td>上下文工程 Context Engineering（AI Agents for Beginners 第12课）</td></tr>
              <tr><td>A 层掌握</td><td><span className="tag tag-good">✅ 通过</span> 上下文工程 vs 提示工程区分、四种失败模式诊断、管理策略方向正确</td></tr>
              <tr><td>B 层掌握</td><td><span className="tag tag-info">🟡 方向对</span> 五种类型分类、规划管线设计思路清晰；架构分层（框架 vs Agent）需补充"组合"视角</td></tr>
              <tr><td>需要加强</td><td>Instructions vs Knowledge 边界（few-shot 归属）、混淆 vs 分心的精准区分、框架层+Agent 层组合架构</td></tr>
              <tr><td>核心优势</td><td>跨章节连接能力强（自发引用 Lost in the Middle + MCP），"银弹"级别设计哲学洞察</td></tr>
              <tr><td>下次复习</td><td>D2: 2026-08-08 · D7: 2026-08-13 · D30: 2026-09-05</td></tr>
              <tr><td>下一步行动</td><td>在自己项目中实践上下文剪枝（按需工具注入），观察 Agent 稳定性变化</td></tr>
            </tbody>
          </table>
        </div>
      </ReviewSection>
    </article>
  );
}

export default Review20260806ShangXiaWenGongCheng;
