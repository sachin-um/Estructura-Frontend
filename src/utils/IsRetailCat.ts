const RetailItemCats: RetailItemType[] = [
  'BATHWARE',
  'FURNITURE',
  'GARDENWARE',
  'HARDWARE',
  'LIGHTING',
];

/**
 * checks whether a string is a RetailItemType
 * @param retailCat the string to check
 */
const IsRetailCat = (retailCat: string) => {
  return RetailItemCats.includes(retailCat as RetailItemType);
};

export default IsRetailCat;
