import { CategoriesList } from "../../components/categories-list"
import Heading from "../../components/heading"
import { ProductSection } from "../../components/product-section"

const page = ({params}) => {
  const {category_slug} = params;
  return (
    <div>
      <Heading color="bg-orange-700" title={`your search term "${category_slug}"`} subtitle="total 0 Product found"/>
      <div className="flex flex-1 md:flex-row flex-col px-10 mt-5">
        <div className='w-3/12'>
          <CategoriesList/>
        </div>
        <div className='9/12'>
          <ProductSection/>
        </div>
      </div>   
    </div>
  )
}

export default page