import { AppScreen } from '@stackflow/plugin-basic-ui';
import { FC } from 'react';
import { DUMMY_ARTICLES } from '../constants/articles';
import Article from '../components/Article';
import OtherArticleList from '../components/OtherArticleList';
import { Divider } from '@material-ui/core';

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
      <Article title={article.title} content={article.content} thumbnailSrc={article.thumbnail} />
      <Divider style={{ marginTop: 30 }} />
      <OtherArticleList />
    </AppScreen>
  );
};

export default ArticleActivity;
