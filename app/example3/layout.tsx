import { cookies } from "next/headers";
import { ThemeProvider } from "./ThemeProvider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme")?.value;

  return <ThemeProvider theme={""}>{children}</ThemeProvider>;
}
