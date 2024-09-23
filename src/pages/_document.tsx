import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const assetPrefix = "/hackathon-tpac-2024"; // redundant path is workaround for gh pages to display images and submission routes correctly
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={`${assetPrefix}/favicon.ico`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
