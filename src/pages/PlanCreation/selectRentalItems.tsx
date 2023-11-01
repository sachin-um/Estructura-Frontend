import { Box, Button, Pagination, Stack } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useFetchRentingItems } from '../../hooks/rentingItem/useFetchRentingItems';
import Paginate from '../../utils/Paginate';

const SelectRentingItems = ({
  selected,
  setter,
}: {
  selected: RentingItem[];
  setter: React.Dispatch<React.SetStateAction<RentingItem[]>>;
}) => {
  const { fetchRentingItems, rentingItems } = useFetchRentingItems();
  useEffect(() => {
    fetchRentingItems({});
  });

  const select = useCallback(
    (su: RentingItem) => {
      if (selected.find((u) => u.id === su.id) === undefined) {
        setter([...selected, su]);
      }
    },
    [setter, selected],
  );

  const remove = useCallback(
    (ru: RentingItem) => {
      const newstate = selected.filter((u) => u.id !== ru.id);
      setter(newstate);
    },
    [selected, setter],
  );

  const notSelected = rentingItems.filter(
    (p) => selected.find((s) => p.id === s.id) === undefined,
  );

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [pageSize, _setPageSize] = useState(8);
  const [pageNumber, setPageNumber] = useState(1);

  const displayed = Paginate(notSelected, pageNumber, pageSize);

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen} variant="contained">
        Add/Remove Renting Items
      </Button>
      <Stack>
        {selected.map((u) => (
          <div key={u.id} style={{ textAlign: 'left' }}>
            <Link target="_blank" to={`/rentingItems/${u.id}`}>
              {u.name} Rs.{u.price}
            </Link>
            <Button
              onClick={() => {
                remove(u);
              }}
            >
              Remove
            </Button>
          </div>
        ))}
      </Stack>
      <Dialog
        aria-labelledby="responsive-dialog-title"
        fullScreen={fullScreen}
        onClose={handleClose}
        open={open}
      >
        <DialogTitle id="responsive-dialog-title">
          Select RentingItems
        </DialogTitle>
        <DialogContent>
          <Stack>
            {selected.map((u) => (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  textAlign: 'left',
                }}
                key={u.id}
              >
                <Link target="_blank" to={`/rentingItems/${u.id}`}>
                  {u.name} Rs.{u.price}
                </Link>
                <Button
                  onClick={() => {
                    remove(u);
                  }}
                >
                  Remove
                </Button>
              </div>
            ))}
          </Stack>
          <hr />
          <Stack>
            {displayed.map((u) => (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  textAlign: 'left',
                }}
                key={u.id}
              >
                <Link target="_blank" to={`/rentingItems/${u.id}`}>
                  {u.name} Rs.{u.price}
                </Link>
                <Button
                  onClick={() => {
                    select(u);
                  }}
                >
                  Select
                </Button>
              </div>
            ))}
            {notSelected.length > 0 && (
              <Box
                display={'flex'}
                justifyContent={'center'}
                marginBottom={'2rem'}
              >
                <Pagination
                  onChange={(_event, value) => {
                    setPageNumber(value);
                  }}
                  count={Math.ceil(notSelected.length / pageSize)}
                />
              </Box>
            )}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default SelectRentingItems;
