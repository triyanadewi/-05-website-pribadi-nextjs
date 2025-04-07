import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import { defaultMetadata } from '@/utils/metadata';

type LayoutProps = {
    children: React.ReactElement & { props?: { metadata?: typeof defaultMetadata } };}

export default function Layout({ children }: LayoutProps) {
    const metadata = children.props?.metadata || defaultMetadata;

    return (
        <>
            <Head>
                <link rel="icon" href='/favicon.ico' />
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                {/* Open Graph Tags */}
                <meta property="og:title" content={metadata.title} />
                <meta property="og:description" content={metadata.description} />
                <meta property="og:image" content={metadata.openGraph.images} />
                <meta property="og:url" content={metadata.openGraph.url} />
                <meta name="google-site-verification" content="a5DR8aG2mZwfOLoOWE-TFp7VdAuW1g9yQzrPscKQoT8" />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}