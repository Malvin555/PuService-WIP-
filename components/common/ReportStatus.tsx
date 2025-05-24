import React from "react";
import clsx from "clsx";

type Status = "pending" | "in-progress" | "resolved";

interface StatusBadgeProps {
  status: Status;
}

const statusColors: Record<Status, string> = {
  pending: "bg-yellow-200 text-yellow-800",
  "in-progress": "bg-blue-200 text-blue-800",
  resolved: "bg-green-200 text-green-800",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={clsx(
        "px-2 py-0.5 text-xs font-semibold rounded-full capitalize",
        statusColors[status],
      )}
    >
      {status.replace("-", " ")}
    </span>
  );
}
