'use client'

import Section from "@/components/_layout/Section"
import Container from "@/components/_layout/Container"

import React from 'react';
import { Color, Palette } from 'color-thief-react';
import { getProductBySlug, getProductRandom } from "@/data/dataReleases";
import { useParams } from "next/navigation";
import { Button } from "@/components/atoms/button";
import { formatPrice } from "@/lib/utils";
import ProductCardItem from "../ProductCardItem";


// <div style={{ position: 'relative', display: 'inline-block' }}>
//   <img
//     src={src}
//     alt="example"
//     style={{ width: '100%', height: 'auto' }}
//   />
//   <Palette src={src} colorCount={2}>

//     {({ data, loading, error }) => {
//       if (loading) return <div>Loading...</div>;
//       if (error) return <div>Error loading colors</div>;

//        const gradient = `linear-gradient(to bottom, ${data[0]}, ${data[1]})`;

//       return (
//         <div
//           style={{
//             position: 'absolute',
//             top: '-12.5%',
//             left: '-12.5%',
//             width: '125%',
//             height: '125%',
//             background: gradient,
//             opacity: 0.7,
//             pointerEvents: 'none',
//             zIndex: 1,
//           }}
//         ></div>
//       );
//     }}
//   </Palette>
// </div>
//   );
// };

function ImageColors({ src }) {
  return (
    <Palette src={src} colorCount={2} format="hex">
      {({ data, loading, error }) => {
        if (loading) {
          console.log('Loading color data...');
          return <div></div>;
        }

        if (error) {
          console.error('Error loading color data:', error);
          return <div></div>;
        }

        // Log the color data to the console
        console.log('Extracted color data:', data);
        const color1 = data[0]
        const color2 = data[1]
        return (
          <>
            <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  background: `linear-gradient(to top right, ${color1}, ${color2})`,
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              >
              </div>
            </div>
            <div aria-hidden="true" className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl ">
              <div
                className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr opacity-30 sm:w-[72.1875rem]"
                style={{
                  background: `linear-gradient(to top right, ${color1}, ${color2})`,
                  clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                }}>
              </div>
            </div>
          </>
        );
      }}
    </Palette>
  );
}

function Tag(name: string) {
  return (
    <div className="text-sm uppercase text-gray-400 inline-block" rel="tag">{name}</div>
  )
}
function ProductRecommendations() {
  const items = getProductRandom(3);

  return (
    <div className="grid grid-cols-4 gap-6">
      {items.map((item) => (
        <ProductCardItem key={item.slug} item={item} />
      ))}
    </div>
  );
}

function ShopProduct() {
  const { slug } = useParams()

  const item = getProductBySlug(slug)


  return (
    <div className="mt-40 text-gray-50">
      <ImageColors src={`/images/products/${item.thumbnail}`} />
      <Section>
        <Container size="6xl">

          <div className="grid gird-cols-1 xl:grid-cols-2 gap-12">
            <div>
              {/* <ImageWithGradient src={`/images/products/${item.thumbnail}`} /> */}
              <img src={`/images/products/${item.thumbnail}`} />
              <iframe src="https://embed.beatport.com/?id=10826427&type=track" width="100%" height="162"></iframe>
            </div>
            <div>
              <h1 className="text-5xl font-bold uppercase mb-2">{item.title}</h1>
              <div className="tags flex mb-6">
                <div className="text-sm uppercase text-gray-400 inline-block" rel="tag">#Bass House</div>
                <div className="text-sm uppercase text-gray-400 inline-block" rel="tag">#Loops</div>
                <div className="text-sm uppercase text-gray-400 inline-block" rel="tag">#One Shots</div>
                <div className="text-sm uppercase text-gray-400 inline-block" rel="tag">#Tech House</div>
              </div>
              <span className="block text-2xl mb-6">{formatPrice(item?.price.amount, item?.price.currency)}</span>
              <div className="mb-6">
                <p className="">
                  It all started with a vision that turned into a house. A house where we celebrate the creative hustle. Thanks for being part of our journey because a decade of us means a decade of you. For our 10th anniversary, we have curated a special collection of tracks that celebrate our love for house music. Join us in commemorating a decade of House Of Hustle with this exclusive compilation.
                </p>
              </div>
              <Button label="Buy Now" block />
            </div>
          </div>

          {/* <iframe src="https://embed.beatport.com/?id=2342906&type=release" width="100%" height="362"></iframe> */}

        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-3xl font-semibold mb-4">You might also like</h2>
          <ProductRecommendations />
        </Container>
      </Section>

      <Section>
        <div className="w-full rounded overflow-hidden bg-quad cursor-pointer">
          <div className="container max-w-7xl mx-auto px-16 py-28">
            <div className="flex flex-col-reverse xl:flex-row">
              <div className="xl:w-2/3 text-center xl:text-justify">
                <h3 className="text-2xl text-third lg:text-4xl font-bold mb-3 xl:mb-6">Book a mixing session today!</h3>
                <p className="text-third text-base lg:text-xl mb-4">We'd love to bring you mix to the next level! Book a session today and let us know what kind of session you would like us to do. We'll get back within 24 hours!</p>
                <Button>
                  <a href="https://calendly.com/tribedance/coaching-session" target="_blank" className="flex">
                    <svg className="w-5 mr-4 text-third" aria-hidden="true" focusable="false" data-prefix="far" data-icon="calendar-day" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M112 368h96c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V160h352v298z" className=""></path></svg>
                    <span className="text-2xl text-third font-semibold">Pick a timeslot</span>
                  </a>
                </Button>
              </div>
              <div className="xl:w-1/3 text-right relative mb-4 lg:mb-0">
                <figure className="">
                  <img className="w-32 h-32 bg-cover xl:w-64 xl:h-64 mx-auto rounded-full object-cover" src="https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg" />
                </figure>
                <div className="absolute left-0 right-0 -top-20 xl:top-auto xl:-bottom-14 flex flex-col items-center mb-6 flex">
                  <div className="z-30 absolute -bottom-3 xl:-bottom-0 xl:-top-3 w-6 h-6 transform rotate-45 bg-white"></div>
                  <div className="text-center relative z-10 py-4 px-6 text-xs bg-white text-black leading-none whitespace-no-wrap shadow-lg rounded-lg">
                    <span className=" font-bold block text-base mb-1">Mike</span>
                    <span className="text-base block">
                      <span className="text-base ">Mixing Engineer - </span>
                      <a className="text-base hover:text-yellow-400" href="mailto:musicmike@gmail.com">mike@tribedance.net</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default ShopProduct
