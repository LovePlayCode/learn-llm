import { Card } from '@heroui/react';

const stats = [
  { value: '3', label: 'A层核心知识点', color: 'text-[#6b89a8]' },
  { value: '9', label: '追问题', color: 'text-[#eef0f3]' },
  { value: '3', label: '成本管理策略', color: 'text-[#c9b687]' },
  { value: '✓', label: '闭环机制自主推出', color: 'text-[#5a9a7a]' },
];

const weakPoints = [
  {
    title: '可观测性价值只说了 debug',
    body: '首答只提到"排查错误和优化"，遗漏了成本管理、安全合规审计、持续改进循环。经补充后理解完整。',
    status: '需加强',
  },
  {
    title: '缓存适用边界判断不够精确',
    body: '只说了"有固定答案"，更准确是"高频重复 + 答案相对稳定"。个性化强/上下文相关不适合缓存。',
    status: '需加强',
  },
  {
    title: '三策略初始认知为三选一',
    body: '第一轮把三策略当独立选项，经引导后理解为串联使用：缓存做围栏→路由做分发→小模型做兜底。',
    status: '已修复',
  },
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

function Review20260625ShengChanHuanJing() {
  return (
    <article className="react-review-page">
      {/* HERO */}
      <section className="react-review-hero">
        <span className="eyebrow">LEARN · 2026 · 06 · 25 · 生产环境 AI 代理</span>
        <h1>可观测性与评估：从<strong>黑盒</strong>到<strong>玻璃盒</strong></h1>
        <p>
          学习将 AI Agent 从实验室部署到生产环境时，如何通过 Trace/Span 结构实现可观测性，
          如何通过在线/离线评估形成迭代闭环，以及如何通过缓存/路由/小模型三策略管控成本。
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

      {/* SECTION 01 · Trace & Span */}
      <ReviewSection eyebrow="SECTION 01 · A层核心" title="Trace 与 Span：Agent 可观测性的骨架">
        <pre className="react-review-ascii">{`Trace（用户查询："帮我订明天去上海的机票"）
 └─ Span：Controller Agent（路由/编排）
      └─ Span：意图识别 Agent
      └─ Span：航班搜索 Agent
           └─ Span：调用航班 API
           └─ Span：解析结果
      └─ Span：订票 Agent
           └─ Span：调用支付 API
      └─ Span：生成最终回复

关键点：
• Trace = 一个用户任务的完整生命周期
• Span = 任务中的单个步骤
• 结构 = 树形（Span 可嵌套子 Span）
• 多代理 = 树更深更宽，但一个任务仍是一个 Trace`}</pre>

        <div className="react-review-grid two mb-6">
          <Card className="react-review-card border-[#c97a6b]/30">
            <Card.Header>
              <Card.Description className="text-[#c97a6b]">无可观测性</Card.Description>
              <Card.Title>黑盒</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">只知道整体耗时 8 秒、成功/失败。无法定位哪一步慢、哪一步贵、哪一步错。相当于只知道"病了"但不知道"哪个器官病了"。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card border-[#5a9a7a]/30">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">有可观测性</Card.Description>
              <Card.Title>玻璃盒</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">每一步的延迟、成本、输入输出透明可查。能精确到"是航班 API 超时"还是"LLM 生成太慢"。支持调试、成本管理、安全审计、持续改进。</p>
            </Card.Content>
          </Card>
        </div>

        <Card className="react-review-card border-[#6b89a8]/20 mb-4">
          <Card.Header>
            <Card.Description className="text-[#6b89a8]">可观测性四大价值</Card.Description>
            <Card.Title>不只是 Debug</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xs text-[#b6bec8]">① 调试与根因分析 ② 延迟与成本管理 ③ 信任、安全与合规（审计轨迹） ④ 持续改进循环（反馈闭环基础）。</p>
          </Card.Content>
        </Card>
      </ReviewSection>

      {/* SECTION 02 · 评估闭环 */}
      <ReviewSection eyebrow="SECTION 02 · A层核心" title="在线评估 vs 离线评估：迭代闭环">
        <pre className="react-review-ascii">{`离线评估 ──→ 部署 ──→ 在线监控 ──→ 收集新失败案例
    ↑                                        │
    └────── 添加到离线数据集 ←── 优化代理 ←──┘

离线评估                          在线评估
├─ 受控环境 + 已知答案测试集      ├─ 生产真实流量 + 实时监控
├─ 可嵌入 CI/CD 防止回归         ├─ 发现测试集无法预见的问题
├─ 可重复 + 明确准确性指标        ├─ 捕捉模型漂移 + 意外查询
└─ 确保上线前质量                 └─ 反映真实环境行为`}</pre>

        <Card className="react-review-card border-[#5a9a7a]/30 mb-4">
          <Card.Header>
            <Card.Description className="text-[#5a9a7a]">核心结论</Card.Description>
            <Card.Title>串联闭环，不是二选一</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xs text-[#b6bec8]">离线保证上线前质量，在线覆盖离线没考虑的边界。在线发现的新 case 回流到离线测试集，形成持续迭代。本次学习中<strong>自主推导出此闭环机制</strong>。</p>
          </Card.Content>
        </Card>
      </ReviewSection>

      {/* SECTION 03 · 成本管理 */}
      <ReviewSection eyebrow="SECTION 03 · A层核心" title="成本管理三策略：串联使用">
        <pre className="react-review-ascii">{`用户请求进来
  │
  ├── 缓存层先拦 ──→ 命中？直接返回（成本 ≈ 0）
  │                       适合：高频重复 + 答案稳定
  │                       不适合：个性化强 / 上下文相关
  │
  └── 未命中 → 路由模型判断复杂度
                 │
                 ├── 简单任务 → 小模型（SLM）
                 │              适合：意图分类 / 参数提取
                 │
                 └── 复杂推理 → 大模型（LLM）
                                适合：多步推理 / 创意生成

三者角色：
• 缓存 = 第一道防线（拦截最多请求）
• 路由 = 第二道（动态分发到合适模型）
• 小模型 = 整体架构决策（某类任务根本不需要大模型）`}</pre>

        <div className="react-review-grid two mb-6">
          <Card className="react-review-card border-[#c9b687]/30">
            <Card.Header>
              <Card.Description className="text-[#c9b687]">关键区分</Card.Description>
              <Card.Title>路由 vs 小模型</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">小模型策略：整体决策——"这类任务根本不需要大模型"（定死的）。路由策略：运行时决策——同一入口进来的请求动态判断去哪个模型（动态的）。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card border-[#c9b687]/30">
            <Card.Header>
              <Card.Description className="text-[#c9b687]">最终表述</Card.Description>
              <Card.Title>"缓存做围栏"</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">最终检索时用"先用缓存做围栏，如果没命中走路由"概括了三策略串联逻辑。形象且到位。</p>
            </Card.Content>
          </Card>
        </div>
      </ReviewSection>

      {/* SECTION 04 · B 层 */}
      <ReviewSection eyebrow="SECTION 04 · B层理解" title="关键指标与埋点">
        <div className="react-review-grid two mb-6">
          <Card className="react-review-card border-[#6b89a8]/20">
            <Card.Header>
              <Card.Description className="text-[#6b89a8]">六大指标</Card.Description>
              <Card.Title>Agent 健康状态监控</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">延迟 / 成本 / 请求错误率 / 用户反馈（显式 👍👎 + 隐式行为信号）/ 准确性 / 自动评估（LLM 评分 / RAGAS / LLM Guard）</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card border-[#6b89a8]/20">
            <Card.Header>
              <Card.Description className="text-[#6b89a8]">埋点思路</Card.Description>
              <Card.Title>OpenTelemetry</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">自动 Span（MAF 框架集成）+ 手动 Span（自定义业务属性：user_id, session_id, model_version）。行业标准，多平台支持。</p>
            </Card.Content>
          </Card>
        </div>
      </ReviewSection>

      {/* SECTION 05 · 薄弱点 */}
      <ReviewSection eyebrow="SECTION 05 · 学习复盘" title="薄弱点与亮点">
        {weakPoints.map((wp, idx) => (
          <Card className="react-review-card border-[#c97a6b]/20 mb-3" key={idx}>
            <Card.Header>
              <Card.Description className="text-[#c97a6b]">{wp.status}</Card.Description>
              <Card.Title>{wp.title}</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">{wp.body}</p>
            </Card.Content>
          </Card>
        ))}

        <Card className="react-review-card border-[#5a9a7a]/30 mb-3">
          <Card.Header>
            <Card.Description className="text-[#5a9a7a]">亮点</Card.Description>
            <Card.Title>在线/离线闭环自主推出</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xs text-[#b6bec8]">不仅说出"两者互补"，还自主推导出"在线发现的 case 回流到离线测试集"的迭代闭环机制。</p>
          </Card.Content>
        </Card>

        <Card className="react-review-card border-[#5a9a7a]/30 mb-3">
          <Card.Header>
            <Card.Description className="text-[#5a9a7a]">亮点</Card.Description>
            <Card.Title>多代理 × Trace 跨章节联想</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xs text-[#b6bec8]">主动联想到"多代理系统中 Trace/Span 的层级会变深"——跨章节连接能力在增强。</p>
          </Card.Content>
        </Card>
      </ReviewSection>

      {/* SECTION 06 · 复习计划 */}
      <ReviewSection eyebrow="SECTION 06 · 复习计划" title="间隔复习安排">
        <Card className="react-review-card border-[#c9b687]/20">
          <Card.Content>
            <p className="text-xs text-[#b6bec8] mb-2"><strong className="text-[#c9b687]">D2（2026-06-27）：</strong>3 题闭卷 — Trace/Span 树形结构含义、评估闭环五步、成本三策略串联顺序</p>
            <p className="text-xs text-[#b6bec8] mb-2"><strong className="text-[#c9b687]">D7（2026-07-02）：</strong>5 题含跨章节 — 可观测性 × 多代理（Trace 如何映射多 Agent）、评估 × 错误累积（评估如何帮助切短 N）、成本 × 缓存（对比之前学的缓存三兄弟）</p>
            <p className="text-xs text-[#b6bec8]"><strong className="text-[#c9b687]">D30（2026-07-25）：</strong>综合应用 — 给一个新 Agent 场景，设计完整的可观测性+评估+成本管理方案</p>
          </Card.Content>
        </Card>
      </ReviewSection>
    </article>
  );
}

export default Review20260625ShengChanHuanJing;
