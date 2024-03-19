"use client";

import { useRouter } from "next/navigation";

export function NextButton({ step }: { step: number }) {
  const { push } = useRouter();
  return <button onClick={() => push(`?step=${step + 1}`)}>Next</button>;
}

export function BackButton({ step }: { step: number }) {
  const { push } = useRouter();
  return <button onClick={() => push(`?step=${step - 1}`)}>Back</button>;
}
