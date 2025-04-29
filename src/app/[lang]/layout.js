import { i18n } from "@/dictionaries/i18n.config";
import { SiteProvider } from "@/context/SiteContext";
import { getDictionary } from "@/helpers/getDictionary";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ModalR from "@/components/Modal/Modal";

import "@/app/globals.scss";

export const metadata = {
  title: "Malov & Partners",
  description: "Malov design group",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  const { header, footer, form, successText } = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body>
        <SiteProvider>
          <Header lang={lang} dictionary={header} />
          <main>{children}</main>
          <Footer lang={lang} dictionary={footer} />
          <ModalR dictionaryForm={form} dictionarySuccess={successText} />
        </SiteProvider>
      </body>
    </html>
  );
}
