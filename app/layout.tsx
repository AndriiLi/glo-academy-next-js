import localFont from 'next/font/local'
import './scss/style.scss';
import Header from './ui/header';
import Cart from './ui/Cart';

const GTEestiProText = localFont({
    src: [
        { path: './fonts/EestiRegular.woff2', weight: '500' },
        { path: './fonts/EestiBold.woff2', weight: '700' },
    ],
    display: 'swap', // рекомендуемый вариант для web
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
            </head>
            <body className={GTEestiProText.className}>
                <Header />
                <main>
                {children}
                <Cart />
                </main>
            </body>
        </html>
    );
}
