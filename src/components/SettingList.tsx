import { Fragment } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import { ActivityKeys, useFlow } from '../stackflow';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  })
);

const SETTING_LIST: Array<{ title: string; activity: ActivityKeys }> = [
  {
    title: 'account',
    activity: 'AccountActivity',
  },
  {
    title: 'my articles',
    activity: 'MyArticlesActivity',
  },
];

export default function SettingList() {
  const classes = useStyles();

  const { push } = useFlow();

  const onPushArticleActivity = (targetActivity: ActivityKeys) => {
    push(targetActivity, {});
  };

  return (
    <List className={classes.root}>
      {SETTING_LIST.map(({ title, activity }) => (
        <Fragment key={title}>
          <ListItem alignItems="flex-start" onClick={() => onPushArticleActivity(activity)}>
            <ListItemText primary={title} />
          </ListItem>
          <Divider variant="middle" component="li" />
        </Fragment>
      ))}
    </List>
  );
}
