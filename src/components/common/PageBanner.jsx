// components/common/PageBanner.jsx
import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const PageBanner = ({ title, subtitle, backgroundImage, breadcrumbs }) => {
  // Extract the image path from the backgroundImage string
  const imagePath = backgroundImage?.replace(/^url\(['"](.+)['"]\)$/, '$1') || '/images/placeholder.jpg';

  return (
    <div style={{ position: "relative", width: "100%", height: "40vh", minHeight: "320px" }}>
      {/* Direct image element with absolute positioning */}
      <img 
        src={imagePath}
        alt={title}
        style={{ 
          width: "100%", 
          height: "100%", 
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0
        }}
        onError={(e) => {
          console.log('Failed to load banner image:', imagePath);
          e.target.onerror = null;
          e.target.src = '/images/placeholder.jpg';
        }}
      />
      
      {/* Dark overlay */}
      <div style={{ 
        position: "absolute", 
        top: 0, 
        left: 0, 
        width: "100%", 
        height: "100%", 
        backgroundColor: "rgba(0,0,0,0.4)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
        {/* Content */}
        <div style={{ textAlign: "center", color: "white", padding: "0 20px" }}>
          <h1 style={{ 
            fontSize: "2.5rem", 
            fontWeight: "bold", 
            marginBottom: "1rem" 
          }}>
            {title}
          </h1>
          {subtitle && (
            <p style={{ 
              fontSize: "1.25rem", 
              marginBottom: "1rem" 
            }}>
              {subtitle}
            </p>
          )}
        </div>
        
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <div style={{ 
            position: "absolute", 
            bottom: "1.5rem", 
            left: 0, 
            right: 0, 
            display: "flex", 
            justifyContent: "center" 
          }}>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "8px", 
              color: "white" 
            }}>
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <ChevronRight style={{ width: "16px", height: "16px" }} />}
                  {crumb.href ? (
                    <Link 
                      href={crumb.href}
                      style={{ 
                        color: "white", 
                        textDecoration: "none",
                        transition: "all 0.2s"
                      }}
                      onMouseOver={(e) => { e.target.style.textDecoration = "underline"; }}
                      onMouseOut={(e) => { e.target.style.textDecoration = "none"; }}
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
    </div>
  );
};

export default PageBanner;