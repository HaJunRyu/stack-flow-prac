import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlow } from '../stackflow';
import BottomNavigation from '../components/BottomNavigation';

const RecentActivity: ActivityComponentType = () => {
  const { push } = useFlow();

  const onClick = () => {
    push('ArticleActivity', {
      title: 'Hello',
    });
  };

  return (
    <AppScreen appBar={{ title: 'RecentActivity' }}>
      <div>
        RecentActivity
        <button onClick={onClick}>Go to article page</button>
      </div>
      <BottomNavigation />
    </AppScreen>
  );
};

export default RecentActivity;
