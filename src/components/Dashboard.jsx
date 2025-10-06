import StatCard from "./StatCard";
import OrderOverviewChart from "./OrderOverviewChart";
import StockUnitWidget from "./StockUnitWidget";
import ProductInsightsTable from "./ProductInsightsTable";

export default function Dashboard() {
  return (
    <div className="px-6 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
        <StatCard 
          title="Total Sales"
          value="$8,245.00"
          change="-0.5%"
          changeType="negative"
          icon="attach_money"
          tooltip="Gross sales minus returns and allowances. <br/> Previous period: $8,286.17"
        />
        <StatCard 
          title="Total Orders"
          value="1,256"
          change="+1.0%"
          changeType="positive"
          icon="shopping_cart"
          tooltip="Completed orders: 1,240 <br/> Pending orders: 16"
        />
        <StatCard 
          title="Net Sales"
          value="$431.00"
          change="+1.0%"
          changeType="positive"
          icon="receipt_long"
          tooltip="Total sales minus cost of goods sold. <br/> Last period: $426.69"
        />
        <StatCard 
          title="Total Variant"
          value="456K"
          change="-25%"
          changeType="negative"
          icon="sell"
          tooltip="Number of unique product variations sold. <br/> Last period: 608K"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 bg-card-light dark:bg-card-dark p-6 rounded-lg">
            <OrderOverviewChart />
        </div>
        <div className="bg-card-light dark:bg-card-dark p-6 rounded-lg">
            <StockUnitWidget />
        </div>
      </div>
      <div className="mt-6 bg-card-light dark:bg-card-dark p-6 rounded-lg">
        <ProductInsightsTable />
      </div>
    </div>
  );
}