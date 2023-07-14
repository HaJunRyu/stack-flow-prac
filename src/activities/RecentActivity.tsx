import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import BottomNavigation from '../components/BottomNavigation';
import AlignItemsList from '../components/AlignItemsList';

const RecentActivity: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ title: 'RecentActivity' }}>
      <AlignItemsList />
      <BottomNavigation />
    </AppScreen>
  );
};

export default RecentActivity;
