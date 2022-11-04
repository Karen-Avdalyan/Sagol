import Document, { Head, Main, NextScript, DocumentContext, Html } from "next/document";

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<{
        styles: JSX.Element;
        html: string;
        head?: (JSX.Element | null)[];
    }> {
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            // eslint-disable-next-line react/jsx-no-useless-fragment
            styles: <> {
                initialProps.styles
            }</>
        };
    }

    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="" />
                    <meta name="title" content="Sagol" />
                    <meta name="description" content="Segol Advanced Technologies Ltd. was established for the purpose of bringing advanced technologies to treat air quality and create energy savings" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://sagol-tec-website-next.vercel.app" />
                    <meta property="og:title" content="Sagol" />
                    <meta property="og:description" content="Segol Advanced Technologies" />
                    {/* <meta property="og:image" content="/icons/sagol-png.jpg" /> */}
                    {/* <meta property="twitter:card" content="summary_large_image" /> */}
                    <meta property="twitter:url" content="https://4618-195-250-77-66.eu.ngrok.io" />
                    <meta property="twitter:title" content="Sagol" />
                    <meta property="twitter:description" content="Segol Advanced Technologies" />
                    {/* <meta property="twitter:image" content="/icons/sagol-png.jpg" /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
