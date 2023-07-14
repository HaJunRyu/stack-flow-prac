import { stackflow } from '@stackflow/react';
import { basicRendererPlugin } from '@stackflow/plugin-renderer-basic';
import { basicUIPlugin } from '@stackflow/plugin-basic-ui';
import RecentActivity from '../activities/RecentActivity';
import ArticleActivity from '../activities/ArticleActivity';
import FavoritesActivity from '../activities/FavoritesActivity';
import SettingsActivity from '../activities/SettingsActivity';

export const { Stack, useFlow, useStepFlow } = stackflow({
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
  },
  initialActivity: () => 'RecentActivity',
});
