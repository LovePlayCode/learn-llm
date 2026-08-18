import { Card } from '@heroui/react';

const stats = [
  { value: '9', label: '总题量', color: 'text-[#c9b687]' },
  { value: '2', label: 'D7 通过', color: 'text-[#6b89a8]' },
  { value: '1', label: 'D60 毕业', color: 'text-[#5a9a7a]' },
  { value: '3', label: '红点无复发', color: 'text-[#eef0f3]' },
];

const d7Results = [
  { topic: 'Plan 六字段', result: '5/6 首轮', detail: '漏"依赖关系"，提示后秒出。"约束"从 D2 漏 → D7 首轮记住 → 焊死。', pass: true },
  { topic: '五威胁', result: '4/5 首轮', detail: '把"身份冒充"混入（它是注入的子手法）。漏"越权"。"级联"从 D2 漏 → D7 首轮答出 → 焊死。', pass: true },
  { topic: '安全边界三档', result: 'b/c 判反', detail: 'git push --force 判为"审批"（应为禁止）；发邮件判为"禁止"（应为审批）。', pass: false },
  { topic: 'Checkpoint 双重身份', result: '两身份全答出', detail: '工程容错（局部低阶N） + 安全治理（审批关卡）。追问"为什么同一机制"答出"暂停点"。', pass: true },
  { topic: '依赖 × 安全边界', result: '方向正确', detail: '"在依赖交接处插入检查点"——正确位置。追问后理解扇出节点优先级。', pass: true },
];

const d60Results = [
  { topic: '分层钥匙', result: '框架对 / 成员模糊', detail: '双维度切法记得。维度 B 四兄弟提取失败（两月退化）。', pass: true },
  { topic: 'RLHF × 验证器', result: '因果链完整', detail: '答出"验证器最易被欺骗" + 比较式信号因果链。', pass: true },
  { topic: '自洽性命名', result: '秒答', detail: 'Best-of-N + 多数投票 = 自洽性。命名通道稳。', pass: true },
  { topic: 'N > 400 反转', result: '机制答对', detail: '对抗性输出欺骗验证器。跨钥匙拓展合理放过。', pass: true },
];

const redPointStatus = [
  { name: '#1 钥匙主动启动', status: '不复发', evidence: '无提示直接用框架组织答案' },
  { name: '#2 命名通道', status: '不复发', evidence: '"自洽性"秒答' },
  { name: '#3 跨问一致性', status: '不复发', evidence: '全程无自相矛盾' },
];

const causalChain = [
  '人类标注员用比较式信号（A 比 B 好）训练奖励模型',
  '比较时，人类天然倾向选更确定、更流畅的回答',
  '奖励模型学到："自信 = 高分"',
  'PPO 阶段，基础模型为拿高分，学会用自信语气表达',
  '推理时计算用验证器打分时，同样的偏好带入选择环节',
];

const nextActions = [
  ['6/11', '多代理设计模式 D7 跨章节综合（5 题）'],
  ['6/12', '缓存 + Claude Code 上下文管理 D30 回访'],
  ['7/7', 'Planning Design + 可信赖 Agent D30（含安全边界场景追击）'],
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

function Review20260610PlanningDesignD7TuiLi() {
  return (
    <article className="react-review-page">
      {/* HERO */}
      <section className="react-review-hero">
        <span className="eyebrow">REVIEW · 2026 · 06 · 10 · Planning Design D7 + 可信赖 Agent D7 + 推理时计算 D60</span>
        <h1>双 D7 通过 · 推理时计算<strong> D60 毕业</strong></h1>
        <p>
          上半场：Planning Design + 可信赖 Agent D7 综合 5 题通过。六字段"约束"焊死、五威胁"级联"焊死。安全边界三档判断需 D30 追击。
          下半场：推理时计算 D60 压测 4 题通过。分层钥匙自动启动，命名通道稳定，红点全不复发。正式进入长期记忆区。
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

      {/* SECTION 01 · D7 Results */}
      <ReviewSection eyebrow="SECTION 01 · Planning Design + 可信赖 Agent D7" title="口诀焊死验证 · 三档判断暴露缺口">
        <div className="space-y-3">
          {d7Results.map((row, idx) => (
            <Card className="react-review-card" key={idx}>
              <Card.Content className="flex items-start gap-4">
                <span className={`font-mono text-xs shrink-0 mt-1 ${row.pass ? 'text-[#5a9a7a]' : 'text-[#a86b5c]'}`}>
                  {row.pass ? '✓' : '⚠'}
                </span>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <strong className="text-[#eef0f3] text-sm">{row.topic}</strong>
                    <span className="font-mono text-xs text-[#8a929e]">{row.result}</span>
                  </div>
                  <p className="text-xs text-[#b6bec8] leading-relaxed">{row.detail}</p>
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>

        <pre className="react-review-ascii">{`安全边界三档判断口诀：

自动执行 → 看看而已（只读/无副作用）
人类审批 → 让我看一眼（有副作用，确认后可做）
绝对禁止 → 打死不干（不可逆 + 灾难级 / 无论谁要求都不该做）

核心辨别："确认后可以做" vs "即使确认了也不应该做"
⚠️ 本次 b/c 判反 → D30 追击`}</pre>
      </ReviewSection>

      {/* SECTION 02 · Checkpoint */}
      <ReviewSection eyebrow="SECTION 02 · Checkpoint 双重身份 · 跨章节核心交汇" title="同一个暂停点：两件事同时干">
        <div className="react-review-grid two">
          <Card className="react-review-card">
            <Card.Header>
              <Card.Description>身份 A · 工程容错</Card.Description>
              <Card.Title>存档点 · 局部低阶 N</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-sm text-[#b6bec8]">把 p^N 长指数切成多段短链，每段可独立重试。降低连续成功的指数级压力。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card">
            <Card.Header>
              <Card.Description>身份 B · 安全治理</Card.Description>
              <Card.Title>审批关卡 · 红色大按钮</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-sm text-[#b6bec8]">高风险操作前暂停执行，等人类确认后再放行。拦住不可逆副作用。</p>
            </Card.Content>
          </Card>
        </div>

        <blockquote className="border-l-3 border-[#6b89a8] pl-6 py-4 my-6 bg-[#6b89a8]/5 text-sm text-slate-200 rounded-r-lg">
          本质动作相同：在连续执行流中<strong>插入一个暂停点</strong>。暂停之后拿来干什么取决于场景——存档回退 or 人类审批——但"断开连续性"这个物理动作是同一个。
        </blockquote>

        <pre className="react-review-ascii">{`依赖关系 × 安全边界 = 防级联策略

A ──→ B ──→ C ──→ D      （依赖链 = 数据流方向）
       │           │
  [checkpoint]  [checkpoint]   （在传播路径上设卡）

插入位置优先级：
1. 扇出节点（一个输出喂给多个下游）→ 影响面最大
2. 不可逆操作前（部署/写入/外部 API 调用）
3. 避免全量审批疲劳（不是每步都审，只卡关键路径）`}</pre>
      </ReviewSection>

      {/* SECTION 03 · D60 */}
      <ReviewSection eyebrow="SECTION 03 · 推理时计算 D60 · 红点检测 + 毕业" title="钥匙没生锈 · 正式进入长期记忆区">
        <pre className="react-review-ascii">{`第 3 层（爷爷）        推理时计算（Test-Time Compute）
                            │
       ┌────────────────────┴────────────────────┐
维度 A · 如何生成更多回答              维度 B · 如何选择更好回答
       │                                         │
   ┌───┴────┐                                ┌───┴───┬─────────┬──────┐
Best-of-N  集束搜索                          对数概率  验证器  多数     用户
                                            重排序   打分   投票     选择
       │                                         │
       └────── 跨维度组合 ───→  自洽性  ←──────┘
                          = Best-of-N + 多数投票
                            │
第 1 层（底层工具）    采样 · 对数概率(数字) · 奖励模型(组件)`}</pre>

        <h3 className="text-[#eef0f3] text-base font-light mt-8 mb-4">红点复发检测</h3>
        <div className="space-y-2">
          {redPointStatus.map((rp, idx) => (
            <Card className="react-review-card" key={idx}>
              <Card.Content className="flex items-center gap-4">
                <span className="text-[#5a9a7a] font-mono text-xs shrink-0">✓</span>
                <strong className="text-[#eef0f3] text-sm shrink-0">{rp.name}</strong>
                <span className="text-[#5a9a7a] font-mono text-xs">{rp.status}</span>
                <span className="text-[#8a929e] text-xs ml-auto">{rp.evidence}</span>
              </Card.Content>
            </Card>
          ))}
        </div>

        <h3 className="text-[#eef0f3] text-base font-light mt-8 mb-4">D60 逐题结果</h3>
        <div className="space-y-3">
          {d60Results.map((row, idx) => (
            <Card className="react-review-card" key={idx}>
              <Card.Content className="flex items-start gap-4">
                <span className={`font-mono text-xs shrink-0 mt-1 ${row.pass ? 'text-[#5a9a7a]' : 'text-[#a86b5c]'}`}>
                  {row.pass ? '✓' : '⚠'}
                </span>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <strong className="text-[#eef0f3] text-sm">{row.topic}</strong>
                    <span className="font-mono text-xs text-[#8a929e]">{row.result}</span>
                  </div>
                  <p className="text-xs text-[#b6bec8] leading-relaxed">{row.detail}</p>
                </div>
              </Card.Content>
            </Card>
          ))}
        </div>
      </ReviewSection>

      {/* SECTION 04 · RLHF × 推理时计算 */}
      <ReviewSection eyebrow="SECTION 04 · RLHF × 推理时计算 · 交叉因果链" title="比较式信号 → 自信天然胜出 → 验证器被欺骗">
        <ol className="space-y-3 pl-4">
          {causalChain.map((step, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="font-mono text-xs text-[#6b89a8] shrink-0 mt-0.5">{`0${idx + 1}`}</span>
              <span className="text-sm text-[#d8dde3]">{step}</span>
            </li>
          ))}
        </ol>

        <details className="react-review-section details mt-6">
          <summary>自洽性的威力与天花板</summary>
          <div className="detail-body pt-3 space-y-3">
            <p className="text-sm text-[#b6bec8]"><strong className="text-[#5a9a7a]">威力：</strong>过滤偶然性错误。模型随机波动导致的偶尔答错，多次采样 + 多数投票可有效纠正。</p>
            <p className="text-sm text-[#b6bec8]"><strong className="text-[#a86b5c]">天花板：</strong>无法修正系统性错误。如果模型一致地理解错，8 个回答里 6 个都是同一个错误答案——"民主地选出错误"。频率 ≠ 真理。</p>
            <p className="text-sm text-[#c9b687]">为什么必须 Best-of-N：集束搜索角度一致、基数相似，投票等于自己投自己。Best-of-N 独立采样才有真正多样性。</p>
          </div>
        </details>

        <details className="react-review-section details mt-4">
          <summary>N &gt; ~400 反转：对抗性输出</summary>
          <div className="detail-body pt-3 space-y-3">
            <p className="text-sm text-[#b6bec8]">N 足够大时，采样空间里那些极端但恰好能骗过验证器的输出被抽到概率上升。RLHF 分数高但事实错误——不能无限加 N。</p>
            <p className="text-sm text-[#8a929e]">与"线性 vs 指数"钥匙：同一思维家族的远亲。共同点是"线性直觉失效"；不同点是数学结构不同（p^N 是指数衰减，N &gt; 400 是收益反转）。</p>
          </div>
        </details>
      </ReviewSection>

      {/* SECTION 05 · 下一步 */}
      <ReviewSection eyebrow="SECTION 05 · 复习计划 · 下一站" title="该回访谁">
        <div className="react-review-timeline">
          {nextActions.map((row, idx) => (
            <div className="react-review-timeline-row" key={idx}>
              <strong>{row[0]}</strong>
              <span>{row[1]}</span>
            </div>
          ))}
        </div>

        <ol className="react-review-checklist mt-6">
          <li><strong>安全边界口诀默念</strong> — "打死不干"= 不可逆灾难（force push / 泄密）；"让我看一眼"= 有副作用但合理（发邮件 / 修文件）。</li>
          <li><strong>五威胁整体背</strong> — 注入 · 越权 · 过载 · 投毒 · 级联。"越权"不要再被"身份冒充"替代。</li>
          <li><strong>推理时计算进入长期区</strong> — 不再单独安排复习。未来遇到相关场景时自然调用。</li>
        </ol>
      </ReviewSection>

      {/* FOOTER */}
      <footer className="react-review-footer">
        <div className="flex justify-between flex-wrap gap-4 text-xs font-mono text-[#8a929e] mb-6">
          <div>2026 · 06 · 10 · Planning Design D7 · 可信赖 Agent D7 · 推理时计算 D60</div>
          <div>9 题 · 3 主题 · 2 通过 · 1 毕业 · 3 红点无复发</div>
        </div>
        <div className="tag-row">
          {['Planning Design', '可信赖 Agent', '推理时计算', 'D7', 'D60', '安全边界', 'RLHF', '自洽性', 'Checkpoint', '频率≠真理'].map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </div>
      </footer>
    </article>
  );
}

export default Review20260610PlanningDesignD7TuiLi;
