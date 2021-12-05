import axios from 'axios'

const Quiz = ({ categoryData }) => {


    let catContent = null;
    if (categoryData) {
        catContent = categoryData.data.map((El, index) => {
            return <div key={index} className="flex flex-wrap -m-4">
                <div className="xl:w-1/3 md:w-1/2 p-4">
                    <div className="border border-gray-200 p-6 rounded-lg">
                        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{El.attributes.categoryName}</h2>
                        <p className="leading-relaxed text-base">{El.attributes.catDescription}</p>
                        <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                    </div>
                </div>
            </div>
        });

    }

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pick your Quiz</h1>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
                </div>

                {catContent}

            </div>
        </section>
    );
}

export default Quiz;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library

    const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + '/api/categories');
    const categoryData = response.data;

    // will receive `categoryData` as a prop at build time
    return {
        props: {
            categoryData,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every hour
        revalidate: 3600, // In seconds
    }
}