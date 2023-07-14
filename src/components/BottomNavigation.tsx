import { makeStyles } from '@material-ui/core/styles';
import MuiBottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SettingsIcon from '@material-ui/icons/Settings';
import { ActivityKeys, useFlow } from '../stackflow';
import { useActivity } from '@stackflow/react';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
});

const ACTIVITY_KEYS: ActivityKeys[] = ['RecentActivity', 'FavoritesActivity', 'SettingsActivity'];

export default function BottomNavigation() {
  const classes = useStyles();

  const { replace } = useFlow();
  const activity = useActivity();

  const currentMenuIndex = ACTIVITY_KEYS.findIndex(activityKey => activityKey === activity.name);

  return (
    <MuiBottomNavigation
      value={currentMenuIndex}
      onChange={(event, targetIndex) => {
        replace(ACTIVITY_KEYS[targetIndex], {}, { animate: false });
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Recent" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
    </MuiBottomNavigation>
  );
}
