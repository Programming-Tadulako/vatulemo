import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

export default function WrapperLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
