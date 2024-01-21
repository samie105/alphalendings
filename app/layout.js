import Navbar from "@/components/Navbar";
import "./globals.css";
import "./styles.css";
import { Montserrat, Nunito } from "next/font/google";
import Footer from "@/components/Footer";
import { FormDataProvider } from "@/contexts/data";

const montserrat = Montserrat({ subsets: ["cyrillic"] });

export const metadata = {
  title: "Emergency Rental Assistance | Rental Assistance Service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <FormDataProvider>
          <Navbar />
          {children}
          <Footer />
        </FormDataProvider>
      </body>
    </html>
  );
}
