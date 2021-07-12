import React from "react";
import Head from "next/head";
import YouTube from "react-youtube";

import Header from "@components/Header";
import * as Icon from "@components/Icon";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  url?: string;
};

const Layout = ({
  children,
  title = "Page Title",
  description = "Page Description",
  url = "https://nextjs.org",
}: Readonly<LayoutProps>) => {
  const [videoIsVisibile, setVideoIsVisible] = React.useState(false);

  return (
    <>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{title}</title>

        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={url + "/images/og-image.png"} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={url + "/images/og-image.png"} />

        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>

      <section className="layout">
        <a
          className="divert"
          href="https://saintjoseph.com/champions-gift-certificate-merchants/ "
        >
          Have a gift certificate to redeem? Click <u>here</u> to see what
          businesses accept them.
        </a>
        <Header url={url} />
        {children}
      </section>

      <section>
        <div style={{ visibility: videoIsVisibile ? "visible" : "hidden" }}>
          <YouTube
            containerClassName="video-container"
            videoId="AogN7XQruZY"
            onReady={() => setVideoIsVisible(true)}
          />
        </div>
      </section>

      <footer>
        <div className="wrap">
          <div className="branding">
            <Icon.Branding />
          </div>
          &copy;{new Date().getFullYear()} A collaboration between{" "}
          <a href="https://saintjoseph.com">
            The St. Joseph Chamber of Commerce
          </a>{" "}
          & <a href="https://midcoast.io">Midcoast Collective</a>. All rights
          reserved.
        </div>
      </footer>
    </>
  );
};

export default Layout;
