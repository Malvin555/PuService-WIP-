import React from "react";
import clsx from "clsx";

type Status = "pending" | "in_progress" | "resolved";

interface StatusBadgeProps {
  status: Status;
}

const statusColors: Record<Status, string> = {
  pending: "bg-yellow-200 text-yellow-800",
  in_progress: "bg-blue-200 text-blue-800",
  resolved: "bg-green-200 text-green-800",
};

const formatLabel = (status: string) => {
  return status.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  const label = formatLabel(status);
  const badgeColor = statusColors[status] ?? "bg-gray-200 text-gray-800";

  return (
    <span
      className={clsx(
        "px-2 py-0.5 text-xs font-semibold rounded-full capitalize",
        badgeColor,
      )}
    >
      {label}
    </span>
  );
}
