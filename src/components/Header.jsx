export default function Header() {
  return (
    <header className="sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm z-10 px-6 py-4 border-b border-border-light dark:border-border-dark">
      <div className="flex items-center justify-between h-16">
        <h2 className="text-2xl font-semibold text-text-light dark:text-text-dark">Hi, Mac</h2>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-text-muted-light dark:text-text-muted-dark">search</span>
            <input type="text" placeholder="Search anything..." className="w-72 pl-10 pr-4 py-2.5 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
          </div>
          <button className="relative p-2.5 rounded-full bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <span className="material-icons">notifications</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-card-light dark:border-card-dark"></span>
          </button>
          <button className="p-2.5 rounded-full bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <span className="material-icons">mail_outline</span>
          </button>
          <div className="flex items-center space-x-3">
            <img src="https://picsum.photos/seed/1/40/40" alt="User avatar" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-semibold text-sm text-text-light dark:text-text-dark">Mac Gibson</p>
              <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Marketing Head</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end mt-4 gap-4">
        <div className="flex items-center space-x-2 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-lg px-3 py-2">
          <span className="material-icons text-text-muted-light dark:text-text-muted-dark">calendar_today</span>
          <span className="text-sm font-medium text-text-light dark:text-text-dark">Oct 01, 2023 - Oct 31, 2023</span>
          <button className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-text-muted-light dark:text-text-muted-dark">
            <span className="material-icons">expand_more</span>
          </button>
        </div>
        <button className="flex items-center space-x-2 bg-primary text-white rounded-lg px-4 py-2.5 text-sm font-semibold hover:bg-green-600 transition-colors duration-300">
          <span className="material-icons text-base">download</span>
          <span>Export Data</span>
        </button>
      </div>
    </header>
  );
}