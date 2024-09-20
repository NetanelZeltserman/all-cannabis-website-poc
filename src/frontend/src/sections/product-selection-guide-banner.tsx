import ExternalLinkIcon from "../components/icons/ExternalLinkIcon";
import Button from "../components/button";

const guideUrl = `https://www.xn--4dbcyzi5a.com/${encodeURIComponent('פרח-רפואי-איך-לבחור-זן-קנאביס-מתאים-מבח')}`;

export default function ProductSelectionGuideBanner() {
    return (
      <div className="w-full relative">
        <div className="absolute inset-0 bg-[url('img/cannabis-banner.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-white p-8">
          <div className="flex flex-col items-center justify-center">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-2 text-white">איך אני בוחר את המוצר המתאים לי?</h2>
              <p className="mb-4 text-gray-300">יש לנו מאמר מקצועי שיעזור לך להבין מה הזן המתאים לך</p>
            </div>
            <Button
              buttonVariant="primary"
              onClick={() => window.open(guideUrl, "_blank", "noopener,noreferrer")}
              sx={{
                '&:focus': {
                  outline: 'none',
                  boxShadow: 'none',
                },
              }}
            >
              <span className="text-white font-bold ml-2 text-lg">גלה איך</span>
              <ExternalLinkIcon />
            </Button>
          </div>
        </div>
      </div>
    )
  }