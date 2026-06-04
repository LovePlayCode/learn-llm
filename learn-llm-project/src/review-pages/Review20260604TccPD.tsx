import { Card } from '@heroui/react';

const stats = [
  { value: '11', label: '题目总量', color: 'text-[#c9b687]' },
  { value: '3', label: '复习主题', color: 'text-[#7a9985]' },
  { value: '1', label: '正式毕业项', color: 'text-[#6b89a8]' },
  { value: '2', label: '记忆锚点补漏', color: 'text-[#eef0f3]' },
];

const controllableScenarios = [
  {
    tag: 'Controllable 的儿子们（机制层）',
    title: '具体实现机制 · 兄弟关系',
    items: ['Human-in-the-loop 审批', '重试机制', '打断 / Kill switch', '回滚'],
  },
  {
    tag: '层级结构 · 上下兄弟',
    title: 'Controllable 的家族定位',
    items: [
      '上：TCC 运行时治理三维度（理念层）',
      '中：HITL / 重试 / 打断 / 回滚（机制层）',
      '下：abort 按钮 / 审批弹窗 / 重试 API（操作层）',
    ],
  },
];

const checkpointRoles = [
  {
    tag: '身份 A · 工程容错',
    title: '存档点 · 失败后局部重试',
    body: '服务于错误累积公式 p^N 的损伤控制。把大 N 切成多个局部低阶 N，每段独立重试。',
    formula: '0.85^6 = 37.7% → checkpoint + 重试 = 93.7%',
    color: 'text-[#6b89a8]',
  },
  {
    tag: '身份 B · 安全治理',
    title: '审批关卡 · 高风险前人类确认',
    body: '服务于 Controllable / HITL 原则。不可逆操作前插入人类决策点，防止 Agent 跑飞造成副作用。',
    formula: '部署前 checkpoint = 最后的红色大按钮',
    color: 'text-[#c9b687]',
  },
];

const strategyRows = [
  ['错误累积', '坏事乘下去，衰减比想象快', '"每步 97% 应该还行"', '10 步后只剩 74%（26% 翻车率）'],
  ['自洽性采样', '好事乘下去，增长比想象快', '"60% 采 5 次大概 80%？"', '实际 98.976%——几乎必对'],
  ['级联错误', '一个错误分叉扩散', '"就影响一两个系统"', '可能瘫一片'],
];

const planScenarios = [
  {
    tag: 'Weak Plan',
    title: '只列任务',
    items: ['没有依赖 → 系统乱序执行', '没有约束 → Agent 超预算', '没有验收 → 不知道做完没'],
  },
  {
    tag: 'Strong Plan',
    title: '定义执行链路',
    items: ['依赖关系明确 → 可判断串行/并行', '约束写入 Plan → Agent 不跑偏', '验收标准 → 可自动检查结果'],
  },
];

const threatScenarios = [
  {
    tag: '提示词注入',
    title: '篡改行为指令',
    items: ['攻击入口：用户输入 / 对话内容', '攻击对象：Agent 的指令遵循机制', '结果：改变任务 / 越权 / 泄密'],
  },
  {
    tag: '知识库投毒',
    title: '污染事实依据',
    items: ['攻击入口：文档 / 网页 / 向量库', '攻击对象：Agent 的事实判断基础', '结果：基于错误数据做决策'],
  },
];

const timeline = [
  ['进步 01', 'Controllable 的"被监视感"误判 → 一轮修正为"跑飞了拦不住"。画面感建立：红色大按钮。'],
  ['进步 02', 'Consistency 从"不信任感"泛词 → 修正为"同题不同答，产出太不稳定"。精度提升：从 0 到具体场景。'],
  ['进步 03', 'Checkpoint 的"容易失败"视角 → 升级为"不可逆副作用"视角。从工程效率层跳到安全治理层。'],
  ['进步 04', '上下兄弟自相矛盾（HITL 同时出现在兄弟和下层） → 一轮修正后层级清晰。说明表达需要对齐。'],
  ['金光时刻', 'Checkpoint 双重身份跨章节打通 —— 既是错误累积的容错存档，又是可信赖 Agent 的 HITL 关卡。两条学习线在这里交汇。'],
];

const reportCards = [
  {
    title: 'TCC + 错误累积',
    subtitle: 'A 层 · 正式毕业',
    body: 'TCC 三维度闭卷复述无误。错误累积数学+checkpoint 机制+钥匙迁移全过。从 5/16 到 6/4，跨越 D7 综合压测，标记为 A 层稳固掌握。',
  },
  {
    title: 'Planning Design',
    subtitle: 'A- 层 · D2 通过',
    body: '六字段记 5/6（漏约束，已补）。依赖关系理解到位，并行识别能力在线。下次 D7 需验证"全局约束"是否焊死。',
  },
  {
    title: '可信赖 AI 代理',
    subtitle: 'A- 层 · D2 通过',
    body: '五类威胁记 4/5（漏级联，已补）。注入 vs 投毒的区分第二轮精准到位。安全边界三档分类逻辑清晰。',
  },
  {
    title: '记忆锚点 · 今日必焊',
    subtitle: '4 个口诀带走',
    body: '① Plan 六字段：目标、约束、任务、依赖、分配、验收。\n② 五类威胁：注入、越权、过载、投毒、级联。\n③ TCC 口语锚：看得见、管得住、信得过。\n④ Controllable 画面：红色大按钮 = 跑飞了能拍停。',
  },
];

const reviewPlan = [
  ['6/5 - 6/8', '不安排复习 · 让今天的跨章节连接和新补的锚点整合。大脑需要无干扰整合时间。'],
  ['6/9 (D7)', '推理时计算 D60 综合压测（5/25 已排）+ Planning Design D7（5题，含跨章节） + 可信赖 Agent D7（5题，含跨章节）。'],
  ['6/12', '缓存 + Claude Code 上下文管理（5/21 双毕业项 D30 回访）。'],
  ['6/16', 'RLHF 偏向自信（5/17 毕业项 D30 回访）。'],
  ['6/27', '错误累积 D30 综合压测 · 含 checkpoint 工程场景题。'],
  ['6/30', '「线性 vs 指数」钥匙 D30 综合压测 · 给新场景，用钥匙独立审视。'],
];

const tags = [
  'TCC',
  '错误累积',
  'Checkpoint',
  'Planning Design',
  '可信赖 Agent',
  '威胁模型',
  'HITL',
  '线性 vs 指数',
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

function Review20260604TccPD() {
  return (
    <article className="react-review-page">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="react-review-hero">
        <span className="eyebrow">REVIEW · 2026 · 06 · 04 · TCC 毕业日 + 双 D2 通过</span>
        <h1>TCC 正式<strong>毕业</strong><br />+ 两条新线<strong>稳住首轮</strong></h1>
        <p>
          上半场 TCC + 错误累积 D7 综合压测 5 题全过，正式毕业。
          下半场 Planning Design D2 和构建可信赖 AI 代理 D2 各 3 题通过。
          今天最大的亮点：checkpoint 的"双重身份"跨章节打通——既是工程容错工具，又是安全治理机制。
        </p>

        <div className="react-review-stats">
          {stats.map((stat, idx) => (
            <Card className="react-review-stat" key={idx} variant="secondary">
              <strong className={stat.color}>{stat.value}</strong>
              <span>{stat.label}</span>
            </Card>
          ))}
        </div>
      </section>

      {/* ═══════════════ SECTION 01 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 01 · TCC + 错误累积 · D7 综合压测 · 正式毕业" title="从 5/16 首学到 6/4 毕业：看得见 · 管得住 · 信得过">
        <pre className="react-review-ascii">{`T → Transparent   · 透明   · 看得见 · 解决黑盒恐惧
C → Controllable  · 可控制 · 管得住 · 解决失控恐惧（跑飞了拦不住）
C → Consistency   · 一致性 · 信得过 · 解决不稳定恐惧（同题不同答）

画面锚点：Agent 正在往生产环境推代码 → 你需要一个红色大按钮能拍下去喊停`}</pre>

        <div className="react-review-grid two">
          {controllableScenarios.map((sc, idx) => (
            <Card className="react-review-card" key={idx} variant="default">
              <Card.Header>
                <Card.Description>{sc.tag}</Card.Description>
                <Card.Title>{sc.title}</Card.Title>
              </Card.Header>
              <Card.Content>
                <ul>
                  {sc.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </Card.Content>
            </Card>
          ))}
        </div>
      </ReviewSection>

      {/* ═══════════════ SECTION 02 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 02 · 错误累积 · 数学验证 · checkpoint 双重身份" title="同一个 checkpoint：两件事同时干">
        <div className="react-review-grid two">
          {checkpointRoles.map((role, idx) => (
            <Card className="react-review-card" key={idx} variant="default">
              <Card.Header>
                <Card.Description>{role.tag}</Card.Description>
                <Card.Title>{role.title}</Card.Title>
              </Card.Header>
              <Card.Content className="space-y-4">
                <p>{role.body}</p>
                <p className={`${role.color} font-semibold`}>{role.formula}</p>
              </Card.Content>
            </Card>
          ))}
        </div>

        <blockquote className="border-l-3 border-[#c9b687] pl-6 py-4 my-6 bg-[#c9b687]/5 text-sm text-slate-200 rounded-r-lg">
          Checkpoint 放置逻辑：不是&quot;哪里容易挂&quot;，而是<strong>&quot;哪里有不可逆副作用&quot;</strong>。
        </blockquote>

        <pre className="react-review-ascii">{`自动化部署 Agent 示例：

拉代码 → 跑测试 → 构建镜像 → 推送 → [CHECKPOINT] → 部署 → 通知
│                              │                        │
└── 这几步失败了可以重来 ──────┘                        │
                                                        └── 不可逆 · 影响生产环境和用户`}</pre>
      </ReviewSection>

      {/* ═══════════════ SECTION 03 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 03 · 钥匙级抽象 · 线性 vs 指数 · 正反两面" title="同一把钥匙：正反两面">
        <div className="react-review-table-wrap">
          <table className="react-review-table">
            <thead>
              <tr>
                <th>例子</th>
                <th>指数方向</th>
                <th>人类直觉错判</th>
                <th>数学真相</th>
              </tr>
            </thead>
            <tbody>
              {strategyRows.map((row, idx) => (
                <tr key={idx}>
                  <td><strong>{row[0]}</strong></td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                  <td>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <blockquote className="border-l-3 border-[#6b89a8] pl-6 py-4 my-6 bg-[#6b89a8]/5 text-sm text-slate-200 rounded-r-lg">
          &quot;线性 vs 指数&quot;这把钥匙的威力：<strong>揭露人类直觉和数学真相之间的鸿沟</strong>。
          找的是那些&quot;人以为是加法/平缓变化，实际上是乘法/剧烈变化&quot;的现象。
        </blockquote>
      </ReviewSection>

      {/* ═══════════════ SECTION 04 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 04 · Planning Design · D2 闭卷 · 通过" title="六字段口诀：焊进去">
        <pre className="react-review-ascii">{`目标 · 约束 · 任务 · 依赖 · 分配 · 验收
│        │        │        │        │        │
用户     预算     子任务   谁先     Agent/   如何判断
最终     时间     边界     谁后     工具     完成
要什么   偏好     清楚     并行？
         质量
         底线

⚠️ 本次漏了"约束"—— 已补。没有约束 = Agent 正确地做错事。`}</pre>

        <div className="react-review-grid two">
          {planScenarios.map((sc, idx) => (
            <Card className="react-review-card" key={idx} variant="default">
              <Card.Header>
                <Card.Description>{sc.tag}</Card.Description>
                <Card.Title>{sc.title}</Card.Title>
              </Card.Header>
              <Card.Content>
                <ul>
                  {sc.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </Card.Content>
            </Card>
          ))}
        </div>

        <blockquote className="border-l-3 border-[#c9b687] pl-6 py-4 my-6 bg-[#c9b687]/5 text-sm text-slate-200 rounded-r-lg">
          没有依赖标注，系统无法正确判断串行/并行，<strong>导致任务拿到错误输入或空输入</strong>。
        </blockquote>

        <pre className="react-review-ascii">{`学习场景并行示例：

明确目标和实力
    │
    ├──→ 寻找学习资料 ──┐
    │                    ├──→ 验收和总结
    └──→ 制定学习计划 ──┘
              ↑
    这两步输入都只依赖第 1 步，可以并行`}</pre>
      </ReviewSection>

      {/* ═══════════════ SECTION 05 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 05 · 构建可信赖 AI 代理 · D2 闭卷 · 通过" title="五兄弟：一个都不能少">
        <pre className="react-review-ascii">{`五类威胁口诀：注入 · 越权 · 过载 · 投毒 · 级联

⚠️ 本次漏了"级联"—— 20 分钟前 D7 还在用，提取时却丢了。说明需要把五兄弟当整体背。`}</pre>

        <div className="react-review-grid two">
          {threatScenarios.map((sc, idx) => (
            <Card className="react-review-card" key={idx} variant="default">
              <Card.Header>
                <Card.Description>{sc.tag}</Card.Description>
                <Card.Title>{sc.title}</Card.Title>
              </Card.Header>
              <Card.Content>
                <ul>
                  {sc.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </Card.Content>
            </Card>
          ))}
        </div>

        <blockquote className="border-l-3 border-[#6b89a8] pl-6 py-4 my-6 bg-[#6b89a8]/5 text-sm text-slate-200 rounded-r-lg">
          提示词注入<strong>动了 Agent 的手脚</strong>（行为）；知识库投毒<strong>动了 Agent 的眼睛</strong>（依据）。
        </blockquote>

        <details className="react-review-section details">
          <summary>安全边界三档分类 · 代码审查 Agent 示例</summary>
          <div className="detail-body space-y-3 pt-2">
            <p><strong>自动执行（只读无副作用）：</strong>读取代码/配置、git log/diff、运行只读分析、询问用户、输出审查报告。</p>
            <p><strong>人类审批（有副作用可逆）：</strong>修改/删除文件、提交代码/推送分支、安装依赖、修改环境变量/CI配置。</p>
            <p><strong>绝对禁止（不可逆+高危）：</strong>擅自修改代码、暴露密钥/token、删除项目目录/清空数据库、跳过安全检查、未确认风险自动部署。</p>
            <p className="text-[#6b89a8] font-semibold">判断逻辑：只读→自动 | 有副作用→审批 | 不可逆高危→禁止</p>
          </div>
        </details>
      </ReviewSection>

      {/* ═══════════════ SECTION 06 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 06 · 元层级成长曲线 · 今日思维进步轨迹" title="修正速度：越来越快">
        <div className="react-review-timeline">
          {timeline.map((row, idx) => (
            <div className="react-review-timeline-row" key={idx}>
              <strong>{row[0]}</strong>
              <span>{row[1]}</span>
            </div>
          ))}
        </div>
      </ReviewSection>

      {/* ═══════════════ SECTION 07 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 07 · 学习报告网格 · A/B/C 层掌握 + 记忆锚点" title="三条线：各就各位">
        <div className="react-review-grid two">
          {reportCards.map((card, idx) => (
            <Card className="react-review-card" key={idx} variant="default">
              <Card.Header className="flex flex-col items-start gap-1 pb-2">
                <span className="tag text-[#6b89a8] font-mono text-xs">{card.subtitle}</span>
                <Card.Title className="text-[#eef0f3] text-lg font-normal">{card.title}</Card.Title>
              </Card.Header>
              <Card.Content>
                <p className="text-sm whitespace-pre-line leading-relaxed text-[#b6bdc7]">{card.body}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </ReviewSection>

      {/* ═══════════════ SECTION 08 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 08 · 横向连接 · 跨章节知识网络" title="三条线：怎么交汇">
        <details className="react-review-section details">
          <summary>Planning Design 与可信赖 Agent 的关系</summary>
          <div className="detail-body pt-2">
            <p>Planning 的&quot;依赖关系&quot;决定执行顺序；可信赖 Agent 的&quot;安全边界&quot;决定哪些步骤需要插入审批 checkpoint。两者结合 = 既高效又安全的执行计划。</p>
          </div>
        </details>
        <details className="react-review-section details">
          <summary>错误累积 与 级联错误威胁 的关系</summary>
          <div className="detail-body pt-2">
            <p>错误累积是数学层面（p^N 衰减）；级联错误是安全层面（一个错通过工具扩散到多系统）。本质相同：链式过程中错误按指数扩散。解法也相同：checkpoint 阻断传播。</p>
          </div>
        </details>
        <details className="react-review-section details">
          <summary>Checkpoint 的三重身份</summary>
          <div className="detail-body pt-2">
            <p>① 错误累积语境：存档点，局部重试，降低 p^N 的 N。<br />② 可信赖 Agent 语境：HITL 审批关卡，拦住不可逆操作。<br />③ Planning Design 语境：子任务边界，验收点，决定是否进入下一步。<br />同一个概念在三个章节里以不同角色出现——这就是知识网络的交汇节点。</p>
          </div>
        </details>
      </ReviewSection>

      {/* ═══════════════ SECTION 09 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 09 · 复习计划 · 间隔重复时间表" title="下一站：该回访谁">
        <div className="react-review-timeline">
          {reviewPlan.map((row, idx) => (
            <div className="react-review-timeline-row" key={idx}>
              <strong>{row[0]}</strong>
              <span>{row[1]}</span>
            </div>
          ))}
        </div>

        <ol className="react-review-checklist">
          <li><strong>今天口诀默念 3 遍</strong> — 目标约束任务依赖分配验收 / 注入越权过载投毒级联 / 看得见管得住信得过。</li>
          <li><strong>6/9 D7 压测前自检</strong> — Planning 约束字段能否闭卷举例？五类威胁能否一次性列全？</li>
          <li><strong>每次撞到&quot;checkpoint&quot;概念</strong> — 问自己：这次它是容错身份还是安全身份？还是两者兼有？</li>
        </ol>
      </ReviewSection>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="react-review-footer">
        <div className="flex justify-between flex-wrap gap-4 text-xs font-mono text-[#8a929e] mb-6">
          <div>2026 · 06 · 04 · TCC D7 毕业 · Planning Design D2 · 可信赖 Agent D2</div>
          <div>11 题 · 3 主题 · 1 毕业 · 2 补漏 · 1 金光</div>
        </div>
        <div className="tag-row">
          {tags.map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </div>
      </footer>
    </article>
  );
}

export default Review20260604TccPD;
