import React, { Fragment } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { useFlow } from '../stackflow';
import { DUMMY_ARTICLES } from '../constants/articles';

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

export default function AlignItemsList() {
  const classes = useStyles();

  const { push } = useFlow();

  const onPushArticleActivity = (targetArticlePk: number) => {
    push('ArticleActivity', {
      pk: targetArticlePk,
    });
  };

  return (
    <List className={classes.root}>
      {DUMMY_ARTICLES.map(({ pk, author, title, content }) => (
        <Fragment key={pk}>
          <ListItem alignItems="flex-start" onClick={() => onPushArticleActivity(pk)}>
            <ListItemAvatar>
              <Avatar alt={author.name} src={author.avatarSrc} />
            </ListItemAvatar>
            <ListItemText primary={title} secondary={content} />
          </ListItem>
          <Divider variant="inset" component="li" />
        </Fragment>
      ))}
    </List>
  );
}
