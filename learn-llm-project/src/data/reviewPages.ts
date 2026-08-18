import type { ComponentType } from "react";
import Review20260531ErrorAccumulation from "../review-pages/Review20260531ErrorAccumulation";
import Review20260602TrustworthyAgent from "../review-pages/Review20260602TrustworthyAgent";
import Review20260603PlanningDesign from "../review-pages/Review20260603PlanningDesign";
import Review20260604TccPD from "../review-pages/Review20260604TccPD";
import Review20260604DuoDaiLi from "../review-pages/Review20260604DuoDaiLi";
import Review20260606DuoDaiLiD2 from "../review-pages/Review20260606DuoDaiLiD2";
import Review20260610PlanningDesignD7TuiLi from "../review-pages/Review20260610PlanningDesignD7TuiLi";
import Review20260611DuoDaiLiD7 from "../review-pages/Review20260611DuoDaiLiD7";
import Review20260613HuanCunContextD30 from "../review-pages/Review20260613HuanCunContextD30";
import Review20260623RlhfPianXiangZiXinD30 from "../review-pages/Review20260623RlhfPianXiangZiXinD30";
import Review20260624YuanRenZhi from "../review-pages/Review20260624YuanRenZhi";
import Review20260625ShengChanHuanJing from "../review-pages/Review20260625ShengChanHuanJing";
import Review20260701YuanRenZhiD7ShengChanD2 from "../review-pages/Review20260701YuanRenZhiD7ShengChanD2";
import Review20260702ShengChanHuanJingD7 from "../review-pages/Review20260702ShengChanHuanJingD7";
import Review20260707PlanningTrustworthyDuoDaiLiD30 from "../review-pages/Review20260707PlanningTrustworthyDuoDaiLiD30";
import Review20260709CuoWuLeiJiXianXingZhiShuD30 from "../review-pages/Review20260709CuoWuLeiJiXianXingZhiShuD30";
import Review20260717CuoWuLeiJiXianXingZhiShuZhuiJi from "../review-pages/Review20260717CuoWuLeiJiXianXingZhiShuZhuiJi";
import Review20260727YuanRenZhiD30 from "../review-pages/Review20260727YuanRenZhiD30";
import Review20260803ZhiNengTiXieYi from "../review-pages/Review20260803ZhiNengTiXieYi";
import Review20260806ShangXiaWenGongCheng from "../review-pages/Review20260806ShangXiaWenGongCheng";
import Review20260810AgentJiYiXiTong from "../review-pages/Review20260810AgentJiYiXiTong";
import Review20260813AgentKaiFa from "../review-pages/Review20260813AgentKaiFa";
import Review20260814AgentACeng from "../review-pages/Review20260814AgentACeng";
import Review20260817AgentJiYiXiTongD7 from "../review-pages/Review20260817AgentJiYiXiTongD7";

export interface ReviewPage {
  id: string;
  date: string;
  title: string;
  shortTitle: string;
  sourceFile: string;
  Component: ComponentType;
}

export const reviewPages: ReviewPage[] = [
  {
    id: "review-2026-05-31-error-accumulation-tcc-linear-exponential",
    date: "2026-05-31",
    title: "2026-05-31 · 错误累积 D2 · TCC D3 · 线性 vs 指数钥匙焊死",
    shortTitle: "错误累积 D2 · TCC D3 · 线性 vs 指数钥匙焊死",
    sourceFile: "复习/2026-05-31-错误累积D2+TCC-D3+线性指数钥匙焊死.html",
    Component: Review20260531ErrorAccumulation,
  },
  {
    id: "review-2026-06-02-trustworthy-agent",
    date: "2026-06-02",
    title: "2026-06-02 · 构建可信赖 AI Agent 初学",
    shortTitle: "构建可信赖 AI Agent 初学",
    sourceFile: "learn/2026-06-02-构建可信赖AI代理.html",
    Component: Review20260602TrustworthyAgent,
  },
  {
    id: "review-2026-06-03-planning-design",
    date: "2026-06-03",
    title: "2026-06-03 · Planning Design 规划设计 初学",
    shortTitle: "Planning Design 规划设计 初学",
    sourceFile: "learn/2026-06-03-Planning-Design规划设计.html",
    Component: Review20260603PlanningDesign,
  },
  {
    id: "review-2026-06-04-tcc-planning-design-trustworthy-agent",
    date: "2026-06-04",
    title: "2026-06-04 · TCC D7 毕业 · Planning Design D2 · 可信赖 Agent D2",
    shortTitle: "TCC D7 毕业 · Planning Design D2 · 可信赖 Agent D2",
    sourceFile:
      "复习/2026-06-04-TCC-D7毕业+PlanningDesign-D2+可信赖Agent-D2.html",
    Component: Review20260604TccPD,
  },
  {
    id: "review-2026-06-04-duo-dai-li-she-ji",
    date: "2026-06-04",
    title: "2026-06-04 · 多代理设计模式 初学",
    shortTitle: "多代理设计模式 初学",
    sourceFile: "learn/2026-06-04-多代理设计模式.html",
    Component: Review20260604DuoDaiLi,
  },
  {
    id: "review-2026-06-06-duo-dai-li-d2",
    date: "2026-06-06",
    title: "2026-06-06 · 多代理设计模式 D2 · 协同过滤焊死",
    shortTitle: "多代理设计模式 D2 · 协同过滤焊死",
    sourceFile: "复习/2026-06-06-多代理设计模式D2.html",
    Component: Review20260606DuoDaiLiD2,
  },
  {
    id: "review-2026-06-10-planning-design-d7-tuili-d60",
    date: "2026-06-10",
    title:
      "2026-06-10 · Planning Design D7 + 可信赖 Agent D7 + 推理时计算 D60 毕业",
    shortTitle: "Planning Design D7 · 可信赖 Agent D7 · 推理时计算 D60",
    sourceFile: "复习/2026-06-10-PlanningDesign-D7+推理时计算D60.html",
    Component: Review20260610PlanningDesignD7TuiLi,
  },
  {
    id: "review-2026-06-11-duo-dai-li-d7",
    date: "2026-06-11",
    title: "2026-06-11 · 多代理设计模式 D7 跨章节综合压测",
    shortTitle: "多代理设计模式 D7 · 跨章节综合",
    sourceFile: "复习/2026-06-11-多代理设计模式D7.html",
    Component: Review20260611DuoDaiLiD7,
  },
  {
    id: "review-2026-06-13-huancun-context-d30",
    date: "2026-06-13",
    title: "2026-06-13 · 缓存 + Claude Code 上下文管理 D30 综合压测",
    shortTitle: "缓存 + 上下文管理 D30 · 进入长期记忆",
    sourceFile: "复习/2026-06-13-缓存+ClaudeCode上下文管理D30.html",
    Component: Review20260613HuanCunContextD30,
  },
  {
    id: "review-2026-06-23-rlhf-pian-xiang-zi-xin-d30",
    date: "2026-06-23",
    title: "2026-06-23 · RLHF 偏向自信 D30 综合压测",
    shortTitle: "RLHF 偏向自信 D30 · 通过",
    sourceFile: "复习/2026-06-23-RLHF偏向自信D30.html",
    Component: Review20260623RlhfPianXiangZiXinD30,
  },
  {
    id: "review-2026-06-24-yuan-ren-zhi",
    date: "2026-06-24",
    title: "2026-06-24 · 元认知 Metacognition 初学",
    shortTitle: "元认知 Metacognition 初学",
    sourceFile: "learn/2026-06-24-元认知Metacognition.html",
    Component: Review20260624YuanRenZhi,
  },
  {
    id: "review-2026-06-25-sheng-chan-huan-jing",
    date: "2026-06-25",
    title: "2026-06-25 · 生产环境 AI 代理：可观测性与评估 初学",
    shortTitle: "生产环境可观测性与评估 初学",
    sourceFile: "learn/2026-06-25-生产环境AI代理可观测性与评估.html",
    Component: Review20260625ShengChanHuanJing,
  },
  {
    id: "review-2026-07-01-yuan-ren-zhi-d7-sheng-chan-d2",
    date: "2026-07-01",
    title: "2026-07-01 · 元认知 D2+D7 通过 + 生产环境 D2 通过",
    shortTitle: "元认知 D7 + 生产环境 D2 · 三轮连通",
    sourceFile: "复习/2026-07-01-元认知D7+生产环境D2.html",
    Component: Review20260701YuanRenZhiD7ShengChanD2,
  },
  {
    id: "review-2026-07-02-sheng-chan-huan-jing-d7",
    date: "2026-07-02",
    title: "2026-07-02 · 生产环境可观测性与评估 D7 跨章节综合",
    shortTitle: "生产环境 D7 · 跨章节综合",
    sourceFile: "复习/2026-07-02-生产环境D7.html",
    Component: Review20260702ShengChanHuanJingD7,
  },
  {
    id: "review-2026-07-07-planning-trustworthy-duo-dai-li-d30",
    date: "2026-07-07",
    title: "2026-07-07 · Planning Design + 可信赖 Agent + 多代理 D30 三章合并毕业",
    shortTitle: "Planning + 可信赖 + 多代理 D30 · 三章合并毕业",
    sourceFile: "复习/2026-07-07-PlanningDesign+可信赖Agent+多代理D30.html",
    Component: Review20260707PlanningTrustworthyDuoDaiLiD30,
  },
  {
    id: "review-2026-07-09-cuowu-leiji-xianxing-zhishu-d30",
    date: "2026-07-09",
    title: "2026-07-09 · 错误累积 + 线性 vs 指数 D30+ 综合压测",
    shortTitle: "错误累积 + 线性vs指数 D30+ · 钥匙跨域迁移",
    sourceFile: "复习/2026-07-09-错误累积+线性vs指数D30.html",
    Component: Review20260709CuoWuLeiJiXianXingZhiShuD30,
  },
  {
    id: "review-2026-07-17-cuowu-leiji-xianxing-zhishu-zhui-ji",
    date: "2026-07-17",
    title: "2026-07-17 · 错误累积 + 线性 vs 指数 D30+ 术语追击",
    shortTitle: "错误累积 + 线性vs指数 D30+ · 术语追击",
    sourceFile: "复习/2026-07-17-错误累积+线性vs指数D30+术语追击.html",
    Component: Review20260717CuoWuLeiJiXianXingZhiShuZhuiJi,
  },
  {
    id: "review-2026-07-27-yuan-ren-zhi-d30",
    date: "2026-07-27",
    title: "2026-07-27 · 元认知 Metacognition D30 综合应用",
    shortTitle: "元认知 D30 · 综合应用 + 跨章节缝合",
    sourceFile: "复习/2026-07-27-元认知D30.html",
    Component: Review20260727YuanRenZhiD30,
  },
  {
    id: "review-2026-08-03-zhi-neng-ti-xie-yi",
    date: "2026-08-03",
    title: "2026-08-03 · 智能体协议 MCP、A2A 与 NLWeb 初学",
    shortTitle: "智能体协议 MCP · A2A · NLWeb 初学",
    sourceFile: "learn/2026-08-03-智能体协议MCP-A2A-NLWeb.html",
    Component: Review20260803ZhiNengTiXieYi,
  },
  {
    id: "review-2026-08-06-shang-xia-wen-gong-cheng",
    date: "2026-08-06",
    title: "2026-08-06 · 上下文工程 Context Engineering 初学",
    shortTitle: "上下文工程 Context Engineering 初学",
    sourceFile: "learn/2026-08-06-上下文工程ContextEngineering.html",
    Component: Review20260806ShangXiaWenGongCheng,
  },
  {
    id: "review-2026-08-10-agent-memory",
    date: "2026-08-10",
    title: "2026-08-10 · Agent 记忆系统 Agent Memory 初学",
    shortTitle: "Agent 记忆系统 初学",
    sourceFile: "learn/2026-08-10-Agent记忆系统.html",
    Component: Review20260810AgentJiYiXiTong,
  },
  {
    id: "review-2026-08-13-agent-kai-fa",
    date: "2026-08-13",
    title: "2026-08-13 · Agent 开发核心模式 · 从 deer-flow 教学包提炼",
    shortTitle: "Agent 开发核心模式 · deer-flow",
    sourceFile: "learn/2026-08-13-Agent开发核心模式.html",
    Component: Review20260813AgentKaiFa,
  },
  {
    id: "review-2026-08-14-agent-a-ceng",
    date: "2026-08-14",
    title: "2026-08-14 · Agent 开发 A 层六单元收官（复述-追问-实践闭环）",
    shortTitle: "Agent 开发 A 层收官 · 六单元",
    sourceFile: "learn/2026-08-14-Agent开发A层收官.html",
    Component: Review20260814AgentACeng,
  },
  {
    id: "review-2026-08-17-agent-memory-d7",
    date: "2026-08-17",
    title: "2026-08-17 · Agent 记忆系统 D7 跨章节综合（含 D2 补验）",
    shortTitle: "Agent 记忆系统 D7",
    sourceFile: "复习/2026-08-17-Agent记忆系统D7.html",
    Component: Review20260817AgentJiYiXiTongD7,
  },
];

export const getReviewPageBySource = (sourceFile: string) =>
  reviewPages.find((page) => page.sourceFile === sourceFile) ?? null;
