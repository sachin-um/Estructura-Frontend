import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';

import TopAppBar from '../../components/TopAppBar';
import UserRequests from '../../components/admin/UserRequests';
import VerifiedUsers from '../../components/admin/VerifiedUserTable';

const UserManage = () => {
  const [currentTab, setCurrentTab] = useState('Request');
  const handleTabChange = (
    _event: React.SyntheticEvent<Element, Event>,
    value: string,
  ) => {
    setCurrentTab(value);
  };

  return (
    <div>
      <TopAppBar />
      <Box m="20px">
        <Tabs centered onChange={handleTabChange} value={currentTab}>
          <Tab label="Members" value="Members" />
          <Tab label="Request" value="Request" />
        </Tabs>
        {currentTab === 'Request' && <UserRequests />}
        {currentTab === 'Members' && <VerifiedUsers />}
      </Box>
    </div>
  );
};

export default UserManage;
