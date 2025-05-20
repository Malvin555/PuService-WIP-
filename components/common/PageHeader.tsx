import { Input } from "@/components/ui/input";
import { ReactNode, ChangeEvent } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  withSearch?: boolean;
  searchPlaceholder?: string;
  searchName?: string;
  searchValue?: string;
  onSearchChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  searchSlot?: ReactNode;
}

export default function PageHeader({
  title,
  description,
  className = "mb-6",
  titleClassName,
  descriptionClassName = "mt-2 text-md text-muted-foreground",
  withSearch = false,
  searchPlaceholder = "Search...",
  searchName = "search",
  searchValue,
  onSearchChange,
  searchSlot,
}: PageHeaderProps) {
  const titleClasses = `text-3xl font-bold ${titleClassName ?? "text-primary"}`;

  if (withSearch || searchSlot) {
    return (
      <div className=" mb-6 flex flex-col md:flex-row md:items-center md:justify-between md:gap-4">
        <div>
          <h1 className={titleClasses}>{title}</h1>
          {description && <p className={descriptionClassName}>{description}</p>}
        </div>

        {searchSlot ? (
          searchSlot
        ) : (
          <form method="GET" className="w-full md:w-auto mt-6 md:mt-0">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5 text-muted-foreground"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <Input
                type="text"
                name={searchName}
                value={searchValue}
                onChange={onSearchChange}
                className="pl-10 pr-3 py-2 w-full md:w-[260px]"
                placeholder={searchPlaceholder}
                autoComplete="off"
              />
            </div>
          </form>
        )}
      </div>
    );
  }

  return (
    <div className={className}>
      <h1 className={titleClasses}>{title}</h1>
      {description && <p className={descriptionClassName}>{description}</p>}
    </div>
  );
}
