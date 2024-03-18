import { cn } from "@/lib/utils";

const BlogHero = ({
  title,
  description,
  images,
}: {
  title: string;
  description: string;
  images: {
    mobile: string;
    desktop: string;
  };
}) => {
  return (
    <div className="  relative">
      <div
        className={cn(
          `bg-[${images.mobile}] lg:bg-[${images.desktop}]  flex  relative  bg-center bg-cover h-[180px] lg:h-[378px]`
        )}
      >
        <div className="  flex container text-white flex-col  justify-center">
          <div className=" lg:max-w-[700px]  space-y-3  ">
            <h2 className=" text-xl sm:text-2xl xl:text-4xl font-roboto ">
              {title}
            </h2>
            <p className=" text-xs sm:text-sm opacity-[0.6] ">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
