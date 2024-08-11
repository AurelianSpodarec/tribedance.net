'use client'

import Section from "@/components/_layout/Section"
import Container from "@/components/_layout/Container"

// const item = {
//   title: "Freak Boiii / Golly Galore",
//   slug: "freak-boiii-golly-galore",
//   thumbnail: "freak-boiii.jpg",
//   price: {
//     amount: 2.28,
//     currency: "USD"
//   },
//   originalLink: "https://www.beatport.com/release/freak-boiii-golly-galore/2553913"
// }

import React from 'react';
import { Color, Palette } from 'color-thief-react';
import { getProductBySlug } from "@/data/dataProducts";
import { useParams } from "next/navigation";
import { Button } from "@/components/atoms/button";
import { formatPrice } from "@/lib/utils";

// const ImageWithGradient = ({ src }) => {
//   return (
//     <Color src={src} format="rgbString">
//       {({ data, loading, error }) => {
//         if (loading) {
//           console.log('Loading color data...');
//           return <div>Loading...</div>;
//         }

//         if (error) {
//           console.error('Error loading color data:', error);
//           return <div>Error loading color data</div>;
//         }

//         // Log the color data to the console
//         console.log('Extracted color data:', data);

//         return (
//           <div className="relative">
//             <div className="absolute top-0 right-0 bottom-0 left-0 h-[100%] w-[100%] -z-10" style={{ background: `radial-gradient(circle, ${data} 0%, transparent 80%)`, }}></div>
//             <img
//               src={src}
//               alt="example"
//               className="z-10"
//               style={{ width: '100%', height: 'auto' }}
//             />
//           </div>
//         );
//       }}
//     </Color>
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

function Tag(name:string) {
  return (
    <div className="text-sm uppercase text-gray-400 inline-block" rel="tag">{name}</div>
  )
}

function ShopProduct() {
  const { slug } = useParams()

  const item = getProductBySlug(slug)
  return (
    <div className="mt-40 text-gray-50">
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
                <p>
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

          You might also like

        </Container>
      </Section>
    </div>
  )
}

export default ShopProduct
