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
];

export const getReviewPageBySource = (sourceFile: string) =>
  reviewPages.find((page) => page.sourceFile === sourceFile) ?? null;
