import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Github, Linkedin, Twitter, Heart } from "lucide-react";

export function BlogFooter() {
  return (
    <footer className="bg-muted/40 border-t">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-sky-500 to-violet-600 bg-clip-text text-transparent">
                Publify
              </span>
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              A modern publishing platform for creators, developers, and
              storytellers to share meaningful ideas with the world.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Button size="icon" variant="outline" className="rounded-full">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Github className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Discover
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Latest Posts
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Contributors
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Resources
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Newsletter
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Get fresh articles and insights straight to your inbox.
            </p>

            <form className="mt-5 flex flex-col gap-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="you@example.com"
                  className="pl-9"
                />
              </div>
              <Button className="rounded-lg">Join Newsletter</Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center gap-3 border-t pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Publify ❤️ Crafted with passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
