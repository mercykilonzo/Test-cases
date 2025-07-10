class Product {
  constructor() {
    this.products = [
      { id: 1, name: 'dairy feed', category: 'Feed', image: 'img1.jpg', stock: 10, price: 20 },
      { id: 2, name: 'tractor', category: 'Equipment', image: 'img2.jpg', stock: 2, price: 5000 },
      { id: 3, name: 'hay', category: 'Feed', image: 'img3.jpg', stock: 15, price: 5 }
    ];
  }

  getProducts() {
    return this.products;
  }

  searchProducts(keyword) {
    if (!keyword) return this.products;
    const lower = keyword.toLowerCase();
    return this.products.filter(p => p.name.toLowerCase().includes(lower));
  }

  filterByCategory(category) {
    if (!category) return this.products;
    return this.products.filter(p => p.category === category);
  }

  addProduct(product) {
    const newId = this.products.length + 1;
    const newProduct = { id: newId, ...product };
    this.products.push(newProduct);
    return newProduct;
  }

  editProduct(id, updatedData) {
    const idx = this.products.findIndex(p => p.id === id);
    if (idx === -1) throw new Error('Product not found');
    this.products[idx] = { ...this.products[idx], ...updatedData };
    return this.products[idx];
  }

  deleteProduct(id) {
    const idx = this.products.findIndex(p => p.id === id);
    if (idx === -1) throw new Error('Product not found');
    this.products.splice(idx, 1);
    return true;
  }
}

module.exports = Product;
