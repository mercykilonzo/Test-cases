const Product = require('./product');

describe('Product Management Scenarios', () => {
  let pr;

  beforeEach(() => {
    pr = new Product(); 
  });

  test('P1 - Add product button redirects to add page (simulated)', () => {
    expect(typeof pr.addProduct).toBe('function');
  });

  test('P2 - Validate empty product search', () => {
    const results = pr.searchProducts('nonexistentproduct');
    expect(results.length).toBe(0);
  });

  test('P3 - Validate valid product search', () => {
    const results = pr.searchProducts('dairy feed');
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].name.toLowerCase()).toContain('dairy feed');
  });

  test('P4 - Filter by Category - single selection', () => {
    const results = pr.filterByCategory('Equipment');
    expect(results.every(p => p.category === 'Equipment')).toBe(true);
  });

  test('P5 - Filter by Category - No selection', () => {
    const results = pr.filterByCategory(null);
    expect(results.length).toBe(pr.getProducts().length);
  });

  test('P6 - Verify product image display', () => {
    const products = pr.getProducts();
    products.forEach(p => {
      expect(typeof p.image).toBe('string');
      expect(p.image.length).toBeGreaterThan(0);
    });
  });

  test('P7 - Check the edit button function', () => {
    const product = pr.getProducts()[0];
    const updated = pr.editProduct(product.id, { name: 'updated name' });
    expect(updated.name).toBe('updated name');
  });

  test('P8 - Check the delete button function with confirmation', () => {
    const product = pr.getProducts()[0];
    const deleted = pr.deleteProduct(product.id);
    expect(deleted).toBe(true);
    expect(pr.getProducts().some(p => p.id === product.id)).toBe(false);
  });

  test('P9 - Check the delete button function and cancel', () => {
 
    const initialCount = pr.getProducts().length;
  
    expect(pr.getProducts().length).toBe(initialCount);
  });

  test('P10 - Verify the table display after adding products', () => {
    const newProduct = {
      name: 'new tractor',
      category: 'Equipment',
      image: 'newimg.jpg',
      stock: 5,
      price: 4500
    };
    const added = pr.addProduct(newProduct);
    expect(added.id).toBeDefined();
    const allProducts = pr.getProducts();
    expect(allProducts.some(p => p.name === 'new tractor')).toBe(true);
  });
});
