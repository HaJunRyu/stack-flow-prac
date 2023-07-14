import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useStepFlow } from '../stackflow';

type ArticleParams = {
  title: string;
};
const ArticleActivity: ActivityComponentType<ArticleParams> = ({ params }) => {
  // 타입 안정성을 위해 현재 액티비티의 이름을 넣어줘요
  const { stepPush, stepReplace, stepPop } = useStepFlow('ArticleActivity');

  const onNextClick = () => {
    // `stepPush()`을 호출하면 params.title이 변경돼요.
    stepPush({
      title: 'Next Title',
    });
  };

  const onChangeClick = () => {
    // `stepReplace()`을 호출하면 params.title이 변경돼요
    stepReplace({
      title: 'Next Title',
    });
  };

  const onPrevClick = () => {
    // `stepPop()`을 호출하면 이전 params.title로 돌아가요
    stepPop();
  };

  return (
    <AppScreen appBar={{ title: 'Article' }}>
      <div>
        <h1>{params.title}</h1>
        <button onClick={onNextClick}>next</button>
        <button onClick={onChangeClick}>change</button>
        <button onClick={onPrevClick}>prev</button>
      </div>
    </AppScreen>
  );
};

export default ArticleActivity;
