function getLocalDateKey() {
  const now = new Date()

  return [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0'),
  ].join('-')
}

export const today = getLocalDateKey()

export type ReviewTask = {
  id: string
  dueDate: string
  title: string
  stage: string
  type: 'rest' | 'due' | 'scheduled'
  estimate: string
  description: string
  relatedRecordId?: string
}

export type ReviewRecord = {
  id: string
  date: string
  time: string
  title: string
  subtitle: string
  sourceFile: string
  summary: string
  detail: {
    lead: string
    stats: Array<{ value: string; label: string }>
    keyPoints: Array<{ label: string; title: string; body: string }>
    map: string
    sections: Array<{ title: string; body: string }>
    blindspots: Array<{ title: string; body: string }>
    highlights: Array<{ title: string; body: string }>
    report: Array<{ title: string; items: string[]; tone?: 'warn' }>
    tags: string[]
  }
}

export const reviewRecords: ReviewRecord[] = [
  {
    id: '2026-05-31-error-accumulation-tcc-linear-exponential',
    date: '2026-05-31',
    time: '晚间复习',
    title: '错误累积 D2 + TCC D3',
    subtitle: '线性 vs 指数钥匙焊死',
    sourceFile: '复习/2026-05-31-错误累积D2+TCC-D3+线性指数钥匙焊死.html',
    summary:
      '从累积错误率数字默写，上升到“线性 vs 指数”的思维家族，并把 TCC、checkpoint、局部低阶 N 串成同一把钥匙。',
    detail: {
      lead:
        '这次复习从数字默写上升到思维家族：真正留下来的不是 26% 和 97%，而是能拆未来所有链式过程的“线性 vs 指数”钥匙。',
      stats: [
        { value: '2', label: '关磨穿' },
        { value: '4', label: '金光时刻' },
        { value: '3', label: '表达精度复发并修复' },
        { value: '5', label: '钥匙跨章节实战累计' },
      ],
      keyPoints: [
        {
          label: '第一关 / D2',
          title: '97% × 10 步也会翻车 26%',
          body: '顶尖 Agent 每步 97% 看似很稳，但 10 步累积下来仍有约四分之一翻车率，这是“高精度长链条”的陷阱。',
        },
        {
          label: '第一关 / D2',
          title: '70% × 10 步几乎必翻车',
          body: '单步 70% 直觉上像“还行”，但 10 步连续成功只有 2.82%，累积错误率约 97.18%。这就是线性直觉和指数现实的鸿沟。',
        },
        {
          label: '第二关 / TCC',
          title: 'checkpoint = Controllable',
          body: 'TCC 三人组没有翻车：Transparent 看得见，Controllable 管得住，Consistency 信得过。checkpoint 挂在 Controllable 这一格。',
        },
        {
          label: '钥匙 / 抽象',
          title: '线性 vs 指数',
          body: '你没有停在“加法 vs 乘法”，而是上升到“线性思维 vs 指数思维”的家族层。这把钥匙以后能拆复利、传播、缓存衰减、注意力衰减。',
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
          title: '用公式拆三方案',
          body: '错误累积公式是 p^N。方案 A 动 N，缩短链路；方案 B 动 p，提高单步成功率；方案 C 动结构，把一个大 N 切成多个局部低阶 N。',
        },
        {
          title: 'checkpoint 的真正动作',
          body: 'checkpoint 不是“修补错误”，而是重新切分赌注：把必须连续 8 步全对的指数压力，拆成多段短指数加局部线性重试。',
        },
        {
          title: '数学命名升级',
          body: '从“切短累积分母”升级成“指数分段”，再升级成“局部低阶 N + 截断与降幂”。这是从听课到建模的跨越。',
        },
      ],
      blindspots: [
        {
          title: '把两个场景压扁成一句话',
          body: '“累积错误率 26%、97%”吞掉了单步 97% 和单步 70% 的前缀。修复方式是先把场景工整拆开。',
        },
        {
          title: '用泛词替代具体机制',
          body: '“大脑用直觉算”不够精确，需要说清楚是“线性/加法直觉”错估了“指数/乘法现实”。',
        },
        {
          title: '同义词循环定义',
          body: '“Controllable 因为可控制”没有解释内部动作。需要拆成恢复、重试、局部低阶 N。',
        },
      ],
      highlights: [
        {
          title: '抽象上升',
          body: '你站到了“线性 vs 指数”这个思维家族层，比老师预设的“加法 vs 乘法”还高一层。',
        },
        {
          title: '钥匙自动化',
          body: '“上下兄弟问三句”在 TCC 三方案那里自动响起，你主动反问“三个方案是不是同一层级”。',
        },
        {
          title: '跨章节缝合',
          body: 'TCC、错误累积、checkpoint、线性 vs 指数被缝到了一起，不再是孤立知识点。',
        },
        {
          title: 'Self-Correction 工程直觉',
          body: '你提到“把错误信息传给大模型，提高成功率”，这已经摸到了 Reflection / Self-Correction 的影子。',
        },
      ],
      report: [
        {
          title: 'A 层 · 必须深入',
          items: [
            '累积错误率 1 - p^N',
            'TCC 三字母',
            'checkpoint = Controllable',
            '线性 vs 指数思维家族',
            '局部低阶 N / 截断与降幂',
          ],
        },
        {
          title: '需要加强',
          items: ['表达精度', '解释“为什么”时拆内部动作', '避免同义词循环定义'],
          tone: 'warn',
        },
        {
          title: '横向连接',
          items: ['复利 / 通胀 / 病毒传播', '缓存命中率衰减', '多轮对话注意力衰减', '艾宾浩斯遗忘曲线'],
        },
      ],
      tags: ['错误累积', 'TCC', 'checkpoint', '线性 vs 指数', '上下兄弟问三句'],
    },
  },
]

export const reviewTasks: ReviewTask[] = [
  {
    id: 'rest-0601',
    dueDate: '2026-06-01',
    title: '不安排复习',
    stage: '整合日',
    type: 'rest',
    estimate: '0 min',
    description: '让 5/31 的新焊点自然整合：线性 vs 指数、局部低阶 N、截断与降幂。',
    relatedRecordId: '2026-05-31-error-accumulation-tcc-linear-exponential',
  },
  {
    id: 'tcc-error-d7',
    dueDate: '2026-06-04',
    title: 'TCC 三人组 + 错误累积传递链 + checkpoint',
    stage: 'D7',
    type: 'due',
    estimate: '12 min',
    description: '跨章节综合题。重点检查 checkpoint 为什么属于 Controllable，以及它如何把长指数切成局部低阶 N。',
    relatedRecordId: '2026-05-31-error-accumulation-tcc-linear-exponential',
  },
  {
    id: 'reasoning-compute-d60',
    dueDate: '2026-06-09',
    title: '推理时计算 D60 综合压测',
    stage: 'D60',
    type: 'scheduled',
    estimate: '18 min',
    description: 'RLHF × 推理时计算交叉复习。该条目前还未迁移具体详情。',
  },
  {
    id: 'cache-claude-context-d30',
    dueDate: '2026-06-12',
    title: '缓存 + Claude Code 上下文管理',
    stage: 'D30',
    type: 'scheduled',
    estimate: '15 min',
    description: '5/21 双毕业项回访。后续可迁移对应 HTML 后关联详情。',
  },
  {
    id: 'rlhf-confidence-d30',
    dueDate: '2026-06-16',
    title: 'RLHF 偏向自信',
    stage: 'D30',
    type: 'scheduled',
    estimate: '15 min',
    description: '检查 RLHF 为什么会强化“看起来很确定”的表达，以及如何识别幻觉风险。',
  },
  {
    id: 'error-accumulation-d30',
    dueDate: '2026-06-27',
    title: '错误累积 D30 综合压测',
    stage: 'D30',
    type: 'scheduled',
    estimate: '20 min',
    description: '含 checkpoint 工程场景题：用“线性 vs 指数”钥匙审视未知新方案。',
    relatedRecordId: '2026-05-31-error-accumulation-tcc-linear-exponential',
  },
  {
    id: 'linear-exponential-d30',
    dueDate: '2026-06-30',
    title: '线性 vs 指数钥匙 D30 综合压测',
    stage: 'D30',
    type: 'scheduled',
    estimate: '20 min',
    description: '给一个新场景，如缓存衰减或注意力衰减，用今天的钥匙独立拆解。',
    relatedRecordId: '2026-05-31-error-accumulation-tcc-linear-exponential',
  },
]
