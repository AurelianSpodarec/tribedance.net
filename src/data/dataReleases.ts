import dataLabels from "./dataLabels"


// albums?

// const dataReleases = [
//   {
//     label: dataLabels[1000],,
//     title: "10 Years: House Of Hustle",
//     description: "It all started with a vision that turned into a house. A house where we celebrate the creative hustle. Thanks for being part of our journey because a decade of us means a decade of you. For our 10th anniversary, we have curated a special collection of tracks that celebrate our love for house music. Join us in commemorating a decade of House Of Hustle with this exclusive compilation.",
//     thumbnail: "10-years-house-of-hustle.jpg",
//     releaseDate: "2024-08-02",
//     price: {
//       "GBP": {
//         amount: 12.99,
//         currency: "GPB"
//       },
//       "USD": {
//         amount: 16.99,
//         currency: "USD",
//       },
//       "EUR": {
//         amount: 13.99,
//         currency: "EUR"
//       }
//     }
//   }
// ]


export interface ITrack {
  id: number
  title: string
  label: string
  
  thumbnail: string
  slug: string
  description?: string
  

  artist?: string
  genre?: string
  price: {
    amount: number
    currency: string
  }
}




const dataReleases = [
  {
    id: 4649122,
    title: "Toolroom Ibiza 2024 Vol. 2",
    label: dataLabels[9000],
    bpm: "95-132 BPM",
    release_date: "2024-08-02",
    price: "£12.99",
    type: "rlease",
  },
  {
    id: 4672324,
    title: "10 Years: House Of Hustle",
    label: dataLabels[1000],
    bpm: "126-132 BPM",
    release_date: "2024-08-02",
    price: "£12.99"
  },
  {
    id: 4560165,
    title: "Dopamine",
    label: dataLabels[1000],
    bpm: "127-128 BPM",
    release_date: "2024-06-07",
    price: "£2.28"
  },
  {
    id: 4454921,
    title: "Ponderosa EP",
    label: dataLabels[2000],
    bpm: "126-128 BPM",
    release_date: "2024-03-08",
    price: "£2.28"
  },
  {
    id: 4385370,
    title: "Soca Bomb",
    label: dataLabels[3000],
    bpm: "130 BPM",
    release_date: "2024-01-12",
    price: "£1.14"
  },
  {
    id: 4185682,
    title: "Gold Deeper",
    label: dataLabels[6000],
    bpm: "66-162 BPM",
    release_date: "2023-07-21",
    price: "£9.99"
  },
  {
    id: 4158633,
    title: "The Art of Bass, Vol. 03",
    label: dataLabels[15000],
    bpm: "114-138 BPM",
    release_date: "2023-06-30",
    price: "£6.99"
  },
  {
    id: 4154730,
    title: "Future Bass: Dubstep, Vol. 03",
    label: dataLabels[15000],
    bpm: "73-150 BPM",
    release_date: "2023-06-12",
    price: "£6.99"
  },
  {
    id: 4053116,
    title: "Unnatural Habitat 4",
    label: dataLabels[11000],
    bpm: "120-127 BPM",
    release_date: "2023-03-31",
    price: "£6.99"
  },
  {
    id: 10,
    title: "Season V",
    label: dataLabels[10000],
    bpm: "123-128 BPM",
    release_date: "2023-03-07",
    price: "£6.99"
  },
  {
    id: 11,
    title: "King Slayer",
    label: dataLabels[1000],
    bpm: "125-126 BPM",
    release_date: "2023-03-03",
    price: "£2.28"
  },
  {
    id: 12,
    title: "Toolroom Amsterdam 2022",
    label: dataLabels[9000],
    bpm: "66-137 BPM",
    release_date: "2022-10-07",
    price: "£8.99"
  },
  {
    id: 13,
    title: "Body Talk",
    label: dataLabels[3000],
    bpm: "126 BPM",
    release_date: "2022-08-12",
    price: "£1.14"
  },
  {
    id: 14,
    title: "Look At Me",
    label: dataLabels[2000],
    bpm: "125 BPM",
    release_date: "2022-06-10",
    price: "£1.14"
  },
  {
    id: 15,
    title: "Rockstar",
    label: dataLabels[12000],
    bpm: "125 BPM",
    release_date: "2022-03-31",
    price: "£1.14"
  },
  {
    id: 16,
    title: "Loudermilk",
    label: dataLabels[1000],
    bpm: "125 BPM",
    release_date: "2022-03-11",
    price: "£2.28"
  },
  {
    id: 17,
    title: "Kitty Bash",
    label: dataLabels[11000],
    bpm: "126-127 BPM",
    release_date: "2021-12-17",
    price: "£2.28"
  },
  {
    id: 18,
    title: "D4 D4NCE Accapellas, Vol.1",
    label: dataLabels[19000],
    bpm: "71-128 BPM",
    release_date: "2021-12-17",
    price: "£16.99"
  },
  {
    id: 19,
    title: "D4 D4NCE: Introducing",
    label: dataLabels[19000],
    bpm: "122-129 BPM",
    release_date: "2021-10-01",
    price: "£7.98"
  },
  {
    id: 20,
    title: "Self Love / Bomba",
    label: dataLabels[4000],
    bpm: "126 BPM",
    release_date: "2021-09-17",
    price: "£2.28"
  },
  {
    id: 21,
    title: "Big Boy Music EP",
    label: dataLabels[3000],
    bpm: "125-126 BPM",
    release_date: "2021-08-20",
    price: "£2.28"
  },
  {
    id: 22,
    title: "This Is Gold Deeper, Vol. 2",
    label: dataLabels[6000],
    bpm: "120-128 BPM",
    release_date: "2021-07-16",
    price: "£9.99"
  },
  {
    id: 23,
    title: "Shadethrower EP",
    label: dataLabels[2000],
    bpm: "126-127 BPM",
    release_date: "2021-07-09",
    price: "£2.28"
  },
  {
    id: 24,
    title: "Lose Yourself",
    label: dataLabels[12000],
    bpm: "126 BPM",
    release_date: "2021-04-02",
    price: "£1.14"
  },
  {
    id: 25,
    title: "A Rare Occurrence At The Warehouse",
    label: dataLabels[1000],
    bpm: "123-125 BPM",
    release_date: "2021-02-26",
    price: "£2.28"
  },
  {
    id: 26,
    title: "Cucamonga EP",
    label: dataLabels[22000],
    bpm: "124-125 BPM",
    release_date: "2020-11-06",
    price: "£2.28"
  },
  {
    id: 27,
    title: "Toolroom House Party Vol. 3",
    label: dataLabels[9000],
    bpm: "120-130 BPM",
    release_date: "2020-09-25",
    price: "£8.99"
  },
  {
    id: 28,
    title: "Drum Machine EP",
    label: dataLabels[2000],
    bpm: "125-126 BPM",
    release_date: "2020-07-31",
    price: "£2.28"
  },
  {
    id: 29,
    title: "This Is Gold Deeper",
    label: dataLabels[6000],
    bpm: "114-128 BPM",
    release_date: "2020-07-29",
    price: "£16.99"
  },
  {
    id: 30,
    title: "Moody Summer Nights",
    label: dataLabels[28000],
    bpm: "122-128 BPM",
    release_date: "2020-06-26",
    price: "£16.99"
  },
  {
    id: 31,
    title: "Levitation Device",
    label: dataLabels[6000],
    bpm: "123 BPM",
    release_date: "2020-06-03",
    price: "£1.14"
  },
  {
    id: 32,
    title: "Gold Deeper 2020 Sampler",
    label: dataLabels[6000],
    bpm: "120-128 BPM",
    release_date: "2020-05-22",
    price: "£9.99"
  },
  {
    id: 33,
    title: "Tales of The Subconscious",
    label: dataLabels[19000],
    bpm: "123-128 BPM",
    release_date: "2019-11-15",
    price: "£6.99"
  }
]

export function getProductBySlug(slug: string) {
  return dataReleases.find(item => item.slug === slug)
}

export function getLatestAudio() {

}

export function getProductRandom(amount: number) {
  const shuffled = [...dataReleases].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, amount);
}

export default dataReleases
