import { NextPage } from 'next';
import NextApp, { AppContext, type AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import '../styles/globals.css';

const brandsList = ['bom', 'bsa', 'stg', 'wbc', 'wbg', 'rams'] as const;

// eslint-disable-next-line @typescript-eslint/ban-types
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement, brand: string) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  brand: (typeof brandsList)[number];
};

export default function PlaygroundApp({ Component, pageProps, brand }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: ReactNode) => page);

  return getLayout(<Component {...pageProps} />, brand);
}

PlaygroundApp.getInitialProps = async (appContext: AppContext) => {
  const ctx = await NextApp.getInitialProps(appContext);
  const brandParam = appContext.ctx.query?.brand || '';
  const brand = brandsList.find(b => b.toLowerCase() === brandParam) || 'wbc';
  return { ...ctx, brand };
};
