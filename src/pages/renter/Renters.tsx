import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TopAppBar from '../../components/TopAppBar';
import Carousel from '../../components/blog/carousel';
import RentingCards from '../../components/renter/RentingItemCards';
import RentingSidebar from '../../components/renter/RentingSideBar';
import {
  fetchRentingItemsThunk,
  getRentingItemsStatus,
  selectAllRentingItems,
} from '../../redux/Renting/RentingItemsReducer';
import {
  fetchUsers,
  getUsersStatus,
  selectAllUsers,
} from '../../redux/UserInfo/UsersInfoReducer';

const topImages = [
  {
    image:
      'https://images.pexels.com/photos/2068478/pexels-photo-2068478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Heavy Machinery',
  },
  {
    image:
      'https://images.pexels.com/photos/17159887/pexels-photo-17159887/free-photo-of-construction-machine-behind-fence.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Portable Machines',
  },
  {
    image:
      'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Equipment',
  },
  {
    image:
      'https://images.pexels.com/photos/266125/pexels-photo-266125.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Power Tools',
  },
  {
    image:
      'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Construction Site Vehicles',
  },
];

const Renters = () => {
  const [allRentersData, setAllRentersData] = useState<RentingItem[]>([]);
  const [filteredData, setFilteredData] = useState<RentingItem[]>([]);

  const [selectedTab, setSelectedTab] =
    useState<RentingCategory>('HEAVY_MACHINERY');
  const [sortingOption, setSortingOption] =
    useState<sortingOption>('Price: High to Low');

  const [locationOption, setLocationOption] = useState('islandwide');
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>([]);

  const data = useSelector(selectAllRentingItems);
  const status = useSelector(getRentingItemsStatus);

  const dispatch: ThunkDispatch<RentingItem[], void, AnyAction> = useDispatch();
  const dispatchUsers: ThunkDispatch<User[], void, AnyAction> = useDispatch();

  const usersInfo = useSelector(selectAllUsers);
  const usersStatus = useSelector(getUsersStatus);

  useEffect(() => {
    if (usersStatus === 'idle') {
      dispatchUsers(fetchUsers());
    } else {
      console.log(usersInfo);
    }
  }, [usersStatus, dispatchUsers, usersInfo]);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRentingItemsThunk());
    } else if (status === 'succeeded') {
      const filteredByCategory = data.filter(
        (item) => item.category === selectedTab,
      );

      if (locationOption !== 'islandwide' && selectedDistricts.length > 0) {
        setAllRentersData(
          filteredByCategory.filter((item) => {
            const user = usersInfo.find((u) => u.id === item.createdBy);
            if (user) {
              return selectedDistricts.includes(user.district ?? '');
            }
            return false;
          }),
        );
      } else {
        setAllRentersData(filteredByCategory);
      }
    }
  }, [
    status,
    dispatch,
    data,
    selectedTab,
    locationOption,
    selectedDistricts,
    usersInfo,
  ]);

  useEffect(() => {
    if (locationOption !== 'islandwide' && selectedDistricts.length > 0) {
      setFilteredData((da) =>
        allRentersData.filter((item) => {
          const user = usersInfo.find((user) => user.id === item.createdBy);
          if (user) {
            return selectedDistricts.includes(user.district ?? '');
          }
          return false;
        }),
      );
    } else {
      setFilteredData(allRentersData);
    }

    switch (sortingOption) {
      case 'Price: Low to High': // Price: Low to High
        setFilteredData((da) => [...da].sort((a, b) => a.price - b.price));
        break;
      case 'Price: High to Low': // Price: High to Low
        setFilteredData((da) => [...da].sort((a, b) => b.price - a.price));
        break;
      case 'Date: Newest on Top': // Date: Newest on Top
        setFilteredData((da) =>
          [...da].sort(
            (a, b) =>
              new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime(),
          ),
        );
        break;
      case 'Date: Oldest on Top': // Date: Oldest on Top
        setFilteredData((da) =>
          [...da].sort(
            (a, b) =>
              new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime(),
          ),
        );
        break;
      default:
        break;
    }
  }, [
    allRentersData,
    locationOption,
    selectedDistricts,
    sortingOption,
    usersInfo,
  ]);

  useEffect(() => {
    setFilteredData(allRentersData);
  }, [allRentersData]);

  return (
    <>
      <TopAppBar />
      <Carousel cards={topImages} />
      <div
        style={{ display: 'flex', justifyContent: 'flex-end', margin: '20px' }}
      >
        <button
          onClick={() => {
            setSelectedTab('HEAVY_MACHINERY');
            setAllRentersData((_data) =>
              data.filter((item) => item.category === 'HEAVY_MACHINERY'),
            );
            console.log(allRentersData);
          }}
          style={{
            backgroundColor:
              selectedTab === 'HEAVY_MACHINERY' ? '#804000' : 'transparent',
            border: '1px solid #804000',
            borderRadius: '4px',
            color: selectedTab === 'HEAVY_MACHINERY' ? '#fff' : '#804000',
            cursor: 'pointer',
            fontSize: 14,
            marginRight: '15px',
            padding: '5px 10px',
          }}
        >
          Heavy Machinery
        </button>
        <button
          onClick={() => {
            setSelectedTab('PORTABLE_MACHINES');
            setAllRentersData((_data) =>
              data.filter((item) => item.category === 'PORTABLE_MACHINES'),
            );
            console.log(allRentersData);
          }}
          style={{
            backgroundColor:
              selectedTab === 'PORTABLE_MACHINES' ? '#804000' : 'transparent',
            border: '1px solid #804000',
            borderRadius: '4px',
            color: selectedTab === 'PORTABLE_MACHINES' ? '#fff' : '#804000',
            cursor: 'pointer',
            fontSize: 14,
            marginRight: '15px',
            padding: '5px 10px',
          }}
        >
          Portable Machines
        </button>
        <button
          onClick={() => {
            setSelectedTab('TOOLS_AND_EQUIPMENT');
            setAllRentersData((_data) =>
              data.filter((item) => item.category === 'TOOLS_AND_EQUIPMENT'),
            );
            console.log(allRentersData);
          }}
          style={{
            backgroundColor:
              selectedTab === 'TOOLS_AND_EQUIPMENT' ? '#804000' : 'transparent',
            border: '1px solid #804000',
            borderRadius: '4px',
            color: selectedTab === 'TOOLS_AND_EQUIPMENT' ? '#fff' : '#804000',
            cursor: 'pointer',
            fontSize: 14,
            padding: '5px 10px',
          }}
        >
          Equipment and Power Tools
        </button>
      </div>
      <div
        style={{
          display: 'flex',
        }}
      >
        <RentingSidebar
          locationOption={locationOption}
          selectedDistricts={selectedDistricts}
          setLocationOption={setLocationOption}
          setSelectedDistricts={setSelectedDistricts}
          setSortingOption={setSortingOption}
          sortingOption={sortingOption}
        />
        <div
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            flex: '1',
            flexDirection: 'column',
            padding: '1rem',
          }}
        >
          <RentingCards data={filteredData} usersInfo={usersInfo} />
        </div>
      </div>
    </>
  );
};

export default Renters;
