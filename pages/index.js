import Head from "next/head";
import Header from "@/components/Header";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>StayFood | Landingpage</title>
      </Head>
      <Header />

      {/* Main Content Start */}
      <main className="container">
        {/* Section Main Menu Start */}
        <section>
          <div className="flex items-center justify-between gap-x-5">
            <div className="w-6/12">
              <p className="text-sm font-light text-primary uppercase mb-0">GET 30% FREE IN FIRST ORDER</p>
              <h1 className="text-[56px] font-bold text-primary capitalize my-6">Try Our Food & Enjoy With Family Anytime</h1>
              <p className="text-sm font-light text-primary max-w-sm mb-0">
                Just confirm your order and enjoy our traditional food, make a great day with delicious and healthy food
              </p>
              <div className="flex items-center gap-x-6 mt-[70px]">
                <Button extraclass="btn-order-now text-base font-bold text-white bg-lemonade-500">
                  Order Now
                </Button>
                <h5 className="text-2xl font-medium mb-0">
                  <span className="text-xs font-light block mb-1">ONLY</span>
                  $3.57
                </h5>
              </div>
            </div>

            <div className="w-6/12">
              <div className="wp-image-hero h-full w-full">
                <img src="/images/contents/menu-hero.png" alt="Main Menu" />
              </div>
            </div>
          </div>
        </section>
        {/* Section Main Menu End */}

        {/* Section Footer Menu Start */}
        <section className="my-[80px]">
          <div className="flex items-center gap-x-9">
            <div className="w-4/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas consectetur accusamus voluptatem quia perspiciatis corrupti, quos eos assumenda velit. Ea nisi incidunt, consequatur quos architecto explicabo alias, labore repellendus veritatis sit enim unde cumque reprehenderit maiores deleniti vel libero laborum, temporibus expedita! Quae, nemo dignissimos laudantium aspernatur nesciunt ipsum facilis.
            </div>
            <div className="w-4/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, facilis? Molestiae, in fugiat velit reiciendis quia eveniet porro, cumque quo cum harum facilis maxime laboriosam incidunt dolorem? Pariatur facilis ab tenetur quibusdam incidunt dignissimos impedit numquam ratione magni, alias quaerat, quia iste provident? Consectetur ipsum repellendus pariatur, sapiente veniam nostrum!
            </div>
            <div className="w-4/12">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi ut nulla impedit quam reprehenderit voluptas quis, adipisci quidem nam quia ratione amet beatae praesentium odit exercitationem commodi labore! Dolores dolor architecto voluptate eius quas numquam magni maxime expedita iste natus omnis et nostrum iure, laborum repudiandae dolorem perferendis distinctio. Distinctio!
            </div>
          </div>
        </section>
        {/* Section Footer Menu End */}
      </main>
      {/* Main Content End */}
    </>
  )
}
