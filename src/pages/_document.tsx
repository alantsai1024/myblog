import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="zh-tw" className="scroll-smooth">
        <Head>
          <link
            rel="icon"
            type="image/jpeg"
            href="https://img.overclockers.co.uk/media/image/CP65JIN_193693.jpg"
          />
          <link
            rel="apple-touch-icon"
            href="https://img.overclockers.co.uk/media/image/CP65JIN_193693.jpg"
          />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="theme-color" content="#000000" />
          <meta name="referrer" content="no-referrer" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        </Head>
        <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
