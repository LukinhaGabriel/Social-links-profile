import './global.css';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: "Lucas Gabriel Moya",
  description: 'Esse site mostra as redes sociais do autor.',
};
 

export default function RootLayout({ children, }:{children: React.ReactNode}){
    return(
        <html lang="pt-BR">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="keywords" content="web site, rede social" />
                <meta name="google-adsense-account" content="ca-pub-4321324843277993" />
                <link rel="icon" href="favicon.png" type="image/png" sizes="any"/>
                <link rel="apple-touch-icon" href="favicon.png" type="image/png" sizes="any"/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="icons/css/all.min.css" />
            </head>
            <body>{children}</body>
        </html>
    )
}
