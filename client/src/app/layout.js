import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <a href="/">
          <h1>Olá seja bem-vindo(a) a <br /> <span className="rm-logisticas">RM logisticas</span></h1>
        </a>
        {children}
      </body>
    </html>
  );
}
