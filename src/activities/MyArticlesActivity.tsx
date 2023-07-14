import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { Box, Button, Container } from '@material-ui/core';

const MyArticlesActivity: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ title: 'MyArticlesActivity' }}>
      <Container style={{ textAlign: 'center' }}>
        <Box style={{ marginBottom: 10 }}>My article does not exist.</Box>
        <Button variant="contained" color="primary">
          favorites articles
        </Button>
      </Container>
    </AppScreen>
  );
};

export default MyArticlesActivity;
