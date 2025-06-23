function activateTab(tab) {
  tab.classList.add("active");
  return tab.classList.contains("active");
}

function filterTransactions(transactions, keyword) {
  return transactions.filter(tx =>
    tx.id.includes(keyword) ||
    tx.name.toLowerCase().includes(keyword.toLowerCase()) ||
    tx.amount.toString().includes(keyword)
  );
}

function filterByDate(transactions, from, to) {
  const fromDate = new Date(from);
  const toDate = new Date(to);
  return transactions.filter(tx => {
    const txDate = new Date(tx.date);
    return txDate >= fromDate && txDate <= toDate;
  });
}
module.exports = { activateTab, filterTransactions, filterByDate };
