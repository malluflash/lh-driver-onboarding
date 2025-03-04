import LaundryheapLogo from "../assets/logo";

function PageLayout({ children, title, subtitle, compact = false }) {
  return (
    <div className="laundryheap-page">
      <LaundryheapLogo/>
      
      {title && (
        <h1 className={`text-center text-2xl mt-6 mb-8 font-medium animate-slide-up ${compact ? "text-3xl" : ""}`}>
          {title}
        </h1>
      )}
      
      {subtitle && (
        <h2 className="text-center text-xl mt-6 mb-8 font-medium animate-slide-up">
          {subtitle}
        </h2>
      )}
      
      <div className="flex-1 w-full flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default PageLayout;
