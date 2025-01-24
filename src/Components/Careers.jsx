import { careers } from "../constants";
import Heading from "./Heading";
import Section from "./section";
import Arrow from "../assets/assets/svg/Arrow";
import ClipPath from "../assets/assets/svg/ClipPath";
import { GradientLight } from "./design/Careers";



const Careers = () => {
    return (
        <Section id="careers">
          <div className="container relative z-2">
            <Heading
              className="md:max-w-md lg:max-w-2xl"
              title="Your talent, our platform – let’s create excellence together."
            />
    
            <div className="flex flex-wrap gap-10 mb-10">
              {careers.map((item) => (
                <div
                  className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                  style={{
                    backgroundImage: `url(${item.backgroundUrl})`,
                  }}
                  key={item.id}
                >
                 
                  <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                    <h5 className="h5 mb-5">{item.title}</h5>
                    <p className="body-2 mb-6 text-n-3">{item.text}</p>
                   
                    <div className="flex items-center mt-auto">
                      <img
                        src={item.iconUrl}
                        width={48}
                        height={48}
                        alt={item.title}
                      />
                      <a
                      href="https://www.linkedin.com/company/sainar-solutions-inc/jobs/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider"
                      >
                      Apply on LinkedIn
                      </a>
                    <Arrow /> 
                    </div>
                  </div>
                  
    
                  {item.light && <GradientLight />}
    
                  <div
                    className="absolute inset-0.5 bg-n-8"
                    style={{ clipPath: "url(#careers)" }}
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                      {item.imageUrl && (
                        <img
                          src={item.imageUrl}
                          width={380}
                          height={362}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>
                  <ClipPath />
                </div>
              ))}
            </div>
          </div>
         
        </Section>
        
      );
    };
export default Careers;


