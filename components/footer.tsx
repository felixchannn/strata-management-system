import Link from "next/link"
import { Building } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Building className="h-6 w-6" />
              <span className="font-bold">Strata Management</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Managing strata-titled apartment buildings in accordance with the Strata Schemes Management Act (2015).
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/residents" className="text-muted-foreground hover:text-foreground transition-colors">
                  Residents Portal
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-muted-foreground hover:text-foreground transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Emergency Contact</h3>
            <p className="text-sm text-muted-foreground mb-2">For urgent matters:</p>
            <p className="text-sm font-medium">+61 2 1234 5678</p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Strata Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
