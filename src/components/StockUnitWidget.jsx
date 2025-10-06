export default function StockUnitWidget() {
  return (
    <>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-text-light dark:text-text-dark">Stock Unit</h3>
      </div>
      <div className="mt-8 space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-text-muted-light dark:text-text-muted-dark">Production</span>
            <span className="font-semibold text-text-light dark:text-text-dark">6.0k</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div className="bg-green-500 h-2.5 rounded-full" style={{width: "50%"}}></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-text-muted-light dark:text-text-muted-dark">Store</span>
            <span className="font-semibold text-text-light dark:text-text-dark">2.4k</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div className="bg-yellow-400 h-2.5 rounded-full" style={{width: "20%"}}></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-text-muted-light dark:text-text-muted-dark">Stock</span>
            <span className="font-semibold text-text-light dark:text-text-dark">3.6k</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div className="bg-red-500 h-2.5 rounded-full" style={{width: "30%"}}></div>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-4 border-t border-border-light dark:border-border-dark">
        <div className="flex justify-between items-center">
          <span className="text-sm text-text-muted-light dark:text-text-muted-dark">Total Units</span>
          <span className="text-xl font-bold text-text-light dark:text-text-dark">12.0k</span>
        </div>
      </div>
    </>
  );
}