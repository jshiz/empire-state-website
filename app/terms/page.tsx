import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />
            <div className="container mx-auto px-4 py-32 md:py-40">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">Terms of Service</h1>

                <div className="max-w-4xl mx-auto">
                    <Card className="bg-card border-border rounded-2xl overflow-hidden shadow-xl">
                        <CardContent className="p-8 md:p-12 prose prose-invert max-w-none">
                            <p className="text-muted-foreground mb-8">Last Updated: January 14, 2026</p>

                            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                            <p className="text-muted-foreground mb-6">
                                By accessing and using empirestatebulldogs.com, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                            </p>

                            <h2 className="text-2xl font-bold mb-4">2. Breeding & Sale Services</h2>
                            <p className="text-muted-foreground mb-6">
                                All sales and stud services are subject to individual written contracts. The information on this website does not constitute a binding legal contract for the sale of any animal.
                            </p>

                            <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
                            <p className="text-muted-foreground mb-6">
                                All content on this site, including images of our dogs and logos, is the property of Empire State Bulldogs and may not be used without express written permission.
                            </p>

                            <h2 className="text-2xl font-bold mb-4">4. Limitation of Liability</h2>
                            <p className="text-muted-foreground mb-6">
                                Empire State Bulldogs shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our website or services.
                            </p>

                            <h2 className="text-2xl font-bold mb-4">5. Governing Law</h2>
                            <p className="text-muted-foreground">
                                These terms are governed by the laws of the State of New York.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <Footer />
        </main>
    )
}
