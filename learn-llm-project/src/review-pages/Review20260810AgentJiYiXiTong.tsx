import { Card } from '@heroui/react';

const stats = [
  { value: '6', label: '记忆类型', color: 'text-[#58a6ff]' },
  { value: '2', label: '实现工具', color: 'text-[#3fb950]' },
  { value: '4', label: '追问通过', color: 'text-[#d29922]' },
  { value: '5', label: '跨章连接', color: 'text-[#a371f7]' },
  { value: '1', label: '层级修正', color: 'text-[#f85149]' },
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

function Review20260810AgentJiYiXiTong() {
  return (
    <article className="react-review-page">
      {/* HERO */}
      <section className="react-review-hero">
        <span className="eyebrow">LEARN · 2026 · 08 · 10 · Agent 记忆系统</span>
        <h1>Agent 记忆系统<br /><strong>Agent Memory</strong></h1>
        <p>
          学习如何在无状态的 LLM 之上构建有状态的记忆层。掌握六种记忆类型的层级关系、知识 Agent 自改进循环（存档员 + 情报员）、
          以及 Mem0 两阶段流水线。最大亮点：课前热身即猜中分类框架，跨章节连接自发缝合元认知、上下文工程、多代理、RAG 与缓存三兄弟。
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
      <ReviewSection eyebrow="SECTION 01 · 核心定义" title="Agent 为什么需要记忆？">
        <p>
          <strong>LLM 本质上是无状态的函数</strong>——每次调用都是独立的，上一轮说的话它根本不记得。
          Agent 的记忆机制就是在这个无状态的基底之上，人造出一层"有状态"的感觉，使 Agent 能够：
        </p>
        <ul>
          <li><strong>执行复杂任务</strong>：记住最终目标，不被中间步骤的细节冲散</li>
          <li><strong>记住用户偏好</strong>：个性化服务，不用每次都重新交代</li>
          <li><strong>持续学习与优化</strong>：从过去的成功和失败中积累经验</li>
          <li><strong>保持角色一致性</strong>：在每次交互中都遵循固定的人设和行为模式</li>
        </ul>
        <div className="react-review-highlight">
          <strong>💡 核心挑战：</strong>记忆不只是"多一个数据库存对话记录"。真正的难点在于三件事 ——
          <strong>存什么</strong>（相关性过滤，不能什么都存）、<strong>怎么取</strong>（高效检索，存了要能找到）、
          <strong>时效性</strong>（信息过时了要覆盖或删除）。学习者在课前热身即独立点出前两个难点。
        </div>
      </ReviewSection>

      {/* SECTION 02 · 知识地图 */}
      <ReviewSection eyebrow="SECTION 02 · 知识地图" title="记忆类型三层结构（上下兄弟）">
        <pre className="react-review-ascii">{`第 3 层（概念总称）    Agent Memory（记忆系统）
                              │
          ┌───────────────────┼───────────────────┐
          │                   │                   │
  ┌───────▼───────┐   ┌───────▼───────┐   ┌───────▼───────┐
  │   工作记忆     │   │   短期记忆     │   │   长期记忆     │ ← 第 2 层 · 时效维度
  │  （当前任务）   │   │  （会话内）    │   │  （跨会话）    │
  └───────────────┘   └───────────────┘   └───────┬───────┘
                                                  │
                          ┌───────────────────────┼───────────────────────┐
                          │                       │                       │
                  ┌───────▼───────┐       ┌───────▼───────┐       ┌───────▼───────┐
                  │   角色记忆     │       │   情节记忆     │       │   实体记忆     │ ← 第 2 层 · 内容维度
                  │  （我是谁）    │       │  （经历了什么）  │       │  （用户是谁）  │
                  └───────────────┘       └───────────────┘       └───────────────┘
                          │                       │                       │
                          └───────────────────────┼───────────────────────┘
                                                  │
                                          ┌───────▼───────────────┐
                                          │  Mem0 / Cognee / RAG  │ ← 第 1 层 · 底层工具
                                          │  向量 + 图 + KV 混合    │
                                          └───────────────────────┘`}</pre>
        <div className="react-review-highlight">
          <strong>🔑 层级修正链：</strong>首轮把 6 种类型 + 工具全部放在同一层。经"上下兄弟问三句"诊断后修正为三层结构 —
          工作/短期/长期是时效维度（第 2 层），角色/情节/实体是长期记忆按内容维度的子分类（同属第 2 层），
          Mem0/Cognee 是底层实现工具（第 1 层），RAG 是设计模式思想（高于工具层）。
        </div>
      </ReviewSection>

      {/* SECTION 03 · 六种记忆类型 */}
      <ReviewSection eyebrow="SECTION 03 · 六种记忆类型" title="每种记忆解决什么问题？">
        <div className="react-review-table-wrap">
          <table>
            <thead>
              <tr><th>记忆类型</th><th>定义</th><th>使用时机</th><th>示例</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>工作记忆</strong></td>
                <td>当前任务正在处理的即时信息，像草稿本</td>
                <td>任务进行中，随时读写</td>
                <td>中间计算结果、临时变量</td>
              </tr>
              <tr>
                <td><strong>短期记忆</strong></td>
                <td>当前会话内的完整对话上下文</td>
                <td>本次对话全程</td>
                <td>刚才说了什么、本轮推理链</td>
              </tr>
              <tr>
                <td><strong>长期记忆</strong></td>
                <td>跨会话持久化信息（父类）</td>
                <td>跨越多次对话</td>
                <td>—</td>
              </tr>
              <tr>
                <td>├ <strong>角色记忆</strong></td>
                <td>Agent 的身份定义和行为准则</td>
                <td>每轮都需要，规定能干什么</td>
                <td>"我是专业细心的旅行规划助手"</td>
              </tr>
              <tr>
                <td>├ <strong>情节记忆</strong></td>
                <td>过去具体经历和结果的完整记录</td>
                <td>遇到相似场景时回溯参考</td>
                <td>"上次订机票选了靠过道座位，因为用户腿长"</td>
              </tr>
              <tr>
                <td>└ <strong>实体记忆</strong></td>
                <td>从对话中提取的结构化关键信息</td>
                <td>每次对话都需要，描述用户</td>
                <td>"用户叫小王，住在北京，喜欢吃川菜"</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="react-review-highlight">
          <strong>🎯 分类的根本原因（非工程优化、是设计必需）：</strong>
          三种信息存取方式完全不同 — 实体记忆需要精确匹配（key-value），情节记忆需要语义搜索（向量），
          角色记忆需要在每次回复时体现（注入 system prompt）。全部混在一起用一个存储方案，必然触发
          <span className="react-review-cross-ref">分心</span> <span className="react-review-cross-ref">混淆</span> <span className="react-review-cross-ref">冲突</span> 三重失败。
        </div>
      </ReviewSection>

      {/* SECTION 04 · 知识 Agent 自改进循环 */}
      <ReviewSection eyebrow="SECTION 04 · A 层核心设计模式" title="知识 Agent 自改进循环：存档员 + 情报员">
        <p>
          这节课最核心的设计模式不是一个存储方案，而是一个<strong>独立运行的元层级 Agent</strong>——知识 Agent（Knowledge Agent）。
          它不是直接做任务的 Agent，而是站在旁边观察、提取、注入的"记忆管家"。
        </p>

        <h3>双角色：存档员（写）+ 情报员（读）</h3>
        <div className="react-review-table-wrap">
          <table>
            <thead>
              <tr><th>角色</th><th>时机</th><th>做什么</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>🅰️ <strong>存档员</strong></td>
                <td>对话结束后（或进行中）</td>
                <td>从对话历史中<strong>发现</strong>有价值信息 → <strong>提取、加工</strong> → <strong>存入</strong>记忆库</td>
              </tr>
              <tr>
                <td>🅱️ <strong>情报员</strong></td>
                <td>新任务开始前 / 进行中</td>
                <td>从记忆库中<strong>检索</strong>相关信息 → <strong>注入</strong>任务 Agent 上下文</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>为什么知识 Agent 要独立？</h3>
        <ul>
          <li><strong>专业化</strong>：每个 Agent 一个技能栈 —— 业务 Agent 服务用户，知识 Agent 管理记忆</li>
          <li><strong>上下文隔离</strong>：业务 Agent 的上下文窗口已经很挤（分心风险），再塞记忆逻辑只会雪上加霜</li>
          <li><strong>异步运行</strong>：记忆提取不需要实时，后台处理不阻塞用户</li>
        </ul>

        <h3>Mem0 两阶段流水线</h3>
        <pre className="react-review-chain-box">{`阶段 1：提取（Extraction）
    利用 LLM 总结对话历史，提取新记忆片段
    ↓
阶段 2：更新决策（Update）
    基于 LLM 判断：添加新记忆 / 修改已有记忆 / 删除过时记忆（遗忘能力！）`}</pre>
        <div className="react-review-highlight">
          <strong>⭐ 学习者在追问中独立说出"添加、修改、删除"三个操作，未遗漏"遗忘"维度 —— 这是很多人忽略的细节。</strong>
        </div>
      </ReviewSection>

      {/* SECTION 05 · 跨章节连接 */}
      <ReviewSection eyebrow="SECTION 05 · 横向连接" title="跨章节知识缝合（5 条连接）">
        <h3>1. Memory × 元认知 — "站在旁边看"的两种元层级</h3>
        <p>
          两者都在做"审视→提取→应用"的循环，但触发源不同：元认知观察<strong>推理过程/策略</strong>来调整决策方向；
          知识 Agent 观察<strong>对话历史</strong>来提取可复用的记忆。元认知是"改怎么想"，知识 Agent 是"记下什么以后用得着"。
        </p>

        <h3>2. Memory × 上下文工程 — 知识 Agent ⊂ 上下文工程</h3>
        <p>
          知识 Agent 的"检索→注入"这一步，本质就是上下文工程的<strong>动态信息流管理</strong>（六种策略之一）。
          区别：上下文工程管整个窗口里的全部五种类型，知识 Agent 只管长期记忆这一种信息来源。
          准确关系：<strong>知识 Agent ⊆ 上下文工程</strong>——知识 Agent 检索到的记忆作为"知识类型上下文"注入窗口。
        </p>

        <h3>3. Memory × 多代理 — 专业化原则解释独立设计</h3>
        <p>
          "每个 Agent 一个技能栈、一个权限面、一个失败域"——把记忆管理拆成独立的知识 Agent，
          正是这个原则的体现。业务 Agent 服务用户，知识 Agent 管理记忆，各自专注、独立迭代、互不污染上下文。
        </p>

        <h3>4. Memory × RAG — 底层模式完全相同</h3>
        <p>
          RAG 和 Memory 的底层模式是同一个：<strong>检索 → 注入上下文 → 辅助生成</strong>。
          区别只是数据源不同：传统 RAG 检索外部知识库，Memory RAG 检索对话历史中提取的记忆。
          RAG 不是和 Mem0/Cognee 并列的工具，而是<strong>高于工具层的设计模式思想</strong>。
        </p>

        <h3>5. Memory × 缓存三兄弟 — 两道生死题照进记忆</h3>
        <p>
          缓存两道生死题可以直接套用到记忆缓存策略：
          角色记忆（基本不变 + 不依赖具体用户）→ 可以缓存；
          实体记忆（较稳定 + 高度私人化）→ 不能走语义缓存但可走提示词缓存；
          情节记忆（可能过时 + 私人化）→ 需判断时效性；
          工作记忆（极短 TTL + 私人化）→ 不缓存。
        </p>
      </ReviewSection>

      {/* SECTION 06 · 纵向追问 */}
      <ReviewSection eyebrow="SECTION 06 · 纵向追问（A 层深度理解）" title="三层追问：为什么这样设计？">
        <h3>追问 1：为什么知识 Agent 要独立？</h3>
        <p>
          <strong>学习者答：</strong>专业化 + 上下文隔离 + 异步不阻塞用户。<br />
          <span className="tag tag-good">✓ 三要素全中</span> —— 这正是多代理设计模式"每个 Agent 一个技能栈"原则在记忆场景中的直接应用。
          业务 Agent 的上下文窗口已经够挤（上下文工程课的"分心"风险），再塞记忆管理逻辑只会雪上加霜。
        </p>

        <h3>追问 2：不把记忆分成多种类型会出什么问题？</h3>
        <p>
          <strong>学习者答：</strong>会触发分心、混淆、冲突 —— 完美对应上下文工程的四种失败模式（之三）。<br />
          <span className="tag tag-good">✓ 跨章节概念迁移精准</span> ——
          无关记忆淹没关键信息（分心）、不知道这段记忆是什么类型的该怎么用（混淆）、旧角色定义和新的用户偏好打架（冲突）。
        </p>

        <h3>追问 3：Mem0 为什么用"向量 + 图 + KV"三种存储混合？</h3>
        <p>
          每种存储擅长不同的事 —— 向量适合语义相似搜索（"和这段经历类似的记忆"），
          图适合表达实体间关系（"小王关联哪些偏好"），KV 适合精确匹配（"小王的城市是什么"）。
          只用一种存储无法同时满足三种记忆的存取需求。这和你之前学的"协同过滤 = 多视角互补"是同一套工程哲学。
        </p>
      </ReviewSection>

      {/* SECTION 07 · 盲点与修正 */}
      <ReviewSection eyebrow="SECTION 07 · 盲点自查与修正" title="学习过程中的关键修正">
        <div className="react-review-table-wrap">
          <table>
            <thead>
              <tr><th>#</th><th>盲点</th><th>修正</th><th>状态</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>把 6 种记忆类型 + Mem0/Cognee/RAG 全部放在同一层级</td>
                <td>用"上下兄弟问三句"修正为三层：概念总称 → 时效/内容维度 → 底层工具。RAG 提升到设计模式层。</td>
                <td><span className="tag tag-good">✓ 焊死</span></td>
              </tr>
              <tr>
                <td>2</td>
                <td>知识 Agent 自改进循环只描述了"检索注入"（情报员），漏了"提取存储"（存档员）</td>
                <td>补齐双角色模型：存档员（对话后提取→加工→存入）+ 情报员（任务前检索→注入）</td>
                <td><span className="tag tag-good">✓ 修正</span></td>
              </tr>
              <tr>
                <td>3</td>
                <td>记忆分类的原因停在"工程优化"层（减少数据量/加快检索）</td>
                <td>上升到"设计必需"层：不同类型需要不同的存取方式（精确匹配 vs 语义搜索 vs 角色注入），混在一起必然触发分心+混淆+冲突</td>
                <td><span className="tag tag-good">✓ 升级</span></td>
              </tr>
              <tr>
                <td>4</td>
                <td>RAG 被放在工具层与 Mem0 并列</td>
                <td>RAG 是设计模式（检索→增强→生成），高于具体工具。Memory 检索是 RAG 思想在对话历史上的应用。</td>
                <td><span className="tag tag-good">✓ 归位</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </ReviewSection>

      {/* SECTION 08 · 学习报告 */}
      <ReviewSection eyebrow="SECTION 08 · 学习报告" title="📊 本单元学习报告">
        <div className="react-review-keypoints">
          <Card className="react-review-kp-card">
            <span className="kp-label">A 层 · 必须深入（4 项）</span>
            <ul>
              <li>六种记忆类型的层级关系（上下兄弟三层结构）</li>
              <li>知识 Agent 自改进循环（存档员 + 情报员双角色）</li>
              <li>记忆系统在 Agent 架构中的位置与角色</li>
              <li>Mem0 两阶段流水线（提取 → 更新决策）</li>
            </ul>
          </Card>
          <Card className="react-review-kp-card">
            <span className="kp-label">B 层 · 理解思路（3 项）</span>
            <ul>
              <li>Mem0 三种存储混合的设计思路</li>
              <li>Cognee 知识图谱 + 向量混合检索</li>
              <li>延迟优化策略（先快速判断、再深度提取）</li>
            </ul>
          </Card>
          <Card className="react-review-kp-card">
            <span className="kp-label">🔗 跨章节缝合（5 条）</span>
            <ul>
              <li>Memory × 元认知（两种元层级审视循环）</li>
              <li>Memory × 上下文工程（⊂ 关系）</li>
              <li>Memory × 多代理（专业化原则解释独立设计）</li>
              <li>Memory × RAG（同一检索增强模式）</li>
              <li>Memory × 缓存三兄弟（两道生死题套用）</li>
            </ul>
          </Card>
          <Card className="react-review-kp-card">
            <span className="kp-label">⚠️ 需要加强</span>
            <ul>
              <li>工作记忆 vs 短期记忆的精确边界</li>
              <li>Event Queue 异步可靠性四维度</li>
              <li>Mem0/Cognee 具体代码级细节（C 层）</li>
            </ul>
          </Card>
        </div>
      </ReviewSection>

      {/* SECTION 09 · 复习计划 */}
      <ReviewSection eyebrow="SECTION 09 · 间隔复习计划" title="未来复习安排">
        <div className="react-review-table-wrap">
          <table>
            <thead>
              <tr><th>阶段</th><th>日期</th><th>内容</th><th>重点验证项</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="tag tag-info">D2</span></td>
                <td>2026-08-12</td>
                <td>3 题闭卷</td>
                <td>① 六种记忆类型层级图默画 ② 知识 Agent 双角色完整描述 ③ "上下兄弟问三句"给记忆类型分层</td>
              </tr>
              <tr>
                <td><span className="tag tag-info">D7</span></td>
                <td>2026-08-17</td>
                <td>5 题跨章节</td>
                <td>① Mem0 两阶段流水线 + 三种存储 ② Memory × 元认知对比 ③ Memory × 上下文工程 ⊂ 关系 ④ Memory × 多代理专业化 ⑤ 缓存两道生死题套用</td>
              </tr>
              <tr>
                <td><span className="tag tag-info">D30</span></td>
                <td>2026-09-09</td>
                <td>综合压测</td>
                <td>设计完整记忆系统（知识 Agent 架构 + 记忆类型选择 + 存储方案 + 集成方案），跨章节缝合元认知 × 上下文工程 × 可信赖 Agent</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ReviewSection>

      {/* Footer */}
      <div className="react-review-footer">
        <p>📅 学习日期：2026-08-10 · 学习时长：约 45 min · 掌握等级：B+ → A-</p>
        <p>🤖 Generated with Claude Code · 学习教练：温柔知性的学姐 AI</p>
      </div>
    </article>
  );
}

export default Review20260810AgentJiYiXiTong;
