import { Card } from '@heroui/react';

const stats = [
  { value: '3', label: '总题量', color: 'text-[#6b89a8]' },
  { value: '3', label: '术语焊死', color: 'text-[#5a9a7a]' },
  { value: '1', label: '金光时刻', color: 'text-[#c9b687]' },
  { value: '1', label: '心算修复', color: 'text-[#c97a6b]' },
];

const growthCurve = [
  { topic: '公式 1 − p^N', before: '7/9 漏 1−', after: '7/17 不漏' },
  { topic: '动「别的」', before: '7/9 误判动 p', after: '7/17 站起来' },
  { topic: '三件套', before: '7/9 漏可指导', after: '7/17 修正全中' },
  { topic: '钥匙迁移', before: '7/9 客服场景', after: '7/17 代码审查' },
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

function Review20260717CuoWuLeiJiXianXingZhiShuZhuiJi() {
  return (
    <article className="react-review-page">
      {/* HERO */}
      <section className="react-review-hero">
        <span className="eyebrow">REVIEW · D30+ 术语追击 · 2026 · 07 · 17 · 错误累积 + 线性 vs 指数</span>
        <h1>错误累积 + 线性 vs 指数<strong> · D30+ 术语追击</strong></h1>
        <p>
          距学习日(5/28-5/31)已过 47-50 天。三题术语追击：三个生锈术语全部重焊。最大亮点——
          「动别的」这个元层级薄弱点，5/31、7/9、7/17 三次摔倒，今天学习者自己说出
          「既没改 N 也没改 P」站起来。线性 vs 指数钥匙跨域迁移到代码审查场景。
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

      {/* Q1 · 公式 + 心算 */}
      <ReviewSection eyebrow="SECTION 01 · 公式 + 心算" title="Q1 · 公式记住了 1− · 心算首判仍偏线性">
        <div className="react-review-grid-2">
          <Card className="react-review-card">
            <h3>公式精度 · 修复 ✅</h3>
            <p>7/9 写成 p^N（漏 1−），今天闭卷直接写出 1 − p^N。从「理解层」往「肌肉层」挪了一步。p^N 是累积成功率，1 − p^N 才是累积错误率。</p>
          </Card>
          <Card className="react-review-card">
            <h3>心算方向感 · 首判反了 🟡</h3>
            <p>0.85^12 估成「90%以上」，实际 ≈ 86%，方向对偏高一点，比 7/9 的「50%」准太多。但比较题首判「0.85^12 更大因为指数更大」——只看指数漏看底数。</p>
          </Card>
        </div>
        <Card className="react-review-card">
          <pre className="react-review-ascii">{`心算比较题 · 两根杠杆：

  0.85¹²   vs   0.9¹⁰
   │              │
   │  底数 0.85 < 0.9   ← 底数更小 → 结果更小（杠杆①）
   │  指数  12  >  10   ← 指数更大 → 结果更小（杠杆②，底数<1时反向）
   │
   └─ 两根杠杆同向压 → 0.85¹² 双重地小于 0.9¹⁰

  实际值：0.85¹² ≈ 0.14   0.9¹⁰ ≈ 0.35

  线性直觉：指数大→结果大（底数>1 才成立）
  指数现实：底数<1，指数大→结果小（加 vs 乘）`}</pre>
        </Card>
        <div className="react-review-highlight">
          <h4>方向感红点重焊</h4>
          <p>修正后原话：「底数小于 1 时，指数越大，最后的数值越少。」心算方向感从 7/9 的「判反」修复到「自己说出反向规律」。</p>
        </div>
      </ReviewSection>

      {/* Q2 · 三术语焊死 ⭐ */}
      <ReviewSection eyebrow="SECTION 02 · ⭐ 元层级焊死" title="Q2 · 三术语一字不差 ·「动别的」三次摔倒第四次站起">
        <Card className="react-review-card">
          <pre className="react-review-ascii">{`累积错误率治理 · 三兄弟框架（三个平级杠杆）：

  1 − p^N
      │
   ┌──┴──────────┬──────────────┐
  动 N          动 p           动「别的」(checkpoint)
   │            │              │
 砍步数        提精度          切段 + 重试
 直接删一步    换更强模型       插存档点
              /好 prompt       失败可重来

  checkpoint 既不改 N（步数不减），也不改 p（精度不变）
  它改的是指数累积的结构 → 局部低阶 N · 截断与降幂`}</pre>
        </Card>
        <div className="react-review-grid-2">
          <Card className="react-review-card">
            <h3>① 局部低阶 N · 首轮 ✅</h3>
            <p>闭卷首轮即答出「局部低阶 N」。5/31 自己起的数学名字，47 天后首轮提取成功。</p>
          </Card>
          <Card className="react-review-card">
            <h3>② 动「别的」· 三次摔→站起 ⭐</h3>
            <p>首答「动 P 和 N」❌（第三次摔）。复述后自己说出「既没改 N 也没改 P」✅。关键洞察：之前把效果（有效 p 升、N 降）当成了招式。</p>
          </Card>
        </div>
        <Card className="react-review-card">
          <h3>③ Controllable 三件套 · 修正后全中 ✅</h3>
          <p>首答「可重试·可恢复·可打断」——把 checkpoint 的机制（重试）串门进三件套，漏了可指导。修正后：可中断 · 可恢复 · 可指导。可指导 = 重试有方向（带错误信息，非盲重试）。</p>
        </Card>
        <Card className="react-review-card">
          <pre className="react-review-ascii">{`「动别的」追踪链 · 元层级薄弱点焊死记录：

  5/31  →  「动 p」                     ❌  摔倒 ①
  7/09  →  「动 p」（误判）              ❌  摔倒 ②
  7/17  →  「动 P 和 N」                 ❌  摔倒 ③
       └→ 复述 → 「既没改 N 也没改 P」   ✅  站起来了

  ⭐ 三次摔倒，第四次自己捅破「杠杆 ≠ 杠杆的效果」
     这不是一道题的对错，是元层级思维习惯的失灵被修复。`}</pre>
        </Card>
        <div className="react-review-highlight">
          <h4>今天的金光时刻</h4>
          <p>能主动说「不知道」而不是瞎编，复述时用「既没改 N 也没改 P」而非背原文——这是真的在学，不是在表演学。元层级薄弱点正式焊死。</p>
        </div>
      </ReviewSection>

      {/* Q3 · 钥匙跨域 */}
      <ReviewSection eyebrow="SECTION 03 · 钥匙跨域迁移" title="Q3 · 钥匙从客服对话迁移到代码审查">
        <div className="react-review-grid-2">
          <Card className="react-review-card">
            <h3>(a) 线性还是指数 · 结论对 ✅</h3>
            <p>每轮信息要「穿过」后面所有轮的注意力才能留下。信息保真度 ≈ p^N——乘法累积，所以是指数。首答点出链式依赖 + Lost in the Middle，缺「乘 vs 加」一句话，补全后完美收口。</p>
          </Card>
          <Card className="react-review-card">
            <h3>(b) 对抗方案 · 钥匙迁移 ✅</h3>
            <p>按「每个函数」切段（局部低阶 N）→ 审查完 = 存档点 → 清空上下文 → 裁判（模型/人类）审批后继续。亮点：把 checkpoint 同时用成审批关卡（HITL），不止是存档点。</p>
          </Card>
        </div>
        <Card className="react-review-card">
          <pre className="react-review-ascii">{`上下文 checkpoint 骨架 · save → reset → continue：

  审查函数 A
      ↓
  save     持久化审查结论/决策        ← 首答漏了这一步，补全
      ↓
  reset    清空上下文窗口（恢复干净窗口）
      ↓
  continue 带结论进下一段（审查函数 B）
      ↓
  裁判审批（模型 / 人类）── 可信赖 Agent 的 HITL 关卡

  ───────────────────────────────────────────
  错误累积 checkpoint          代码审查 checkpoint
  执行 N 步                    审查 N 个函数
  插存档点                     函数边界 = 存档点
  局部低阶 N                   每段 ≤ 单函数
  同一把「动别的」钥匙，迁移成功`}</pre>
        </Card>
        <div className="react-review-highlight">
          <h4>钥匙成为通用工具</h4>
          <p>7/9 客服场景 → 7/17 代码审查场景，同一把钥匙两次跨域工作。它不再只属于「错误累积」那一章——成了拆所有「链式过程」的通用工具。</p>
        </div>
      </ReviewSection>

      {/* 总成绩单 */}
      <ReviewSection eyebrow="SECTION 04 · 总成绩单" title="三个生锈术语全部重焊">
        <div className="react-review-grid-2">
          <Card className="react-review-card">
            <h3>A 层 · 术语焊死 ✅</h3>
            <p>公式 1 − p^N（不再漏 1−）· 局部低阶 N（首轮提取成功）· 动「别的」（三次摔倒后站起）· 可中断·可恢复·可指导。追击目标 3/3 达成。</p>
          </Card>
          <Card className="react-review-card">
            <h3>⚠️ 需保持</h3>
            <p>公式第一直觉仍需巩固（已不漏 1−）· 心算首判仍偏线性（底数&lt;1 反向规律）· checkpoint 骨架的 save 步骤会漏。</p>
          </Card>
        </div>
        <Card className="react-review-card">
          <h3>📈 跨场次成长曲线</h3>
          <pre className="react-review-ascii">{growthCurve.map(g => `  ${g.topic.padEnd(14)} ${g.before}  →  ${g.after}`).join('\n')}</pre>
        </Card>
      </ReviewSection>

      {/* 复习计划 */}
      <ReviewSection eyebrow="SECTION 05 · 复习计划" title="两个 D30 在路上 · 季度回访验肌肉">
        <Card className="react-review-card">
          <pre className="react-review-ascii">{`7/24 (D30)   元认知 Metacognition D30 · 元认知×可信赖Agent×错误累积缝合
7/25 (D30)   生产环境可观测性与评估 D30 · 新场景设计可观测+评估+成本方案
10/17 (季度) 错误累积 + 线性 vs 指数 · 季度回访 · 验证三术语肌肉记忆`}</pre>
        </Card>
      </ReviewSection>

      {/* Tags */}
      <div className="react-review-tags">
        {['动别的·三次摔→站起', '钥匙跨域迁移', '元层级焊死', '错误累积', '线性 vs 指数', '1 − p^N', '局部低阶 N', '截断与降幂', 'checkpoint', '可中断·可恢复·可指导', '上下文 checkpoint', 'save→reset→continue', 'Lost in the Middle', 'D30+ 术语追击'].map(tag => (
          <span key={tag} className="react-review-tag">{tag}</span>
        ))}
      </div>
    </article>
  );
}

export default Review20260717CuoWuLeiJiXianXingZhiShuZhuiJi;
