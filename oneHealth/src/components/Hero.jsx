import back from '/maleNurse.avif';
import { Button } from './helper/Button';
import { Helmet } from 'react-helmet';

export function Hero() {
  const toContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Preload the LCP image */}
      <Helmet>
        <link rel="preload" as="image" href={back} />
      </Helmet>

      <div className="relative lg:mt-0 lg:min-h-screen">
        {/* Background Image for Large Screens */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 hidden lg:block" 
          style={{ backgroundImage: `url(${back})` }}
        ></div>

        <div className="relative bg-secondary lg:bg-transparent"></div>

        {/* Responsive Image for Smaller Screens */}
        <div className="lg:hidden mt-20">
          <img 
            src={back} 
            alt="background" 
            className="w-full h-auto" 
            width="800" 
            height="600"
            sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
          />
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12 lg:py-32">
          <div className="relative max-w-2xl lg:max-w-3xl z-50">
            <div className="text-primary space-y-6">
              <h1 className="font-lora text-3xl md:text-4xl lg:text-5xl">
                Discover Quality Care
              </h1>
              <h2 className="font-mont text-xl md:text-2xl lg:text-3xl">
                Customized and Reliable Health Care Right at your Home
              </h2>
              <p className="font-inter text-lg md:text-lg lg:max-w-2xl">
                Skip the waiting rooms—experience top-quality healthcare at home. Our experts provide personalized medical services tailored to your well-being.
              </p>

              <div className="pt-8">
                <button onClick={toContact} className="cursor-pointer">
                  <Button 
                    text='Get Started' 
                    bg='bg-primary' 
                    color='text-secondary' 
                    width='w-52' 
                    fntSize='text-2xl' 
                    action={true} 
                  />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
