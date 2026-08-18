import { Card } from '@heroui/react';

const stats = [
  { value: '5', label: '总题量', color: 'text-[#6b89a8]' },
  { value: '5', label: '通过', color: 'text-[#eef0f3]' },
  { value: '3', label: '跨章节关联题', color: 'text-[#c9b687]' },
  { value: '2', label: '自我修正', color: 'text-[#5a9a7a]' },
];

const d30Warnings = [
  {
    title: '四大价值未首轮分格子',
    body: '"debug"和"及时发现问题"撞车，安全合规需引导。D30 需首轮四个全出。',
    status: '需关注',
  },
  {
    title: 'Checkpoint vs 评估闭环混淆',
    body: '把 checkpoint（运行时即时拦截）说成评估闭环（跨时间迭代改进）。引导后分清。',
    status: '需关注',
  },
  {
    title: '多代理 Trace 未画图',
    body: '"更深更宽"答出但没画 ASCII 图。D30 要求能画出 Controller+多Agent 的树形结构。',
    status: '需关注',
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

function Review20260702ShengChanHuanJingD7() {
  return (
    <article className="react-review-page">
      {/* HERO */}
      <section className="react-review-hero">
        <span className="eyebrow">REVIEW · D7 · 2026 · 07 · 02 · 生产环境可观测性与评估</span>
        <h1>生产环境 D7 通过<strong> · 跨章节综合</strong></h1>
        <p>
          五题跨章节综合压测通过。可观测性四大价值引导后补全，评估闭环×错误累积分清，
          缓存围栏 vs 三兄弟视角切换精彩，TCC Transparent 分层秒答。
        </p>
        <div className="react-review-stats">
          {stats.map((stat, idx) => (
            <Card key={idx} className="react-review-stat-card">
              <strong className={stat.color}>{stat.value}</strong>
              <span>{stat.label}</span>
            </Card>
          ))}
        </div>
      </section>

      {/* 可观测性四大价值 */}
      <ReviewSection eyebrow="SECTION 01 · 通过" title="可观测性四大价值维度">
        <div className="react-review-grid-2">
          <Card className="react-review-card">
            <h3>排查定位 (Debug)</h3>
            <p>精确到哪一步慢、哪一步贵、哪一步错。从黑盒变玻璃盒。</p>
          </Card>
          <Card className="react-review-card">
            <h3>成本管理</h3>
            <p>查看每步花费，发现哪些步骤不经济。数据驱动优化。</p>
          </Card>
          <Card className="react-review-card">
            <h3>持续改进 / 迭代闭环</h3>
            <p>采集真实 case 回流离线测试集，形成闭环迭代。</p>
          </Card>
          <Card className="react-review-card">
            <h3>安全合规审计</h3>
            <p>Trace 记录每步输入输出，合规团队可审计越权/泄密/决策可解释性。<span className="text-[#c97a6b]">（引导后补出）</span></p>
          </Card>
        </div>
      </ReviewSection>

      {/* 多代理 × Trace */}
      <ReviewSection eyebrow="SECTION 02 · 方向对" title="多代理 × Trace/Span：更深更宽">
        <Card className="react-review-card">
          <pre className="react-review-ascii">{`单 Agent：
Trace
 └─ Span: Agent
      └─ Span: Tool A
      └─ Span: Tool B

多代理（Controller + 专业 Agent）：
Trace
 └─ Span: Controller Agent
      └─ Span: 专业 Agent A       ← 更宽
           └─ Span: 子步骤 A1     ← 更深
           └─ Span: 子步骤 A2
      └─ Span: 专业 Agent B
           └─ Span: 子步骤 B1
      └─ Span: 专业 Agent C

一个用户任务 = 一个 Trace，无论多少 Agent。`}</pre>
        </Card>
        <p className="text-[#8b99a8] text-sm mt-2">答出"更深更宽"但未画图。D30 要求能画出 ASCII 图。</p>
      </ReviewSection>

      {/* 评估闭环 × 错误累积 */}
      <ReviewSection eyebrow="SECTION 03 · 修正后通过" title="评估闭环 × 错误累积：提高 p + 切短 N">
        <Card className="react-review-card">
          <pre className="react-review-ascii">{`评估闭环如何作用于 1 - p^N：

路径 A：提高 p
  发现失败 case → 回流离线 → 优化 Prompt/Tool → p 提高

路径 B：切短 N
  在线监控定位薄弱步 → 加 checkpoint → N 被切短

⚠️ 区分：
  checkpoint = 运行时即时拦截（Controllable 的儿子）
  评估闭环 = 跨时间迭代改进（持续优化循环）
  可观测性 = 以上两者的前提`}</pre>
        </Card>
        <div className="react-review-blindspot">
          <h4>首轮混淆 checkpoint 和评估闭环</h4>
          <p>把"固定节点检查+重试"说成评估闭环。经引导后分清：一个运行时，一个跨时间。</p>
        </div>
      </ReviewSection>

      {/* 缓存围栏 × 三兄弟 */}
      <ReviewSection eyebrow="SECTION 04 · 自我修正" title="缓存围栏 vs 三兄弟：同一事件不同视角">
        <Card className="react-review-card">
          <pre className="react-review-ascii">{`缓存三兄弟（怎么命中——机制分类）：
  精确缓存 ─── 字符完全匹配
  语义缓存 ─── 向量相似度匹配
  提示词缓存 ── 前缀匹配，省 self-attention

缓存做围栏（放在哪/干什么——架构角色）：
  请求 → 缓存先拦 → 命中返回 / 未命中 → 路由

关系：同一件事，不同切面。`}</pre>
        </Card>
        <div className="react-review-highlight">
          <h4>从"上下层"到"同一事件不同视角"</h4>
          <p>自主质疑第一版答案并修正。展示了好的元认知能力。</p>
        </div>
      </ReviewSection>

      {/* TCC × 可观测性 */}
      <ReviewSection eyebrow="SECTION 05 · 秒答" title="TCC Transparent × 可观测性：理念 vs 手段">
        <Card className="react-review-card">
          <pre className="react-review-ascii">{`第 3 层（理念目标）    TCC · Transparent（看得见）
                       │
第 2 层（工程手段）    可观测性 / 日志 / 状态面板
                       │
第 1 层（底层工具）    OpenTelemetry / Trace / Span / 仪表盘

分层钥匙自动启动，零犹豫。`}</pre>
        </Card>
        <div className="react-review-highlight">
          <h4>用户侧 vs 运维侧补充</h4>
          <p>Transparent 在用户面前 = UI 可见性，在运维面前 = 可观测性。视角有趣。</p>
        </div>
      </ReviewSection>

      {/* D30 追击 */}
      <ReviewSection eyebrow="SECTION 06 · D30 追击" title="薄弱点与后续计划">
        {d30Warnings.map((w, idx) => (
          <div key={idx} className="react-review-blindspot">
            <h4>{w.title}</h4>
            <p>{w.body}</p>
          </div>
        ))}
        <Card className="react-review-card" style={{ marginTop: '1rem' }}>
          <h3>D30 计划（2026-07-25）</h3>
          <p>
            综合压测：给一个新 Agent 场景设计完整的可观测性+评估+成本管理方案。
            重点追击：① 四大价值首轮分格子 ② checkpoint vs 评估闭环不混淆 ③ 多代理 Trace 画图。
          </p>
        </Card>
      </ReviewSection>

      {/* Tags */}
      <div className="react-review-tags">
        {['生产环境', '可观测性', 'Trace/Span', '评估闭环', '错误累积', '缓存三兄弟', 'TCC Transparent', '多代理', 'D7', '跨章节'].map(tag => (
          <span key={tag} className="react-review-tag">{tag}</span>
        ))}
      </div>
    </article>
  );
}

export default Review20260702ShengChanHuanJingD7;
