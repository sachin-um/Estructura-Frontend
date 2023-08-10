import { useEffect, useState } from 'react';
import TopBar from '../../components/TopBar';
import Carousel from '../../components/blog/carousel';
import RentingCards from '../../components/renter/RentingItemCards';
import RentingSidebar from '../../components/renter/RentingSideBar';
import { allRentersData } from '../../data/renting';

const AllRenters = () => {
  const [selectedTab, setSelectedTab] = useState('Heavy Machinery');
  const [sortingOption, setSortingOption] = useState('');

  const [filteredData, setFilteredData] = useState([]);
  const [locationOption, setLocationOption] = useState('islandwide');
  const [selectedDistricts, setSelectedDistricts] = useState([]);

  const TabedData = allRentersData.filter((item) => item.type === selectedTab);

  const handleTabChange = (tabName) => {
    setSelectedTab(tabName);
    setCurrentPage(1); // Reset the current page to 1 when changing tabs
  };

  const handleSortingOptionChange = (sortingValue) => {
    setSortingOption(sortingValue);

    switch (sortingValue) {
      case 10: // Price: Low to High
        console.log('came to 10');
        console.log(allRentersData);
        console.log(filteredData);
        console.log(TabedData);
        allRentersData.sort(
          (a, b) =>
            parseFloat(a.price.replace(',', '')) -
            parseFloat(b.price.replace(',', '')),
        );
        break;
      case 20: // Price: High to Low
        console.log('came to 20');
        allRentersData.sort(
          (a, b) =>
            parseFloat(b.price.replace(',', '')) -
            parseFloat(a.price.replace(',', '')),
        );
        break;
      case 30: // Date: Newest on Top
        console.log('came to 30');
        allRentersData.sort(
          (a, b) => new Date(b.datePosted) - new Date(a.datePosted),
        );
        break;
      case 40: // Date: Oldest on Top
        console.log('came to 40');
        allRentersData.sort(
          (a, b) => new Date(a.datePosted) - new Date(b.datePosted),
        );
        break;
      default:
        break;
    }
  };

  const filterDataByLocation = () => {
    if (locationOption === 'islandwide') {
      setFilteredData(TabedData);
    } else if (locationOption === 'multiple-districts') {
      const filteredItems = TabedData.filter((item) =>
        selectedDistricts.includes(item.location),
      );
      setFilteredData(filteredItems);
    }
  };

  useEffect(() => {
    filterDataByLocation();
  }, [locationOption, selectedDistricts, TabedData]);

  return (
    <>
      <TopBar />
      <Carousel cards={blogcards} />
      <div
        style={{ margin: '20px', display: 'flex', justifyContent: 'flex-end' }}
      >
        <button
          onClick={() => handleTabChange('Heavy Machinery')}
          style={{
            marginRight: '15px',
            backgroundColor:
              selectedTab === 'Heavy Machinery' ? '#804000' : 'transparent',
            color: selectedTab === 'Heavy Machinery' ? '#fff' : '#804000',
            border: '1px solid #804000',
            borderRadius: '4px',
            padding: '5px 10px',
            cursor: 'pointer',
            fontSize: 14,
          }}
        >
          Heavy Machinery
        </button>
        <button
          onClick={() => handleTabChange('Portable Machines')}
          style={{
            marginRight: '15px',
            backgroundColor:
              selectedTab === 'Portable Machines' ? '#804000' : 'transparent',
            color: selectedTab === 'Portable Machines' ? '#fff' : '#804000',
            border: '1px solid #804000',
            borderRadius: '4px',
            padding: '5px 10px',
            cursor: 'pointer',
            fontSize: 14,
          }}
        >
          Portable Machines
        </button>
        <button
          onClick={() => handleTabChange('Equipment and Power Tools')}
          style={{
            backgroundColor:
              selectedTab === 'Equipment and Power Tools'
                ? '#804000'
                : 'transparent',
            color:
              selectedTab === 'Equipment and Power Tools' ? '#fff' : '#804000',
            border: '1px solid #804000',
            borderRadius: '4px',
            padding: '5px 10px',
            cursor: 'pointer',
            fontSize: 14,
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
          handleSortingOptionChange={handleSortingOptionChange}
          locationOption={locationOption}
          setLocationOption={setLocationOption}
          selectedDistricts={selectedDistricts}
          setSelectedDistricts={setSelectedDistricts}
        />
        <div
          style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem',
            boxSizing: 'border-box',
          }}
        >
          <RentingCards data={filteredData} />
        </div>
      </div>
    </>
  );
};

export default AllRenters;

const blogcards = [
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
