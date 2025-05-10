import Nav from "@/components/layout/landing/nav";
import Footer from "@/components/layout/landing/footer";
import { format } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PrivacyPolicyPage() {
  const currentDate = format(new Date(), "MMMM d, yyyy");

  return (
    <>
      <Nav />
      <div className="pt-16">
        {/* Header Section */}
        <section className="bg-primary text-primary-foreground">
          <div className="container py-12 md:py-16">
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                Privacy Policy
              </h1>
              <p className="text-lg max-w-3xl mx-auto text-primary-foreground/80">
                Last updated: {currentDate}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 bg-card flex justify-center items-center">
          <div className="container max-w-4xl">
            <Card className=" shadow-sm">
              <CardContent className="p-6 md:p-8">
                <ScrollArea className="h-full pr-4">
                  <div className="prose prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground max-w-none">
                    <p>
                      At PuService, we take your privacy seriously. This Privacy
                      Policy explains how we collect, use, disclose, and
                      safeguard your information when you use our platform.
                      Please read this privacy policy carefully. If you do not
                      agree with the terms of this privacy policy, please do not
                      access the platform.
                    </p>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="text-xl font-semibold">
                          Information We Collect
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            We collect information that you provide directly to
                            us when you:
                          </p>
                          <ul className="list-disc pl-6 my-4">
                            <li>Register for an account</li>
                            <li>Submit a report or request</li>
                            <li>Complete forms on our platform</li>
                            <li>Communicate with us</li>
                            <li>Participate in surveys or feedback</li>
                          </ul>

                          <p>This information may include:</p>
                          <ul className="list-disc pl-6 my-4">
                            <li>
                              Personal identifiers (name, email address, phone
                              number)
                            </li>
                            <li>Account credentials</li>
                            <li>Location data (when submitting reports)</li>
                            <li>Images and media you upload</li>
                            <li>Communication content and metadata</li>
                          </ul>

                          <p>
                            We also automatically collect certain information
                            when you use our platform, including:
                          </p>
                          <ul className="list-disc pl-6 my-4">
                            <li>
                              Device information (type, operating system,
                              browser)
                            </li>
                            <li>IP address and network information</li>
                            <li>
                              Usage data and interaction with our platform
                            </li>
                            <li>Cookies and similar tracking technologies</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger className="text-xl font-semibold">
                          How We Use Your Information
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            We use the information we collect for various
                            purposes, including to:
                          </p>
                          <ul className="list-disc pl-6 my-4">
                            <li>Provide, maintain, and improve our services</li>
                            <li>
                              Process and manage your reports and requests
                            </li>
                            <li>
                              Communicate with you about your reports, account,
                              and our services
                            </li>
                            <li>Personalize your experience on our platform</li>
                            <li>
                              Analyze usage patterns and improve our platform
                            </li>
                            <li>
                              Protect the security and integrity of our platform
                            </li>
                            <li>Comply with legal obligations</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger className="text-xl font-semibold">
                          Sharing Your Information
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            We may share your information in the following
                            circumstances:
                          </p>
                          <ul className="list-disc pl-6 my-4">
                            <li>
                              With government agencies and service providers
                              necessary to process your reports
                            </li>
                            <li>
                              With third-party service providers who perform
                              services on our behalf
                            </li>
                            <li>
                              When required by law or to protect our rights
                            </li>
                            <li>
                              In connection with a business transaction such as
                              a merger or acquisition
                            </li>
                            <li>With your consent or at your direction</li>
                          </ul>

                          <p>
                            We do not sell your personal information to third
                            parties.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4">
                        <AccordionTrigger className="text-xl font-semibold">
                          Data Security
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            We implement appropriate technical and
                            organizational measures to protect the security of
                            your personal information. However, please be aware
                            that no method of transmission over the internet or
                            electronic storage is 100% secure, and we cannot
                            guarantee absolute security.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-5">
                        <AccordionTrigger className="text-xl font-semibold">
                          Your Rights and Choices
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Depending on your location, you may have certain
                            rights regarding your personal information,
                            including:
                          </p>
                          <ul className="list-disc pl-6 my-4">
                            <li>
                              Accessing, correcting, or deleting your personal
                              information
                            </li>
                            <li>
                              Withdrawing consent where processing is based on
                              consent
                            </li>
                            <li>
                              Requesting restriction of processing or objecting
                              to processing
                            </li>
                            <li>Data portability</li>
                            <li>
                              Lodging a complaint with a supervisory authority
                            </li>
                          </ul>

                          <p>
                            To exercise these rights, please contact us using
                            the information provided at the end of this policy.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-6">
                        <AccordionTrigger className="text-xl font-semibold">
                          Cookies and Tracking Technologies
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            We use cookies and similar tracking technologies to
                            collect information about your browsing activities
                            and to remember your preferences. You can instruct
                            your browser to refuse all cookies or to indicate
                            when a cookie is being sent. However, if you do not
                            accept cookies, you may not be able to use some
                            portions of our platform.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-7">
                        <AccordionTrigger className="text-xl font-semibold">
                          Children Privacy
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Our platform is not intended for children under the
                            age of 16. We do not knowingly collect personal
                            information from children under 16. If you are a
                            parent or guardian and believe your child has
                            provided us with personal information, please
                            contact us.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-8">
                        <AccordionTrigger className="text-xl font-semibold">
                          International Data Transfers
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            Your information may be transferred to, and
                            processed in, countries other than the country in
                            which you reside. These countries may have data
                            protection laws that are different from the laws of
                            your country. We take steps to ensure that your
                            information receives an adequate level of protection
                            in the countries in which we process it.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-9">
                        <AccordionTrigger className="text-xl font-semibold">
                          Changes to This Privacy Policy
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            We may update our Privacy Policy from time to time.
                            We will notify you of any changes by posting the new
                            Privacy Policy on this page and updating the Last
                            updated date. You are advised to review this Privacy
                            Policy periodically for any changes.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-10">
                        <AccordionTrigger className="text-xl font-semibold">
                          Contact Us
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>
                            If you have any questions about this Privacy Policy,
                            please contact us at:
                          </p>
                          <ul className="list-disc pl-6 my-4">
                            <li>Email: privacy@puservice.com</li>
                            <li>Address: 123 Main Street, Capital City</li>
                            <li>Phone: +1 (555) 123-4567</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
