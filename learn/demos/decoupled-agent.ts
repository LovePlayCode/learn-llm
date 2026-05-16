// ============================================================
// 解耦三条工程好处 · TypeScript Demo
// 换大脑 · 搭骨架 · 定规则
// ============================================================

// ═══════════════════════════════════════════════════════════════
// 第 1 层：换大脑（Brain）
// 好处：不动骨架和规则，只换 LLM
// ═══════════════════════════════════════════════════════════════

// 统一接口：所有 LLM 都必须长这样
interface Brain {
  name: string;
  chat(systemPrompt: string, userMessage: string): Promise<string>;
}

// 大脑 A：GPT
class GPTBrain implements Brain {
  name = "GPT-4o";
  async chat(systemPrompt: string, userMessage: string): Promise<string> {
    // 实际项目中这里调 OpenAI API
    console.log(`[${this.name}] 收到系统指令 + 用户消息，生成回复...`);
    return `[GPT 回复] 基于规则和用户消息生成的内容`;
  }
}

// 大脑 B：Claude
class ClaudeBrain implements Brain {
  name = "Claude-4";
  async chat(systemPrompt: string, userMessage: string): Promise<string> {
    // 实际项目中这里调 Anthropic API
    console.log(`[${this.name}] 收到系统指令 + 用户消息，生成回复...`);
    return `[Claude 回复] 基于规则和用户消息生成的内容`;
  }
}

// 大脑 C：本地模型
class LocalBrain implements Brain {
  name = "Llama-3-70B";
  async chat(systemPrompt: string, userMessage: string): Promise<string> {
    console.log(`[${this.name}] 本地推理中...`);
    return `[Llama 回复] 基于规则和用户消息生成的内容`;
  }
}

// ═══════════════════════════════════════════════════════════════
// 第 2 层：定规则（Rules）
// 好处：不动模型，就能改变模型的行为
// ═══════════════════════════════════════════════════════════════

interface Rules {
  name: string;
  systemPrompt: string; // ← 这就是"遥控器"！改这里就能换行为
  maxTokens: number;
  temperature: number;
  forbidden: string[]; // 禁止输出的内容
}

// 规则 A：客服 Agent（礼貌、克制、不乱承诺）
const customerServiceRules: Rules = {
  name: "客服规则",
  systemPrompt: `你是一个专业客服。
规则：
1. 永远礼貌，但不要过度承诺
2. 不确定的问题必须说"我需要确认后回复您"
3. 绝对不能编造退款政策
4. 回复控制在 3 句话以内`,
  maxTokens: 200,
  temperature: 0.3, // 低温度 = 行为更可预期（Consistency!）
  forbidden: ["免费", "全额退款", "保证"],
};

// 规则 B：创意写作 Agent（活泼、发散、不受限）
const creativeWriterRules: Rules = {
  name: "创意写作规则",
  systemPrompt: `你是一个天马行空的创意写手。
规则：
1. 大胆使用比喻和意象
2. 不要写套话和空话
3. 每段话必须有一个意想不到的转折`,
  maxTokens: 1000,
  temperature: 0.9, // 高温度 = 更有创意
  forbidden: [], // 创意模式不限制
};

// 🌟 看到了吗？同一个模型（大脑），换一套规则，行为完全不同
// 这就是"不动模型就能改变行为" = 解耦的威力

// ═══════════════════════════════════════════════════════════════
// 第 3 层：搭骨架（Skeleton）
// 好处：复用——所有 Agent 共享这套执行流程
// ═══════════════════════════════════════════════════════════════

class AgentSkeleton {
  private brain: Brain;
  private rules: Rules;

  constructor(brain: Brain, rules: Rules) {
    this.brain = brain;
    this.rules = rules;
  }

  // 骨架定义的标准执行流程（所有 Agent 都走这条路）
  async run(userMessage: string): Promise<string> {
    console.log(`\n${"═".repeat(50)}`);
    console.log(`🤖 Agent 启动`);
    console.log(`   大脑：${this.brain.name}`);
    console.log(`   规则：${this.rules.name}`);
    console.log(`${"═".repeat(50)}`);

    // Step 1: 预处理（骨架负责）
    console.log(`\n📥 Step 1: 预处理用户输入`);
    const processedInput = this.preprocess(userMessage);

    // Step 2: 调用大脑（骨架负责调度，大脑负责生成）
    console.log(`🧠 Step 2: 调用大脑生成回复`);
    const rawOutput = await this.brain.chat(
      this.rules.systemPrompt,
      processedInput
    );

    // Step 3: 后处理 + 规则检查（骨架负责执行规则）
    console.log(`🔍 Step 3: 规则检查（禁止词过滤）`);
    const finalOutput = this.postprocess(rawOutput);

    // Step 4: 返回结果
    console.log(`📤 Step 4: 输出最终结果`);
    console.log(`\n💬 最终回复: ${finalOutput}\n`);

    return finalOutput;
  }

  private preprocess(input: string): string {
    // 统一的预处理：去空白、限长度等
    return input.trim().slice(0, 500);
  }

  private postprocess(output: string): string {
    // 用规则层的 forbidden 列表过滤
    let result = output;
    for (const word of this.rules.forbidden) {
      if (result.includes(word)) {
        console.log(`   ⚠️ 触发禁止词「${word}」，已替换`);
        result = result.replace(word, "[已屏蔽]");
      }
    }
    return result;
  }

  // 🌟 换大脑：运行时热替换，骨架和规则都不用动
  swapBrain(newBrain: Brain): void {
    console.log(`\n🔄 换大脑: ${this.brain.name} → ${newBrain.name}`);
    this.brain = newBrain;
  }

  // 🌟 定规则：运行时热替换，模型和骨架都不用动
  swapRules(newRules: Rules): void {
    console.log(`\n📋 换规则: ${this.rules.name} → ${newRules.name}`);
    this.rules = newRules;
  }
}

// ═══════════════════════════════════════════════════════════════
// 🎬 演示：三层解耦的威力
// ═══════════════════════════════════════════════════════════════

async function demo() {
  console.log("\n🎬 === 解耦三条工程好处 · 实战演示 ===\n");

  // ──── 场景 1：组装一个客服 Agent ────
  console.log("【场景 1】组装客服 Agent = Claude 大脑 + 客服规则 + 通用骨架");
  const agent = new AgentSkeleton(new ClaudeBrain(), customerServiceRules);
  await agent.run("我要退款！");

  // ──── 场景 2：换大脑（不动规则、不动骨架）────
  console.log("\n【场景 2】老板说 Claude 太贵了，换成本地模型");
  console.log("         → 只换大脑，规则和骨架一行代码都不用改！");
  agent.swapBrain(new LocalBrain()); // ← 就这一行！
  await agent.run("我要退款！");

  // ──── 场景 3：定规则（不动模型、不动骨架）────
  console.log("\n【场景 3】同一个模型，从客服变成创意写手");
  console.log("         → 只换规则，模型和骨架一行代码都不用改！");
  agent.swapRules(creativeWriterRules); // ← 就这一行！
  await agent.run("给我写一首关于代码的诗");

  // ──── 场景 4：搭骨架的复用 ────
  console.log("\n【场景 4】再开一个全新的 Agent，骨架直接复用");
  console.log("         → 不用重写流程，new 一个就行");
  const agent2 = new AgentSkeleton(new GPTBrain(), customerServiceRules);
  await agent2.run("你们的退货政策是什么？");

  // ──── 总结 ────
  console.log("\n" + "═".repeat(50));
  console.log("📊 总结：三层各自独立，互不干扰");
  console.log("═".repeat(50));
  console.log(`
┌─────────────────────────────────────────────────┐
│  定规则（Rules）                                 │
│  → 改 systemPrompt / forbidden / temperature    │
│  → 不动模型就能改变行为（遥控器）                │
├─────────────────────────────────────────────────┤
│  搭骨架（Skeleton）                              │
│  → preprocess → call brain → postprocess        │
│  → 所有 Agent 复用同一套流程                     │
├─────────────────────────────────────────────────┤
│  换大脑（Brain）                                 │
│  → 实现统一接口 Brain { chat() }                 │
│  → 换 LLM 只需 swapBrain()，其他不动             │
└─────────────────────────────────────────────────┘
`);
}

demo();
