'use client'

import Section from "@/components/_layout/Section"
import Container from "@/components/_layout/Container"

import React from 'react';
import { Color, Palette } from 'color-thief-react';
// import { getProductBySlug, getProductRandom } from "@/data/dataProducts";
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

// function ImageColors({ src }) {
//   return (
//     <Palette src={src} colorCount={2} format="hex">
//       {({ data, loading, error }) => {
//         if (loading) {
//           console.log('Loading color data...');
//           return <div></div>;
//         }

//         if (error) {
//           console.error('Error loading color data:', error);
//           return <div></div>;
//         }

//         // Log the color data to the console
//         console.log('Extracted color data:', data);
//         const color1 = data[0]
//         const color2 = data[1]
//         return (
//           <>
//             <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
//               <div
//                 className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//                 style={{
//                   background: `linear-gradient(to top right, ${color1}, ${color2})`,
//                   clipPath:
//                     "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//                 }}
//               >
//               </div>
//             </div>
//             <div aria-hidden="true" className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl ">
//               <div
//                 className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr opacity-30 sm:w-[72.1875rem]"
//                 style={{
//                   background: `linear-gradient(to top right, ${color1}, ${color2})`,
//                   clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
//                 }}>
//               </div>
//             </div>
//           </>
//         );
//       }}
//     </Palette>
//   );
// }

function Tag(name: string) {
  return (
    <div className="text-sm uppercase text-gray-400 inline-block" rel="tag">{name}</div>
  )
}
// function ProductRecommendations() {
//   const items = getProductRandom(3);

//   return (
//     <div className="grid grid-cols-4 gap-6">
//       {items.map((item) => (
//         <ProductCardItem key={item.slug} item={item} />
//       ))}
//     </div>
//   );
// }

function ShopProduct() {
  const { slug } = useParams()

  // const item = getProductBySlug(slug)

  // const item = {}
  // if(!item) return <></>
  return (
    <div className="mt-40 text-gray-50">

    {/* //   <ImageColors src={`/images/products/${item.thumbnail}`} />
    //   <Section>
    //     <Container size="6xl">

    //       <div className="grid gird-cols-1 xl:grid-cols-2 gap-12">
    //         <div>
    //           <ImageWithGradient src={`/images/products/${item.thumbnail}`} />
    //           <img src={`/images/products/${item.thumbnail}`} />
    //           <iframe src="https://embed.beatport.com/?id=10826427&type=track" width="100%" height="162"></iframe>
    //         </div>
    //         <div>
    //           <h1 className="text-5xl font-bold uppercase mb-2">{item.title}</h1>
    //           <div className="tags flex mb-6">
    //             <div className="text-sm uppercase text-gray-400 inline-block" rel="tag">#Bass House</div>
    //             <div className="text-sm uppercase text-gray-400 inline-block" rel="tag">#Loops</div>
    //             <div className="text-sm uppercase text-gray-400 inline-block" rel="tag">#One Shots</div>
    //             <div className="text-sm uppercase text-gray-400 inline-block" rel="tag">#Tech House</div>
    //           </div>
    //           <span className="block text-2xl mb-6">{formatPrice(item?.price.amount, item?.price.currency)}</span>
    //           <div className="mb-6">
    //             <p className="">
    //               It all started with a vision that turned into a house. A house where we celebrate the creative hustle. Thanks for being part of our journey because a decade of us means a decade of you. For our 10th anniversary, we have curated a special collection of tracks that celebrate our love for house music. Join us in commemorating a decade of House Of Hustle with this exclusive compilation.
    //             </p>
    //           </div>
    //           <Button label="Buy Now" block />
    //         </div>
    //       </div>

    //       <iframe src="https://embed.beatport.com/?id=2342906&type=release" width="100%" height="362"></iframe>

    //     </Container>
    //   </Section>

    //   <Section>
    //     <Container>
    //       <h2 className="text-3xl font-semibold mb-4">You might also like</h2>
    //       <ProductRecommendations />
    //     </Container>
    //   </Section> */}

     
    </div>
  )
}

export default ShopProduct
