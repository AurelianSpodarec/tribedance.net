import Link from "next/link"

import { IProduct } from "@/data/dataProducts"
import { formatPrice } from "@/lib/utils"

function ProductCardItem({ item }: { item: IProduct }) {
  return (
    <Link href={`/shop/${item.slug}`}>
      <div className="text-gray-50">
        {/* <img src={`/images/products/${item.thumbnail}`} /> */}
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

export default ProductCardItem
