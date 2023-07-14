import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { Box, Button, Container } from '@material-ui/core';
import { useFlow } from '../stackflow';

const MyArticlesActivity: ActivityComponentType = () => {
  const { pop } = useFlow();

  const onPopCurrentActivity = () => {
    pop();
  };

  return (
    <AppScreen appBar={{ title: 'MyArticlesActivity' }}>
      <Container style={{ textAlign: 'center' }}>
        <Box style={{ marginBottom: 10 }}>My article does not exist.</Box>
        <Button variant="contained" color="primary" onClick={onPopCurrentActivity}>
          back
        </Button>
      </Container>
    </AppScreen>
  );
};

export default MyArticlesActivity;
