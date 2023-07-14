import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import BottomNavigation from '../components/BottomNavigation';
import SettingList from '../components/SettingList';

const SettingsActivity: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ title: 'SettingsActivity' }}>
      <SettingList />
      <BottomNavigation />
    </AppScreen>
  );
};

export default SettingsActivity;
