import Container from "@/components/_layout/Container"
import Section from "@/components/_layout/Section"

import dataShop from "@/data/dataProducts";
import ProductCardItem from "./ProductCardItem";

function PageShop() {
  return (
    <>
      <div className="mt-40 overflow-hidden relative text-center py-20">
        <Container>
          <h1 className="text-5xl font-semibold text-white z-10">Shop</h1>
        </Container>
      </div>
      <Section>
        <Container>
          <div className="grid gap-8 grid-cols-4">
            {dataShop.map((item) => {
              return <ProductCardItem item={item} />
            })}
          </div>

        </Container>
      </Section>
    </>
  )
}

export default PageShop
