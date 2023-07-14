import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useStepFlow } from '../stackflow';
import { FC } from 'react';
import { DUMMY_ARTICLES } from '../constants/articles';

interface ArticleActivityProps {
  params: {
    pk: number;
  };
}
const ArticleActivity: FC<ArticleActivityProps> = ({ params }) => {
  const article = DUMMY_ARTICLES.find(({ pk }) => params.pk === pk);

  if (!article) {
    return null;
  }

  return (
    <AppScreen appBar={{ title: 'Article' }}>
      <div>
        <h1>{article.title}</h1>
      </div>
    </AppScreen>
  );
};

export default ArticleActivity;
