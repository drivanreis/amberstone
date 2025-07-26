import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <ScrollArea className="flex-1">
        <main className="pt-16">
          <Outlet />
        </main>
        <Footer />
      </ScrollArea>
    </div>
  );
}