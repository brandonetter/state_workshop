import queryString from "query-string";

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
) {
  const param = queryString.parse(params);

  Object.assign(param, change);

  const searchParams = queryString.stringify(param, {
    skipEmptyString: true,
  });
  return searchParams;
}
