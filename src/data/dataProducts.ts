export interface IProduct {
  title: string
  slug: string
  thumbnail: string
  description?: string
  artist?: string
  price: {
    amount: number
    currency: string
  }
  originalLink: string
}


const dataShop: IProduct[] = [
  {
    title: "Nite Of Your Life Extended Mix",
    thumbnail: "10-years-house-of-hustle.jpg",
    slug: "nite-of-your-life",
    description: "It all started with a vision that turned into a house. A house where we celebrate the creative hustle. Thanks for being part of our journey because a decade of us means a decade of you. For our 10th anniversary, we have curated a special collection of tracks that celebrate our love for house music. Join us in commemorating a decade of House Of Hustle with this exclusive compilation.",
    artist: "Mike McFly",
    genre: "tech-house",
    label: "House of Hustle",
    releaseDate: "2014-08-08T00:00:00Z",
    price: {
      amount: 1,
      currency: "USD"
    }
  },
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

export function getProductBySlug(slug:string) {
  return dataShop.find(item => item.slug === slug)
}

export function getLatestAudio() {
  
}

export default dataShop
