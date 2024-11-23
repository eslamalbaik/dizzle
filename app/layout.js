import localFont from "next/font/local";
import "./globals.css";
const CairoBoldSans = localFont({
  src: "./fonts/NotoKufiArabic-Bold.ttf",
  variable: "--font-Cairo-Bold",
  weight: "100 900",
});
const MediumCairo = localFont({
  src: "./fonts/NotoKufiArabic-Medium.ttf",
  variable: "--font-Cairo-Medium",
  weight: "100 900",
});
const CairoLight = localFont({
  src: "./fonts/NotoKufiArabic-Regular.ttf",
  variable: "--font-Cairo-ExtraLight",
  weight: "100 900",
});

export const metadata = {
  title: "دريزل | غسيل سيارات",
  description: "دريزل | غسيل سيارات متنقل. لاتشيل هم الزحمة نجيك وين م تكون ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${CairoBoldSans.variable} ${MediumCairo.variable} ${CairoLight.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
