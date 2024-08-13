'use client'

import React from 'react';
import Link from 'next/link';
import { useParams } from "next/navigation";
import { Color, Palette } from 'color-thief-react';

import { getTrackBySlug } from "@/data/dataTracks";

import Section from "@/components/_layout/Section"
import Container from "@/components/_layout/Container"

import { Button } from "@/components/atoms/button";
import AudioBar from '@/components/organism/AudioBar/_variations/AudioBar';
// import AudioBar from '@/components/organism/AudioBar';

function ImageColors({ src }) {
  console.log(src)
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
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(20%-30rem)] sm:w-[92.1875rem]"
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
                className="relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr opacity-30 sm:w-[102.1875rem]"
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

  const item = getTrackBySlug(slug)

  console.log(item)
  // const item = {}
  if (!item) return <></>
  return (
    <>
      <ImageColors src={item?.release.image.uri} />
      <Section className="mt-20 text-gray-200">
        <Container size="6xl">
          <div className="grid gird-cols-1 xl:grid-cols-2 gap-12 items-center">
            <div>
              <img src={`${item?.release.image.uri}`} />
            </div>

            <div>
              <div className="flex mb-2 items-center align-center justify-between">
                <div className="flex items-center align-center space-x-2">
                  <img className="w-10 h-10" src={item?.release.label.image.uri} />
                  <div>{item?.release.label.name}</div>
                </div>
              </div>
              <h1 className="text-5xl font-bold uppercase mb-2">
                <span>{item?.release.name}</span>
                <span className="px-2">-</span>
                <span className="text-gray-400">{item?.mix_name}</span>
              </h1>
              <div className="flex space-x-2">
                <span>By</span>
                <div className="flex items-center align-center space-x-1">
                  <span className="italic">{item?.artists[0].name}</span>
                  <img className="rounded h-5 w-5 object-cover " src={item?.artists[0].image.uri} />
                </div>
              </div>
              <div className="text-3xl py-6 font-semibold">{item?.price.display}</div>

              <Link href={`https://www.beatport.com/track/${item.slug}/${item.id}`} target="_blank">
                <Button label="Buy Now" size="lg" />
              </Link>
            </div>
          </div>
          {/* <img src={item.url} /> */}

          {/* When playing, change the gradient, and when stop, stop it */}
          {/* go round around the image when playing, and do like a sun around */}
          {/* Have  "PLAY" and "STOP" icon on the player itself */}
          <div className="fixed bottom-0 left-0 right-0">
            {/* <iframe src={`https://embed.beatport.com/?id=${item?.release.id}&type=track`} width="100%" height="110px"></iframe> */}
            {/* https://geo-samples.beatport.com/track/ebaeb37d-e61b-4b8b-b674-52c72736fdda.LOFI.mp3 */}
            {/* <AudioBar item={item} image={item?.release.image.uri} name={item?.release.name} audio={item.sample_url} /> */}
            <AudioBar audio={item.sample_url}  />
            {/* <iframe src="https://embed.beatport.com/?id=15987578&type=track" width="100%" height="162" frameborder="0" scrolling="no" style="max-width:600px;"></iframe>  */}
          </div>
        </Container>
      </Section >

      {/* //   <Section>
    //     <Container>
    //       <h2 className="text-3xl font-semibold mb-4">You might also like</h2>
    //       <ProductRecommendations />
    //     </Container>
    //   </Section> */}
    </>
  )
}

export default ShopProduct

