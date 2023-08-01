/**
 * Paginate an array of items
 * @param items Array of items to paginate
 * @param pageNumber Page number to paginate
 * @param pageSize Page size to paginate
 * @returns Array of paginated items in the given page at the given page size
 */
function Paginate<T>(items: T[], pageNumber: number, pageSize: number): T[] {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, pageNumber * pageSize);
}

export default Paginate;
