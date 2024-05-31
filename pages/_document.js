import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'


export default class MyDocument extends Document {

    render() {
        return (
            <Html>

                <Head>

                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        type="text/plain"
                        data-cookiecategory="analytics"
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                    />
                    <script
                        type="text/plain"
                        data-cookiecategory="analytics"
                        dangerouslySetInnerHTML={{
                            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
                        }}
                    />

                    <meta name="google-site-verification" content="w9MKYYDkDRZqyCAI3-w3rEjhbISHdUfx7RvYfF0buIg" />
                </Head>
                <body>



                    <Main />
                    <NextScript />

                </body>
            </Html>
        )
    }
}