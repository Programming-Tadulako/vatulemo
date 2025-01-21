import { ThemeProvider } from "@/components/common/ThemeProvider";
import { Navbar } from "../Navbar";
import Footer from "../Footer";

export default function WrapperLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
