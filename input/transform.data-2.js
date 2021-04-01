const inputDataTwo = [
  {
    node: {
      orgName: "Apple Inc.",
      tickerSymbol: "AAPL",
      priceSet: {
        edges: [
          {
            node: {
              date: "Mar 26, 2021",
              open: "120.35",
              close: "121.21",
            },
          },
        ],
      },
    },
  },
  {
    node: {
      orgName: "Facebook, Inc",
      tickerSymbol: "FB",
      priceSet: {
        edges: [
          {
            node: {
              date: "Mar 26, 2021",
              open: "278.30",
              close: "283.02",
            },
          },
        ],
      },
    },
  },
];

const dataModelTwo = [
  {
    title: "Organization",
    key: "orgName",
  },
  {
    title: "Ticker Symbol",
    key: "tickerSymbol",
  },
  {
    title: "Price Set",
    key: "priceSet",
    children: [
      {
        title: "Price",
        key: "price",
        children: [
          {
            title: "Date",
            key: "priceSet",
            dataKey: "date",
          },
          {
            title: "Open Price",
            key: "priceSet",
            dataKey: "open",
          },
          {
            title: "Close Price",
            key: "priceSet",
            dataKey: "close",
          },
        ],
      },
    ],
  },
];

module.exports = { inputDataTwo, dataModelTwo };
