export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    <main>
        {children}
    </main>
}
