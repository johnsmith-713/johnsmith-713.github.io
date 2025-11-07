import { Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="h-8 w-8 text-accent" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold">VELION</span>
                  <span className="text-xs">TECHNOLOGIES</span>
                </div>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Delivering modern, innovative digital solutions for businesses of all sizes.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button 
                    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-primary-foreground/80 hover:text-accent transition-smooth"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-primary-foreground/80 hover:text-accent transition-smooth"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-primary-foreground/80 hover:text-accent transition-smooth"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Location</h3>
              <address className="text-sm text-primary-foreground/80 not-italic">
                8300 Canyon Street<br />
                Houston, Texas 77051<br />
                United States
              </address>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-center text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} VELION TECHNOLOGIES. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
