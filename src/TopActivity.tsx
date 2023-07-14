import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlow } from './stackflow';
import BottomNavigation from './BottomNavigation';

const TopActivity: ActivityComponentType = () => {
  const { push } = useFlow();

  const onClick = () => {
    push('Article', {
      title: 'Hello',
    });
  };

  return (
    <AppScreen appBar={{ title: 'TopActivity' }}>
      <div>
        My Activity
        <button onClick={onClick}>Go to article page</button>
      </div>
      <BottomNavigation />
    </AppScreen>
  );
};

export default TopActivity;
