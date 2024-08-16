export const fetchShops = async () => {
  const response = await fetch("/data/shops.json");
  const data = await response.json();
  return data;
};

export const fetchShopById = async (id) => {
  const response = await fetch("/data/shops.json");
  const data = await response.json();
  return data.find((shop) => shop.id === id);
};
