"use server";

// fake db
const db = {
  items: [
    {
      id: 1,
      name: "Green Shirt",
      description: "A green shirt",
      price: 12,
      category: "clothing",
      color: "green",
    },
    {
      id: 2,
      name: "Red Shirt",
      description: "A red shirt",
      price: 12,
      category: "clothing",
      color: "red",
    },
    {
      id: 3,
      name: "Blue Shirt",
      description: "A blue shirt",
      price: 12,
      category: "clothing",
      color: "blue",
    },
    {
      id: 4,
      name: "Red Pants",
      description: "Red Pants",
      price: 18,
      category: "clothing",
      color: "red",
    },
    {
      id: 5,
      name: "Blue Pants",
      description: "Blue Pants",
      price: 18,
      category: "clothing",
      color: "blue",
    },
    {
      id: 6,
      name: "Green Keyboard",
      description: "A green keyboard",
      price: 30,
      category: "electronics",
      color: "green",
    },
    {
      id: 7,
      name: "Red Keyboard",
      description: "A red keyboard",
      price: 30,
      category: "electronics",
      color: "red",
    },
    {
      id: 8,
      name: "Blue Keyboard",
      description: "A blue keyboard",
      price: 30,
      category: "electronics",
      color: "blue",
    },
    {
      id: 9,
      name: "Green Mouse",
      description: "A green mouse",
      price: 23,
      category: "electronics",
      color: "green",
    },
    {
      id: 10,
      name: "Red Mouse",
      description: "A red mouse",
      price: 25,
      category: "electronics",
      color: "red",
    },
    {
      id: 11,
      name: "Blue Mouse",
      description: "A blue shirt",
      price: 23,
      category: "electronics",
      color: "blue",
    },
  ],
  getItems(filters: {
    name?: string;
    price?: string;
    category?: string;
    color?: string[] | string;
    search?: string;
  }) {
    return this.items.filter((item) => {
      if (filters.name && !item.name.includes(filters.name)) return false;
      if (filters.price && Number(item.price) > Number(filters.price))
        return false;
      if (filters.category && item.category !== filters.category) {
        if (filters.category !== "all") return false;
      }
      if (
        filters.search &&
        !item.name.toLowerCase().includes(filters.search.toLowerCase())
      )
        return false;
      if (filters.color && !filters.color.includes(item.color)) return false;
      return true;
    });
  },
};

export const getItems = async (filters: {
  name?: string;
  price?: string;
  category?: string;
  search?: string;
  color?: string[] | string;
}) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return db.getItems(filters);
};
