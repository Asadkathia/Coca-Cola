"use client";

import type { InventoryRow } from "@/lib/types";

export function InventoryStatus({ inventory }: { inventory: InventoryRow[] }) {
  const getRiskBadge = (status: string) => {
    switch (status) {
      case "shortage":
        return (
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-600 text-white border border-red-500">
            🔴 Shortage Risk
          </span>
        );
      case "normal":
        return (
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20">
            ⚪ Normal
          </span>
        );
      case "overstock":
        return (
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20">
            ⚫ Overstock
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-white">Inventory (Stock Position)</h3>

      <div className="glass p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-transparent">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  SKU
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Stock Available
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Safety Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Risk Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {inventory.map((row, index) => (
                <tr key={index} className="transition-colors hover:bg-red-700 hover:text-white">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                    {row.sku}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white/90">
                    {row.stockAvailable.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white/90">
                    {row.safetyStock.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getRiskBadge(row.riskStatus)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

