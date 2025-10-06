export default function ProductInsightsTable() {
  const products = [
    { name: 'Rompi Berkancing', sku: 'SKU-29834', price: '$400.98', stock: '3.2k', sales: '1.2k', img: 'https://picsum.photos/seed/2/40/40' },
    { name: 'Blazzer assorted', sku: 'SKU-10255', price: '$650.75', stock: '2.1k', sales: '900', img: 'https://picsum.photos/seed/3/40/40' },
    { name: 'Pattern top with knot', sku: 'SKU-48930', price: '$210.98', stock: '1.5k', sales: '779', img: 'https://picsum.photos/seed/4/40/40' },
    { name: 'Basic Hoodie (blue)', sku: 'SKU-78901', price: '$149.99', stock: '4.0k', sales: '512', img: 'https://picsum.photos/seed/5/40/40' },
  ];

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <h3 className="text-lg font-semibold text-text-light dark:text-text-dark">Product Insights</h3>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          {/* Search and filter controls */}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-sm text-text-muted-light dark:text-text-muted-dark border-b border-border-light dark:border-border-dark">
              <th className="py-3 px-4 font-medium">Product Name</th>
              <th className="py-3 px-4 font-medium">SKU</th>
              <th className="py-3 px-4 font-medium">Price</th>
              <th className="py-3 px-4 font-medium">Stock</th>
              <th className="py-3 px-4 font-medium">Sales</th>
              <th className="py-3 px-4 font-medium"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border-b border-border-light dark:border-border-dark">
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <img alt={product.name} className="w-10 h-10 object-cover rounded-md mr-4" src={product.img} />
                    <span className="font-medium text-sm text-text-light dark:text-text-dark">{product.name}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-text-muted-light dark:text-text-muted-dark">{product.sku}</td>
                <td className="py-3 px-4 text-sm font-medium text-text-light dark:text-text-dark">{product.price}</td>
                <td className="py-3 px-4 text-sm text-text-muted-light dark:text-text-muted-dark">{product.stock}</td>
                <td className="py-3 px-4 text-sm font-medium text-primary">{product.sales}</td>
                <td className="py-3 px-4 text-right">
                  <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark transition-colors">
                    <span className="material-icons text-base">more_horiz</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 pt-4 border-t border-border-light dark:border-border-dark flex justify-center">
        <button className="bg-transparent hover:bg-primary/10 text-primary font-semibold py-2.5 px-4 rounded-lg text-sm flex items-center transition-colors duration-300">
          <span>View All Products</span>
          <span className="material-icons ml-1 text-base">arrow_forward</span>
        </button>
      </div>
    </>
  );
}