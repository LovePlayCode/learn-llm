import { Card } from '@heroui/react';

const stats = [
  { value: '2', label: '关磨穿' },
  { value: '4', label: '金光时刻' },
  { value: '3', label: '表达精度复发并修复' },
  { value: '5', label: '钥匙跨章节实战累计' },
];

const scenarios = [
  {
    tag: '场景 ① · 高精度长链条',
    title: '97% × 10 步 → 26%',
    math: '1 − 0.97¹⁰ ≈ 26.26%',
    context: '顶尖 Agent · 严谨工程',
    insight: '即使每步 97%，10 步累积下来也有四分之一翻车率，这是“看似稳”的陷阱。',
  },
  {
    tag: '场景 ② · 中等精度长链条',
    title: '70% × 10 步 → 97%',
    math: '1 − 0.70¹⁰ ≈ 97.18%',
    context: '普通模型推理 · 缺乏容错的系统',
    insight: '单步 70% 看似还行，但 10 步连续成功几乎必翻车，这就是脊背发凉的来源。',
  },
];

const tiers = [
  {
    title: '第 1 层 · 具体',
    name: '50% vs 97%',
    body: ['裸数字。', '能记住，但解释不了“为什么吓人”。'],
  },
  {
    title: '第 2 层 · 操作',
    name: '加法 vs 乘法',
    body: ['数学定律。', '老师原本要的答案就在这一层。'],
  },
  {
    title: '第 3 层 · 思维',
    name: '线性 vs 指数',
    body: ['你站到了这一层。', '不只是数学定律，而是大脑认知世界的两种方式。'],
  },
];

const strategyRows = [
  ['A · 链路 8→3', '动 N（指数）', '砍指数：8 → 3', '暴力 · 单步复杂度暴增'],
  ['B · 92%→99%', '动 p（底数）', '提底数：92% → 99%', '数学最优 · 但成本飙升'],
  ['C · 每 3 步 checkpoint', '动“别的”', '把一个大 N 切成多个局部低阶 N', '性价比最优'],
];

const blindspots = [
  '第 1 次：把“累积错误率 26%、97%”压成一句话，吞掉了单步 70% 的前缀。',
  '第 2 次：用泛词“直觉”代替具体的“加法直觉”。',
  '第 3 次：用“Controllable 因为可控制”循环定义自己。',
];

const highlights = [
  '抽象上升：线性 vs 指数思维家族对抗，比“加法 vs 乘法”还高一级。',
  '钥匙自动化：5/11 的“上下兄弟问三句”在 Q2 不自觉启动。',
  '数学命名升级双连：指数分段 → 局部低阶 N + 截断与降幂。',
  '跨章节缝合：TCC × 错误累积 × checkpoint × 线性 vs 指数通畅无打架。',
];

const reportCards = [
  {
    title: 'A 层 · 必须深入',
    items: ['累积错误率 1 − pᴺ', '心算技巧：平方的平方', 'TCC 三字母', 'checkpoint = Controllable', '线性 vs 指数思维家族', '局部低阶 N · 截断与降幂'],
  },
  {
    title: 'B 层 · 理解思路',
    items: ['三种 Agent 治理：动 N / 动 p / 局部低阶 N', '方案 C 的工程数学：88.3% → 99%', 'Reflection / Self-Correction 直觉'],
  },
  {
    title: 'C 层 · 用时查阅',
    items: ['Reflection 的具体框架', 'Consistency 词性精确写法', '不同 checkpoint 策略的实现差异'],
  },
  {
    title: '需要加强',
    items: ['表达精度', '解释“为什么”时拆内部动作', '避免同义词循环定义'],
  },
  {
    title: '横向连接',
    items: ['复利 · 通胀 · 病毒传播', '缓存命中率随链路衰减', '多轮对话注意力衰减', '艾宾浩斯遗忘曲线'],
  },
  {
    title: '跨章节缝合',
    items: ['TCC × 错误累积 × checkpoint', '错误累积 × 线性 vs 指数', '钥匙 × 三方案家族审视', '5/28 焊点 × 5/31 命名升级'],
  },
];

const timeline = [
  ['6/1 - 6/3', '不安排复习 · 让今日新焊点整合。'],
  ['6/4 (D7)', 'TCC 三人组 + 错误累积传递链 + checkpoint 跨章节综合题。'],
  ['6/9', '推理时计算 D60 综合压测 · RLHF × 推理时计算交叉。'],
  ['6/12', '缓存 + Claude Code 上下文管理 D30 回访。'],
  ['6/16', 'RLHF 偏向自信 D30 回访。'],
  ['6/27 (D30)', '错误累积 D30 综合压测，含 checkpoint 工程场景题。'],
  ['6/30 (D30)', '线性 vs 指数钥匙 D30 综合压测。'],
];

const tags = [
  '线性 vs 指数',
  '局部低阶 N',
  '截断与降幂',
  '错误累积',
  'p^N',
  'TCC',
  'Controllable',
  'checkpoint',
  'Self-Correction',
  '跨章节缝合',
  '元学习',
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

function Review20260531ErrorAccumulation() {
  return (
    <article className="react-review-page">
      <section className="react-review-hero">
        <span className="eyebrow">2026 · 05 · 31 · 间隔检索 · D2+D3 中段抽查</span>
        <h1>从「数字默写」到「线性 vs 指数」的抽象上升</h1>
        <p>
          今天本是空档日，你主动来了。两关磨穿后留下的不只是数字，而是一把能拆未来所有「链式过程」的钥匙：
          <strong>线性 vs 指数</strong>。更难得的是，你两次用更精确的数学术语，重命名了 5/28
          老师的口语比喻：切短累积分母 → 指数分段 → 局部低阶 N · 截断与降幂。
        </p>
        <div className="react-review-stats">
          {stats.map(stat => (
            <Card className="react-review-stat" key={stat.label} variant="secondary">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </Card>
          ))}
        </div>
      </section>

      <ReviewSection eyebrow="SECTION 01 · 第一关" title="三轮深化，跳出裸数字">
        <p>D2 默写本身只是个数字题，但今天真正的考题是你对数字的诠释精度。</p>
        <pre className="react-review-ascii">{`第 1 轮：累积错误率 26%、97%
第 2 轮：单步 97% × 10 步 = 26.26%；单步 70% × 10 步 = 97.18%
第 3 轮：从“差距很大”推进到“线性思维 vs 指数思维”
第 4 轮：跳到思维家族层，比“加法 vs 乘法”更高一级`}</pre>
        <div className="react-review-grid two">
          {scenarios.map(scenario => (
            <Card className="react-review-card" key={scenario.title} variant="default">
              <Card.Header>
                <Card.Description>{scenario.tag}</Card.Description>
                <Card.Title>{scenario.title}</Card.Title>
              </Card.Header>
              <Card.Content>
                <p><strong>数学：</strong>{scenario.math}</p>
                <p><strong>语境：</strong>{scenario.context}</p>
                <p><strong>洞察：</strong>{scenario.insight}</p>
              </Card.Content>
            </Card>
          ))}
        </div>
      </ReviewSection>

      <ReviewSection eyebrow="SECTION 02 · 钥匙级洞察" title="两个家族，三层抽象">
        <pre className="react-review-ascii">{`第 3 层：线性思维 vs 指数思维
第 2 层：加法直觉 vs 乘法定律
第 1 层：50% 直觉 vs 97% 真相
鸿沟 = 普通人以为“差一点点”，真实系统会指数级放大。`}</pre>
        <div className="react-review-grid three">
          {tiers.map(tier => (
            <Card className="react-review-card" key={tier.title} variant="default">
              <Card.Header>
                <Card.Description>{tier.title}</Card.Description>
                <Card.Title>{tier.name}</Card.Title>
              </Card.Header>
              <Card.Content>
                {tier.body.map(item => <p key={item}>{item}</p>)}
              </Card.Content>
            </Card>
          ))}
        </div>
        <blockquote>抽象上升不是换个高级词，而是一旦你在第 3 层，第 1、2 层的所有具体题都会自动收编。</blockquote>
      </ReviewSection>

      <ReviewSection eyebrow="SECTION 03 · TCC D3" title="checkpoint = Controllable 焊点稳了">
        <p>5/16 那次毕业账本上写着“英文缩写 4 次全丢”。今天 D15 回访，你一次没翻车。</p>
        <pre className="react-review-ascii">{`T → Transparent  · 透明   · 看得见
C → Controllable · 可控制 · 管得住 ← checkpoint 挂在这里
C → Consistency  · 一致性 · 信得过`}</pre>
        <p>当老师把三个优化方案排在一起时，你的反应不是答题，而是反问：这三个方案是不是同一层级？</p>
        <blockquote>只有方案 C 挂在 TCC 的 Controllable；方案 A 属于架构设计层，方案 B 属于模型能力层。</blockquote>
      </ReviewSection>

      <ReviewSection eyebrow="SECTION 04 · 用钥匙拆三方案" title="动 N，动 p，动“别的”">
        <p>错误累积公式是 <code>累积成功率 = pᴺ</code>。三个方案在动公式里的不同变量：</p>
        <div className="react-review-table-wrap">
          <table className="react-review-table">
            <thead>
              <tr>
                <th>方案</th>
                <th>动哪个变量</th>
                <th>钥匙级动作</th>
                <th>性质</th>
              </tr>
            </thead>
            <tbody>
              {strategyRows.map(row => (
                <tr key={row[0]}>
                  {row.map(cell => <td key={cell}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <details open>
          <summary>方案 C 的数学细节</summary>
          <p>原始无 checkpoint：0.92⁸ ≈ 51.3% 累积成功率，翻车 48.7%。</p>
          <p>每 3 步 checkpoint 并允许重试一次后，阶段通关率约 95.1%，三段累积约 88.3%，继续允许重试则逼近 99%。</p>
          <p>关键洞察：checkpoint 不是修补错误，而是重新切分赌注，把长指数压力分摊成多段短指数 + 局部线性重试。</p>
        </details>
      </ReviewSection>

      <ReviewSection eyebrow="SECTION 05 · 数学命名升级" title="从切短分母到截断与降幂">
        <pre className="react-review-ascii">{`5/28：切短累积分母（口语比喻，数学不严谨）
  ↓
5/31 上半场：指数分段
  ↓
5/31 下半场：局部低阶 N + 截断与降幂`}</pre>
        <blockquote>你不是在复述老师的话，而是用更准确的术语重新命名同一个洞察，这是从听课到建模的跨越。</blockquote>
      </ReviewSection>

      <ReviewSection eyebrow="SECTION 06 · 双账本" title="盲点 3 次复发，金光 4 个">
        <div className="react-review-grid two">
          <Card className="react-review-card warn" variant="default">
            <Card.Header><Card.Title>盲点账</Card.Title></Card.Header>
            <Card.Content>
              <ul>{blindspots.map(item => <li key={item}>{item}</li>)}</ul>
            </Card.Content>
          </Card>
          <Card className="react-review-card" variant="default">
            <Card.Header><Card.Title>金光账</Card.Title></Card.Header>
            <Card.Content>
              <ul>{highlights.map(item => <li key={item}>{item}</li>)}</ul>
            </Card.Content>
          </Card>
        </div>
        <Card className="react-review-card" variant="secondary">
          <Card.Header><Card.Title>超纲发现：Self-Correction</Card.Title></Card.Header>
          <Card.Content>
            <p>你主动提到“把错误信息传给大模型，提高成功率”，这已经摸到了 Reflection / Self-Correction 的工程影子。</p>
          </Card.Content>
        </Card>
      </ReviewSection>

      <ReviewSection eyebrow="SECTION 07 · 元学习曲线" title="从老师反问 3 次到 0 次自动调用">
        <pre className="react-review-ascii">{`5/11  ┃ ●●●●●  钥匙诞生
5/24  ┃ ●●●    老师反问 3 次
5/25  ┃ ●●●    老师对话 3 句
5/28  ┃ ●      老师 1 次提示
5/31  ┃ ○      自动启动`}</pre>
        <blockquote>让钥匙在第 21 天自动响，而不是被叫，这才是元学习真正生效的标志。</blockquote>
      </ReviewSection>

      <ReviewSection eyebrow="SECTION 08 · 学习报告" title="本单元掌握快照">
        <div className="react-review-grid three">
          {reportCards.map(card => (
            <Card className="react-review-card" key={card.title} variant="default">
              <Card.Header><Card.Title>{card.title}</Card.Title></Card.Header>
              <Card.Content>
                <ul>{card.items.map(item => <li key={item}>{item}</li>)}</ul>
              </Card.Content>
            </Card>
          ))}
        </div>
      </ReviewSection>

      <ReviewSection eyebrow="SECTION 09 · 复习计划" title="下一站该回访谁">
        <div className="react-review-timeline">
          {timeline.map(([time, desc]) => (
            <div className="react-review-timeline-row" key={time}>
              <strong>{time}</strong>
              <span>{desc}</span>
            </div>
          ))}
        </div>
        <ol className="react-review-checklist">
          <li>今天到此为止，别加练，新焊点需要睡眠整合。</li>
          <li>6/1-6/3 整合期，不安排复习。</li>
          <li>6/4 D7 综合压测前，自检“解释为什么时是否在同义词重复自己”。</li>
          <li>每次撞到新的链式过程，主动用“线性 vs 指数”钥匙审视。</li>
        </ol>
      </ReviewSection>

      <footer className="react-review-footer">
        <p>2026 · 05 · 31 · 错误累积 D2 · TCC D3 · 钥匙焊死</p>
        <div className="tag-row">
          {tags.map(tag => <span key={tag}>{tag}</span>)}
        </div>
      </footer>
    </article>
  );
}

export default Review20260531ErrorAccumulation;
