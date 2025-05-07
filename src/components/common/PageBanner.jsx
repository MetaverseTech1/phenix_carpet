// components/common/PageBanner.jsx
import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const PageBanner = ({ title, subtitle, backgroundImage, breadcrumbs }) => {
  return (
    <div
      className="relative w-full h-[40vh] min-h-[320px] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>

      {/* Breadcrumbs */}
      {breadcrumbs && (
        <div className="absolute bottom-6 left-0 right-0 flex justify-center">
          <div className="flex items-center space-x-2 text-white text-sm">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && <ChevronRight className="w-4 h-4" />}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:underline transition-all"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PageBanner;