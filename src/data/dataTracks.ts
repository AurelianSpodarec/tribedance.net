interface IArtist {
  id: number;
  image: IImage;
  name: string;
  slug: string;
  url: string;
}

interface IImage {
  id: number;
  uri: string;
  dynamic_uri: string;
}

interface ICurrentStatus {
  id: number;
  name: string;
  url: string;
}

interface IGenre {
  id: number;
  name: string;
  slug: string;
  url: string;
}

interface ISubGenre {
  id: number;
  name: string;
  slug: string;
  url: string;
  enabled: boolean;
}

interface Key {
  camelot_number: number;
  camelot_letter: string;
  chord_type: IChordType;
  id: number;
  is_sharp: boolean;
  is_flat: boolean;
  letter: string;
  name: string;
  url: string;
}

interface IChordType {
  id: number;
  name: string;
  url: string;
}

interface IPrice {
  code: string;
  symbol: string;
  value: number;
  display: string;
}

interface IRelease {
  id: number;
  name: string;
  image: IImage;
  label: ILabel;
  slug: string;
}

interface ILabel {
  id: number;
  name: string;
  image: IImage;
  slug: string;
}

interface ISaleType {
  id: number;
  name: string;
  url: string;
}

export interface ITrack {
  artists: IArtist[];
  publish_status: string;
  available_worldwide: boolean;
  bpm: number;
  catalog_number: string;
  current_status: ICurrentStatus;
  encoded_date: string;
  exclusive: boolean;
  free_downloads: any[];
  free_download_start_date: string | null;
  free_download_end_date: string | null;
  genre: IGenre;
  id: number;
  image: IImage | null;
  is_available_for_streaming: boolean;
  isrc: string;
  key: Key;
  label_track_identifier: string | null;
  length: string;
  length_ms: number;
  mix_name: string;
  name: string;
  new_release_date: string;
  pre_order: boolean;
  pre_order_date: string | null;
  price: IPrice;
  publish_date: string;
  release: IRelease;
  remixers: any[];
  sale_type: ISaleType;
  sample_url: string;
  sample_start_ms: number;
  sample_end_ms: number;
  slug: string;
  sub_genre: ISubGenre | null;
  url: string;
  is_hype: boolean;
}


const dataTracks:ITrack[] = [
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 128,
    "catalog_number": "TOOL128301Z",
    "current_status": {
      "id": 8,
      "name": "New Release",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/8/"
    },
    "encoded_date": "2024-07-11T17:18:47-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 19263456,
    "image": {
      "id": 40049256,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/ebaeb37d-e61b-4b8b-b674-52c72736fdda.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/ebaeb37d-e61b-4b8b-b674-52c72736fdda.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBJAJ2400311",
    "key": {
      "camelot_number": 6,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 6,
      "is_sharp": false,
      "is_flat": false,
      "letter": "G",
      "name": "G Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/6/"
    },
    "label_track_identifier": "1000134335238",
    "length": "4:48",
    "length_ms": 288167,
    "mix_name": "Extended Mix",
    "name": "DJ Is Calling",
    "new_release_date": "2024-08-02",
    "pre_order": false,
    "pre_order_date": "2024-07-19",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.3,
      "display": "£1.30"
    },
    "publish_date": "2024-08-02",
    "release": {
      "id": 4649122,
      "name": "Toolroom Ibiza 2024 Vol. 2",
      "image": {
        "id": 40049074,
        "uri": "/images/products/dj-is-calling.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/ffad2576-f155-4eec-a52f-493c2f4447c2.jpg"
      },
      "label": {
        "id": 495,
        "name": "Toolroom",
        "image": {
          "id": 11530700,
          "uri": "https://geo-media.beatport.com/image_size/500x500/41217a0b-92e4-4fbd-9223-d513c62dd411.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/41217a0b-92e4-4fbd-9223-d513c62dd411.jpg"
        },
        "slug": "toolroom"
      },
      "slug": "toolroom-ibiza-2024-vol-2"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/ebaeb37d-e61b-4b8b-b674-52c72736fdda.LOFI.mp3",
    "sample_start_ms": 115267,
    "sample_end_ms": 205267,
    "slug": "dj-is-calling",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/19263456/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 128,
    "catalog_number": "HOH20510Y",
    "current_status": {
      "id": 8,
      "name": "New Release",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/8/"
    },
    "encoded_date": "2024-07-29T19:40:03-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 19330478,
    "image": {
      "id": 40080447,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/9aed988a-d775-4bb8-ae99-be651e3a01d6.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/9aed988a-d775-4bb8-ae99-be651e3a01d6.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU2466455",
    "key": {
      "camelot_number": 3,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 3,
      "is_sharp": false,
      "is_flat": true,
      "letter": "B",
      "name": "Bb Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/3/"
    },
    "label_track_identifier": "6145852",
    "length": "5:28",
    "length_ms": 328994,
    "mix_name": "Extended Mix",
    "name": "Nite Of Your Life",
    "new_release_date": "2024-08-02",
    "pre_order": false,
    "pre_order_date": "2024-07-05",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.3,
      "display": "£1.30"
    },
    "publish_date": "2024-08-02",
    "release": {
      "id": 4672324,
      "name": "10 Years: House Of Hustle",
      "image": {
        "id": 40080293,
        "uri": "/images/products/nite-of-your-life.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/726a8582-6cdc-4e6c-b2a9-5662fa610662.jpg"
      },
      "label": {
        "id": 42127,
        "name": "House Of Hustle",
        "image": {
          "id": 22826430,
          "uri": "https://geo-media.beatport.com/image_size/500x500/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg"
        },
        "slug": "house-of-hustle"
      },
      "slug": "10-years-house-of-hustle"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/9aed988a-d775-4bb8-ae99-be651e3a01d6.LOFI.mp3",
    "sample_start_ms": 131598,
    "sample_end_ms": 221598,
    "slug": "nite-of-your-life",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/19330478/",
    "is_hype": true
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      },
      {
        "id": 1137631,
        "image": {
          "id": 35424335,
          "uri": "https://geo-media.beatport.com/image_size/590x404/26746eac-88a7-4af4-af48-90bd4d8db9b9.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/26746eac-88a7-4af4-af48-90bd4d8db9b9.jpg"
        },
        "name": "Kapowsky",
        "slug": "kapowsky",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/1137631/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 127,
    "catalog_number": "HOH201",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2024-05-04T08:42:02-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 19005517,
    "image": {
      "id": 39129596,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/4dc9f963-6ed1-4ab2-bc3a-3286b8aca1f9.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4dc9f963-6ed1-4ab2-bc3a-3286b8aca1f9.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU2444925",
    "key": {
      "camelot_number": 12,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 24,
      "is_sharp": false,
      "is_flat": false,
      "letter": "E",
      "name": "E Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/24/"
    },
    "label_track_identifier": "5960847",
    "length": "5:50",
    "length_ms": 350270,
    "mix_name": "Original Mix",
    "name": "Wonkee Beat",
    "new_release_date": "2024-06-07",
    "pre_order": false,
    "pre_order_date": "2024-05-10",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2024-06-07",
    "release": {
      "id": 4560165,
      "name": "Dopamine",
      "image": {
        "id": 39129376,
        "uri": "/images/products/wonkee-beat.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/fa34ec54-f38f-4b96-a8d9-16787175d1bc.jpg"
      },
      "label": {
        "id": 42127,
        "name": "House Of Hustle",
        "image": {
          "id": 22826430,
          "uri": "https://geo-media.beatport.com/image_size/500x500/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg"
        },
        "slug": "house-of-hustle"
      },
      "slug": "dopamine"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/4dc9f963-6ed1-4ab2-bc3a-3286b8aca1f9.LOFI.mp3",
    "sample_start_ms": 140108,
    "sample_end_ms": 260108,
    "slug": "wonkee-beat",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/19005517/",
    "is_hype": true
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 126,
    "catalog_number": "STRANGE07701Z",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2024-02-15T13:38:27-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 18700310,
    "image": {
      "id": 37926606,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/6f4fe4d8-1b6e-4560-b26a-46571c674d80.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/6f4fe4d8-1b6e-4560-b26a-46571c674d80.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBJAJ2400313",
    "key": {
      "camelot_number": 10,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 10,
      "is_sharp": false,
      "is_flat": false,
      "letter": "B",
      "name": "B Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/10/"
    },
    "label_track_identifier": "1000134335240",
    "length": "4:20",
    "length_ms": 260314,
    "mix_name": "Extended Mix",
    "name": "A Beat Like This",
    "new_release_date": "2024-03-08",
    "pre_order": false,
    "pre_order_date": "2024-02-23",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2024-03-08",
    "release": {
      "id": 4454921,
      "name": "Ponderosa EP",
      "image": {
        "id": 37926562,
        "uri": "/images/products/a-beat-like-this.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/342320c7-49f2-4388-a840-4cd38b498af0.jpg"
      },
      "label": {
        "id": 61960,
        "name": "Strangelove Recordings",
        "image": {
          "id": 15416968,
          "uri": "https://geo-media.beatport.com/image_size/500x500/e0517b37-32d5-4f7b-988c-29cf05e5316f.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/e0517b37-32d5-4f7b-988c-29cf05e5316f.jpg"
        },
        "slug": "strangelove-recordings"
      },
      "slug": "ponderosa-ep"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/6f4fe4d8-1b6e-4560-b26a-46571c674d80.LOFI.mp3",
    "sample_start_ms": 104126,
    "sample_end_ms": 224126,
    "slug": "a-beat-like-this",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/18700310/",
    "is_hype": true
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 128,
    "catalog_number": "STRANGE07701Z",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2024-02-15T13:38:27-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 18700307,
    "image": {
      "id": 37926607,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/3baa6006-1e67-4de5-971d-4aea0078d838.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/3baa6006-1e67-4de5-971d-4aea0078d838.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBJAJ2400311",
    "key": {
      "camelot_number": 6,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 6,
      "is_sharp": false,
      "is_flat": false,
      "letter": "G",
      "name": "G Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/6/"
    },
    "label_track_identifier": "1000134335238",
    "length": "4:48",
    "length_ms": 288167,
    "mix_name": "Extended Mix",
    "name": "DJ Is Calling",
    "new_release_date": "2024-03-08",
    "pre_order": false,
    "pre_order_date": "2024-02-23",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2024-03-08",
    "release": {
      "id": 4454921,
      "name": "Ponderosa EP",
      "image": {
        "id": 37926562,
        "uri": "/images/products/dj-is-calling.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/342320c7-49f2-4388-a840-4cd38b498af0.jpg"
      },
      "label": {
        "id": 61960,
        "name": "Strangelove Recordings",
        "image": {
          "id": 15416968,
          "uri": "https://geo-media.beatport.com/image_size/500x500/e0517b37-32d5-4f7b-988c-29cf05e5316f.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/e0517b37-32d5-4f7b-988c-29cf05e5316f.jpg"
        },
        "slug": "strangelove-recordings"
      },
      "slug": "ponderosa-ep"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/3baa6006-1e67-4de5-971d-4aea0078d838.LOFI.mp3",
    "sample_start_ms": 115267,
    "sample_end_ms": 235267,
    "slug": "dj-is-calling",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/18700307/",
    "is_hype": true
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      },
      {
        "id": 1148488,
        "image": {
          "id": 39573993,
          "uri": "https://geo-media.beatport.com/image_size/590x404/86c3f5b9-5062-4967-bc8e-5c81a04ad22c.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/86c3f5b9-5062-4967-bc8e-5c81a04ad22c.jpg"
        },
        "name": "General Moses",
        "slug": "general-moses",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/1148488/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 130,
    "catalog_number": "TAB109",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2023-12-21T12:47:39-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 18503305,
    "image": {
      "id": 37072853,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/d63cf07c-0794-4641-863c-6e3e0a5ea1a5.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/d63cf07c-0794-4641-863c-6e3e0a5ea1a5.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBLV62321478",
    "key": {
      "camelot_number": 2,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 2,
      "is_sharp": false,
      "is_flat": true,
      "letter": "E",
      "name": "Eb Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/2/"
    },
    "label_track_identifier": "5747683",
    "length": "5:16",
    "length_ms": 316000,
    "mix_name": "Original Mix",
    "name": "Soca Bomb",
    "new_release_date": "2024-01-12",
    "pre_order": false,
    "pre_order_date": "2023-12-15",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2024-01-12",
    "release": {
      "id": 4385370,
      "name": "Soca Bomb",
      "image": {
        "id": 37072776,
        "uri": "/images/products/soca-bomb.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/b7e882a3-0523-4e38-9058-473eb05926bf.jpg"
      },
      "label": {
        "id": 46486,
        "name": "This Ain't Bristol",
        "image": {
          "id": 10904394,
          "uri": "https://geo-media.beatport.com/image_size/500x500/5ccdde2f-c511-4f08-88b2-bd02d4ddae93.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/5ccdde2f-c511-4f08-88b2-bd02d4ddae93.jpg"
        },
        "slug": "this-aint-bristol"
      },
      "slug": "soca-bomb"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/d63cf07c-0794-4641-863c-6e3e0a5ea1a5.LOFI.mp3",
    "sample_start_ms": 126400,
    "sample_end_ms": 246400,
    "slug": "soca-bomb",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/18503305/",
    "is_hype": true
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 125,
    "catalog_number": "4066218804331",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2023-07-04T09:42:22-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 91,
      "name": "Bass House",
      "slug": "bass-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/91/"
    },
    "id": 17903210,
    "image": {
      "id": 34873249,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/587d5656-7749-4c29-b274-0cbd1cc60c8c.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/587d5656-7749-4c29-b274-0cbd1cc60c8c.png"
    },
    "is_available_for_streaming": true,
    "isrc": "CH6541915378",
    "key": {
      "camelot_number": 7,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 19,
      "is_sharp": false,
      "is_flat": false,
      "letter": "F",
      "name": "F Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/19/"
    },
    "label_track_identifier": "A10374Z00000L2LTZK",
    "length": "3:43",
    "length_ms": 223125,
    "mix_name": "Original Mix",
    "name": "Friction",
    "new_release_date": "2023-07-21",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2023-07-21",
    "release": {
      "id": 4185682,
      "name": "Gold Deeper",
      "image": {
        "id": 34872921,
        "uri": "/images/products/friction.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/589075bf-4bc6-47bd-94d8-98af758b492c.jpg"
      },
      "label": {
        "id": 76828,
        "name": "Gold Deeper",
        "image": {
          "id": 21494454,
          "uri": "https://geo-media.beatport.com/image_size/500x500/1668b1ef-dedf-40db-895a-0389a7616e26.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/1668b1ef-dedf-40db-895a-0389a7616e26.jpg"
        },
        "slug": "gold-deeper"
      },
      "slug": "gold-deeper"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/587d5656-7749-4c29-b274-0cbd1cc60c8c.LOFI.mp3",
    "sample_start_ms": 89250,
    "sample_end_ms": 209250,
    "slug": "friction",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/17903210/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 123,
    "catalog_number": "4066218804331",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2023-07-04T09:42:22-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 91,
      "name": "Bass House",
      "slug": "bass-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/91/"
    },
    "id": 17903112,
    "image": {
      "id": 34873256,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/21aa04ce-e32e-49d5-aed7-13fac213d9d7.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/21aa04ce-e32e-49d5-aed7-13fac213d9d7.png"
    },
    "is_available_for_streaming": true,
    "isrc": "CH6542055903",
    "key": {
      "camelot_number": 3,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 3,
      "is_sharp": false,
      "is_flat": true,
      "letter": "B",
      "name": "Bb Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/3/"
    },
    "label_track_identifier": "A10374Z00000L2LSQ5",
    "length": "5:04",
    "length_ms": 304268,
    "mix_name": "Original Mix",
    "name": "Levitation Device",
    "new_release_date": "2023-07-21",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2023-07-21",
    "release": {
      "id": 4185682,
      "name": "Gold Deeper",
      "image": {
        "id": 34872921,
        "uri": "/images/products/levitation-device.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/589075bf-4bc6-47bd-94d8-98af758b492c.jpg"
      },
      "label": {
        "id": 76828,
        "name": "Gold Deeper",
        "image": {
          "id": 21494454,
          "uri": "https://geo-media.beatport.com/image_size/500x500/1668b1ef-dedf-40db-895a-0389a7616e26.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/1668b1ef-dedf-40db-895a-0389a7616e26.jpg"
        },
        "slug": "gold-deeper"
      },
      "slug": "gold-deeper"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/21aa04ce-e32e-49d5-aed7-13fac213d9d7.LOFI.mp3",
    "sample_start_ms": 121707,
    "sample_end_ms": 241707,
    "slug": "levitation-device",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/17903112/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 126,
    "catalog_number": "LWTAOB03",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2023-06-19T02:54:55-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 91,
      "name": "Bass House",
      "slug": "bass-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/91/"
    },
    "id": 17818408,
    "image": {
      "id": 34692317,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/a43900ce-4cfa-40ad-abaa-7886c8e0ef0e.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/a43900ce-4cfa-40ad-abaa-7886c8e0ef0e.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU2315078",
    "key": {
      "camelot_number": 6,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 6,
      "is_sharp": false,
      "is_flat": false,
      "letter": "G",
      "name": "G Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/6/"
    },
    "label_track_identifier": "5359068",
    "length": "6:11",
    "length_ms": 371169,
    "mix_name": "Original Mix",
    "name": "King Slayer",
    "new_release_date": "2023-06-30",
    "pre_order": false,
    "pre_order_date": "2023-06-02",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2023-06-30",
    "release": {
      "id": 4158633,
      "name": "The Art of Bass, Vol. 03",
      "image": {
        "id": 34690161,
        "uri": "/images/products/king-slayer.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/e82e2b6c-c21b-40d9-8860-feaf845b6c07.jpg"
      },
      "label": {
        "id": 7839,
        "name": "LW Recordings",
        "image": {
          "id": 7380931,
          "uri": "https://geo-media.beatport.com/image_size/500x500/5a535d69-7db3-4895-9c48-2f3c26428338.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/5a535d69-7db3-4895-9c48-2f3c26428338.jpg"
        },
        "slug": "lw-recordings"
      },
      "slug": "the-art-of-bass-vol-03"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/a43900ce-4cfa-40ad-abaa-7886c8e0ef0e.LOFI.mp3",
    "sample_start_ms": 148468,
    "sample_end_ms": 268468,
    "slug": "king-slayer",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/17818408/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 125,
    "catalog_number": "LWFBD03",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2023-06-06T08:10:27-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 91,
      "name": "Bass House",
      "slug": "bass-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/91/"
    },
    "id": 17806421,
    "image": {
      "id": 34543151,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/7bfb043e-5f26-4592-be5c-87c08a213fee.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/7bfb043e-5f26-4592-be5c-87c08a213fee.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU2315079",
    "key": {
      "camelot_number": 6,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 18,
      "is_sharp": false,
      "is_flat": true,
      "letter": "B",
      "name": "Bb Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/18/"
    },
    "label_track_identifier": "5358367",
    "length": "5:12",
    "length_ms": 312828,
    "mix_name": "Original Mix",
    "name": "Ted Turner",
    "new_release_date": "2023-06-12",
    "pre_order": false,
    "pre_order_date": "2023-05-15",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2023-06-12",
    "release": {
      "id": 4154730,
      "name": "Future Bass: Dubstep, Vol. 03",
      "image": {
        "id": 34542791,
        "uri": "/images/products/ted-turner.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4bcc00ca-1a14-4768-a8a9-fd9673cd54de.jpg"
      },
      "label": {
        "id": 7839,
        "name": "LW Recordings",
        "image": {
          "id": 7380931,
          "uri": "https://geo-media.beatport.com/image_size/500x500/5a535d69-7db3-4895-9c48-2f3c26428338.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/5a535d69-7db3-4895-9c48-2f3c26428338.jpg"
        },
        "slug": "lw-recordings"
      },
      "slug": "future-bass-dubstep-vol-03"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/7bfb043e-5f26-4592-be5c-87c08a213fee.LOFI.mp3",
    "sample_start_ms": 125131,
    "sample_end_ms": 245131,
    "slug": "ted-turner",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/17806421/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 127,
    "catalog_number": "MEOW011",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2023-03-09T07:23:37-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 17495269,
    "image": {
      "id": 33506816,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/9cba5fee-5819-49d0-a301-09a574679c26.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/9cba5fee-5819-49d0-a301-09a574679c26.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBLV62127152",
    "key": {
      "camelot_number": 11,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 23,
      "is_sharp": false,
      "is_flat": false,
      "letter": "A",
      "name": "A Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/23/"
    },
    "label_track_identifier": "5227356",
    "length": "5:35",
    "length_ms": 335172,
    "mix_name": "Original Mix",
    "name": "Listen It",
    "new_release_date": "2023-03-31",
    "pre_order": false,
    "pre_order_date": "2023-03-03",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2023-03-31",
    "release": {
      "id": 4053116,
      "name": "Unnatural Habitat 4",
      "image": {
        "id": 33506600,
        "uri": "/images/products/listen-it.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/29c64dc5-4678-4f70-9bf2-f5bd746591ac.jpg"
      },
      "label": {
        "id": 12670,
        "name": "Animal Language",
        "image": {
          "id": 11948253,
          "uri": "https://geo-media.beatport.com/image_size/500x500/869f167f-263b-40fd-b1b3-bc07ecd183f3.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/869f167f-263b-40fd-b1b3-bc07ecd183f3.jpg"
        },
        "slug": "animal-language"
      },
      "slug": "unnatural-habitat-4"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/9cba5fee-5819-49d0-a301-09a574679c26.LOFI.mp3",
    "sample_start_ms": 134069,
    "sample_end_ms": 254069,
    "slug": "listen-it",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/17495269/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 123,
    "catalog_number": "4066218691764",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2023-03-01T08:04:52-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 5,
      "name": "House",
      "slug": "house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/5/"
    },
    "id": 17468178,
    "image": {
      "id": 33436613,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/54c58072-36a5-40c3-a0e2-74ef4b82705d.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/54c58072-36a5-40c3-a0e2-74ef4b82705d.png"
    },
    "is_available_for_streaming": true,
    "isrc": "CH6541990905",
    "key": {
      "camelot_number": 2,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 2,
      "is_sharp": false,
      "is_flat": true,
      "letter": "E",
      "name": "Eb Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/2/"
    },
    "label_track_identifier": "A10374Z00000JPUZTC",
    "length": "5:16",
    "length_ms": 316172,
    "mix_name": "Original Mix",
    "name": "Drummer Boiii",
    "new_release_date": "2023-03-07",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2023-03-07",
    "release": {
      "id": 4044041,
      "name": "Season V",
      "image": {
        "id": 33436555,
        "uri": "/images/products/drummer-boiii.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/7cb06698-25d9-4c98-944f-6deeff8153ae.jpg"
      },
      "label": {
        "id": 72893,
        "name": "noir sur blanc records",
        "image": {
          "id": 20098576,
          "uri": "https://geo-media.beatport.com/image_size/500x500/3c47f08d-3598-4099-815c-b90abf455db9.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/3c47f08d-3598-4099-815c-b90abf455db9.jpg"
        },
        "slug": "noir-sur-blanc-records"
      },
      "slug": "season-v"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/54c58072-36a5-40c3-a0e2-74ef4b82705d.LOFI.mp3",
    "sample_start_ms": 126469,
    "sample_end_ms": 246469,
    "slug": "drummer-boiii",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/17468178/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 124,
    "catalog_number": "4066218691764",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2023-03-01T08:04:52-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 5,
      "name": "House",
      "slug": "house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/5/"
    },
    "id": 17468180,
    "image": {
      "id": 33436623,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/0288a676-3b68-471e-aba1-e2bb7741391a.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/0288a676-3b68-471e-aba1-e2bb7741391a.png"
    },
    "is_available_for_streaming": true,
    "isrc": "CH6541990906",
    "key": {
      "camelot_number": 5,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 5,
      "is_sharp": false,
      "is_flat": false,
      "letter": "C",
      "name": "C Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/5/"
    },
    "label_track_identifier": "A10374Z00000JPUZUA",
    "length": "4:58",
    "length_ms": 298488,
    "mix_name": "Original Mix",
    "name": "Hype Boiii",
    "new_release_date": "2023-03-07",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2023-03-07",
    "release": {
      "id": 4044041,
      "name": "Season V",
      "image": {
        "id": 33436555,
        "uri": "/images/products/hype-boiii.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/7cb06698-25d9-4c98-944f-6deeff8153ae.jpg"
      },
      "label": {
        "id": 72893,
        "name": "noir sur blanc records",
        "image": {
          "id": 20098576,
          "uri": "https://geo-media.beatport.com/image_size/500x500/3c47f08d-3598-4099-815c-b90abf455db9.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/3c47f08d-3598-4099-815c-b90abf455db9.jpg"
        },
        "slug": "noir-sur-blanc-records"
      },
      "slug": "season-v"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/0288a676-3b68-471e-aba1-e2bb7741391a.LOFI.mp3",
    "sample_start_ms": 119395,
    "sample_end_ms": 239395,
    "slug": "hype-boiii",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/17468180/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 126,
    "catalog_number": "HOH164",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2023-02-09T07:03:37-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 91,
      "name": "Bass House",
      "slug": "bass-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/91/"
    },
    "id": 17402138,
    "image": {
      "id": 33281318,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/a27dcedc-fed9-420d-9c15-32a7100ed0fa.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/a27dcedc-fed9-420d-9c15-32a7100ed0fa.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU2315078",
    "key": {
      "camelot_number": 6,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 6,
      "is_sharp": false,
      "is_flat": false,
      "letter": "G",
      "name": "G Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/6/"
    },
    "label_track_identifier": "5178631",
    "length": "6:11",
    "length_ms": 371169,
    "mix_name": "Original Mix",
    "name": "King Slayer",
    "new_release_date": "2023-03-03",
    "pre_order": false,
    "pre_order_date": "2023-02-03",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2023-03-03",
    "release": {
      "id": 4021781,
      "name": "King Slayer",
      "image": {
        "id": 33281249,
        "uri": "/images/products/king-slayer.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/c64b0c6b-3380-480f-a005-7fc632065941.jpg"
      },
      "label": {
        "id": 42127,
        "name": "House Of Hustle",
        "image": {
          "id": 22826430,
          "uri": "https://geo-media.beatport.com/image_size/500x500/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg"
        },
        "slug": "house-of-hustle"
      },
      "slug": "king-slayer"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/a27dcedc-fed9-420d-9c15-32a7100ed0fa.LOFI.mp3",
    "sample_start_ms": 148468,
    "sample_end_ms": 268468,
    "slug": "king-slayer",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/17402138/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 125,
    "catalog_number": "HOH164",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2023-02-09T07:03:37-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 91,
      "name": "Bass House",
      "slug": "bass-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/91/"
    },
    "id": 17402139,
    "image": {
      "id": 33281317,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/2d59cc22-24e9-4013-b184-7d8be3552e4b.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/2d59cc22-24e9-4013-b184-7d8be3552e4b.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU2315079",
    "key": {
      "camelot_number": 6,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 18,
      "is_sharp": false,
      "is_flat": true,
      "letter": "B",
      "name": "Bb Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/18/"
    },
    "label_track_identifier": "5178638",
    "length": "5:12",
    "length_ms": 312828,
    "mix_name": "Original Mix",
    "name": "Ted Turner",
    "new_release_date": "2023-03-03",
    "pre_order": false,
    "pre_order_date": "2023-02-03",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2023-03-03",
    "release": {
      "id": 4021781,
      "name": "King Slayer",
      "image": {
        "id": 33281249,
        "uri": "/images/products/ted-turner.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/c64b0c6b-3380-480f-a005-7fc632065941.jpg"
      },
      "label": {
        "id": 42127,
        "name": "House Of Hustle",
        "image": {
          "id": 22826430,
          "uri": "https://geo-media.beatport.com/image_size/500x500/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg"
        },
        "slug": "house-of-hustle"
      },
      "slug": "king-slayer"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/2d59cc22-24e9-4013-b184-7d8be3552e4b.LOFI.mp3",
    "sample_start_ms": 125131,
    "sample_end_ms": 245131,
    "slug": "ted-turner",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/17402139/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 168391,
        "image": {
          "id": 20439982,
          "uri": "https://geo-media.beatport.com/image_size/590x404/0cec187e-db74-4c6e-ab1f-8bee852548ca.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/0cec187e-db74-4c6e-ab1f-8bee852548ca.jpg"
        },
        "name": "Kid Enigma",
        "slug": "kid-enigma",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/168391/"
      },
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      },
      {
        "id": 556916,
        "image": {
          "id": 28688908,
          "uri": "https://geo-media.beatport.com/image_size/590x404/04531d54-4905-4e9f-b0c6-dc30b1c2c3b0.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/04531d54-4905-4e9f-b0c6-dc30b1c2c3b0.jpg"
        },
        "name": "The Schmidt",
        "slug": "the-schmidt",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/556916/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 125,
    "catalog_number": "TOOL115201Z",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2022-09-15T10:39:58-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 16927976,
    "image": {
      "id": 32153780,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/6c6bd600-df9c-496e-a2c8-a7d89c98583e.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/6c6bd600-df9c-496e-a2c8-a7d89c98583e.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBJAJ2200799",
    "key": {
      "camelot_number": 3,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 3,
      "is_sharp": false,
      "is_flat": true,
      "letter": "B",
      "name": "Bb Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/3/"
    },
    "label_track_identifier": "5558096057",
    "length": "5:26",
    "length_ms": 326250,
    "mix_name": "Extended Mix",
    "name": "Look At Me",
    "new_release_date": "2022-10-07",
    "pre_order": false,
    "pre_order_date": "2022-09-23",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2022-10-07",
    "release": {
      "id": 3872676,
      "name": "Toolroom Amsterdam 2022",
      "image": {
        "id": 32153765,
        "uri": "/images/products/look-at-me.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/9d6d5142-eff8-47b8-9bed-38a19010467a.jpg"
      },
      "label": {
        "id": 495,
        "name": "Toolroom",
        "image": {
          "id": 11530700,
          "uri": "https://geo-media.beatport.com/image_size/500x500/41217a0b-92e4-4fbd-9223-d513c62dd411.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/41217a0b-92e4-4fbd-9223-d513c62dd411.jpg"
        },
        "slug": "toolroom"
      },
      "slug": "toolroom-amsterdam-2022"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/6c6bd600-df9c-496e-a2c8-a7d89c98583e.LOFI.mp3",
    "sample_start_ms": 130500,
    "sample_end_ms": 250500,
    "slug": "look-at-me",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/16927976/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      },
      {
        "id": 1004944,
        "image": {
          "id": 35980975,
          "uri": "https://geo-media.beatport.com/image_size/590x404/f6516516-4895-4d8d-8efc-becd4163c734.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/f6516516-4895-4d8d-8efc-becd4163c734.jpg"
        },
        "name": "Screechy",
        "slug": "screechy",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/1004944/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 126,
    "catalog_number": "TAB076",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2022-07-22T11:05:53-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 16756632,
    "image": {
      "id": 31777170,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/d7bcf931-6e27-438c-866d-c8b4e8699484.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/d7bcf931-6e27-438c-866d-c8b4e8699484.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU2270098",
    "key": {
      "camelot_number": 10,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 22,
      "is_sharp": false,
      "is_flat": false,
      "letter": "D",
      "name": "D Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/22/"
    },
    "label_track_identifier": "4863405",
    "length": "5:12",
    "length_ms": 312000,
    "mix_name": "Original Mix",
    "name": "Body Talk",
    "new_release_date": "2022-08-12",
    "pre_order": false,
    "pre_order_date": "2022-07-15",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2022-08-12",
    "release": {
      "id": 3817403,
      "name": "Body Talk",
      "image": {
        "id": 31777085,
        "uri": "/images/products/body-talk.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/5e254fd4-ec5a-4c35-9185-83601cf6caa9.jpg"
      },
      "label": {
        "id": 46486,
        "name": "This Ain't Bristol",
        "image": {
          "id": 10904394,
          "uri": "https://geo-media.beatport.com/image_size/500x500/5ccdde2f-c511-4f08-88b2-bd02d4ddae93.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/5ccdde2f-c511-4f08-88b2-bd02d4ddae93.jpg"
        },
        "slug": "this-aint-bristol"
      },
      "slug": "body-talk"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/d7bcf931-6e27-438c-866d-c8b4e8699484.LOFI.mp3",
    "sample_start_ms": 124800,
    "sample_end_ms": 244800,
    "slug": "body-talk",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/16756632/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 168391,
        "image": {
          "id": 20439982,
          "uri": "https://geo-media.beatport.com/image_size/590x404/0cec187e-db74-4c6e-ab1f-8bee852548ca.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/0cec187e-db74-4c6e-ab1f-8bee852548ca.jpg"
        },
        "name": "Kid Enigma",
        "slug": "kid-enigma",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/168391/"
      },
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      },
      {
        "id": 556916,
        "image": {
          "id": 28688908,
          "uri": "https://geo-media.beatport.com/image_size/590x404/04531d54-4905-4e9f-b0c6-dc30b1c2c3b0.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/04531d54-4905-4e9f-b0c6-dc30b1c2c3b0.jpg"
        },
        "name": "The Schmidt",
        "slug": "the-schmidt",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/556916/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 125,
    "catalog_number": "STRANGE06501Z",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2022-05-19T08:18:20-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 16563391,
    "image": {
      "id": 31322457,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/789dfa58-d36a-400a-b566-227b1c8a6cb0.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/789dfa58-d36a-400a-b566-227b1c8a6cb0.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBJAJ2200799",
    "key": {
      "camelot_number": 3,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 3,
      "is_sharp": false,
      "is_flat": true,
      "letter": "B",
      "name": "Bb Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/3/"
    },
    "label_track_identifier": "5558096057",
    "length": "5:26",
    "length_ms": 326250,
    "mix_name": "Extended Mix",
    "name": "Look At Me",
    "new_release_date": "2022-06-10",
    "pre_order": false,
    "pre_order_date": "2022-05-27",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2022-06-10",
    "release": {
      "id": 3753070,
      "name": "Look At Me",
      "image": {
        "id": 31322437,
        "uri": "/images/products/look-at-me.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/3b3bbb9c-5527-4119-95b9-477bede9b7d3.jpg"
      },
      "label": {
        "id": 61960,
        "name": "Strangelove Recordings",
        "image": {
          "id": 15416968,
          "uri": "https://geo-media.beatport.com/image_size/500x500/e0517b37-32d5-4f7b-988c-29cf05e5316f.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/e0517b37-32d5-4f7b-988c-29cf05e5316f.jpg"
        },
        "slug": "strangelove-recordings"
      },
      "slug": "look-at-me"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/789dfa58-d36a-400a-b566-227b1c8a6cb0.LOFI.mp3",
    "sample_start_ms": 130500,
    "sample_end_ms": 250500,
    "slug": "look-at-me",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/16563391/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 125,
    "catalog_number": "VBCH280",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2022-02-15T01:49:55-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 16249170,
    "image": {
      "id": 30554831,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/d4dc403b-36c2-406b-97d0-d6a06cc1b8ea.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/d4dc403b-36c2-406b-97d0-d6a06cc1b8ea.png"
    },
    "is_available_for_streaming": true,
    "isrc": "AUVC02238011",
    "key": {
      "camelot_number": 8,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 20,
      "is_sharp": false,
      "is_flat": false,
      "letter": "C",
      "name": "C Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/20/"
    },
    "label_track_identifier": "5121753260",
    "length": "5:46",
    "length_ms": 346972,
    "mix_name": "Extended Mix",
    "name": "Rockstar",
    "new_release_date": "2022-03-31",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2022-03-31",
    "release": {
      "id": 3657985,
      "name": "Rockstar",
      "image": {
        "id": 30554811,
        "uri": "/images/products/rockstar.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/a9aee751-9eff-4c95-8aa0-1961ad456a93.jpg"
      },
      "label": {
        "id": 17657,
        "name": "Be Rich Records",
        "image": {
          "id": 13486491,
          "uri": "https://geo-media.beatport.com/image_size/500x500/b849f609-b8f9-4de4-b839-323c33655c16.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/b849f609-b8f9-4de4-b839-323c33655c16.jpg"
        },
        "slug": "be-rich-records"
      },
      "slug": "rockstar"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/d4dc403b-36c2-406b-97d0-d6a06cc1b8ea.LOFI.mp3",
    "sample_start_ms": 138789,
    "sample_end_ms": 258789,
    "slug": "rockstar",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/16249170/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      },
      {
        "id": 876243,
        "image": {
          "id": 34226313,
          "uri": "https://geo-media.beatport.com/image_size/590x404/56373f72-0ca4-453f-b5b0-97c5852e30d7.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/56373f72-0ca4-453f-b5b0-97c5852e30d7.jpg"
        },
        "name": "96 Vibe",
        "slug": "96-vibe",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/876243/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 125,
    "catalog_number": "HOH137",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2022-02-10T14:47:39-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 16235822,
    "image": {
      "id": 30525213,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/f6c1760c-2eef-48ed-8a70-568068b79fc9.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/f6c1760c-2eef-48ed-8a70-568068b79fc9.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU2216643",
    "key": {
      "camelot_number": 9,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 21,
      "is_sharp": false,
      "is_flat": false,
      "letter": "G",
      "name": "G Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/21/"
    },
    "label_track_identifier": "4621311",
    "length": "4:57",
    "length_ms": 297403,
    "mix_name": "Original Mix",
    "name": "Zoom",
    "new_release_date": "2022-03-11",
    "pre_order": false,
    "pre_order_date": "2022-02-11",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2022-03-11",
    "release": {
      "id": 3654188,
      "name": "Loudermilk",
      "image": {
        "id": 30525197,
        "uri": "/images/products/zoom.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/977e26fa-8b4a-467a-8291-517e8600bd59.jpg"
      },
      "label": {
        "id": 42127,
        "name": "House Of Hustle",
        "image": {
          "id": 22826430,
          "uri": "https://geo-media.beatport.com/image_size/500x500/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg"
        },
        "slug": "house-of-hustle"
      },
      "slug": "loudermilk"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/f6c1760c-2eef-48ed-8a70-568068b79fc9.LOFI.mp3",
    "sample_start_ms": 118961,
    "sample_end_ms": 238961,
    "slug": "zoom",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/16235822/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      },
      {
        "id": 1039726,
        "image": {
          "id": 5539565,
          "uri": "https://geo-media.beatport.com/image_size/590x404/0dc61986-bccf-49d4-8fad-6b147ea8f327.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/0dc61986-bccf-49d4-8fad-6b147ea8f327.jpg"
        },
        "name": "Govan Jones",
        "slug": "govan-jones",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/1039726/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 125,
    "catalog_number": "HOH137",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2022-02-10T14:47:39-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 91,
      "name": "Bass House",
      "slug": "bass-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/91/"
    },
    "id": 16235821,
    "image": {
      "id": 30525214,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/cc155d99-cd85-45f3-965e-e5c22250b0ba.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/cc155d99-cd85-45f3-965e-e5c22250b0ba.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU2216642",
    "key": {
      "camelot_number": 8,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 8,
      "is_sharp": false,
      "is_flat": false,
      "letter": "A",
      "name": "A Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/8/"
    },
    "label_track_identifier": "4621309",
    "length": "5:17",
    "length_ms": 317443,
    "mix_name": "Original Mix",
    "name": "Hook That Line",
    "new_release_date": "2022-03-11",
    "pre_order": false,
    "pre_order_date": "2022-02-11",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2022-03-11",
    "release": {
      "id": 3654188,
      "name": "Loudermilk",
      "image": {
        "id": 30525197,
        "uri": "/images/products/hook-that-line.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/977e26fa-8b4a-467a-8291-517e8600bd59.jpg"
      },
      "label": {
        "id": 42127,
        "name": "House Of Hustle",
        "image": {
          "id": 22826430,
          "uri": "https://geo-media.beatport.com/image_size/500x500/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg"
        },
        "slug": "house-of-hustle"
      },
      "slug": "loudermilk"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/cc155d99-cd85-45f3-965e-e5c22250b0ba.LOFI.mp3",
    "sample_start_ms": 126977,
    "sample_end_ms": 246977,
    "slug": "hook-that-line",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/16235821/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 127,
    "catalog_number": "MOO093",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2021-11-27T11:20:47-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 15976403,
    "image": {
      "id": 29996975,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/6bab7986-a2b8-437f-8315-25e1695c7942.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/6bab7986-a2b8-437f-8315-25e1695c7942.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBLV62127152",
    "key": {
      "camelot_number": 11,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 23,
      "is_sharp": false,
      "is_flat": false,
      "letter": "A",
      "name": "A Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/23/"
    },
    "label_track_identifier": "4490870",
    "length": "5:35",
    "length_ms": 335172,
    "mix_name": "Original Mix",
    "name": "Listen It",
    "new_release_date": "2021-12-17",
    "pre_order": false,
    "pre_order_date": "2021-11-19",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2021-12-17",
    "release": {
      "id": 3583748,
      "name": "Kitty Bash",
      "image": {
        "id": 29996968,
        "uri": "/images/products/listen-it.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/c060d723-865a-4ede-913d-2d6e94d61bd1.jpg"
      },
      "label": {
        "id": 12670,
        "name": "Animal Language",
        "image": {
          "id": 11948253,
          "uri": "https://geo-media.beatport.com/image_size/500x500/869f167f-263b-40fd-b1b3-bc07ecd183f3.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/869f167f-263b-40fd-b1b3-bc07ecd183f3.jpg"
        },
        "slug": "animal-language"
      },
      "slug": "kitty-bash"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/6bab7986-a2b8-437f-8315-25e1695c7942.LOFI.mp3",
    "sample_start_ms": 134069,
    "sample_end_ms": 254069,
    "slug": "listen-it",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/15976403/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 126,
    "catalog_number": "MOO093",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2021-11-27T11:20:47-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 15976400,
    "image": {
      "id": 29996977,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/66817280-b6c4-4b56-957c-278e477c5f86.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/66817280-b6c4-4b56-957c-278e477c5f86.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBLV62127151",
    "key": {
      "camelot_number": 12,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 12,
      "is_sharp": false,
      "is_flat": true,
      "letter": "D",
      "name": "Db Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/12/"
    },
    "label_track_identifier": "4490869",
    "length": "4:57",
    "length_ms": 297713,
    "mix_name": "Original Mix",
    "name": "Hopey",
    "new_release_date": "2021-12-17",
    "pre_order": false,
    "pre_order_date": "2021-11-19",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2021-12-17",
    "release": {
      "id": 3583748,
      "name": "Kitty Bash",
      "image": {
        "id": 29996968,
        "uri": "/images/products/hopey.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/c060d723-865a-4ede-913d-2d6e94d61bd1.jpg"
      },
      "label": {
        "id": 12670,
        "name": "Animal Language",
        "image": {
          "id": 11948253,
          "uri": "https://geo-media.beatport.com/image_size/500x500/869f167f-263b-40fd-b1b3-bc07ecd183f3.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/869f167f-263b-40fd-b1b3-bc07ecd183f3.jpg"
        },
        "slug": "animal-language"
      },
      "slug": "kitty-bash"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/66817280-b6c4-4b56-957c-278e477c5f86.LOFI.mp3",
    "sample_start_ms": 119085,
    "sample_end_ms": 239085,
    "slug": "hopey",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/15976400/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      },
      {
        "id": 609232,
        "image": {
          "id": 5539565,
          "uri": "https://geo-media.beatport.com/image_size/590x404/0dc61986-bccf-49d4-8fad-6b147ea8f327.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/0dc61986-bccf-49d4-8fad-6b147ea8f327.jpg"
        },
        "name": "Sydnee Carter",
        "slug": "sydnee-carter",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/609232/"
      },
      {
        "id": 616567,
        "image": {
          "id": 29394385,
          "uri": "https://geo-media.beatport.com/image_size/590x404/11afc3b3-be63-4b6a-8cb7-bece1f015502.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/11afc3b3-be63-4b6a-8cb7-bece1f015502.jpg"
        },
        "name": "Needs No Sleep",
        "slug": "needs-no-sleep",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/616567/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 126,
    "catalog_number": "D4DC0001D2",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2021-12-01T04:22:03-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 16,
      "name": "DJ Tools",
      "slug": "dj-tools",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/16/"
    },
    "id": 15987578,
    "image": {
      "id": 30021432,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/66fe4775-9b12-483d-abe9-54c199da9082.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/66fe4775-9b12-483d-abe9-54c199da9082.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBCPZ2120364",
    "key": {
      "camelot_number": 4,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 4,
      "is_sharp": false,
      "is_flat": false,
      "letter": "F",
      "name": "F Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/4/"
    },
    "label_track_identifier": "4670470732",
    "length": "4:45",
    "length_ms": 285048,
    "mix_name": "Accapella",
    "name": "This Life feat. Sydnee Carter",
    "new_release_date": "2021-12-17",
    "pre_order": false,
    "pre_order_date": "2021-12-03",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2021-12-17",
    "release": {
      "id": 3586418,
      "name": "D4 D4NCE Accapellas, Vol.1",
      "image": {
        "id": 30021378,
        "uri": "/images/products/this-life-feat-sydnee-carter.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/9c15a3d8-a15f-44c9-8319-de4028c31be6.jpg"
      },
      "label": {
        "id": 90764,
        "name": "D4 D4NCE",
        "image": {
          "id": 26778162,
          "uri": "https://geo-media.beatport.com/image_size/500x500/8b66571b-c0c7-4d59-8a98-92251bb93fab.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/8b66571b-c0c7-4d59-8a98-92251bb93fab.jpg"
        },
        "slug": "d4-d4nce"
      },
      "slug": "d4-d4nce-accapellas-vol1"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/66fe4775-9b12-483d-abe9-54c199da9082.LOFI.mp3",
    "sample_start_ms": 114019,
    "sample_end_ms": 234019,
    "slug": "this-life-feat-sydnee-carter",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/15987578/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      },
      {
        "id": 609232,
        "image": {
          "id": 5539565,
          "uri": "https://geo-media.beatport.com/image_size/590x404/0dc61986-bccf-49d4-8fad-6b147ea8f327.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/0dc61986-bccf-49d4-8fad-6b147ea8f327.jpg"
        },
        "name": "Sydnee Carter",
        "slug": "sydnee-carter",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/609232/"
      },
      {
        "id": 616567,
        "image": {
          "id": 29394385,
          "uri": "https://geo-media.beatport.com/image_size/590x404/11afc3b3-be63-4b6a-8cb7-bece1f015502.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/11afc3b3-be63-4b6a-8cb7-bece1f015502.jpg"
        },
        "name": "Needs No Sleep",
        "slug": "needs-no-sleep",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/616567/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 126,
    "catalog_number": "D4D0043D",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2021-09-18T09:06:02-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 5,
      "name": "House",
      "slug": "house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/5/"
    },
    "id": 15758616,
    "image": {
      "id": 29584856,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/de99fc63-ab0d-4b2f-96b1-d1d88172c2f1.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/de99fc63-ab0d-4b2f-96b1-d1d88172c2f1.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBCPZ2120074",
    "key": {
      "camelot_number": 4,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 4,
      "is_sharp": false,
      "is_flat": false,
      "letter": "F",
      "name": "F Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/4/"
    },
    "label_track_identifier": "4393623049",
    "length": "5:23",
    "length_ms": 323839,
    "mix_name": "Extended Mix",
    "name": "This Life feat. Sydnee Carter",
    "new_release_date": "2021-10-01",
    "pre_order": false,
    "pre_order_date": "2021-09-17",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2021-10-01",
    "release": {
      "id": 3520923,
      "name": "D4 D4NCE: Introducing",
      "image": {
        "id": 29584851,
        "uri": "/images/products/this-life-feat-sydnee-carter.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/38cb2942-76d0-472d-b309-14c74a10577a.jpg"
      },
      "label": {
        "id": 90764,
        "name": "D4 D4NCE",
        "image": {
          "id": 26778162,
          "uri": "https://geo-media.beatport.com/image_size/500x500/8b66571b-c0c7-4d59-8a98-92251bb93fab.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/8b66571b-c0c7-4d59-8a98-92251bb93fab.jpg"
        },
        "slug": "d4-d4nce"
      },
      "slug": "d4-d4nce-introducing"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/de99fc63-ab0d-4b2f-96b1-d1d88172c2f1.LOFI.mp3",
    "sample_start_ms": 129536,
    "sample_end_ms": 249536,
    "slug": "this-life-feat-sydnee-carter",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/15758616/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 126,
    "catalog_number": "PSYCHD108",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2021-08-23T14:35:19-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 91,
      "name": "Bass House",
      "slug": "bass-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/91/"
    },
    "id": 15637113,
    "image": {
      "id": 29271176,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/e7b7d099-9ec7-46af-8553-59bc9b2263ef.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/e7b7d099-9ec7-46af-8553-59bc9b2263ef.png"
    },
    "is_available_for_streaming": true,
    "isrc": "QM4652100021",
    "key": {
      "camelot_number": 6,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 18,
      "is_sharp": false,
      "is_flat": true,
      "letter": "B",
      "name": "Bb Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/18/"
    },
    "label_track_identifier": "3960289",
    "length": "6:18",
    "length_ms": 378810,
    "mix_name": "Original Mix",
    "name": "Self Love",
    "new_release_date": "2021-09-17",
    "pre_order": false,
    "pre_order_date": "2021-09-10",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2021-09-17",
    "release": {
      "id": 3487672,
      "name": "Self Love / Bomba",
      "image": {
        "id": 29271134,
        "uri": "/images/products/self-love.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/929100e0-1bf3-4316-9396-7b65291871f3.jpg"
      },
      "label": {
        "id": 49709,
        "name": "Psycho Disco!",
        "image": {
          "id": 11722304,
          "uri": "https://geo-media.beatport.com/image_size/500x500/a0829a72-ad1b-4dbb-bb53-1a862be56f81.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/a0829a72-ad1b-4dbb-bb53-1a862be56f81.jpg"
        },
        "slug": "psycho-disco"
      },
      "slug": "self-love-bomba"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/e7b7d099-9ec7-46af-8553-59bc9b2263ef.LOFI.mp3",
    "sample_start_ms": 151524,
    "sample_end_ms": 271524,
    "slug": "self-love",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/15637113/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 126,
    "catalog_number": "PSYCHD108",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2021-08-23T14:35:19-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 91,
      "name": "Bass House",
      "slug": "bass-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/91/"
    },
    "id": 15637114,
    "image": {
      "id": 29271178,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/a83285e8-30d0-4328-b11c-9ad9b149fa42.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/a83285e8-30d0-4328-b11c-9ad9b149fa42.png"
    },
    "is_available_for_streaming": true,
    "isrc": "QM4652100022",
    "key": {
      "camelot_number": 2,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 2,
      "is_sharp": false,
      "is_flat": true,
      "letter": "E",
      "name": "Eb Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/2/"
    },
    "label_track_identifier": "3960290",
    "length": "5:31",
    "length_ms": 331644,
    "mix_name": "Original Mix",
    "name": "Bomba",
    "new_release_date": "2021-09-17",
    "pre_order": false,
    "pre_order_date": "2021-09-10",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2021-09-17",
    "release": {
      "id": 3487672,
      "name": "Self Love / Bomba",
      "image": {
        "id": 29271134,
        "uri": "/images/products/bomba.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/929100e0-1bf3-4316-9396-7b65291871f3.jpg"
      },
      "label": {
        "id": 49709,
        "name": "Psycho Disco!",
        "image": {
          "id": 11722304,
          "uri": "https://geo-media.beatport.com/image_size/500x500/a0829a72-ad1b-4dbb-bb53-1a862be56f81.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/a0829a72-ad1b-4dbb-bb53-1a862be56f81.jpg"
        },
        "slug": "psycho-disco"
      },
      "slug": "self-love-bomba"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/a83285e8-30d0-4328-b11c-9ad9b149fa42.LOFI.mp3",
    "sample_start_ms": 132658,
    "sample_end_ms": 252658,
    "slug": "bomba",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/15637114/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 125,
    "catalog_number": "TAB054",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2021-07-16T00:53:57-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 15518341,
    "image": {
      "id": 29016771,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/ede74ccf-82f0-4123-8c46-7a979f83ac5d.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/ede74ccf-82f0-4123-8c46-7a979f83ac5d.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU2179521",
    "key": {
      "camelot_number": 9,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 9,
      "is_sharp": false,
      "is_flat": false,
      "letter": "E",
      "name": "E Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/9/"
    },
    "label_track_identifier": "4261775",
    "length": "5:53",
    "length_ms": 353280,
    "mix_name": "Extended Mix",
    "name": "Big Boy Beat",
    "new_release_date": "2021-08-20",
    "pre_order": false,
    "pre_order_date": "2021-08-06",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2021-08-20",
    "release": {
      "id": 3452444,
      "name": "Big Boy Music EP",
      "image": {
        "id": 29016722,
        "uri": "/images/products/big-boy-beat.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/9f01f205-510a-489e-b51f-f54c9d481459.jpg"
      },
      "label": {
        "id": 46486,
        "name": "This Ain't Bristol",
        "image": {
          "id": 10904394,
          "uri": "https://geo-media.beatport.com/image_size/500x500/5ccdde2f-c511-4f08-88b2-bd02d4ddae93.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/5ccdde2f-c511-4f08-88b2-bd02d4ddae93.jpg"
        },
        "slug": "this-aint-bristol"
      },
      "slug": "big-boy-music-ep"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/ede74ccf-82f0-4123-8c46-7a979f83ac5d.LOFI.mp3",
    "sample_start_ms": 141312,
    "sample_end_ms": 261312,
    "slug": "big-boy-beat",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/15518341/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      },
      {
        "id": 855373,
        "image": {
          "id": 5539565,
          "uri": "https://geo-media.beatport.com/image_size/590x404/0dc61986-bccf-49d4-8fad-6b147ea8f327.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/0dc61986-bccf-49d4-8fad-6b147ea8f327.jpg"
        },
        "name": "JC Stormz",
        "slug": "jc-stormz",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/855373/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 126,
    "catalog_number": "TAB054",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2021-07-16T00:53:57-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 15518342,
    "image": {
      "id": 29016772,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/1b2609fa-9647-443f-bffe-b3f006074cff.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/1b2609fa-9647-443f-bffe-b3f006074cff.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU2179522",
    "key": {
      "camelot_number": 6,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 6,
      "is_sharp": false,
      "is_flat": false,
      "letter": "G",
      "name": "G Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/6/"
    },
    "label_track_identifier": "4263541",
    "length": "5:42",
    "length_ms": 342857,
    "mix_name": "Extended Mix",
    "name": "Groove Take Hold",
    "new_release_date": "2021-08-20",
    "pre_order": false,
    "pre_order_date": "2021-08-06",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2021-08-20",
    "release": {
      "id": 3452444,
      "name": "Big Boy Music EP",
      "image": {
        "id": 29016722,
        "uri": "/images/products/groove-take-hold.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/9f01f205-510a-489e-b51f-f54c9d481459.jpg"
      },
      "label": {
        "id": 46486,
        "name": "This Ain't Bristol",
        "image": {
          "id": 10904394,
          "uri": "https://geo-media.beatport.com/image_size/500x500/5ccdde2f-c511-4f08-88b2-bd02d4ddae93.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/5ccdde2f-c511-4f08-88b2-bd02d4ddae93.jpg"
        },
        "slug": "this-aint-bristol"
      },
      "slug": "big-boy-music-ep"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/1b2609fa-9647-443f-bffe-b3f006074cff.LOFI.mp3",
    "sample_start_ms": 137143,
    "sample_end_ms": 257143,
    "slug": "groove-take-hold",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/15518342/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 123,
    "catalog_number": "GDEEP025",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2021-07-02T05:34:20-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 91,
      "name": "Bass House",
      "slug": "bass-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/91/"
    },
    "id": 15478747,
    "image": {
      "id": 28933375,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/921713cb-dda2-43e4-b943-1b2c2bfbe95a.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/921713cb-dda2-43e4-b943-1b2c2bfbe95a.png"
    },
    "is_available_for_streaming": true,
    "isrc": "CH6542055903",
    "key": {
      "camelot_number": 3,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 3,
      "is_sharp": false,
      "is_flat": true,
      "letter": "B",
      "name": "Bb Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/3/"
    },
    "label_track_identifier": "A10374Z00000CUWV6H",
    "length": "5:04",
    "length_ms": 304268,
    "mix_name": "Original Mix",
    "name": "Levitation Device",
    "new_release_date": "2021-07-16",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2021-07-16",
    "release": {
      "id": 3440844,
      "name": "This Is Gold Deeper, Vol. 2",
      "image": {
        "id": 28933356,
        "uri": "/images/products/levitation-device.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/273acbe1-112c-4579-939e-3fb02c2e4c7b.jpg"
      },
      "label": {
        "id": 76828,
        "name": "Gold Deeper",
        "image": {
          "id": 21494454,
          "uri": "https://geo-media.beatport.com/image_size/500x500/1668b1ef-dedf-40db-895a-0389a7616e26.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/1668b1ef-dedf-40db-895a-0389a7616e26.jpg"
        },
        "slug": "gold-deeper"
      },
      "slug": "this-is-gold-deeper-vol-2"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/921713cb-dda2-43e4-b943-1b2c2bfbe95a.LOFI.mp3",
    "sample_start_ms": 121707,
    "sample_end_ms": 241707,
    "slug": "levitation-device",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/15478747/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 127,
    "catalog_number": "STRANGE05701Z",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2021-06-23T17:40:30-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 15448992,
    "image": {
      "id": 28877192,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/9f2f20e8-2418-4d92-9516-95ed7ae90224.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/9f2f20e8-2418-4d92-9516-95ed7ae90224.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBJAJ2101209",
    "key": {
      "camelot_number": 11,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 23,
      "is_sharp": false,
      "is_flat": false,
      "letter": "A",
      "name": "A Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/23/"
    },
    "label_track_identifier": "4098165842",
    "length": "5:25",
    "length_ms": 325250,
    "mix_name": "Extended Mix",
    "name": "W8W8W8",
    "new_release_date": "2021-07-09",
    "pre_order": false,
    "pre_order_date": "2021-06-25",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2021-07-09",
    "release": {
      "id": 3432501,
      "name": "Shadethrower EP",
      "image": {
        "id": 28874475,
        "uri": "/images/products/w8w8w8.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/41a56dc2-dcbb-440d-8777-321c6397d530.jpg"
      },
      "label": {
        "id": 61960,
        "name": "Strangelove Recordings",
        "image": {
          "id": 15416968,
          "uri": "https://geo-media.beatport.com/image_size/500x500/e0517b37-32d5-4f7b-988c-29cf05e5316f.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/e0517b37-32d5-4f7b-988c-29cf05e5316f.jpg"
        },
        "slug": "strangelove-recordings"
      },
      "slug": "shadethrower-ep"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/9f2f20e8-2418-4d92-9516-95ed7ae90224.LOFI.mp3",
    "sample_start_ms": 130100,
    "sample_end_ms": 250100,
    "slug": "w8w8w8",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/15448992/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 126,
    "catalog_number": "STRANGE05701Z",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2021-06-23T17:40:30-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 15448990,
    "image": {
      "id": 28877191,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/7c1beb20-23be-4ffd-a253-a8abd6f7410e.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/7c1beb20-23be-4ffd-a253-a8abd6f7410e.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBJAJ2101208",
    "key": {
      "camelot_number": 1,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 1,
      "is_sharp": false,
      "is_flat": true,
      "letter": "A",
      "name": "Ab Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/1/"
    },
    "label_track_identifier": "4098165841",
    "length": "4:56",
    "length_ms": 296127,
    "mix_name": "Extended Mix",
    "name": "Shadethrower",
    "new_release_date": "2021-07-09",
    "pre_order": false,
    "pre_order_date": "2021-06-25",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2021-07-09",
    "release": {
      "id": 3432501,
      "name": "Shadethrower EP",
      "image": {
        "id": 28874475,
        "uri": "/images/products/shadethrower.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/41a56dc2-dcbb-440d-8777-321c6397d530.jpg"
      },
      "label": {
        "id": 61960,
        "name": "Strangelove Recordings",
        "image": {
          "id": 15416968,
          "uri": "https://geo-media.beatport.com/image_size/500x500/e0517b37-32d5-4f7b-988c-29cf05e5316f.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/e0517b37-32d5-4f7b-988c-29cf05e5316f.jpg"
        },
        "slug": "strangelove-recordings"
      },
      "slug": "shadethrower-ep"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/7c1beb20-23be-4ffd-a253-a8abd6f7410e.LOFI.mp3",
    "sample_start_ms": 118451,
    "sample_end_ms": 238451,
    "slug": "shadethrower",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/15448990/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 126,
    "catalog_number": "VBCH267",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2021-03-16T04:50:04-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 15062969,
    "image": {
      "id": 28159174,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/60ed98eb-f24e-4bf9-9bd7-8ef986189be1.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/60ed98eb-f24e-4bf9-9bd7-8ef986189be1.png"
    },
    "is_available_for_streaming": true,
    "isrc": "AUVC02136711",
    "key": {
      "camelot_number": 11,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 34,
      "is_sharp": false,
      "is_flat": true,
      "letter": "G",
      "name": "Gb Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/34/"
    },
    "label_track_identifier": "3742250991",
    "length": "6:17",
    "length_ms": 377279,
    "mix_name": "Original Mix",
    "name": "Lose Yourself",
    "new_release_date": "2021-04-02",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2021-04-02",
    "release": {
      "id": 3327777,
      "name": "Lose Yourself",
      "image": {
        "id": 28159068,
        "uri": "/images/products/lose-yourself.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/e50aec77-52a1-4628-82ec-a4b3c7d7c24b.jpg"
      },
      "label": {
        "id": 17657,
        "name": "Be Rich Records",
        "image": {
          "id": 13486491,
          "uri": "https://geo-media.beatport.com/image_size/500x500/b849f609-b8f9-4de4-b839-323c33655c16.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/b849f609-b8f9-4de4-b839-323c33655c16.jpg"
        },
        "slug": "be-rich-records"
      },
      "slug": "lose-yourself"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/60ed98eb-f24e-4bf9-9bd7-8ef986189be1.LOFI.mp3",
    "sample_start_ms": 150912,
    "sample_end_ms": 270912,
    "slug": "lose-yourself",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/15062969/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 125,
    "catalog_number": "HOH112",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2021-01-22T05:42:44-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 14824817,
    "image": {
      "id": 27657602,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/64f0356a-968b-41c2-83e1-d62c06c8b785.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/64f0356a-968b-41c2-83e1-d62c06c8b785.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU2106446",
    "key": {
      "camelot_number": 11,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 23,
      "is_sharp": false,
      "is_flat": false,
      "letter": "A",
      "name": "A Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/23/"
    },
    "label_track_identifier": "3941772",
    "length": "5:01",
    "length_ms": 301187,
    "mix_name": "Original Mix",
    "name": "Perc Monster",
    "new_release_date": "2021-02-26",
    "pre_order": false,
    "pre_order_date": "2021-02-12",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2021-02-26",
    "release": {
      "id": 3265519,
      "name": "A Rare Occurrence At The Warehouse",
      "image": {
        "id": 27657395,
        "uri": "/images/products/perc-monster.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/f7ea3a09-d4f1-456c-be0d-9a6d12b3cb01.jpg"
      },
      "label": {
        "id": 42127,
        "name": "House Of Hustle",
        "image": {
          "id": 22826430,
          "uri": "https://geo-media.beatport.com/image_size/500x500/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg"
        },
        "slug": "house-of-hustle"
      },
      "slug": "a-rare-occurrence-at-the-warehouse"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/64f0356a-968b-41c2-83e1-d62c06c8b785.LOFI.mp3",
    "sample_start_ms": 120504,
    "sample_end_ms": 240504,
    "slug": "perc-monster",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/14824817/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 123,
    "catalog_number": "HOH112",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2021-01-22T05:42:44-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 14824816,
    "image": {
      "id": 27657585,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/63ae6980-e60e-4494-a201-ab73e958a72d.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/63ae6980-e60e-4494-a201-ab73e958a72d.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU2106445",
    "key": {
      "camelot_number": 6,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 18,
      "is_sharp": false,
      "is_flat": true,
      "letter": "B",
      "name": "Bb Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/18/"
    },
    "label_track_identifier": "3941764",
    "length": "5:35",
    "length_ms": 335003,
    "mix_name": "Original Mix",
    "name": "Merecida",
    "new_release_date": "2021-02-26",
    "pre_order": false,
    "pre_order_date": "2021-02-12",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2021-02-26",
    "release": {
      "id": 3265519,
      "name": "A Rare Occurrence At The Warehouse",
      "image": {
        "id": 27657395,
        "uri": "/images/products/merecida.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/f7ea3a09-d4f1-456c-be0d-9a6d12b3cb01.jpg"
      },
      "label": {
        "id": 42127,
        "name": "House Of Hustle",
        "image": {
          "id": 22826430,
          "uri": "https://geo-media.beatport.com/image_size/500x500/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg"
        },
        "slug": "house-of-hustle"
      },
      "slug": "a-rare-occurrence-at-the-warehouse"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/63ae6980-e60e-4494-a201-ab73e958a72d.LOFI.mp3",
    "sample_start_ms": 134036,
    "sample_end_ms": 254036,
    "slug": "merecida",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/14824816/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      },
      {
        "id": 855373,
        "image": {
          "id": 5539565,
          "uri": "https://geo-media.beatport.com/image_size/590x404/0dc61986-bccf-49d4-8fad-6b147ea8f327.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/0dc61986-bccf-49d4-8fad-6b147ea8f327.jpg"
        },
        "name": "JC Stormz",
        "slug": "jc-stormz",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/855373/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 125,
    "catalog_number": "190295096786",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2020-10-20T19:20:06-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 14417383,
    "image": {
      "id": 26886841,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/b1ef9ecb-f121-4c6e-9bb2-0ecebc6fd81c.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/b1ef9ecb-f121-4c6e-9bb2-0ecebc6fd81c.png"
    },
    "is_available_for_streaming": true,
    "isrc": "NLZ542001847",
    "key": {
      "camelot_number": 3,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 3,
      "is_sharp": false,
      "is_flat": true,
      "letter": "B",
      "name": "Bb Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/3/"
    },
    "label_track_identifier": null,
    "length": "6:02",
    "length_ms": 362000,
    "mix_name": "Extended Mix",
    "name": "Clarkey (feat. JC Stormz)",
    "new_release_date": "2020-11-06",
    "pre_order": false,
    "pre_order_date": "2020-10-23",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2020-11-06",
    "release": {
      "id": 3167545,
      "name": "Cucamonga EP",
      "image": {
        "id": 26886814,
        "uri": "/images/products/clarkey-feat-jc-stormz.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/702e5704-2149-4d9b-9cd4-ec159fca89d4.jpg"
      },
      "label": {
        "id": 78355,
        "name": "Sink or Swim",
        "image": {
          "id": 21968953,
          "uri": "https://geo-media.beatport.com/image_size/500x500/1b69aee1-bb57-457b-8889-f79a531e99b5.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/1b69aee1-bb57-457b-8889-f79a531e99b5.jpg"
        },
        "slug": "sink-or-swim"
      },
      "slug": "cucamonga-ep"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/b1ef9ecb-f121-4c6e-9bb2-0ecebc6fd81c.LOFI.mp3",
    "sample_start_ms": 144831,
    "sample_end_ms": 264831,
    "slug": "clarkey-feat-jc-stormz",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/14417383/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 124,
    "catalog_number": "190295096786",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2020-10-20T19:20:06-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 14417379,
    "image": {
      "id": 26886837,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/8b1d56ca-b2b7-429a-9401-294fc3f5f476.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/8b1d56ca-b2b7-429a-9401-294fc3f5f476.png"
    },
    "is_available_for_streaming": true,
    "isrc": "NLZ542001845",
    "key": {
      "camelot_number": 7,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 19,
      "is_sharp": false,
      "is_flat": false,
      "letter": "F",
      "name": "F Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/19/"
    },
    "label_track_identifier": null,
    "length": "5:02",
    "length_ms": 302000,
    "mix_name": "Extended Mix",
    "name": "Cucamonga",
    "new_release_date": "2020-11-06",
    "pre_order": false,
    "pre_order_date": "2020-10-23",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2020-11-06",
    "release": {
      "id": 3167545,
      "name": "Cucamonga EP",
      "image": {
        "id": 26886814,
        "uri": "/images/products/cucamonga.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/702e5704-2149-4d9b-9cd4-ec159fca89d4.jpg"
      },
      "label": {
        "id": 78355,
        "name": "Sink or Swim",
        "image": {
          "id": 21968953,
          "uri": "https://geo-media.beatport.com/image_size/500x500/1b69aee1-bb57-457b-8889-f79a531e99b5.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/1b69aee1-bb57-457b-8889-f79a531e99b5.jpg"
        },
        "slug": "sink-or-swim"
      },
      "slug": "cucamonga-ep"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/8b1d56ca-b2b7-429a-9401-294fc3f5f476.LOFI.mp3",
    "sample_start_ms": 120828,
    "sample_end_ms": 240828,
    "slug": "cucamonga",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/14417379/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      },
      {
        "id": 855373,
        "image": {
          "id": 5539565,
          "uri": "https://geo-media.beatport.com/image_size/590x404/0dc61986-bccf-49d4-8fad-6b147ea8f327.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/0dc61986-bccf-49d4-8fad-6b147ea8f327.jpg"
        },
        "name": "JC Stormz",
        "slug": "jc-stormz",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/855373/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 126,
    "catalog_number": "TOOL96601Z",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2020-09-07T15:39:42-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 14173096,
    "image": {
      "id": 27629195,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/b3110c04-3430-4b4f-8b05-54f7a7d0c855.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/b3110c04-3430-4b4f-8b05-54f7a7d0c855.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBJAJ2001729",
    "key": {
      "camelot_number": 3,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 3,
      "is_sharp": false,
      "is_flat": true,
      "letter": "B",
      "name": "Bb Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/3/"
    },
    "label_track_identifier": "2877149090",
    "length": "6:21",
    "length_ms": 381761,
    "mix_name": "Extended Mix",
    "name": "Drum Machine feat. JC Stormz",
    "new_release_date": "2020-09-25",
    "pre_order": false,
    "pre_order_date": "2020-09-11",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2020-09-25",
    "release": {
      "id": 3112710,
      "name": "Toolroom House Party Vol. 3",
      "image": {
        "id": 27629084,
        "uri": "/images/products/drum-machine-feat-jc-stormz.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/c0bf649c-38dd-43be-b31b-8d1ea0137b40.jpg"
      },
      "label": {
        "id": 495,
        "name": "Toolroom",
        "image": {
          "id": 11530700,
          "uri": "https://geo-media.beatport.com/image_size/500x500/41217a0b-92e4-4fbd-9223-d513c62dd411.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/41217a0b-92e4-4fbd-9223-d513c62dd411.jpg"
        },
        "slug": "toolroom"
      },
      "slug": "toolroom-house-party-vol-3"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/b3110c04-3430-4b4f-8b05-54f7a7d0c855.LOFI.mp3",
    "sample_start_ms": 152740,
    "sample_end_ms": 272740,
    "slug": "drum-machine-feat-jc-stormz",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/14173096/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 125,
    "catalog_number": "STRANGE04601Z",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2020-07-09T17:54:03-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 13926299,
    "image": {
      "id": 26328831,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/f9b8d29d-f824-4572-a333-bfe94e741f1f.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/f9b8d29d-f824-4572-a333-bfe94e741f1f.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBJAJ2001730",
    "key": {
      "camelot_number": 11,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 11,
      "is_sharp": true,
      "is_flat": false,
      "letter": "F",
      "name": "F# Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/11/"
    },
    "label_track_identifier": "2877149283",
    "length": "6:09",
    "length_ms": 369828,
    "mix_name": "Extended Mix",
    "name": "Systematik",
    "new_release_date": "2020-07-31",
    "pre_order": false,
    "pre_order_date": "2020-07-17",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2020-07-31",
    "release": {
      "id": 3049981,
      "name": "Drum Machine EP",
      "image": {
        "id": 26328745,
        "uri": "/images/products/systematik.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/820e0c97-1976-4224-9f12-bdeeae4d5018.jpg"
      },
      "label": {
        "id": 61960,
        "name": "Strangelove Recordings",
        "image": {
          "id": 15416968,
          "uri": "https://geo-media.beatport.com/image_size/500x500/e0517b37-32d5-4f7b-988c-29cf05e5316f.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/e0517b37-32d5-4f7b-988c-29cf05e5316f.jpg"
        },
        "slug": "strangelove-recordings"
      },
      "slug": "drum-machine-ep"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/d369e235-a923-4351-90a3-c7473e401602.LOFI.mp3",
    "sample_start_ms": 147931,
    "sample_end_ms": 267931,
    "slug": "systematik",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/13926299/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      },
      {
        "id": 855373,
        "image": {
          "id": 5539565,
          "uri": "https://geo-media.beatport.com/image_size/590x404/0dc61986-bccf-49d4-8fad-6b147ea8f327.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/0dc61986-bccf-49d4-8fad-6b147ea8f327.jpg"
        },
        "name": "JC Stormz",
        "slug": "jc-stormz",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/855373/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 126,
    "catalog_number": "STRANGE04601Z",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2020-07-09T17:54:03-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 13926298,
    "image": {
      "id": 26328858,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/c4e942ef-a56d-499f-a342-eacf13900353.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/c4e942ef-a56d-499f-a342-eacf13900353.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBJAJ2001729",
    "key": {
      "camelot_number": 3,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 26,
      "is_sharp": true,
      "is_flat": false,
      "letter": "A",
      "name": "A# Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/26/"
    },
    "label_track_identifier": "2877149090",
    "length": "6:21",
    "length_ms": 381761,
    "mix_name": "Extended Mix",
    "name": "Drum Machine feat. JC Stormz",
    "new_release_date": "2020-07-31",
    "pre_order": false,
    "pre_order_date": "2020-07-17",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2020-07-31",
    "release": {
      "id": 3049981,
      "name": "Drum Machine EP",
      "image": {
        "id": 26328745,
        "uri": "/images/products/drum-machine-feat-jc-stormz.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/820e0c97-1976-4224-9f12-bdeeae4d5018.jpg"
      },
      "label": {
        "id": 61960,
        "name": "Strangelove Recordings",
        "image": {
          "id": 15416968,
          "uri": "https://geo-media.beatport.com/image_size/500x500/e0517b37-32d5-4f7b-988c-29cf05e5316f.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/e0517b37-32d5-4f7b-988c-29cf05e5316f.jpg"
        },
        "slug": "strangelove-recordings"
      },
      "slug": "drum-machine-ep"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/3babeed3-8f18-4a95-b7e8-5d014327853a.LOFI.mp3",
    "sample_start_ms": 152704,
    "sample_end_ms": 272704,
    "slug": "drum-machine-feat-jc-stormz",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/13926298/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 125,
    "catalog_number": "GDEEP011",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2020-07-02T15:47:14-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 91,
      "name": "Bass House",
      "slug": "bass-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/91/"
    },
    "id": 13887065,
    "image": {
      "id": 25916130,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/5eadad33-965b-4eb0-861b-f88026a1448f.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/5eadad33-965b-4eb0-861b-f88026a1448f.png"
    },
    "is_available_for_streaming": true,
    "isrc": "CH6541915378",
    "key": {
      "camelot_number": 7,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 19,
      "is_sharp": false,
      "is_flat": false,
      "letter": "F",
      "name": "F Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/19/"
    },
    "label_track_identifier": "A10374Z0000097F95S",
    "length": "3:43",
    "length_ms": 223125,
    "mix_name": "Original Mix",
    "name": "Friction",
    "new_release_date": "2020-07-29",
    "pre_order": false,
    "pre_order_date": "2020-07-13",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2020-07-29",
    "release": {
      "id": 3039901,
      "name": "This Is Gold Deeper",
      "image": {
        "id": 25908740,
        "uri": "/images/products/friction.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/f7c103df-4f7a-455c-a6fb-6f625b3083f9.jpg"
      },
      "label": {
        "id": 76828,
        "name": "Gold Deeper",
        "image": {
          "id": 21494454,
          "uri": "https://geo-media.beatport.com/image_size/500x500/1668b1ef-dedf-40db-895a-0389a7616e26.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/1668b1ef-dedf-40db-895a-0389a7616e26.jpg"
        },
        "slug": "gold-deeper"
      },
      "slug": "this-is-gold-deeper"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/04d7015c-5d74-4d89-901b-f15742936ab8.LOFI.mp3",
    "sample_start_ms": 89250,
    "sample_end_ms": 209250,
    "slug": "friction",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/13887065/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 125,
    "catalog_number": "MDR9750",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2020-06-03T15:48:49-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 13727555,
    "image": {
      "id": 25861604,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/eafab07f-321c-4e2e-baaa-1bb654435b0b.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/eafab07f-321c-4e2e-baaa-1bb654435b0b.png"
    },
    "is_available_for_streaming": true,
    "isrc": "QZ5FN2022318",
    "key": {
      "camelot_number": 8,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 8,
      "is_sharp": false,
      "is_flat": false,
      "letter": "A",
      "name": "A Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/8/"
    },
    "label_track_identifier": "1943754",
    "length": "5:34",
    "length_ms": 334000,
    "mix_name": "Original Mix",
    "name": "Wrong For Dat",
    "new_release_date": "2020-06-26",
    "pre_order": false,
    "pre_order_date": "2020-06-22",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2020-06-26",
    "release": {
      "id": 2997943,
      "name": "Moody Summer Nights",
      "image": {
        "id": 25861514,
        "uri": "/images/products/wrong-for-dat.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/c9215b1f-bbfe-4bb4-a82c-a367f672c0ff.jpg"
      },
      "label": {
        "id": 316,
        "name": "Moody Recordings",
        "image": {
          "id": 12188620,
          "uri": "https://geo-media.beatport.com/image_size/500x500/ab3efcd2-c5bd-448b-ab4d-e607f3387ca9.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/ab3efcd2-c5bd-448b-ab4d-e607f3387ca9.jpg"
        },
        "slug": "moody-recordings"
      },
      "slug": "moody-summer-nights"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/409f42aa-c3b7-444e-8b99-935a40532ba9.LOFI.mp3",
    "sample_start_ms": 133600,
    "sample_end_ms": 253600,
    "slug": "wrong-for-dat",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/13727555/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 123,
    "catalog_number": "GDEEP009",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2020-05-07T15:03:12-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 5,
      "name": "House",
      "slug": "house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/5/"
    },
    "id": 13583285,
    "image": {
      "id": 25310824,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/0a708961-c202-48f0-827e-370d3a1839ba.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/0a708961-c202-48f0-827e-370d3a1839ba.png"
    },
    "is_available_for_streaming": true,
    "isrc": "CH6542055903",
    "key": {
      "camelot_number": 3,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 26,
      "is_sharp": true,
      "is_flat": false,
      "letter": "A",
      "name": "A# Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/26/"
    },
    "label_track_identifier": "A10374Z000008PB1S8",
    "length": "5:04",
    "length_ms": 304268,
    "mix_name": "Original Mix",
    "name": "Levitation Device",
    "new_release_date": "2020-06-03",
    "pre_order": false,
    "pre_order_date": "2020-05-18",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2020-06-03",
    "release": {
      "id": 2960586,
      "name": "Levitation Device",
      "image": {
        "id": 25310695,
        "uri": "/images/products/levitation-device.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/73939eec-d20f-4cb8-8cf6-d79c5bfe1d9c.jpg"
      },
      "label": {
        "id": 76828,
        "name": "Gold Deeper",
        "image": {
          "id": 21494454,
          "uri": "https://geo-media.beatport.com/image_size/500x500/1668b1ef-dedf-40db-895a-0389a7616e26.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/1668b1ef-dedf-40db-895a-0389a7616e26.jpg"
        },
        "slug": "gold-deeper"
      },
      "slug": "levitation-device"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/caea9238-0924-4036-84e8-ce807491427a.LOFI.mp3",
    "sample_start_ms": 121707,
    "sample_end_ms": 241707,
    "slug": "levitation-device",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/13583285/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 361559,
        "image": {
          "id": 11237794,
          "uri": "https://geo-media.beatport.com/image_size/590x404/33724254-d296-4866-a414-1130f264a5d3.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/33724254-d296-4866-a414-1130f264a5d3.jpg"
        },
        "name": "Friendless",
        "slug": "friendless",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/361559/"
      },
      {
        "id": 436817,
        "image": {
          "id": 5539565,
          "uri": "https://geo-media.beatport.com/image_size/590x404/0dc61986-bccf-49d4-8fad-6b147ea8f327.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/0dc61986-bccf-49d4-8fad-6b147ea8f327.jpg"
        },
        "name": "Stereo Jones",
        "slug": "stereo-jones",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/436817/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 122,
    "catalog_number": "VBCH241R",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2020-02-04T16:02:21-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 13136615,
    "image": {
      "id": 36571379,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/44c54286-bbd4-4def-b3e2-69b655160262.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/44c54286-bbd4-4def-b3e2-69b655160262.png"
    },
    "is_available_for_streaming": true,
    "isrc": "AUVC02034131",
    "key": {
      "camelot_number": 11,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 34,
      "is_sharp": false,
      "is_flat": true,
      "letter": "G",
      "name": "Gb Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/34/"
    },
    "label_track_identifier": "2393569751",
    "length": "5:26",
    "length_ms": 326400,
    "mix_name": "Mike McFly Remix",
    "name": "Bomp",
    "new_release_date": "2020-02-21",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2020-02-21",
    "release": {
      "id": 2849733,
      "name": "Bomp - Remixes",
      "image": {
        "id": 36571294,
        "uri": "/images/products/bomp.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/f99429dd-1acf-4e95-b1b3-9f03e8a9607c.jpg"
      },
      "label": {
        "id": 17657,
        "name": "Be Rich Records",
        "image": {
          "id": 13486491,
          "uri": "https://geo-media.beatport.com/image_size/500x500/b849f609-b8f9-4de4-b839-323c33655c16.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/b849f609-b8f9-4de4-b839-323c33655c16.jpg"
        },
        "slug": "be-rich-records"
      },
      "slug": "bomp-remixes"
    },
    "remixers": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/44c54286-bbd4-4def-b3e2-69b655160262.LOFI.mp3",
    "sample_start_ms": 130560,
    "sample_end_ms": 250560,
    "slug": "bomp",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/13136615/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 123,
    "catalog_number": "PSYCHD085",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2020-01-06T16:53:51-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 91,
      "name": "Bass House",
      "slug": "bass-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/91/"
    },
    "id": 12999864,
    "image": {
      "id": 23865404,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/ce5813b3-bfc8-46d8-95eb-0be51168fe39.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/ce5813b3-bfc8-46d8-95eb-0be51168fe39.png"
    },
    "is_available_for_streaming": true,
    "isrc": "QM4652000002",
    "key": {
      "camelot_number": 8,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 8,
      "is_sharp": false,
      "is_flat": false,
      "letter": "A",
      "name": "A Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/8/"
    },
    "label_track_identifier": "2536723",
    "length": "5:55",
    "length_ms": 355121,
    "mix_name": "Original Mix",
    "name": "Chappy Weapon",
    "new_release_date": "2020-02-07",
    "pre_order": false,
    "pre_order_date": "2020-01-24",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2020-02-07",
    "release": {
      "id": 2816911,
      "name": "Captain Kirk",
      "image": {
        "id": 23864563,
        "uri": "/images/products/chappy-weapon.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/5af6bec7-7828-41a1-8b85-f2d03b6801f5.jpg"
      },
      "label": {
        "id": 49709,
        "name": "Psycho Disco!",
        "image": {
          "id": 11722304,
          "uri": "https://geo-media.beatport.com/image_size/500x500/a0829a72-ad1b-4dbb-bb53-1a862be56f81.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/a0829a72-ad1b-4dbb-bb53-1a862be56f81.jpg"
        },
        "slug": "psycho-disco"
      },
      "slug": "captain-kirk"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/4759e801-d81a-4d5c-b6cc-e5b2b9067b5d.LOFI.mp3",
    "sample_start_ms": 142048,
    "sample_end_ms": 262048,
    "slug": "chappy-weapon",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/12999864/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 124,
    "catalog_number": "PSYCHD085",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2020-01-06T16:53:51-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 91,
      "name": "Bass House",
      "slug": "bass-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/91/"
    },
    "id": 12999863,
    "image": {
      "id": 23865401,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/c295cde2-22d5-4143-bce3-56fda530695d.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/c295cde2-22d5-4143-bce3-56fda530695d.png"
    },
    "is_available_for_streaming": true,
    "isrc": "QM4652000001",
    "key": {
      "camelot_number": 11,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 23,
      "is_sharp": false,
      "is_flat": false,
      "letter": "A",
      "name": "A Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/23/"
    },
    "label_track_identifier": "2536722",
    "length": "6:17",
    "length_ms": 377280,
    "mix_name": "Original Mix",
    "name": "Captain Kirk",
    "new_release_date": "2020-02-07",
    "pre_order": false,
    "pre_order_date": "2020-01-24",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2020-02-07",
    "release": {
      "id": 2816911,
      "name": "Captain Kirk",
      "image": {
        "id": 23864563,
        "uri": "/images/products/captain-kirk.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/5af6bec7-7828-41a1-8b85-f2d03b6801f5.jpg"
      },
      "label": {
        "id": 49709,
        "name": "Psycho Disco!",
        "image": {
          "id": 11722304,
          "uri": "https://geo-media.beatport.com/image_size/500x500/a0829a72-ad1b-4dbb-bb53-1a862be56f81.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/a0829a72-ad1b-4dbb-bb53-1a862be56f81.jpg"
        },
        "slug": "psycho-disco"
      },
      "slug": "captain-kirk"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/94221218-aca2-45f3-9820-370dc010272b.LOFI.mp3",
    "sample_start_ms": 150912,
    "sample_end_ms": 270912,
    "slug": "captain-kirk",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/12999863/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 124,
    "catalog_number": "HOH093",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2020-01-01T18:13:24-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 12983876,
    "image": {
      "id": 24004657,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/2b00657e-2f43-4ebb-9013-bdb9d9192542.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/2b00657e-2f43-4ebb-9013-bdb9d9192542.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBLV61930258",
    "key": {
      "camelot_number": 6,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 25,
      "is_sharp": true,
      "is_flat": false,
      "letter": "A",
      "name": "A# Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/25/"
    },
    "label_track_identifier": "3313134",
    "length": "5:13",
    "length_ms": 313770,
    "mix_name": "Original Mix",
    "name": "Trigger Happy",
    "new_release_date": "2020-01-24",
    "pre_order": false,
    "pre_order_date": "2020-01-10",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2020-01-24",
    "release": {
      "id": 2813141,
      "name": "Wrap Party EP",
      "image": {
        "id": 23997123,
        "uri": "/images/products/trigger-happy.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/98cdb3ef-6801-4df4-a5ac-299f02ebbdc7.jpg"
      },
      "label": {
        "id": 42127,
        "name": "House Of Hustle",
        "image": {
          "id": 22826430,
          "uri": "https://geo-media.beatport.com/image_size/500x500/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg"
        },
        "slug": "house-of-hustle"
      },
      "slug": "wrap-party-ep"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/4c86b8d4-42e0-4738-9355-346422ad7004.LOFI.mp3",
    "sample_start_ms": 125508,
    "sample_end_ms": 245508,
    "slug": "trigger-happy",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/12983876/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 124,
    "catalog_number": "HOH093",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2020-01-01T18:13:25-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 12983877,
    "image": {
      "id": 24004606,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/47fbde47-8f63-4dfc-a0f9-ae67f212223c.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/47fbde47-8f63-4dfc-a0f9-ae67f212223c.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBLV61930259",
    "key": {
      "camelot_number": 3,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 26,
      "is_sharp": true,
      "is_flat": false,
      "letter": "A",
      "name": "A# Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/26/"
    },
    "label_track_identifier": "3313133",
    "length": "4:59",
    "length_ms": 299016,
    "mix_name": "Original Mix",
    "name": "Wrap Party",
    "new_release_date": "2020-01-24",
    "pre_order": false,
    "pre_order_date": "2020-01-10",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2020-01-24",
    "release": {
      "id": 2813141,
      "name": "Wrap Party EP",
      "image": {
        "id": 23997123,
        "uri": "/images/products/wrap-party.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/98cdb3ef-6801-4df4-a5ac-299f02ebbdc7.jpg"
      },
      "label": {
        "id": 42127,
        "name": "House Of Hustle",
        "image": {
          "id": 22826430,
          "uri": "https://geo-media.beatport.com/image_size/500x500/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg"
        },
        "slug": "house-of-hustle"
      },
      "slug": "wrap-party-ep"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/67f2f1b7-e065-44ab-972f-39f85e0c4c74.LOFI.mp3",
    "sample_start_ms": 119606,
    "sample_end_ms": 239606,
    "slug": "wrap-party",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/12983877/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 123,
    "catalog_number": "PDM116",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2019-11-12T18:09:55-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 12793672,
    "image": {
      "id": 38208735,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/86c298cc-2dfa-4cd6-b2ff-afdf28001949.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/86c298cc-2dfa-4cd6-b2ff-afdf28001949.png"
    },
    "is_available_for_streaming": true,
    "isrc": "CA5KR1911496",
    "key": {
      "camelot_number": 12,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 12,
      "is_sharp": false,
      "is_flat": true,
      "letter": "D",
      "name": "Db Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/12/"
    },
    "label_track_identifier": null,
    "length": "5:33",
    "length_ms": 333967,
    "mix_name": "Original Mix",
    "name": "909 Problems",
    "new_release_date": "2019-12-20",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2019-12-20",
    "release": {
      "id": 2772282,
      "name": "Spinning Out 2019",
      "image": {
        "id": 38159399,
        "uri": "/images/products/909-problems.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/ce154388-80ee-43df-8d40-fad81273e6d7.jpg"
      },
      "label": {
        "id": 23698,
        "name": "Perfect Driver Music",
        "image": {
          "id": 37059136,
          "uri": "https://geo-media.beatport.com/image_size/500x500/5d7e1a8b-ae01-4a16-a3ce-c7551eaee728.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/5d7e1a8b-ae01-4a16-a3ce-c7551eaee728.jpg"
        },
        "slug": "perfect-driver-music"
      },
      "slug": "spinning-out-2019"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/86c298cc-2dfa-4cd6-b2ff-afdf28001949.LOFI.mp3",
    "sample_start_ms": 133587,
    "sample_end_ms": 253587,
    "slug": "909-problems",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/12793672/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 124,
    "catalog_number": "TAB050",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2019-09-04T18:22:51-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 12513448,
    "image": {
      "id": 23027077,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/7b5f7846-aeea-43ea-b064-8295561678b2.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/7b5f7846-aeea-43ea-b064-8295561678b2.png"
    },
    "is_available_for_streaming": true,
    "isrc": "DEY471982409",
    "key": {
      "camelot_number": 8,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 8,
      "is_sharp": false,
      "is_flat": false,
      "letter": "A",
      "name": "A Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/8/"
    },
    "label_track_identifier": "4251490762695DEY471982409",
    "length": "5:30",
    "length_ms": 330770,
    "mix_name": "Original Mix",
    "name": "Weissdom",
    "new_release_date": "2019-10-04",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2019-10-04",
    "release": {
      "id": 2706154,
      "name": "More Celebrations",
      "image": {
        "id": 23027001,
        "uri": "/images/products/weissdom.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/236a89a8-f8a7-4b04-b44c-48dfb5ee2d30.jpg"
      },
      "label": {
        "id": 46486,
        "name": "This Ain't Bristol",
        "image": {
          "id": 10904394,
          "uri": "https://geo-media.beatport.com/image_size/500x500/5ccdde2f-c511-4f08-88b2-bd02d4ddae93.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/5ccdde2f-c511-4f08-88b2-bd02d4ddae93.jpg"
        },
        "slug": "this-aint-bristol"
      },
      "slug": "more-celebrations"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/f3c8dae7-fa9f-45f7-8a90-ccd9b550b052.LOFI.mp3",
    "sample_start_ms": 132308,
    "sample_end_ms": 252308,
    "slug": "weissdom",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/12513448/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 125,
    "catalog_number": "MRR050",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2019-08-23T13:13:26-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 12476302,
    "image": {
      "id": 22715459,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/21e88ed0-c413-411e-beb7-623465fc23d6.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/21e88ed0-c413-411e-beb7-623465fc23d6.png"
    },
    "is_available_for_streaming": true,
    "isrc": "AUVAE1900215",
    "key": {
      "camelot_number": 11,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 23,
      "is_sharp": false,
      "is_flat": false,
      "letter": "A",
      "name": "A Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/23/"
    },
    "label_track_identifier": "",
    "length": "5:50",
    "length_ms": 350178,
    "mix_name": "Original Mix",
    "name": "Kapowski",
    "new_release_date": "2019-09-13",
    "pre_order": false,
    "pre_order_date": "2019-08-30",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2019-09-13",
    "release": {
      "id": 2697288,
      "name": "Club Cuts 2",
      "image": {
        "id": 22715415,
        "uri": "/images/products/kapowski.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/8c90fd79-6719-406e-a754-699afece7408.jpg"
      },
      "label": {
        "id": 44904,
        "name": "Medium Rare Recordings",
        "image": {
          "id": 37933681,
          "uri": "https://geo-media.beatport.com/image_size/500x500/749369cf-a503-4f7f-8ac6-73e2897885b9.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/749369cf-a503-4f7f-8ac6-73e2897885b9.jpg"
        },
        "slug": "medium-rare-recordings"
      },
      "slug": "club-cuts-2"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/559d6a23-e594-42ce-bebd-79470e7c7040.LOFI.mp3",
    "sample_start_ms": 140071,
    "sample_end_ms": 260071,
    "slug": "kapowski",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/12476302/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 123,
    "catalog_number": "TOOL81301Z",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2019-07-12T13:50:14-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 12317479,
    "image": {
      "id": 22422338,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/f519d421-beb6-432b-bbff-2bf873cdbfd2.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/f519d421-beb6-432b-bbff-2bf873cdbfd2.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBJAJ1901576",
    "key": {
      "camelot_number": 10,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 10,
      "is_sharp": false,
      "is_flat": false,
      "letter": "B",
      "name": "B Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/10/"
    },
    "label_track_identifier": "1943444772",
    "length": "5:51",
    "length_ms": 351750,
    "mix_name": "Extended Mix",
    "name": "Felix Cat",
    "new_release_date": "2019-08-02",
    "pre_order": false,
    "pre_order_date": "2019-07-19",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2019-08-02",
    "release": {
      "id": 2658282,
      "name": "Toolroom Ibiza 2019, Vol. 2",
      "image": {
        "id": 22420757,
        "uri": "/images/products/felix-cat.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/3cd4d099-5091-4bf6-87fe-5d911e62ece3.jpg"
      },
      "label": {
        "id": 495,
        "name": "Toolroom",
        "image": {
          "id": 11530700,
          "uri": "https://geo-media.beatport.com/image_size/500x500/41217a0b-92e4-4fbd-9223-d513c62dd411.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/41217a0b-92e4-4fbd-9223-d513c62dd411.jpg"
        },
        "slug": "toolroom"
      },
      "slug": "toolroom-ibiza-2019-vol-2"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/f9258fa0-7807-45a5-9dac-683505201cfe.LOFI.mp3",
    "sample_start_ms": 140700,
    "sample_end_ms": 260700,
    "slug": "felix-cat",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/12317479/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 123,
    "catalog_number": "STRANGE02601Z",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2019-06-10T19:01:20-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 12147302,
    "image": {
      "id": 22134155,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/cb174575-797d-43b3-9aad-29646fdb7b87.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/cb174575-797d-43b3-9aad-29646fdb7b87.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBJAJ1901412",
    "key": {
      "camelot_number": 7,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 19,
      "is_sharp": false,
      "is_flat": false,
      "letter": "F",
      "name": "F Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/19/"
    },
    "label_track_identifier": "1898896134",
    "length": "5:32",
    "length_ms": 332250,
    "mix_name": "Extended Mix",
    "name": "Culo Clap",
    "new_release_date": "2019-06-28",
    "pre_order": false,
    "pre_order_date": "2019-06-14",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2019-06-28",
    "release": {
      "id": 2623432,
      "name": "Culo Clap EP",
      "image": {
        "id": 22133848,
        "uri": "/images/products/culo-clap.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/64f1cad5-a853-4cb9-8cfa-55552bdf62ec.jpg"
      },
      "label": {
        "id": 61960,
        "name": "Strangelove Recordings",
        "image": {
          "id": 15416968,
          "uri": "https://geo-media.beatport.com/image_size/500x500/e0517b37-32d5-4f7b-988c-29cf05e5316f.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/e0517b37-32d5-4f7b-988c-29cf05e5316f.jpg"
        },
        "slug": "strangelove-recordings"
      },
      "slug": "culo-clap-ep"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/8a892e69-44c7-45a5-806f-ad57ad6131db.LOFI.mp3",
    "sample_start_ms": 132900,
    "sample_end_ms": 252900,
    "slug": "culo-clap",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/12147302/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 124,
    "catalog_number": "STRANGE02601Z",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2019-06-10T19:01:20-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 12147301,
    "image": {
      "id": 22134135,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/be58855d-41ee-432f-8f5c-5ec621af9b81.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/be58855d-41ee-432f-8f5c-5ec621af9b81.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBJAJ1901411",
    "key": {
      "camelot_number": 12,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 28,
      "is_sharp": true,
      "is_flat": false,
      "letter": "C",
      "name": "C# Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/28/"
    },
    "label_track_identifier": "1898896071",
    "length": "5:31",
    "length_ms": 331500,
    "mix_name": "Extended Mix",
    "name": "Oo Ookay",
    "new_release_date": "2019-06-28",
    "pre_order": false,
    "pre_order_date": "2019-06-14",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2019-06-28",
    "release": {
      "id": 2623432,
      "name": "Culo Clap EP",
      "image": {
        "id": 22133848,
        "uri": "/images/products/oo-ookay.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/64f1cad5-a853-4cb9-8cfa-55552bdf62ec.jpg"
      },
      "label": {
        "id": 61960,
        "name": "Strangelove Recordings",
        "image": {
          "id": 15416968,
          "uri": "https://geo-media.beatport.com/image_size/500x500/e0517b37-32d5-4f7b-988c-29cf05e5316f.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/e0517b37-32d5-4f7b-988c-29cf05e5316f.jpg"
        },
        "slug": "strangelove-recordings"
      },
      "slug": "culo-clap-ep"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/76807230-91f7-4f7c-9c2e-828d38fdbc49.LOFI.mp3",
    "sample_start_ms": 132600,
    "sample_end_ms": 252600,
    "slug": "oo-ookay",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/12147301/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 123,
    "catalog_number": "4061798989072",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2019-06-04T11:29:09-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 5,
      "name": "House",
      "slug": "house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/5/"
    },
    "id": 12074936,
    "image": {
      "id": 22041938,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/2b7f3ed9-47dd-4860-b933-41db9de8ae46.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/2b7f3ed9-47dd-4860-b933-41db9de8ae46.png"
    },
    "is_available_for_streaming": true,
    "isrc": "CH6541990905",
    "key": {
      "camelot_number": 3,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 26,
      "is_sharp": true,
      "is_flat": false,
      "letter": "A",
      "name": "A# Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/26/"
    },
    "label_track_identifier": "A10374Z0000066PMYE",
    "length": "5:16",
    "length_ms": 316172,
    "mix_name": "Original Mix",
    "name": "Drummer Boiii",
    "new_release_date": "2019-06-04",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2019-06-04",
    "release": {
      "id": 2614771,
      "name": "Boiii EP",
      "image": {
        "id": 22041641,
        "uri": "/images/products/drummer-boiii.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/7b2da546-78f1-4569-856a-6f3945d34bf7.jpg"
      },
      "label": {
        "id": 72893,
        "name": "noir sur blanc records",
        "image": {
          "id": 20098576,
          "uri": "https://geo-media.beatport.com/image_size/500x500/3c47f08d-3598-4099-815c-b90abf455db9.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/3c47f08d-3598-4099-815c-b90abf455db9.jpg"
        },
        "slug": "noir-sur-blanc-records"
      },
      "slug": "boiii-ep"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/b83fb98b-6384-4949-a9ea-f2a8201de31e.LOFI.mp3",
    "sample_start_ms": 126468,
    "sample_end_ms": 246468,
    "slug": "drummer-boiii",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/12074936/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 124,
    "catalog_number": "4061798989072",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2019-06-04T11:29:09-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 5,
      "name": "House",
      "slug": "house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/5/"
    },
    "id": 12074938,
    "image": {
      "id": 22041868,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/d29cb650-bb40-4eae-a7f3-e059a845b0ee.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/d29cb650-bb40-4eae-a7f3-e059a845b0ee.png"
    },
    "is_available_for_streaming": true,
    "isrc": "CH6541990906",
    "key": {
      "camelot_number": 8,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 20,
      "is_sharp": false,
      "is_flat": false,
      "letter": "C",
      "name": "C Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/20/"
    },
    "label_track_identifier": "A10374Z0000066PMZC",
    "length": "4:58",
    "length_ms": 298488,
    "mix_name": "Original Mix",
    "name": "Hype Boiii",
    "new_release_date": "2019-06-04",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2019-06-04",
    "release": {
      "id": 2614771,
      "name": "Boiii EP",
      "image": {
        "id": 22041641,
        "uri": "/images/products/hype-boiii.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/7b2da546-78f1-4569-856a-6f3945d34bf7.jpg"
      },
      "label": {
        "id": 72893,
        "name": "noir sur blanc records",
        "image": {
          "id": 20098576,
          "uri": "https://geo-media.beatport.com/image_size/500x500/3c47f08d-3598-4099-815c-b90abf455db9.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/3c47f08d-3598-4099-815c-b90abf455db9.jpg"
        },
        "slug": "noir-sur-blanc-records"
      },
      "slug": "boiii-ep"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/404c07df-d2f9-4c3b-a9aa-5b981f8e723d.LOFI.mp3",
    "sample_start_ms": 119395,
    "sample_end_ms": 239395,
    "slug": "hype-boiii",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/12074938/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 122,
    "catalog_number": "TAB046",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2019-03-28T11:47:52-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 11804832,
    "image": {
      "id": 21620117,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/f2271c4c-334a-4eab-94e2-3849d2bfd27c.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/f2271c4c-334a-4eab-94e2-3849d2bfd27c.png"
    },
    "is_available_for_streaming": true,
    "isrc": "DEY471980555",
    "key": {
      "camelot_number": 12,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 24,
      "is_sharp": false,
      "is_flat": false,
      "letter": "E",
      "name": "E Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/24/"
    },
    "label_track_identifier": "4251243816989DEY471980555",
    "length": "6:17",
    "length_ms": 377902,
    "mix_name": "Original Mix",
    "name": "Golly Galore",
    "new_release_date": "2019-04-26",
    "pre_order": false,
    "pre_order_date": "2019-04-12",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2019-04-26",
    "release": {
      "id": 2553913,
      "name": "Freak Boiii / Golly Galore",
      "image": {
        "id": 21617619,
        "uri": "/images/products/golly-galore.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4030a5e7-35de-40c7-b28d-5c0711d1f76f.jpg"
      },
      "label": {
        "id": 46486,
        "name": "This Ain't Bristol",
        "image": {
          "id": 10904394,
          "uri": "https://geo-media.beatport.com/image_size/500x500/5ccdde2f-c511-4f08-88b2-bd02d4ddae93.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/5ccdde2f-c511-4f08-88b2-bd02d4ddae93.jpg"
        },
        "slug": "this-aint-bristol"
      },
      "slug": "freak-boiii-golly-galore"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/827cd5df-ee78-46c7-a57e-8402ae38edbb.LOFI.mp3",
    "sample_start_ms": 151160,
    "sample_end_ms": 271160,
    "slug": "golly-galore",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/11804832/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": false,
    "bpm": 125,
    "catalog_number": "TAB046",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2019-03-28T11:47:52-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 11804831,
    "image": {
      "id": 21621288,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/efe175ab-1bf8-48f7-b2ef-ac2fe98d3b49.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/efe175ab-1bf8-48f7-b2ef-ac2fe98d3b49.png"
    },
    "is_available_for_streaming": true,
    "isrc": "DEY471980554",
    "key": {
      "camelot_number": 3,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 26,
      "is_sharp": true,
      "is_flat": false,
      "letter": "A",
      "name": "A# Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/26/"
    },
    "label_track_identifier": "4251243816989DEY471980554",
    "length": "5:36",
    "length_ms": 336774,
    "mix_name": "Original Mix",
    "name": "Freak Boiii",
    "new_release_date": "2019-04-26",
    "pre_order": false,
    "pre_order_date": "2019-04-12",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2019-04-26",
    "release": {
      "id": 2553913,
      "name": "Freak Boiii / Golly Galore",
      "image": {
        "id": 21617619,
        "uri": "/images/products/freak-boiii.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4030a5e7-35de-40c7-b28d-5c0711d1f76f.jpg"
      },
      "label": {
        "id": 46486,
        "name": "This Ain't Bristol",
        "image": {
          "id": 10904394,
          "uri": "https://geo-media.beatport.com/image_size/500x500/5ccdde2f-c511-4f08-88b2-bd02d4ddae93.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/5ccdde2f-c511-4f08-88b2-bd02d4ddae93.jpg"
        },
        "slug": "this-aint-bristol"
      },
      "slug": "freak-boiii-golly-galore"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/12b2ed0e-cadb-4595-af55-a77dc6fb4194.LOFI.mp3",
    "sample_start_ms": 134709,
    "sample_end_ms": 254709,
    "slug": "freak-boiii",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/11804831/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      },
      {
        "id": 639992,
        "image": {
          "id": 39940202,
          "uri": "https://geo-media.beatport.com/image_size/590x404/548499e6-de7d-4c51-9412-c90d78f2f166.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/548499e6-de7d-4c51-9412-c90d78f2f166.jpg"
        },
        "name": "Luke Andy",
        "slug": "luke-andy",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/639992/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 124,
    "catalog_number": "HOH078",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2019-02-21T13:16:43-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 11660529,
    "image": {
      "id": 21295602,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/62b5c441-7d54-4ce1-8136-514a6a97045f.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/62b5c441-7d54-4ce1-8136-514a6a97045f.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU1916723",
    "key": {
      "camelot_number": 6,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 25,
      "is_sharp": true,
      "is_flat": false,
      "letter": "A",
      "name": "A# Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/25/"
    },
    "label_track_identifier": "2831798",
    "length": "5:31",
    "length_ms": 331475,
    "mix_name": "Original Mix",
    "name": "Champagne Room",
    "new_release_date": "2019-03-25",
    "pre_order": false,
    "pre_order_date": "2019-03-11",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2019-03-25",
    "release": {
      "id": 2522587,
      "name": "Miami Hustle 2019",
      "image": {
        "id": 21294181,
        "uri": "/images/products/champagne-room.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/70c1226b-78fd-425d-b4e3-493f3e829ffa.jpg"
      },
      "label": {
        "id": 42127,
        "name": "House Of Hustle",
        "image": {
          "id": 22826430,
          "uri": "https://geo-media.beatport.com/image_size/500x500/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg"
        },
        "slug": "house-of-hustle"
      },
      "slug": "miami-hustle-2019"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/923dd434-29cc-4cc5-b1d0-21e41561cf10.LOFI.mp3",
    "sample_start_ms": 132590,
    "sample_end_ms": 252590,
    "slug": "champagne-room",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/11660529/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 123,
    "catalog_number": "PDM107",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2019-03-04T13:18:52-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 91,
      "name": "Bass House",
      "slug": "bass-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/91/"
    },
    "id": 11701123,
    "image": {
      "id": 38105888,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/27a83b97-7e2d-4973-9f71-e1dab1a68dd2.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/27a83b97-7e2d-4973-9f71-e1dab1a68dd2.png"
    },
    "is_available_for_streaming": true,
    "isrc": "CA5KR1911496",
    "key": {
      "camelot_number": 12,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 12,
      "is_sharp": false,
      "is_flat": true,
      "letter": "D",
      "name": "Db Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/12/"
    },
    "label_track_identifier": null,
    "length": "5:33",
    "length_ms": 333967,
    "mix_name": "Original Mix",
    "name": "909 Problems",
    "new_release_date": "2019-03-22",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2019-03-22",
    "release": {
      "id": 2531252,
      "name": "Gasoline, Vol. 2",
      "image": {
        "id": 38105600,
        "uri": "/images/products/909-problems.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/cdd5454d-0656-4564-a6b7-a8296eab37fd.jpg"
      },
      "label": {
        "id": 23698,
        "name": "Perfect Driver Music",
        "image": {
          "id": 37059136,
          "uri": "https://geo-media.beatport.com/image_size/500x500/5d7e1a8b-ae01-4a16-a3ce-c7551eaee728.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/5d7e1a8b-ae01-4a16-a3ce-c7551eaee728.jpg"
        },
        "slug": "perfect-driver-music"
      },
      "slug": "gasoline-vol-2"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/27a83b97-7e2d-4973-9f71-e1dab1a68dd2.LOFI.mp3",
    "sample_start_ms": 133587,
    "sample_end_ms": 253587,
    "slug": "909-problems",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/11701123/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 125,
    "catalog_number": "4061798208005",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2019-02-13T11:34:34-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 91,
      "name": "Bass House",
      "slug": "bass-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/91/"
    },
    "id": 11625723,
    "image": {
      "id": 21230374,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/1b38545c-eef0-4d6e-9025-c1f7d8242518.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/1b38545c-eef0-4d6e-9025-c1f7d8242518.png"
    },
    "is_available_for_streaming": true,
    "isrc": "CH6541915378",
    "key": {
      "camelot_number": 7,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 19,
      "is_sharp": false,
      "is_flat": false,
      "letter": "F",
      "name": "F Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/19/"
    },
    "label_track_identifier": "A10374Z000005SMVDM",
    "length": "3:43",
    "length_ms": 223125,
    "mix_name": "Original Mix",
    "name": "Friction",
    "new_release_date": "2019-02-18",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2019-02-18",
    "release": {
      "id": 2514539,
      "name": "Friction",
      "image": {
        "id": 21229088,
        "uri": "/images/products/friction.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/d3b3f159-63be-4be4-b23b-65ff50db140b.jpg"
      },
      "label": {
        "id": 63424,
        "name": "Gold Digger Records",
        "image": {
          "id": 15893096,
          "uri": "https://geo-media.beatport.com/image_size/500x500/e0fff538-e9c3-4f7a-b1ee-427941e78172.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/e0fff538-e9c3-4f7a-b1ee-427941e78172.jpg"
        },
        "slug": "gold-digger-records"
      },
      "slug": "friction"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/ab2ae035-16c6-4121-9db3-6afcceafd80d.LOFI.mp3",
    "sample_start_ms": 89250,
    "sample_end_ms": 209250,
    "slug": "friction",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/11625723/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 124,
    "catalog_number": "APXXL096",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2019-01-09T14:36:21-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 96,
      "name": "Mainstage",
      "slug": "mainstage",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/96/"
    },
    "id": 11480148,
    "image": {
      "id": 20964317,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/7750bffb-1ab7-4064-9d96-def245f7d8b0.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/7750bffb-1ab7-4064-9d96-def245f7d8b0.png"
    },
    "is_available_for_streaming": true,
    "isrc": "CA5KR1900459",
    "key": {
      "camelot_number": 6,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 25,
      "is_sharp": true,
      "is_flat": false,
      "letter": "A",
      "name": "A# Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/25/"
    },
    "label_track_identifier": "6072984120782637131",
    "length": "5:32",
    "length_ms": 332907,
    "mix_name": "Original Mix",
    "name": "Major Dork",
    "new_release_date": "2019-02-01",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2019-02-01",
    "release": {
      "id": 2482188,
      "name": "Flysawce Vol. 2",
      "image": {
        "id": 20964186,
        "uri": "/images/products/major-dork.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/04788ae6-1fe5-410a-be84-f2149ccbc2b8.jpg"
      },
      "label": {
        "id": 49595,
        "name": "Audiophile XXL",
        "image": {
          "id": 15208595,
          "uri": "https://geo-media.beatport.com/image_size/500x500/254510ef-481e-4f57-b7dc-51359600eb4f.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/254510ef-481e-4f57-b7dc-51359600eb4f.jpg"
        },
        "slug": "audiophile-xxl"
      },
      "slug": "flysawce-vol-2"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/0df4b5ca-081a-444a-a234-db0b36e4b36f.LOFI.mp3",
    "sample_start_ms": 133162,
    "sample_end_ms": 253162,
    "slug": "major-dork",
    "sub_genre": {
      "id": 247,
      "name": "Future House",
      "slug": "future-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/sub-genres/247/",
      "enabled": true
    },
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/11480148/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 125,
    "catalog_number": "APXXL096",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2019-01-09T14:36:21-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 96,
      "name": "Mainstage",
      "slug": "mainstage",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/96/"
    },
    "id": 11480149,
    "image": {
      "id": 20964335,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/76f28f62-4d13-45be-80d0-1321f6f48a15.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/76f28f62-4d13-45be-80d0-1321f6f48a15.png"
    },
    "is_available_for_streaming": true,
    "isrc": "CA5KR1900460",
    "key": {
      "camelot_number": 3,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 26,
      "is_sharp": true,
      "is_flat": false,
      "letter": "A",
      "name": "A# Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/26/"
    },
    "label_track_identifier": "6072984120782637132",
    "length": "5:18",
    "length_ms": 318688,
    "mix_name": "Original Mix",
    "name": "Moneymaker",
    "new_release_date": "2019-02-01",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2019-02-01",
    "release": {
      "id": 2482188,
      "name": "Flysawce Vol. 2",
      "image": {
        "id": 20964186,
        "uri": "/images/products/moneymaker.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/04788ae6-1fe5-410a-be84-f2149ccbc2b8.jpg"
      },
      "label": {
        "id": 49595,
        "name": "Audiophile XXL",
        "image": {
          "id": 15208595,
          "uri": "https://geo-media.beatport.com/image_size/500x500/254510ef-481e-4f57-b7dc-51359600eb4f.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/254510ef-481e-4f57-b7dc-51359600eb4f.jpg"
        },
        "slug": "audiophile-xxl"
      },
      "slug": "flysawce-vol-2"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/3afcb9e0-4462-448c-bda6-8ed4687d9453.LOFI.mp3",
    "sample_start_ms": 127475,
    "sample_end_ms": 247475,
    "slug": "moneymaker",
    "sub_genre": {
      "id": 247,
      "name": "Future House",
      "slug": "future-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/sub-genres/247/",
      "enabled": true
    },
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/11480149/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 125,
    "catalog_number": "MRR043",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2018-11-27T10:34:11-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 11322914,
    "image": {
      "id": 20786727,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/2327c7cc-5274-4460-8dea-8ff93f32fb37.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/2327c7cc-5274-4460-8dea-8ff93f32fb37.png"
    },
    "is_available_for_streaming": true,
    "isrc": "AUVAE1800157",
    "key": {
      "camelot_number": 11,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 11,
      "is_sharp": true,
      "is_flat": false,
      "letter": "F",
      "name": "F# Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/11/"
    },
    "label_track_identifier": "",
    "length": "5:22",
    "length_ms": 322543,
    "mix_name": "Original Mix",
    "name": "Feedback Loop",
    "new_release_date": "2018-12-10",
    "pre_order": false,
    "pre_order_date": "2018-11-26",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2018-12-10",
    "release": {
      "id": 2451372,
      "name": "The Banquet, Vol. 5",
      "image": {
        "id": 20785825,
        "uri": "/images/products/feedback-loop.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/9c5505d5-b44e-49fa-a80d-8160913bc6c1.jpg"
      },
      "label": {
        "id": 44904,
        "name": "Medium Rare Recordings",
        "image": {
          "id": 37933681,
          "uri": "https://geo-media.beatport.com/image_size/500x500/749369cf-a503-4f7f-8ac6-73e2897885b9.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/749369cf-a503-4f7f-8ac6-73e2897885b9.jpg"
        },
        "slug": "medium-rare-recordings"
      },
      "slug": "the-banquet-vol-5"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/d996470b-bf81-4540-8c57-8f1386a72473.LOFI.mp3",
    "sample_start_ms": 129017,
    "sample_end_ms": 249017,
    "slug": "feedback-loop",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/11322914/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      },
      {
        "id": 692473,
        "image": {
          "id": 36927284,
          "uri": "https://geo-media.beatport.com/image_size/590x404/b7415821-470c-4897-8e64-ca8d6c6584a5.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/b7415821-470c-4897-8e64-ca8d6c6584a5.jpg"
        },
        "name": "AVAA",
        "slug": "avaa",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/692473/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 124,
    "catalog_number": "NBTG011",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2018-11-09T12:35:36-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 11252799,
    "image": {
      "id": 20558792,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/1909e792-297f-4d35-89b2-bcb4a11787f2.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/1909e792-297f-4d35-89b2-bcb4a11787f2.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU1853859",
    "key": {
      "camelot_number": 4,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 4,
      "is_sharp": false,
      "is_flat": false,
      "letter": "F",
      "name": "F Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/4/"
    },
    "label_track_identifier": "2699100",
    "length": "5:52",
    "length_ms": 352258,
    "mix_name": "Original Mix",
    "name": "Bang Like This",
    "new_release_date": "2018-11-16",
    "pre_order": false,
    "pre_order_date": "2018-11-02",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2018-11-16",
    "release": {
      "id": 2437784,
      "name": "Nothing But... The Groove, Vol. 11",
      "image": {
        "id": 20558468,
        "uri": "/images/products/bang-like-this.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/175341be-bb48-440f-8849-aaed978ac4e1.jpg"
      },
      "label": {
        "id": 43219,
        "name": "Nothing But",
        "image": {
          "id": 9955213,
          "uri": "https://geo-media.beatport.com/image_size/500x500/01df98b2-5718-44df-93c6-c13f1b10055c.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/01df98b2-5718-44df-93c6-c13f1b10055c.jpg"
        },
        "slug": "nothing-but"
      },
      "slug": "nothing-but-the-groove-vol-11"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/d5e1f1e8-1c63-417c-8f54-20a776a77952.LOFI.mp3",
    "sample_start_ms": 140903,
    "sample_end_ms": 260903,
    "slug": "bang-like-this",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/11252799/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 77597,
        "image": {
          "id": 9564809,
          "uri": "https://geo-media.beatport.com/image_size/590x404/152045c5-a679-49df-8cf0-fec8c8f51ceb.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/152045c5-a679-49df-8cf0-fec8c8f51ceb.jpg"
        },
        "name": "Jeff Doubleu",
        "slug": "jeff-doubleu",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/77597/"
      },
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 126,
    "catalog_number": "BOC053",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2018-10-11T11:43:19-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 11145087,
    "image": {
      "id": 20368103,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/855dabef-e4a6-4a99-a7bd-c1a1c6863569.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/855dabef-e4a6-4a99-a7bd-c1a1c6863569.png"
    },
    "is_available_for_streaming": true,
    "isrc": "AUXN21810623",
    "key": {
      "camelot_number": 11,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 34,
      "is_sharp": false,
      "is_flat": true,
      "letter": "G",
      "name": "Gb Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/34/"
    },
    "label_track_identifier": "",
    "length": "3:49",
    "length_ms": 229000,
    "mix_name": "Folly Remix",
    "name": "Brain Baby",
    "new_release_date": "2018-10-30",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2018-10-30",
    "release": {
      "id": 2413490,
      "name": "Brain Baby",
      "image": {
        "id": 20367694,
        "uri": "/images/products/brain-baby.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/27ea9bf5-f389-4cbe-a3b8-390b97cb793c.jpg"
      },
      "label": {
        "id": 65219,
        "name": "Box Of Cats",
        "image": {
          "id": 16490274,
          "uri": "https://geo-media.beatport.com/image_size/500x500/7794601c-9514-4849-80a5-2b6716a76b1f.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/7794601c-9514-4849-80a5-2b6716a76b1f.jpg"
        },
        "slug": "box-of-cats"
      },
      "slug": "brain-baby"
    },
    "remixers": [
      {
        "id": 602804,
        "image": {
          "id": 35698548,
          "uri": "https://geo-media.beatport.com/image_size/590x404/d9845ef7-829f-4a50-a6ff-63a8769f1181.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/d9845ef7-829f-4a50-a6ff-63a8769f1181.jpg"
        },
        "name": "Folly",
        "slug": "folly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/602804/"
      }
    ],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/0958e244-dde1-412f-bb84-573313993bf5.LOFI.mp3",
    "sample_start_ms": 91600,
    "sample_end_ms": 211600,
    "slug": "brain-baby",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/11145087/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 77597,
        "image": {
          "id": 9564809,
          "uri": "https://geo-media.beatport.com/image_size/590x404/152045c5-a679-49df-8cf0-fec8c8f51ceb.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/152045c5-a679-49df-8cf0-fec8c8f51ceb.jpg"
        },
        "name": "Jeff Doubleu",
        "slug": "jeff-doubleu",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/77597/"
      },
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 125,
    "catalog_number": "BOC053",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2018-10-11T11:43:19-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 11145085,
    "image": {
      "id": 20368090,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/e992c3b8-ce0a-4ff0-ae0e-39cbb719b4ab.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/e992c3b8-ce0a-4ff0-ae0e-39cbb719b4ab.png"
    },
    "is_available_for_streaming": true,
    "isrc": "AUXN21810621",
    "key": {
      "camelot_number": 11,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 34,
      "is_sharp": false,
      "is_flat": true,
      "letter": "G",
      "name": "Gb Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/34/"
    },
    "label_track_identifier": "",
    "length": "5:20",
    "length_ms": 320000,
    "mix_name": "Original Mix",
    "name": "Brain Baby",
    "new_release_date": "2018-10-30",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2018-10-30",
    "release": {
      "id": 2413490,
      "name": "Brain Baby",
      "image": {
        "id": 20367694,
        "uri": "/images/products/brain-baby.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/27ea9bf5-f389-4cbe-a3b8-390b97cb793c.jpg"
      },
      "label": {
        "id": 65219,
        "name": "Box Of Cats",
        "image": {
          "id": 16490274,
          "uri": "https://geo-media.beatport.com/image_size/500x500/7794601c-9514-4849-80a5-2b6716a76b1f.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/7794601c-9514-4849-80a5-2b6716a76b1f.jpg"
        },
        "slug": "box-of-cats"
      },
      "slug": "brain-baby"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/62982e18-aa3d-45dc-8144-8ae5b934f2d5.LOFI.mp3",
    "sample_start_ms": 128000,
    "sample_end_ms": 248000,
    "slug": "brain-baby",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/11145085/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 77597,
        "image": {
          "id": 9564809,
          "uri": "https://geo-media.beatport.com/image_size/590x404/152045c5-a679-49df-8cf0-fec8c8f51ceb.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/152045c5-a679-49df-8cf0-fec8c8f51ceb.jpg"
        },
        "name": "Jeff Doubleu",
        "slug": "jeff-doubleu",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/77597/"
      },
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 125,
    "catalog_number": "BOC053",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2018-10-11T11:43:19-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 11145086,
    "image": {
      "id": 20367967,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/0238b95b-2890-44c0-93a4-3263519e0936.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/0238b95b-2890-44c0-93a4-3263519e0936.png"
    },
    "is_available_for_streaming": true,
    "isrc": "AUXN21810622",
    "key": {
      "camelot_number": 11,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 34,
      "is_sharp": false,
      "is_flat": true,
      "letter": "G",
      "name": "Gb Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/34/"
    },
    "label_track_identifier": "",
    "length": "5:53",
    "length_ms": 353280,
    "mix_name": "Botnek Remix",
    "name": "Brain Baby",
    "new_release_date": "2018-10-30",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2018-10-30",
    "release": {
      "id": 2413490,
      "name": "Brain Baby",
      "image": {
        "id": 20367694,
        "uri": "/images/products/brain-baby.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/27ea9bf5-f389-4cbe-a3b8-390b97cb793c.jpg"
      },
      "label": {
        "id": 65219,
        "name": "Box Of Cats",
        "image": {
          "id": 16490274,
          "uri": "https://geo-media.beatport.com/image_size/500x500/7794601c-9514-4849-80a5-2b6716a76b1f.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/7794601c-9514-4849-80a5-2b6716a76b1f.jpg"
        },
        "slug": "box-of-cats"
      },
      "slug": "brain-baby"
    },
    "remixers": [
      {
        "id": 157218,
        "image": {
          "id": 21192544,
          "uri": "https://geo-media.beatport.com/image_size/590x404/8caab19c-40c4-4fe6-b978-7b81af012347.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/8caab19c-40c4-4fe6-b978-7b81af012347.jpg"
        },
        "name": "Botnek",
        "slug": "botnek",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/157218/"
      }
    ],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/84c7cafe-e730-49f9-9161-f4ad6ed668ac.LOFI.mp3",
    "sample_start_ms": 141312,
    "sample_end_ms": 261312,
    "slug": "brain-baby",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/11145086/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 488403,
        "image": {
          "id": 18506183,
          "uri": "https://geo-media.beatport.com/image_size/590x404/a49ada0e-5db9-45c1-bd64-daebe6a3d707.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/a49ada0e-5db9-45c1-bd64-daebe6a3d707.jpg"
        },
        "name": "Heider",
        "slug": "heider",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/488403/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 126,
    "catalog_number": "LME006",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2018-09-18T12:34:02-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 11059946,
    "image": {
      "id": 20213419,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/0dc6b2e7-c6f9-422e-a14f-65e22641b00c.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/0dc6b2e7-c6f9-422e-a14f-65e22641b00c.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU1888891",
    "key": {
      "camelot_number": 4,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 31,
      "is_sharp": true,
      "is_flat": false,
      "letter": "G",
      "name": "G# Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/31/"
    },
    "label_track_identifier": "2624733",
    "length": "5:18",
    "length_ms": 318134,
    "mix_name": "Mike McFly Remix",
    "name": "Never Mind",
    "new_release_date": "2018-10-15",
    "pre_order": false,
    "pre_order_date": "2018-10-01",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2018-10-15",
    "release": {
      "id": 2394307,
      "name": "Never Mind / Down",
      "image": {
        "id": 20211383,
        "uri": "/images/products/never-mind.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/34cb1838-fc51-4850-b040-5152cb7bfa72.jpg"
      },
      "label": {
        "id": 68839,
        "name": "Lame Digital",
        "image": {
          "id": 18760730,
          "uri": "https://geo-media.beatport.com/image_size/500x500/98cd5150-5d11-4782-8ad0-ed3cdb81652d.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/98cd5150-5d11-4782-8ad0-ed3cdb81652d.jpg"
        },
        "slug": "lame-digital"
      },
      "slug": "never-mind-down"
    },
    "remixers": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/6be748e3-6a77-4ea0-b1ef-d0c449fb25ac.LOFI.mp3",
    "sample_start_ms": 127253,
    "sample_end_ms": 247253,
    "slug": "never-mind",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/11059946/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 124,
    "catalog_number": "HOH070",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2018-09-27T10:57:04-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 11094068,
    "image": {
      "id": 20273156,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/ede65a16-2bac-4e62-b8b7-28c051639d4d.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/ede65a16-2bac-4e62-b8b7-28c051639d4d.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU1887905",
    "key": {
      "camelot_number": 9,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 9,
      "is_sharp": false,
      "is_flat": false,
      "letter": "E",
      "name": "E Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/9/"
    },
    "label_track_identifier": "2641315",
    "length": "5:32",
    "length_ms": 332933,
    "mix_name": "Original Mix",
    "name": "Got Dem Lows",
    "new_release_date": "2018-10-15",
    "pre_order": false,
    "pre_order_date": "2018-10-01",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2018-10-15",
    "release": {
      "id": 2401635,
      "name": "Amsterdam Hustle 2018",
      "image": {
        "id": 20272791,
        "uri": "/images/products/got-dem-lows.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/cb12d1c1-cfef-4056-975c-2f9c9b7faec7.jpg"
      },
      "label": {
        "id": 42127,
        "name": "House Of Hustle",
        "image": {
          "id": 22826430,
          "uri": "https://geo-media.beatport.com/image_size/500x500/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg"
        },
        "slug": "house-of-hustle"
      },
      "slug": "amsterdam-hustle-2018"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/3cb20f0c-4146-4ac6-9608-59f3fa2b5250.LOFI.mp3",
    "sample_start_ms": 133173,
    "sample_end_ms": 253173,
    "slug": "got-dem-lows",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/11094068/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      },
      {
        "id": 556916,
        "image": {
          "id": 28688908,
          "uri": "https://geo-media.beatport.com/image_size/590x404/04531d54-4905-4e9f-b0c6-dc30b1c2c3b0.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/04531d54-4905-4e9f-b0c6-dc30b1c2c3b0.jpg"
        },
        "name": "The Schmidt",
        "slug": "the-schmidt",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/556916/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 125,
    "catalog_number": "TAB040",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2018-09-27T13:07:43-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 11094617,
    "image": {
      "id": 20278076,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/cfd48fd0-97d9-4df0-aa30-270e3aea8033.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/cfd48fd0-97d9-4df0-aa30-270e3aea8033.png"
    },
    "is_available_for_streaming": true,
    "isrc": "FR96X1839092",
    "key": {
      "camelot_number": 4,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 16,
      "is_sharp": false,
      "is_flat": true,
      "letter": "A",
      "name": "Ab Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/16/"
    },
    "label_track_identifier": "",
    "length": "5:17",
    "length_ms": 317754,
    "mix_name": "Original Mix",
    "name": "Rollin' Up",
    "new_release_date": "2018-10-12",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2018-10-12",
    "release": {
      "id": 2401772,
      "name": "This Ain't Bristol - Amsterdam Selections",
      "image": {
        "id": 20273778,
        "uri": "/images/products/rollin-up.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/88a732d0-fdc1-4b9b-8980-f0502f65903e.jpg"
      },
      "label": {
        "id": 46486,
        "name": "This Ain't Bristol",
        "image": {
          "id": 10904394,
          "uri": "https://geo-media.beatport.com/image_size/500x500/5ccdde2f-c511-4f08-88b2-bd02d4ddae93.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/5ccdde2f-c511-4f08-88b2-bd02d4ddae93.jpg"
        },
        "slug": "this-aint-bristol"
      },
      "slug": "this-aint-bristol-amsterdam-selections"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/8f8b301f-d76e-43e9-bbde-31fceb6e19a6.LOFI.mp3",
    "sample_start_ms": 127101,
    "sample_end_ms": 247101,
    "slug": "rollin-up",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/11094617/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 509097,
        "image": {
          "id": 31614070,
          "uri": "https://geo-media.beatport.com/image_size/590x404/94eca25d-1ec9-4259-bfdc-db19528b69db.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/94eca25d-1ec9-4259-bfdc-db19528b69db.jpg"
        },
        "name": "Danny Kolk",
        "slug": "danny-kolk",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/509097/"
      },
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 126,
    "catalog_number": "053000094548",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2018-10-10T13:33:31-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 96,
      "name": "Mainstage",
      "slug": "mainstage",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/96/"
    },
    "id": 11141347,
    "image": {
      "id": 20361049,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/502e7641-5cbd-4d49-9eb7-57b8bb477669.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/502e7641-5cbd-4d49-9eb7-57b8bb477669.png"
    },
    "is_available_for_streaming": true,
    "isrc": "QM42K1892782",
    "key": {
      "camelot_number": 9,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 9,
      "is_sharp": false,
      "is_flat": false,
      "letter": "E",
      "name": "E Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/9/"
    },
    "label_track_identifier": "",
    "length": "3:34",
    "length_ms": 214004,
    "mix_name": "Original Mix",
    "name": "Tek Tek Tek",
    "new_release_date": "2018-10-12",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2018-10-12",
    "release": {
      "id": 2412546,
      "name": "Tek Tek Tek",
      "image": {
        "id": 20361028,
        "uri": "/images/products/tek-tek-tek.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/199d5a86-b8df-4d1d-b842-bd7a474fc539.jpg"
      },
      "label": {
        "id": 54352,
        "name": "SoundCloud Direct",
        "image": {
          "id": 32622727,
          "uri": "https://geo-media.beatport.com/image_size/500x500/40613fb5-c341-4fa3-ae37-3c846cbe5ba9.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/40613fb5-c341-4fa3-ae37-3c846cbe5ba9.jpg"
        },
        "slug": "soundcloud-direct"
      },
      "slug": "tek-tek-tek"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/ad2703dc-db62-45ea-8d48-29261313cbaa.LOFI.mp3",
    "sample_start_ms": 85601,
    "sample_end_ms": 205601,
    "slug": "tek-tek-tek",
    "sub_genre": {
      "id": 247,
      "name": "Future House",
      "slug": "future-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/sub-genres/247/",
      "enabled": true
    },
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/11141347/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 125,
    "catalog_number": "LWFHE12",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2018-07-16T11:41:06-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 96,
      "name": "Mainstage",
      "slug": "mainstage",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/96/"
    },
    "id": 10829946,
    "image": {
      "id": 19792067,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/3516b4d1-3b72-456f-a881-e5f5adeab331.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/3516b4d1-3b72-456f-a881-e5f5adeab331.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU1802404",
    "key": {
      "camelot_number": 4,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 4,
      "is_sharp": false,
      "is_flat": false,
      "letter": "F",
      "name": "F Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/4/"
    },
    "label_track_identifier": "2480536",
    "length": "4:54",
    "length_ms": 294207,
    "mix_name": "Original Mix",
    "name": "Gato",
    "new_release_date": "2018-08-20",
    "pre_order": false,
    "pre_order_date": "2018-08-06",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2018-08-20",
    "release": {
      "id": 2343766,
      "name": "Future House Essentials, Vol. 12",
      "image": {
        "id": 19789379,
        "uri": "/images/products/gato.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/ecb4ec39-46b4-4514-8abb-8ffa89abf582.jpg"
      },
      "label": {
        "id": 7839,
        "name": "LW Recordings",
        "image": {
          "id": 7380931,
          "uri": "https://geo-media.beatport.com/image_size/500x500/5a535d69-7db3-4895-9c48-2f3c26428338.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/5a535d69-7db3-4895-9c48-2f3c26428338.jpg"
        },
        "slug": "lw-recordings"
      },
      "slug": "future-house-essentials-vol-12"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/eebfcf68-062d-43a1-a9db-5e62226418dd.LOFI.mp3",
    "sample_start_ms": 117682,
    "sample_end_ms": 237682,
    "slug": "gato",
    "sub_genre": {
      "id": 247,
      "name": "Future House",
      "slug": "future-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/sub-genres/247/",
      "enabled": true
    },
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/10829946/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      },
      {
        "id": 600378,
        "image": {
          "id": 30704573,
          "uri": "https://geo-media.beatport.com/image_size/590x404/f324779c-0ebf-45ab-8800-1b1d97e7e53c.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/f324779c-0ebf-45ab-8800-1b1d97e7e53c.jpg"
        },
        "name": "LUCATI",
        "slug": "lucati",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/600378/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 124,
    "catalog_number": "RR2172",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2018-07-13T14:09:27-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 10826427,
    "image": {
      "id": 19782856,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/18f169ca-76ab-4f20-8f61-aa6692bff19e.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/18f169ca-76ab-4f20-8f61-aa6692bff19e.png"
    },
    "is_available_for_streaming": true,
    "isrc": "USCEI1216115",
    "key": {
      "camelot_number": 1,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 1,
      "is_sharp": false,
      "is_flat": true,
      "letter": "A",
      "name": "Ab Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/1/"
    },
    "label_track_identifier": "",
    "length": "5:15",
    "length_ms": 315250,
    "mix_name": "Original Mix",
    "name": "Break It",
    "new_release_date": "2018-07-16",
    "pre_order": false,
    "pre_order_date": "2018-07-13",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2018-07-16",
    "release": {
      "id": 2342906,
      "name": "I Need RELIEF Vol 2",
      "image": {
        "id": 19781698,
        "uri": "/images/products/break-it.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/884347f2-a3a2-4467-b4ec-c683c039107b.jpg"
      },
      "label": {
        "id": 900,
        "name": "Relief",
        "image": {
          "id": 11354940,
          "uri": "https://geo-media.beatport.com/image_size/500x500/094b1a55-e1a7-401f-a628-524219055c5f.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/094b1a55-e1a7-401f-a628-524219055c5f.jpg"
        },
        "slug": "relief"
      },
      "slug": "i-need-relief-vol-2"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/8483f2f0-0e0c-4b31-a4a4-ce8b2af88529.LOFI.mp3",
    "sample_start_ms": 126100,
    "sample_end_ms": 246100,
    "slug": "break-it",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/10826427/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 125,
    "catalog_number": "PSYCHD047",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2018-06-01T14:41:21-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 10672689,
    "image": {
      "id": 19502485,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/bb7d05f9-180b-4d6d-884a-e492009dc3e8.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/bb7d05f9-180b-4d6d-884a-e492009dc3e8.png"
    },
    "is_available_for_streaming": true,
    "isrc": "QM4651800049",
    "key": {
      "camelot_number": 5,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 17,
      "is_sharp": false,
      "is_flat": true,
      "letter": "E",
      "name": "Eb Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/17/"
    },
    "label_track_identifier": "1711400",
    "length": "5:49",
    "length_ms": 349440,
    "mix_name": "Original Mix",
    "name": "Steam Rolla",
    "new_release_date": "2018-06-29",
    "pre_order": false,
    "pre_order_date": "2018-06-22",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2018-06-29",
    "release": {
      "id": 2309989,
      "name": "Goldbrick",
      "image": {
        "id": 19502412,
        "uri": "/images/products/steam-rolla.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/ca1b2333-b19d-4a10-b6fe-51d1cc36b429.jpg"
      },
      "label": {
        "id": 49709,
        "name": "Psycho Disco!",
        "image": {
          "id": 11722304,
          "uri": "https://geo-media.beatport.com/image_size/500x500/a0829a72-ad1b-4dbb-bb53-1a862be56f81.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/a0829a72-ad1b-4dbb-bb53-1a862be56f81.jpg"
        },
        "slug": "psycho-disco"
      },
      "slug": "goldbrick"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/8b2ff36b-aad3-4276-a5b5-404e889c6219.LOFI.mp3",
    "sample_start_ms": 139776,
    "sample_end_ms": 259776,
    "slug": "steam-rolla",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/10672689/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 435605,
        "image": {
          "id": 19290368,
          "uri": "https://geo-media.beatport.com/image_size/590x404/29bc36b9-4d05-4c24-a486-cb13c7f668b9.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/29bc36b9-4d05-4c24-a486-cb13c7f668b9.jpg"
        },
        "name": "Hood Rich",
        "slug": "hood-rich",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/435605/"
      },
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 123,
    "catalog_number": "PSYCHD047",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2018-06-01T14:41:21-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 10672687,
    "image": {
      "id": 19502445,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/6627c003-2d3a-43c2-b400-68114439f9bb.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/6627c003-2d3a-43c2-b400-68114439f9bb.png"
    },
    "is_available_for_streaming": true,
    "isrc": "QM4651800047",
    "key": {
      "camelot_number": 10,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 10,
      "is_sharp": false,
      "is_flat": false,
      "letter": "B",
      "name": "B Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/10/"
    },
    "label_track_identifier": "1711373",
    "length": "4:40",
    "length_ms": 280975,
    "mix_name": "Original Mix",
    "name": "Goldbrick",
    "new_release_date": "2018-06-29",
    "pre_order": false,
    "pre_order_date": "2018-06-22",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2018-06-29",
    "release": {
      "id": 2309989,
      "name": "Goldbrick",
      "image": {
        "id": 19502412,
        "uri": "/images/products/goldbrick.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/ca1b2333-b19d-4a10-b6fe-51d1cc36b429.jpg"
      },
      "label": {
        "id": 49709,
        "name": "Psycho Disco!",
        "image": {
          "id": 11722304,
          "uri": "https://geo-media.beatport.com/image_size/500x500/a0829a72-ad1b-4dbb-bb53-1a862be56f81.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/a0829a72-ad1b-4dbb-bb53-1a862be56f81.jpg"
        },
        "slug": "psycho-disco"
      },
      "slug": "goldbrick"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/8de843dd-512f-4a0f-802e-8a2ae3d83001.LOFI.mp3",
    "sample_start_ms": 112390,
    "sample_end_ms": 232390,
    "slug": "goldbrick",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/10672687/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      },
      {
        "id": 692473,
        "image": {
          "id": 36927284,
          "uri": "https://geo-media.beatport.com/image_size/590x404/b7415821-470c-4897-8e64-ca8d6c6584a5.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/b7415821-470c-4897-8e64-ca8d6c6584a5.jpg"
        },
        "name": "AVAA",
        "slug": "avaa",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/692473/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 124,
    "catalog_number": "HOH065",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2018-05-25T15:51:59-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 10644262,
    "image": {
      "id": 19447520,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/eea3f454-2522-46e7-97f4-316e008515e3.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/eea3f454-2522-46e7-97f4-316e008515e3.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU1853859",
    "key": {
      "camelot_number": 4,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 4,
      "is_sharp": false,
      "is_flat": false,
      "letter": "F",
      "name": "F Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/4/"
    },
    "label_track_identifier": "2463487",
    "length": "5:52",
    "length_ms": 352258,
    "mix_name": "Original Mix",
    "name": "Bang Like This",
    "new_release_date": "2018-06-25",
    "pre_order": false,
    "pre_order_date": "2018-06-11",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2018-06-25",
    "release": {
      "id": 2303497,
      "name": "Escuadrón",
      "image": {
        "id": 19591317,
        "uri": "/images/products/bang-like-this.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/e4b77ef0-ab9d-49c3-ba09-16df5d4861d8.jpg"
      },
      "label": {
        "id": 42127,
        "name": "House Of Hustle",
        "image": {
          "id": 22826430,
          "uri": "https://geo-media.beatport.com/image_size/500x500/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg"
        },
        "slug": "house-of-hustle"
      },
      "slug": "escuadron"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/441a5463-b84b-4bc4-b94d-46a3d41752d2.LOFI.mp3",
    "sample_start_ms": 140903,
    "sample_end_ms": 260903,
    "slug": "bang-like-this",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/10644262/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      },
      {
        "id": 649822,
        "image": {
          "id": 39219756,
          "uri": "https://geo-media.beatport.com/image_size/590x404/35752f87-fd4d-44b4-b04c-cd0bcf90de60.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/35752f87-fd4d-44b4-b04c-cd0bcf90de60.jpg"
        },
        "name": "FOOLiE",
        "slug": "foolie",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/649822/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 122,
    "catalog_number": "HOH065",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2018-05-25T15:51:59-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 10644263,
    "image": {
      "id": 19447439,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/08f85067-1d27-4ebc-8437-10b589833df6.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/08f85067-1d27-4ebc-8437-10b589833df6.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU1853860",
    "key": {
      "camelot_number": 6,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 6,
      "is_sharp": false,
      "is_flat": false,
      "letter": "G",
      "name": "G Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/6/"
    },
    "label_track_identifier": "2463489",
    "length": "5:10",
    "length_ms": 310827,
    "mix_name": "Original Mix",
    "name": "Sticky Icky",
    "new_release_date": "2018-06-25",
    "pre_order": false,
    "pre_order_date": "2018-06-11",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2018-06-25",
    "release": {
      "id": 2303497,
      "name": "Escuadrón",
      "image": {
        "id": 19591317,
        "uri": "/images/products/sticky-icky.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/e4b77ef0-ab9d-49c3-ba09-16df5d4861d8.jpg"
      },
      "label": {
        "id": 42127,
        "name": "House Of Hustle",
        "image": {
          "id": 22826430,
          "uri": "https://geo-media.beatport.com/image_size/500x500/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg"
        },
        "slug": "house-of-hustle"
      },
      "slug": "escuadron"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/45eb9fa3-f8ce-4319-88eb-b2a8e026d4cd.LOFI.mp3",
    "sample_start_ms": 124330,
    "sample_end_ms": 244330,
    "slug": "sticky-icky",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/10644263/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 370160,
        "image": {
          "id": 29400990,
          "uri": "https://geo-media.beatport.com/image_size/590x404/451fc2f9-9b1c-4de3-a7cf-57d42581326c.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/451fc2f9-9b1c-4de3-a7cf-57d42581326c.jpg"
        },
        "name": "Feel Flow!",
        "slug": "feel-flow",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/370160/"
      },
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 124,
    "catalog_number": "HOH065",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2018-05-25T15:51:59-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 10644264,
    "image": {
      "id": 19447509,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/b6d7119d-20f3-49c5-b400-3fc437c14f50.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/b6d7119d-20f3-49c5-b400-3fc437c14f50.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU1853861",
    "key": {
      "camelot_number": 1,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 13,
      "is_sharp": false,
      "is_flat": false,
      "letter": "B",
      "name": "B Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/13/"
    },
    "label_track_identifier": "2463488",
    "length": "4:42",
    "length_ms": 282584,
    "mix_name": "Original Mix",
    "name": "Coke",
    "new_release_date": "2018-06-25",
    "pre_order": false,
    "pre_order_date": "2018-06-11",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2018-06-25",
    "release": {
      "id": 2303497,
      "name": "Escuadrón",
      "image": {
        "id": 19591317,
        "uri": "/images/products/coke.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/e4b77ef0-ab9d-49c3-ba09-16df5d4861d8.jpg"
      },
      "label": {
        "id": 42127,
        "name": "House Of Hustle",
        "image": {
          "id": 22826430,
          "uri": "https://geo-media.beatport.com/image_size/500x500/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg"
        },
        "slug": "house-of-hustle"
      },
      "slug": "escuadron"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/999b105c-f58d-4cb5-b689-b42cdb02d3c9.LOFI.mp3",
    "sample_start_ms": 113033,
    "sample_end_ms": 233033,
    "slug": "coke",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/10644264/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      },
      {
        "id": 646968,
        "image": {
          "id": 35769841,
          "uri": "https://geo-media.beatport.com/image_size/590x404/dcf8a4e2-7463-42bc-849e-24fdb9cad367.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/dcf8a4e2-7463-42bc-849e-24fdb9cad367.jpg"
        },
        "name": "Kallendario",
        "slug": "kallendario",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/646968/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 123,
    "catalog_number": "HOH065",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2018-05-25T15:51:59-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 10644265,
    "image": {
      "id": 19447467,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/35607115-a2bd-4e87-97a8-6307a4effa5f.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/35607115-a2bd-4e87-97a8-6307a4effa5f.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU1853862",
    "key": {
      "camelot_number": 2,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 33,
      "is_sharp": false,
      "is_flat": true,
      "letter": "G",
      "name": "Gb Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/33/"
    },
    "label_track_identifier": "2463492",
    "length": "6:00",
    "length_ms": 360950,
    "mix_name": "Original Mix",
    "name": "Shake Ya",
    "new_release_date": "2018-06-25",
    "pre_order": false,
    "pre_order_date": "2018-06-11",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2018-06-25",
    "release": {
      "id": 2303497,
      "name": "Escuadrón",
      "image": {
        "id": 19591317,
        "uri": "/images/products/shake-ya.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/e4b77ef0-ab9d-49c3-ba09-16df5d4861d8.jpg"
      },
      "label": {
        "id": 42127,
        "name": "House Of Hustle",
        "image": {
          "id": 22826430,
          "uri": "https://geo-media.beatport.com/image_size/500x500/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg"
        },
        "slug": "house-of-hustle"
      },
      "slug": "escuadron"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/0da87c3d-ff95-475a-bf76-2601ff64283d.LOFI.mp3",
    "sample_start_ms": 144380,
    "sample_end_ms": 264380,
    "slug": "shake-ya",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/10644265/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 123,
    "catalog_number": "APXXL080",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2018-05-11T11:53:09-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 91,
      "name": "Bass House",
      "slug": "bass-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/91/"
    },
    "id": 10593413,
    "image": {
      "id": 19310425,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/17cb3174-70d1-41af-81d3-8ebea5657f9c.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/17cb3174-70d1-41af-81d3-8ebea5657f9c.png"
    },
    "is_available_for_streaming": true,
    "isrc": "CA5KR1812104",
    "key": {
      "camelot_number": 2,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 33,
      "is_sharp": false,
      "is_flat": true,
      "letter": "G",
      "name": "Gb Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/33/"
    },
    "label_track_identifier": "6072984100458548033",
    "length": "5:19",
    "length_ms": 319672,
    "mix_name": "Original Mix",
    "name": "Woah Nu Edit",
    "new_release_date": "2018-06-01",
    "pre_order": false,
    "pre_order_date": "2018-05-25",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2018-06-01",
    "release": {
      "id": 2291890,
      "name": "Flysawce EP",
      "image": {
        "id": 19309541,
        "uri": "/images/products/woah-nu-edit.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/76d7a406-410f-4eb9-90e9-733ea38ce70c.jpg"
      },
      "label": {
        "id": 49595,
        "name": "Audiophile XXL",
        "image": {
          "id": 15208595,
          "uri": "https://geo-media.beatport.com/image_size/500x500/254510ef-481e-4f57-b7dc-51359600eb4f.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/254510ef-481e-4f57-b7dc-51359600eb4f.jpg"
        },
        "slug": "audiophile-xxl"
      },
      "slug": "flysawce-ep"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/4c794ca5-843a-4c2c-b514-d98cfb070250.LOFI.mp3",
    "sample_start_ms": 127868,
    "sample_end_ms": 247868,
    "slug": "woah-nu-edit",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/10593413/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 123,
    "catalog_number": "APXXL080",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2018-05-11T11:53:09-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 9,
      "name": "Breaks / Breakbeat / UK Bass",
      "slug": "breaks-breakbeat-uk-bass",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/9/"
    },
    "id": 10593414,
    "image": {
      "id": 19310399,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/0e78c6a1-60b7-428c-b267-4a73e45915b4.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/0e78c6a1-60b7-428c-b267-4a73e45915b4.png"
    },
    "is_available_for_streaming": true,
    "isrc": "CA5KR1812103",
    "key": {
      "camelot_number": 5,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 5,
      "is_sharp": false,
      "is_flat": false,
      "letter": "C",
      "name": "C Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/5/"
    },
    "label_track_identifier": "6072984100458547736",
    "length": "5:23",
    "length_ms": 323902,
    "mix_name": "Original Mix",
    "name": "Milliyan",
    "new_release_date": "2018-06-01",
    "pre_order": false,
    "pre_order_date": "2018-05-25",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2018-06-01",
    "release": {
      "id": 2291890,
      "name": "Flysawce EP",
      "image": {
        "id": 19309541,
        "uri": "/images/products/milliyan.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/76d7a406-410f-4eb9-90e9-733ea38ce70c.jpg"
      },
      "label": {
        "id": 49595,
        "name": "Audiophile XXL",
        "image": {
          "id": 15208595,
          "uri": "https://geo-media.beatport.com/image_size/500x500/254510ef-481e-4f57-b7dc-51359600eb4f.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/254510ef-481e-4f57-b7dc-51359600eb4f.jpg"
        },
        "slug": "audiophile-xxl"
      },
      "slug": "flysawce-ep"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/c2dd0506-4812-4674-8a85-3c5ec030707d.LOFI.mp3",
    "sample_start_ms": 129560,
    "sample_end_ms": 249560,
    "slug": "milliyan",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/10593414/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      },
      {
        "id": 600378,
        "image": {
          "id": 30704573,
          "uri": "https://geo-media.beatport.com/image_size/590x404/f324779c-0ebf-45ab-8800-1b1d97e7e53c.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/f324779c-0ebf-45ab-8800-1b1d97e7e53c.jpg"
        },
        "name": "LUCATI",
        "slug": "lucati",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/600378/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 124,
    "catalog_number": "RR2161",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2018-05-15T11:45:47-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 10604307,
    "image": {
      "id": 19348679,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/7a76d73e-add1-4984-b2d8-1ff903cf5049.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/7a76d73e-add1-4984-b2d8-1ff903cf5049.png"
    },
    "is_available_for_streaming": true,
    "isrc": "USCEI1216115",
    "key": {
      "camelot_number": 1,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 1,
      "is_sharp": false,
      "is_flat": true,
      "letter": "A",
      "name": "Ab Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/1/"
    },
    "label_track_identifier": "",
    "length": "5:15",
    "length_ms": 315250,
    "mix_name": "Original Mix",
    "name": "Break It",
    "new_release_date": "2018-05-21",
    "pre_order": false,
    "pre_order_date": "2018-05-16",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2018-05-21",
    "release": {
      "id": 2294270,
      "name": "Tech My House",
      "image": {
        "id": 19348670,
        "uri": "/images/products/break-it.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/d980f7b3-53d1-44ce-8710-7f70e634ddfa.jpg"
      },
      "label": {
        "id": 900,
        "name": "Relief",
        "image": {
          "id": 11354940,
          "uri": "https://geo-media.beatport.com/image_size/500x500/094b1a55-e1a7-401f-a628-524219055c5f.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/094b1a55-e1a7-401f-a628-524219055c5f.jpg"
        },
        "slug": "relief"
      },
      "slug": "tech-my-house"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/ad74396a-6663-4ae6-bd7d-8f1a00203ecd.LOFI.mp3",
    "sample_start_ms": 126100,
    "sample_end_ms": 246100,
    "slug": "break-it",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/10604307/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 407996,
        "image": {
          "id": 19000488,
          "uri": "https://geo-media.beatport.com/image_size/590x404/99841718-d2c5-4c0a-b577-5c92df918db7.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/99841718-d2c5-4c0a-b577-5c92df918db7.jpg"
        },
        "name": "Fromdroptilldawn",
        "slug": "fromdroptilldawn",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/407996/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 124,
    "catalog_number": "HOH062",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2018-03-21T11:10:09-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 96,
      "name": "Mainstage",
      "slug": "mainstage",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/96/"
    },
    "id": 10413375,
    "image": {
      "id": 18984907,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/38635f6a-d43b-47f6-be18-b6e4d34361c6.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/38635f6a-d43b-47f6-be18-b6e4d34361c6.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU1829276",
    "key": {
      "camelot_number": 4,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 4,
      "is_sharp": false,
      "is_flat": false,
      "letter": "F",
      "name": "F Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/4/"
    },
    "label_track_identifier": "2384028",
    "length": "5:42",
    "length_ms": 342295,
    "mix_name": "Mike McFly Remix",
    "name": "Know Bout It",
    "new_release_date": "2018-04-23",
    "pre_order": false,
    "pre_order_date": "2018-04-09",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2018-04-23",
    "release": {
      "id": 2251757,
      "name": "Respect The Turn Up",
      "image": {
        "id": 18984370,
        "uri": "/images/products/know-bout-it.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/fde0d7c0-88c4-4245-8677-a62cd340676a.jpg"
      },
      "label": {
        "id": 42127,
        "name": "House Of Hustle",
        "image": {
          "id": 22826430,
          "uri": "https://geo-media.beatport.com/image_size/500x500/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg"
        },
        "slug": "house-of-hustle"
      },
      "slug": "respect-the-turn-up"
    },
    "remixers": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/82806b5e-82a8-41ef-a12f-6e8b73de9722.LOFI.mp3",
    "sample_start_ms": 136918,
    "sample_end_ms": 256918,
    "slug": "know-bout-it",
    "sub_genre": {
      "id": 247,
      "name": "Future House",
      "slug": "future-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/sub-genres/247/",
      "enabled": true
    },
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/10413375/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 122,
    "catalog_number": "DBS013",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2018-04-10T10:32:52-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 10480198,
    "image": {
      "id": 19104599,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/03822189-9b1d-4e92-a723-07ac4737c175.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/03822189-9b1d-4e92-a723-07ac4737c175.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU1818986",
    "key": {
      "camelot_number": 5,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 5,
      "is_sharp": false,
      "is_flat": false,
      "letter": "C",
      "name": "C Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/5/"
    },
    "label_track_identifier": "2407089",
    "length": "5:39",
    "length_ms": 339423,
    "mix_name": "Original Mix",
    "name": "Cone Blower",
    "new_release_date": "2018-04-20",
    "pre_order": false,
    "pre_order_date": "2018-04-06",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2018-04-20",
    "release": {
      "id": 2266418,
      "name": "Best Of The Birdfeed",
      "image": {
        "id": 19104277,
        "uri": "/images/products/cone-blower.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/87d73fb2-7ea2-42d8-9bda-2e16c7baa589.jpg"
      },
      "label": {
        "id": 619,
        "name": "DIRTYBIRD",
        "image": {
          "id": 10779540,
          "uri": "https://geo-media.beatport.com/image_size/500x500/bcd90633-a389-41ad-a628-d8978d016413.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/bcd90633-a389-41ad-a628-d8978d016413.jpg"
        },
        "slug": "dirtybird"
      },
      "slug": "best-of-the-birdfeed"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/3662358b-2029-4eb3-9fb0-298846500f5f.LOFI.mp3",
    "sample_start_ms": 135769,
    "sample_end_ms": 255769,
    "slug": "cone-blower",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/10480198/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 125,
    "catalog_number": "HOB011",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2018-01-11T11:44:26-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 96,
      "name": "Mainstage",
      "slug": "mainstage",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/96/"
    },
    "id": 10157679,
    "image": {
      "id": 18503601,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/efd43daa-95eb-4172-8985-f4ff3a116c10.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/efd43daa-95eb-4172-8985-f4ff3a116c10.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU1802404",
    "key": {
      "camelot_number": 4,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 4,
      "is_sharp": false,
      "is_flat": false,
      "letter": "F",
      "name": "F Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/4/"
    },
    "label_track_identifier": "2287558",
    "length": "4:54",
    "length_ms": 294207,
    "mix_name": "Original Mix",
    "name": "Gato",
    "new_release_date": "2018-02-09",
    "pre_order": false,
    "pre_order_date": "2018-01-26",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2018-02-09",
    "release": {
      "id": 2196402,
      "name": "Doom Doom",
      "image": {
        "id": 18503473,
        "uri": "/images/products/gato.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/b744f686-033a-4f75-bf41-284c18601ccd.jpg"
      },
      "label": {
        "id": 56412,
        "name": "House Of Bangerz",
        "image": {
          "id": 18074638,
          "uri": "https://geo-media.beatport.com/image_size/500x500/9b275f13-7938-4884-bd9a-2b62d7a737bc.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/9b275f13-7938-4884-bd9a-2b62d7a737bc.jpg"
        },
        "slug": "house-of-bangerz"
      },
      "slug": "doom-doom"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/137559fb-1655-435f-a1f6-db101bb95f21.LOFI.mp3",
    "sample_start_ms": 117682,
    "sample_end_ms": 237682,
    "slug": "gato",
    "sub_genre": {
      "id": 247,
      "name": "Future House",
      "slug": "future-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/sub-genres/247/",
      "enabled": true
    },
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/10157679/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 124,
    "catalog_number": "HOB011",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2018-01-11T11:44:26-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 96,
      "name": "Mainstage",
      "slug": "mainstage",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/96/"
    },
    "id": 10157678,
    "image": {
      "id": 18503567,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/c25b0be3-b813-4632-9450-0d00f27e5696.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/c25b0be3-b813-4632-9450-0d00f27e5696.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU1802403",
    "key": {
      "camelot_number": 5,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 17,
      "is_sharp": false,
      "is_flat": true,
      "letter": "E",
      "name": "Eb Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/17/"
    },
    "label_track_identifier": "2287560",
    "length": "4:58",
    "length_ms": 298817,
    "mix_name": "Original Mix",
    "name": "Doom Doom",
    "new_release_date": "2018-02-09",
    "pre_order": false,
    "pre_order_date": "2018-01-26",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2018-02-09",
    "release": {
      "id": 2196402,
      "name": "Doom Doom",
      "image": {
        "id": 18503473,
        "uri": "/images/products/doom-doom.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/b744f686-033a-4f75-bf41-284c18601ccd.jpg"
      },
      "label": {
        "id": 56412,
        "name": "House Of Bangerz",
        "image": {
          "id": 18074638,
          "uri": "https://geo-media.beatport.com/image_size/500x500/9b275f13-7938-4884-bd9a-2b62d7a737bc.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/9b275f13-7938-4884-bd9a-2b62d7a737bc.jpg"
        },
        "slug": "house-of-bangerz"
      },
      "slug": "doom-doom"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/ca349dd6-5934-42ac-af5b-aabc8380c03c.LOFI.mp3",
    "sample_start_ms": 119526,
    "sample_end_ms": 239526,
    "slug": "doom-doom",
    "sub_genre": {
      "id": 247,
      "name": "Future House",
      "slug": "future-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/sub-genres/247/",
      "enabled": true
    },
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/10157678/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 125,
    "catalog_number": "MRR032",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2017-12-12T17:13:43-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 10076503,
    "image": {
      "id": 23921756,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/b33bb40e-01a0-4045-813a-cd1cba3a969e.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/b33bb40e-01a0-4045-813a-cd1cba3a969e.png"
    },
    "is_available_for_streaming": true,
    "isrc": "AUVAE1700086",
    "key": {
      "camelot_number": 2,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 30,
      "is_sharp": true,
      "is_flat": false,
      "letter": "D",
      "name": "D# Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/30/"
    },
    "label_track_identifier": "",
    "length": "5:10",
    "length_ms": 310418,
    "mix_name": "Original Mix",
    "name": "Frisko Frisko",
    "new_release_date": "2017-12-18",
    "pre_order": false,
    "pre_order_date": "2017-12-04",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2017-12-18",
    "release": {
      "id": 2179089,
      "name": "The Banquet, Vol. 3",
      "image": {
        "id": 23921592,
        "uri": "/images/products/frisko-frisko.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/e38e1b2c-fd1d-4978-bf6a-94b2e206b1f3.jpg"
      },
      "label": {
        "id": 44904,
        "name": "Medium Rare Recordings",
        "image": {
          "id": 37933681,
          "uri": "https://geo-media.beatport.com/image_size/500x500/749369cf-a503-4f7f-8ac6-73e2897885b9.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/749369cf-a503-4f7f-8ac6-73e2897885b9.jpg"
        },
        "slug": "medium-rare-recordings"
      },
      "slug": "the-banquet-vol-3"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/ec00c6e2-7421-4bc2-909d-5f672eddd3b2.LOFI.mp3",
    "sample_start_ms": 124167,
    "sample_end_ms": 244167,
    "slug": "frisko-frisko",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/10076503/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 124,
    "catalog_number": "BOC035",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2017-11-14T10:49:07-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 5,
      "name": "House",
      "slug": "house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/5/"
    },
    "id": 9960274,
    "image": {
      "id": 20354947,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/267a540a-56bb-49be-b479-f355b501124d.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/267a540a-56bb-49be-b479-f355b501124d.png"
    },
    "is_available_for_streaming": true,
    "isrc": "QZ5FN1725711",
    "key": {
      "camelot_number": 5,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 5,
      "is_sharp": false,
      "is_flat": false,
      "letter": "C",
      "name": "C Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/5/"
    },
    "label_track_identifier": "",
    "length": "5:33",
    "length_ms": 333061,
    "mix_name": "Original Mix",
    "name": "Edit Sample",
    "new_release_date": "2017-12-14",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2017-12-14",
    "release": {
      "id": 2157396,
      "name": "Litterbox 04",
      "image": {
        "id": 20354793,
        "uri": "/images/products/edit-sample.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/03d4c1e7-6c00-49d6-9c77-e2719d52e41d.jpg"
      },
      "label": {
        "id": 65219,
        "name": "Box Of Cats",
        "image": {
          "id": 16490274,
          "uri": "https://geo-media.beatport.com/image_size/500x500/7794601c-9514-4849-80a5-2b6716a76b1f.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/7794601c-9514-4849-80a5-2b6716a76b1f.jpg"
        },
        "slug": "box-of-cats"
      },
      "slug": "litterbox-04"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/29c95b94-f937-487f-922c-f594a86d79f8.LOFI.mp3",
    "sample_start_ms": 133224,
    "sample_end_ms": 253224,
    "slug": "edit-sample",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/9960274/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 122,
    "catalog_number": "BFR027",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2017-11-01T12:08:03-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 9909707,
    "image": {
      "id": 18072419,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/7ffb84d5-dc83-46fb-befe-370008593999.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/7ffb84d5-dc83-46fb-befe-370008593999.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBLV61711420",
    "key": {
      "camelot_number": 5,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 5,
      "is_sharp": false,
      "is_flat": false,
      "letter": "C",
      "name": "C Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/5/"
    },
    "label_track_identifier": "2044385",
    "length": "4:45",
    "length_ms": 285947,
    "mix_name": "Original Mix",
    "name": "Vocal Melee",
    "new_release_date": "2017-11-15",
    "pre_order": false,
    "pre_order_date": "2017-11-01",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2017-11-15",
    "release": {
      "id": 2147606,
      "name": "Vocal Melee",
      "image": {
        "id": 18072245,
        "uri": "/images/products/vocal-melee.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/45e83e3e-7a28-43ff-a5ef-c68644d6074f.jpg"
      },
      "label": {
        "id": 53154,
        "name": "Billions",
        "image": {
          "id": 13238398,
          "uri": "https://geo-media.beatport.com/image_size/500x500/f43a6638-97e7-415a-9388-a5ebe35329b9.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/f43a6638-97e7-415a-9388-a5ebe35329b9.jpg"
        },
        "slug": "billions"
      },
      "slug": "vocal-melee"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/2f56664e-1312-4875-8b27-90f789e5b506.LOFI.mp3",
    "sample_start_ms": 114378,
    "sample_end_ms": 234378,
    "slug": "vocal-melee",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/9909707/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 124,
    "catalog_number": "BFR027",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2017-11-01T12:08:03-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 9909708,
    "image": {
      "id": 18073879,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/efa07053-b8dd-4e52-bde4-1c26a9f65f3a.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/efa07053-b8dd-4e52-bde4-1c26a9f65f3a.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBLV61711421",
    "key": {
      "camelot_number": 5,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 5,
      "is_sharp": false,
      "is_flat": false,
      "letter": "C",
      "name": "C Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/5/"
    },
    "label_track_identifier": "2045518",
    "length": "5:29",
    "length_ms": 329570,
    "mix_name": "NiQW Remix",
    "name": "Vocal Melee",
    "new_release_date": "2017-11-15",
    "pre_order": false,
    "pre_order_date": "2017-11-01",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2017-11-15",
    "release": {
      "id": 2147606,
      "name": "Vocal Melee",
      "image": {
        "id": 18072245,
        "uri": "/images/products/vocal-melee.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/45e83e3e-7a28-43ff-a5ef-c68644d6074f.jpg"
      },
      "label": {
        "id": 53154,
        "name": "Billions",
        "image": {
          "id": 13238398,
          "uri": "https://geo-media.beatport.com/image_size/500x500/f43a6638-97e7-415a-9388-a5ebe35329b9.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/f43a6638-97e7-415a-9388-a5ebe35329b9.jpg"
        },
        "slug": "billions"
      },
      "slug": "vocal-melee"
    },
    "remixers": [
      {
        "id": 381459,
        "image": {
          "id": 25860948,
          "uri": "https://geo-media.beatport.com/image_size/590x404/859e6246-f6de-4d55-95f5-b32a7af30247.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/859e6246-f6de-4d55-95f5-b32a7af30247.jpg"
        },
        "name": "NiQW",
        "slug": "niqw",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/381459/"
      }
    ],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/a41deccf-34cc-46da-9b9e-e358c5cd745b.LOFI.mp3",
    "sample_start_ms": 131828,
    "sample_end_ms": 251828,
    "slug": "vocal-melee",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/9909708/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 125,
    "catalog_number": "HOH054",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2017-09-25T11:13:09-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 9778125,
    "image": {
      "id": 17896362,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/287bd9a7-0b3b-4661-8ed4-5b42d6057211.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/287bd9a7-0b3b-4661-8ed4-5b42d6057211.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU1793818",
    "key": {
      "camelot_number": 5,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 17,
      "is_sharp": false,
      "is_flat": true,
      "letter": "E",
      "name": "Eb Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/17/"
    },
    "label_track_identifier": "2160501",
    "length": "5:44",
    "length_ms": 344903,
    "mix_name": "Original Mix",
    "name": "Yung Internet",
    "new_release_date": "2017-10-23",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2017-10-23",
    "release": {
      "id": 2119398,
      "name": "Amsterdam Hustle 2017",
      "image": {
        "id": 17898612,
        "uri": "/images/products/yung-internet.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/6df22ed4-8e8b-439c-a89b-fc543077879b.jpg"
      },
      "label": {
        "id": 42127,
        "name": "House Of Hustle",
        "image": {
          "id": 22826430,
          "uri": "https://geo-media.beatport.com/image_size/500x500/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg"
        },
        "slug": "house-of-hustle"
      },
      "slug": "amsterdam-hustle-2017"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/3156cb06-ef96-4c64-b5f2-763d41e98dfb.LOFI.mp3",
    "sample_start_ms": 137961,
    "sample_end_ms": 257961,
    "slug": "yung-internet",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/9778125/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      },
      {
        "id": 535365,
        "image": {
          "id": 35377848,
          "uri": "https://geo-media.beatport.com/image_size/590x404/c1872d1f-569d-4909-ac51-60a2791a85c1.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/c1872d1f-569d-4909-ac51-60a2791a85c1.jpg"
        },
        "name": "Malive",
        "slug": "malive",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/535365/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 124,
    "catalog_number": "BOC032",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2017-11-28T11:16:25-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 5,
      "name": "House",
      "slug": "house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/5/"
    },
    "id": 10018279,
    "image": {
      "id": 20354934,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/0fd0b8c4-5583-4b81-9542-ed4b277e4df7.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/0fd0b8c4-5583-4b81-9542-ed4b277e4df7.png"
    },
    "is_available_for_streaming": true,
    "isrc": "QZ5FN1713471",
    "key": {
      "camelot_number": 12,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 12,
      "is_sharp": false,
      "is_flat": true,
      "letter": "D",
      "name": "Db Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/12/"
    },
    "label_track_identifier": "",
    "length": "4:36",
    "length_ms": 276035,
    "mix_name": "Original Mix",
    "name": "Peyote",
    "new_release_date": "2017-09-14",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2017-09-14",
    "release": {
      "id": 2168598,
      "name": "Exagerados",
      "image": {
        "id": 20354767,
        "uri": "/images/products/peyote.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/82bb1e04-515a-4149-a2bb-65f1e023111a.jpg"
      },
      "label": {
        "id": 65219,
        "name": "Box Of Cats",
        "image": {
          "id": 16490274,
          "uri": "https://geo-media.beatport.com/image_size/500x500/7794601c-9514-4849-80a5-2b6716a76b1f.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/7794601c-9514-4849-80a5-2b6716a76b1f.jpg"
        },
        "slug": "box-of-cats"
      },
      "slug": "exagerados"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/024bd726-b084-4262-b2e4-5468becbb03c.LOFI.mp3",
    "sample_start_ms": 110414,
    "sample_end_ms": 230414,
    "slug": "peyote",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/10018279/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 350164,
        "image": {
          "id": 13683458,
          "uri": "https://geo-media.beatport.com/image_size/590x404/210fd56e-ca7c-4162-b148-ac0327e63ad1.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/210fd56e-ca7c-4162-b148-ac0327e63ad1.jpg"
        },
        "name": "Rod Fussy",
        "slug": "rod-fussy",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/350164/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 125,
    "catalog_number": "BFR025",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2017-06-28T12:36:46-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 5,
      "name": "House",
      "slug": "house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/5/"
    },
    "id": 9485434,
    "image": null,
    "is_available_for_streaming": true,
    "isrc": "GBKQU1763907",
    "key": {
      "camelot_number": 1,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 1,
      "is_sharp": false,
      "is_flat": true,
      "letter": "A",
      "name": "Ab Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/1/"
    },
    "label_track_identifier": "1907616",
    "length": "4:43",
    "length_ms": 283337,
    "mix_name": "Mike McFly Remix",
    "name": "Dirty Kitten",
    "new_release_date": "2017-07-17",
    "pre_order": false,
    "pre_order_date": "2017-07-03",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2017-07-17",
    "release": {
      "id": 2058398,
      "name": "Dirty Kitten",
      "image": {
        "id": 16270440,
        "uri": "/images/products/dirty-kitten.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/628d26b1-0422-4185-90a1-389991013721.jpg"
      },
      "label": {
        "id": 53154,
        "name": "Billions",
        "image": {
          "id": 13238398,
          "uri": "https://geo-media.beatport.com/image_size/500x500/f43a6638-97e7-415a-9388-a5ebe35329b9.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/f43a6638-97e7-415a-9388-a5ebe35329b9.jpg"
        },
        "slug": "billions"
      },
      "slug": "dirty-kitten"
    },
    "remixers": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/5b6df461-feca-49a6-bd24-a1d015db10a8.LOFI.mp3",
    "sample_start_ms": 113334,
    "sample_end_ms": 233334,
    "slug": "dirty-kitten",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/9485434/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 124,
    "catalog_number": "HOH046",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2017-03-30T12:18:35-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 5,
      "name": "House",
      "slug": "house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/5/"
    },
    "id": 9173849,
    "image": {
      "id": 15739269,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/922344d2-e9ca-4416-8e04-a39280460355.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/922344d2-e9ca-4416-8e04-a39280460355.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU1733942",
    "key": {
      "camelot_number": 3,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 3,
      "is_sharp": false,
      "is_flat": true,
      "letter": "B",
      "name": "Bb Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/3/"
    },
    "label_track_identifier": "1927323",
    "length": "4:56",
    "length_ms": 296940,
    "mix_name": "Original Mix",
    "name": "One Hunnit",
    "new_release_date": "2017-04-24",
    "pre_order": false,
    "pre_order_date": "2017-04-10",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2017-04-24",
    "release": {
      "id": 1992860,
      "name": "One Hunnit",
      "image": {
        "id": 15735745,
        "uri": "/images/products/one-hunnit.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/78480ab4-e585-4a98-abba-8a506f689fea.jpg"
      },
      "label": {
        "id": 42127,
        "name": "House Of Hustle",
        "image": {
          "id": 22826430,
          "uri": "https://geo-media.beatport.com/image_size/500x500/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg"
        },
        "slug": "house-of-hustle"
      },
      "slug": "one-hunnit"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/e3975e21-16a5-4e3d-b23e-6a3093f5572a.LOFI.mp3",
    "sample_start_ms": 118776,
    "sample_end_ms": 238776,
    "slug": "one-hunnit",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/9173849/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 123,
    "catalog_number": "HOH046",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2017-03-30T12:18:35-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 18,
      "name": "Dubstep",
      "slug": "dubstep",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/18/"
    },
    "id": 9173851,
    "image": {
      "id": 15739367,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/5470736e-2256-4d43-882d-dd68b79edce5.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/5470736e-2256-4d43-882d-dd68b79edce5.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU1733944",
    "key": {
      "camelot_number": 6,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 18,
      "is_sharp": false,
      "is_flat": true,
      "letter": "B",
      "name": "Bb Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/18/"
    },
    "label_track_identifier": "1927325",
    "length": "5:56",
    "length_ms": 356307,
    "mix_name": "So Schway Remix",
    "name": "One Hunnit",
    "new_release_date": "2017-04-24",
    "pre_order": false,
    "pre_order_date": "2017-04-10",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2017-04-24",
    "release": {
      "id": 1992860,
      "name": "One Hunnit",
      "image": {
        "id": 15735745,
        "uri": "/images/products/one-hunnit.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/78480ab4-e585-4a98-abba-8a506f689fea.jpg"
      },
      "label": {
        "id": 42127,
        "name": "House Of Hustle",
        "image": {
          "id": 22826430,
          "uri": "https://geo-media.beatport.com/image_size/500x500/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg"
        },
        "slug": "house-of-hustle"
      },
      "slug": "one-hunnit"
    },
    "remixers": [
      {
        "id": 502741,
        "image": {
          "id": 15923286,
          "uri": "https://geo-media.beatport.com/image_size/590x404/4a40d76a-44d1-4bd7-84e0-0aab12297f58.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4a40d76a-44d1-4bd7-84e0-0aab12297f58.jpg"
        },
        "name": "So Schway",
        "slug": "so-schway",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/502741/"
      }
    ],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/5ccdc6c5-7cd4-41cd-9556-ad4935d5e20b.LOFI.mp3",
    "sample_start_ms": 142522,
    "sample_end_ms": 262522,
    "slug": "one-hunnit",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/9173851/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 125,
    "catalog_number": "HOH046",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2017-03-30T12:18:35-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 18,
      "name": "Dubstep",
      "slug": "dubstep",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/18/"
    },
    "id": 9173850,
    "image": {
      "id": 15739168,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/3f0cc1d3-e5dc-4588-a2ac-c47f098a33b1.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/3f0cc1d3-e5dc-4588-a2ac-c47f098a33b1.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU1733943",
    "key": {
      "camelot_number": 10,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 22,
      "is_sharp": false,
      "is_flat": false,
      "letter": "D",
      "name": "D Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/22/"
    },
    "label_track_identifier": "1927324",
    "length": "4:56",
    "length_ms": 296003,
    "mix_name": "Original Mix",
    "name": "Riddim",
    "new_release_date": "2017-04-24",
    "pre_order": false,
    "pre_order_date": "2017-04-10",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2017-04-24",
    "release": {
      "id": 1992860,
      "name": "One Hunnit",
      "image": {
        "id": 15735745,
        "uri": "/images/products/riddim.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/78480ab4-e585-4a98-abba-8a506f689fea.jpg"
      },
      "label": {
        "id": 42127,
        "name": "House Of Hustle",
        "image": {
          "id": 22826430,
          "uri": "https://geo-media.beatport.com/image_size/500x500/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg"
        },
        "slug": "house-of-hustle"
      },
      "slug": "one-hunnit"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/9f2414d4-80c6-4c7b-8a7d-7f1445df3a9d.LOFI.mp3",
    "sample_start_ms": 118401,
    "sample_end_ms": 238401,
    "slug": "riddim",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/9173850/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 124,
    "catalog_number": "HOH046",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2017-03-30T12:18:35-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 18,
      "name": "Dubstep",
      "slug": "dubstep",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/18/"
    },
    "id": 9173852,
    "image": {
      "id": 15739294,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/0b107475-3929-4c07-89d6-20b0db4c1e8e.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/0b107475-3929-4c07-89d6-20b0db4c1e8e.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBKQU1733945",
    "key": {
      "camelot_number": 4,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 4,
      "is_sharp": false,
      "is_flat": false,
      "letter": "F",
      "name": "F Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/4/"
    },
    "label_track_identifier": "1927326",
    "length": "6:34",
    "length_ms": 394846,
    "mix_name": "Francois Dillinger Remix",
    "name": "Riddim",
    "new_release_date": "2017-04-24",
    "pre_order": false,
    "pre_order_date": "2017-04-10",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2017-04-24",
    "release": {
      "id": 1992860,
      "name": "One Hunnit",
      "image": {
        "id": 15735745,
        "uri": "/images/products/riddim.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/78480ab4-e585-4a98-abba-8a506f689fea.jpg"
      },
      "label": {
        "id": 42127,
        "name": "House Of Hustle",
        "image": {
          "id": 22826430,
          "uri": "https://geo-media.beatport.com/image_size/500x500/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4a037ca0-5225-4bb7-8fb6-8c9685815112.jpg"
        },
        "slug": "house-of-hustle"
      },
      "slug": "one-hunnit"
    },
    "remixers": [
      {
        "id": 374964,
        "image": {
          "id": 5539565,
          "uri": "https://geo-media.beatport.com/image_size/590x404/0dc61986-bccf-49d4-8fad-6b147ea8f327.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/0dc61986-bccf-49d4-8fad-6b147ea8f327.jpg"
        },
        "name": "Francois Dillinger",
        "slug": "francois-dillinger",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/374964/"
      }
    ],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/345b507d-88c3-45cd-8427-1d37bfedeb9d.LOFI.mp3",
    "sample_start_ms": 157938,
    "sample_end_ms": 277938,
    "slug": "riddim",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/9173852/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      },
      {
        "id": 539358,
        "image": {
          "id": 5539565,
          "uri": "https://geo-media.beatport.com/image_size/590x404/0dc61986-bccf-49d4-8fad-6b147ea8f327.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/0dc61986-bccf-49d4-8fad-6b147ea8f327.jpg"
        },
        "name": "Tom Hammond",
        "slug": "tom-hammond",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/539358/"
      },
      {
        "id": 1111118,
        "image": {
          "id": 5539565,
          "uri": "https://geo-media.beatport.com/image_size/590x404/0dc61986-bccf-49d4-8fad-6b147ea8f327.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/0dc61986-bccf-49d4-8fad-6b147ea8f327.jpg"
        },
        "name": "Quinten 909",
        "slug": "quinten-909",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/1111118/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 102,
    "catalog_number": "ARDI3742C",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2017-03-07T11:06:08-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 3,
      "name": "Electronica",
      "slug": "electronica",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/3/"
    },
    "id": 9065059,
    "image": {
      "id": 37757112,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/fe16aff2-f3d7-4499-834d-b2a6de6c53a7.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/fe16aff2-f3d7-4499-834d-b2a6de6c53a7.png"
    },
    "is_available_for_streaming": true,
    "isrc": "NLF711601164",
    "key": {
      "camelot_number": 8,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 8,
      "is_sharp": false,
      "is_flat": false,
      "letter": "A",
      "name": "A Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/8/"
    },
    "label_track_identifier": "1133964781",
    "length": "2:54",
    "length_ms": 174129,
    "mix_name": "Original Mix",
    "name": "The End feat. Tom Hammond",
    "new_release_date": "2017-03-07",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2017-03-07",
    "release": {
      "id": 1972605,
      "name": "Chill Top 50 - Armada Music",
      "image": {
        "id": 37593790,
        "uri": "/images/products/the-end-feat-tom-hammond.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/f46506fb-9694-4fba-a59d-5d2297659f6e.jpg"
      },
      "label": {
        "id": 38,
        "name": "Armada Music Albums",
        "image": {
          "id": 25599968,
          "uri": "https://geo-media.beatport.com/image_size/500x500/19a80b8f-c721-4f77-b845-704468f21c15.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/19a80b8f-c721-4f77-b845-704468f21c15.jpg"
        },
        "slug": "armada-music-albums"
      },
      "slug": "chill-top-50-armada-music"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/fe16aff2-f3d7-4499-834d-b2a6de6c53a7.LOFI.mp3",
    "sample_start_ms": 69652,
    "sample_end_ms": 174129,
    "slug": "the-end-feat-tom-hammond",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/9065059/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 124875,
        "image": {
          "id": 37659139,
          "uri": "https://geo-media.beatport.com/image_size/590x404/b7c9e695-7696-4a3d-8f76-9f6dd39f1a4c.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/b7c9e695-7696-4a3d-8f76-9f6dd39f1a4c.jpg"
        },
        "name": "Double Drop",
        "slug": "double-drop",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/124875/"
      },
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 124,
    "catalog_number": "BLDR118",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2017-03-01T11:39:10-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 5,
      "name": "House",
      "slug": "house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/5/"
    },
    "id": 9044643,
    "image": {
      "id": 15523421,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/991d95ba-4119-41ed-908d-01471f6e3524.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/991d95ba-4119-41ed-908d-01471f6e3524.png"
    },
    "is_available_for_streaming": true,
    "isrc": "USLZJ1725335",
    "key": {
      "camelot_number": 1,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 1,
      "is_sharp": false,
      "is_flat": true,
      "letter": "A",
      "name": "Ab Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/1/"
    },
    "label_track_identifier": "799766",
    "length": "5:28",
    "length_ms": 328639,
    "mix_name": "Original Mix",
    "name": "Flipped It",
    "new_release_date": "2017-03-06",
    "pre_order": false,
    "pre_order_date": "2017-02-26",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2017-03-06",
    "release": {
      "id": 1968653,
      "name": "Build It Records: Starter Kit Vol. 1",
      "image": {
        "id": 15523321,
        "uri": "/images/products/flipped-it.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/9723f3e2-db6b-4257-ae0c-b78175a2e8df.jpg"
      },
      "label": {
        "id": 47037,
        "name": "Build It Records",
        "image": {
          "id": 11548664,
          "uri": "https://geo-media.beatport.com/image_size/500x500/ca28d132-56d2-4970-b88c-5be58b67a1a8.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/ca28d132-56d2-4970-b88c-5be58b67a1a8.jpg"
        },
        "slug": "build-it-records"
      },
      "slug": "build-it-records-starter-kit-vol-1"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/f3cfc6e3-65c5-4ff3-a75f-4dd5b19405fd.LOFI.mp3",
    "sample_start_ms": 131455,
    "sample_end_ms": 251455,
    "slug": "flipped-it",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/9044643/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 124,
    "catalog_number": "HOB003",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2016-12-01T15:13:33-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 5,
      "name": "House",
      "slug": "house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/5/"
    },
    "id": 8710923,
    "image": {
      "id": 14986602,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/a220c422-92ad-412d-87ba-5fea3dc4a068.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/a220c422-92ad-412d-87ba-5fea3dc4a068.png"
    },
    "is_available_for_streaming": true,
    "isrc": "GBLV61629069",
    "key": {
      "camelot_number": 9,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 21,
      "is_sharp": false,
      "is_flat": false,
      "letter": "G",
      "name": "G Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/21/"
    },
    "label_track_identifier": "1776960",
    "length": "5:11",
    "length_ms": 311187,
    "mix_name": "Original Mix",
    "name": "Clamchowda",
    "new_release_date": "2017-01-05",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2017-01-05",
    "release": {
      "id": 1909031,
      "name": "Those Filthy Bangerz We Play",
      "image": {
        "id": 14986385,
        "uri": "/images/products/clamchowda.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/17086bfd-d72a-489b-a834-231ba57479c7.jpg"
      },
      "label": {
        "id": 56412,
        "name": "House Of Bangerz",
        "image": {
          "id": 18074638,
          "uri": "https://geo-media.beatport.com/image_size/500x500/9b275f13-7938-4884-bd9a-2b62d7a737bc.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/9b275f13-7938-4884-bd9a-2b62d7a737bc.jpg"
        },
        "slug": "house-of-bangerz"
      },
      "slug": "those-filthy-bangerz-we-play"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/7cf55f28-db23-4c10-8f0a-178b6bb0cb4c.LOFI.mp3",
    "sample_start_ms": 124474,
    "sample_end_ms": 244474,
    "slug": "clamchowda",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/8710923/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 124,
    "catalog_number": "VSCR1608",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2016-11-07T18:37:53-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 12,
      "name": "Deep House",
      "slug": "deep-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/12/"
    },
    "id": 8596690,
    "image": {
      "id": 14808040,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/85d27757-9c35-466a-8f2d-916f65267387.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/85d27757-9c35-466a-8f2d-916f65267387.png"
    },
    "is_available_for_streaming": true,
    "isrc": "US83Z1661180",
    "key": {
      "camelot_number": 6,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 18,
      "is_sharp": false,
      "is_flat": true,
      "letter": "B",
      "name": "Bb Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/18/"
    },
    "label_track_identifier": "191630",
    "length": "5:52",
    "length_ms": 352246,
    "mix_name": "Original Mix",
    "name": "Lazer Boy",
    "new_release_date": "2016-11-21",
    "pre_order": false,
    "pre_order_date": "2016-11-14",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2016-11-21",
    "release": {
      "id": 1890337,
      "name": "Visceral 044",
      "image": {
        "id": 14806995,
        "uri": "/images/products/lazer-boy.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/a30b3ec9-1231-49a0-9d60-1b1d34e8fca1.jpg"
      },
      "label": {
        "id": 30985,
        "name": "Visceral",
        "image": {
          "id": 6790728,
          "uri": "https://geo-media.beatport.com/image_size/500x500/71e825be-ce6b-4ee5-a918-16a2e45d9b61.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/71e825be-ce6b-4ee5-a918-16a2e45d9b61.jpg"
        },
        "slug": "visceral"
      },
      "slug": "visceral-044"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/1dd2b8b0-d43c-475b-abc5-d0a62f372b12.LOFI.mp3",
    "sample_start_ms": 140898,
    "sample_end_ms": 260898,
    "slug": "lazer-boy",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/8596690/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 130408,
        "image": {
          "id": 11034501,
          "uri": "https://geo-media.beatport.com/image_size/590x404/600883c5-1909-48c7-a910-51f50d0f351e.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/600883c5-1909-48c7-a910-51f50d0f351e.jpg"
        },
        "name": "Quinten 909",
        "slug": "quinten-909",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/130408/"
      },
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      },
      {
        "id": 539358,
        "image": {
          "id": 5539565,
          "uri": "https://geo-media.beatport.com/image_size/590x404/0dc61986-bccf-49d4-8fad-6b147ea8f327.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/0dc61986-bccf-49d4-8fad-6b147ea8f327.jpg"
        },
        "name": "Tom Hammond",
        "slug": "tom-hammond",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/539358/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 102,
    "catalog_number": "ARVA837",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2016-11-08T13:20:09-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 3,
      "name": "Electronica",
      "slug": "electronica",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/3/"
    },
    "id": 8600251,
    "image": {
      "id": 14813665,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/05acf871-beac-4881-a162-e9f7452ebe1b.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/05acf871-beac-4881-a162-e9f7452ebe1b.png"
    },
    "is_available_for_streaming": true,
    "isrc": "NLF711601164",
    "key": {
      "camelot_number": 8,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 8,
      "is_sharp": false,
      "is_flat": false,
      "letter": "A",
      "name": "A Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/8/"
    },
    "label_track_identifier": "1133964781",
    "length": "2:54",
    "length_ms": 174129,
    "mix_name": "Original Mix",
    "name": "The End feat. Tom Hammond",
    "new_release_date": "2016-11-11",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2016-11-11",
    "release": {
      "id": 1890906,
      "name": "Armada Chill - Best Of 2016 - Extended Versions",
      "image": {
        "id": 14813075,
        "uri": "/images/products/the-end-feat-tom-hammond.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/92b40a65-96c4-43ad-906d-f0305a82a126.jpg"
      },
      "label": {
        "id": 43392,
        "name": "Armada Chill",
        "image": {
          "id": 9997625,
          "uri": "https://geo-media.beatport.com/image_size/500x500/4433b2a6-1bfb-4e5f-b689-e668f3332884.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4433b2a6-1bfb-4e5f-b689-e668f3332884.jpg"
        },
        "slug": "armada-chill"
      },
      "slug": "armada-chill-best-of-2016-extended-versions"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/370e1ca6-9aaa-4d98-a6be-6f98b73b40c2.LOFI.mp3",
    "sample_start_ms": 54129,
    "sample_end_ms": 174129,
    "slug": "the-end-feat-tom-hammond",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/8600251/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 123,
    "catalog_number": "EP017",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2016-09-06T13:17:54-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 5,
      "name": "House",
      "slug": "house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/5/"
    },
    "id": 8357455,
    "image": {
      "id": 14398998,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/f077eb36-71c5-4ad1-b440-1cd78866eb16.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/f077eb36-71c5-4ad1-b440-1cd78866eb16.png"
    },
    "is_available_for_streaming": true,
    "isrc": "US83Z1654829",
    "key": {
      "camelot_number": 3,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 15,
      "is_sharp": false,
      "is_flat": true,
      "letter": "D",
      "name": "Db Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/15/"
    },
    "label_track_identifier": "179410",
    "length": "6:16",
    "length_ms": 376000,
    "mix_name": "Original Mix",
    "name": "Notorious",
    "new_release_date": "2016-09-05",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2016-09-05",
    "release": {
      "id": 1847661,
      "name": "Friends, Vol. 4",
      "image": {
        "id": 14398981,
        "uri": "/images/products/notorious.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/0c570ab8-b2f1-468f-a024-70b4e5b369ce.jpg"
      },
      "label": {
        "id": 45870,
        "name": "East Project",
        "image": {
          "id": 10737244,
          "uri": "https://geo-media.beatport.com/image_size/500x500/5fef5286-8b25-45e1-907f-d2d03c36b114.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/5fef5286-8b25-45e1-907f-d2d03c36b114.jpg"
        },
        "slug": "east-project"
      },
      "slug": "friends-vol-4"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/4c80b769-f803-4bc5-8f6f-886ceae0cb04.LOFI.mp3",
    "sample_start_ms": 150400,
    "sample_end_ms": 270400,
    "slug": "notorious",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/8357455/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 125,
    "catalog_number": "KYB017",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2016-08-15T15:52:38-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 8278619,
    "image": {
      "id": 14270013,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/e86949cd-8930-4339-93b0-4694d49e1248.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/e86949cd-8930-4339-93b0-4694d49e1248.png"
    },
    "is_available_for_streaming": true,
    "isrc": "US83Z1654422",
    "key": {
      "camelot_number": 2,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 30,
      "is_sharp": true,
      "is_flat": false,
      "letter": "D",
      "name": "D# Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/30/"
    },
    "label_track_identifier": "183867",
    "length": "5:26",
    "length_ms": 326069,
    "mix_name": "Original Mix",
    "name": "Kill Joy",
    "new_release_date": "2016-08-29",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2016-08-29",
    "release": {
      "id": 1833260,
      "name": "Kill Joy",
      "image": {
        "id": 14269977,
        "uri": "/images/products/kill-joy.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/84d8df0f-9f24-442b-89da-ffac02a08353.jpg"
      },
      "label": {
        "id": 37698,
        "name": "Kyubu Records",
        "image": {
          "id": 8759911,
          "uri": "https://geo-media.beatport.com/image_size/500x500/e8ba329f-7e3e-4ba2-a7f0-a41ddf0e25e2.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/e8ba329f-7e3e-4ba2-a7f0-a41ddf0e25e2.jpg"
        },
        "slug": "kyubu-records"
      },
      "slug": "kill-joy"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/1235057d-8444-4ac9-929a-daa1b18ed1eb.LOFI.mp3",
    "sample_start_ms": 130427,
    "sample_end_ms": 250427,
    "slug": "kill-joy",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/8278619/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 124,
    "catalog_number": "KYB017",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2016-08-15T15:52:38-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 12,
      "name": "Deep House",
      "slug": "deep-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/12/"
    },
    "id": 8278620,
    "image": {
      "id": 14270039,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/5fe0bb68-5a7a-4105-a467-341d3f5ca5db.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/5fe0bb68-5a7a-4105-a467-341d3f5ca5db.png"
    },
    "is_available_for_streaming": true,
    "isrc": "US83Z1654423",
    "key": {
      "camelot_number": 6,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 18,
      "is_sharp": false,
      "is_flat": true,
      "letter": "B",
      "name": "Bb Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/18/"
    },
    "label_track_identifier": "183868",
    "length": "5:52",
    "length_ms": 352246,
    "mix_name": "Original Mix",
    "name": "Lazer Boy",
    "new_release_date": "2016-08-29",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2016-08-29",
    "release": {
      "id": 1833260,
      "name": "Kill Joy",
      "image": {
        "id": 14269977,
        "uri": "/images/products/lazer-boy.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/84d8df0f-9f24-442b-89da-ffac02a08353.jpg"
      },
      "label": {
        "id": 37698,
        "name": "Kyubu Records",
        "image": {
          "id": 8759911,
          "uri": "https://geo-media.beatport.com/image_size/500x500/e8ba329f-7e3e-4ba2-a7f0-a41ddf0e25e2.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/e8ba329f-7e3e-4ba2-a7f0-a41ddf0e25e2.jpg"
        },
        "slug": "kyubu-records"
      },
      "slug": "kill-joy"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/97f2c682-e08b-4b79-9f77-516dc734e9a3.LOFI.mp3",
    "sample_start_ms": 140898,
    "sample_end_ms": 260898,
    "slug": "lazer-boy",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/8278620/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 130408,
        "image": {
          "id": 11034501,
          "uri": "https://geo-media.beatport.com/image_size/590x404/600883c5-1909-48c7-a910-51f50d0f351e.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/600883c5-1909-48c7-a910-51f50d0f351e.jpg"
        },
        "name": "Quinten 909",
        "slug": "quinten-909",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/130408/"
      },
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      },
      {
        "id": 539358,
        "image": {
          "id": 5539565,
          "uri": "https://geo-media.beatport.com/image_size/590x404/0dc61986-bccf-49d4-8fad-6b147ea8f327.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/0dc61986-bccf-49d4-8fad-6b147ea8f327.jpg"
        },
        "name": "Tom Hammond",
        "slug": "tom-hammond",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/539358/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 102,
    "catalog_number": "ARDI3652",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2016-05-13T14:51:50-06:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 3,
      "name": "Electronica",
      "slug": "electronica",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/3/"
    },
    "id": 7964498,
    "image": {
      "id": 27079987,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/c3128a80-a5ae-4349-aad3-4c2461e7cc34.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/c3128a80-a5ae-4349-aad3-4c2461e7cc34.png"
    },
    "is_available_for_streaming": true,
    "isrc": "NLF711601164",
    "key": {
      "camelot_number": 8,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 8,
      "is_sharp": false,
      "is_flat": false,
      "letter": "A",
      "name": "A Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/8/"
    },
    "label_track_identifier": "1133964781",
    "length": "2:54",
    "length_ms": 174129,
    "mix_name": "Original Mix",
    "name": "The End feat. Tom Hammond",
    "new_release_date": "2016-06-03",
    "pre_order": false,
    "pre_order_date": "2016-05-16",
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2016-06-03",
    "release": {
      "id": 1772647,
      "name": "Armada Chill 2016",
      "image": {
        "id": 27079847,
        "uri": "/images/products/the-end-feat-tom-hammond.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/0a9a34da-4702-47b7-9004-77c93293e89d.jpg"
      },
      "label": {
        "id": 38,
        "name": "Armada Music Albums",
        "image": {
          "id": 25599968,
          "uri": "https://geo-media.beatport.com/image_size/500x500/19a80b8f-c721-4f77-b845-704468f21c15.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/19a80b8f-c721-4f77-b845-704468f21c15.jpg"
        },
        "slug": "armada-music-albums"
      },
      "slug": "armada-chill-2016"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/8df3d1c4-9ed5-46f7-93b0-eceaa03dae58.LOFI.mp3",
    "sample_start_ms": 54129,
    "sample_end_ms": 174129,
    "slug": "the-end-feat-tom-hammond",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/7964498/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 130408,
        "image": {
          "id": 11034501,
          "uri": "https://geo-media.beatport.com/image_size/590x404/600883c5-1909-48c7-a910-51f50d0f351e.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/600883c5-1909-48c7-a910-51f50d0f351e.jpg"
        },
        "name": "Quinten 909",
        "slug": "quinten-909",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/130408/"
      },
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      },
      {
        "id": 539358,
        "image": {
          "id": 5539565,
          "uri": "https://geo-media.beatport.com/image_size/590x404/0dc61986-bccf-49d4-8fad-6b147ea8f327.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/0dc61986-bccf-49d4-8fad-6b147ea8f327.jpg"
        },
        "name": "Tom Hammond",
        "slug": "tom-hammond",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/539358/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 102,
    "catalog_number": "ARCHLL034",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2016-02-24T14:15:05-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 3,
      "name": "Electronica",
      "slug": "electronica",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/3/"
    },
    "id": 7689956,
    "image": {
      "id": 13281905,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/3cddeaae-b7be-4735-b115-32eabaccf384.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/3cddeaae-b7be-4735-b115-32eabaccf384.png"
    },
    "is_available_for_streaming": true,
    "isrc": "NLF711601164",
    "key": {
      "camelot_number": 8,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 8,
      "is_sharp": false,
      "is_flat": false,
      "letter": "A",
      "name": "A Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/8/"
    },
    "label_track_identifier": "1133964781",
    "length": "2:54",
    "length_ms": 174129,
    "mix_name": "Original Mix",
    "name": "The End feat. Tom Hammond",
    "new_release_date": "2016-03-30",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2016-03-30",
    "release": {
      "id": 1717880,
      "name": "The End",
      "image": {
        "id": 13281744,
        "uri": "/images/products/the-end-feat-tom-hammond.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/b9db20aa-4f90-460b-a68c-aae36cd8304f.jpg"
      },
      "label": {
        "id": 43392,
        "name": "Armada Chill",
        "image": {
          "id": 9997625,
          "uri": "https://geo-media.beatport.com/image_size/500x500/4433b2a6-1bfb-4e5f-b689-e668f3332884.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/4433b2a6-1bfb-4e5f-b689-e668f3332884.jpg"
        },
        "slug": "armada-chill"
      },
      "slug": "the-end"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/ddc22693-09f4-4f5b-af96-fca038f3cad2.LOFI.mp3",
    "sample_start_ms": 54129,
    "sample_end_ms": 174129,
    "slug": "the-end-feat-tom-hammond",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/7689956/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 125,
    "catalog_number": "KYB012",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2016-02-01T14:16:07-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 7602634,
    "image": {
      "id": 13138828,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/922b33d8-e868-4ab2-84a2-6143b3c0b960.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/922b33d8-e868-4ab2-84a2-6143b3c0b960.png"
    },
    "is_available_for_streaming": true,
    "isrc": "US83Z1638568",
    "key": {
      "camelot_number": 10,
      "camelot_letter": "B",
      "chord_type": {
        "id": 2,
        "name": "Major",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/2/"
      },
      "id": 22,
      "is_sharp": false,
      "is_flat": false,
      "letter": "D",
      "name": "D Major",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/22/"
    },
    "label_track_identifier": "153175",
    "length": "5:47",
    "length_ms": 347378,
    "mix_name": "Original",
    "name": "Kill Switch",
    "new_release_date": "2016-02-15",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2016-02-15",
    "release": {
      "id": 1701586,
      "name": "Kill Switch",
      "image": {
        "id": 13138565,
        "uri": "/images/products/kill-switch.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/49a243d3-5058-42fe-b193-4690500f34ae.jpg"
      },
      "label": {
        "id": 37698,
        "name": "Kyubu Records",
        "image": {
          "id": 8759911,
          "uri": "https://geo-media.beatport.com/image_size/500x500/e8ba329f-7e3e-4ba2-a7f0-a41ddf0e25e2.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/e8ba329f-7e3e-4ba2-a7f0-a41ddf0e25e2.jpg"
        },
        "slug": "kyubu-records"
      },
      "slug": "kill-switch"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/2af043c4-9269-456b-ac68-2c8e30e338ca.LOFI.mp3",
    "sample_start_ms": 138951,
    "sample_end_ms": 258951,
    "slug": "kill-switch",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/7602634/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 122,
    "catalog_number": "KYB012",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2016-02-01T14:16:07-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 12,
      "name": "Deep House",
      "slug": "deep-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/12/"
    },
    "id": 7602635,
    "image": {
      "id": 13138742,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/5491c436-10d6-4ccf-b105-7dc1cb81276f.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/5491c436-10d6-4ccf-b105-7dc1cb81276f.png"
    },
    "is_available_for_streaming": true,
    "isrc": "US83Z1638569",
    "key": {
      "camelot_number": 5,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 5,
      "is_sharp": false,
      "is_flat": false,
      "letter": "C",
      "name": "C Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/5/"
    },
    "label_track_identifier": "153176",
    "length": "6:21",
    "length_ms": 381639,
    "mix_name": "Original",
    "name": "Monrovia",
    "new_release_date": "2016-02-15",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2016-02-15",
    "release": {
      "id": 1701586,
      "name": "Kill Switch",
      "image": {
        "id": 13138565,
        "uri": "/images/products/monrovia.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/49a243d3-5058-42fe-b193-4690500f34ae.jpg"
      },
      "label": {
        "id": 37698,
        "name": "Kyubu Records",
        "image": {
          "id": 8759911,
          "uri": "https://geo-media.beatport.com/image_size/500x500/e8ba329f-7e3e-4ba2-a7f0-a41ddf0e25e2.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/e8ba329f-7e3e-4ba2-a7f0-a41ddf0e25e2.jpg"
        },
        "slug": "kyubu-records"
      },
      "slug": "kill-switch"
    },
    "remixers": [],
    "sale_type": {
      "id": 4,
      "name": "albumOnly",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/4/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/804e661b-b43c-46c0-bc11-d7e805540de5.LOFI.mp3",
    "sample_start_ms": 152655,
    "sample_end_ms": 272655,
    "slug": "monrovia",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/7602635/",
    "is_hype": false
  },
  {
    "artists": [
      {
        "id": 534593,
        "image": {
          "id": 27385660,
          "uri": "https://geo-media.beatport.com/image_size/590x404/521559f4-b15f-4286-bd13-eb8483d92729.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/521559f4-b15f-4286-bd13-eb8483d92729.jpg"
        },
        "name": "Mike McFly",
        "slug": "mike-mcfly",
        "url": "https://api-internal.beatportprod.com/v4/catalog/artists/534593/"
      }
    ],
    "publish_status": "published",
    "available_worldwide": true,
    "bpm": 124,
    "catalog_number": "KYB012",
    "current_status": {
      "id": 10,
      "name": "General Content",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/current-status/10/"
    },
    "encoded_date": "2016-02-01T14:16:07-07:00",
    "exclusive": false,
    "free_downloads": [],
    "free_download_start_date": null,
    "free_download_end_date": null,
    "genre": {
      "id": 11,
      "name": "Tech House",
      "slug": "tech-house",
      "url": "https://api-internal.beatportprod.com/v4/catalog/genres/11/"
    },
    "id": 7602636,
    "image": {
      "id": 13138786,
      "uri": "https://geo-media.beatport.com/image_size/1500x250/83da9767-dd38-4e03-8b7a-a5964da560a6.png",
      "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/83da9767-dd38-4e03-8b7a-a5964da560a6.png"
    },
    "is_available_for_streaming": true,
    "isrc": "US83Z1638570",
    "key": {
      "camelot_number": 1,
      "camelot_letter": "A",
      "chord_type": {
        "id": 1,
        "name": "Minor",
        "url": "https://api-internal.beatportprod.com/v4/catalog/chord-types/1/"
      },
      "id": 1,
      "is_sharp": false,
      "is_flat": true,
      "letter": "A",
      "name": "Ab Minor",
      "url": "https://api-internal.beatportprod.com/v4/catalog/keys/1/"
    },
    "label_track_identifier": "153177",
    "length": "7:20",
    "length_ms": 440655,
    "mix_name": "Orignal",
    "name": "Zdarling",
    "new_release_date": "2016-02-15",
    "pre_order": false,
    "pre_order_date": null,
    "price": {
      "code": "GBP",
      "symbol": "£",
      "value": 1.14,
      "display": "£1.14"
    },
    "publish_date": "2016-02-15",
    "release": {
      "id": 1701586,
      "name": "Kill Switch",
      "image": {
        "id": 13138565,
        "uri": "/images/products/zdarling.jpg",
        "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/49a243d3-5058-42fe-b193-4690500f34ae.jpg"
      },
      "label": {
        "id": 37698,
        "name": "Kyubu Records",
        "image": {
          "id": 8759911,
          "uri": "https://geo-media.beatport.com/image_size/500x500/e8ba329f-7e3e-4ba2-a7f0-a41ddf0e25e2.jpg",
          "dynamic_uri": "https://geo-media.beatport.com/image_size/{w}x{h}/e8ba329f-7e3e-4ba2-a7f0-a41ddf0e25e2.jpg"
        },
        "slug": "kyubu-records"
      },
      "slug": "kill-switch"
    },
    "remixers": [],
    "sale_type": {
      "id": 1,
      "name": "purchase",
      "url": "https://api-internal.beatportprod.com/v4/auxiliary/sale-types/1/"
    },
    "sample_url": "https://geo-samples.beatport.com/track/0b297b91-4e15-411d-94f6-2a029f4aa5c5.LOFI.mp3",
    "sample_start_ms": 176262,
    "sample_end_ms": 296262,
    "slug": "zdarling",
    "sub_genre": null,
    "url": "https://api-internal.beatportprod.com/v4/catalog/tracks/7602636/",
    "is_hype": false
  }
];

export default dataTracks


export function getTrackBySlug(slug:number) {
  return dataTracks.find((track) => track.slug === slug)
}
