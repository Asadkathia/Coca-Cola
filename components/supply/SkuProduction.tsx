"use client";

import type { SkuProductionRow } from "@/lib/types";

export function SkuProduction({ skus }: { skus: SkuProductionRow[] }) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-white">
        SKU-Wise Production
      </h3>

      <div className="glass p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-transparent">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  SKU
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Planned
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Actual
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Gap
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Stock After Production
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {skus.map((row, index) => (
                <tr key={index} className="transition-colors hover:bg-red-700 hover:text-white">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                    {row.sku}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white/90">
                    {row.planned.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white/90">
                    {row.actual.toLocaleString()}
                  </td>
                  <td
                    className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white"
                  >
                    {row.gap >= 0 ? "+" : ""}
                    {row.gap.toLocaleString()}
                    {Math.abs(row.gap) > 500 && (
                      <span className="ml-2 text-xs">⚠️</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white/90">
                    {row.stockAfterProduction.toLocaleString()}
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

