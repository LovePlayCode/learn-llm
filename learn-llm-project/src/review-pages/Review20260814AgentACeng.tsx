import { Card } from '@heroui/react';

const stats = [
  { value: '6', label: 'A 层单元收官', color: 'text-[#58a6ff]' },
  { value: '6', label: '实践验证全绿', color: 'text-[#3fb950]' },
  { value: '14+', label: '盲点修复', color: 'text-[#d29922]' },
  { value: '6', label: '自建工程产物', color: 'text-[#a371f7]' },
  { value: '4', label: '高光洞察时刻', color: 'text-[#39d0d8]' },
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

function Review20260814AgentACeng() {
  return (
    <article className="react-review-page">
      {/* HERO */}
      <section className="react-review-hero">
        <span className="eyebrow">LEARN · 2026 · 08 · 13~14 · AGENT 开发 A 层收官</span>
        <h1>Agent 开发 A 层六单元<br /><strong>复述 → 追问 → 连接 → 实践 全闭环</strong></h1>
        <p>
          承接 08-13 的初学，这一次以<strong>面试标准</strong>（是什么 → 为什么 → 怎么用 → 不这样设计会怎样）把六个核心单元逐一打穿：
          Agent Loop / 中间件链 / State 与 Reducer / 上下文工程 / HITL / 子代理与护栏。
          每个单元都走完"关门复述 → 追问评判 → 连接构建 → 实践验证"完整闭环，六个工程产物全部 typecheck 绿 + demo 跑通。
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

      {/* SECTION 01 · 课程设计 */}
      <ReviewSection eyebrow="SECTION 01 · 学前准备" title="目的校准与学习路径">
        <p>
          学习目的明确为<strong>"系统转向 AI Agent 开发方向"</strong>——因此每个概念都用面试追问标准验收：
          是什么 → 为什么 → 怎么用 → 不这样设计会怎样。
        </p>
        <div className="react-review-highlight">
          <strong>💡 A 层（脱口复述）：</strong>A1 Agent Loop 与 Tool Calling · A2 中间件链 · A3 State 与 Reducer · A4 上下文工程 · A5 HITL · A6 子代理与护栏
        </div>
        <div className="react-review-highlight">
          <strong>🅱️ B 层（理解思路）：</strong>流式 Agent UX（SSE 合并/gap 恢复/消息分组）· RunManager 单 flight · 记忆系统异步队列 · Skills 包与 slash 契约
          <strong style={{ display: 'block', marginTop: 8 }}>🅲️ C 层（用时查阅）：</strong>MCP 协议细节 · 沙箱虚拟路径 · 扩展系统 · 配置双平面 · IM 通道 · 调度器 · nginx 拓扑
        </div>
        <p>
          <strong>💡 路径：</strong>TS 教学包离线 demo（ScriptedChatModel ≈ MSW）→ 前端 Agent UX（原生可读）→ Python 内核当伪代码精读 → 运行时/网关选读。
        </p>
      </ReviewSection>

      {/* SECTION 02 · 知识地图 */}
      <ReviewSection eyebrow="SECTION 02 · 知识地图" title="一条生命线串起六单元">
        <pre className="react-review-ascii">{`用户消息
  → 工厂组装 Agent（model + tools + middleware + prompt + checkpointer）
  → 模型⇄工具循环（A1）—— 中间件包裹每一步（A2）
  → 状态经 reducer 逐步合并（A3）
  → 上下文靠静态前缀 + 按需披露保护（A4）
  → 需要人就 interrupt（A5）
  → 重活派给子代理，限流截断（A6）
  → 全程可中断、可恢复、可观测`}</pre>
        <div className="react-review-highlight">
          <strong>🔑 分层意识贯穿全程：</strong>
          语义层（任务完成）vs 机制层（无 tool_calls）vs 安全网（步数上限）；
          守卫（消毒/错误恢复）在外 vs 业务（澄清/限流）在内；
          thread_id 管"哪次对话" vs tool_call_id 管"哪次调用"。
          每一次层级混乱都被"上下兄弟问三句"当场拆开。
        </div>
      </ReviewSection>

      {/* SECTION 03 · A1 */}
      <ReviewSection eyebrow="SECTION 03 · A1" title="Agent Loop 与 Tool Calling">
        <div className="react-review-highlight">
          <strong>核心：</strong>模型<strong>申请</strong>工具（tool_call = id + name + args，args 是对象），宿主<strong>执行</strong>，结果以 ToolMessage 回写（tool_call_id 配对）。
          模型无状态——循环的记忆是不断增长的 messages 列表，checkpointer 负责落盘。
        </div>
        <div className="react-review-highlight">
          <strong>⚠️ 踩坑：</strong>停止条件初答混了层级（语义层"任务完成" vs 机制层"无 tool_calls"）；
          tool_call 初版漏了 id、args 写成数组。追问后全部修正。
        </div>
        <div className="react-review-highlight">
          <strong>🛠️ 实践：</strong>新增 <code>search_web</code> 工具——首版类型错误 + 运行时 TypeError，
          被 ToolErrorHandling 中间件接住（run 没崩），第一次亲手体验护栏。两轮修复后全绿。
        </div>
        <div className="react-review-highlight">
          <strong>🏆 金句：</strong>Agent 是由概率模型驱动的状态机——正因为调度不确定，护栏才必须存在。
        </div>
      </ReviewSection>

      {/* SECTION 04 · A2 */}
      <ReviewSection eyebrow="SECTION 04 · A2" title="中间件链：顺序即契约">
        <pre className="react-review-ascii">{`消毒（wrapModelCall + wrapToolCall，唯一的双钩子守卫）
  → 错误恢复（wrapToolCall：异常 → error ToolMessage，放行 GraphBubbleUp）
  → 循环检测（afterModel：检测模型输出模式）
  → 子代理限流（afterModel：截断超额 task）
  → 澄清（wrapToolCall，必须最后）`}</pre>
        <div className="react-review-highlight">
          <strong>✨ 高光反问：</strong>"澄清排最外层，没人能吞它的异常啊？"——机械层面成立！
          逼出三条更深理由：守卫在外/业务在内的分层语义 · "永远垫底"是免决策契约 · 放行规则保护所有控制流异常（不只澄清）。
        </div>
        <div className="react-review-highlight">
          <strong>⚠️ 踩坑：</strong>wrap\* 曾理解成"调用前做逻辑"（漏了出侧）；曾复述教师原话代替自己推理（流畅性错觉被点名）。
        </div>
        <div className="react-review-highlight">
          <strong>🛠️ 实践：</strong>自建 <code>tool-timing</code> 中间件——try/finally 让失败调用也被计时；
          位置选在错误恢复之内（测真实工具执行），注释写明理由。demo 02 里 flaky 的失败耗时照样打出。
        </div>
        <div className="react-review-highlight">
          <strong>🏆 金句：</strong>顺序契约的价值不在"这次跑通"，在于让错误的组合在结构上不可能出现。
        </div>
      </ReviewSection>

      {/* SECTION 05 · A3 */}
      <ReviewSection eyebrow="SECTION 05 · A3" title="State 与 Reducer：显式合并">
        <div className="react-review-highlight">
          <strong>核心：</strong>同轮并发写同一 key，合并规则必须显式。
          <code>type Reducer&lt;T&gt; = (existing: T | null | undefined, incoming: T | null | undefined) =&gt; T</code>。
          策略按 key 分级：可合并 → 去重/后写覆盖；不可调和 → 抛错（fail-closed）。
          协议：缺席 = 没碰，<code>{'{}'}</code> = 显式清空。channel 声明的类型 = reducer 返回值契约。
        </div>
        <div className="react-review-highlight">
          <strong>✨ 高光：</strong>学前未读先中——"写文件记录→覆盖，写 sandboxId→报错，分开讨论"，策略直觉满分。
        </div>
        <div className="react-review-highlight">
          <strong>⚠️ 踩坑：</strong>签名初版 <code>(old, action) =&gt; action()</code>（action 不是函数、替换 ≠ 合并）；
          mergeTodos 首版注释承诺 null 分支但代码没做；修复时又误把返回值加宽为 null 违反 channel 契约。三轮迭代刻进肌肉。
        </div>
        <div className="react-review-highlight">
          <strong>🛠️ 实践：</strong>实现 <code>mergeTodos</code> + 挂入 demo 07 的 ThreadState + 场景 D（同 id 覆盖 / 新 id 追加 / null 缺席）全绿。
        </div>
        <div className="react-review-highlight">
          <strong>🏆 金句：</strong>合并策略按业务语义分级；冲突时宁可报错也不猜。
        </div>
      </ReviewSection>

      {/* SECTION 06 · A4 */}
      <ReviewSection eyebrow="SECTION 06 · A4" title="上下文工程：静态前缀与按需披露">
        <div className="react-review-highlight">
          <strong>核心：</strong>system prompt 全静态保 prefix cache（键 = 前缀的每个字节；TTL 分钟级；命中读取约 1 折）；
          日期/记忆由 DynamicContextMiddleware 注入第一条 HumanMessage。
          技能三层披露：skill_index → describe_skill → read_skill，每层成本递增。
        </div>
        <div className="react-review-highlight">
          <strong>🔑 关键顿悟：</strong>"system prompt 的末尾" ≠ "前缀之外"——整个 system prompt 都在前缀里，
          如同 URL 末尾的查询参数照样改变缓存键。缓存归属由"序列化请求里的位置"决定，不是心里分的"区"。
        </div>
        <div className="react-review-highlight">
          <strong>⚠️ 踩坑：</strong>软引导 vs 硬强制曾装反（披露顺序靠 prompt 软引导，不是中间件强制；动态注入才走中间件）。
        </div>
        <div className="react-review-highlight">
          <strong>✨ 高光：</strong>主动构造"三天三请求"场景反问验证缓存模型（命中 2 次，冷启动不算）；
          追问供应商 TTL（OpenAI 30 分钟刷新 / Anthropic 5 分钟起）——开始用成本视角看架构。
        </div>
        <div className="react-review-highlight">
          <strong>🛠️ 实践：</strong>新增 <code>weekly-report</code> 技能 + demo 05 验证 describe→read 顺序；skill_index 自动收录，prompt 结构零改动。
        </div>
        <div className="react-review-highlight">
          <strong>🏆 金句：</strong>能力是数据，不是逻辑（A1 加工具不改模型，A4 加技能不改 prompt）。
        </div>
      </ReviewSection>

      {/* SECTION 07 · A5 */}
      <ReviewSection eyebrow="SECTION 07 · A5" title="HITL：中断与恢复">
        <div className="react-review-highlight">
          <strong>两种范式：</strong>demo 03 = interrupt() 冻结图中断、Command(&#123;resume&#125;) 断点恢复；
          生产（自建 08）= wrapToolCall 返回 Command(goto=END) 正常结束本轮，答案作为下一轮隐藏 HumanMessage。
          中断 = 执行现场持久化；return = 现场销毁。
        </div>
        <div className="react-review-highlight">
          <strong>结构化卡片：</strong>ToolMessage.artifact.human_input（request_id 配对、协议版本化、老前端降级纯文本）——
          工具是"框架可介入的协议点"，纯文本输出框架无从插手。
        </div>
        <div className="react-review-highlight">
          <strong>⚠️ 踩坑：</strong>钩子名说错（wrapModelCall → 应为 wrapToolCall，拦的是工具执行不是模型调用）；
          两个 id 曾混淆（thread_id 管"哪次对话"，tool_call_id 管"哪次调用"）。
        </div>
        <div className="react-review-highlight">
          <strong>✨ 高光：</strong>自学自建 <code>08-hitl-end-turn.ts</code> 对照生产实现
          （artifact 协议 / hide_from_ui / returnDirect 的 JS-Python 差异），实践验证提前超额完成。
        </div>
        <div className="react-review-highlight">
          <strong>🏆 金句：</strong>中断借异常通道传播，但语义是"暂停信号"不是"错误"——错误处理必须放行控制流。
        </div>
      </ReviewSection>

      {/* SECTION 08 · A6 */}
      <ReviewSection eyebrow="SECTION 08 · A6" title="子代理与护栏：隔离与限流">
        <div className="react-review-highlight">
          <strong>核心：</strong>子代理 = 又一整个 Agent 循环（"Worker 跑的是代码，子代理跑的是 Agent"），
          隔离上下文、只回传摘要；task 的 prompt 必须自包含（子代理看不到主对话历史）。
        </div>
        <div className="react-review-highlight">
          <strong>限流机制：</strong>afterModel 改写消息（执行前让消息与计划一致）；
          执行中拦截会造成悬空 tool_call，下次模型调用被厂商 API 拒收——<strong>这个约束是学习者在追问中自己推出的</strong>，
          而真实 DeerFlow 恰好有专门的 DanglingToolCallMiddleware。
        </div>
        <div className="react-review-highlight">
          <strong>⚠️ 踩坑：</strong>曾答"模型不知道被截"——错，截断说明追加在消息里，模型可见并可重规划。护栏动作必须对模型可见。
        </div>
        <div className="react-review-highlight">
          <strong>🛠️ 实践：</strong>demo 04 改 maxConcurrent=1 + 补发 B/C 两轮——
          "截断 → 模型读 notice → 重新规划 → 全部完成"闭环跑通。
        </div>
        <div className="react-review-highlight">
          <strong>🏆 金句：</strong>护栏动手时必须留痕迹——静默截断会让模型在幻觉里继续编。
        </div>
      </ReviewSection>

      {/* SECTION 09 · 打字默写精选 */}
      <ReviewSection eyebrow="SECTION 09 · 打字默写检查" title="闭卷精选（含答案锚点）">
        <div className="react-review-highlight">
          <strong style={{ color: '#d29922' }}>Q1 · Agent 循环什么时候停？（分层答）</strong>
          <div style={{ color: '#6e7681', fontStyle: 'italic', fontSize: 13.5, marginTop: 6 }}>
            → 语义层：任务达成/失败；机制层：AIMessage 不再带 tool_calls；安全网：recursion limit / 步数上限。
          </div>
        </div>
        <div className="react-review-highlight">
          <strong style={{ color: '#d29922' }}>Q2 · 教学包五层中间件顺序及各层钩子？</strong>
          <div style={{ color: '#6e7681', fontStyle: 'italic', fontSize: 13.5, marginTop: 6 }}>
            → 消毒(wrapModelCall+wrapToolCall) → 错误恢复(wrapToolCall) → 循环检测(afterModel) → 子代理限流(afterModel) → 澄清(wrapToolCall，必须最后)。
          </div>
        </div>
        <div className="react-review-highlight">
          <strong style={{ color: '#d29922' }}>Q3 · reducer 签名与缺席语义？</strong>
          <div style={{ color: '#6e7681', fontStyle: 'italic', fontSize: 13.5, marginTop: 6 }}>
            → (existing: T|null|undefined, incoming: T|null|undefined) =&gt; T；缺席=没碰，&#123;&#125;=显式清空；返回值类型归 channel 声明管。
          </div>
        </div>
        <div className="react-review-highlight">
          <strong style={{ color: '#d29922' }}>Q4 · 为什么日期不能写进 system prompt？</strong>
          <div style={{ color: '#6e7681', fontStyle: 'italic', fontSize: 13.5, marginTop: 6 }}>
            → 整个 system prompt 都在前缀里；日期进去 = 每天全站缓存 miss。动态内容走中间件注入消息流（DynamicContextMiddleware）。
          </div>
        </div>
        <div className="react-review-highlight">
          <strong style={{ color: '#d29922' }}>Q5 · resume 的答案变成什么、挂哪个 id？</strong>
          <div style={{ color: '#6e7681', fontStyle: 'italic', fontSize: 13.5, marginTop: 6 }}>
            → ToolMessage，挂 tool_call_id（与申请单号配对）；thread_id 管会话恢复，两者不同层。
          </div>
        </div>
        <div className="react-review-highlight">
          <strong style={{ color: '#d29922' }}>Q6 · 为什么限流在 afterModel 而不是执行中拦？</strong>
          <div style={{ color: '#6e7681', fontStyle: 'italic', fontSize: 13.5, marginTop: 6 }}>
            → afterModel 改写消息让"调用与执行"一致；执行中拦会留下悬空 tool_call，下次模型调用被厂商 API 拒收。
          </div>
        </div>
      </ReviewSection>

      {/* SECTION 10 · 盲点汇总 */}
      <ReviewSection eyebrow="SECTION 10 · 盲点自查" title="本次踩过的坑（下次别再踩）">
        <div className="react-review-highlight" style={{ borderLeft: '3px solid #f85149' }}>
          <strong style={{ color: '#f85149' }}>🕳️ 层级混淆三连</strong>
          <div style={{ color: '#9da7b3', marginTop: 4 }}>停止条件的语义/机制层混答；thread_id 与 tool_call_id 混层；软引导与硬强制装反。全部经"上下兄弟问三句"拆开焊死。</div>
        </div>
        <div className="react-review-highlight" style={{ borderLeft: '3px solid #f85149' }}>
          <strong style={{ color: '#f85149' }}>🕳️ 注释承诺 ≠ 代码兑现</strong>
          <div style={{ color: '#9da7b3', marginTop: 4 }}>mergeTodos 注释写了"incoming == null 原样返回"但代码没做。规则：注释承诺必须代码兑现，审查时对照检查。</div>
        </div>
        <div className="react-review-highlight" style={{ borderLeft: '3px solid #f85149' }}>
          <strong style={{ color: '#f85149' }}>🕳️ 类型加宽不看契约边界</strong>
          <div style={{ color: '#9da7b3', marginTop: 4 }}>修 null 分支时把返回值加宽为 null，违反 channel 声明（typecheck 红）。规则：先查契约再改类型。</div>
        </div>
        <div className="react-review-highlight" style={{ borderLeft: '3px solid #f85149' }}>
          <strong style={{ color: '#f85149' }}>🕳️ 流畅性错觉</strong>
          <div style={{ color: '#9da7b3', marginTop: 4 }}>复述教师原话代替自己的推理；漏题不答。规则：每题必答或写"不会"，全部用自己的话。</div>
        </div>
      </ReviewSection>

      {/* SECTION 11 · 跨单元连接 */}
      <ReviewSection eyebrow="SECTION 11 · 跨单元连接" title="六单元焊成的四条原则">
        <div className="react-review-highlight">
          <strong>🔗 护栏建在代码里，不在 prompt 里：</strong>
          限流/消毒/错误恢复全靠中间件强制（A2/A6）；prompt 只负责软引导（A4 技能披露）。风险等级决定手段。
        </div>
        <div className="react-review-highlight">
          <strong>🔗 fail-closed 出现两次：</strong>
          框架层（没挂 reducer 的 key 同轮双写 → InvalidUpdateError）和业务层（sandboxId 冲突 → throw）——同一原则不同层级各落一次地。
        </div>
        <div className="react-review-highlight">
          <strong>🔗 能力是数据，不是逻辑：</strong>
          A1 加工具不改模型、A4 加技能不改 prompt——可扩展性来自"注册"而非"修改"。
        </div>
        <div className="react-review-highlight">
          <strong>🔗 异常通道的两种乘客：</strong>
          interrupt 是信号（放行）vs 工具异常是错误（转换）——同一个 try/catch 区别对待（A2 × A5 合流）。
        </div>
      </ReviewSection>

      {/* SECTION 12 · 工程产物 */}
      <ReviewSection eyebrow="SECTION 12 · 工程产物" title="学习期间自建/改造的代码">
        <div className="react-review-table-wrap">
          <table>
            <thead>
              <tr><th>产物</th><th>单元</th><th>说明</th></tr>
            </thead>
            <tbody>
              <tr><td><code>tools.ts :: search_web</code></td><td>A1</td><td>新工具注册全流程（含两轮类型/运行时修复）</td></tr>
              <tr><td><code>middleware/tool-timing.ts</code></td><td>A2</td><td>自建中间件：wrapToolCall 计时，try/finally 覆盖失败调用</td></tr>
              <tr><td><code>state.ts :: mergeTodos</code> + demo 07 场景 D</td><td>A3</td><td>自定义 reducer + stateSchema 接线 + 三场景验证</td></tr>
              <tr><td><code>skills.ts :: weekly-report</code> + demo 05</td><td>A4</td><td>渐进披露可扩展性验证</td></tr>
              <tr><td><code>demos/08-hitl-end-turn.ts</code></td><td>A5</td><td>自学自建：生产式 HITL（Command(goto=END) + artifact 卡片 + 隐藏回复）</td></tr>
              <tr><td><code>demos/04</code> 改造</td><td>A6</td><td>maxConcurrent=1 + 截断后补发闭环</td></tr>
            </tbody>
          </table>
        </div>
      </ReviewSection>

      {/* SECTION 13 · 复习计划 */}
      <ReviewSection eyebrow="SECTION 13 · 间隔检索计划" title="未来复习安排">
        <div className="react-review-table-wrap">
          <table>
            <thead>
              <tr><th>时间</th><th>类型</th><th>内容</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>2026-08-16</strong></td><td>D2 · 3题闭卷</td><td>① 五层链条+各层钩子 ② reducer 签名+缺席语义 ③ 为什么日期不能进 system prompt（prefix cache）</td></tr>
              <tr><td><strong>2026-08-21</strong></td><td>D7 · 5题跨单元</td><td>① 软引导 vs 硬强制 × 风险分级 ② interrupt 穿透 × 中间件顺序 ③ fail-closed × 可信赖 Agent ④ 子代理上下文隔离 × 上下文工程 ⑤ tool_call 配对 × 消息协议</td></tr>
              <tr><td><strong>2026-09-13</strong></td><td>D30 · 综合</td><td>给真实场景设计完整 agent（工具裁剪 + 中间件链 + state reducer + HITL 点 + 子代理拆分 + 上下文预算），并标注每个决策是软引导还是硬强制</td></tr>
            </tbody>
          </table>
        </div>
      </ReviewSection>
    </article>
  );
}

export default Review20260814AgentACeng;
