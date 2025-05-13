@extends('layouts.app')

@section('title', 'Terms of Use - PuService')

@section('content')
<div class="pt-16">
    <!-- Header Section -->
    <section class="bg-blue-600 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div class="text-center">
                <h1 class="text-3xl md:text-4xl font-bold tracking-tight">Terms of Use</h1>
                <p class="mt-4 text-lg max-w-3xl mx-auto text-blue-100">
                    Last updated: {{ date('F d, Y') }}
                </p>
            </div>
        </div>
    </section>

    <!-- Content Section -->
    <section class="py-12 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="prose prose-blue prose-lg max-w-none">
                <p>
                    Welcome to PuService. These Terms of Use govern your use of our platform, including any associated mobile applications, websites, and services (collectively, the "Platform"). By accessing or using the Platform, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Platform.
                </p>

                <h2>1. Acceptance of Terms</h2>
                <p>
                    By accessing or using the Platform, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use, our Privacy Policy, and any additional terms that may apply. If you are using the Platform on behalf of an organization, you represent and warrant that you have the authority to bind that organization to these terms.
                </p>

                <h2>2. Description of Service</h2>
                <p>
                    PuService is a platform that enables citizens to report public service issues to relevant government agencies and track the status of those reports. The Platform also provides government agencies with tools to manage, respond to, and analyze citizen reports.
                </p>

                <h2>3. User Accounts</h2>
                <p>
                    To access certain features of the Platform, you may need to create an account. When you create an account, you agree to:
                </p>
                <ul>
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain and promptly update your account information</li>
                    <li>Keep your password secure and confidential</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                    <li>Be responsible for all activities that occur under your account</li>
                </ul>

                <p>
                    We reserve the right to disable any user account if we believe you have violated these Terms of Use or if we determine that your account has been compromised.
                </p>

                <h2>4. User Conduct</h2>
                <p>
                    When using the Platform, you agree not to:
                </p>
                <ul>
                    <li>Submit false, misleading, or fraudulent reports</li>
                    <li>Impersonate any person or entity</li>
                    <li>Harass, threaten, or intimidate any person or entity</li>
                    <li>Upload or transmit any content that is unlawful, harmful, threatening, abusive, defamatory, obscene, or otherwise objectionable</li>
                    <li>Upload or transmit any content that infringes any intellectual property rights</li>
                    <li>Upload or transmit any viruses, malware, or other malicious code</li>
                    <li>Interfere with or disrupt the Platform or servers or networks connected to the Platform</li>
                    <li>Attempt to gain unauthorized access to any part of the Platform</li>
                    <li>Use the Platform for any illegal or unauthorized purpose</li>
                </ul>

                <h2>5. User Content</h2>
                <p>
                    When you submit content to the Platform, including reports, comments, images, and other materials (collectively, "User Content"), you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute such User Content in connection with providing and promoting the Platform.
                </p>

                <p>
                    You represent and warrant that:
                </p>
                <ul>
                    <li>You own or have the necessary rights to the User Content you submit</li>
                    <li>The User Content does not infringe on the intellectual property rights or other rights of any third party</li>
                    <li>The User Content does not violate any applicable law or regulation</li>
                </ul>

                <p>
                    We reserve the right to remove any User Content that violates these Terms of Use or that we find objectionable for any reason.
                </p>

                <h2>6. Intellectual Property</h2>
                <p>
                    The Platform and its original content, features, and functionality are owned by PuService and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                </p>

                <p>
                    You may not copy, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Platform, except as follows:
                </p>
                <ul>
                    <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials</li>
                    <li>You may store files that are automatically cached by your web browser for display enhancement purposes</li>
                    <li>You may print or download one copy of a reasonable number of pages of the Platform for your own personal, non-commercial use and not for further reproduction, publication, or distribution</li>
                </ul>

                <h2>7. Third-Party Links and Services</h2>
                <p>
                    The Platform may contain links to third-party websites or services that are not owned or controlled by PuService. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that PuService shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
                </p>

                <h2>8. Limitation of Liability</h2>
                <p>
                    To the maximum extent permitted by applicable law, PuService and its officers, directors, employees, agents, partners, and licensors shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul>
                    <li>Your access to or use of or inability to access or use the Platform</li>
                    <li>Any conduct or content of any third party on the Platform</li>
                    <li>Any content obtained from the Platform</li>
                    <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                </ul>

                <h2>9. Disclaimer of Warranties</h2>
                <p>
                    The Platform is provided on an "AS IS" and "AS AVAILABLE" basis. PuService expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>

                <p>
                    PuService makes no warranty that:
                </p>
                <ul>
                    <li>The Platform will meet your requirements</li>
                    <li>The Platform will be uninterrupted, timely, secure, or error-free</li>
                    <li>The results that may be obtained from the use of the Platform will be accurate or reliable</li>
                    <li>The quality of any products, services, information, or other material purchased or obtained by you through the Platform will meet your expectations</li>
                </ul>

                <h2>10. Indemnification</h2>
                <p>
                    You agree to defend, indemnify, and hold harmless PuService and its officers, directors, employees, agents, partners, and licensors from and against any claims, liabilities, damages, losses, and expenses, including, without limitation, reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the Platform or your violation of these Terms of Use.
                </p>

                <h2>11. Termination</h2>
                <p>
                    We may terminate or suspend your account and access to the Platform immediately, without prior notice or liability, for any reason whatsoever, including, without limitation, if you breach these Terms of Use.
                </p>

                <p>
                    Upon termination, your right to use the Platform will immediately cease. If you wish to terminate your account, you may simply discontinue using the Platform or contact us to request account deletion.
                </p>

                <h2>12. Governing Law</h2>
                <p>
                    These Terms of Use shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
                </p>

                <h2>13. Changes to Terms</h2>
                <p>
                    We reserve the right, at our sole discretion, to modify or replace these Terms of Use at any time. We will provide notice of any changes by posting the new Terms of Use on this page and updating the "Last updated" date. Your continued use of the Platform after any such changes constitutes your acceptance of the new Terms of Use.
                </p>

                <h2>14. Severability</h2>
                <p>
                    If any provision of these Terms of Use is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced.
                </p>

                <h2>15. Contact Us</h2>
                <p>
                    If you have any questions about these Terms of Use, please contact us at:
                </p>
                <ul>
                    <li>Email: legal@puservice.com</li>
                    <li>Address: 123 Main Street, Capital City</li>
                    <li>Phone: +1 (555) 123-4567</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-white rounded-lg shadow-md overflow-hidden sm:flex sm:items-center sm:justify-between p-6 sm:p-8">
                <div>
                    <h2 class="text-xl font-bold text-gray-900">Have questions about our terms?</h2>
                    <p class="mt-2 text-gray-600 max-w-3xl">
                        Our team is here to help you understand our terms of use.
                    </p>
                </div>
                <div class="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0">
                    <a href="{{ url('/contact') }}" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                        Contact Support
                    </a>
                </div>
            </div>
        </div>
    </section>
</div>
@endsection

