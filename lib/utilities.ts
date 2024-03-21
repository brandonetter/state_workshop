type SearchParams = {
  name?: string;
  price?: string;
  category?: string;
  search?: string;
  color?: string[] | string;
};

export function modifySearchParams(
  params: string,
  change: Partial<SearchParams>
) {}
