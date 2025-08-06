
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

interface ProductFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: number[];
  onPriceRangeChange: (range: number[]) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

const categories = [
  { value: "all", label: "All Categories" },
  { value: "smartphones", label: "Smartphones" },
  { value: "laptops", label: "Laptops" },
  { value: "audio", label: "Audio" },
  { value: "wearables", label: "Wearables" },
  { value: "accessories", label: "Accessories" }
];

export function ProductFilters({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  sortBy,
  onSortChange
}: ProductFiltersProps) {
  return (
    <Card className="glass p-6 sticky top-28 z-20">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      
      <div className="space-y-6">
        {/* Category Filter */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Category</Label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/20 transition-colors"
                onClick={() => onCategoryChange(category.value)}
              >
                {category.label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <Label className="text-sm font-medium mb-3 block">
            Price Range: ${priceRange[0]} - ${priceRange[1]}
          </Label>
          <Slider
            value={priceRange}
            onValueChange={onPriceRangeChange}
            max={2000}
            min={0}
            step={50}
            className="w-full"
          />
        </div>

        {/* Sort By */}
        <div>
          <Label className="text-sm font-medium mb-3 block">Sort By</Label>
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="glass border-primary/30">
              <SelectValue />
            </SelectTrigger>
            <SelectContent
              side="bottom"
              sideOffset={4}
              className="bg-background shadow-lg border border-border rounded-md z-50"
            >
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  );
}
