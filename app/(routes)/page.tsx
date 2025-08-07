import getBanner from "@/actions/get-banner";
import getProducts from "@/actions/get-products";
import Banner from "@/components/banner";
import ProducList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0

const HomePage = async () => {
    const products = await getProducts({isFeatured: true})
    const banner = await getBanner("fc4385fe-e180-4723-b093-0999c0e73a99")

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Banner data={banner} />
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProducList title="Produk Unggulan" items={products} />
            </div>
        </div>
        </Container>
    )
}

export default HomePage;