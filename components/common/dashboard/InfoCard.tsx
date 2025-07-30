// InfoCard.tsx
import { Card, CardContent } from "@/components/ui/card";

interface StatCardItem {
  title: string;
  value: number;
  bgColor: string;
  textColor: string;
  icon: string;
}

export default function InfoCard({ statCards }: { statCards: StatCardItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {statCards.map((stat) => (
        <Card
          key={stat.title}
          className="shadow-sm  hover:shadow-md transition-shadow duration-150 border"
        >
          <CardContent className="p-5 flex items-center">
            <div
              className={`flex-shrink-0 ${stat.bgColor} rounded-full p-3 shadow-md`}
            >
              <svg
                className={`h-6 w-6 ${stat.textColor}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={stat.icon}
                />
              </svg>
            </div>
            <div className="ml-4 flex-1">
              <div className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">
                {stat.title}
              </div>
              <div className="text-3xl font-bold text-foreground mt-1">
                {stat.value}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
