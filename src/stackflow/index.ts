import { stackflow } from '@stackflow/react';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import RecentActivity from '../activities/RecentActivity';
import ArticleActivity from '../activities/ArticleActivity';
import FavoritesActivity from '../activities/FavoritesActivity';
import SettingsActivity from '../activities/SettingsActivity';
import AccountActivity from '../activities/AccountActivity';
import MyArticlesActivity from '../activities/MyArticlesActivity';

export const { Stack, useFlow, useStepFlow, activities } = stackflow({
  transitionDuration: 350,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: 'cupertino',
    }),
  ],
  activities: {
    RecentActivity,
    FavoritesActivity,
    SettingsActivity,
    ArticleActivity,
    AccountActivity,
    MyArticlesActivity,
  },
  initialActivity: () => 'RecentActivity',
});

export type ActivityKeys = keyof typeof activities;
