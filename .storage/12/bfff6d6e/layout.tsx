import { ReactNode } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollArea className="flex-1">
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </ScrollArea>
    </div>
  );
}