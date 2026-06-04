import type { ComponentType } from 'react';
import Review20260531ErrorAccumulation from '../review-pages/Review20260531ErrorAccumulation';

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
    id: 'review-2026-05-31-error-accumulation-tcc-linear-exponential',
    date: '2026-05-31',
    title: '2026-05-31 · 错误累积 D2 · TCC D3 · 线性 vs 指数钥匙焊死',
    shortTitle: '错误累积 D2 · TCC D3 · 线性 vs 指数钥匙焊死',
    sourceFile: '复习/2026-05-31-错误累积D2+TCC-D3+线性指数钥匙焊死.html',
    Component: Review20260531ErrorAccumulation,
  },
];

export const getReviewPageBySource = (sourceFile: string) => reviewPages.find(page => page.sourceFile === sourceFile) ?? null;
