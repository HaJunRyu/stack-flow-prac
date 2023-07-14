import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { useFlow } from '../stackflow';
import BottomNavigation from '../components/BottomNavigation';

const SettingsActivity: ActivityComponentType = () => {
  const { push } = useFlow();

  const onClick = () => {
    push('ArticleActivity', {
      title: 'Hello',
    });
  };

  return (
    <AppScreen appBar={{ title: 'SettingsActivity' }}>
      <div>
        SettingsActivity
        <button onClick={onClick}>Go to article page</button>
      </div>
      <BottomNavigation />
    </AppScreen>
  );
};

export default SettingsActivity;
