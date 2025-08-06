// import { Search, X } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// interface SearchBarProps {
//   searchQuery: string;
//   onSearchChange: (query: string) => void;
// }

// export function SearchBar({ searchQuery, onSearchChange }: SearchBarProps) {
//   return (
//     <div className="relative max-w-md mx-auto">
//       <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
//       <Input
//         type="text"
//         placeholder="Search products..."
//         value={searchQuery}
//         onChange={(e) => onSearchChange(e.target.value)}
//         className="pl-10 pr-10 glass border-primary/30"
//       />
//       {searchQuery && (
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={() => onSearchChange("")}
//           className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
//         >
//           <X className="w-4 h-4" />
//         </Button>
//       )}
//     </div>
//   );
// }

import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  debounceDelay?: number; // optional debounce delay in ms
}

export function SearchBar({
  searchQuery,
  onSearchChange,
  debounceDelay = 300,
}: SearchBarProps) {
  const [localQuery, setLocalQuery] = useState(searchQuery);
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setLocalQuery(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(() => {
      onSearchChange(localQuery);
    }, debounceDelay);

    return () => {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    };
  }, [localQuery, onSearchChange, debounceDelay]);

  // Clear search when Escape pressed inside input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      setLocalQuery("");
      onSearchChange("");
    }
  };

  return (
    <div className="relative max-w-md mx-auto">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
      <Input
        type="text"
        placeholder="Search products..."
        value={localQuery}
        onChange={(e) => setLocalQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        aria-label="Search products"
        className="pl-10 pr-10 glass border-primary/30"
      />
      {localQuery && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            setLocalQuery("");
            onSearchChange("");
          }}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
          aria-label="Clear search"
        >
          <X className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
}
