import React from "react";
import YouTube from "react-youtube";

import * as Icon from "@components/Icon";

type HeaderProps = {
  url?: string;
};

const Header = ({ url = "https://nextjs.org" }: Readonly<HeaderProps>) => {
  const encodedUrl = encodeURIComponent(url);
  const [videoIsVisibile, setVideoIsVisible] = React.useState(false);

  return (
    <header>
      <div className="header">
        <div className="wrap">
          <div className="crown">
            <div className="logo">
              <Icon.Logo />
            </div>

            <div className="share">
              <span>Share This:</span>
              <a
                className="share-link"
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon.Facebook />
              </a>
              <a
                className="share-link"
                href={`https://twitter.com/intent/tweet?text=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon.Twitter />
              </a>
            </div>
          </div>

          <div className="banner">
            <h1>
              Welcome Chiefs fans! Be a Champion of Commerce. Shop & Dine in St.
              Joseph!
            </h1>

            <img
              style={{
                width: "100%",
                height: "auto",
                border: "1rem solid white",
                borderRadius: "6px",
              }}
              src="/images/chiefs.jpg"
            />

            <p>
              Check out our listings below of local and national restaurants and
              local stores and services.
            </p>

            <div style={{ visibility: videoIsVisibile ? "visible" : "hidden" }}>
              <YouTube
                containerClassName="video-container"
                videoId="AogN7XQruZY"
                onReady={() => setVideoIsVisible(true)}
              />
            </div>
          </div>
        </div>

        <svg
          className="wave"
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{
            height: "calc(var(--rhythm) * 8)",
            width: "100%",
          }}
        >
          <path
            d="M-0.57,61.67 C181.15,151.47 310.38,-0.50 500.00,84.37 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "var(--color-white)" }}
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;
