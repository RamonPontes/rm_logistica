import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <h1>Olá seja bem-vindo(a) a <br /> <span className="rm-logisticas">RM logisticas</span></h1>
        {children}
      </body>
    </html>
  );
}
