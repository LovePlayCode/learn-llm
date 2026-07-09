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
];

