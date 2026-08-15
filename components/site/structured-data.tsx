import Script from "next/script"

export function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lowveld Hub",
    url: "https://lowveldhub.co.za",
    logo: "https://lowveldhub.co.za/logo.png",
    email: "info@lowveldhub.co.za",
    telephone: "+27673749762",
    description: "Premium AI and Digital Transformation Company",
    areaServed: "Worldwide",
  }

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Lowveld Hub",
    url: "https://lowveldhub.co.za",
  }

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Lowveld Hub",
    url: "https://lowveldhub.co.za",
    description: "Premium web development, AI and software development company",
  }

  return (
    <>
      <Script id="organization-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(organization)}
      </Script>
      <Script id="website-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(website)}
      </Script>
      <Script id="professional-service-schema" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(professionalService)}
      </Script>
    </>
  )
}
