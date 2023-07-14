import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { TextField } from '@material-ui/core';

const AccountActivity: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ title: 'AccountActivity' }}>
      <TextField label="id" fullWidth />
      <TextField type="password" label="password" fullWidth />
    </AppScreen>
  );
};

export default AccountActivity;
