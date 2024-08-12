import Link from "next/link"

import { formatPrice } from "@/lib/utils"
import { ITrack } from "@/data/dataTracks"

function ProductCardItem({ item }: { item: ITrack }) {
  return (
    <Link href={`/shop/${item.slug}`}>
      <div className="text-gray-50">
        <img src={`${item.release.image.uri}`} />
        <div>
          <h3 className="text-xl font-bold">{item.name}</h3>

          <div className="flex items-center justify-between">
            <span>{item.bpm}BPM</span>
            <span>{item.price.display}</span>
            <span>{item.release.label.name}</span>
            {/* <span>Mike McFly</span> */}
            {/* {formatPrice(item.price.amount, item.price.currency)} */}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCardItem
