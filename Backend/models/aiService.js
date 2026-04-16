const askAI = async (query, products) => {

  if (!products || products.length === 0) {
    return "Sorry, I couldn't find anything.";
  }

  const productList = products.map(p =>
    `${p.name} - ${p.category} - $${p.price}`
  ).join("\n");

  return `I found these products for "${query}":\n\n${productList}`;
};

module.exports = askAI;