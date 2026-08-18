import { Card } from '@heroui/react';

const stats = [
  { value: '3', label: '核心协议', color: 'text-[#6b89a8]' },
  { value: '7', label: 'A 层知识点', color: 'text-[#c9b687]' },
  { value: '1', label: '钥匙级洞察', color: 'text-[#5a9a7a]' },
  { value: '4', label: '追问通过', color: 'text-[#eef0f3]' },
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

function Review20260803ZhiNengTiXieYi() {
  return (
    <article className="react-review-page">
      {/* HERO */}
      <section className="react-review-hero">
        <span className="eyebrow">LEARN · 2026 · 08 · 03 · 智能体协议</span>
        <h1>MCP · A2A · NLWeb<br /><strong>AI Agent 的三把钥匙</strong></h1>
        <p>
          MCP 给 Agent 装上手（调工具），A2A 给 Agent 装上嘴和耳朵（通信协作），
          NLWeb 给 Agent 装上眼睛（看懂网站）。三个协议各司其职，共同构成 AI Agent 的通信基础设施。
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

      {/* SECTION 01 · 知识地图 */}
      <ReviewSection eyebrow="SECTION 01 · 知识地图" title="三协议全景：谁解决什么问题？">
        <pre className="react-review-ascii">{`┌─────────────────────────────────────────────────────────────────┐
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
└─────────────────────────────────────────────────────────────────┘`}</pre>
      </ReviewSection>

      {/* SECTION 02 · MCP 深度解析 */}
      <ReviewSection eyebrow="SECTION 02 · MCP" title="模型上下文协议：给 AI 装上标准化的 USB 接口">
        <p className="text-sm text-[#b6bec8] mb-4">
          MCP 的本质是 <span className="inline-block bg-[#c9b687]/10 text-[#c9b687] px-1.5 py-0.5 rounded text-xs">Adapter Pattern + Service Discovery</span>——它把传统适配器模式提升到了协议层面，加上运行时动态发现能力。一个 LLM 可以同时连接多个 MCP Server，每个 Server 管自己的领域，互不干扰。
        </p>

        <h3 className="text-base font-semibold text-[#6b89a8] mt-6 mb-3">核心架构</h3>
        <pre className="react-review-ascii">{`┌──────────┐     ┌──────────┐     ┌──────────┐
│   Host   │────▶│  Client  │────▶│  Server  │
│ (VSCode) │     │ (连接维护) │     │ (轻量功能) │
└──────────┘     └──────────┘     └──────────┘

Host：启动 MCP 连接的 LLM 应用（如 Claude Desktop、VSCode）
Client：维护与 Server 的一对一连接
Server：暴露 Tools / Resources / Prompts 的轻量级程序`}</pre>

        <h3 className="text-base font-semibold text-[#6b89a8] mt-6 mb-3">三大核心能力</h3>
        <div className="react-review-grid three mb-6">
          <Card className="react-review-card border-[#6b89a8]/30">
            <Card.Header>
              <Card.Description className="text-[#6b89a8]">动作</Card.Description>
              <Card.Title>Tools 工具</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">Agent 可调用的离散动作——执行搜索、预订航班、写文件。会改变状态。每个 Tool 公布名称、描述和输入/输出格式。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card border-[#5a9a7a]/30">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">只读</Card.Description>
              <Card.Title>Resources 资源</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">只读数据项——文件内容、数据库记录、日志文件。可以是文本（代码/JSON）或二进制（图片/PDF）。看一眼就好，不动手。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card border-[#c9b687]/30">
            <Card.Header>
              <Card.Description className="text-[#c9b687]">模版</Card.Description>
              <Card.Title>Prompts 提示</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">预定义的对话模板，提供复杂工作流程的快捷入口。客户端拿模板直接填参数就能用，不是"说明书"。</p>
            </Card.Content>
          </Card>
        </div>

        <h3 className="text-base font-semibold text-[#6b89a8] mt-6 mb-3">MCP 三大优势 vs 传统 API</h3>
        <div className="react-review-grid two mb-6">
          <Card className="react-review-card">
            <Card.Header>
              <Card.Description className="text-[#6b89a8]">优势 01</Card.Description>
              <Card.Title>动态工具发现</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">运行时获取可用工具列表。传统 API 需编译时写死，API 变则代码变。MCP 一次集成，Server 端更新 Client 自动感知。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card">
            <Card.Header>
              <Card.Description className="text-[#6b89a8]">优势 02</Card.Description>
              <Card.Title>跨 LLM 互操作性</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">不绑定任何 LLM 供应商。同一套 MCP Server 可被 OpenAI、Anthropic、本地模型共用——解决"兼容灾难"。</p>
            </Card.Content>
          </Card>
        </div>
        <Card className="react-review-card border-[#c9b687]/30">
          <Card.Header>
            <Card.Description className="text-[#c9b687]">优势 03</Card.Description>
            <Card.Title>标准化安全</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xs text-[#b6bec8]">统一认证方法，一处认证处处通行。对比传统方式：每个 API 一套密钥、一种认证方式，安全管理 O(n²) 复杂度。</p>
          </Card.Content>
        </Card>
      </ReviewSection>

      {/* SECTION 03 · A2A 深度解析 */}
      <ReviewSection eyebrow="SECTION 03 · A2A" title="代理间协议：让 Agent 像团队一样协作">
        <p className="text-sm text-[#b6bec8] mb-4">
          如果说 MCP 是"一只手"，那 A2A 就是"一张名片 + 一个团队协作流程"。它解决的核心问题是：<span className="inline-block bg-[#c9b687]/10 text-[#c9b687] px-1.5 py-0.5 rounded text-xs">一个 Agent 怎么在没见过另一个 Agent 的情况下，知道它能做什么、怎么用它？</span>
        </p>

        <h3 className="text-base font-semibold text-[#6b89a8] mt-6 mb-3">四大核心组件</h3>
        <pre className="react-review-ascii">{`任务开始 → 读 Agent Card → Executor 传递上下文 → 远程 Agent 干活 → 产出 Artifact → Event Queue 通知

  Agent Card              Executor               Artifact              Event Queue
  ┌──────────────┐      ┌──────────────┐      ┌──────────────┐      ┌──────────────┐
  │ 代理名称      │      │ 传递用户聊天  │      │ 任务结果      │      │ 更新 & 消息   │
  │ 任务描述      │      │ 上下文给远程  │      │ 工作描述      │      │ 推送通知      │
  │ 具体技能列表  │      │ Agent        │      │ 文本上下文    │      │ 长任务进度    │
  │ 端点 URL      │      │              │      │              │      │ 断连恢复      │
  │ 版本 & 功能   │      │              │      │              │      │              │
  └──────────────┘      └──────────────┘      └──────────────┘      └──────────────┘`}</pre>

        <Card className="react-review-card border-[#6b89a8]/30 mb-4">
          <Card.Header>
            <Card.Description className="text-[#6b89a8]">🎯 动态能力发现</Card.Description>
            <Card.Title>Agent Card 的核心价值</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xs text-[#b6bec8]">旅游 Agent 不需要提前硬编码"我知道航空 Agent 能做什么"。它运行时去读航空 Agent 的 Agent Card，发现——"你能搜航班、能订航班、还能取消航班，你的端点在这里，你支持流式响应"。<strong>这是运行时发现的，不是编译时写死的。</strong></p>
          </Card.Content>
        </Card>

        <h3 className="text-base font-semibold text-[#6b89a8] mt-6 mb-3">没有 Event Queue 会怎样？</h3>
        <Card className="react-review-card border-[#a86b5c]/30 mb-4">
          <Card.Header>
            <Card.Description className="text-[#a86b5c]">四个生产级灾难</Card.Description>
            <Card.Title>Event Queue 缺失的后果</Card.Title>
          </Card.Header>
          <Card.Content>
            <ul className="text-xs text-[#b6bec8] space-y-1">
              <li>🔒 <strong>同步阻塞</strong>：Agent A 委托了"生成 100 页报告"，Agent B 要跑 20 分钟，A 傻等着什么也做不了。</li>
              <li>💔 <strong>连接断开 = 前功尽弃</strong>：网络闪断一下，任务状态全部丢失，从头再来。</li>
              <li>📭 <strong>无法推送通知</strong>：B 完成任务了 A 不知道——除非 A 主动轮询。</li>
              <li>📊 <strong>无法汇报进度</strong>：用户等了 10 分钟没任何反馈——"到底在做还是卡死了？"</li>
            </ul>
          </Card.Content>
        </Card>

        <h3 className="text-base font-semibold text-[#6b89a8] mt-6 mb-3">⭐ 核心分界线：学习者的钥匙级洞察</h3>
        <Card className="react-review-card border-[#c9b687]/30 mb-4">
          <Card.Header>
            <Card.Description className="text-[#c9b687]">钥匙级洞察</Card.Description>
            <Card.Title>MCP vs A2A 的分界判据</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-sm text-[#e8ecf0] font-semibold mb-2">"这个任务需要有自己的大脑（自主推理能力）吗？"</p>
            <p className="text-xs text-[#b6bec8]">不需要 → MCP Tool（被动执行，给参数返结果）<br />需要 → A2A Agent（自主决策，能说"我觉得你这个需求不太合理"）</p>
          </Card.Content>
        </Card>

        <h3 className="text-base font-semibold text-[#6b89a8] mt-6 mb-3">为什么需要这些协议？（历史视角）</h3>
        <div className="react-review-grid two mb-6">
          <Card className="react-review-card border-[#6b89a8]/30">
            <Card.Header>
              <Card.Description className="text-[#6b89a8]">MCP 出现之前</Card.Description>
              <Card.Title>旧方案的致命缺陷</Card.Title>
            </Card.Header>
            <Card.Content>
              <ul className="text-xs text-[#b6bec8] space-y-1">
                <li>OpenAI Function Calling → 供应商锁定</li>
                <li>LangChain Tools → 框架锁定，换框架全废</li>
                <li>自研中间层 → 每个团队重复造轮子</li>
              </ul>
              <p className="text-xs text-[#c9b687] mt-2 font-semibold">MCP 的本质：把"工具集成"从框架层面提升到协议层面。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card border-[#8b7aa8]/30">
            <Card.Header>
              <Card.Description className="text-[#8b7aa8]">A2A 出现之前</Card.Description>
              <Card.Title>旧方案的致命缺陷</Card.Title>
            </Card.Header>
            <Card.Content>
              <ul className="text-xs text-[#b6bec8] space-y-1">
                <li>硬编码编排 → 必须事先知道每个 Agent 能做什么</li>
                <li>点对点集成 → N 个 Agent = N×(N-1) 套定制代码</li>
                <li>各厂商自定标准 → Agent 之间无法直接对话</li>
              </ul>
              <p className="text-xs text-[#c9b687] mt-2 font-semibold">A2A 的本质：把 Agent 间通信从"点对点定制"变成"标准化名片交换"。</p>
            </Card.Content>
          </Card>
        </div>
      </ReviewSection>

      {/* SECTION 04 · NLWeb */}
      <ReviewSection eyebrow="SECTION 04 · NLWeb" title="自然语言网页：让网站'自己会说话'">
        <p className="text-sm text-[#b6bec8] mb-4">
          NLWeb 的真正价值不是"AI 能拿网页信息"（爬虫早就能做了），而是让网站将自己的内容向量化、支持语义搜索，并且<strong>网站本身作为一个 MCP Server</strong>，可以被其他 AI Agent 直接调用。
        </p>

        <h3 className="text-base font-semibold text-[#6b89a8] mt-6 mb-3">五大组件</h3>
        <div className="react-review-grid two mb-6">
          <Card className="react-review-card border-[#6b89a8]/30">
            <Card.Header>
              <Card.Description className="text-[#6b89a8]">引擎</Card.Description>
              <Card.Title>NLWeb 应用</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">处理自然语言问题的核心服务引擎，连接平台各部分生成响应。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card border-[#5a9a7a]/30">
            <Card.Header>
              <Card.Description className="text-[#5a9a7a]">规则</Card.Description>
              <Card.Title>NLWeb 协议</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">网站自然语言交互的基本规则集，响应以 JSON 格式返回（常用 Schema.org）。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card border-[#c9b687]/30">
            <Card.Header>
              <Card.Description className="text-[#c9b687]">桥接</Card.Description>
              <Card.Title>MCP 端点</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">每个 NLWeb 配置同时也是一个 MCP Server，提供 <code>ask</code> 方法供外部 Agent 调用。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card border-[#8b7aa8]/30">
            <Card.Header>
              <Card.Description className="text-[#8b7aa8]">存储</Card.Description>
              <Card.Title>嵌入模型 + 向量数据库</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">将网站内容转为向量，存储于 Qdrant / Milvus / Elasticsearch 等向量数据库，支持语义搜索。</p>
            </Card.Content>
          </Card>
        </div>
      </ReviewSection>

      {/* SECTION 05 · 学习亮点 */}
      <ReviewSection eyebrow="SECTION 05 · 学习亮点" title="今天的核心收获">
        <Card className="react-review-card border-[#c9b687]/30 mb-4">
          <Card.Header>
            <Card.Description className="text-[#c9b687]">⭐ 钥匙级洞察</Card.Description>
            <Card.Title>MCP vs A2A 的分界判据</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xs text-[#b6bec8]">学习者在没看任何资料的情况下，用直觉推出了 MCP 的三层架构和 A2A 的三大需求（能力发现、信息汇总、结果整合）。在追问中提炼出核心分界判据——<strong>"这个任务需要有自己的大脑（自主推理能力）吗？"</strong>——不需要就用 MCP Tool，需要就用 A2A Agent。这个判据比"Tool vs Agent"更底层、更准确。</p>
          </Card.Content>
        </Card>

        <Card className="react-review-card border-[#6b89a8]/30 mb-4">
          <Card.Header>
            <Card.Description className="text-[#6b89a8]">🔗 设计模式连接</Card.Description>
            <Card.Title>MCP = Adapter + Service Discovery</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xs text-[#b6bec8]">学习者主动将 MCP 与适配器设计模式建立连接。更进一步指出核心差异：传统 Adapter 是编译时写死，MCP 是运行时动态发现——"API 变了代码也要跟着改"在 MCP 下不再成立。</p>
          </Card.Content>
        </Card>

        <Card className="react-review-card border-[#5a9a7a]/30">
          <Card.Header>
            <Card.Description className="text-[#5a9a7a]">📖 历史视角</Card.Description>
            <Card.Title>理解协议为什么被发明</Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-xs text-[#b6bec8]">通过对比 MCP/A2A 出现前的旧方案（Function Calling 供应商锁定、LangChain 框架锁定、点对点集成的 O(n²) 灾难），学习者理解了这些协议不只是"新技术"，而是对真实痛点的标准化回应。</p>
          </Card.Content>
        </Card>
      </ReviewSection>

      {/* SECTION 06 · 盲点 */}
      <ReviewSection eyebrow="SECTION 06 · 需要加强" title="盲点与待巩固">
        <div className="react-review-grid three mb-6">
          <Card className="react-review-card border-[#a86b5c]/30">
            <Card.Header>
              <Card.Description className="text-[#a86b5c]">需加强</Card.Description>
              <Card.Title>Tool 与 Resource 的区分</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">首答时混淆了"Tool 操作 Resource"的关系。正确理解：Tool 和 Resource 是 MCP Server 暴露的两种<strong>并列</strong>能力入口。判据：看一眼就好 → Resource；需要动手执行 → Tool。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card border-[#a86b5c]/30">
            <Card.Header>
              <Card.Description className="text-[#a86b5c]">需加强</Card.Description>
              <Card.Title>MCP Prompts 的定位</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">首答将 Prompts 描述为"提示 Agent 理解工具怎么使用"——这是说明书思维。实际上 Prompts 是<strong>预定义的对话模板</strong>（半成品 prompt），客户端拿模板填参数直接用。</p>
            </Card.Content>
          </Card>
          <Card className="react-review-card border-[#a86b5c]/30">
            <Card.Header>
              <Card.Description className="text-[#a86b5c]">需加强</Card.Description>
              <Card.Title>NLWeb 的独特价值</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-xs text-[#b6bec8]">首答将 NLWeb 简化为"AI 拿网页信息"。实际上它的独特价值在于：① 网站内容向量化 + 语义搜索 ② 网站本身作为 MCP Server 被其他 Agent 调用。</p>
            </Card.Content>
          </Card>
        </div>
      </ReviewSection>

      {/* SECTION 07 · 报告 */}
      <ReviewSection eyebrow="SECTION 07 · 学习报告" title="📊 本单元学习报告">
        <Card className="react-review-card border-[#5a9a7a]/30 mb-4">
          <Card.Header>
            <Card.Description className="text-[#5a9a7a]">A 层 · 必须深入理解</Card.Description>
            <Card.Title>7 个核心知识点</Card.Title>
          </Card.Header>
          <Card.Content>
            <ul className="text-xs text-[#b6bec8] space-y-1">
              <li>MCP 客户端-服务器架构（Host → Client → Server）</li>
              <li>MCP 三大能力：Tools（动作）/ Resources（只读）/ Prompts（模板）</li>
              <li>MCP vs 传统 API 三大优势（动态发现 / 跨 LLM 互操作 / 标准化安全）</li>
              <li>A2A 四大组件：Agent Card / Executor / Artifact / Event Queue</li>
              <li>A2A vs MCP 核心分界线（需要自己的大脑吗？）</li>
              <li>MCP = Adapter Pattern + Service Discovery</li>
              <li>A2A Agent Card = 动态能力发现（非编译时写死）</li>
            </ul>
          </Card.Content>
        </Card>

        <Card className="react-review-card border-[#a86b5c]/30 mb-4">
          <Card.Header>
            <Card.Description className="text-[#a86b5c]">需要加强</Card.Description>
            <Card.Title>4 个薄弱点</Card.Title>
          </Card.Header>
          <Card.Content>
            <ul className="text-xs text-[#b6bec8] space-y-1">
              <li>Tool vs Resource 的并列关系（非 Tool 操作 Resource）</li>
              <li>MCP Prompts = 对话模板，非"说明书"</li>
              <li>NLWeb 的独特价值（非传统爬虫替代）</li>
              <li>A2A Event Queue 的具体机制（异步可靠性）</li>
            </ul>
          </Card.Content>
        </Card>

        <Card className="react-review-card border-[#c9b687]/30">
          <Card.Header>
            <Card.Description className="text-[#c9b687]">复习计划</Card.Description>
            <Card.Title>间隔检索时间表</Card.Title>
          </Card.Header>
          <Card.Content>
            <ul className="text-xs text-[#b6bec8] space-y-1">
              <li><strong>D2</strong>：2026-08-05 · 3 题闭卷（MCP 架构 + A2A 组件 + 分界线判据）</li>
              <li><strong>D7</strong>：2026-08-10 · 5 题跨章节（含与多代理设计模式 / 可信赖 Agent 的连接）</li>
              <li><strong>D30</strong>：2026-09-02 · 综合应用（设计一个完整的 MCP + A2A 实际场景）</li>
            </ul>
          </Card.Content>
        </Card>
      </ReviewSection>

      {/* FOOTER */}
      <footer className="react-review-footer">
        <div className="flex justify-between flex-wrap gap-4 text-xs font-mono text-[#8a929e] mb-6">
          <div>2026 · 08 · 03 · 智能体协议 MCP · A2A · NLWeb · 初学</div>
          <div>3 协议 · 7 A 层知识点 · 1 钥匙级洞察 · 4 追问通过</div>
        </div>
        <div className="tag-row">
          {['MCP', 'A2A', 'NLWeb', 'Agent Card', 'Executor', 'Artifact', 'Event Queue', 'Tools', 'Resources', 'Prompts', 'Adapter Pattern', '动态发现', '自主推理', '初学'].map((tag, idx) => (
            <span key={idx}>{tag}</span>
          ))}
        </div>
      </footer>
    </article>
  );
}

export default Review20260803ZhiNengTiXieYi;
