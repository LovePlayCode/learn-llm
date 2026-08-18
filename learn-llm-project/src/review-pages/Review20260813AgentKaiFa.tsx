import { Card } from '@heroui/react';

const stats = [
  { value: '6', label: 'A 层知识点', color: 'text-[#58a6ff]' },
  { value: '7', label: 'demo 跑通', color: 'text-[#3fb950]' },
  { value: '4', label: '追问通过', color: 'text-[#d29922]' },
  { value: '3', label: '层级修正', color: 'text-[#a371f7]' },
  { value: '1', label: '元技能觉醒', color: 'text-[#39d0d8]' },
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

function Review20260813AgentKaiFa() {
  return (
    <article className="react-review-page">
      {/* HERO */}
      <section className="react-review-hero">
        <span className="eyebrow">LEARN · 2026 · 08 · 13 · AGENT 开发核心模式</span>
        <h1>Agent 开发核心模式<br /><strong>从 deer-flow 教学包提炼</strong></h1>
        <p>
          以"应用派"姿态进入——场景是<strong>实时聊天里读文件 + 联网搜索 + 生成新文件</strong>。从 DeerFlow 自带的教学包切入，
          把 Agent 的六个核心零件（Factory 装配 / Middleware 顺序 / State / HITL / Tools 裁剪 / Sandbox）逐一拆开、跑通、复述。
          最大亮点：学习者主动质疑"mergeSandbox 没真正和 agent 联动"，逼出 demo 07，并命名了"<strong>验证性阅读</strong>"这个元技能。
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

      {/* SECTION 01 · 学前准备 */}
      <ReviewSection eyebrow="SECTION 01 · 学前准备" title="应用派场景与 A/B/C 知识分层">
        <p>
          学习者明确目的——"工作/项目里要用 agent 解决具体场景"，并把它精确到：
          <strong>输入=文件+联网搜索，输出=文件或计划，触发=实时聊天</strong>。
          这个场景恰好就是 DeerFlow 自身的典型用例，于是"在 DeerFlow 上学 DeerFlow"。
        </p>
        <div className="react-review-highlight">
          <strong>💡 A 层（必深挖 · 约 20%）：</strong>A1 Factory 装配 · A2 Middleware 链顺序（不变量）· A3 State/ThreadState+reducer · A4 HITL 中断/恢复 · A5 Tools 按场景裁剪 · A6 Sandbox 写文件+Artifacts（场景专属加餐）
        </div>
        <div className="react-review-highlight">
          <strong>🅱️ B 层（理解思路）：</strong>Skills 渐进披露 · Sandbox 隔离 · SSE Streaming · 联网搜索三件套 · Subagent 委派限流
          <strong style={{ display: 'block', marginTop: 8 }}>🅲️ C 层（用时查阅）：</strong>IM 渠道 · 定时任务 · Docker/Nginx · provider 配置 · MCP
        </div>
        <p>
          <strong>💡 学习顺序：</strong> 先跑教学包 <code>pnpm demo</code> 建立感觉 → runtime/factory（A1）→ chain（A2）→ clarification（A4）→ state（A3）→ tools（A5）→ 回真实代码 <code>lead_agent/agent.py</code> 对读。
        </p>
      </ReviewSection>

      {/* SECTION 02 · 知识地图 */}
      <ReviewSection eyebrow="SECTION 02 · 知识地图" title="Agent 的六零件家族关系（上下兄弟）">
        <pre className="react-review-ascii">{`                  ┌─────────────────────────────────────┐
                  │     Agent（智能体，家族总称）         │   第3层 · 总称
                  └─────────────────────────────────────┘
                                   │
            ┌──────────────────────┼──────────────────────┐
            ▼                      ▼                      ▼
      ① Factory            ② Middleware           ③ State      第2层 · 零件
     (怎么"装"出来)          (执行时的夹层)         (每轮的内存)
            │                      │                      │
            │                      │                      ▼
            │            ┌─────────┴─────────┐      fail-closed
            │            ▼                   ▼      artifacts去重
            │      消毒/错误恢复        循环检测/限流
            │                                   │
            │                                   ▼
            │                          ④ HITL 澄清(必须最后)
            │                                   │
            │                       interrupt() ↔ resume()
            ▼
      ⑤ Tools（工具，agent 的"手"）              第1层 · 工具/动作
      ┌─────────────┬──────────────┬──────────────┐
      ▼             ▼              ▼              ▼
   文件工具      联网工具        Skills        ⑥ Sandbox
 (read/write) (search/fetch)  (渐进披露)    (隔离文件系统)`}</pre>
        <div className="react-review-highlight">
          <strong>🔑 核心分层洞察：</strong>
          <strong>Agent 是"装好的那一整个"，不是某个执行步骤</strong>。"决定调哪个工具"是 <strong>model（大脑）</strong>干的，不是抽象的"Agent"干的。
          这一点学习者复述时反复踩坑——把"决定"安到 ask_clarification / "Agent" 身上，经"上下兄弟问三句"修正后焊死。
        </div>
      </ReviewSection>

      {/* SECTION 03 · A1 Factory */}
      <ReviewSection eyebrow="SECTION 03 · A1" title="Factory 装配：Agent 是怎么「装」出来的">
        <p>
          对应教学包 <code>factory.ts</code> → 真实代码 <code>lead_agent/agent.py: make_lead_agent</code>。一个 agent 由<strong>五样东西</strong>装配而成：
        </p>
        <div className="react-review-table-wrap">
          <table>
            <thead>
              <tr><th>零件</th><th>比喻</th><th>职责</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>Model (LLM)</strong></td><td>🧠 大脑</td><td>决定调哪个工具、怎么想。没有它，tools 再多也没人驱动</td></tr>
              <tr><td>System Prompt</td><td>🎭 人设</td><td>"你是谁、怎么说话"，含 skill_index（只放名字）</td></tr>
              <tr><td>Tools</td><td>✋ 双手</td><td>能做什么，按场景裁剪</td></tr>
              <tr><td>Middleware</td><td>⚡ 反射</td><td>动作前后的自动检查（before/after/wrap hooks）</td></tr>
              <tr><td>Checkpointer</td><td>📒 记忆本</td><td>多轮对话怎么记住上一句，存线程状态</td></tr>
            </tbody>
          </table>
        </div>
        <div className="react-review-highlight">
          <strong>💡 Runtime 优先级：</strong> <code>request &gt; agentConfig &gt; default</code>，且用 <code>key in object</code>（非真值判断），
          保证 <code>thinkingEnabled: false</code> 从 request 来时被尊重。
        </div>
      </ReviewSection>

      {/* SECTION 04 · A2 Middleware */}
      <ReviewSection eyebrow="SECTION 04 · A2" title="Middleware 链顺序：为什么是「不变量」">
        <pre className="react-review-ascii">{`chain = [
  ① Sanitization       (消毒，最外层守卫)
  ② ToolErrorHandling  (错误恢复：工具异常 → ToolMessage)
  ③ LoopDetection      (循环检测)
  ④ SubagentLimit      (子agent限流，afterModel 截断)
  ⑤ Clarification      ← 最后！
]`}</pre>
        <div className="react-review-highlight">
          <strong>🔑 顺序为什么是不变量：</strong>
          <code>interrupt()</code> 本质是 <code>GraphBubbleUp</code>——"长得像异常、但语义是信号"。
          如果 Clarification 在 ToolErrorHandling <strong>外层</strong>（被它的 try/catch 包住），
          interrupt 会被当成普通工具异常抓住、转成 ToolMessage，<strong>HITL 彻底失效</strong>。
          所以 Clarification 必须最后——它的 interrupt 才能畅通无阻地向上冒泡。
        </div>
        <div className="react-review-highlight">
          <strong>✨ 关键洞察 · "位置 ≠ 时机"：</strong>
          Clarification 排最后，但仍是 agent 的<strong>第一个动作</strong>——因为 interrupt() 是<strong>按需触发</strong>的。
          "先确认目标再干活"的精神正确，但它靠"agent 主动选择先调 ask_clarification"实现，不靠"排第一"。
        </div>
      </ReviewSection>

      {/* SECTION 05 · A4 HITL */}
      <ReviewSection eyebrow="SECTION 05 · A4" title="HITL：中断/恢复完整链条">
        <p>场景"整理成周报但没传文件"的完整流程：</p>
        <pre className="react-review-ascii">{`用户发消息(带 thread_id) → 进入 agent
  → LLM 决定："用户没传文件，我得问"
  → 调用 ask_clarification（工具层 · "我要问"的意图）
  → （它内部）触发 interrupt()（机制层 · 真的摁停执行流）
  → （导致）HITL 暂停，状态存进 checkpointer（记忆本）
  → 前端收到 __interrupt__ 信号，弹输入框等用户
  → 用户上传文件 + 回答"就是这份"
  → 用 Command({ resume }) 唤醒同一个 thread_id
  → agent 从暂停处继续 → 拿到文件走 Sandbox(write_file)
  → 产出周报`}</pre>
        <div className="react-review-highlight">
          <strong>⚠️ 三层不可压成一步：</strong>
          <code>ask_clarification</code>（工具）/ <code>interrupt()</code>（机制）/ HITL暂停（效果）是<strong>三个不同层级</strong>。
          学习者初复述时把它们压成一步，经"上下兄弟问三句"展开为：工具层 → 底层动作 → 效果层。
        </div>
        <div className="react-review-highlight">
          <strong>🔗 实时 vs 非实时：</strong>
          <code>nonInteractive: true</code>（定时任务）时，<code>ask_clarification</code> 被<strong>裁掉</strong>（没人回答）；
          实时聊天保留它。这就是 A5「Tools 按场景裁剪」——非实时场景直接砍掉 HITL 能力。
        </div>
      </ReviewSection>

      {/* SECTION 06 · A3 State */}
      <ReviewSection eyebrow="SECTION 06 · A3" title="State / ThreadState + Reducer">
        <p>
          对应 <code>state.ts</code> → 真实 <code>thread_state.py</code>。ThreadState 存：messages / artifacts / sandbox / viewed_images。
        </p>
        <div className="react-review-highlight">
          <strong>💡 A3 的真正灵魂是 reducer（归并函数）：</strong>
          一轮里多个工具并发写<strong>同一个字段</strong>时，LangGraph 不知道怎么合并，必须你给规则。
          <code>mergeSandbox</code> / <code>mergeArtifacts</code> / <code>mergeViewedImages</code> 就是三套不同的合并规则。
        </div>
        <div className="react-review-table-wrap">
          <table>
            <thead>
              <tr><th>Reducer</th><th>规则</th><th>设计哲学</th></tr>
            </thead>
            <tbody>
              <tr><td><code>mergeSandbox</code></td><td>不同 sandboxId → <strong style={{ color: '#f85149' }}>throw</strong></td><td>fail-closed：安全 &gt; 不中断（沙箱id错=写穿危险位置）</td></tr>
              <tr><td><code>mergeArtifacts</code></td><td>按 path 去重，<strong>后写覆盖</strong></td><td>正确性问题可重跑恢复，允许覆盖</td></tr>
              <tr><td><code>mergeViewedImages</code></td><td>发 <code>{'{}'}</code> = 清空</td><td>约定：空对象=有意的清空动作（非无操作）</td></tr>
            </tbody>
          </table>
        </div>
        <div className="react-review-highlight">
          <strong>⚠️ fail-closed vs 覆盖 · 分级处理：</strong>
          "沙箱id错"是<strong>安全问题</strong>（不可恢复，影响系统/他人），"文件覆盖"是<strong>正确性问题</strong>（重跑可恢复）。
          二者严重性<strong>不在一个维度</strong>——前者 fail-closed 宁可停，后者允许覆盖错了重来。
          学习者初答把"严重性"当单一量比较，经修正为"安全 vs 正确性"两个兄弟维度。
        </div>
      </ReviewSection>

      {/* SECTION 07 · A6 + demo 07 */}
      <ReviewSection eyebrow="SECTION 07 · A6 + 自建 demo 07" title="Sandbox 写文件 + 孤儿 reducer 觉醒">
        <p>学习者主动质疑："mergeSandbox 没真正和 agent 联动吧？"——这是<strong>验证性阅读</strong>的觉醒时刻。</p>
        <div className="react-review-highlight">
          <strong>🔍 验证性阅读三问：</strong>读任何函数时固定问——① 谁调用它（grep import）？② 它真的在执行路径上吗？③ 它的副作用去哪了（return 被谁接收）？
        </div>
        <p>
          grep 证实：教学包 <code>tools.ts</code> 里<strong>没有 sandbox 工具</strong>，<code>mergeSandbox</code> 只被 <code>assertReducersWork()</code> 当单测跑过，在 01-06 的 agent 执行路径上<strong>从未被触发</strong>——它是"为讲模式而存在、但没接通执行"的孤儿。
        </p>
        <p>于是自建 <code>demo 07</code>，让 reducer 真正"活"过来，并揭露三层真相：</p>
        <pre className="react-review-ascii">{`场景 A  两工具写不同文件   → mergeArtifacts 去重合并 → [/a.txt, /b.txt]   ✓
场景 B  两工具写同名文件   → 后写覆盖               → [/周报.txt(note)]   ✓
场景 C  两工具设不同沙箱   → mergeSandbox throw     → Conflicting        ✓
场景 D  挂 stateSchema 进 createAgent + 工具只返回字符串
        → 最终 state.artifacts = undefined   ← 工具没更新 state！`}</pre>
        <div className="react-review-highlight">
          <strong>💡 "最后一公里" = Command 机制：</strong>
          reducer 本身正常、能挂进 stateSchema，但工具只返回字符串<strong>不会自动</strong>更新 state。
          工具必须 <code>return Command(&#123; update: &#123; artifacts: [...] &#125; &#125;)</code> 显式写回——
          真实 DeerFlow 的 <code>write_file</code> / <code>bash</code> 就是这么做的。教学包砍了 sandbox 工具，所以 reducer 成了孤儿。
        </div>
        <div className="react-review-highlight">
          <strong>🎯 LLM / 工具 / reducer 三层：</strong>
          <strong>LLM 是指挥官</strong>（输出 tool_call 指令）→ <strong>工具是士兵</strong>（执行落盘 + return Command 汇报战果）→ <strong>reducer 合并</strong>进 state。
          学习者曾把"落盘"安到"LLM 输出之后"的模糊地带，漏了工具这一层执行者，经修正焊死。
        </div>
      </ReviewSection>

      {/* SECTION 08 · demo 04/05 */}
      <ReviewSection eyebrow="SECTION 08 · demo 04/05" title="Subagent 限流 + Skills 渐进披露">
        <div className="react-review-highlight">
          <strong>Subagent 限流（afterModel 截断）：</strong> agent 一次发 3 个 <code>task</code>，middleware 在 afterModel 阶段<strong>直接砍掉超额的</strong>（Dropped），被砍的从未启动。
          限流防的不是"慢"，而是<strong>失控</strong>——成本/资源/上下文爆炸。并发本来更快，限流是安全阀。
        </div>
        <div className="react-review-highlight">
          <strong>Skills 渐进披露（context engineering）：</strong>
          <pre className="react-review-ascii" style={{ marginTop: 10 }}>{`① system prompt 只放 skill 名字+一句话描述        ← 省 token
        ▼
② agent 调 describe_skill → 拿 metadata             ← 还没全文
        ▼
③ agent 调 read_skill → 才加载完整 SKILL.md          ← 用到才付代价`}</pre>
          两个理由：① 上下文珍贵 ② <strong>保护 prefix cache</strong>——只放名字=前缀稳定=缓存命中=省钱省延迟。
        </div>
      </ReviewSection>

      {/* SECTION 09 · 打字默写检查 */}
      <ReviewSection eyebrow="SECTION 09 · 打字默写检查" title="闭卷默写 · 当天记忆留存">
        <div className="react-review-highlight">
          <strong style={{ color: '#d29922' }}>Q1 · Agent 由哪五样东西装配而成？model 在其中负责什么？</strong>
          <div style={{ color: '#6e7681', fontStyle: 'italic', fontSize: 13.5, marginTop: 6 }}>
            → model(大脑,决定调哪个工具) + systemPrompt(人设) + tools(双手) + middleware(反射) + checkpointer(记忆本)
          </div>
        </div>
        <div className="react-review-highlight">
          <strong style={{ color: '#d29922' }}>Q2 · Middleware 链里 Clarification 为什么必须放最后？</strong>
          <div style={{ color: '#6e7681', fontStyle: 'italic', fontSize: 13.5, marginTop: 6 }}>
            → interrupt() 是 GraphBubbleUp 信号，放前面会被 ToolErrorHandling 的 try/catch 当异常抓住，HITL 失效。放最后才能畅通冒泡。
          </div>
        </div>
        <div className="react-review-highlight">
          <strong style={{ color: '#d29922' }}>Q3 · HITL 完整链条（用"整理周报但没传文件"场景）？</strong>
          <div style={{ color: '#6e7681', fontStyle: 'italic', fontSize: 13.5, marginTop: 6 }}>
            → LLM决定要问 → 调 ask_clarification → 触发 interrupt() → HITL暂停存checkpointer → 前端等用户 → Command(&#123;resume&#125;)唤醒同thread_id → 继续 → Sandbox写文件
          </div>
        </div>
        <div className="react-review-highlight">
          <strong style={{ color: '#d29922' }}>Q4 · mergeSandbox 冲突 throw vs mergeArtifacts 后写覆盖，为什么策略不同？</strong>
          <div style={{ color: '#6e7681', fontStyle: 'italic', fontSize: 13.5, marginTop: 6 }}>
            → 沙箱id错是安全问题(不可恢复,fail-closed)；文件覆盖是正确性问题(重跑可恢复,允许覆盖)。严重性分"安全 vs 正确性"两个维度。
          </div>
        </div>
        <div className="react-review-highlight">
          <strong style={{ color: '#d29922' }}>Q5 · 教学包里 mergeSandbox 为什么是"孤儿"？怎么让它活过来？</strong>
          <div style={{ color: '#6e7681', fontStyle: 'italic', fontSize: 13.5, marginTop: 6 }}>
            → tools.ts 没有 sandbox 工具，只被 assertReducersWork 单测调用，agent 执行路径不触发。活过来需：工具 return Command(&#123;update:&#123;artifacts&#125;&#125;) 显式写回 state。
          </div>
        </div>
      </ReviewSection>

      {/* SECTION 10 · 盲点自查 */}
      <ReviewSection eyebrow="SECTION 10 · 盲点自查" title="本次踩过的坑（下次别再踩）">
        <div className="react-review-highlight" style={{ borderLeft: '3px solid #f85149' }}>
          <strong style={{ color: '#f85149' }}>🕳️ 把"Agent"当执行步骤</strong>
          <div style={{ color: '#9da7b3', marginTop: 4 }}>复述时写"Agent 执行任务"，把"决定调哪个工具"安到抽象的 Agent 身上。修正：Agent 是"装好的那一整个"，决定权在 model。</div>
        </div>
        <div className="react-review-highlight" style={{ borderLeft: '3px solid #f85149' }}>
          <strong style={{ color: '#f85149' }}>🕳️ ask_clarification / interrupt() / HITL 压成一步</strong>
          <div style={{ color: '#9da7b3', marginTop: 4 }}>把工具层、机制层、效果层三层混为一谈。修正：三层分开——工具(我要问)→机制(摁停)→效果(暂停等人类)。</div>
        </div>
        <div className="react-review-highlight" style={{ borderLeft: '3px solid #f85149' }}>
          <strong style={{ color: '#f85149' }}>🕳️ 限流防"慢"</strong>
          <div style={{ color: '#9da7b3', marginTop: 4 }}>直觉以为并发多→慢→要限流，方向反了。修正：并发本来更快，限流防的是失控(成本/资源/上下文)。</div>
        </div>
        <div className="react-review-highlight" style={{ borderLeft: '3px solid #f85149' }}>
          <strong style={{ color: '#f85149' }}>🕳️ fail-closed vs 覆盖用单一"严重性"比较</strong>
          <div style={{ color: '#9da7b3', marginTop: 4 }}>把安全和正确性混为一个量。修正：分"安全维度"和"正确性维度"两个兄弟，前者不可恢复后者可重跑。</div>
        </div>
        <div className="react-review-highlight" style={{ borderLeft: '3px solid #f85149' }}>
          <strong style={{ color: '#f85149' }}>🕳️ 漏掉"工具"是落盘执行者</strong>
          <div style={{ color: '#9da7b3', marginTop: 4 }}>把落盘安到"LLM 输出之后"模糊地带。修正：LLM 输出 tool_call(指令)→工具执行落盘+return Command→reducer 合并。</div>
        </div>
      </ReviewSection>

      {/* SECTION 11 · 跨章节连接 */}
      <ReviewSection eyebrow="SECTION 11 · 跨章节连接" title="这章和之前学的怎么连">
        <div className="react-review-highlight">
          <strong>🔗 Agent 开发 × 上下文工程：</strong>
          Skills 渐进披露就是上下文工程的具体落地——只放名字保护 prefix cache，本质是"上下文窗口管理"。Agent 开发是上下文工程的<strong>应用场景</strong>。
        </div>
        <div className="react-review-highlight">
          <strong>🔗 Agent 开发 × Agent 记忆系统：</strong>
          checkpointer = 短期记忆（会话内 ThreadState）；长期记忆跨会话另存。State reducer 是"多工具并发写记忆"的合并规则——记忆系统的工程实现层。
        </div>
        <div className="react-review-highlight">
          <strong>🔗 interrupt() throw × HITL（同一家族）：</strong>
          都是"异常向上冒泡"，但 interrupt 是<strong>信号</strong>(该放行)、mergeSandbox throw 是<strong>真错误</strong>(该抓)。同一个 try/catch 要区别对待——这正是 A2 Middleware 顺序的根本原因。
        </div>
        <div className="react-review-highlight">
          <strong>🔗 "上下兄弟问三句" × 元认知：</strong>
          本次至少 4 次用它诊断层级混乱（Agent→model / 三层压一步 / 严重性单维度 / 漏工具层）。它是<strong>元认知工具</strong>——审视自己思维层级的能力，跨章节复用。
        </div>
      </ReviewSection>

      {/* SECTION 12 · 复习计划 */}
      <ReviewSection eyebrow="SECTION 12 · 间隔检索计划" title="未来复习安排">
        <div className="react-review-table-wrap">
          <table>
            <thead>
              <tr><th>时间</th><th>类型</th><th>内容</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>2026-08-14</strong></td><td>D2 · 3题闭卷</td><td>① Factory 五零件+model职责 ② Clarification 为何最后 ③ HITL 完整链条默写</td></tr>
              <tr><td><strong>2026-08-20</strong></td><td>D7 · 5题跨章</td><td>① interrupt vs throw 机制区分 ② 渐进披露×上下文工程 ③ checkpointer×记忆系统 ④ fail-closed×可信赖Agent安全边界 ⑤ 限流防失控</td></tr>
              <tr><td><strong>2026-09-12</strong></td><td>D30 · 综合</td><td>给"读文件+联网+生成新文件"场景，设计完整 agent：Factory 装配+Middleware 链+State reducer+Sandbox+HITL，并指出哪些是框架层原语、哪些 Agent 自主配置</td></tr>
            </tbody>
          </table>
        </div>
      </ReviewSection>
    </article>
  );
}

export default Review20260813AgentKaiFa;
