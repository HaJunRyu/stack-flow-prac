import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useStepFlow } from './stackflow';

type ArticleParams = {
  title: string;
};
const Article: ActivityComponentType<ArticleParams> = ({ params }) => {
  // 타입 안정성을 위해 현재 액티비티의 이름을 넣어줘요
  const { stepPush } = useStepFlow('Article');

  const onNextClick = () => {
    // `stepPush()`을 호출하면 params.title이 변경돼요.
    stepPush({
      title: 'Next Title',
    });
  };

  return (
    <AppScreen appBar={{ title: 'Article' }}>
      <div>
        <h1>{params.title}</h1>
        <button onClick={onNextClick}>next</button>
      </div>
    </AppScreen>
  );
};

export default Article;
