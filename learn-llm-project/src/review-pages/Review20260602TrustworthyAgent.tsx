import { Card } from '@heroui/react';

const stats = [
  { value: '5', label: '类核心威胁', color: 'text-[#6b89a8]' },
  { value: '4', label: '系统消息步骤', color: 'text-[#c9b687]' },
  { value: '3', label: '安全边界', color: 'text-[#7a9985]' },
  { value: '1', label: '高风险审批原则', color: 'text-[#eef0f3]' },
];

const coreMechanism = [
  {
    tag: '01 · 约束入口',
    title: '系统消息框架',
    body: '通过角色、职责、流程、边界和输出规则，让 Agent 明确自己该做什么、不该做什么。',
    pills: ['元系统消息', '基础提示', '结构化系统提示', '迭代改进'],
  },
  {
    tag: '02 · 风险识别',
    title: '威胁模型',
    body: '把风险分成同级兄弟：指令、权限、资源、知识库、级联错误，避免只盯着“提示词写好一点”。',
    pills: ['指令注入', '权限滥用', '服务过载', '数据污染'],
  },
  {
    tag: '03 · 最后保险',
    title: '人机协作',
    body: '低风险自动化，高风险人类审批。审批不是拖慢流程，而是拦住有副作用的错误执行。',
    pills: ['写操作', '部署', '权限变更', '正式通知'],
  },
];

const timelineSteps = [
  { title: '元系统消息', body: '给提示词生成器 LLM 看，规定它如何生成结构化系统提示。' },
  { title: '基础提示', body: '描述目标 Agent 的角色、任务、职责和业务场景。' },
  { title: '结构化提示', body: '生成包含目标、职责、语气、限制和交互规则的系统消息。' },
  { title: '迭代改进', body: '根据运行结果持续调整提示，减少模糊行动空间。' },
];

const threats = [
  { tag: 'Threat 01', title: '任务和指令注入', body: '攻击者通过自然语言诱导 Agent 改变目标、越权或泄露信息。' },
  { tag: 'Threat 02', title: '访问关键系统', body: 'Agent 使用自身权限访问敏感数据或关键服务，形成间接越权。' },
  { tag: 'Threat 03', title: '资源和服务过载', body: '攻击者诱导 Agent 高频调用数据库、API 或模型，造成成本和可用性风险。' },
  { tag: 'Threat 04', title: '知识库投毒', body: '污染 Agent 依赖的外部知识源，让它基于错误依据做判断。' },
  { tag: 'Threat 05', title: '级联错误', body: '一个错误通过工具调用扩散到多个外部系统，使影响范围被放大。' },
];

const comparedSecurity = [
  {
    title: '提示词注入',
    body: '攻击入口是用户输入或对话内容；攻击对象是 Agent 的指令遵循机制；结果是 Agent 被诱导改变任务、越权或泄密。',
  },
  {
    title: '知识库投毒',
    body: '攻击入口是文档、网页、向量库等外部知识源；攻击对象是 Agent 的事实依据；结果是 Agent 基于错误数据做判断。',
  },
];

const layers = [
  {
    tag: '上 · 大类',
    title: '可信赖 Agent 的威胁模型',
    body: '回答的问题是：Agent 具备行动能力后，可能怎样越界、误用或扩散错误？',
  },
  {
    tag: '兄 · 同级威胁',
    title: '五个风险兄弟',
    body: '任务和指令注入、访问关键系统、资源和服务过载、知识库投毒、级联错误。',
  },
  {
    tag: '下 · 底层能力',
    title: '风险发生载体',
    body: '工具调用、数据库访问、外部 API、知识库检索、文件系统、Shell 命令。',
  },
];

const compareBackend = [
  {
    title: '相似点',
    items: [
      '都需要权限边界和访问控制。',
      '都需要 API 限流和资源保护。',
      '都需要输入过滤和数据校验。',
    ],
  },
  {
    title: '不同点',
    items: [
      '后端多是固定代码路径；Agent 会理解指令、自主规划、循环调用工具。',
      '后端主要接收结构化参数；Agent 还接收自然语言、文档、网页和知识库内容。',
      '后端错误通常沿固定链路传播；Agent 错误可能通过工具扩散到多个系统。',
    ],
  },
];

const humanCollaboration = [
  {
    title: '什么时候必须审批',
    items: [
      '修改、删除、移动文件。',
      '执行删除、覆盖、迁移、部署类 Shell 命令。',
      '提交代码、创建 tag、推送远程分支。',
      '修改环境变量、权限配置、CI/CD 配置。',
    ],
  },
  {
    title: '为什么不能全量审批',
    items: [
      '流程变慢。',
      '用户疲劳。',
      '人类开始机械确认。',
      '审批失去真正的风险过滤意义。',
    ],
  },
];

const practiceRules = [
  {
    tag: 'Low Risk',
    title: '允许自动执行',
    items: [
      '读取代码、配置和文档。',
      '查看 git diff、git log、提交记录。',
      '运行只读分析命令。',
      '向用户提出澄清问题。',
      '输出审查报告和修复建议。',
    ],
  },
  {
    tag: 'High Risk',
    title: '必须人类审批',
    items: [
      '修改、删除、移动文件。',
      '执行带有删除、覆盖、迁移、部署含义的命令。',
      '提交代码、创建 tag、推送远程分支。',
      '安装依赖或修改锁文件。',
      '修改环境变量、权限配置、CI/CD 配置。',
    ],
  },
  {
    tag: 'Forbidden',
    title: '禁止执行',
    items: [
      '未经用户明确要求，擅自修改代码。',
      '输出或复制密钥、token、密码、私钥等敏感信息。',
      '删除项目目录、清空数据库、强制重置 git 历史。',
      '跳过安全检查或绕过 git hook。',
      '在未确认风险的情况下自动部署或发布。',
    ],
  },
  {
    tag: 'Report Format',
    title: '安全风险输出格式',
    items: [
      '风险等级：高 / 中 / 低。',
      '风险位置：文件、函数、代码片段。',
      '风险类型：权限、注入、泄密、越权、破坏性操作。',
      '触发条件：什么情况下会出问题。',
      '影响范围：会影响哪些数据、用户或系统。',
      '修复建议：给出安全替代方案。',
    ],
  },
];

const deepQuestions = [
  {
    q: '为什么“提示词写好”不能单独解决可信赖问题？',
    a: '因为 Agent 的风险不只在文本生成阶段，还发生在工具选择、参数构造、外部执行和多轮循环中。提示词是约束入口，但还需要权限、限流、数据验证、隔离、回退和人类审批。',
  },
  {
    q: '可信赖 Agent 与传统后端安全的共同底层是什么？',
    a: '共同底层是边界控制：权限控制、输入校验、访问限制、资源限流、敏感数据保护。区别在于 Agent 还会接收自然语言和外部知识，并通过工具产生副作用。',
  },
  {
    q: '人机协作的最小有效原则是什么？',
    a: '低风险自动化，高风险审批。不要让人类审批所有动作，否则用户会疲劳并机械确认；也不能让 Agent 自动执行有副作用的高风险动作。',
  },
];

const tags = [
  'AI Agent',
  'Trustworthy AI',
  'Threat Model',
  'Human-in-the-loop',
  'Security Boundaries',
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

function Review20260602TrustworthyAgent() {
  return (
    <article className="react-review-page">
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="react-review-hero">
        <span className="eyebrow">LEARN · 2026 · 06 · 02 · AI Agent 构建章节学习记录</span>
        <h1>构建<strong>可信赖</strong> AI Agent</h1>
        <p>
          本章核心不是让 Agent 更聪明，而是让它在具备工具调用、数据访问和任务执行能力时，依然安全、可控、可靠。
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
      <ReviewSection eyebrow="SECTION 01 · 核心机制" title="模型判断与工具执行间的风险缝隙">
        <div className="react-review-grid three">
          {coreMechanism.map((item, idx) => (
            <Card className="react-review-card" key={idx} variant="default">
              <Card.Header>
                <span className="tag text-[#6b89a8] font-mono text-xs">{item.tag}</span>
                <Card.Title>{item.title}</Card.Title>
              </Card.Header>
              <Card.Content>
                <p className="text-sm text-[#b6bdc7] leading-relaxed mb-4">{item.body}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.pills.map((pill, i) => (
                    <span key={i} className="text-[11px] bg-slate-800 text-slate-300 border border-slate-700 px-2 py-0.5 rounded-full font-mono">
                      {pill}
                    </span>
                  ))}
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>
      </ReviewSection>

      {/* ═══════════════ SECTION 02 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 02 · 约束框架" title="系统消息生成机制与迭代">
        <div className="react-review-timeline">
          {timelineSteps.map((step, idx) => (
            <div className="react-review-timeline-row" key={idx}>
              <strong>Step 0{idx + 1}</strong>
              <span>
                <strong className="text-slate-200 block mb-0.5">{step.title}</strong>
                {step.body}
              </span>
            </div>
          ))}
        </div>
      </ReviewSection>

      {/* ═══════════════ SECTION 03 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 03 · 威胁识别" title="五类主要的威胁模型">
        <div className="react-review-grid three">
          {threats.map((t, idx) => (
            <Card className="react-review-card" key={idx} variant="default">
              <Card.Header>
                <span className="tag text-[#c9b687] font-mono text-xs">{t.tag}</span>
                <Card.Title>{t.title}</Card.Title>
              </Card.Header>
              <Card.Content>
                <p className="text-sm text-[#b6bdc7] leading-relaxed">{t.body}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </ReviewSection>

      {/* ═══════════════ SECTION 04 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 04 · 对比分析" title="行为篡改（注入） vs 依据污染（投毒）">
        <div className="react-review-grid two">
          {comparedSecurity.map((item, idx) => (
            <Card className="react-review-card" key={idx} variant="default">
              <Card.Header>
                <Card.Title>{item.title}</Card.Title>
              </Card.Header>
              <Card.Content>
                <p className="text-sm text-[#b6bdc7] leading-relaxed">{item.body}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </ReviewSection>

      {/* ═══════════════ SECTION 05 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 05 · 概念分层" title="上下兄弟分层体系">
        <div className="react-review-grid three">
          {layers.map((layer, idx) => (
            <Card className="react-review-card" key={idx} variant="default">
              <Card.Header>
                <span className="tag text-[#7a9985] font-mono text-xs">{layer.tag}</span>
                <Card.Title>{layer.title}</Card.Title>
              </Card.Header>
              <Card.Content>
                <p className="text-sm text-[#b6bdc7] leading-relaxed">{layer.body}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </ReviewSection>

      {/* ═══════════════ SECTION 06 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 06 · 对比映射" title="Agent 越界控制 vs 传统后端安全">
        <div className="react-review-grid two">
          {compareBackend.map((group, idx) => (
            <Card className="react-review-card" key={idx} variant="default">
              <Card.Header>
                <Card.Title>{group.title}</Card.Title>
              </Card.Header>
              <Card.Content>
                <ul className="list-disc pl-4 space-y-2">
                  {group.items.map((item, i) => (
                    <li className="text-sm text-[#b6bdc7]" key={i}>{item}</li>
                  ))}
                </ul>
              </Card.Content>
            </Card>
          ))}
        </div>
      </ReviewSection>

      {/* ═══════════════ SECTION 07 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 07 · 流程节点" title="ASCII 风险拦截流程">
        <pre className="react-review-ascii">{`用户输入 / 外部文档
    │
    ▼
模型理解与规划 ────── 风险：指令注入 / 错误判断
    │
    ▼
选择工具与参数 ────── 风险：越权 / 高频调用 / 错工具
    │
    ▼
执行外部操作 ────── 风险：写坏数据 / 泄密 / 成本飙升
    │
    ▼
观察结果并循环 ──── 风险：级联错误 / 错误扩散
    │
    ▼
⚠️ 高风险动作前插入人类审批 (红色大按钮)`}</pre>
      </ReviewSection>

      {/* ═══════════════ SECTION 08 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 08 · 治理边界" title="人类审批原则与过滤权衡">
        <div className="react-review-grid two">
          {humanCollaboration.map((group, idx) => (
            <Card className="react-review-card" key={idx} variant="default">
              <Card.Header>
                <Card.Title>{group.title}</Card.Title>
              </Card.Header>
              <Card.Content>
                <ul className="list-disc pl-4 space-y-2">
                  {group.items.map((item, i) => (
                    <li className="text-sm text-[#b6bdc7]" key={i}>{item}</li>
                  ))}
                </ul>
              </Card.Content>
            </Card>
          ))}
        </div>
      </ReviewSection>

      {/* ═══════════════ SECTION 09 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 09 · 代码审查实践" title="代码审查 Agent 规则边界设定">
        <div className="react-review-grid two">
          {practiceRules.map((rule, idx) => (
            <Card className="react-review-card" key={idx} variant="default">
              <Card.Header>
                <span className="tag text-[#6b89a8] font-mono text-xs">{rule.tag}</span>
                <Card.Title>{rule.title}</Card.Title>
              </Card.Header>
              <Card.Content>
                <ul className="list-disc pl-4 space-y-2">
                  {rule.items.map((item, i) => (
                    <li className="text-sm text-[#b6bdc7]" key={i}>{item}</li>
                  ))}
                </ul>
              </Card.Content>
            </Card>
          ))}
        </div>
      </ReviewSection>

      {/* ═══════════════ SECTION 10 ═══════════════ */}
      <ReviewSection eyebrow="SECTION 10 · 深度追问" title="横向连接与深度自检">
        {deepQuestions.map((q, idx) => (
          <details className="react-review-section details" key={idx}>
            <summary>{q.q}</summary>
            <div className="detail-body pt-2">
              <p className="text-sm text-[#b6bdc7] leading-relaxed">{q.a}</p>
            </div>
          </details>
        ))}
      </ReviewSection>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <footer className="react-review-footer">
        <div className="flex justify-between flex-wrap gap-4 text-xs font-mono text-[#8a929e] mb-6">
          <div>2026 · 06 · 02 · 构建可信赖 AI Agent · 5 威胁模型 · 3 安全边界</div>
          <div>自动执行 / 人类审批 / 绝对禁止 · 级联错误控制</div>
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

export default Review20260602TrustworthyAgent;
