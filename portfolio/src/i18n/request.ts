import {getRequestConfig} from "next-intl/server";

export default getRequestConfig(async ({requestLocale}) => {
  const locale = (await requestLocale) ?? "en";

  console.log("REQUEST LOCALE:", locale);

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});