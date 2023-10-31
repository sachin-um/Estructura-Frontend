import { useEffect, useState } from 'react';

const KEY = 'CART_ITEM_IDs';

const getOriginals = () => {
  const old = localStorage.getItem(KEY);
  if (old === null) return '[]';
  return old;
};

const useCart = () => {
  const [itemIds, setItemIds] = useState<number[]>(
    JSON.parse(getOriginals()) as number[],
  );

  const addItem = (itemId: number) => {
    if (!itemIds.includes(itemId)) {
      setItemIds([...itemIds, itemId]);
    }
    console.log(localStorage.getItem(KEY));
  };

  const removeItem = (itemId: number) => {
    setItemIds(itemIds.filter((i) => i !== itemId));
  };

  // Save when chenges occur
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(itemIds));
  }, [itemIds]);

  return { addItem, itemIds, removeItem };
};

export default useCart;
