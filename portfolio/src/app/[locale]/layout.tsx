import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import {NextIntlClientProvider} from "next-intl";

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  console.log("LAYOUT PARAM:", locale);

  // Importa directamente el archivo de mensajes del locale correcto
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
    >
      <ThemeProvider>
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}