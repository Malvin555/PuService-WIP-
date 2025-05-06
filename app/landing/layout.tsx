import Navigation from "../components/layout/landing/nav";
import Footer from "../components/layout/landing/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="flex-grow">{children}</main>
      <Footer />
    </>
  );
}
