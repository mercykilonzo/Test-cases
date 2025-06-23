const {
  activateTab,
  filterTransactions,
  filterByDate
} = require("./payment");

test("activates tab", () => {
  const tab = { classList: { add: jest.fn(), contains: jest.fn(() => true) } };
  expect(activateTab(tab)).toBe(true);
});

test("filters transactions by keyword", () => {
  const data = [
    { id: "#TRX100", name: "John", amount: 500 },
    { id: "#TRX101", name: "M-Pesa", amount: 1000 }
  ];
  expect(filterTransactions(data, "M-Pesa")).toHaveLength(1);
});

test("filters by date range", () => {
  const data = [
    { date: "2025-06-01", id: "#1" },
    { date: "2025-06-15", id: "#2" }
  ];
  expect(filterByDate(data, "2025-06-01", "2025-06-10")).toHaveLength(1);
});
