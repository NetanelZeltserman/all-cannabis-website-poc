import Button from "../components/button";

export default function HeroSection() {
  return (
    <div className="w-full h-full grid container lg:grid-cols-2 items-center justify-items-center gap-5 my-12">
        <div className="order-2 lg:order-1 flex flex-col justify-center items-start">
            <p className="text-4xl font-medium md:text-7xl text-accentLight">קנאביס רפואי</p>
            <p className="text-4xl font-medium text-secondary md:text-7xl">איפה, בכמה, מתי?</p>
            <div className="space-y-2 md:space-y-0 md:space-x-4 md:rtl:space-x-reverse">
                <Button variant="primary">גלה ממש פה!</Button>
                <Button variant="secondary">ספר לי עוד</Button>
            </div>
        </div>
        <div className="order-1 lg:order-2">
            <img className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]" 
                src="/img/cannabis-leaf.png"
                alt="Cannabis Leaf"  
           />
        </div>
    </div>
  );
}
