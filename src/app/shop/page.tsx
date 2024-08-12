import Container from "@/components/_layout/Container"
import Section from "@/components/_layout/Section"

import dataReleases from "@/data/dataReleases";
import ProductCardItem from "./ProductCardItem";
import dataLabels from "@/data/dataLabels";
import dataTracks from "@/data/dataTracks";

function PageShop() {

  // Search by record label

  // Newest to oldest
  // Title A-Z
  // Title Z-A / label/ genre

  // BPM

  // Key
  // genre
  // Sub genre

  // Releases
  // Tracks

  return (
    <>
      <div className="mt-40 relative text-center py-20">


        <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
        </div>
        <Container>
          <h1 className="text-5xl font-semibold text-white z-10">Shop</h1>
        </Container>
      </div>
      <Section>
        <div className="flex">
          <Container>
            <div className="grid gap-8 grid-cols-4">
              {dataTracks.map((item) => {
                return <ProductCardItem item={item} />
              })}
            </div>
          </Container>

          {/* <div className="w-[500px] relative right-0 w-full z-50 h-full">
            <div className="fixed top-32 pl-0 p-8">
              <img src="https://geo-media.beatport.com/image_size/1400x1400/726a8582-6cdc-4e6c-b2a9-5662fa610662.jpg" />
              <iframe className="absolute pb-24 pr-8" src="https://embed.beatport.com/?id=4649122&type=release" width="100%" height="100%"></iframe>
            </div>
          </div> */}
        </div>
      </Section >
    </>
  )
}

export default PageShop
