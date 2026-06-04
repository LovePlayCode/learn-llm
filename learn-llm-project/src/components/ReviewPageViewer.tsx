import { Button } from '@heroui/react';
import type { ReviewPage } from '../data/reviewPages';

interface ReviewPageViewerProps {
  page: ReviewPage;
  onBack: () => void;
}

function ReviewPageViewer({ page, onBack }: ReviewPageViewerProps) {
  const PageComponent = page.Component;

  return (
    <main className="converted-page-shell">
      <nav className="converted-page-toolbar" aria-label="React 复习页面导航">
        <div>
          <span className="eyebrow">React Review Page</span>
          <strong>{page.shortTitle}</strong>
          <small>{page.sourceFile}</small>
        </div>
        <Button variant="secondary" onPress={onBack}>
          返回复习工作台
        </Button>
      </nav>
      <PageComponent />
    </main>
  );
}

export default ReviewPageViewer;
