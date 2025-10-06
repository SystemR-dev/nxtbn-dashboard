import DarkModeToggle from './DarkModeToggle';

export default function Sidebar() {
  return (
    <aside className="w-64 flex-shrink-0 bg-card-light dark:bg-card-dark border-r border-border-light dark:border-border-dark flex flex-col">
      <div className="h-20 flex items-center px-6">
        <h1 className="text-2xl font-bold text-text-light dark:text-text-dark">nxtbn</h1>
      </div>
      <nav className="flex-1 px-4 py-2 space-y-2">
        <a className="flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-primary/10 text-primary" href="#">
          <span className="material-icons mr-3">dashboard</span> Dashboard
        </a>
        <a className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-700" href="#">
          <span className="material-icons mr-3">shopping_basket</span> Orders
          <span className="ml-auto bg-gray-900 dark:bg-gray-200 text-white dark:text-black text-xs font-semibold px-2 py-0.5 rounded-full">8</span>
        </a>
        <a className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-700" href="#">
          <span className="material-icons mr-3">inventory_2</span> Products
        </a>
        <a className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-700" href="#">
          <span className="material-icons mr-3">inventory</span> Inventory Management
        </a>
        <a className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-700" href="#">
          <span className="material-icons mr-3">group</span> User Management
        </a>
        <a className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-700" href="#">
          <span className="material-icons mr-3">category</span> Category
        </a>
        <a className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-700" href="#">
          <span className="material-icons mr-3">subscriptions</span> Subscription
        </a>
        <a className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-700" href="#">
          <span className="material-icons mr-3">extension</span> Plugin
        </a>
        <a className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-700" href="#">
          <span className="material-icons mr-3">people_alt</span> Customers
        </a>
        <a className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-700" href="#">
          <span className="material-icons mr-3">sell</span> Discount
        </a>
      </nav>
      <div className="px-4 py-4 border-t border-border-light dark:border-border-dark">
        <a className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-700" href="#">
          <span className="material-icons mr-3">settings</span> Settings
        </a>
        <DarkModeToggle />
        <a className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-700" href="#">
          <span className="material-icons mr-3">help_outline</span> Get Help
        </a>
      </div>
    </aside>
  );
}