import Link from "next/link";

import Container from "@/components/_layout/Container"
import Section from "@/components/_layout/Section"

const formatPrice = (amount: number, currency: string, locale: string = "en-US") => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(amount);
};

interface IProduct {
  title: string
  slug: string
  thumbnail: string
  price: {
    amount: number
    currency: string
  }
  originalLink: string
}

const dataShop: IProduct[] = [
  {
    title: "I Need RELIEF Vol 2",
    slug: "i-need-relief-vol-2",
    thumbnail: "i-need-relief.jpg",
    price: {
      amount: 9.99,
      currency: "USD"
    },
    originalLink: "https://www.beatport.com/release/i-need-relief-vol-2/2342906"
  },
  {
    title: "Freak Boiii / Golly Galore",
    slug: "freak-boiii-golly-galore",
    thumbnail: "freak-boiii.jpg",
    price: {
      amount: 2.28,
      currency: "USD"
    },
    originalLink: "https://www.beatport.com/release/freak-boiii-golly-galore/2553913"
  }
]

function Item({ item }: { item: IProduct }) {
  return (
    <Link href={`/shop/${item.slug}`}>
      <div className="text-gray-50">
        <img src={`/images/products/${item.thumbnail}`} />
        <div>
          <h3 className="text-xl font-bold">{item.title}</h3>

          <div className="flex items-center justify-between">
            <span>Mike McFly</span>
            {formatPrice(item.price.amount, item.price.currency)}
          </div>
        </div>
      </div>
    </Link>
  )
}

function PageShop() {
  return (
    <>
      <div className="mt-40 overflow-hidden relative text-center py-20">
        <Container>
          <h1 className="text-5xl font-semibold text-white z-10">Shop</h1>
          {/* <img className="absolute top-0 left-0 right-0 w-full" src="https://img.pikbest.com/wp/202345/music-wallpaper-wallpapers_9581122.jpg!w700wp" /> */}
        </Container>
      </div>
      <Section>
        <Container>
          <div className="grid gap-8 grid-cols-4">
            {dataShop.map((item) => {
              return <Item item={item} />
            })}
          </div>

        </Container>
      </Section>
    </>
  )
}

export default PageShop
