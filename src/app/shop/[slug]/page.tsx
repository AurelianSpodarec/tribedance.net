import Section from "@/components/_layout/Section"
import Container from "@/components/_layout/Container"

const item = {
  title: "Freak Boiii / Golly Galore",
  slug: "freak-boiii-golly-galore",
  thumbnail: "freak-boiii.jpg",
  price: {
    amount: 2.28,
    currency: "USD"
  },
  originalLink: "https://www.beatport.com/release/freak-boiii-golly-galore/2553913"
}

function ShopProduct() {
  return (
    <div className="mt-40 text-gray-50">
      <Section>
        <Container size="6xl">

          <div className="grid gird-cols-1 xl:grid-cols-2 gap-12">
            <div>
              <img src={`/images/products/${item.thumbnail}`} />
              <iframe src="https://embed.beatport.com/?id=10826427&type=track" width="100%" height="162"></iframe>
            </div>
            <div>
              <h1 className="text-4xl font-bold">{item.title}</h1>
              <div className="tags flex">
                <div className="text-sm uppercase text-gray-400 inline-block" rel="tag">#Bass House</div>
                <div className="text-sm uppercase text-gray-400 inline-block" rel="tag">#Loops</div>
                <div className="text-sm uppercase text-gray-400 inline-block" rel="tag">#One Shots</div>
                <div className="text-sm uppercase text-gray-400 inline-block" rel="tag">#Tech House</div>
              </div>
              € 25.00


              <div>
                Get freaky deaky with this sample library chock-full of hard-hitting Drum Loops, groove-enhancing Bass Loops and quirky Synth Loops.

                Mike McFly has released tracks on tastemaker labels such as Dirtybird, Toolroom Records, Armada Music and Relief Records and has personally crafted and curated this collection of ideas for you to go nuts on.

                Or to quote DTFD/Dirtybird duo Gettoblaster: “absolutely fire pack.”

                Inspired by artists such as Chris Lake, Walker & Royce, Ardalan, Bruno Furlan, Cloonee, John Summit and Martin Ikin and labels such as Big Beat, Dirtybird, Pyscho Disco, Box of Cats and Sola Records, this kit should quickly become one of your go-to sample libraries.

                Included in the pack:

                15 x Drum Loops (divided in separate stems)
                15 x Top Loops
                20 x Bass Loops (sidechained and non sidechained)
                20 x Synth Loops (sidechained and non sidechained)
                20 x FX (risers, drops, break fx etc.)
                20 x Kick
                10 x Clap
                10 x Snare
                20 x Hats
                20 x Perc
                Pick this one up if you are interested in spicing up your Tech or Bass House tracks, or if you are in need of instant inspiration! Don’t sleep on this, get this gem of a sample pack today!

                GUZ [Axtone, Spinnin’ Deep]: “These are some excellent high quality samples which can be used in several genres. It’s easy to hear that the pack maker is a producer of quality stuff as well.”

                Gettoblaster [Dirtybird, DFTD]: “Absolutely fire sample pack! Excited to get some music together using this!”

                Black V Neck [Dirtybird, OWSLA]: “This is definitely a pack that you need to add to your library! Super unique sounds to make your productions stick out from the rest. With West Coast House Vol. 1 it’s easy to get an idea going that will elevate your sound and get you noticed.”

                Arnold & Lane [Box Of Cats, IN/ROTATION]: “Absolutely loving this sample pack. Quite refreshing to receive a pack that includes sounds that actually translate well into the work flow! We had a lot of fun cutting up some of the fx and loop snippets. Getting creative with the right sample packs is essential in our production process. This is a fine example of a healthy pack to utilize. Highly recommend if you need good sounds to get a project nice and full or looking for some inspiration/ideas.”

                Neverglow [Confession]: “The cool thing about this sample pack is that it contains samples that are quirky and unique. This really helps you stand out with your productions. Aside from that, we really felt the drums hit and are really tight and well processed. This is ready to be loaded into your project and add some extra bounce!”

                Mike McFly [Dirtybird, Toolroom]: “I hate this sample library.”

                BUY NOW (VIA GUMROAD)
              </div>
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
