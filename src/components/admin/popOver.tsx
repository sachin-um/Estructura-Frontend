import { Popover } from '@mui/material';
import { useState } from 'react';

import NoResultsFound from '../NoResults';
import RequestView from './RequestView';

const useUserViewPopOver = () => {
  const [popoverAnchorEl, setPopoverAnchorEl] = useState<HTMLElement | null>(
    null,
  );
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);

  const handleClosePopover = () => {
    setPopoverAnchorEl(null);
    setSelectedUser(undefined);
    setIsPopoverOpen(false);
  };
  const handleOpenPopover =
    (user: User) => (event: React.SyntheticEvent<HTMLButtonElement>) => {
      setPopoverAnchorEl(event.currentTarget);
      setSelectedUser(user);
      setIsPopoverOpen(true);
    };

  return {
    Popover: () => (
      <>
        {/* Popover */}
        <Popover
          anchorOrigin={{
            horizontal: 'center',
            vertical: 'center',
          }}
          sx={{
            '& .MuiPopover-paper': {
              maxHeight: '80vh !important', // Add !important
              maxWidth: '80% !important', // Add !important
            },
          }}
          transformOrigin={{
            horizontal: 'center',
            vertical: 'center',
          }}
          anchorEl={popoverAnchorEl}
          onClose={handleClosePopover}
          open={isPopoverOpen}
        >
          {selectedUser && <RequestView user={selectedUser} />}
          {selectedUser === undefined && <NoResultsFound />}
        </Popover>
      </>
    ),
    handleOpenPopover,
  };
};

export default useUserViewPopOver;
