export default function StatCard({ title, value, change, changeType, icon, tooltip }) {
  const isPositive = changeType === 'positive';

  return (
    <div className="relative group">
      <div className="bg-card-light dark:bg-card-dark p-6 rounded-lg flex items-center justify-between">
        <div>
          <p className="text-sm text-text-muted-light dark:text-text-muted-dark">{title}</p>
          <p className="text-2xl font-bold text-text-light dark:text-text-dark mt-1">{value}</p>
          <p className={`text-xs ${isPositive ? 'text-green-500' : 'text-red-500'} flex items-center mt-1`}>
            <span className="material-icons text-base mr-1">{isPositive ? 'arrow_upward' : 'arrow_downward'}</span>
            {change} from last period
          </p>
        </div>
        <div className={`p-3 rounded-full ${isPositive ? 'bg-green-100 dark:bg-green-500/20' : 'bg-red-100 dark:bg-red-500/20'}`}>
          <span className={`material-icons ${isPositive ? 'text-green-500 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>{icon}</span>
        </div>
      </div>
      <div 
        className="absolute bottom-full mb-2 w-max bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-300 invisible"
        dangerouslySetInnerHTML={{ __html: tooltip }}
      >
      </div>
    </div>
  );
}