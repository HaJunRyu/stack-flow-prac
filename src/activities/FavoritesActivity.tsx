import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import BottomNavigation from '../components/BottomNavigation';
import AlignItemsList from '../components/AlignItemsList';

const FavoritesActivity: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ title: 'FavoritesActivity' }}>
      <AlignItemsList />
      <BottomNavigation />
    </AppScreen>
  );
};

export default FavoritesActivity;
