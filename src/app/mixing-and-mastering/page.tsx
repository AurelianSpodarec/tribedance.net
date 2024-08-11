import Container from "@/components/_layout/Container"
import Section from "@/components/_layout/Section"

import MikeCTA from "@/components/template/MikeCTA"

function PageMixinAndMastering() {
  return (
    <>
      <Section>
        <Container>

          <h1 className="text-white text-5xl font-bold mt-32">Mixing And Mastering</h1>

          <div>
            Submit Your Track
            Initial Mix Within 24 Hours
            Feedback Round
            Final Delivery
          </div>

        </Container>
      </Section>

      <MikeCTA />
    </>
  )
}

export default PageMixinAndMastering
