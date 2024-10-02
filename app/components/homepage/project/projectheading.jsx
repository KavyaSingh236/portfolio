export default function ProjectHeading() {
    return (
      <>
        {/* Wider gradient line */}
        <div id="projects" className="flex justify-center -translate-y-[1px]">
          <div className="w-full">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
          </div>
        </div>
  
        {/* Projects heading with shine effect */}
        <div  className="flex justify-center my-5 lg:py-8">
          <div className="flex items-center">
            <span className="w-32 h-[2px] bg-[#1a1443]"></span>
            <span className="relative bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md overflow-hidden">
              {/* Shine effect on Projects */}
              <span className="shine">Projects</span>
            </span>
            <span className="w-32 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>
  
        {/* Shine effect styling */}
        <style jsx>{`
          .shine {
            position: relative;
            display: inline-block;
          }
  
          .shine::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              120deg,
              transparent,
              rgba(255, 255, 255, 0.4),
              transparent
            );
            animation: shine 1.5s infinite;
          }
  
          @keyframes shine {
            to {
              left: 100%;
            }
          }
        `}</style>
      </>
    );
  }
  