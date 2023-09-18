import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="Pokedex - vitormnoel.dev"
          content="A site for Pokemon fans."
        />
        <meta charSet="utf-8" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
