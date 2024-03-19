import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { modifySearchParams } from "../utilities";

export function useURLQuery(
  key: any,
  defaultValue = "",
  delay = 0
): [string, (value: string) => void] {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [value, setValue] = useState(searchParams.get(key) ?? defaultValue);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const newParams = modifySearchParams(searchParams.toString(), {
        [key]: value,
      });

      router.push(`?${newParams}`);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, searchParams, router, key, delay]);

  return [value, setValue];
}
