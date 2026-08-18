import { Card } from '@heroui/react';

const stats = [
  { value: '4', label: '总题量', color: 'text-[#6b89a8]' },
  { value: '2', label: '通过', color: 'text-[#5a9a7a]' },
  { value: '1', label: '金光时刻', color: 'text-[#c9b687]' },
  { value: '3', label: '术语需追击', color: 'text-[#c97a6b]' },
];

const d30PlusWarnings = [
  {
    title: '公式肌肉记忆未焊死',
    body: '累积错误率 = 1 − p^N，不是 p^N。D30 后仍漏 1−，说明公式还停在"理解"层，没到"肌肉"层。',
  },
  {
    title: '三术语 D30 后模糊',
    body: '局部低阶N·截断与降幂、动"别的"、可中断·可恢复·可指导——三个术语在课内重新焊上，但长期记忆还不够牢。',
  },
  {
    title: '心算方向感需练习',
    body: '底数更小 + 指数更大 = 结果更小。0.85^12 < 0.9^10，但估算成50%（比35%还大）。方向感需要练。',
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

function Review20260709CuoWuLeiJiXianXingZhiShuD30() {
  return (
    <article className="react-review-page">
      {/* HERO */}
      <section className="react-review-hero">
        <span className="eyebrow">REVIEW · D30+ · 2026 · 07 · 09 · 错误累积 + 线性 vs 指数</span>
        <h1>错误累积 + 线性 vs 指数<strong> · D30+ 综合压测</strong></h1>
        <p>
          距学习日(5/28-5/31)已过 39-42 天。四题综合压测：方向感全部正确，
          但三个核心术语 D30 后模糊。最大亮点：「线性 vs 指数」钥匙在全新领域（多轮对话注意力衰减）自动激活，
          并独立设计出上下文 checkpoint 方案。
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

      {/* Q1 · 数学默写 */}
      <ReviewSection eyebrow="SECTION 01 · 需追击" title="Q1 · 数学默写 + 两个家族">
        <div className="react-review-grid-2">
          <Card className="react-review-card">
            <h3>公式精度 ⚠️</h3>
            <p>初始写出 p^N，漏掉了 1−。p^N 是累积成功率，不是错误率。在 Q4 自修复为 1 − p^N。</p>
          </Card>
          <Card className="react-review-card">
            <h3>心算方向感 ⚠️</h3>
            <p>锚点 0.9^10 ≈ 35%，0.85^12 估成 50%（方向反了）。底数更小+指数更大=结果更小。实际 ≈ 14%，错误率 ≈ 86%。</p>
          </Card>
        </div>
        <Card className="react-review-card">
          <pre className="react-review-ascii">{`心算技巧 · 平方的平方法：

  0.85²   ≈  0.72
  0.85⁴   ≈  0.72²  ≈  0.52
  0.85⁸   ≈  0.52²  ≈  0.27
  0.85¹²  =  0.85⁸ × 0.85⁴  ≈  0.27 × 0.52  ≈  0.14

  累积错误率 = 1 − 14% ≈ 86%

  线性直觉 ≈ 50%  vs  指数现实 ≈ 86%  →  落差 36 个百分点`}</pre>
        </Card>
        <div className="react-review-blindspot">
          <h4>「模糊运算 / 平均直觉」细节遗忘</h4>
          <p>两个思维家族名字答对，但普通人的"模糊运算"（30%×10步→匀一匀觉得50%→真相97%）细节忘了。</p>
        </div>
      </ReviewSection>

      {/* Q2 · checkpoint 工程 */}
      <ReviewSection eyebrow="SECTION 02 · 需追击" title="Q2 · checkpoint 工程场景">
        <Card className="react-review-card">
          <pre className="react-review-ascii">{`错误累积治理三方案 ·「动什么变量」框架：

  方案 A · 缩短链路     动 N（砍指数）
    p¹² → p³             代价：单步复杂度暴增

  方案 B · 提升单步     动 p（提底数）
    0.85 → 0.99           代价：成本飙升

  方案 C · checkpoint   动「别的」  ← 学习者误判为动 p
    p¹² → p⁴ × p⁴ × p⁴   局部低阶 N · 截断与降幂
                          ⭐ 性价比最优`}</pre>
        </Card>
        <div className="react-review-grid-2">
          <Card className="react-review-card">
            <h3>「局部低阶 N · 截断与降幂」</h3>
            <p>5/31 自己起的数学名字，D30 后遗忘。命名升级链：切短累积分母 → 指数分段 → 局部低阶 N + 截断与降幂。课内重新焊上。</p>
          </Card>
          <Card className="react-review-card">
            <h3>Controllable 三件套</h3>
            <p>说成 "controller"（词性差），用"可以控制"解释 Controllable（循环定义复发 1 次）。三件套首轮漏了「可指导」，Q4 补全：可中断 · 可恢复 · 可指导。</p>
          </Card>
        </div>
        <div className="react-review-blindspot">
          <h4>同义词循环定义复发</h4>
          <p>比 5/31 的 3 次已减少到 1 次，但仍需警惕。解释"为什么"时要拆开内部动作，不要用同义词重复。</p>
        </div>
      </ReviewSection>

      {/* Q3 · 钥匙跨域 ⭐ */}
      <ReviewSection eyebrow="SECTION 03 · ⭐ 金光时刻" title="Q3 · 钥匙跨域迁移 · 多轮对话注意力衰减">
        <div className="react-review-grid-2">
          <Card className="react-review-card">
            <h3>线性 vs 指数 · 跨域应用 ✅</h3>
            <p>多轮客服场景：线性思维估满意度 60-70%，指数现实远比直觉严重。钥匙自动激活，无需提示。</p>
          </Card>
          <Card className="react-review-card">
            <h3>上下文 checkpoint · 独立设计 ⭐</h3>
            <p>子任务完成 → 关键信息持久化写入长期记忆 → 清空上下文窗口 → 干净上下文继续。还主动调用了 Lost in the Middle。</p>
          </Card>
        </div>
        <Card className="react-review-card">
          <pre className="react-review-ascii">{`骨架映射 · 完美对应：

  错误累积 checkpoint            上下文 checkpoint
  ─────────────────────         ─────────────────────
  执行 4 步                      对话 N 轮
       ↓                             ↓
  validate（验证）              判断：子任务回答完了吗？
       ↓                             ↓
  save state（存档）            关键信息持久化（长期记忆）
       ↓                             ↓
  重置错误累积                   清空上下文窗口
       ↓                             ↓
  继续下 4 步                    用干净上下文 + 长期记忆继续

  局部低阶 N ≤ 4                局部低阶 N ≤ 每段对话轮数`}</pre>
        </Card>
        <div className="react-review-highlight">
          <h4>39 天后钥匙在新领域自动激活</h4>
          <p>这证明「线性 vs 指数」不只是一道题的答案——它是一把能拆所有「链式过程」的万能钥匙。D30 跨域迁移能力毕业 🎓</p>
        </div>
      </ReviewSection>

      {/* Q4 · 串珠 */}
      <ReviewSection eyebrow="SECTION 04 · 通过" title="Q4 · 四概念一线串珠 · 自修复 100%">
        <Card className="react-review-card">
          <pre className="react-review-ascii">{`学习者的逻辑链（Q4 原文）：

  错误累积 是指数递增的（成功率按指数衰减）
       ↓
  用 1 − p^N 计算                ← 公式自修复
       ↓
  治理方案之一：设 checkpoint
       ↓
  使用 局部低阶 N                ← 术语自修复
       ↓
  对应 TCC 中的 Controllable
       ↓
  即 可恢复 · 可中断 · 可指导    ← 三件套自修复

  ⭐ 课内自修复率 = 100%`}</pre>
        </Card>
        <div className="react-review-highlight">
          <h4>Q1-Q2 所有错误在 Q4 全部自修复</h4>
          <p>公式补上 1−、使用局部低阶 N、Controllable 三件套补全可指导。底子扎实，只是 39 天没碰生锈。</p>
        </div>
      </ReviewSection>

      {/* D30+ 追击 */}
      <ReviewSection eyebrow="SECTION 05 · D30+ 追击" title="薄弱点与后续计划">
        {d30PlusWarnings.map((w, idx) => (
          <div key={idx} className="react-review-blindspot">
            <h4>{w.title}</h4>
            <p>{w.body}</p>
          </div>
        ))}
        <Card className="react-review-card" style={{ marginTop: '1rem' }}>
          <h3>D30+ 追击计划（2026-07-16）</h3>
          <p>
            术语追击：① 闭卷默写 1 − p^N + 心算 0.85^12
            ② 三术语（局部低阶N · 动别的 · 可中断可恢复可指导）一字不差
            ③ 给新场景用线性vs指数钥匙拆解。
          </p>
        </Card>
      </ReviewSection>

      {/* Tags */}
      <div className="react-review-tags">
        {['错误累积', '线性 vs 指数', '局部低阶 N', '截断与降幂', 'checkpoint', 'TCC', 'Controllable', '动别的', '钥匙跨域迁移', 'Lost in the Middle', '上下文 checkpoint', 'D30+', '自修复'].map(tag => (
          <span key={tag} className="react-review-tag">{tag}</span>
        ))}
      </div>
    </article>
  );
}

export default Review20260709CuoWuLeiJiXianXingZhiShuD30;
