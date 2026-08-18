function getLocalDateKey() {
  const now = new Date();

  return [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
  ].join("-");
}

export const today = getLocalDateKey();

export type ReviewTask = {
  id: string;
  dueDate: string;
  title: string;
  stage: string;
  type: "rest" | "due" | "scheduled";
  estimate: string;
  description: string;
  relatedRecordIds?: string[];
  completed?: boolean;
};

export type ReviewRecord = {
  id: string;
  date: string;
  time: string;
  title: string;
  subtitle: string;
  sourceFile: string;
  summary: string;
  detail: {
    lead: string;
    stats: Array<{ value: string; label: string }>;
    keyPoints: Array<{ label: string; title: string; body: string }>;
    map: string;
    sections: Array<{ title: string; body: string }>;
    blindspots: Array<{ title: string; body: string }>;
    highlights: Array<{ title: string; body: string }>;
    report: Array<{ title: string; items: string[]; tone?: "warn" }>;
    tags: string[];
  };
};

export const reviewRecords: ReviewRecord[] = [
  {
    id: "2026-05-31-error-accumulation-tcc-linear-exponential",
    date: "2026-05-31",
    time: "晚间复习",
    title: "错误累积 D2 + TCC D3",
    subtitle: "线性 vs 指数钥匙焊死",
    sourceFile: "复习/2026-05-31-错误累积D2+TCC-D3+线性指数钥匙焊死.html",
    summary:
      "从累积错误率数字默写，上升到“线性 vs 指数”的思维家族，并把 TCC、checkpoint、局部低阶 N 串成同一把钥匙。",
    detail: {
      lead: "这次复习从数字默写上升到思维家族：真正留下来的不是 26% 和 97%，而是能拆未来所有链式过程的“线性 vs 指数”钥匙。",
      stats: [
        { value: "2", label: "关磨穿" },
        { value: "4", label: "金光时刻" },
        { value: "3", label: "表达精度复发并修复" },
        { value: "5", label: "钥匙跨章节实战累计" },
      ],
      keyPoints: [
        {
          label: "第一关 / D2",
          title: "97% × 10 步也会翻车 26%",
          body: "顶尖 Agent 每步 97% 看似很稳，但 10 步累积下来仍有约四分之一翻车率，这是“高精度长链条”的陷阱。",
        },
        {
          label: "第一关 / D2",
          title: "70% × 10 步几乎必翻车",
          body: "单步 70% 直觉上像“还行”，但 10 步连续成功只有 2.82%，累积错误率约 97.18%。这就是线性直觉和指数现实的鸿沟。",
        },
        {
          label: "第二关 / TCC",
          title: "checkpoint = Controllable",
          body: "TCC 三人组没有翻车：Transparent 看得见，Controllable 管得住，Consistency 信得过。checkpoint 挂在 Controllable 这一格。",
        },
        {
          label: "钥匙 / 抽象",
          title: "线性 vs 指数",
          body: "你没有停在“加法 vs 乘法”，而是上升到“线性思维 vs 指数思维”的家族层。这把钥匙以后能拆复利、传播、缓存衰减、注意力衰减。",
        },
      ],
      map: `第 3 层（思维家族）   线性思维  vs  指数思维
                         │             │
第 2 层（数学操作）       加法直觉       乘法定律
                         │             │
第 1 层（具体数字）       50% 直觉       97% 真相

鸿沟 = 普通人以为“差一点点”，真实系统会指数级放大。`,
      sections: [
        {
          title: "用公式拆三方案",
          body: "错误累积公式是 p^N。方案 A 动 N，缩短链路；方案 B 动 p，提高单步成功率；方案 C 动结构，把一个大 N 切成多个局部低阶 N。",
        },
        {
          title: "checkpoint 的真正动作",
          body: "checkpoint 不是“修补错误”，而是重新切分赌注：把必须连续 8 步全对的指数压力，拆成多段短指数加局部线性重试。",
        },
        {
          title: "数学命名升级",
          body: "从“切短累积分母”升级成“指数分段”，再升级成“局部低阶 N + 截断与降幂”。这是从听课到建模的跨越。",
        },
      ],
      blindspots: [
        {
          title: "把两个场景压扁成一句话",
          body: "“累积错误率 26%、97%”吞掉了单步 97% 和单步 70% 的前缀。修复方式是先把场景工整拆开。",
        },
        {
          title: "用泛词替代具体机制",
          body: "“大脑用直觉算”不够精确，需要说清楚是“线性/加法直觉”错估了“指数/乘法现实”。",
        },
        {
          title: "同义词循环定义",
          body: "“Controllable 因为可控制”没有解释内部动作。需要拆成恢复、重试、局部低阶 N。",
        },
      ],
      highlights: [
        {
          title: "抽象上升",
          body: "你站到了“线性 vs 指数”这个思维家族层，比老师预设的“加法 vs 乘法”还高一层。",
        },
        {
          title: "钥匙自动化",
          body: "“上下兄弟问三句”在 TCC 三方案那里自动响起，你主动反问“三个方案是不是同一层级”。",
        },
        {
          title: "跨章节缝合",
          body: "TCC、错误累积、checkpoint、线性 vs 指数被缝到了一起，不再是孤立知识点。",
        },
        {
          title: "Self-Correction 工程直觉",
          body: "你提到“把错误信息传给大模型，提高成功率”，这已经摸到了 Reflection / Self-Correction 的影子。",
        },
      ],
      report: [
        {
          title: "A 层 · 必须深入",
          items: [
            "累积错误率 1 - p^N",
            "TCC 三字母",
            "checkpoint = Controllable",
            "线性 vs 指数思维家族",
            "局部低阶 N / 截断与降幂",
          ],
        },
        {
          title: "需要加强",
          items: ["表达精度", "解释“为什么”时拆内部动作", "避免同义词循环定义"],
          tone: "warn",
        },
        {
          title: "横向连接",
          items: [
            "复利 / 通胀 / 病毒传播",
            "缓存命中率衰减",
            "多轮对话注意力衰减",
            "艾宾浩斯遗忘曲线",
          ],
        },
      ],
      tags: ["错误累积", "TCC", "checkpoint", "线性 vs 指数", "上下兄弟问三句"],
    },
  },
  {
    id: "2026-06-02-trustworthy-agent",
    date: "2026-06-02",
    time: "学习记录",
    title: "构建可信赖 AI Agent",
    subtitle: "5大核心威胁，安全边界设定",
    sourceFile: "learn/2026-06-02-构建可信赖AI代理.html",
    summary:
      "学习在具备工具调用、数据访问和行动能力的 AI 代理中，如何通过系统消息架构、威胁模型和人机审批协作，建立安全可靠的执行边界。",
    detail: {
      lead: "本章重点不是让 Agent 更聪明，而是让它在具备工具调用和任务执行能力时，依然安全、可控、可靠。",
      stats: [
        { value: "5", label: "类核心威胁" },
        { value: "4", label: "系统消息步骤" },
        { value: "3", label: "安全边界" },
        { value: "1", label: "高风险审批原则" },
      ],
      keyPoints: [
        {
          label: "核心机制 / 01",
          title: "系统消息框架",
          body: "通过角色、职责、流程、边界和输出规则，让 Agent 明确自己该做什么、不该做什么。",
        },
        {
          label: "风险识别 / 02",
          title: "五个威胁兄弟",
          body: "把风险分成指令注入、权限滥用、服务过载、数据污染、级联错误等，避免只盯着“提示词写好一点”。",
        },
        {
          label: "最后保险 / 03",
          title: "人机协作边界",
          body: "低风险自动化，高风险人类审批。审批不是拖慢流程，而是拦住有副作用的错误执行。",
        },
      ],
      map: `用户输入 / 外部文档
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
⚠️ 高风险动作前插入人类审批 (红色大按钮)`,
      sections: [
        {
          title: "提示词注入 vs 知识库投毒",
          body: "提示词注入是通过用户输入诱导 Agent 改变目标；知识库投毒是污染 Agent 依赖的外部知识源让其基于错误事实决策。",
        },
        {
          title: "Agent 安全 vs 传统后端安全",
          body: "共同点是都需要权限控制 and 限流。不同点在于传统后端是固定路径；Agent 会自主规划，且错误可能通过工具链级联放大。",
        },
      ],
      blindspots: [
        {
          title: "全量审批导致疲劳",
          body: "全量审批会让用户产生机械确认，审批失去风险过滤意义。必须分级：低风险自动，高风险才审批。",
        },
      ],
      highlights: [
        {
          title: "安全边界三档分类",
          body: "根据操作的可逆性与危害程度，科学划分出自动执行、人类审批和绝对禁止三档。",
        },
      ],
      report: [
        {
          title: "必须掌握",
          items: ["5 类核心威胁", "3 档安全边界", "人机审批与过滤权衡"],
        },
        {
          title: "实践规则",
          items: [
            "自动执行：读取代码/只读分析",
            "人类审批：修改文件/执行写命令/安装依赖",
            "禁止执行：拷出密钥/强制重写Git/擅自篡改",
          ],
        },
      ],
      tags: ["AI Agent", "可信赖 AI", "威胁模型", "安全边界", "人机审批"],
    },
  },
  {
    id: "2026-06-03-planning-design",
    date: "2026-06-03",
    time: "学习记录",
    title: "Planning Design",
    subtitle: "复杂任务拆解与依赖流设计",
    sourceFile: "learn/2026-06-03-Planning-Design规划设计.html",
    summary:
      "深入学习如何将模糊的复杂请求拆解为包含目标、全局约束、任务列表、依赖关系、执行角色和验收标准的结构化可执行计划，避免 Agent 盲目执行。",
    detail: {
      lead: "学习把复杂用户请求拆成多个可执行子任务，并分配给合适的 Agent 或工具，同时保持全局目标、依赖关系和验收标准不丢失。",
      stats: [
        { value: "6", label: "合格 Plan 核心字段" },
        { value: "5", label: "最终闭卷复述问题" },
        { value: "A-", label: "本章当前掌握等级" },
      ],
      keyPoints: [
        {
          label: "核心机制",
          title: "先 Planning，再执行",
          body: "相比让一个 Agent 懵懵懂懂做到底，先规划能建立子任务边界，清晰路由，方便结果检查和局部重试。",
        },
        {
          label: "定位",
          title: "系统级上下兄弟",
          body: "上属工作流设计，下调具体任务拆分、路由、工具调用、重新规划。",
        },
        {
          label: "实战对比",
          title: "定义执行链路",
          body: "强计划必须指出依赖关系（如酒店影响行程，行程影响交通），而弱计划仅仅是列出待办清单。",
        },
      ],
      map: `第 3 层（系统设计）       AI Agent 工作流设计 (Workflow Design)
                         │
第 2 层（机制方法）       Planning Design (目标/约束/依赖/验收)
                         │
第 1 层（底层零件）       任务拆分/工具调用/结构化输出/重新规划`,
      sections: [
        {
          title: "合格 Plan 的六个核心字段",
          body: "清晰的总体目标、全局约束（预算/时间等）、子任务列表、依赖关系、Agent/工具分配、预期输出与验收标准。",
        },
        {
          title: "Planning 与结构化输出的关系",
          body: "结构化输出是让计划可被机器解析和路由的关键。没有结构化输出，Plan 容易停留在自然语言，无法被代码稳定执行。",
        },
      ],
      blindspots: [
        {
          title: "漏掉“全局约束”",
          body: "没有约束会导致 Agent 超预算、超时间，走入死胡同。在做 Plan 时必须显式声明约束。",
        },
      ],
      highlights: [
        {
          title: "重新规划的敏捷性",
          body: "Planning 不是一次性的，当遇到执行失败、用户改需求或环境变化时，必须支持局部重试或动态更新 Plan。",
        },
      ],
      report: [
        {
          title: "必须掌握",
          items: [
            "Plan 的 6 大核心字段",
            "并行与串行依赖设计",
            "重新规划 (Re-planning)",
          ],
        },
      ],
      tags: [
        "Planning Design",
        "工作流设计",
        "结构化输出",
        "任务拆解",
        "依赖管理",
      ],
    },
  },
  {
    id: "2026-06-04-tcc-planning-design-trustworthy-agent",
    date: "2026-06-04",
    time: "晚间复习",
    title: "TCC D7 毕业 + 双 D2 通过",
    subtitle: "TCC 正式毕业 + 2条新线稳住首轮",
    sourceFile:
      "复习/2026-06-04-TCC-D7毕业+PlanningDesign-D2+可信赖Agent-D2.html",
    summary:
      "上半场 TCC + 错误累积 D7 综合压测 5 题全过，正式毕业。下半场 Planning Design D2 和构建可信赖 AI 代理 D2 各 3 题通过。",
    detail: {
      lead: "本次复习重点在于 TCC 正式毕业，以及 Planning Design 和可信赖 AI 代理两条新线的 D2 顺利通过。最大亮点是打通了 checkpoint 在工程容错与安全治理中的双重身份。",
      stats: [
        { value: "11", label: "题目总量" },
        { value: "3", label: "复习主题" },
        { value: "1", label: "正式毕业项" },
        { value: "2", label: "记忆锚点补漏" },
      ],
      keyPoints: [
        {
          label: "TCC / D7",
          title: "TCC 毕业",
          body: "Transparent 看得见，Controllable 管得住，Consistency 信得过。通过 D7 压测正式毕业。",
        },
        {
          label: "数学 / 抽象",
          title: "checkpoint 双重身份",
          body: "checkpoint 既是错误累积 p^N 损伤控制的存档点，又是可信赖 Agent 安全治理 HITL 审批关卡。",
        },
        {
          label: "Planning / D2",
          title: "六字段口诀",
          body: "目标、约束、任务、依赖、分配、验收。明确约束防止 Agent 正确地做错事。",
        },
        {
          label: "安全 / D2",
          title: "五类威胁与安全边界",
          body: "五类威胁为注入、越权、过载、投毒、级联。安全边界分为自动执行、人类审批和绝对禁止三档。",
        },
      ],
      map: `TCC 运行时治理三维度 ── Transparent (看得见) / Controllable (管得住) / Consistency (信得过)
                       └── Controllable 儿子们: HITL审批 / 重试 / 打断 / 回滚`,
      sections: [
        {
          title: "同一个 checkpoint 两件事同时干",
          body: "身份 A：工程容错，存档点局部重试，降低 p^N 的伤害。身份 B：安全治理，高风险操作前人类确认（红色大按钮）。",
        },
        {
          title: "安全边界三档分类",
          body: "根据操作的只读性、可逆性和高危程度，将安全边界分为自动执行、人类审批和绝对禁止三档。",
        },
      ],
      blindspots: [
        {
          title: 'Plan 六字段漏了"约束"',
          body: "没有约束会导致 Agent 超预算、超时间，走入死胡同。需牢记“约束”字段。",
        },
        {
          title: '五威胁漏了"级联"',
          body: "之前还在使用级联的概念，提取威胁模型时却遗漏。需要把威胁整体熟记。",
        },
      ],
      highlights: [
        {
          title: "Checkpoint 跨章节打通",
          body: "同一个 checkpoint 缝合了错误累积、可信赖 Agent 和 Planning Design，成为知识网络的核心交汇点。",
        },
      ],
      report: [
        {
          title: "A 层 · 正式毕业",
          items: [
            "TCC 运行时治理三维度",
            "错误累积数学及 checkpoint 损伤控制机制",
          ],
        },
        {
          title: "A- 层 · D2 通过",
          items: ["Planning Design 六字段", "可信赖 AI 代理五类威胁"],
        },
        {
          title: "需要加强",
          items: [
            "记全 Plan 六字段口诀（勿漏约束）",
            "记全五威胁口诀（勿漏级联）",
          ],
          tone: "warn",
        },
      ],
      tags: [
        "TCC",
        "错误累积",
        "Checkpoint",
        "Planning Design",
        "可信赖 Agent",
      ],
    },
  },
  {
    id: "2026-06-04-duo-dai-li-she-ji",
    date: "2026-06-04",
    time: "学习记录",
    title: "多代理设计模式",
    subtitle: "群聊 / 任务转接 / 协同过滤 + 上下兄弟焊死",
    sourceFile: "learn/2026-06-04-多代理设计模式.html",
    summary:
      '从单代理升级到多代理协作设计模式。掌握三种核心模式（群聊/转接/协同过滤）、4 大优势、何时不该用，并把"上下兄弟问三句"思维工具一次性焊死。最大薄弱点：协同过滤复犯了"复制流水线"的家族错误，需 D2 重点复检。',
    detail: {
      lead: '通关 A 目标：能用 5 分钟讲给完全不懂 Agent 的同事听"为什么需要多个 AI"。本次最大焊点：上下兄弟工具从"想不出"走到三项全中，元能力被一次性焊死。',
      stats: [
        { value: "3", label: "核心模式（群聊/转接/协同）" },
        { value: "4", label: "多代理优势（质量·规模·容错·模块）" },
        { value: "5", label: "构建模块（通信/协调/架构/可视/人介入）" },
        { value: "2", label: "需复习薄弱点（协同过滤·设计动机）" },
      ],
      keyPoints: [
        {
          label: "核心模式 / 01",
          title: "群聊 Group Chat",
          body: "多对多沟通、信息透明，所有 Agent 在共享对话里讨论。适合开放性问题、头脑风暴和交叉验证。",
        },
        {
          label: "核心模式 / 02",
          title: "任务转接 Handoff",
          body: "1 对 1 流水线接力，A → B → C 串行处理一份输入。适合任务可线性拆分。",
        },
        {
          label: "核心模式 / 03",
          title: "协同过滤 Collaborative",
          body: "多视角并行 + 汇总。同一需求分发给 N 个不同专长 Agent 独立分析后合成综合答案。⚠️ 不是复制流水线！",
        },
        {
          label: "思维工具 / 焊死",
          title: "上下文隔离 = 工程手段",
          body: '上：服务于"专业化"理念目标。兄：任务拆分、tool 子集划分。下：LangGraph subgraph / 独立 state / message filter。三层归位。',
        },
      ],
      map: `第 3 层（理念目标）   专业化 Specialization
                       │
第 2 层（兄弟手段）  任务拆分 / 上下文隔离 / tool 子集划分
                       │
第 1 层（底层工具）  LangGraph subgraph / 独立 state / message filter

🎯 上下文隔离 = 工程手段 (第 2 层)，服务于"专业化"，做完后享受到的可重试/可验证才是工程收益。`,
      sections: [
        {
          title: "协同过滤的 fan-out / fan-in 真相",
          body: "协同过滤不是复制 3 条独立流水线（这是 3 倍任务转接），而是同一个客户需求分发给 N 个不同专长 Agent 独立分析，最后由汇总节点合成综合答案。LangGraph 实现：1 个起始 Node + 并行 N 个评估 Agent + 1 个汇总 Node。",
        },
        {
          title: "多代理 vs 微服务的关键差异",
          body: "【像】专业化拆分 + 协作完成的工程哲学。【不像 · 通信】微服务用 API 契约（确定性），多代理用自然语言（模糊）。【不像 · 调度】微服务调用谁是代码写死，多代理可能由 LLM 决定（动态）。【不像 · 错误】微服务错误确定性（重试），多代理错误概率性（需要裁判 Agent 交叉验证）。",
        },
        {
          title: "替代方案为何没取代多代理",
          body: "更长上下文：解决容量但不解决专业化与模块化，且 lost in the middle 在长上下文里更严重。Prompt 角色切换：所有角色共享对话历史（无真正隔离）+ 无法并行（一次只能演一个角色）。",
        },
      ],
      blindspots: [
        {
          title: '⚡ 协同过滤第二次复犯：把"协作"画成"复制流水线"',
          body: '初次：题 2 决策树定义成"派活+验收"（其实是 Orchestrator）；二次：实践题 3 把它实现成 3 条独立流水线。同一家族错误：把"协作"理解成"复制"。D2 必须用一道实现题再考一次，强制画 fan-out/fan-in 图。',
        },
        {
          title: '设计动机偏"痛点驱动"',
          body: '"为什么是这样设计"还是停在"单代理不行所以多代理"——被动逃避。需要补"主动选择"视角：分工带来的模块化、可测试、可演进本身就是好东西。',
        },
        {
          title: '误用多代理的"坏后果"题没答完',
          body: "题 3 问了 a) 何时不用 + b) 误用会怎样，只答了 a)。误用后果：协调开销暴涨 / 错误源放大 / 调试难度上升。D7 综合题要补。",
        },
        {
          title: "Edge vs Node 内部逻辑职责分层小混淆",
          body: '把"待洗盘子数 ≥ 1"这种 Node 内部判断错放在 Edge 上。Edge 处理"流向哪里"；Node 内部判断处理"我要不要干活"。',
        },
      ],
      highlights: [
        {
          title: '工程嗅觉 · "上下文隔离"洞察',
          body: '原文未明确写"上下文隔离"作为优势，但你从 LangGraph 实战经验直接说出 lost-in-the-middle + 上下文窗口物理限制——这是真正下场写过代码的人才说得出的话。',
        },
        {
          title: "自我修正 · 协同过滤错误回退",
          body: '第一版把协同过滤定义成"派活+验收"，回去翻原文核对后主动推翻自己。"敢于推翻已说出口的"是稀缺学习品质。',
        },
        {
          title: '餐厅故事的"小黄进协作链"',
          body: '把小黄从"独立打扫的旁支"改写成了"上菜员端走时立刻清洁，保证下一轮使用"——让小黄变成协作链的关键一环。讲故事能力的真正跃迁。',
        },
        {
          title: "上下兄弟工具焊死的瞬间",
          body: '从"想不出" → RAG 演示 → "上"答错方向（章节归属） → 拎出"章节 vs 目的"辨析 → 三项全中 + 自主推理出"工程手段"层。元能力一次性焊死。',
        },
      ],
      report: [
        {
          title: "A 层 · 通关 A 已达标",
          items: [
            "多代理本质定义（多代理协同实现共同目标）",
            "三种核心模式（群聊 / 任务转接 / 协同过滤）",
            "协同过滤 = 多视角并行 + 汇总（必须画 fan-out/fan-in）",
            "上下文隔离 → 工程手段层 → 服务于专业化",
            "4 大优势的 3 个维度（质量 / 规模 / 容错 + 模块化）",
          ],
        },
        {
          title: "B 层 · 已理解大方向",
          items: [
            "5 个构建模块（通信/协调/架构/可视/人介入）",
            "3 种部署架构（集中式/去中心化/混合）",
            "vs 微服务的相似与差异",
            'vs 单代理 + ReAct 引入"协调层"新维度',
          ],
        },
        {
          title: "需要加强（D2/D7 重点）",
          items: [
            "⚡ 协同过滤实现题（必须画 fan-out/fan-in，不能复制流水线）",
            '设计动机的"主动选择"视角（不只是逃避痛点）',
            "误用多代理的 3 个坏后果",
            "Edge vs Node 内部职责分层",
          ],
          tone: "warn",
        },
        {
          title: "横向连接",
          items: [
            "vs 微服务架构（专业化拆分的工程哲学）",
            "vs 单代理 ReAct（多了上下文隔离 + 协调层）",
            "vs LangGraph multi-agent（每个 Agent 是 Node 的惯用封装）",
            "与 Planning Design / 可信赖 Agent 缝合（D30 综合题）",
          ],
        },
      ],
      tags: [
        "多代理",
        "群聊/转接/协同过滤",
        "专业化",
        "上下文隔离",
        "上下兄弟问三句",
        "LangGraph",
        "fan-out/fan-in",
        "vs 微服务",
      ],
    },
  },
  {
    id: "2026-06-06-duo-dai-li-d2",
    date: "2026-06-06",
    time: "复习 D2",
    title: "多代理设计模式 D2",
    subtitle: "协同过滤焊死 · 上下兄弟半稳",
    sourceFile: "复习/2026-06-06-多代理设计模式D2.html",
    summary:
      '协同过滤从"复制流水线"到"多视角互补"正式焊死。fan-out/fan-in 图结构完整。三种模式判断全对。上下文隔离分层"上""下"归位，"兄"漏了 tool 子集划分，D7 补。',
    detail: {
      lead: '本次 D2 核心使命：验证协同过滤薄弱点是否焊死。结果：焊死了。最终说出"核心力量来自视角的不同"——精准命中本质。',
      stats: [
        { value: "3", label: "闭卷题总量" },
        { value: "1", label: "薄弱点焊死" },
        { value: "2", label: "修正轮次" },
        { value: "1", label: "兄弟记忆缺口" },
      ],
      keyPoints: [
        {
          label: "焊死 / 协同过滤",
          title: "视角多样性 ≠ 数量",
          body: "协同过滤的威力来自不同专长 agent 的视角互补，不是复制同一个 agent 多份。三个相同的 agent 只是重复同一视角。",
        },
        {
          label: "稳固 / 模式判断",
          title: "三种模式直觉全对",
          body: "协同过滤对应多视角并行评估，任务转接对应线性串行，群聊对应开放性多对多讨论。判断直觉已稳。",
        },
        {
          label: "半稳 / 上下文隔离",
          title: "上·下归位，兄漏一个",
          body: '上=专业化，下=subgraph/独立state/message filter 记全。兄弟只记得"任务拆分"，漏了"tool 子集划分"。',
        },
      ],
      map: `第 3 层（理念目标）    专业化 Specialization
                       │
第 2 层（工程手段）    上下文隔离 / 任务拆分 / tool 子集划分   ← 三兄弟
                       │                                      口诀：隔信息 / 分任务 / 限工具
第 1 层（底层工具）    subgraph / 独立 state / message filter`,
      sections: [
        {
          title: "协同过滤修正链",
          body: '第一轮"方向对但没对比复制流水线" → 第二轮"只说形式有无Aggregator" → 最终版"核心力量来自视角的不同"。从形式上升到本质。',
        },
        {
          title: "上下文隔离修正链",
          body: "首次三层全偏（把主体放进兄弟列表） → 二次方向对但不锋利（上=如何构建专业agent） → 最终上=专业化、下=三工具全记。兄弟漏一个。",
        },
      ],
      blindspots: [
        {
          title: "tool 子集划分未记住",
          body: '"三兄弟"中漏了 tool 子集划分（能力独立）。需要用口诀"隔信息/分任务/限工具"在 D7 焊死。',
        },
        {
          title: "协同过滤区别的第一反应停在形式层",
          body: '第一次回答"区别是有没有人汇总"只说了 Aggregator 的存在，没触及"视角多样性"。说明理解有但提取速度慢。',
        },
      ],
      highlights: [
        {
          title: "fan-out/fan-in 图质的飞跃",
          body: '从 6/4 "画成三条独立流水线"到今天画出正确的 fan-out/fan-in 结构，且标注"各模型发挥自身优势"——视觉化能力已经跟上了理解。',
        },
        {
          title: "最终版一句话的精度",
          body: '"协同过滤的核心力量来自视角的不同，而相同的视角，大模型输出的答案虽然有随机性，但是视角是一致的。"——把区别和原因都说清楚了。',
        },
      ],
      report: [
        {
          title: "A 层 · 焊死",
          items: [
            "协同过滤 = 多视角并行 + 汇总",
            "fan-out/fan-in 结构图",
            "三种模式判断直觉",
          ],
        },
        {
          title: "A- 层 · 上下文隔离定位",
          items: [
            "上=专业化 ✓",
            "下=subgraph/独立state/message filter ✓",
            "兄=任务拆分 ✓ + tool 子集划分 ✗（漏）",
          ],
        },
        {
          title: "D7 重点追击",
          items: [
            'tool 子集划分 — 口诀"隔信息/分任务/限工具"',
            "误用多代理的 3 个坏后果",
            '设计动机的"主动选择"视角',
            "多代理 vs 微服务三大差异",
          ],
          tone: "warn",
        },
      ],
      tags: [
        "多代理",
        "协同过滤",
        "fan-out/fan-in",
        "视角多样性",
        "上下文隔离",
        "专业化",
        "上下兄弟问三句",
        "D2",
      ],
    },
  },
  {
    id: "2026-06-10-planning-design-d7-tuili-d60",
    date: "2026-06-10",
    time: "晚间复习",
    title: "Planning Design D7 + 推理时计算 D60",
    subtitle: "双 D7 通过 · 推理时计算毕业",
    sourceFile: "复习/2026-06-10-PlanningDesign-D7+推理时计算D60.html",
    summary:
      '上半场 Planning Design + 可信赖 Agent D7 综合 5 题通过，"约束"和"级联"两个 D2 漏洞正式焊死。安全边界三档判断 b/c 反了需 D30 追击。下半场推理时计算 D60 压测 4 题通过，分层钥匙自动启动（红点 #1 不复发），命名通道稳定（红点 #2 不复发），正式进入长期记忆区。',
    detail: {
      lead: '今天补了两个逾期任务。最大成果：推理时计算从 4/10 到 6/10 正式毕业（两个月全程跟踪）。最大暴露：安全边界"绝对禁止 vs 人类审批"判断标准不够锐利。',
      stats: [
        { value: "9", label: "总题量" },
        { value: "2", label: "D7 通过" },
        { value: "1", label: "D60 毕业" },
        { value: "3", label: "红点无复发" },
      ],
      keyPoints: [
        {
          label: "D7 / 焊死",
          title: "约束 + 级联正式焊死",
          body: 'Plan 六字段的"约束"D2 漏 → D7 首轮记住。五威胁的"级联"D2 漏 → D7 首轮答出。两个 D2 遗留漏洞全部修复。',
        },
        {
          label: "D7 / 暴露",
          title: "安全边界 b/c 判反",
          body: 'git push --force 判为审批（应为禁止）；发邮件 500 人判为禁止（应为审批）。核心：混淆了"不可逆灾难"和"有副作用但合理"。',
        },
        {
          label: "D60 / 毕业",
          title: "推理时计算进入长期记忆",
          body: "分层钥匙（双维度框架）自动启动。自洽性命名秒出。RLHF 交叉因果链完整。维度 B 四兄弟退化为 B 层（正常）。",
        },
        {
          label: "D60 / 跨章节",
          title: "RLHF × 推理时计算因果链",
          body: "比较式信号 → 人类选自信 → 奖励模型学自信 → 基础模型学自信 → 验证器打分时被自信欺骗。",
        },
      ],
      map: `Planning Design D7 状态：
目标 · 约束✓ · 任务 · 依赖(提示后出) · 分配 · 验收

可信赖 Agent D7 状态：
注入✓ · 越权(漏→补) · 过载✓ · 投毒✓ · 级联✓
安全边界：自动✓ · 审批⚠ · 禁止⚠ → D30 追击

推理时计算 D60 状态：
钥匙框架✓ · 自洽性✓ · 红点#1✓ · #2✓ · #3✓ → 毕业`,
      sections: [
        {
          title: "Checkpoint 双重身份（再次验证）",
          body: "工程容错：局部低阶 N，分段重试。安全治理：审批关卡，红色大按钮。本质动作：在连续执行流中插入暂停点。",
        },
        {
          title: "依赖关系 × 安全边界 = 防级联",
          body: "审批关卡插在依赖箭头上（数据交接处）。优先级：扇出节点 > 不可逆操作前。避免全量审批疲劳。",
        },
        {
          title: "自洽性的天花板",
          body: '频率 ≠ 真理。多数投票只过滤偶然错误。系统性错误（模型一致地理解错）时，多数投票"民主地选出错误"。',
        },
      ],
      blindspots: [
        {
          title: "安全边界三档判断不锐利",
          body: "b/c 判反。需要内化：打死不干 = 不可逆灾难级（force push / 泄密）；让我看一眼 = 有副作用但确认后可做（发邮件 / 修文件）。",
        },
        {
          title: '"越权"被"身份冒充"替代',
          body: '"身份冒充"是注入的子手法，不是独立威胁分类。五威胁需整体背：注入 · 越权 · 过载 · 投毒 · 级联。',
        },
        {
          title: "推理时计算维度 B 成员模糊",
          body: '两个月没用，"对数概率重排序 / 验证器打分 / 多数投票 / 用户选择"提取不出。结构在但内容退化——正常 B 层衰减。',
        },
      ],
      highlights: [
        {
          title: "分层钥匙自动启动",
          body: '无任何提示，直接用"爷爷/儿子/工具"框架组织答案。红点 #1 从 D44"生锈"到 D60"肌肉记忆"，焊成了。',
        },
        {
          title: "自洽性命名通道稳定",
          body: "Best-of-N + 多数投票 = 自洽性，秒答无犹豫。红点 #2 彻底修复。",
        },
        {
          title: "RLHF 交叉因果链补全",
          body: '从"一般奖励模型喜好自信"的事实陈述，升级到"人类比较式信号注入偏好"的因果解释——理解了 why 而不只是 what。',
        },
      ],
      report: [
        {
          title: "A 层 · 毕业",
          items: [
            "推理时计算分层钥匙（双维度 + 自洽性）",
            "RLHF × 推理时计算交叉因果链",
            "Plan 六字段口诀（约束焊死）",
            "五威胁（级联焊死）",
            "Checkpoint 双重身份",
          ],
        },
        {
          title: "需 D30 追击",
          items: [
            "安全边界三档判断（b/c 判反）",
            '五威胁中"越权"提取稳定性',
            'Plan 六字段中"依赖"首轮提取速度',
          ],
          tone: "warn",
        },
      ],
      tags: [
        "Planning Design",
        "可信赖 Agent",
        "推理时计算",
        "D7",
        "D60",
        "安全边界",
        "RLHF",
        "自洽性",
        "Checkpoint",
      ],
    },
  },
  {
    id: "2026-06-11-duo-dai-li-d7",
    date: "2026-06-11",
    time: "复习 D7",
    title: "多代理设计模式 D7",
    subtitle: "跨章节综合五题全过 · 三兄弟焊死 · 主动选择升级",
    sourceFile: "复习/2026-06-11-多代理设计模式D7.html",
    summary:
      '五题闭卷全通过。多代理 vs 微服务三维度方向全对。协同过滤 fan-out/fan-in 图信手拈来。三兄弟口诀从 D2 漏一个到 D7 全中且换词表达。设计哲学从被动逃避升级到主动选择。误用坏后果补全"错误源放大"。',
    detail: {
      lead: "本次 D7 核心使命：验证 D2 遗留的四个薄弱点是否修复。结果：三兄弟焊死，设计哲学升级，误用后果补全。多代理 vs 微服务精度待 D30 磨。",
      stats: [
        { value: "5", label: "总题量" },
        { value: "5", label: "通过" },
        { value: "1", label: "D2 缺口焊死" },
        { value: "2", label: "精度需 D30 磨" },
      ],
      keyPoints: [
        {
          label: "焊死 / 三兄弟",
          title: "tool 子集划分全中",
          body: 'D2 漏了"限工具"，D7 用自己的话答出"筛除无关上下文/给予具体任务/限定工具"——换词表达比背原文更扎实。',
        },
        {
          label: "升级 / 设计哲学",
          title: "主动选择 vs 被动逃避",
          body: '从"单代理不行所以多代理"升级到三维度正面理由：专业化、模块化、容错性——即使单代理能做也主动选。',
        },
        {
          label: "补全 / 误用后果",
          title: "错误源放大",
          body: "自答协调开销暴涨+调试难度。补全：Agent 间自然语言传话让偏差扩散到下游。口诀：开销·扩散·调试。",
        },
        {
          label: "方向对 / 待磨",
          title: "多代理 vs 微服务三维度",
          body: "通信（自然语言 vs API 契约）、调度（LLM动态 vs 写死）、错误（概率性 vs 确定性）——方向全对但表达需更锋利。",
        },
      ],
      map: `多代理 vs 微服务三大差异（D30 口诀版）：

通信：契约(确定) vs 自然语言(模糊)
调度：写死(固定) vs LLM决定(动态)
错误：确定性(重试) vs 概率性(交叉验证)

三兄弟口诀：隔信息 / 分任务 / 限工具
误用口诀：开销 · 扩散 · 调试`,
      sections: [
        {
          title: "协同过滤 fan-out/fan-in 结构",
          body: "1 个起始 Node（任务分发）+ N 个并行 Agent Node（不同专长、不同视角）+ 1 个 Aggregator Node（对比融合）。State 用数组 + reducer 收集各 Agent 输出。",
        },
        {
          title: "设计哲学三维度",
          body: "专业化：上下文隔离 + 工具按需注入。模块化：独立开发测试迭代、团队并行。容错性：错误隔离 + 局部重试不牵连全局。",
        },
        {
          title: "误用多代理三大坏后果",
          body: "1. 协调开销暴涨（通信/等待/同步）。2. 错误源放大（自然语言传话让偏差扩散级联）。3. 调试难度上升（多节点日志分散，复现不确定）。",
        },
      ],
      blindspots: [
        {
          title: "多代理 vs 微服务精度不够锋利",
          body: '"可预测性"对应调度维度但没直接命名。"微服务出错只影响当前"需修正为错误性质的确定性 vs 概率性区别。D30 需要秒答。',
        },
        {
          title: '"错误源放大"是补出来的',
          body: '自答时只说了"效果不理想"这种泛词，需要 D30 时能主动说出"自然语言传话让偏差扩散"的具体机制。',
        },
      ],
      highlights: [
        {
          title: "三兄弟换词表达",
          body: '没有死背"上下文隔离/任务拆分/tool子集划分"，而是用"筛除无关上下文/给予具体任务/限定工具"——语义内化比复读更强。',
        },
        {
          title: "设计哲学跃迁",
          body: '从 D2 "单代理不行所以多代理"到 D7 "工程上本身就是更好的架构"，认知视角从被动逃避升级到主动设计。',
        },
        {
          title: "fan-out/fan-in 图信手拈来",
          body: '从 6/4 画成三条独立流水线，到今天直接画出正确拓扑 + 标注"不同专长·不同视角" + 讨论 State reducer——视觉化与工程化都已稳固。',
        },
      ],
      report: [
        {
          title: "A 层 · 焊死",
          items: [
            "协同过滤 = 多视角并行 + 汇总（fan-out/fan-in）",
            "三兄弟口诀：隔信息/分任务/限工具",
            "三种模式判断（群聊/转接/协同过滤）",
            "设计哲学：专业化 + 模块化 + 容错性",
          ],
        },
        {
          title: "需 D30 追击",
          items: [
            "多代理 vs 微服务三维度精准表达",
            '"错误源放大"肌肉记忆（自然语言传话 → 偏差扩散）',
            "误用三后果口诀：开销·扩散·调试",
          ],
          tone: "warn",
        },
      ],
      tags: [
        "多代理",
        "D7",
        "协同过滤",
        "fan-out/fan-in",
        "上下文隔离",
        "三兄弟口诀",
        "vs 微服务",
        "主动选择",
        "误用坏后果",
        "LangGraph",
      ],
    },
  },
  {
    id: "2026-06-13-huancun-context-d30",
    date: "2026-06-13",
    time: "复习 D30",
    title: "缓存 + Claude Code 上下文管理 D30",
    subtitle: "双线通过 · 进入长期记忆区",
    sourceFile: "复习/2026-06-13-缓存+ClaudeCode上下文管理D30.html",
    summary:
      "5/21 双毕业项 D30 回访。核心框架 23 天后依然站得住：缓存三兄弟命中机制分得清、开工 4 问映射能力在、错误累积公式秒出。薄弱点：两道生死题问法退化 + checkpoint=Controllable 归类犹豫。整体通过，进入长期记忆区。",
    detail: {
      lead: "D30 不是验证'你记不记得'，而是验证'你能不能在一个全新的场景里，把这些知识当工具用出来'。23 天无接触后核心框架判断力完好，退化点均为提取通道生锈。",
      stats: [
        { value: "2", label: "复习主题" },
        { value: "3", label: "综合题" },
        { value: "2", label: "退化点重焊" },
        { value: "✓", label: "进入长期记忆" },
      ],
      keyPoints: [
        {
          label: "缓存 / D30",
          title: "两道生死题重焊",
          body: "① 输出会随时间变化吗？② 输出依赖私人上下文吗？问句形式退化后接触即恢复。缓存三兄弟在新场景中正确调取。",
        },
        {
          label: "Context / D30",
          title: "开工 4 问场景应用",
          body: "作文批改场景逐一过 4 问，判断全对。追问 subagent 触发双条件（任务独立 + 读多文件）也答出。",
        },
        {
          label: "跨章节 / D30",
          title: "错误累积 × TCC 缝合",
          body: "1-p^N 公式秒出，checkpoint 工程落地三要素完整。TCC 归类犹豫后重焊 checkpoint=Controllable。",
        },
      ],
      map: `缓存决策流（D30 验证版）：
两道生死题 → ① 时效性 / ② 私人依赖
  ├── 双否 → 语义缓存
  ├── ②是 → 不缓存（语义/精确）但提示词缓存可能可用
  └── ①是 → 不缓存或短 TTL

开工 4 问 → 4 工具：
  ① 相关？→ /clear  ② 读多？→ subagent  ③ 跨文件？→ Plan  ④ 放哪？→ LitM

TCC：checkpoint = Controllable 的儿子`,
      sections: [
        {
          title: "在线教育 AI 助手缓存设计",
          body: "牛顿定律→语义缓存（双否）；作文分析→提示词缓存（前缀不变）；这道数学题→不缓存（私人依赖）。关键陷阱：'这道'= 绑定具体题目 ≠ 时效性。",
        },
        {
          title: "解题链 checkpoint 落地",
          body: "4步95%→18.55%失败率。方案A动p换强模型，方案B动结构每步插checkpoint。落地三要素：验证器检查、错误回传、局部重试（非盲重试）。",
        },
      ],
      blindspots: [
        {
          title: "两道生死题问句形式退化",
          body: "只记得关键词'私人依赖''时效性'，完整问句提取不出。属于提取通道生锈而非知识消失——重新接触后秒恢复。",
        },
        {
          title: "checkpoint=Controllable 归类犹豫",
          body: "先答T+C双维度，再改口Consistency。三选犹豫暴露跨章节钩子在D30时松动。需实战中反复激活。",
        },
        {
          title: "开工 4 问措辞抽象化",
          body: "从'需要读很多文件吗'退化成'任务是否可拆分'。方向对但操作性下降。",
        },
      ],
      highlights: [
        {
          title: "缓存三兄弟调取能力",
          body: "作文题→提示词缓存的跨兄弟连接自动触发。说明命中机制的区分（output级 vs computation级）已内化。",
        },
        {
          title: "subagent 触发双条件",
          body: "追问时主动补出'任务独立 + 读多文件'双维度触发信号，比 D7 时的单一判断更成熟。",
        },
        {
          title: "checkpoint 工程落地",
          body: "从抽象概念到'谁检查/检查什么/不通过怎么办'三要素完整落地。且主动说'带错误信息的重试'而非盲重试。",
        },
      ],
      report: [
        {
          title: "A 层 · 长期记忆 ✓",
          items: [
            "缓存三兄弟命中机制",
            "两道生死题判断式",
            "开工 4 问 → 4 工具映射",
            "错误累积 1-p^N",
            "checkpoint 工程落地三要素",
          ],
        },
        {
          title: "需监控 · 已重焊",
          items: [
            "两道生死题问句原话提取",
            "checkpoint = Controllable 归类",
            "开工 4 问精确措辞",
          ],
          tone: "warn",
        },
        {
          title: "横向连接",
          items: [
            "提示词缓存 × 作文批改场景",
            "subagent × 多文件读取场景",
            "checkpoint × TCC Controllable",
            "错误累积 × 验证器 Self-Correction",
          ],
        },
      ],
      tags: [
        "缓存",
        "两道生死题",
        "Claude Code",
        "开工 4 问",
        "Lost in the Middle",
        "错误累积",
        "checkpoint",
        "TCC",
        "Controllable",
        "D30",
        "长期记忆",
      ],
    },
  },
  {
    id: "2026-06-23-rlhf-pian-xiang-zi-xin-d30",
    date: "2026-06-23",
    time: "复习",
    title: "RLHF 偏向自信 D30",
    subtitle: "因果链 × 刹车系统失明",
    sourceFile: "复习/2026-06-23-RLHF偏向自信D30.html",
    summary:
      "D30 综合压测：因果链四环节完整复述，工程方案覆盖三层（提示词/RAG/logprobs），跨章节推出「过度自信使刹车系统失明」结论。",
    detail: {
      lead: "RLHF 偏向自信的因果链在 D30 后依然可还原，跨章节连接在引导下成功建立——过度自信不是让 p 变大，而是让刹车系统失明。",
      stats: [
        { value: "3", label: "综合题" },
        { value: "4", label: "因果链环节" },
        { value: "3", label: "工程缓解方案" },
        { value: "✓", label: "跨章节连接建立" },
      ],
      keyPoints: [
        {
          label: "因果链",
          title: "人类偏误 → RM 继承 → PPO 放大 → 系统性倾向",
          body: "第一因是人类标注员的认知偏误（自信=专业=可靠），奖励模型忠实继承偏见，PPO 阶段进一步放大。RLHF 根本局限：人类偏好 ≠ 客观正确。",
        },
        {
          label: "工程方案",
          title: "三层缓解：指令层 / 架构层 / 输出层",
          body: "① 提示词工程（推理时覆盖训练偏好）② RAG（事实锚点）③ logprobs 置信度检测（输出层直接量化信心，检测「嘴硬但心虚」）。",
        },
        {
          label: "跨章节",
          title: "过度自信 × 错误累积 = 刹车失明",
          body: "过度自信不是让 p 变大，而是让 checkpoint/人类审批/自我检查全部失灵——错误率没变，但修复能力被废掉了。",
        },
        {
          label: "对比",
          title: "随机出错 vs 过度自信",
          body: "随机出错：犹豫信号可被拦截，N 被切短。过度自信：每步伪装正确，错误隐身绕过所有检查，全链走完才发现。",
        },
      ],
      map: "因果链传递\n人类标注员偏误 → 奖励模型继承 → PPO 放大 → 模型系统性过度自信\n\n跨章节连接\n过度自信 → checkpoint 失灵 → N 无法被切短 → 错误累积恶化\n         ↕\n    不是让 p 变大，而是让刹车系统失明",
      sections: [
        {
          title: "因果链四环节",
          body: "人类标注员有认知偏误（自信=可靠）→ 标注时把自信回答排前面 → 奖励模型学会这个偏好 → PPO 阶段模型为了高分学会「哪怕不确定也要斩钉截铁」→ 过度自信成为系统性倾向。",
        },
        {
          title: "三层工程缓解",
          body: "提示词工程（最轻量，推理时覆盖，效果有限）；RAG（架构层，提供事实锚点，检索不到时表达不确定）；logprobs 置信度检测（输出层，天然信心指标，可自动化）。",
        },
        {
          title: "跨章节核心结论",
          body: "随机出错时，犹豫信号可被 checkpoint 拦截，N 被切短；过度自信时，每步伪装正确绕过所有检查，等于整条链的刹车系统失明。",
        },
      ],
      blindspots: [
        {
          title: "因果链第一因定位",
          body: "首答把奖励模型当第一因，漏掉「人类标注员认知偏误」。经引导后修正。提取通道略有生锈，知识未消失。",
        },
        {
          title: "跨章节主动联想不足",
          body: "RLHF × 错误累积无法独立启动碰撞，需引导。「主动联想」习惯尚未形成肌肉记忆。",
        },
      ],
      highlights: [
        {
          title: "「系统性倾向」表述",
          body: "用了这个词说明理解了这不是偶尔发生的，而是被训练机制结构性焊入的。",
        },
        {
          title: "引导下秒接推理",
          body: "第三题虽无法独立启动，但每个引导步骤都能秒接——知识在，缺的是主动碰撞习惯。",
        },
      ],
      report: [
        {
          title: "通过项",
          items: [
            "因果链四环节完整还原（经一轮引导修正第一因）",
            "工程方案覆盖三层（提示词/RAG/logprobs）",
            "跨章节连接建立：过度自信 × 错误累积 = 刹车失明",
          ],
        },
        {
          title: "退化点",
          items: [
            "第一因定位首答偏移（奖励模型 vs 人类标注员）",
            "跨章节主动联想需外力触发",
            "PPO 拼写细节（PP0 → PPO）",
          ],
          tone: "warn",
        },
        {
          title: "后续建议",
          items: [
            "遇到多步 Agent 场景时主动问：如果每一步都过度自信，刹车还能工作吗？",
            "练习「主动碰撞」——看到一个知识点时主动想它跟别的章节有什么交集",
          ],
        },
      ],
      tags: [
        "RLHF",
        "偏向自信",
        "因果链",
        "人类标注员",
        "奖励模型",
        "PPO",
        "提示词工程",
        "RAG",
        "logprobs",
        "错误累积",
        "checkpoint",
        "刹车系统失明",
        "D30",
      ],
    },
  },
  {
    id: "2026-07-01-yuan-ren-zhi-d7-sheng-chan-d2",
    date: "2026-07-01",
    time: "复习",
    title: "元认知 D2+D7 通过 + 生产环境 D2 通过",
    subtitle: "三轮连通 · 改策略不只改答案 · 动态觉察vs固定checkpoint",
    sourceFile: "复习/2026-07-01-元认知D7+生产环境D2.html",
    summary:
      "元认知从 D2 基础验证到 D7 跨章节综合一次性打通，生产环境 D2 三题全过。核心焊点：改策略不只改答案、战术vs战略级思考、协调层审视协作策略、动态觉察切短N、成本三策略串联。",
    detail: {
      lead: "今天三轮连通，最大收获不是具体知识点，而是把元认知和之前学的多代理、错误累积全部缝到了一起——知识网络越密，提取越快。",
      stats: [
        { value: "11", label: "总题量" },
        { value: "3", label: "复习轮次" },
        { value: "3", label: "跨章节连接" },
        { value: "✓", label: "全部通过" },
      ],
      keyPoints: [
        {
          label: "元认知 / D2",
          title: "改策略不只改答案",
          body: '普通纠错改答案（换酒店X→Y），元认知改策略（"选最便宜"→"选最高评分"）。LLM无状态缺三样：决策历史存储、评估机制、策略切换逻辑。',
        },
        {
          label: "元认知 / D7",
          title: "战术vs战略级思考",
          body: "ReAct 思考是战术级（下一步做什么），加 Reflection 升级为战略级（我的做法本身对不对）。协调层元认知审视的是协作策略，不是个体输出。",
        },
        {
          label: "跨章节 / D7",
          title: "动态觉察 vs 固定 checkpoint",
          body: "元认知在错误刚发生时主动阻断传播链（早发现早止损）。checkpoint在固定位置插暂停点。两者配合：元认知是主动刹车，checkpoint是安全网。",
        },
        {
          label: "生产环境 / D2",
          title: "成本三策略串联",
          body: "缓存做围栏（拦截重复）→ 路由做分发（判断复杂度）→ 小模型做兜底（简单不浪费大模型）。不是三选一，是依次串联。",
        },
      ],
      map: `元认知 D7 跨章节连接图：

元认知（改策略）
    ├── × 多代理 → 协调层审视协作策略
    ├── × 错误累积 → 动态觉察切短 N（主动刹车）
    └── × checkpoint → 配合使用（觉察+兜底）

生产环境三支柱：
  可观测性（Trace/Span树形） · 评估（闭环五步） · 成本（串联三策略）`,
      sections: [
        {
          title: "Over-Reflection 判断口诀",
          body: "不该反思：简单任务/熟悉任务常规小错。该反思：连续失败/新领域首次失败/用户反复不满意。核心：错的是答案还是策略本身？",
        },
        {
          title: "评估迭代闭环",
          body: "离线测试 → 部署上线 → 在线收集真实 case → 回流离线测试集 → 优化 → 重复。离线还可嵌入 CI/CD 防回归。",
        },
        {
          title: "Trace/Span 树形结构",
          body: "Trace = 完整任务生命周期。Span = 单步骤，关键特性：Span 可嵌套子 Span。多代理场景下树更深更宽。",
        },
      ],
      blindspots: [
        {
          title: "改策略意识滑回纠错",
          body: '两次差点从元认知滑回纠错思维（描述成"改决策"而非"改策略"）。需肌肉记忆化。',
        },
        {
          title: "协调层 vs 质检混淆",
          body: "首答把协调层元认知描述成检查输出对不对——这是质检。元认知审视的是任务分配、协作模式、Agent选择。",
        },
        {
          title: "Over-Reflection 场景C误判",
          body: "新类型任务首次失败应该反思策略，首答判为不需反思。",
        },
      ],
      highlights: [
        {
          title: "无状态性秒出",
          body: "LLM无状态的关键词零延迟提取，说明D2间隔期知识没有退化。",
        },
        {
          title: "纠正型vs先发式类比精准",
          body: "考试翻书 vs 考前放公式表——类比精准且好记。",
        },
        {
          title: "成本三策略串联逻辑清晰",
          body: "不仅说出顺序，还展开了每一层的决策逻辑：命中返回，未命中路由判断复杂度分发。",
        },
      ],
      report: [
        {
          title: "A 层 · 通过",
          items: [
            "元认知 vs 纠错（改策略不只改答案）",
            "LLM 无状态 → 三缺失（历史/评估/切换）",
            "ReAct vs ReAct+Reflection（战术vs战略）",
            "元认知 × 错误累积 = 动态觉察切短N",
            "成本三策略串联（缓存→路由→小模型）",
            "评估迭代闭环流转",
          ],
        },
        {
          title: "需 D30 追击",
          items: [
            "改策略意识肌肉记忆化（勿滑回纠错）",
            "协调层元认知 vs 质检的精确区分",
            "Over-Reflection 判断标准（新领域首次失败=该反思）",
            "可观测性四大价值完整列举",
          ],
          tone: "warn",
        },
        {
          title: "横向连接",
          items: [
            "元认知 × 多代理（协调层审视协作策略）",
            "元认知 × 错误累积（动态觉察 vs 固定checkpoint）",
            "成本缓存 × 之前的缓存三兄弟体系",
            "可观测性 × TCC Transparent",
          ],
        },
      ],
      tags: [
        "元认知",
        "Metacognition",
        "ReAct",
        "Reflection",
        "战术vs战略",
        "协调层",
        "Over-Reflection",
        "错误累积",
        "动态觉察",
        "checkpoint",
        "Trace/Span",
        "评估闭环",
        "成本三策略",
        "D2",
        "D7",
      ],
    },
  },
  {
    id: "2026-07-02-sheng-chan-huan-jing-d7",
    date: "2026-07-02",
    time: "复习 D7",
    title: "生产环境可观测性与评估 D7",
    subtitle: "跨章节五题通过 · 分层钥匙秒响 · 视角自我修正",
    sourceFile: "复习/2026-07-02-生产环境D7.html",
    summary:
      "五题跨章节综合压测通过。可观测性四大价值引导后补全，评估闭环×错误累积分清，缓存围栏 vs 三兄弟视角切换精彩，TCC Transparent 分层秒答。",
    detail: {
      lead: "D7 核心验证跨章节连接能力。最大亮点：缓存视角的自我修正和 TCC 分层钥匙零犹豫秒响。最大暴露：checkpoint 和评估闭环首轮混淆。",
      stats: [
        { value: "5", label: "总题量" },
        { value: "5", label: "通过" },
        { value: "3", label: "跨章节关联题" },
        { value: "2", label: "自我修正" },
      ],
      keyPoints: [
        {
          label: "价值维度",
          title: "可观测性四大价值",
          body: "排查定位 / 成本管理 / 持续改进（迭代闭环）/ 安全合规审计。前三个首轮答出，安全合规引导后补出。",
        },
        {
          label: "跨章节",
          title: "评估闭环 × 错误累积",
          body: "路径 A：评估迭代提高 p（优化 Prompt/Tool）。路径 B：在线监控定位薄弱步后加 checkpoint 切短 N。可观测性是两者的前提。",
        },
        {
          label: "视角切换",
          title: "缓存围栏 vs 三兄弟",
          body: "同一件事不同视角：三兄弟回答「怎么命中」（机制分类），围栏回答「放在哪/干什么」（架构角色）。从「上下层」修正到此。",
        },
        {
          label: "秒答",
          title: "TCC Transparent × 可观测性",
          body: "Transparent 是理念目标（看得见），可观测性是实现它的工程手段。分层钥匙零犹豫自动启动。",
        },
      ],
      map: `可观测性四大价值：
  排查定位 · 成本管理 · 持续改进 · 安全合规

评估闭环 × 错误累积 1-p^N：
  路径A：迭代优化 → 提高 p
  路径B：监控定位 → 加 checkpoint → 切短 N
  前提：可观测性（不知道哪步出错就无法动刀）

TCC Transparent 分层：
  理念目标 → 工程手段 → 底层工具
  Transparent → 可观测性 → OTel/Trace/Span`,
      sections: [
        {
          title: "Checkpoint vs 评估闭环的本质区别",
          body: "Checkpoint = 运行时即时拦截，当场重试（Controllable 的儿子）。评估闭环 = 跨时间迭代改进，发现问题→优化→重新部署。一个是秒级，一个是天/周级。",
        },
        {
          title: "缓存两个切面",
          body: "机制切面（三兄弟）：精确=字符匹配 / 语义=向量匹配 / 提示词=前缀匹配省 attention。架构切面（围栏）：成本三策略串联中的第一道防线。",
        },
        {
          title: "多代理 Trace 变化",
          body: "单 Agent 树浅窄（2-3 层），多代理树更深更宽（Controller 下挂多个 Agent Span，每个 Agent 内部再嵌套工具 Span）。一个用户任务仍是一个 Trace。",
        },
      ],
      blindspots: [
        {
          title: "四大价值未首轮分格子",
          body: '"debug"和"及时发现问题"撞车（本质是同一维度的两面），安全合规审计需引导。四个格子在脑中尚未形成独立提取通道。',
        },
        {
          title: "Checkpoint vs 评估闭环首轮混淆",
          body: '把"固定节点检查+重试"说成评估闭环。核心区别：运行时即时 vs 跨时间迭代。引导后分清。',
        },
        {
          title: "多代理 Trace 未画图",
          body: '"更深更宽"方向对但没画 ASCII 图。D30 追击可视化表达。',
        },
      ],
      highlights: [
        {
          title: "缓存视角自我修正",
          body: '从"上下层关系"修正到"同一事件不同视角"——自主质疑并推翻第一版答案，展示好的元认知。',
        },
        {
          title: "TCC 分层钥匙秒响",
          body: '零犹豫答出"Transparent 是理念目标，可观测性是工程手段"。上下兄弟工具已成肌肉记忆。',
        },
        {
          title: "评估闭环双路径完整",
          body: '修正后同时答出"提高 p"和"定位后切短 N"两条路径，且点明可观测性是前提。逻辑闭合。',
        },
      ],
      report: [
        {
          title: "A 层 · 通过",
          items: [
            "可观测性四大价值（排查/成本/迭代/合规）",
            "多代理 Trace 更深更宽",
            "评估闭环 × 错误累积（提高 p + 切短 N）",
            "缓存围栏 vs 三兄弟（同一事件不同视角）",
            "TCC Transparent = 理念，可观测性 = 工程手段",
          ],
        },
        {
          title: "需 D30 追击",
          items: [
            "四大价值首轮分格子答出（不撞车）",
            "Checkpoint vs 评估闭环不混淆",
            "多代理 Trace 画 ASCII 图",
          ],
          tone: "warn",
        },
        {
          title: "横向连接",
          items: [
            "评估闭环 × 错误累积 1-p^N",
            "缓存围栏 × 缓存三兄弟体系",
            "可观测性 × TCC Transparent",
            "多代理 × Trace/Span 树形层级",
          ],
        },
      ],
      tags: [
        "生产环境",
        "可观测性",
        "Trace/Span",
        "评估闭环",
        "错误累积",
        "缓存三兄弟",
        "缓存围栏",
        "TCC",
        "Transparent",
        "多代理",
        "D7",
        "跨章节",
      ],
    },
  },
  {
    id: "2026-07-07-planning-trustworthy-duo-dai-li-d30",
    date: "2026-07-07",
    time: "复习 D30 · 三章合并毕业",
    title: "Planning Design + 可信赖 Agent + 多代理 D30 三章合并毕业",
    subtitle: "东京自由行单场景一次性焊死六件套 · 学习者主动 push back 老师",
    sourceFile: "复习/2026-07-07-PlanningDesign+可信赖Agent+多代理D30.html",
    summary:
      "以东京 5 天自由行多代理规划系统作单一场景，把 Plan 六字段、五威胁、三档安全边界、多代理切短+隔离、Checkpoint、依赖图六件套一次性焊死。五道大题全通过，学习者主动识破老师依赖图画错的地方，是今天最漂亮的一击。",
    detail: {
      lead: "三章 D30 合并压测：Plan 六字段、五威胁、三档安全边界、多代理切短+隔离、依赖图 + Checkpoint。最大亮点是学习者主动 push back 老师错画的依赖图，最大暴露是抽象层能答但落地层易退回纯串行。",
      stats: [
        { value: "5", label: "大题" },
        { value: "5", label: "通过" },
        { value: "3", label: "章节缝合" },
        { value: "3", label: "D7 追击焊死" },
      ],
      keyPoints: [
        {
          label: "钥匙 / 缝合",
          title: "依赖图=时间 · 安全边界=权限 · Checkpoint=错误",
          body: "三章 D30 缝合成三维钥匙：依赖图管执行顺序，安全边界管每个动作的权限档位，Checkpoint 管错误被切断的位置。缺一失控。",
        },
        {
          label: "错误累积双武器",
          title: "切短 + 隔离",
          body: "学习者原话打字答出：切短是将长链路的 N 切成小段 K，隔离是将上下文隔离，Agent A 的上下文不会污染 Agent B。含变量名，直接可上黑板。",
        },
        {
          label: "五威胁分层",
          title: "输入 2 · 推理 1 · 输出 2 = 2+1+2 = 5",
          body: "输入侧（注入 + 投毒）、推理侧（幻觉）、输出/行为侧（越权 + 过度代理）。独立答出 3/5，提示后答出 2/5。",
        },
        {
          label: "判反有洞察",
          title: "幻觉 ≠ 越权",
          body: "2 句话反驳：幻觉是说错话（信息层），越权是对环境作出实际影响（行为层）；强模型幻觉少但配了多个工具仍可能越权（反例一击）。",
        },
        {
          label: "联手作案",
          title: "Prompt Injection × 越权",
          body: "提示注入是入口威胁（让 Agent 上当），越权是后果威胁（让上当变成实际损失）。两个必须都在场，攻击才成立。防御必须两条线都设。",
        },
        {
          label: "Agent 边界原则",
          title: "一个技能栈 · 一个权限面 · 一个失败域",
          body: '"每个 Agent 一个技能栈、一个权限面、一个失败域" —— 这句话锁死后，所有"这个功能该不该塞进这个 Agent"的问题都能秒答。',
        },
      ],
      map: `东京 5 天自由行 · 多代理执行计划（修正后）

第 1 步：主管 Agent
           │  理解意图 · 拆解任务 · 分配预算
           ▼
第 2 步 (并行)：机票 Agent    酒店 Agent
           │                   │
           └────── join ───────┘   🎯 CP2 汇合校验
                     │             （时间匹配 · 预算总和 · 冲突检测）
                     ▼
第 3 步：行程 Agent   （必须等机票时间+酒店位置）
                     │
第 4 步：餐饮 Agent   （必须等行程输出——每天在哪个区域）
                     │
第 5 步：主管汇总 → 用户 Review (CP4)

关键：并行只发生在"机票+酒店"这一层；
      行程和餐饮是串行的（餐饮依赖行程输出）。`,
      sections: [
        {
          title: "Plan 六字段落地 · 预订 Agent 施工蓝图",
          body: "目标：根据预算/日期/偏好预订机票和酒店。任务：搜→筛→选→付。依赖：预算配额、日期、偏好、用户身份。工具：查询类 flight_search_api/hotel_search_api + 执行类 booking_api/payment_api。验收：业务层(符合约束)+技术层(订单号/支付成功)+可信赖层(日志/可追溯/可回滚)。Checkpoint：支付前用户确认 + 预订后 review。",
        },
        {
          title: "三档安全边界 · 三维度判据",
          body: "档位判定靠三维度组合：副作用范围（无/仅内部/外部或敏感）× 可逆性（可逆/部分可逆/不可逆）× 金钱影响（无/有）。5 题场景 4/5 秒答，'给用户自己发邮件'首轮过度保守判档②，用三维度矩阵后修正为档①。金额小陷阱一次跳过，D7 追击焊死。",
        },
        {
          title: "多代理 vs 微服务三维度",
          body: "通信：结构化 vs 自然语言。调度：静态 API 编排 vs LLM 动态决策。错误：局部化 vs 顺着自然语言被下游 Agent 当真、传播放大。三个锁词一辈子记牢。",
        },
        {
          title: "依赖图修正 · 学习者 push back",
          body: "老师第一版画的依赖图把'行程+餐饮'放并行，学习者一句'行程和餐饮可以并行吗？应该会有依赖吧'直接指出问题——餐饮依赖行程输出（每天在哪个区域）。修正后的图：主管→(机票 || 酒店 汇合 CP2)→行程→餐饮→用户 Review。",
        },
      ],
      blindspots: [
        {
          title: "抽象层能答但落地层易退回纯串行",
          body: "Q1(a) 秒答 Hierarchical，Q5(a) 画图时却退回主管→机票+酒店→行程→餐饮的纯串行，漏了 fan-out。下次画图前先问自己：这个层里有兄弟节点吗？",
        },
        {
          title: "Plan 六字段首轮串层",
          body: "第一版预订 Agent 的目标写成了整个自由行的目标，任务混进了行程/餐饮。分层意识落地层还有小失灵，需要每次填表前提醒自己：这是员工 Agent 的 Plan，不是主管的。",
        },
        {
          title: "过度保守判档②",
          body: "给用户自己发邮件被判成档②，说明还没内化'确认不是免费的'。需要建立'档① 是默认，只有金钱/敏感/破坏才升档'的直觉。",
        },
        {
          title: "'约束不遵守'误判为幻觉",
          body: "Q4(c) 首选把幻觉当预订 Agent 头号威胁，理由是'可能订到超预算酒店'。这其实是 Plan 验收失灵，不是幻觉（编造事实）。术语归位差一步。",
        },
      ],
      highlights: [
        {
          title: "主动 push back 老师的图",
          body: "'行程和餐饮可以并行吗？应该会有依赖吧' —— 学习者独立识破老师画错的地方，是今天最漂亮的一击。分层意识不仅立起来了，还能反向审查权威答案。",
        },
        {
          title: "切短+隔离一次到位",
          body: "用完整句式'切短是将长链路的 N 切成小段 K，隔离是将上下文隔离'打出机制。变量名 N/K 都在，污染动词也在，这句可以直接抄进复习卡片。",
        },
        {
          title: "2 句话反驳判反题",
          body: "'幻觉是说错话，越权是对环境作出实际影响'+'强模型幻觉少，工具多仍可能越权' —— D30 该有的言简意赅穿透力。",
        },
        {
          title: "金额小陷阱一次跳过",
          body: "200 元订金的诱饵没骗到，理由直接调用了 Q2 埋下的判据'金额操作是敏感操作'。D7 追击焊死。",
        },
        {
          title: "Checkpoint 自动缝合可信赖 Agent",
          body: "Plan 六字段的 Checkpoint 位置答出'支付前用户确认 + 预订后 review'，同时踩到三档安全边界的档②。跨章节缝合能力到位。",
        },
      ],
      report: [
        {
          title: "A 层 · 通过",
          items: [
            "Plan 六字段：目标·任务·依赖·工具·验收标准·Checkpoint",
            "五威胁：注入·投毒·幻觉·越权·过度代理",
            "三档安全边界 & 三维度判据",
            "多代理'切短+隔离'双武器 · 多代理 vs 微服务三维度",
          ],
        },
        {
          title: "B 层 · 跨章节缝合",
          items: [
            "Prompt Injection × 越权联手作案机制",
            "依赖图 + 安全边界 + Checkpoint 三维缝合（时间·权限·错误）",
            "Checkpoint × 可信赖 Agent 档② 自动踩点",
          ],
        },
        {
          title: "需 D30+ 追击",
          items: [
            "落地层不退回纯串行 · 画图前主动找 fan-out",
            "档① 是默认档 · 别过度保守",
            "'约束不遵守' ≠ 幻觉 · Plan 验收失灵是独立维度",
          ],
          tone: "warn",
        },
      ],
      tags: [
        "Planning Design",
        "可信赖 Agent",
        "多代理",
        "Plan 六字段",
        "五威胁",
        "三档安全边界",
        "切短+隔离",
        "Checkpoint",
        "依赖图",
        "D30 毕业",
        "跨章节缝合",
      ],
    },
  },
  {
    id: "2026-07-09-cuowu-leiji-xianxing-zhishu-d30",
    date: "2026-07-09",
    time: "下午复习",
    title: "错误累积 + 线性 vs 指数 D30+ 综合压测",
    subtitle: "方向感通过 · 术语需追击 · 钥匙跨域迁移金光",
    sourceFile: "复习/2026-07-09-错误累积+线性vs指数D30.html",
    summary:
      "距学习日(5/28-5/31)已过39-42天的D30+综合压测。四题考核：数学默写、checkpoint工程场景、钥匙跨域迁移、四概念串珠。方向感全部正确，但术语精度（局部低阶N、动别的、Controllable三件套）D30生锈。最大亮点：线性vs指数钥匙在全新场景（多轮对话注意力衰减）自动激活，独立设计出上下文checkpoint方案。",
    detail: {
      lead: "39-42天后的D30+压测。方向感全过，术语生锈需追击。钥匙跨域迁移是今天的金光时刻。",
      stats: [
        { value: "4", label: "总题量" },
        { value: "2", label: "通过" },
        { value: "1", label: "金光时刻" },
        { value: "3", label: "术语需追击" },
      ],
      keyPoints: [
        {
          label: "公式精度",
          title: "1 − p^N 不是 p^N",
          body: "初始漏了 1−，在 Q4 自修复。心算方向感也反了一次（0.85^12 估算 50%，实际 14%）。D30 后公式还没成为肌肉记忆。",
        },
        {
          label: "术语生锈",
          title: "三个核心术语 D30 后模糊",
          body: "局部低阶N·截断与降幂、动别的、可中断·可恢复·可指导——三个术语在课内重新焊上，但说明长期记忆还不够牢。",
        },
        {
          label: "钥匙迁移 ⭐",
          title: "线性 vs 指数钥匙在新领域自动激活",
          body: "给了一个多轮客服对话注意力衰减的全新场景，学习者成功用线性vs指数框架分析，并独立设计出上下文checkpoint方案（持久化+清空上下文窗口），还主动调用了Lost in the Middle概念。",
        },
      ],
      map: "累积错误率 = 1 − p^N\n        │\n  ┌─────┼─────┐\n  动N    动p    动\"别的\"(checkpoint)\n  砍步数  提精度  局部低阶N · 截断与降幂\n                    │\n          ┌─────────┤\n          可中断   可恢复   可指导\n               └── TCC · Controllable",
      sections: [
        {
          title: "Q1 · 数学默写 + 两个家族",
          body: "公式写成p^N（漏了1−），心算0.85^12估50%（方向反了，实际14%）。线性vs指数两个家族名字答对。模糊运算/平均直觉细节遗忘。Q4自修复公式。",
        },
        {
          title: "Q2 · checkpoint工程场景",
          body: "误判checkpoint为动p，实际是动别的。局部低阶N和截断与降幂遗忘。Controllable说成controller，循环定义出现一次，三件套漏了可指导。课内全部修复。",
        },
        {
          title: "Q3 · 钥匙跨域迁移 ⭐ 金光",
          body: "多轮客服场景：成功应用线性vs指数分析注意力衰减。设计上下文checkpoint（持久化写入+清空窗口），主动调用Lost in the Middle。checkpoint骨架完美映射。",
        },
        {
          title: "Q4 · 四概念串珠",
          body: "错误累积→线性vs指数→checkpoint→Controllable全串通。自修复：公式补上1−、使用局部低阶N、Controllable三件套补全。",
        },
      ],
      blindspots: [
        {
          title: "公式肌肉记忆未焊死",
          body: "累积错误率 = 1 − p^N，不是 p^N。D30后仍漏 1−，说明公式还停在‘理解’层，没到‘肌肉’层。",
        },
        {
          title: "心算方向感",
          body: "底数更小 + 指数更大 = 结果更小。0.85^12 < 0.9^10，但估算成50%（比35%还大）。方向感需要练。",
        },
        {
          title: "同义词循环定义复发",
          body: "用‘可以控制’解释Controllable。比5/31的3次已减少到1次，但仍需警惕。",
        },
      ],
      highlights: [
        {
          title: "钥匙跨域迁移成功",
          body: "线性vs指数钥匙从错误累积领域迁移到多轮对话注意力衰减领域，自动激活且方案合理。这是D30最有价值的验证——钥匙不只能解原题，能解新题。",
        },
        {
          title: "上下文 checkpoint 方案",
          body: "独立设计出‘子任务完成→关键信息持久化→清空上下文→干净窗口继续’的方案，与checkpoint的save/reset/continue骨架完美映射。还主动补充了Lost in the Middle。",
        },
        {
          title: "课内自修复能力",
          body: "Q1-Q2的所有错误（公式漏1−、局部低阶N遗忘、可指导遗漏）在Q4全部自动修复。说明底子扎实，只是39天没碰生锈。",
        },
      ],
      report: [
        {
          title: "A 层 · 方向感通过",
          items: [
            "两个思维家族（线性 vs 指数）",
            "累积错误率公式 1 − p^N（课内自修复）",
            "checkpoint = 动别的（课内修正）",
            "TCC Controllable 三件套（课内补全）",
          ],
        },
        {
          title: "B 层 · 跨域迁移",
          items: [
            "钥匙从错误累积迁移到注意力衰减 ⭐",
            "上下文 checkpoint 独立设计",
            "Lost in the Middle 主动调用",
            "四概念一线串珠",
          ],
        },
        {
          title: "需 D30+ 追击",
          items: [
            "公式肌肉记忆：1 − p^N 不是 p^N",
            "三术语再焊：局部低阶N · 动别的 · 可中断可恢复可指导",
            "心算方向感：底数小+指数大=结果更小",
          ],
          tone: "warn",
        },
      ],
      tags: [
        "错误累积",
        "线性 vs 指数",
        "局部低阶 N",
        "截断与降幂",
        "checkpoint",
        "TCC",
        "Controllable",
        "动别的",
        "钥匙跨域迁移",
        "Lost in the Middle",
        "上下文 checkpoint",
        "D30+",
        "自修复",
      ],
    },
  },
  {
    id: "2026-07-17-cuowu-leiji-xianxing-zhishu-zhui-ji",
    date: "2026-07-17",
    time: "复习 D30+ 术语追击",
    title: "错误累积 + 线性 vs 指数 D30+ 术语追击",
    subtitle: "三术语全部重焊 · 动别的元层级站起来 · 钥匙跨域迁移",
    sourceFile: "复习/2026-07-17-错误累积+线性vs指数D30+术语追击.html",
    summary:
      "距学习日(5/28-5/31)已 47-50 天的 D30+ 术语追击。三个生锈术语（局部低阶N · 动别的 · 可中断可恢复可指导）全部重焊。最大亮点：「动别的」这个元层级薄弱点 5/31→7/9→7/17 三次摔倒，第四次学习者自己说出「既没改 N 也没改 P」站起来。线性vs指数钥匙跨域迁移到代码审查场景，设计上下文 checkpoint + 裁判审批方案。",
    detail: {
      lead: "术语追击使命达成。三个 D30+ 标红术语全部重焊。今天最有价值的不是答对题，而是「动别的」这个跨三次复习复发的元层级薄弱点被一次性焊死——学习者自己捅破了「杠杆 ≠ 杠杆的效果」。",
      stats: [
        { value: "3", label: "总题量" },
        { value: "3", label: "术语焊死" },
        { value: "1", label: "金光时刻" },
        { value: "1", label: "心算修复" },
      ],
      keyPoints: [
        {
          label: "公式 / 修复",
          title: "1 − p^N 不再漏 1−",
          body: "7/9 闭卷写成 p^N（漏 1−），今天首轮即写出 1 − p^N。p^N 是累积成功率，1 − p^N 才是累积错误率。从理解层往肌肉层挪了一步。",
        },
        {
          label: "心算 / 修复",
          title: "底数<1 时指数越大结果越小",
          body: "比较题 0.85^12 vs 0.9^10 首判「0.85^12 更大因为指数更大」❌（只看指数漏看底数）。修正后说出「底数小于1时指数越大数值越少」。两根杠杆同向压：底数更小 + 指数更大 = 双重变小。实际 0.85^12≈0.14 < 0.9^10≈0.35。",
        },
        {
          label: "术语 / ⭐ 元层级焊死",
          title: "动别的 = 既没改 N 也没改 P",
          body: "checkpoint 首答「动 P 和 N」❌（第三次摔）。复述后自己说出「既没改 N 也没改 P」✅。关键洞察：之前把效果（有效 p 升、N 降）当成了招式。三兄弟框架：动N=砍步数、动p=提精度、动别的=切段+重试（插存档点）。",
        },
        {
          label: "术语 / 焊死",
          title: "可中断 · 可恢复 · 可指导",
          body: "首答「可重试·可恢复·可打断」——把 checkpoint 的机制（重试）串门进三件套，漏可指导。修正后全中：可中断（停得住）· 可恢复（回得去）· 可指导（重试有方向，带错误信息非盲重试）。",
        },
        {
          label: "钥匙 / 跨域迁移",
          title: "代码审查 Agent = 指数问题",
          body: "每轮信息要穿过后面所有轮的注意力才能留下，信息保真度≈p^N，乘法累积所以是指数。Lost in the Middle 主动调用。7/9 客服场景的钥匙迁移到代码审查场景。",
        },
        {
          label: "方案 / 钥匙迁移",
          title: "上下文 checkpoint + 裁判审批",
          body: "按每个函数切段（局部低阶N）→ 函数边界=存档点 → 清空上下文 → 裁判（模型/人类）审批后继续。骨架 save→reset→continue，首答漏 save 步骤（补全）。亮点：checkpoint 同时用成 HITL 审批关卡，不止存档点。",
        },
      ],
      map: `三兄弟框架（三个平级杠杆）：
  1 − p^N
      │
   ┌──┴──────────┬──────────────┐
  动 N          动 p           动「别的」(checkpoint)
  砍步数        提精度          切段 + 重试
  直接删一步    换更强模型       插存档点
               /好 prompt       失败可重来

「动别的」追踪链：
  5/31 →「动 p」❌  7/09 →「动 p」❌  7/17 →「动P和N」❌ → 复述「既没改N也没改P」✅

上下文 checkpoint 骨架：
  save（持久化结论）→ reset（清空窗口）→ continue（带结论进下一段）→ 裁判审批`,
      sections: [
        {
          title: "Q1 · 公式 + 心算",
          body: "公式 1−p^N 首轮正确（7/9 漏 1− 已修复）。心算 0.85^12 估「90%以上」实际 86%，方向对偏高。比较题首判反（只看指数），修正后答出底数<1反向规律。加 vs 乘的区别补全：线性是每轮减一份，指数是每轮乘一个留存率。",
        },
        {
          title: "Q2 · 三术语一字不差（重头戏）",
          body: "局部低阶N 首轮✅。动别的首答「动P和N」第三次摔，复述后「既没改N也没改P」站起——元层级薄弱点焊死。三件套首答把可重试串门进来漏可指导，修正后全中。学习者能主动说「不知道」而非瞎编，复述用自己话而非背原文。",
        },
        {
          title: "Q3 · 钥匙跨域迁移到代码审查",
          body: "(a) 判定指数问题，点出链式依赖+Lost in the Middle，补「乘vs加」后完美。(b) 设计函数边界checkpoint+裁判审批，save→reset→continue骨架首答漏save补全。钥匙从客服迁移到代码审查，第二次跨域工作，成为通用工具。",
        },
      ],
      blindspots: [
        {
          title: "公式第一直觉仍需巩固",
          body: "虽不再漏 1−，但公式尚未完全到肌肉层。需季度回访再验。",
        },
        {
          title: "心算首判仍偏线性",
          body: "底数<1 时「指数大→结果小」的反向规律，第一直觉仍会用底数>1 的规律。修正后能说出，但首判会错。",
        },
        {
          title: "checkpoint 骨架 save 步骤会漏",
          body: "设计上下文 checkpoint 时漏了「持久化结论再清空」的 save 步骤。7/9 有这步，今天漏了，补全。",
        },
      ],
      highlights: [
        {
          title: "「动别的」元层级薄弱点焊死 ⭐",
          body: "5/31→7/9→7/17 三次摔倒，第四次自己说出「既没改 N 也没改 P」。这是跨三次复习复发的元层级思维失灵被修复，不是一道题的对错问题。",
        },
        {
          title: "钥匙跨域迁移成功",
          body: "线性vs指数钥匙 7/9 客服场景 → 7/17 代码审查场景，第二次跨域工作。它不再只属于错误累积那一章，成为拆所有链式过程的通用工具。",
        },
        {
          title: "checkpoint 双重身份活学活用",
          body: "代码审查方案里把 checkpoint 同时用成存档点 + HITL 审批关卡（裁判），是 7/7「checkpoint 双重身份」的活学活用。",
        },
        {
          title: "心算方向感红点重焊",
          body: "7/9 判反，7/17 首判仍反但修正后自己说出「底数<1 指数越大越小」反向规律。两根杠杆（底数+指数）同向压的直觉建立。",
        },
      ],
      report: [
        {
          title: "A 层 · 术语焊死 ✅",
          items: [
            "公式 1 − p^N（不再漏 1−）",
            "局部低阶 N（首轮提取成功）",
            "动「别的」（三次摔倒后站起）",
            "可中断 · 可恢复 · 可指导",
          ],
        },
        {
          title: "💎 金光时刻",
          items: [
            "「动别的」元层级薄弱点焊死（三次摔→站起）",
            "钥匙跨域迁移：客服 → 代码审查",
            "checkpoint 双重身份：存档 + 审批",
            "心算方向感红点重焊",
          ],
        },
        {
          title: "需保持 · 尚未到肌肉层",
          items: [
            "公式第一直觉巩固（已不漏 1−）",
            "心算首判仍偏线性（底数<1 反向规律）",
            "checkpoint 骨架 save 步骤会漏",
          ],
          tone: "warn",
        },
        {
          title: "横向连接",
          items: [
            "动别的 × 杠杆vs效果（元层级思维）",
            "线性vs指数 × 代码审查注意力衰减",
            "上下文 checkpoint × 可信赖 Agent HITL",
            "checkpoint 双重身份 × 7/7 三章合并毕业",
          ],
        },
      ],
      tags: [
        "错误累积",
        "线性 vs 指数",
        "1 − p^N",
        "局部低阶 N",
        "截断与降幂",
        "动别的",
        "元层级焊死",
        "三兄弟框架",
        "可中断·可恢复·可指导",
        "checkpoint",
        "上下文 checkpoint",
        "save→reset→continue",
        "钥匙跨域迁移",
        "Lost in the Middle",
        "D30+ 术语追击",
      ],
    },
  },
  {
    id: "2026-07-27-yuan-ren-zhi-d30",
    date: "2026-07-27",
    time: "复习 D30",
    title: "元认知 Metacognition D30 综合应用",
    subtitle: "五题闭卷通过 · 协调层元认知层级焊死 · 跨章节缝合",
    sourceFile: "复习/2026-07-27-元认知D30.html",
    summary:
      "距 D7(7/01) 26 天后五题闭卷全过。协调层元认知从「纠错家族/质检」混淆修正回「元认知家族」，上下兄弟分层焊死；无状态三缺失+双层级路由独立设计出元认知模块；压轴把元认知×可信赖Agent×错误累积缝成网（主动刹车 vs 安全网），进入长期记忆区。",
    detail: {
      lead: "本次 D30 五题闭卷全过。最大价值不是具体知识点，而是三件事真正用出来了：协调层元认知的上下兄弟从混淆到焊死、无状态三缺失+双层级路由能独立设计、压轴三章缝合。元认知正式进入长期记忆区。",
      stats: [
        { value: "5", label: "闭卷题" },
        { value: "5", label: "通过" },
        { value: "2", label: "元层级焊死" },
        { value: "1", label: "跨章节缝合" },
      ],
      keyPoints: [
        {
          label: "题 1 / 通过",
          title: "改策略 vs 改答案",
          body: "用做题类比：元认知调思路（方法/标准层），普通纠错只改答案（结果层）。边界题验证同方法重算只改数字=普通纠错。钥匙：方法没变只改结果=普通纠错；方法/标准变了=元认知。",
        },
        {
          label: "题 2 / 焊死",
          title: "协调层元认知 ≠ 质检",
          body: "上下兄弟分层归位：上=元认知家族（非纠错家族）；兄=质检（同住协调层，质检查产物、它查策略）；下=修改协作策略/换更强模型。从「纠错家族」修正回「元认知家族」是本次最关键元层级修复。",
        },
        {
          label: "题 3 / 通过",
          title: "Over-Reflection 判断",
          body: "三场景：熟悉任务偶尔错→不反思；新领域首跑不通→反思（7/01 曾栽的坑，今天主动判对）；用户连说三次不对→反思。反向追问过度反思代价（成本/速度/循环/根因）答出预期外。",
        },
        {
          label: "题 4 / 通过",
          title: "无状态三缺失 + 双层级路由",
          body: "补齐 LLM 无状态三缺失：决策历史存储=Reasoning Chain、评估机制=Evaluator、策略切换逻辑=注入执行节点。Evaluator 双层级需分流：答案层→纠错，策略层→self-Reflection/重规划。",
        },
        {
          label: "题 5 / 缝合",
          title: "元认知 × 可信赖 Agent × 错误累积",
          body: "敌人=1−p^N；checkpoint=安全网（固定位置切段）；元认知=主动刹车（动态觉察挡越权/过度代理，常导向人类审批档=HITL checkpoint）。三者合作把 N 压到最小。",
        },
      ],
      map: `协调层元认知 · 上下兄弟
第 3 层（家族）  元认知 = 改策略不只改答案
                    │
第 2 层（兄弟）  ├── 协调层元认知 → 审视「协作策略对不对」
               └── 质检 → 审视「产物对不对」（兄弟，非它自己）

三者配合（题 5）：
敌人 1−p^N → checkpoint 安全网（位置驱动）+ 元认知 主动刹车（信号驱动）
配合：主动早刹 + 固定兜底，把 N 压最小`,
      sections: [
        {
          title: "题 2 层级修正链",
          body: "首轮答「协调层元认知=检查输出对不对」→ 那是质检。用上下兄弟问三句：上答「纠错家族」❌ → 修正「元认知家族」✅；兄点出「质检」✅；下答「修改协作策略/换模型」✅。经历从混淆到焊死。",
        },
        {
          title: "题 4 双层级路由",
          body: "五评估维度拆两家：准确性/事实性/格式约束属答案层（纠错/重试）；目标完成度/系统健康度属策略层（self-Reflection/重规划）。同一 Evaluator 可看两层，但下游必须分流，否则 Over-Reflection 循环复燃。",
        },
        {
          title: "题 5 跨章节缝合",
          body: "用「主动刹车 vs 安全网」骨架展开：元认知动态觉察（信号驱动，比固定 checkpoint 早），checkpoint 固定关口（位置驱动）。元认知挡越权/过度代理、常导向人类审批档（本质 HITL checkpoint）。",
        },
      ],
      blindspots: [
        {
          title: "五类威胁/三档安全边界首轮提取慢",
          body: "属可信赖 Agent 章内容，对元认知 D30 是借用上下文。今天先忘后捞（用输入/推理/输出 + 能不能反悔两锚点），提取通道偏慢，建议季度回访再验。",
        },
        {
          title: "协调层元认知上/兄层级·本次新焊",
          body: "从「纠错家族」修正回「元认知家族」才归位。已稳，但属本次新焊点，需巩固防复发为质检或纠错家族。",
        },
        {
          title: "Evaluator 双层级路由·防退化",
          body: "答案层→纠错/策略层→元认知的分流是本次厘清的，若日后偷懒把所有失败送进 self-Reflection，Over-Reflection 循环复燃。",
        },
      ],
      highlights: [
        {
          title: "从混淆到焊死",
          body: "协调层元认知的上下兄弟从「纠错家族/质检」混淆，用工具自行修正回「元认知家族」，分层意识能反向审查自己答案。",
        },
        {
          title: "过度反思代价超出预期",
          body: "反向追问不仅说出成本/速度，还点出「第一次方案已对却一直改」的循环陷阱，及「问题不清/无解时反思空转」的根因分析。",
        },
        {
          title: "三章缝合自动展开",
          body: "压轴题 5 在全新场景里自动用「主动刹车 vs 安全网」骨架，把元认知×可信赖Agent×错误累积织成网，无需提示。",
        },
      ],
      report: [
        {
          title: "A 层 · 通过（进入长期记忆）",
          items: [
            "元认知 vs 纠错（改策略不只改答案）",
            "协调层元认知上下兄弟分层（≠质检）",
            "Over-Reflection 判断（熟悉小错/新领域/连否）",
            "无状态三缺失 + 双层级路由设计",
            "元认知×可信赖Agent×错误累积缝合",
          ],
        },
        {
          title: "需季度回访",
          items: [
            "五类威胁/三档安全边界首轮提取速度",
            "协调层元认知上/兄层级巩固（防复发为质检）",
            "Evaluator 双层级下游分流防退化",
          ],
          tone: "warn",
        },
        {
          title: "横向连接",
          items: [
            "协调层元认知 × 质检（同住协调层·不同审视对象）",
            "元认知 × 错误累积（主动刹车 vs checkpoint 安全网）",
            "元认知 × 三档安全边界（反思常导向人类审批档）",
            "过度反思 × 成本三策略（反思预算护栏）",
          ],
        },
      ],
      tags: [
        "元认知",
        "Metacognition",
        "改策略不只改答案",
        "协调层元认知",
        "上下兄弟问三句",
        "Over-Reflection",
        "无状态三缺失",
        "双层级路由",
        "Reasoning Chain",
        "可信赖 Agent",
        "五类威胁",
        "三档安全边界",
        "错误累积 1−p^N",
        "checkpoint 安全网",
        "主动刹车",
        "D30 综合",
      ],
    },
  },
  {
    id: "2026-08-03-zhi-neng-ti-xie-yi",
    date: "2026-08-03",
    time: "学习记录",
    title: "智能体协议 MCP、A2A 与 NLWeb",
    subtitle: "AI Agent 的三把钥匙：手、嘴、眼",
    sourceFile: "learn/2026-08-03-智能体协议MCP-A2A-NLWeb.html",
    summary:
      "学习 MCP（模型上下文协议）、A2A（代理间协议）、NLWeb（自然语言网页）三大 AI Agent 通信协议。核心收获：提炼出 MCP vs A2A 的分界判据——\"这个任务需要有自己的大脑吗？\"——以及 MCP = Adapter Pattern + Service Discovery 的设计模式连接。",
    detail: {
      lead: "本次学习从项目实际需求出发（让 Agent 调工具 + 多 Agent 协作），系统学习了三种 Agent 协议。最大亮点：学习者在输入前就用直觉猜中了 MCP 三层架构和 A2A 三大核心需求，并在追问中提炼出\"自主推理能力\"这一核心分界判据。",
      stats: [
        { value: "3", label: "核心协议" },
        { value: "7", label: "A 层知识点" },
        { value: "1", label: "钥匙级洞察" },
        { value: "4", label: "追问通过" },
      ],
      keyPoints: [
        {
          label: "MCP / 架构",
          title: "客户端-服务器架构：Host → Client → Server",
          body: "Host 是 LLM 应用（如 VSCode），Client 维护一对一连接，Server 暴露 Tools/Resources/Prompts 三种能力。MCP 的本质是 Adapter Pattern + Service Discovery——把工具集成从框架层面提升到协议层面。",
        },
        {
          label: "MCP / 三大能力",
          title: "Tools（动作）· Resources（只读）· Prompts（模板）",
          body: "Tools 是 Agent 可调用的离散动作，会改变状态；Resources 是只读数据项，看一眼就好；Prompts 是预定义对话模板，客户端填参数直接用。三者是并列的能力入口，不是 Tool 操作 Resource。",
        },
        {
          label: "MCP / 三大优势",
          title: "动态工具发现 · 跨 LLM 互操作 · 标准化安全",
          body: "对比传统 API：传统需编译时写死，MCP 运行时发现；传统绑定供应商，MCP 跨 LLM 共用；传统每 API 一套密钥，MCP 统一认证。解决了学习者自己指出的\"兼容灾难\"。",
        },
        {
          label: "A2A / 四大组件",
          title: "Agent Card · Executor · Artifact · Event Queue",
          body: "Agent Card 实现动态能力发现（运行时才知道远程 Agent 能做什么）；Executor 传递用户上下文；Artifact 返回工作成果；Event Queue 处理异步可靠性和推送通知。",
        },
        {
          label: "A2A / 核心价值",
          title: "从点对点定制到标准化名片交换",
          body: "A2A 出现前：硬编码编排必须事先知道每个 Agent 能力、点对点集成导致 O(n²) 灾难、各厂商自定标准 Agent 无法对话。A2A 把这一切标准化。",
        },
        {
          label: "⭐ 钥匙洞察",
          title: "MCP vs A2A 分界判据：需要自己的大脑吗？",
          body: "学习者在追问中独立提炼：不需要自主推理 → MCP Tool（被动执行）；需要自主推理 → A2A Agent（能质疑需求）。这个判据比\"Tool vs Agent\"更底层、更准确。",
        },
        {
          label: "NLWeb / B 层",
          title: "让网站自己会说话",
          body: "NLWeb 不只是\"AI 拿网页信息\"（爬虫早就能做）。独特价值：① 网站内容向量化 + 语义搜索 ② 网站本身作为 MCP Server 被其他 Agent 调用（提供 ask 方法）。",
        },
      ],
      map: `┌─────────────────────────────────────────────────────────────────┐
│                    AI Agent 协议生态                              │
│                                                                 │
│    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐    │
│    │     MCP      │    │     A2A      │    │    NLWeb     │    │
│    │ 模型上下文协议 │    │ 代理间协议    │    │ 自然语言网页  │    │
│    └──────┬───────┘    └──────┬───────┘    └──────┬───────┘    │
│           │                   │                   │            │
│    解决什么问题？          解决什么问题？        解决什么问题？    │
│   "LLM 怎么调用         "不同 Agent           "网站怎么被        │
│    外部工具？"           怎么互相通信？"        AI 直接访问？"     │
│           │                   │                   │            │
│  ┌────────┴────────┐  ┌────────┴────────┐  ┌────────┴────────┐ │
│  │ 三大能力        │  │ 四大组件        │  │ 五大组件        │ │
│  │ • Tools  动作   │  │ • Agent Card    │  │ • NLWeb App    │ │
│  │ • Resources 读  │  │ • Executor  执  │  │ • 协议规范     │ │
│  │ • Prompts 模版  │  │ • Artifact  果  │  │ • MCP 端点     │ │
│  │                │  │ • EventQueue 信  │  │ • 嵌入模型     │ │
│  └────────┬───────┘  └────────┬───────┘  │ • 向量数据库   │ │
│           │                   │           └────────┬───────┘ │
│           │                   │                    │         │
│    核心架构：              核心流程：           核心思路：      │
│   客户端-服务器           代理卡发现             网站内容        │
│   Host→Client→Server     →委托执行             →向量化        │
│                          →工件返回             →语义搜索      │
│                          →事件队列             →自然语言回答   │
│           │                   │                    │         │
│           └───────────────────┼────────────────────┘         │
│                               │                              │
│                    三者如何互补？                               │
│              MCP 给了 Agent "手"（调工具）                     │
│              A2A 给了 Agent "嘴"（协作通信）                    │
│            NLWeb 给了 Agent "眼睛"（看懂网站）                   │
└─────────────────────────────────────────────────────────────────┘

⭐ 核心分界判据：
  "这个任务需要有自己的大脑吗？"
  不需要 → MCP Tool（被动执行，给参数返结果）
  需要   → A2A Agent（自主决策，能质疑需求）`,
      sections: [
        {
          title: "MCP 核心架构与能力",
          body: "MCP 基于客户端-服务器架构：Host（LLM 应用）→ Client（连接维护）→ Server（轻量功能程序）。Server 暴露三种并列能力：Tools（离散动作，改变状态）、Resources（只读数据项）、Prompts（预定义对话模板，非说明书）。MCP 三大优势 vs 传统 API：动态工具发现（运行时 vs 编译时）、跨 LLM 互操作性（不绑定供应商）、标准化安全（统一认证 vs 每 API 一套密钥）。",
        },
        {
          title: "A2A 四大组件与协作流程",
          body: "Agent Card（名称/描述/技能列表/端点 URL/版本功能）实现运行时动态能力发现——Agent 不需要提前硬编码知道远程 Agent 能做什么。Executor 传递用户聊天上下文给远程 Agent。Artifact 包含任务结果、工作描述和文本上下文。Event Queue 处理异步可靠性：同步阻塞、连接断开恢复、推送通知、进度汇报——没有它长任务无法可靠执行。",
        },
        {
          title: "MCP vs A2A 的历史视角",
          body: "MCP 出现前：OpenAI Function Calling（供应商锁定）、LangChain Tools（框架锁定）、自研中间层（重复造轮子）。A2A 出现前：硬编码编排（必须事先知道能力）、点对点集成（O(n²) 灾难）、各厂商自定标准（无法互操作）。MCP 把工具集成从框架层面提升到协议层面；A2A 把 Agent 通信从点对点定制变成标准化名片交换。",
        },
        {
          title: "NLWeb：让网站自己会说话",
          body: "五大组件：NLWeb 应用（核心服务引擎）、NLWeb 协议（JSON/Schema.org 响应）、MCP 端点（网站本身就是 MCP Server，提供 ask 方法）、嵌入模型（内容转向量）、向量数据库（语义搜索）。区别于传统爬虫：NLWeb 支持语义搜索 + 可被外部 Agent 直接调用。",
        },
      ],
      blindspots: [
        {
          title: "Tool 与 Resource 的并列关系混淆",
          body: "首答说\"可以利用 TOOL 查询 resource\"——混淆为 Tool 操作 Resource 的关系。正确理解：Tool 和 Resource 是 MCP Server 暴露的两种并列能力入口。判据：看一眼就好 → Resource；需要动手执行 → Tool。",
        },
        {
          title: "MCP Prompts = 说明书（误）→ 对话模板（正）",
          body: "首答将 Prompts 描述为\"提示 Agent 理解工具怎么使用\"——说明书思维。实际上 Prompts 是预定义的半成品对话模板，客户端拿模板填参数直接用，解决\"常见复杂任务的快捷入口\"。",
        },
        {
          title: "NLWeb 简化为\"AI 拿网页信息\"",
          body: "首答未区分 NLWeb 与传统爬虫。NLWeb 的独特价值：① 网站内容向量化 + 语义搜索 ② 网站本身作为 MCP Server，可被外部 Agent 通过 ask 方法调用。",
        },
        {
          title: "A2A Event Queue 的异步可靠性机制待巩固",
          body: "知道\"容易超时\"但未深入异步可靠性的四个维度（同步阻塞/连接断开/推送通知/进度汇报）。D2 需重点回顾。",
        },
      ],
      highlights: [
        {
          title: "⭐ 输入前直觉匹配教程核心结构",
          body: "学习者在没看任何资料的情况下，猜中了 MCP 的三层架构（载体/客户端/服务器）和 A2A 的三大核心需求（能力发现/信息汇总/结果整合）。更精准地指出了\"兼容灾难\"——这个洞察与教程中 MCP 的\"跨 LLM 互操作性\"优势完全吻合。",
        },
        {
          title: "🔗 设计模式连接：MCP = Adapter + Discovery",
          body: "学习者主动将 MCP 与适配器设计模式建立连接，并进一步指出核心差异：传统 Adapter 编译时写死，MCP 运行时动态发现。这是从\"识别模式\"到\"理解差异\"的认知跃迁。",
        },
        {
          title: "🎯 独立提炼核心分界判据",
          body: "在追问\"MCP 和 A2A 的分界线在哪\"时，学习者独立说出：\"这个任务需要有自己的大脑吗？如果需要，使用 A2A；如果不需要，使用 MCP。\"——这个判据抓住了本质（自主推理能力），而非停留在表面（Tool vs Agent）。",
        },
        {
          title: "📖 历史视角补全：理解'为什么被发明'",
          body: "通过对比旧方案的致命缺陷（供应商锁定/框架锁定/O(n²) 集成灾难），学习者不仅知道了三个协议'是什么'，还理解了它们解决了什么真实痛点——这是从\"会用\"到\"会选\"的关键一步。",
        },
      ],
      report: [
        {
          title: "A 层 · 必须深入理解（7 项）",
          items: [
            "MCP 客户端-服务器架构（Host → Client → Server）",
            "MCP 三大能力：Tools（动作）/ Resources（只读）/ Prompts（模板）",
            "MCP vs 传统 API 三大优势（动态发现 / 跨 LLM 互操作 / 标准化安全）",
            "A2A 四大组件：Agent Card / Executor / Artifact / Event Queue",
            "A2A vs MCP 核心分界线（需要自己的大脑吗？）",
            "MCP = Adapter Pattern + Service Discovery",
            "A2A Agent Card = 动态能力发现（非编译时写死）",
          ],
        },
        {
          title: "B 层 · 理解思路即可",
          items: [
            "MCP 完整工作流程（连接→发现→调用→执行→响应）",
            "A2A 完整协作流程（请求→协调→委派→汇总）",
            "NLWeb 五大组件与工作流程",
            "三协议互补关系（手 / 嘴 / 眼）",
          ],
        },
        {
          title: "需要加强",
          items: [
            "Tool vs Resource 的并列关系（非 Tool 操作 Resource）",
            "MCP Prompts = 对话模板，非\"说明书\"",
            "NLWeb 的独特价值（非传统爬虫替代）",
            "A2A Event Queue 的具体机制（异步可靠性四维度）",
          ],
          tone: "warn",
        },
        {
          title: "横向连接",
          items: [
            "MCP × Adapter Pattern（设计模式连接）",
            "A2A × 多代理设计模式（群聊/转接/协同过滤的协议层支撑）",
            "MCP × 可信赖 Agent（标准化安全 vs 三档安全边界）",
            "A2A Agent Card × 动态服务发现（微服务注册中心的 AI 版本）",
          ],
        },
      ],
      tags: [
        "MCP",
        "A2A",
        "NLWeb",
        "Agent Card",
        "Executor",
        "Artifact",
        "Event Queue",
        "Tools",
        "Resources",
        "Prompts",
        "Adapter Pattern",
        "动态发现",
        "自主推理",
        "跨 LLM 互操作",
        "标准化安全",
        "初学",
      ],
    },
  },
  {
    id: "2026-08-06-shang-xia-wen-gong-cheng",
    date: "2026-08-06",
    time: "学习记录",
    title: "上下文工程 Context Engineering",
    subtitle: "五种类型 · 四种失败模式 · 六种管理策略",
    sourceFile: "learn/2026-08-06-上下文工程ContextEngineering.html",
    summary:
      "从项目实际痛点出发（上下文过长 + Agent 行为不稳定），学习上下文工程的核心框架。掌握了提示工程（静态指令）vs 上下文工程（动态信息流）的本质区别，以及五种上下文类型 → 四种失败模式 → 六种管理策略的完整链条。最大亮点：跨章节连接自发引用 Lost in the Middle + MCP，'银弹'级别设计哲学洞察。",
    detail: {
      lead: "提示工程专注于静态指令构建，上下文工程管理动态信息流——在 Agent 执行的每一步裁剪、压缩、注入恰到好处的上下文。本次学习从诊断自己的项目痛点出发，把概念焊成了可操作的诊断工具。",
      stats: [
        { value: "5", label: "上下文类型" },
        { value: "4", label: "失败模式" },
        { value: "6", label: "管理策略" },
        { value: "3", label: "追问通过" },
        { value: "3", label: "纵向追问" },
      ],
      keyPoints: [
        {
          label: "核心区分 / A1",
          title: "提示工程（静态）vs 上下文工程（动态）",
          body: "提示工程管'写什么'——构建 system prompt、few-shot examples。上下文工程管'给什么、什么时候给、给多少'——管理整个执行过程中的动态信息流。",
        },
        {
          label: "诊断工具 / A2",
          title: "四种失败模式：中毒 / 分心 / 混淆 / 冲突",
          body: "中毒最隐蔽（不报错、很自信、全盘错）；分心最常见（Lost in the Middle 稀释意图）；混淆是工具选择困难症；冲突是矛盾信息导致不一致推理。",
        },
        {
          label: "修理箱 / A3",
          title: "六种管理策略",
          body: "上下文压缩 + 摘要、动态工具注入（按需加载）、上下文剪枝、多 Agent 委托、代理便签（一致性校验）、沙箱隔离。每条策略对应特定失败模式。",
        },
        {
          label: "完整链条",
          title: "类型 → 失败 → 策略",
          body: "对话历史 → 分心 → 压缩+摘要。工具 → 混淆 → 动态注入。知识 → 分心/冲突 → 压缩/一致性校验。指令（few-shot） → 分心 → 剪枝。任意类型 → 中毒 → 沙箱+校验。",
        },
      ],
      map: `                    上下文工程（Context Engineering）
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
                                 └─────────────────┘`,
      sections: [
        {
          title: "提示工程 vs 上下文工程：静态 vs 动态",
          body: "提示工程专注于静态指令的构建（system prompt、few-shot examples、格式调整），对象是'一次性注入的文本'。上下文工程管理动态信息流——随着 Agent 执行每一步，不断裁剪、压缩、注入新上下文。对象是'整个执行过程中进入模型窗口的全部内容'。一句话区分：提示工程管'写什么'，上下文工程管'给什么、什么时候给、给多少'。",
        },
        {
          title: "五种上下文类型",
          body: "指令（规则、示例、工具描述）→ 分心风险中等；知识（事实、数据库、长期记忆）→ 分心+冲突风险；工具（外部函数、API、MCP）→ 混淆风险高；对话历史（多轮交互+Agent 自身输出）→ 分心风险极高（指数爆炸）；用户偏好（学习到的行为模式）→ 风险低，通常可控。",
        },
        {
          title: "四种失败模式完整诊断表",
          body: "中毒（Poisoning）：错误信息自循环，不报错、很自信——最隐蔽。分心（Distraction）：信息量太大 → Lost in the Middle 稀释原始意图。混淆（Confusion）：工具太多 → 不知道选哪个。冲突（Conflict）：矛盾信息 → 不一致推理。关键口诀：混淆='分不清该用哪个'(工具选择困难症)；分心='被别的东西吸引了'(注意力被劫持)。",
        },
        {
          title: "完整关系链条（类型 → 失败 → 策略）",
          body: "对话历史 → 分心 → 压缩+摘要；工具 → 混淆 → 动态注入；知识 → 分心(量大) → 压缩；知识 → 冲突(矛盾) → 代理便签+剪枝；指令(few-shot) → 分心 → 剪枝；任意类型 → 中毒 → 沙箱+校验。精确诊断 → 精确武器库，不用大炮打蚊子。",
        },
      ],
      blindspots: [
        {
          title: "术语边界：few-shot = 指令，不是知识",
          body: "初轮把 few-shot examples 归为'知识'→ 应是'指令（Instructions）'的子类。范例的目的是告诉模型'怎么答、用什么格式'，本质是下达指令而非传递事实。",
        },
        {
          title: "失败模式辨识：分心 ≠ 混淆",
          body: "'范例太多'会触发分心（Distraction），不是混淆（Confusion）。混淆=工具选择困难症（分不清该用哪个）；分心=注意力被别的东西吸引（忘了当前任务重点）。",
        },
        {
          title: "架构思维：缺少'组合'视角",
          body: "第三问'框架层 vs Agent 层管理上下文'的回答正确指出了各自利弊，但缺少业界实践的'组合'答案——框架提供原语（compress/summarize/pruneTools），Agent 自主配置何时调用哪些原语。",
        },
      ],
      highlights: [
        {
          title: "'银弹'洞察",
          body: "追问'为什么分四种失败模式'时，学习者独立说出'如果统称一个名字，解决方案就是统一的银弹方案——但很难出现统一的银弹'。精准命中分类的工程价值：精确诊断 → 精确武器库。",
        },
        {
          title: "Lost in the Middle 自发引用",
          body: "诊断'Agent 越聊越偏'时，学习者直接调用论文发现解释分心现象，展示跨章节知识迁移能力。这是之前'缓存+Claude Code 上下文管理'学到的概念在新场景中的自动激活。",
        },
        {
          title: "中毒最阴险的判断",
          body: "纵向追问'哪种失败最隐蔽'时，学习者指出中毒'会沿着中毒的链路一直走下去，最终导致任务质量不高'——抓住了中毒自循环+不报错的本质。",
        },
        {
          title: "MCP 归类精准",
          body: "独立判断 MCP 属于上下文工程五种类型中的'工具'，会引入上下文混淆风险，策略是按需注入（动态剪枝）。",
        },
      ],
      report: [
        {
          title: "A 层 · 通过",
          items: [
            "上下文工程 vs 提示工程（静态 vs 动态）",
            "五种上下文类型：指令/知识/工具/对话历史/用户偏好",
            "四种失败模式：中毒/分心/混淆/冲突",
            "六种管理策略及其对应关系",
            "类型 → 失败 → 策略 完整链条",
          ],
        },
        {
          title: "B 层 · 方向正确",
          items: [
            "五种类型分类及各自爆炸风险",
            "规划管线设计思路",
            "架构分层（框架层 vs Agent 层）的利弊分析",
          ],
        },
        {
          title: "需要加强",
          items: [
            "Instructions vs Knowledge 边界（few-shot 归属）",
            "混淆 vs 分心的精准区分（口诀：混淆=选工具，分心=忘任务）",
            "框架层+Agent 层组合架构思维",
          ],
          tone: "warn",
        },
        {
          title: "横向连接",
          items: [
            "RAG ⊂ 上下文工程工具箱（RAG是动态注入知识的一种实现）",
            "Few-shot = 指令（Instructions），不是知识",
            "MCP → 工具 → 上下文混淆 → 动态注入",
            "上下文压缩 × 缓存三兄弟（省token vs 省计算）",
            "Lost in the Middle × 对话历史 = 分心",
          ],
        },
      ],
      tags: [
        "上下文工程",
        "Context Engineering",
        "提示工程",
        "Prompt Engineering",
        "中毒",
        "分心",
        "混淆",
        "冲突",
        "Lost in the Middle",
        "上下文压缩",
        "动态注入",
        "剪枝",
        "MCP",
        "RAG",
        "few-shot",
        "缓存",
        "初学",
      ],
    },
  },
  {
    id: "2026-08-10-agent-memory",
    date: "2026-08-10",
    time: "学习记录",
    title: "Agent 记忆系统 Agent Memory",
    subtitle: "六种记忆类型 · 知识Agent自改进循环 · 五条跨章节缝合",
    sourceFile: "learn/2026-08-10-Agent记忆系统.html",
    summary:
      "学习如何在无状态的 LLM 之上构建有状态的记忆层。掌握六种记忆类型的层级关系、知识 Agent 自改进循环（存档员 + 情报员）、以及 Mem0 两阶段流水线。最大亮点：跨章节连接自发缝合元认知、上下文工程、多代理、RAG 与缓存三兄弟。",
    detail: {
      lead: "本次学习从系统性理解 AI Agent 架构的目的出发。学习者课前热身即猜中记忆分类框架和核心挑战（存什么/怎么取），核心收获是将碎片化认知拼成完整的三层结构，并通过上下兄弟问三句修正初始层级混乱。",
      stats: [
        { value: "6", label: "记忆类型" },
        { value: "2", label: "实现工具" },
        { value: "4", label: "追问通过" },
        { value: "5", label: "跨章连接" },
        { value: "1", label: "层级修正" },
      ],
      keyPoints: [
        {
          label: "核心定义 / 01",
          title: "LLM 无状态 → 需要记忆层",
          body: "LLM 本质上是无状态的函数，Agent 记忆机制在无状态基底之上人造一层'有状态'感。核心挑战：存什么（相关性过滤）、怎么取（高效检索）、时效性（过时覆盖/删除）。",
        },
        {
          label: "三层结构 / 02",
          title: "六种记忆类型的上下兄弟层级",
          body: "第 3 层概念总称 Agent Memory；第 2 层时效维度（工作/短期/长期）+ 内容维度（角色/情节/实体，属长期记忆子类）；第 1 层底层工具（Mem0/Cognee）。RAG 是设计模式思想，高于工具层。",
        },
        {
          label: "核心模式 / 03",
          title: "知识 Agent 自改进循环：存档员 + 情报员",
          body: "存档员（对话后）：发现→提取→加工→存入记忆库。情报员（任务前）：检索→注入任务 Agent 上下文。独立运行的理由：专业化（一个技能栈）、上下文隔离（防分心）、异步不阻塞。",
        },
        {
          label: "实现工具 / 04",
          title: "Mem0 两阶段流水线",
          body: "阶段 1 提取：LLM 总结对话历史提取新记忆。阶段 2 更新决策：LLM 判断添加/修改/删除（遗忘能力！）。存储：向量（语义搜索）+ 图（实体关系）+ KV（精确匹配）三种混合。",
        },
      ],
      map: `第 3 层（概念总称）    Agent Memory（记忆系统）
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
┌───────▼───────┐   ┌───────▼───────┐   ┌───────▼───────┐
│   工作记忆     │   │   短期记忆     │   │   长期记忆     │ ← 时效维度
│  （当前任务）   │   │  （会话内）    │   │  （跨会话）    │
└───────────────┘   └───────────────┘   └───────┬───────┘
                                                │
                        ┌───────────────────────┼───────────────────────┐
                        │                       │                       │
                ┌───────▼───────┐       ┌───────▼───────┐       ┌───────▼───────┐
                │   角色记忆     │       │   情节记忆     │       │   实体记忆     │ ← 内容维度
                │  （我是谁）    │       │  （经历了什么）  │       │  （用户是谁）  │
                └───────────────┘       └───────────────┘       └───────────────┘
                        │                       │                       │
                        └───────────────────────┼───────────────────────┘
                                                │
                                        ┌───────▼───────────────┐
                                        │  Mem0 / Cognee        │ ← 底层工具
                                        │  向量 + 图 + KV 混合   │
                                        │  RAG = 设计模式思想    │
                                        └───────────────────────┘`,
      sections: [
        {
          title: "知识 Agent 双角色模型",
          body: "🅰️ 存档员：对话结束后从对话历史中发现有价值信息 → 提取、加工 → 存入记忆库。🅱️ 情报员：新任务开始前从记忆库中检索相关信息 → 注入任务 Agent 上下文。学习者初答只描述了情报员的工作，经提示补全存档员角色。",
        },
        {
          title: "Mem0 两阶段流水线",
          body: "阶段 1 提取：利用 LLM 总结对话历史，提取新记忆片段。阶段 2 更新决策：基于 LLM 判断添加新记忆 / 修改已有记忆 / 删除过时记忆。学习者在追问中独立说出增/改/删三个操作，未遗漏'遗忘'维度。",
        },
        {
          title: "跨章节缝合（5 条）",
          body: "① Memory × 元认知：两者都是元层级审视循环，但观察对象不同（推理过程 vs 对话历史）。② Memory × 上下文工程：知识 Agent ⊆ 上下文工程，检索注入是上下文工程六策略之一。③ Memory × 多代理：专业化原则（一个技能栈/权限面/失败域）解释知识 Agent 为何独立。④ Memory × RAG：同一检索增强模式，数据源不同。⑤ Memory × 缓存三兄弟：两道生死题可直接套用到记忆缓存策略。",
        },
      ],
      blindspots: [
        {
          title: "首轮层级混乱：6 种类型+工具全部堆在同一层",
          body: "用'上下兄弟问三句'修正为三层结构：概念总称 → 时效/内容维度 → 底层工具。RAG 提升到设计模式层。这是今天最重要的元层级修正。",
        },
        {
          title: "知识 Agent 自改进循环初答只描述情报员",
          body: "只描述了'检索→注入'方向，遗漏'提取→存储'方向。补齐双角色模型后完整。",
        },
        {
          title: "记忆分类原因停在工程优化层",
          body: "初答'减少数据量/加快检索'是工程好处而非设计根因。升级到'不同类型需要不同存取方式，混一起必然触发分心+混淆+冲突'——连接上下文工程四种失败模式。",
        },
        {
          title: "RAG 被放在工具层与 Mem0 并列",
          body: "RAG 是设计模式（检索→增强→生成），高于具体工具。Memory 检索是 RAG 思想在对话历史上的应用，非并列关系。",
        },
      ],
      highlights: [
        {
          title: "课前猜中记忆分类框架 + 核心挑战",
          body: "学习者在没看任何资料的情况下，独立说出'短期/长期/内部记忆'和'事实/经历/身份'分类，并点出'相关性过滤'和'高效搜索'两大工程挑战——与教程核心结构高度吻合。",
        },
        {
          title: "六种记忆类型全中 + 正确分为三层",
          body: "在关门复述中独立回忆出全部六种记忆类型，并在追问中成功修正层级关系——工作/短期/长期在上层，角色/情节/实体是长期记忆的子分类，Mem0/Cognee 是底层工具。",
        },
        {
          title: "Mem0 增/改/删三操作独立说出",
          body: "在追问中不仅说出'提取'和'更新'两个阶段，还独立补充了'添加、修改、删除'三种更新决策——未遗漏'遗忘'维度，这是大多数人忽略的细节。",
        },
        {
          title: "跨章节连接自发激活",
          body: "横向连接环节中，学习者自主将 Memory 与元认知（两种元层级审视）、上下文工程（⊂ 关系）、多代理（专业化原则）、RAG（同一模式）、缓存三兄弟（两道生死题套用）进行了缝合——五条连接都是主动说出的，非被动接受。",
        },
      ],
      report: [
        {
          title: "A 层 · 必须深入理解（4 项）",
          items: [
            "六种记忆类型的层级关系（上下兄弟三层结构）",
            "知识 Agent 自改进循环（存档员 + 情报员双角色）",
            "记忆系统在 Agent 架构中的位置与角色",
            "Mem0 两阶段流水线（提取 → 更新决策）",
          ],
        },
        {
          title: "B 层 · 理解思路即可（3 项）",
          items: [
            "Mem0 三种存储混合的设计思路",
            "Cognee 知识图谱 + 向量混合检索",
            "延迟优化策略（先快速判断、再深度提取）",
          ],
        },
        {
          title: "需要加强",
          items: [
            "工作记忆 vs 短期记忆的精确边界（材料未严格区分）",
            "Event Queue 异步可靠性四维度（本次未深入）",
            "Mem0/Cognee 具体代码级细节（C 层，用时查阅）",
          ],
          tone: "warn",
        },
        {
          title: "横向连接",
          items: [
            "Memory × 元认知（两种元层级审视循环）",
            "Memory × 上下文工程（知识 Agent ⊆ 上下文工程）",
            "Memory × 多代理（专业化原则解释独立设计）",
            "Memory × RAG（同一检索增强模式）",
            "Memory × 缓存三兄弟（两道生死题套用到记忆类型）",
          ],
        },
      ],
      tags: [
        "Agent Memory",
        "记忆系统",
        "工作记忆",
        "短期记忆",
        "长期记忆",
        "情节记忆",
        "实体记忆",
        "角色记忆",
        "知识 Agent",
        "Mem0",
        "Cognee",
        "两阶段流水线",
        "RAG",
        "元认知",
        "上下文工程",
        "多代理",
        "缓存三兄弟",
        "上下兄弟问三句",
        "初学",
      ],
    },
  },
  {
    id: "2026-08-13-agent-kai-fa",
    date: "2026-08-13",
    time: "晚间学习",
    title: "Agent 开发核心模式",
    subtitle: "从 deer-flow 教学包提炼 · 验证性阅读觉醒",
    sourceFile: "learn/2026-08-13-Agent开发核心模式.html",
    summary:
      "以应用派姿态进入（实时聊天读文件+联网+生成新文件），从 deer-flow 自带的 learn/agent-techniques 教学包切入，把 Agent 六个核心零件（Factory/Middleware/State/HITL/Tools/Sandbox）逐一拆开跑通复述。最大亮点：学习者主动质疑 mergeSandbox 是孤儿 reducer，逼出 demo 07，并命名“验证性阅读”元技能。",
    detail: {
      lead:
        "这一轮不是“学概念”，是“在成熟项目上拆骨架”。学习者带着真实场景（读文件+联网+生成新文件）进入 deer-flow，从教学包 7 个 demo 切入，把 Agent 的六个核心零件拆开、跑通、复述。最珍贵的是“验证性阅读”的觉醒——不是读到什么信什么，而是追问“这行代码真的被调用了吗”。",
      stats: [
        { value: "6", label: "A 层知识点" },
        { value: "7", label: "demo 跑通" },
        { value: "4", label: "追问通过" },
        { value: "3", label: "层级修正" },
        { value: "1", label: "元技能觉醒" },
      ],
      keyPoints: [
        {
          label: "A1 / Factory",
          title: "Agent 由五样东西装配",
          body: "model(大脑,决定调哪个工具) + systemPrompt(人设) + tools(双手) + middleware(反射) + checkpointer(记忆本)。Runtime 优先级 request>agentConfig>default，用 key in object 保证 false 被尊重。",
        },
        {
          label: "A2 / Middleware",
          title: "Clarification 必须最后 · 位置≠时机",
          body: "interrupt() 是 GraphBubbleUp 信号，放前面会被 ToolErrorHandling 的 try/catch 当异常抓住，HITL 失效。但排最后≠最后执行——interrupt 按需触发，仍可是 agent 第一个动作。",
        },
        {
          label: "A4 / HITL",
          title: "中断/恢复三层链条",
          body: "LLM决定要问 → 调 ask_clarification(工具层) → 触发 interrupt()(机制层) → HITL暂停存checkpointer(效果层) → Command({resume})唤醒同thread_id → Sandbox写文件。三层不可压成一步。",
        },
        {
          label: "A3 / State",
          title: "reducer 是并发写状态的合并规则",
          body: "一轮多工具并发写同字段时，LangGraph 需要你给合并规则。mergeSandbox 冲突 throw(fail-closed,安全维度) vs mergeArtifacts 后写覆盖(正确性维度,可重跑)。严重性分两个兄弟维度，不是单一量。",
        },
        {
          label: "A6 / demo07",
          title: "孤儿 reducer 觉醒 + Command 机制",
          body: "mergeSandbox 在教学包只被单测调用、agent 路径不触发——是孤儿。工具只返回字符串不会自动更新 state，必须 return Command({update:{artifacts}}) 显式写回。LLM是指挥官→工具是士兵→reducer合并。",
        },
        {
          label: "元技能",
          title: "验证性阅读三问",
          body: "读任何函数固定问：①谁调用它(grep import) ②它真的在执行路径上吗 ③它的副作用去哪了(return被谁接收)。本次用它发现教学包的孤儿 reducer，并自建 demo 07 接通。",
        },
      ],
      map: "Agent(总称) → Factory/Middleware/State(零件) → Tools/Sandbox(工具动作)。\nMiddleware 链：消毒→错误恢复→循环检测→限流→澄清(最后)。\nHITL 三层：ask_clarification(工具)→interrupt()(机制)→HITL暂停(效果)。\nLLM/工具/reducer 三层：LLM输出tool_call→工具执行+return Command→reducer合并进state。",
      sections: [
        {
          title: "Subagent 限流 · 防失控而非防慢",
          body: "agent 一次发3个task，middleware在afterModel直接砍超额的。限流防的不是“慢”（并发本来更快），而是失控——成本/资源/上下文爆炸。学习者初答方向反了，修正为“限流是安全阀”。",
        },
        {
          title: "Skills 渐进披露 · context engineering 落地",
          body: "system prompt只放skill名字+描述→describe_skill拿metadata→read_skill加载全文。两个理由：①上下文珍贵 ②保护prefix cache——只放名字=前缀稳定=缓存命中=省钱省延迟。",
        },
        {
          title: "fail-closed vs 覆盖 · 严重性的两个维度",
          body: "沙箱id错是安全问题(不可恢复,fail-closed宁可停)；文件覆盖是正确性问题(重跑可恢复,允许覆盖)。学习者初答把“严重性”当单一量比较，经“上下兄弟”修正为“安全 vs 正确性”两个兄弟维度。",
        },
      ],
      blindspots: [
        {
          title: "把 Agent 当执行步骤",
          body: "复述写“Agent 执行任务”，把“决定调哪个工具”安到抽象 Agent 身上。修正：Agent 是“装好的那一整个”，决定权在 model。",
        },
        {
          title: "ask_clarification/interrupt()/HITL 压成一步",
          body: "把工具层、机制层、效果层三层混为一谈。修正：三层分开——工具(我要问)→机制(摁停)→效果(暂停等人类)。",
        },
        {
          title: "限流防“慢”",
          body: "直觉以为并发多→慢→要限流，方向反了。修正：并发本来更快，限流防的是失控(成本/资源/上下文)。",
        },
        {
          title: "fail-closed vs 覆盖用单一严重性比较",
          body: "把安全和正确性混为一个量。修正：分安全维度和正确性维度两个兄弟，前者不可恢复后者可重跑。",
        },
        {
          title: "漏掉工具是落盘执行者",
          body: "把落盘安到“LLM 输出之后”模糊地带。修正：LLM 输出 tool_call(指令)→工具执行落盘+return Command→reducer 合并。",
        },
      ],
      highlights: [
        {
          title: "验证性阅读觉醒",
          body: "主动质疑“mergeSandbox没真正和agent联动”，grep证实是孤儿reducer，并自建demo07让它活过来。命名了“验证性阅读三问”元技能——读代码固定追问谁调用/在不在路径/副作用去哪。",
        },
        {
          title: "三轮复述可见认知跃迁",
          body: "第一轮只记得名词→第二轮能填完整链条→第三轮名词精准对得上代码。从“大概”到“对得上代码”的跃迁。",
        },
        {
          title: "interrupt vs throw 跨章节连接",
          body: "自主发现 interrupt() 和 mergeSandbox throw 是同一家族（异常冒泡），但一个是信号该放行、一个是真错误该抓。把 A2 和 A6 两个知识点连起来了。",
        },
      ],
      report: [
        {
          title: "掌握情况",
          items: [
            "A1 Factory 装配：建立闭环，model 上岗焊死",
            "A2 Middleware 顺序：不变量理解到位，位置≠时机",
            "A4 HITL：6环链条闭环，三层分层建立",
            "A3 State：reducer 机制懂，fail-closed vs 覆盖维度修正",
            "A6 Sandbox：孤儿 reducer 觉醒，Command 机制懂",
            "A5 Tools 裁剪：实时 vs 非实时理解到位",
          ],
        },
        {
          title: "需加强",
          items: [
            "A6 真实 write_file 源码还没深挖（教学包砍了 sandbox 工具）",
            "Command 机制的真实写法没亲手写过（demo07 只演示了原理）",
            "Sandbox 隔离边界细节（虚拟路径/权限）还没碰",
          ],
          tone: "warn",
        },
        {
          title: "下一步",
          items: [
            "深挖真实 backend/packages/harness/deerflow/sandbox/tools.py 的 write_file",
            "看 write_file 如何 return Command 显式更新 artifacts/sandbox state",
            "把 demo07 升级：用真实 Command 机制让 artifacts 不再 undefined",
          ],
        },
      ],
      tags: [
        "Agent 开发",
        "deer-flow",
        "Factory 装配",
        "Middleware 顺序",
        "HITL",
        "State reducer",
        "Sandbox",
        "渐进披露",
        "验证性阅读",
        "上下兄弟问三句",
        "Command 机制",
        "interrupt",
        "fail-closed",
        "上下文工程",
        "Agent 记忆系统",
        "初学",
      ],
    },
  },
  {
    id: "2026-08-14-agent-a-ceng",
    date: "2026-08-14",
    time: "两天集训（8/13–8/14）",
    title: "Agent 开发 A 层六单元收官",
    subtitle: "复述 → 追问 → 连接 → 实践 全闭环",
    sourceFile: "learn/2026-08-14-Agent开发A层收官.html",
    summary:
      "承接 08-13 初学，以面试标准把 Agent Loop / 中间件链 / State 与 Reducer / 上下文工程 / HITL / 子代理与护栏六个 A 层单元逐一打穿，六个工程产物全部 typecheck 绿 + demo 跑通。",
    detail: {
      lead: "这一次真正留下来的不是六个名词，而是四条焊死的原则：护栏建在代码里、顺序是不变量、合并必须显式且 fail-closed、能力是数据不是逻辑。",
      stats: [
        { value: "6", label: "A 层单元收官" },
        { value: "6", label: "实践验证全绿" },
        { value: "14+", label: "盲点修复" },
        { value: "6", label: "自建工程产物" },
      ],
      keyPoints: [
        {
          label: "A1",
          title: "Agent Loop 与 Tool Calling",
          body: "模型申请（tool_call = id+name+args）、宿主执行、ToolMessage 按 tool_call_id 回写配对；模型无状态，messages 是工作记忆，checkpointer 是持久化；循环停止的机制层信号 = 无 tool_calls。",
        },
        {
          label: "A2",
          title: "中间件链：顺序即契约",
          body: "wrap* 包裹进出两侧，before/after* 单点打桩；五层顺序：消毒→错误恢复→循环检测→子代理限流→澄清（必须最后）；interrupt 借异常通道传播，错误处理必须 isGraphBubbleUp 放行。",
        },
        {
          label: "A3",
          title: "State 与 Reducer：显式合并",
          body: "Reducer<T> = (existing, incoming) => merged，缺席是合法输入；策略按 key 分级（去重覆盖 vs fail-closed 抛错）；缺席=没碰、{}=显式清空；channel 声明的类型 = reducer 返回值契约；reducer 挂进 stateSchema 才接通。",
        },
        {
          label: "A4",
          title: "上下文工程：静态前缀与按需披露",
          body: "system prompt 全静态保 prefix cache（键=前缀每个字节，TTL 分钟级，命中约 1 折）；日期/记忆由中间件注入第一条 HumanMessage；技能三层披露 name→describe→read；软引导 vs 硬强制，风险等级决定手段。",
        },
        {
          label: "A5",
          title: "HITL：中断与恢复",
          body: "双范式：interrupt()+Command({resume}) 冻结恢复 vs Command(goto=END) 结束本轮+隐藏 HumanMessage（生产）；结构化卡片走 ToolMessage.artifact.human_input；thread_id 管对话、tool_call_id 管调用。",
        },
        {
          label: "A6",
          title: "子代理与护栏：隔离与限流",
          body: "子代理=又一整个 Agent 循环，隔离上下文只回摘要；task prompt 必须自包含；限流在 afterModel 改写消息（执行中拦会留悬空 tool_call 被厂商 API 拒收）；截断必须可观测（notice 写进消息）。",
        },
      ],
      map: `第 3 层（原则）     护栏在代码里 · 顺序是不变量 · 显式合并 fail-closed · 能力是数据
                        │
第 2 层（单元）     A1 Agent Loop ─ A2 中间件链 ─ A3 State/Reducer
                        │              │              │
                   A4 上下文工程 ─ A5 HITL ─ A6 子代理与护栏
                        │
第 1 层（机制）     tool_call/ToolMessage · wrap/after 钩子 · reducer · prefix cache · interrupt/Command · task 截断

生命线：用户消息 → 工厂组装 → 模型⇄工具循环（中间件包裹）→ reducer 合并状态
       → 需要人就 interrupt → 重活派子代理（限流）→ 静态前缀+按需披露保上下文`,
      sections: [
        {
          title: "软引导 vs 硬强制（A2 × A4 合流）",
          body: "技能披露顺序靠 prompt 软引导（失败只打折质量）；限流/消毒/澄清靠中间件硬强制（失败即事故）。手段的硬度必须匹配失败的代价。",
        },
        {
          title: "异常通道的两种乘客（A2 × A5 合流）",
          body: "interrupt 是控制流信号（必须放行），工具异常是错误（转成 error ToolMessage）。同一个 try/catch 区别对待——isGraphBubbleUp 存在的理由。",
        },
        {
          title: "fail-closed 出现两次（A3 × 框架层）",
          body: "框架层：没挂 reducer 的 key 同轮双写直接 InvalidUpdateError；业务层：sandboxId 冲突 throw。同一原则不同层级各落一次地。",
        },
        {
          title: "能力是数据，不是逻辑（A1 × A4 合流）",
          body: "加工具不改模型、加技能不改 prompt——可扩展性来自注册而非修改。",
        },
      ],
      blindspots: [
        {
          title: "层级混淆三连",
          body: "停止条件的语义/机制层混答；thread_id 与 tool_call_id 混层；软引导与硬强制装反。全部被'上下兄弟问三句'拆开焊死。",
        },
        {
          title: "注释承诺 ≠ 代码兑现",
          body: "mergeTodos 注释写了 null 分支但代码没做。规则：注释承诺必须代码兑现，审查时对照检查。",
        },
        {
          title: "类型加宽不看契约边界",
          body: "修 null 分支时把返回值加宽为 null，违反 channel 声明（typecheck 红）。规则：先查契约再改类型。",
        },
        {
          title: "流畅性错觉",
          body: "复述教师原话代替自己的推理；漏题不答。规则：每题必答或写'不会'，全部用自己的话。",
        },
        {
          title: "钩子名精确度",
          body: "wrapToolCall 说成 wrapModelCall——拦的是工具执行不是模型调用，一字之差两层楼。",
        },
      ],
      highlights: [
        {
          title: "自建 08-hitl-end-turn.ts 对照生产实现",
          body: "自学摸到 artifact.human_input 结构化卡片协议、hide_from_ui、returnDirect 的 JS-Python 差异——A5 实践提前超额完成。",
        },
        {
          title: "澄清排最外层的反问",
          body: "'排最外层没人能吞异常啊？'——自己发现机械层面的洞，逼出分层语义/免决策契约/放行通用性三条更深理由。",
        },
        {
          title: "三天三请求缓存场景反问",
          body: "主动构造场景验证 prefix cache 模型（命中 2 次、冷启动不算），并追问供应商 TTL——开始用成本视角看架构。",
        },
        {
          title: "自己推出 dangling tool call 约束",
          body: "追问中独立推出'执行中拦截会导致调用与结果配对错乱、被厂商 API 拒收'——真实 DeerFlow 恰好有 DanglingToolCallMiddleware。",
        },
      ],
      report: [
        {
          title: "掌握",
          items: [
            "六个 A 层单元全部通过复述+追问+连接+实践四轮验证",
            "六个工程产物全部 typecheck 绿 + demo 跑通",
            "能主动构造场景反问验证模型（三天缓存）、能质疑设计（澄清位置）",
          ],
        },
        {
          title: "需加强",
          items: [
            "层级精确度：语义/机制、id 分层、软/硬强制——已修但需 D2 复验",
            "答题完整性：漏题三次后建立'每题必答或写不会'规则",
            "类型纪律：先 typecheck 再交卷；改类型前先查契约边界",
          ],
          tone: "warn",
        },
        {
          title: "下一步",
          items: [
            "B 层：前端 Agent UX（frontend/src/core 流式合并/消息分组/HITL 卡片/子任务面板）",
            "回读真实代码：lead_agent/agent.py 的 35 个中间件全链",
            "D2（8/16）→ D7（8/21）→ D30（9/13）间隔检索",
          ],
        },
      ],
      tags: [
        "Agent 开发",
        "deer-flow",
        "Agent Loop",
        "Tool Calling",
        "Middleware",
        "State reducer",
        "上下文工程",
        "prefix cache",
        "HITL",
        "Subagent",
        "fail-closed",
        "软引导硬强制",
        "上下兄弟问三句",
        "A层收官",
      ],
    },
  },
  {
    id: "2026-08-17-agent-memory-d7",
    date: "2026-08-17",
    time: "复习 D7（含 D2 补验）",
    title: "Agent 记忆系统 D7 跨章节综合",
    subtitle: "9 问闭卷 · 两颗锈钉重焊 · ⊆ 关系自发迁移",
    sourceFile: "复习/2026-08-17-Agent记忆系统D7.html",
    summary:
      "距学习日（8/10）7 天，D2 逾期 5 天折叠补验。三层家族树两颗钉子锈掉（类型压平 + RAG 降级）现场重焊；双角色/Mem0 流水线/⊆ 关系/独立三理由全部收口；缓存处方从「单轴误判」修为「语义✗提示词✓ + TTL」。最大亮点：自发推导「提示工程 ⊆ 上下文工程」。",
    detail: {
      lead: "整体画像是典型的 7 天衰减曲线：骨架在、细节漏。三层树、双角色、流水线、⊆、独立三理由都还在；术语精度、记忆边界、缓存双轴需要补针。9 问全部收口，两颗层级锈钉重焊立稳，D30 首验防复发。",
      stats: [
        { value: "9", label: "闭卷小问" },
        { value: "2", label: "锈钉重焊" },
        { value: "6", label: "补针修正" },
        { value: "3", label: "自发洞察" },
      ],
      keyPoints: [
        {
          label: "A1 / 重焊",
          title: "三层家族树（两颗锈钉）",
          body: "首轮五种类型压平同层 + 工具层只剩向量数据库（盲点 1 复发）；二轮 RAG 仍与 Mem0 并列（盲点 4 复发）。三轮画正：时效三兄弟，长期下辖角色/情节/实体，工具层向量+图+KV，RAG 居设计模式层。附加题工作 vs 短期记忆边界弃权 → 讲授：任务级草稿纸 vs 会话级会议记录。",
        },
        {
          label: "A2 / 补针",
          title: "双角色 + 加工工序",
          body: "方向时机全对，自发说出「判断是否需要」过滤器（亮点）。补：存档员/情报员工牌 + 写路径中间工序「加工」（去噪压缩结构化；不加工=记忆库变垃圾场=分心回归）。",
        },
        {
          label: "A3 / 补针",
          title: "上下兄弟（情节记忆）",
          body: "上连爷爷都请出（长期记忆→Agent Memory）；兄把自己列进兄弟名单 → 修正「先把自己摘出去」；下补向量·语义相似搜索。",
        },
        {
          label: "B1 / 补针",
          title: "Mem0 两阶段 + 三存储",
          body: "提取✓/更新决策✓，但「增删改查」串入查 → 读写路径分层（查=情报员读路径）。「删」（遗忘）7 天后仍留存。图=关系穿梭✓；精确匹配误答向量 → 修 KV。本质答对并自发补成本视角（向量最贵；精修：图也不便宜，KV 最便宜）。",
        },
        {
          label: "B2 / 通过",
          title: "Memory × 元认知",
          body: "审视对象/目的/分工三问全对。收口：同一「审视→提取→应用」循环套不同对象。口诀：元认知改「怎么想」，知识 Agent 管「手里有什么」。",
        },
        {
          label: "B3 / 术语陷阱",
          title: "知识 Agent ⊆ 上下文工程",
          body: "答成「提示词构建」→ 修正：检索→注入=动态注入策略（运行时），非静态提示工程。补讲五种上下文类型：指令/知识(长期记忆挂此)/工具/对话历史/用户偏好。",
        },
        {
          label: "B4 / 通过",
          title: "独立三理由",
          body: "上下文隔离（自发缝入 Lost in the Middle，一答串三章）+ 权限面/失败域 + 异步不阻塞（场景引导后答出）。",
        },
        {
          label: "B5 / 补针",
          title: "缓存生死题 × 四种记忆",
          body: "两道生死题报出名（实效性→时效性），但处方只用「用户关联」一个轴。修：实体=语义缓存✗/提示词缓存✓；情节=带 TTL 判断时效；角色✓可缓存；工作✗不缓存。情节 vs 实体补讲：档案卡(KV) vs 日记(向量)。",
        },
      ],
      map: `第3层：Agent Memory（记忆系统）
          │
第2层·时效：工作记忆(任务级) │ 短期记忆(会话级) │ 长期记忆(跨会话)
                                                      │
                          第2层·内容：角色记忆 │ 情节记忆 │ 实体记忆
                                                      │
          ———— RAG（设计模式：检索→注入→生成，高于工具）————
                                                      │
第1层·工具：Mem0 / Cognee —— 向量 + 图 + KV 三种存储混合

⊆ 家族：上下文工程 ⊇ { 提示工程(静态指令层) , 知识 Agent(记忆检索→注入) }
缓存处方：角色✓ ｜ 实体 语义✗提示词✓ ｜ 情节 TTL ｜ 工作✗`,
      sections: [
        {
          title: "读写路径分层（B1 收口）",
          body: "写路径=两阶段流水线：提取（LLM 总结对话→记忆片段）→ 更新决策（加/改/删）。读路径=情报员检索→注入，不在流水线内。「查」不属于写流水线。",
        },
        {
          title: "元认知 vs 知识 Agent（B2 收口）",
          body: "同一循环骨架「审视→提取→应用」：元认知审视推理过程改策略；知识 Agent 审视对话历史提取记忆注入下次。改怎么想 vs 管手里有什么。",
        },
        {
          title: "⊆ 关系双向迁移（B3 + 课间追问）",
          body: "知识 Agent ⊆ 上下文工程（只管长期记忆一种来源，注入后属「知识」类型）。学习者当场反推：提示工程也 ⊆ 上下文工程（其产出=五种类型之「指令」）。对立是教学手法，包含才是事实结构。",
        },
        {
          title: "缓存处方双轴（B5 收口）",
          body: "两道生死题=时效性 × 用户关联度。角色(不变+无关)✓；实体(稳定+高度私人)语义✗/提示词✓；情节(私人+可能过时)TTL；工作(时效极短)✗。教训：报了题就要用题。",
        },
      ],
      blindspots: [
        {
          title: "三层家族树锈钉两颗（类型压平 + RAG 降级）→ 已重焊",
          body: "初学当天盲点 1、4 的原位复发，典型 7 天衰减。属本次新焊点，D30（9/09）首验防复发。",
        },
        {
          title: "工作 vs 短期记忆边界：弃权 → 已讲授",
          body: "寿命跟一个任务走（草稿纸）还是跟整段会话走（会议记录）。学习日标记的薄弱点正式厘清。",
        },
        {
          title: "「增删改查」串入查 → 读写路径分层",
          body: "查=情报员读路径，不在 Mem0 写流水线。流水线只做加/改/删。",
        },
        {
          title: "「提示词构建」术语陷阱 → 动态注入",
          body: "注入姓上下文工程（运行时）不姓提示工程（设计期）。附赠区分：提示词注入=安全攻击术语，与提示工程不同户口。",
        },
        {
          title: "缓存处方单轴化 → 双轴齐用",
          body: "两道生死题只用「用户关联」一道半。实体要分缓存类型，情节必须上 TTL。",
        },
        {
          title: "兄弟名单含自己 → 已修正",
          body: "问「兄」先把自己摘出去——站进家族看关系，不站外面背名单。",
        },
      ],
      highlights: [
        {
          title: "自发推导「提示工程 ⊆ 上下文工程」⭐ 本场最佳",
          body: "学完知识 Agent ⊆ 上下文工程当场迁移，还看穿「对立是教学手法、包含才是事实结构」。⊆ 模式完成自发迁移。",
        },
        {
          title: "「判断是否需要」过滤器留存",
          body: "A2 自发带出相关性过滤（不能什么都存）——核心挑战层面的理解，不是背流程。",
        },
        {
          title: "「删」（遗忘能力）7 天后仍亮 + 成本视角新长",
          body: "初学高光时刻存活；自发补充向量构建成本最高的工程视角，超出课本。",
        },
        {
          title: "诚实换真讲解",
          body: "边界题、五种类型、情节vs实体多处直接说「不会」——每次都换来针对性补讲，诚实比答对值钱。",
        },
      ],
      report: [
        {
          title: "通过（收口）",
          items: [
            "三层家族树（重焊后立稳）",
            "双角色 + 加工工序",
            "Mem0 两阶段 + 三存储分工",
            "知识 Agent ⊆ 上下文工程",
            "独立三理由（隔离/权限/异步）",
            "缓存处方表（双轴修正后）",
          ],
        },
        {
          title: "需关注",
          items: [
            "新焊家族树防复发（D30 9/09 首验）",
            "缓存时效轴的运用习惯（报题要用题）",
            "上下文工程五种类型已褪色 → 08-19 抢救",
            "上下兄弟问三句：用到条件反射为止",
          ],
          tone: "warn",
        },
        {
          title: "后续排期",
          items: [
            "08-18：开发核心模式 D2 + A 层六单元 D2（趁新鲜清账）",
            "08-19：上下文工程 D2+D7 合并抢救",
            "08-20：智能体协议 D2+D7 合并抢救",
            "09-09：记忆系统 D30 综合压测",
          ],
        },
      ],
      tags: [
        "Agent 记忆系统",
        "D7",
        "D2 补验",
        "上下兄弟问三句",
        "Mem0",
        "缓存生死题",
        "语义缓存 vs 提示词缓存",
        "⊆ 关系迁移",
        "锈钉重焊",
      ],
    },
  },
];

export const reviewTasks: ReviewTask[] = [
  {
    id: "trustworthy-d2",
    dueDate: "2026-06-03",
    title: "构建可信赖 AI Agent D2",
    stage: "D2",
    type: "due",
    estimate: "8 min",
    description:
      "复习可信赖 Agent 初学内容。重点检查 5 类威胁和 3 档安全边界，核对是否漏掉级联错误和人类审批边界。",
    relatedRecordIds: ["2026-06-02-trustworthy-agent"],
    completed: true,
  },
  {
    id: "planning-d2",
    dueDate: "2026-06-04",
    title: "Planning Design D2",
    stage: "D2",
    type: "due",
    estimate: "10 min",
    description:
      "复习 Planning Design 核心。闭卷复述合格 Plan 包含的 6 个核心字段，特别注意不能漏掉约束。",
    relatedRecordIds: ["2026-06-03-planning-design"],
    completed: true,
  },
  {
    id: "rest-0601",
    dueDate: "2026-06-01",
    title: "不安排复习",
    stage: "整合日",
    type: "rest",
    estimate: "0 min",
    description:
      "让 5/31 的新焊点自然整合：线性 vs 指数、局部低阶 N、截断与降幂。",
    relatedRecordIds: ["2026-05-31-error-accumulation-tcc-linear-exponential"],
  },
  {
    id: "tcc-error-d7",
    dueDate: "2026-06-04",
    title: "TCC 三人组 + 错误累积传递链 + checkpoint",
    stage: "D7",
    type: "due",
    estimate: "12 min",
    description:
      "跨章节综合题。重点检查 checkpoint 为什么属于 Controllable，以及它如何把长指数切成局部低阶 N。",
    relatedRecordIds: ["2026-05-31-error-accumulation-tcc-linear-exponential"],
    completed: true,
  },
  {
    id: "rest-0605",
    dueDate: "2026-06-05",
    title: "不安排复习",
    stage: "整合期",
    type: "rest",
    estimate: "0 min",
    description:
      "让 6/4 的跨章节连接（checkpoint 的多重身份）和补漏口诀自然整合。",
    relatedRecordIds: ["2026-06-04-tcc-planning-design-trustworthy-agent"],
  },
  {
    id: "planning-trustworthy-d7",
    dueDate: "2026-06-09",
    title: "Planning Design + 可信赖 Agent D7 综合压测",
    stage: "D7",
    type: "due",
    estimate: "15 min",
    description:
      "5题闭卷及跨章节关联题。重点验证 Planning 约束字段 and 五威胁级联是否焊死。",
    relatedRecordIds: ["2026-06-10-planning-design-d7-tuili-d60"],
    completed: true,
  },
  {
    id: "reasoning-compute-d60",
    dueDate: "2026-06-09",
    title: "推理时计算 D60 综合压测",
    stage: "D60",
    type: "scheduled",
    estimate: "18 min",
    description: "RLHF × 推理时计算交叉复习。该条目前还未迁移具体详情。",
    relatedRecordIds: ["2026-06-10-planning-design-d7-tuili-d60"],
    completed: true,
  },
  {
    id: "cache-claude-context-d30",
    dueDate: "2026-06-12",
    title: "缓存 + Claude Code 上下文管理",
    stage: "D30",
    type: "scheduled",
    estimate: "15 min",
    description: "5/21 双毕业项回访。后续可迁移对应 HTML 后关联详情。",
    relatedRecordIds: ["2026-06-13-huancun-context-d30"],
    completed: true,
  },
  {
    id: "rlhf-confidence-d30",
    dueDate: "2026-06-16",
    title: "RLHF 偏向自信",
    stage: "D30",
    type: "scheduled",
    estimate: "15 min",
    description:
      '检查 RLHF 为什么会强化"看起来很确定"的表达，以及如何识别幻觉风险。',
    relatedRecordIds: ["2026-06-23-rlhf-pian-xiang-zi-xin-d30"],
    completed: true,
  },
  {
    id: "error-accumulation-d30",
    dueDate: "2026-06-27",
    title: "错误累积 D30 综合压测",
    stage: "D30",
    type: "scheduled",
    estimate: "20 min",
    description:
      '含 checkpoint 工程场景题：用"线性 vs 指数"钥匙审视未知新方案。',
    relatedRecordIds: ["2026-05-31-error-accumulation-tcc-linear-exponential"],
    completed: true,
  },
  {
    id: "linear-exponential-d30",
    dueDate: "2026-06-30",
    title: "线性 vs 指数钥匙 D30 综合压测",
    stage: "D30",
    type: "scheduled",
    estimate: "20 min",
    description: "给一个新场景，如缓存衰减或注意力衰减，用今天的钥匙独立拆解。",
    relatedRecordIds: ["2026-05-31-error-accumulation-tcc-linear-exponential"],
    completed: true,
  },
  {
    id: "cuowu-leiji-xianxing-zhishu-d30-plus",
    dueDate: "2026-07-16",
    title: "错误累积 + 线性vs指数 D30+ 术语追击",
    stage: "D30+",
    type: "scheduled",
    estimate: "10 min",
    description:
      "术语追击：① 闭卷默写 1 − p^N + 心算 0.85^12 ② 三术语（局部低阶N · 动别的 · 可中断可恢复可指导）一字不差 ③ 给新场景用线性vs指数钥匙拆解。",
    relatedRecordIds: ["2026-07-09-cuowu-leiji-xianxing-zhishu-d30"],
    completed: true,
  },
  {
    id: "duo-dai-li-d2",
    dueDate: "2026-06-06",
    title: "多代理设计模式 D2",
    stage: "D2",
    type: "scheduled",
    estimate: "10 min",
    description:
      '3 题闭卷：① 协同过滤本质必须答出"多视角并行+汇总"且亲手画 fan-out/fan-in 图（重点复检薄弱点）② 三种模式判断决策树（开放性/线性/多视角各对应哪种）③ "上下文隔离"用上下兄弟分层并归类到工程手段。',
    relatedRecordIds: ["2026-06-04-duo-dai-li-she-ji"],
    completed: true,
  },
  {
    id: "duo-dai-li-d7",
    dueDate: "2026-06-11",
    title: "多代理设计模式 D7 跨章节综合",
    stage: "D7",
    type: "scheduled",
    estimate: "15 min",
    description:
      '5 题含跨章节：① 多代理 vs 微服务三大差异（通信/调度/错误）② 用 LangGraph 描述协同过滤 fan-out/fan-in 实现（State/Node/Edge 设计）③ "主动选择"视角下多代理的设计哲学（补痛点驱动的盲点）④ 误用多代理的 3 个坏后果 ⑤ "tool 子集划分"必须答出（D2 遗留）。',
    relatedRecordIds: ["2026-06-04-duo-dai-li-she-ji"],
    completed: true,
  },
  {
    id: "duo-dai-li-d30",
    dueDate: "2026-07-04",
    title: "多代理设计模式 D30 综合应用",
    stage: "D30",
    type: "scheduled",
    estimate: "20 min",
    description:
      '综合题：用今天学的多代理思维重新审视一个以前用 LangGraph 写过的项目，回答"如果重做会用哪种模式 + 为什么"，并把这一章和 Planning Design / 可信赖 Agent 缝合在一起。D30 追击：① 多代理 vs 微服务三维度精准表达 ② "错误源放大"肌肉记忆 ③ 误用三后果口诀"开销·扩散·调试"。',
    relatedRecordIds: ["2026-06-04-duo-dai-li-she-ji"],
    completed: true,
  },
  {
    id: "planning-trustworthy-d30",
    dueDate: "2026-07-07",
    title: "Planning Design + 可信赖 Agent D30 综合压测",
    stage: "D30",
    type: "scheduled",
    estimate: "20 min",
    description:
      '综合压测含安全边界场景追击。重点：① 给 3-5 个新场景判断三档安全边界（D7 b/c 判反的追击）② Plan 六字段闭卷默写 + 举例 ③ 五威胁闭卷 + "越权"不被替代 ④ 跨章节：用依赖关系 + 安全边界 + checkpoint 设计一个完整执行计划。',
    relatedRecordIds: ["2026-06-03-planning-design", "2026-06-02-trustworthy-agent"],
    completed: true,
  },
  {
    id: "planning-trustworthy-duo-dai-li-q3-review",
    dueDate: "2026-10-07",
    title: "Planning + 可信赖 + 多代理 · 季度综合回访",
    stage: "季度回访",
    type: "scheduled",
    estimate: "30 min",
    description:
      '三章 D30 已全部毕业，进入长期存档。以一个全新场景（如"多代理客服系统"或"多代理代码审查系统"）重新压测三章缝合能力。重点追击 2026-07-07 标红的三个 D30+ 追击点：① 落地层不退回纯串行·画图前主动找 fan-out ② 档① 是默认档·别过度保守 ③ "约束不遵守" ≠ 幻觉·Plan 验收失灵是独立维度。',
    relatedRecordIds: [
      "2026-06-03-planning-design",
      "2026-06-02-trustworthy-agent",
      "2026-06-04-duo-dai-li-she-ji",
      "2026-07-07-planning-trustworthy-duo-dai-li-d30",
    ],
  },
  {
    id: "yuan-ren-zhi-d2",
    dueDate: "2026-06-26",
    title: "元认知 Metacognition D2",
    stage: "D2",
    type: "scheduled",
    estimate: "10 min",
    description:
      '3题闭卷：① 元认知 vs 纠错的本质区别（必须答出"改策略不只改答案"）② LLM 为什么不能独立实现元认知（必须答出"无状态性"）③ 纠正型 RAG vs 先发式加载的触发时机和触发条件。',
    relatedRecordIds: ["2026-06-24-yuan-ren-zhi"],
    completed: true,
  },
  {
    id: "yuan-ren-zhi-d7",
    dueDate: "2026-07-01",
    title: "元认知 Metacognition D7 跨章节综合",
    stage: "D7",
    type: "scheduled",
    estimate: "15 min",
    description:
      '5题含跨章节关联：① 酒店 Agent 元认知三步流程默写 ② Over-Reflection 判断标准（给3个场景判断该不该反思）③ ReAct vs ReAct+Reflection 的差异用一句话说清 ④ 元认知 × 多代理：多代理系统中元认知应该放在哪一层？⑤ 元认知 × 错误累积：元认知如何帮助切短 N？',
    relatedRecordIds: ["2026-06-24-yuan-ren-zhi"],
    completed: true,
  },
  {
    id: "yuan-ren-zhi-d30",
    dueDate: "2026-07-24",
    title: "元认知 Metacognition D30 综合应用",
    stage: "D30",
    type: "scheduled",
    estimate: "20 min",
    description:
      '综合压测：① 给一个新 Agent 场景，设计元认知模块（包含何时触发反思、反思什么、如何调整策略）② 跨章节缝合：元认知 × 可信赖Agent × 错误累积——元认知如何提升 Agent 的可信赖性？③ 实际项目回顾：你的 ReAct Agent 加了 Reflection 后效果如何？',
    relatedRecordIds: ["2026-06-24-yuan-ren-zhi"],
  },
  {
    id: "sheng-chan-huan-jing-d2",
    dueDate: "2026-06-27",
    title: "生产环境可观测性与评估 D2",
    stage: "D2",
    type: "scheduled",
    estimate: "10 min",
    description:
      '3题闭卷：① Trace/Span 的定义与树形结构关系（必须答出"Span可嵌套子Span"）② 在线/离线评估的区别及迭代闭环五步 ③ 成本三策略串联顺序与各自角色（缓存围栏→路由分发→小模型兜底）',
    relatedRecordIds: ["2026-06-25-sheng-chan-huan-jing"],
    completed: true,
  },
  {
    id: "sheng-chan-huan-jing-d7",
    dueDate: "2026-07-02",
    title: "生产环境可观测性与评估 D7 跨章节综合",
    stage: "D7",
    type: "scheduled",
    estimate: "15 min",
    description:
      '5题含跨章节：① 可观测性四大价值完整列举 ② 多代理系统中 Trace/Span 的树形结构如何变化 ③ 评估闭环 × 错误累积：评估如何帮助切短 N ④ 成本缓存 × 之前学的缓存三兄弟对比 ⑤ 可观测性 × TCC Transparent 的关联',
    relatedRecordIds: ["2026-06-25-sheng-chan-huan-jing"],
    completed: true,
  },
  {
    id: "sheng-chan-huan-jing-d30",
    dueDate: "2026-07-25",
    title: "生产环境可观测性与评估 D30 综合应用",
    stage: "D30",
    type: "scheduled",
    estimate: "20 min",
    description:
      '综合压测：给一个新 Agent 场景（如客服多代理系统），设计完整的：① 可观测性方案（Trace/Span 结构设计 + 关键指标选择）② 评估体系（离线测试集设计 + 在线监控指标 + 闭环流程）③ 成本管理方案（三策略如何串联应用）。跨章节缝合：与多代理、可信赖Agent、错误累积的连接。',
    relatedRecordIds: ["2026-06-25-sheng-chan-huan-jing"],
  },
  {
    id: "cuowu-leiji-xianxing-zhishu-quarterly",
    dueDate: "2026-10-17",
    title: "错误累积 + 线性vs指数 · 季度回访验肌肉",
    stage: "季度回访",
    type: "scheduled",
    estimate: "15 min",
    description:
      "验证 D30+ 术语追击（7/17）焊死的三个术语是否进入长期肌肉记忆：① 闭卷默写 1 − p^N + 心算 0.85^12 vs 0.9^10（底数<1 反向规律不复发）② 三术语一字不差：局部低阶N · 动别的（既没改N也没改P）· 可中断可恢复可指导 ③ 给全新场景用线性vs指数钥匙拆解 + 设计上下文 checkpoint（save→reset→continue 骨架不漏 save）。",
    relatedRecordIds: ["2026-07-17-cuowu-leiji-xianxing-zhishu-zhui-ji"],
  },
  {
    id: "yuan-ren-zhi-quarterly",
    dueDate: "2026-10-24",
    title: "元认知 Metacognition · 季度回访验长期记忆",
    stage: "季度回访",
    type: "scheduled",
    estimate: "20 min",
    description:
      "元认知 D30(7/27) 进入长期记忆区后首次季度回访。重点验三件新焊点是否退化：① 协调层元认知上下兄弟分层（防复发为质检/纠错家族）② 无状态三缺失+双层级路由的独立设计能力 ③ 五类威胁/三档安全边界首轮提取速度。给全新 Agent 场景设计元认知模块 + 跨章节缝合（元认知×可信赖Agent×错误累积）。",
    relatedRecordIds: ["2026-07-27-yuan-ren-zhi-d30"],
  },
  {
    id: "zhi-neng-ti-xie-yi-d2",
    dueDate: "2026-08-20",
    title: "智能体协议 MCP · A2A · NLWeb D2",
    stage: "D2",
    type: "due",
    estimate: "10 min",
    description:
      '3 题闭卷：① MCP 三大能力（Tools/Resources/Prompts）及三者关系（并列能力入口，非 Tool 操作 Resource）② A2A 四大组件及完整协作流程（Agent Card→Executor→Artifact→Event Queue）③ MCP vs A2A 核心分界判据（需要自己的大脑吗？）并举例说明。',
    relatedRecordIds: ["2026-08-03-zhi-neng-ti-xie-yi"],
  },
  {
    id: "zhi-neng-ti-xie-yi-d7",
    dueDate: "2026-08-20",
    title: "智能体协议 MCP · A2A · NLWeb D7 跨章节综合",
    stage: "D7",
    type: "scheduled",
    estimate: "15 min",
    description:
      '5 题跨章节关联：① MCP vs 传统 API 的完整对比（三大优势 + 历史视角旧方案缺陷）② A2A Event Queue 缺失的四个生产级灾难 ③ MCP × 可信赖 Agent：MCP 标准化安全 vs 三档安全边界的关系 ④ A2A × 多代理设计模式：群聊/转接/协同过滤在 A2A 协议层如何支撑 ⑤ MCP = Adapter + Discovery 设计模式深度解析。',
    relatedRecordIds: ["2026-08-03-zhi-neng-ti-xie-yi"],
  },
  {
    id: "zhi-neng-ti-xie-yi-d30",
    dueDate: "2026-09-02",
    title: "智能体协议 MCP · A2A · NLWeb D30 综合应用",
    stage: "D30",
    type: "scheduled",
    estimate: "20 min",
    description:
      '综合压测：给你一个实际项目场景（如多 Agent 客服系统），设计完整的：① MCP Server 列表（每个 Server 暴露哪些 Tools/Resources/Prompts）② A2A Agent 协作拓扑（Agent Card 设计 + 委托流程 + Event Queue 策略）③ MCP/A2A 分界线判定（哪些用 Tool、哪些用 Agent、为什么）。跨章节缝合：与多代理设计模式、可信赖 Agent、Planning Design 的连接。',
    relatedRecordIds: ["2026-08-03-zhi-neng-ti-xie-yi"],
  },
  {
    id: "shang-xia-wen-gong-cheng-d2",
    dueDate: "2026-08-19",
    title: "上下文工程 Context Engineering D2",
    stage: "D2",
    type: "due",
    estimate: "10 min",
    description:
      '3 题闭卷：① 上下文工程 vs 提示工程的核心区别（必须在回答中出现"静态"和"动态"这对反义词）② 四种失败模式一字不差默写 + 每种举一个你项目中的真实场景 ③ 给出对话历史爆炸、工具过多、知识矛盾三个场景，分别说出对应的失败模式和管理策略。注意：混淆 vs 分心的区分是本次 D2 重点验证项。',
    relatedRecordIds: ["2026-08-06-shang-xia-wen-gong-cheng"],
  },
  {
    id: "shang-xia-wen-gong-cheng-d7",
    dueDate: "2026-08-19",
    title: "上下文工程 Context Engineering D7 跨章节综合",
    stage: "D7",
    type: "scheduled",
    estimate: "15 min",
    description:
      '5 题跨章节关联：① 在你的实际项目中设计上下文管理方案（哪些类型需要压缩？哪些需要动态注入？）② 上下文压缩 × 缓存三兄弟的互补关系 ③ MCP × 上下文混淆：连接 10 个 MCP Server 后如何管理工具上下文？④ 多代理 × 上下文隔离：多 Agent 系统如何利用上下文工程防止分心？⑤ 元认知 × 上下文工程：元认知如何帮助检测上下文中毒和冲突？',
    relatedRecordIds: ["2026-08-06-shang-xia-wen-gong-cheng"],
  },
  {
    id: "shang-xia-wen-gong-cheng-d30",
    dueDate: "2026-09-05",
    title: "上下文工程 Context Engineering D30 综合应用",
    stage: "D30",
    type: "scheduled",
    estimate: "20 min",
    description:
      '综合压测：给你一个实际的多 Agent 项目场景，设计完整的上下文管理方案：① 识别所有五种上下文类型及其爆炸风险 ② 针对每种风险设计管理策略（压缩/剪枝/动态注入/沙箱/代理便签）③ 跨章节缝合：上下文工程 × 多代理设计模式 × 可信赖 Agent × 元认知——上下文管理如何提升整个 Agent 系统的可靠性和稳定性？④ 框架层 vs Agent 层：你的方案中哪些放在框架层（原语）、哪些由 Agent 自主配置？',
    relatedRecordIds: ["2026-08-06-shang-xia-wen-gong-cheng"],
  },
  {
    id: "agent-memory-d2",
    dueDate: "2026-08-12",
    title: "Agent 记忆系统 Agent Memory D2",
    stage: "D2",
    type: "due",
    estimate: "10 min",
    description:
      '3 题闭卷：① 六种记忆类型层级图默画（必须用三层结构：概念总称 → 时效/内容维度 → 底层工具）② 知识 Agent 双角色（存档员+情报员）完整描述 ③ 用"上下兄弟问三句"给六种记忆类型分层。',
    relatedRecordIds: ["2026-08-10-agent-memory"],
  },
  {
    id: "agent-memory-d7",
    dueDate: "2026-08-17",
    title: "Agent 记忆系统 Agent Memory D7 跨章节综合",
    stage: "D7",
    type: "scheduled",
    estimate: "15 min",
    description:
      '5 题跨章节关联：① Mem0 两阶段流水线 + 三种存储（向量/图/KV）各解决什么问题 ② Memory × 元认知对比（两种元层级审视的异同）③ Memory × 上下文工程 ⊂ 关系验证 ④ Memory × 多代理专业化原则（为什么知识 Agent 要独立？）⑤ 缓存两道生死题套用到四种记忆类型的缓存策略。',
    relatedRecordIds: ["2026-08-10-agent-memory"],
  },
  {
    id: "agent-memory-d30",
    dueDate: "2026-09-09",
    title: "Agent 记忆系统 Agent Memory D30 综合应用",
    stage: "D30",
    type: "scheduled",
    estimate: "20 min",
    description:
      '综合压测：给你一个实际 Multi-Agent 项目场景，设计完整的记忆系统：① 知识 Agent 架构设计（存档员+情报员双角色）② 记忆类型选择（哪些类型需要、为什么）③ 存储方案（Mem0 风格三种存储混合的理由）④ 与现有 Agent 的集成方案。跨章节缝合：Memory × 元认知 × 上下文工程 × 可信赖 Agent —— 记忆系统如何提升 Agent 整体的可靠性和稳定性？',
    relatedRecordIds: ["2026-08-10-agent-memory", "2026-08-17-agent-memory-d7"],
  },
  {
    id: "agent-kai-fa-d2",
    dueDate: "2026-08-18",
    title: "Agent 开发核心模式 D2",
    stage: "D2",
    type: "due",
    estimate: "10 min",
    description:
      "3 题闭卷：① Agent 由哪五样东西装配而成？model 负责什么？（必须点出 model 是大脑、决定调哪个工具）② Middleware 链里 Clarification 为什么必须放最后？（必须提到 interrupt() 被 try/catch 误抓）③ 用“整理周报但没传文件”场景默写 HITL 完整链条（必须分清 ask_clarification/interrupt()/HITL暂停 三层）。",
    relatedRecordIds: ["2026-08-13-agent-kai-fa"],
  },
  {
    id: "agent-kai-fa-d7",
    dueDate: "2026-08-20",
    title: "Agent 开发核心模式 D7 跨章节综合",
    stage: "D7",
    type: "scheduled",
    estimate: "15 min",
    description:
      "5 题跨章节关联：① interrupt() vs mergeSandbox throw 机制区分（一个是信号该放行、一个是真错误该抓，同一个 try/catch 区别对待）② Skills 渐进披露 × 上下文工程（保护 prefix cache 的理由）③ checkpointer × Agent 记忆系统（短期记忆 vs 长期记忆）④ fail-closed × 可信赖 Agent 安全边界（安全维度 vs 正确性维度）⑤ Subagent 限流防的是失控而非慢。重点核查层级是否还清晰。",
    relatedRecordIds: ["2026-08-13-agent-kai-fa"],
  },
  {
    id: "agent-kai-fa-d30",
    dueDate: "2026-09-12",
    title: "Agent 开发核心模式 D30 综合应用",
    stage: "D30",
    type: "scheduled",
    estimate: "20 min",
    description:
      "综合压测：给“读文件+联网搜索+生成新文件”的实时聊天场景，设计完整 agent：① Factory 装配（五零件各填什么）② Middleware 链顺序（说出每层为何这个位置）③ State reducer 设计（哪些字段需要 reducer、用 fail-closed 还是覆盖）④ Sandbox 写文件流程（LLM→工具→Command→reducer）⑤ HITL 何时触发。并指出：哪些是框架层原语（如 reducer、interrupt）、哪些由 Agent 自主配置（如工具裁剪、middleware 开关）。跨章节缝合：Agent 开发 × 上下文工程 × 记忆系统 × 可信赖 Agent。",
    relatedRecordIds: ["2026-08-13-agent-kai-fa"],
  },
  {
    id: "agent-a-ceng-d2",
    dueDate: "2026-08-18",
    title: "Agent 开发 A 层六单元 D2",
    stage: "D2",
    type: "due",
    estimate: "12 min",
    description:
      "3 题闭卷：① 教学包五层中间件顺序+各层钩子（消毒双 wrap/错误恢复 wrapToolCall/循环检测 afterModel/限流 afterModel/澄清 wrapToolCall 最后）② reducer 签名默写 + 缺席 vs 清空的协议语义 ③ 为什么日期不能进 system prompt（prefix cache 的前缀机制 + DynamicContextMiddleware 注入消息流）。",
    relatedRecordIds: ["2026-08-14-agent-a-ceng"],
  },
  {
    id: "agent-a-ceng-d7",
    dueDate: "2026-08-21",
    title: "Agent 开发 A 层六单元 D7 跨单元综合",
    stage: "D7",
    type: "scheduled",
    estimate: "18 min",
    description:
      "5 题跨单元：① 软引导 vs 硬强制 × 风险分级（各举两例）② interrupt 穿透 × 中间件顺序（为什么澄清最后 + 错误恢复放行）③ fail-closed × 可信赖 Agent 安全边界（框架层 InvalidUpdateError vs 业务层 sandbox 冲突）④ 子代理上下文隔离 × 上下文工程（自包含 prompt 的因果链）⑤ tool_call 配对 × 消息协议（dangling call 为什么被厂商拒收）。重点核查层级是否还清晰。",
    relatedRecordIds: ["2026-08-14-agent-a-ceng"],
  },
  {
    id: "agent-a-ceng-d30",
    dueDate: "2026-09-13",
    title: "Agent 开发 A 层 D30 综合应用",
    stage: "D30",
    type: "scheduled",
    estimate: "25 min",
    description:
      "综合压测：给一个真实场景（如'读文件+联网搜索+生成周报'的实时聊天），设计完整 agent：① 工具集裁剪（哪些场景裁掉哪些工具）② 中间件链设计（每层位置的理由）③ state reducer 设计（哪些 key 需要 reducer、fail-closed 还是覆盖）④ HITL 确认点设置（软引导还是硬强制，为什么）⑤ 子代理拆分与限流（prompt 自包含检查清单）⑥ 上下文预算（静态前缀/动态注入/披露层级）。跨单元缝合：A1×A2×A3×A4×A5×A6 全部用上。",
    relatedRecordIds: ["2026-08-14-agent-a-ceng"],
  },
];

