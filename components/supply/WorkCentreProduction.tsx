"use client";

import type { WorkCentreRow } from "@/lib/types";

export function WorkCentreProduction({ centres }: { centres: WorkCentreRow[] }) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-white">
        Work Centre-Wise Production
      </h3>

      <div className="glass p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-transparent">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Work Centre
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Current SKU
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  Units Produced (Yesterday)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {centres.map((row, index) => (
                <tr key={index} className="transition-colors hover:bg-red-700 hover:text-white">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                    {row.workCentre}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        row.status === "active"
                          ? "bg-red-600 text-white"
                          : "bg-white/20 text-white"
                      }`}
                    >
                      {row.status === "active" ? "🔴 Active" : "⚫ Inactive"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white/90">
                    {row.currentSku || "N/A"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white/90">
                    {row.actual.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {centres
          .filter((row) => row.status === "active")
          .map((row) => (
            <div
              key={row.workCentre}
              className="glass p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-white">
                  {row.workCentre}
                </span>
                <span className="text-xs text-red-700">🔴 Active</span>
              </div>
              <p className="text-xs text-white/70 mb-1">Current SKU:</p>
              <p className="text-sm font-semibold text-white">
                {row.currentSku || "N/A"}
              </p>
              <p className="text-xs text-white/70 mt-2">Units Produced:</p>
              <p className="text-lg font-semibold text-white">
                {row.actual.toLocaleString()}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

