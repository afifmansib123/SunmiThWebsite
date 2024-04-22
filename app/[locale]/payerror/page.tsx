import Head from 'next/head';
import MainHeader from "@/components/layout/Header";
const errorpage = () => {
    return(
        <>
            <Head>
                <link rel="icon" href={'/favicon.ico'} />
            </Head>

            <div className='flex justify-center flex-row'>
                <img className="h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-800 mt-10 mb-10" src="/images/error.png" alt="image description" />
            </div>
            <div className='flex justify-center flex-row'>
            <p className="mb-10 mt-10 text-lg text-black md:text-xl dark:text-gray-400">There Was an error in Payment</p>
            </div>

            <MainHeader path={"/"} />

        </>
    )

}
export default errorpage