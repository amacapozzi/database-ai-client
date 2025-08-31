import { ThemeProvider } from "@/providers/theme-provider";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
    </div>
  );
}
