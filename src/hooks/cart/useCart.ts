import { useCallback, useEffect, useState } from 'react';

import API from '../../lib/API';
import useCurrentUser from '../users/useCurrentUser';

interface item {
  id: number;
  price?: number;
  quantity: number;
}

const useCart = () => {
  const [loaded, setLoaded] = useState(false);
  const currentUser = useCurrentUser();

  const [items, setItems] = useState<item[]>([]);

  const saveProgress = useCallback(
    (items: item[]) => {
      if (currentUser && loaded) {
        const data: CartRequest = {
          customer_id: currentUser.id,
          shoppingCartItems: items.map((n) => {
            return { itemId: n.id ?? -1, quantity: n.quantity };
          }),
          total:
            items.length > 0
              ? items.reduce((totalItem, item) => {
                  return {
                    ...totalItem,
                    price:
                      (totalItem.price ?? 0) +
                      (item.price ?? 0) * (item.price ?? 0),
                  };
                }).price ?? 0
              : 0,
        };
        API.post<GenericAddOrUpdateResponse>('/cart/create', data).then(
          (res) => {
            console.log(res);
          },
        );
      }
    },
    [currentUser, loaded],
  );

  const addOrIncrementItem = (itemId: number, inc?: number) => {
    if (items.find((i) => i.id === itemId) === undefined) {
      const newItems = [
        ...items,
        { id: itemId, quantity: (inc ?? 1) > 0 ? inc ?? 1 : 1 },
      ];
      setItems(newItems);
      saveProgress(newItems);
      console.log(newItems);
    } else {
      const newItems = items.map<item>((i) => {
        if (i.id === itemId) {
          const incr = inc ?? 1;
          const q = i.quantity + incr;
          return {
            id: itemId,
            quantity: q <= 0 ? 1 : q,
          };
        }
        return i;
      });
      setItems(newItems);
      saveProgress(newItems);
    }
  };

  const removeItem = (itemId: number) => {
    const newItems = items.filter((i) => i.id !== itemId);
    setItems(newItems);
    saveProgress(newItems);
  };

  const [retry, setRetry] = useState(1);

  useEffect(() => {
    if (currentUser) {
      API.get<{
        cart_id: number;
        shoppingCartItems: {
          cart_item_id: number;
          quantity: number;
          retailItem: RetailItem;
        }[];
      }>('/cart/get-cart/' + currentUser.id)
        .then((res) => {
          console.log('from', res.data);
          setItems(
            res.data.shoppingCartItems.map<item>((item) => {
              return {
                id: item.retailItem.id,
                price: item.retailItem.price,
                quantity: item.quantity,
              };
            }),
          );
          setLoaded(true);
        })
        .catch((e) => {
          console.log(e);
          setLoaded(true);
          if (retry < 3)
            setTimeout(() => {
              saveProgress([]);
              setRetry(retry + 1);
            }, 1000);
        });
    }
  }, [currentUser, retry, saveProgress]);

  return { addOrIncrementItem, items, removeItem };
};

export default useCart;
