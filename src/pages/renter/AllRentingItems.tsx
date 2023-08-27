import { useEffect, useState } from 'react';

import TopAppBar from '../../components/TopAppBar';
import HomePageCarousel from '../../components/blog/HomePageCarousel';
import RentingCards from '../../components/renter/RentingItemCards';
import RentingSidebar from '../../components/renter/RentingSideBar';
import { useFetchRentingItems } from '../../hooks/rentingItem/useFetchRentingItems';
import useFetchAllUsers from '../../hooks/users/useFetchAllUsers';

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

const AllRentingItems = () => {
  const [filteredData, setFilteredData] = useState<RentingItem[]>([]);

  const [selectedTab, setSelectedTab] =
    useState<RentingCategory>('HEAVY_MACHINERY');
  const [sortingOption, setSortingOption] =
    useState<sortingOption>('Price: High to Low');

  const { fetchRentingItems, rentingItems } = useFetchRentingItems();

  useEffect(() => {
    fetchRentingItems({ category: selectedTab });
  }, [fetchRentingItems, selectedTab]);

  const [locationOption, setLocationOption] = useState('islandwide');
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>([]);

  const { fetchAllUsers, users } = useFetchAllUsers();

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  useEffect(() => {
    if (locationOption !== 'islandwide' && selectedDistricts.length > 0) {
      setFilteredData((_da) =>
        rentingItems.filter((item) => {
          const user = users.find((user) => user.id === item.createdBy);
          if (user) {
            return selectedDistricts.includes(user.district ?? '');
          }
          return false;
        }),
      );
    } else {
      setFilteredData(rentingItems);
    }

    switch (sortingOption) {
      case 'Price: Low to High': // Price: Low to High
        setFilteredData((data) => [...data].sort((a, b) => a.price - b.price));
        break;
      case 'Price: High to Low': // Price: High to Low
        setFilteredData((data) => [...data].sort((a, b) => b.price - a.price));
        break;
      case 'Date: Newest on Top': // Date: Newest on Top
        setFilteredData((data) =>
          [...data].sort(
            (a, b) =>
              new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime(),
          ),
        );
        break;
      case 'Date: Oldest on Top': // Date: Oldest on Top
        setFilteredData((data) =>
          [...data].sort(
            (a, b) =>
              new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime(),
          ),
        );
        break;
      default:
        break;
    }
  }, [rentingItems, locationOption, selectedDistricts, sortingOption, users]);

  return (
    <>
      <TopAppBar />
      <HomePageCarousel cards={topImages} />
      <div
        style={{ display: 'flex', justifyContent: 'flex-end', margin: '20px' }}
      >
        <button
          onClick={() => {
            setSelectedTab('HEAVY_MACHINERY');
            console.log(rentingItems);
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
            console.log(rentingItems);
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
            console.log(rentingItems);
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
          <RentingCards data={filteredData} usersInfo={users} />
        </div>
      </div>
    </>
  );
};

export default AllRentingItems;
