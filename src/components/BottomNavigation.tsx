import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiBottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SettingsIcon from '@material-ui/icons/Settings';
import { useFlow } from '../stackflow';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
});

export default function BottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <MuiBottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Recent" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Setting" icon={<SettingsIcon />} />
    </MuiBottomNavigation>
  );
}
