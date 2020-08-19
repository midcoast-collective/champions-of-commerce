import YouTubeEmbed from "react-youtube-embed";

import * as Icon from "@components/Icon";

type HeaderProps = {
  url?: string;
};

const Header = ({ url = "https://nextjs.org" }: Readonly<HeaderProps>) => {
  const encodedUrl = encodeURIComponent(url);

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
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon.Facebook />
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon.Twitter />
              </a>
            </div>
          </div>

          <div className="banner">
            <h1>Be a Champion of Commerce. Decide local.</h1>
            <p>
              When you shop or dine locally you help friends, neighbors and our
              community overall. The need to shop local has never been greater.
              Ditch Amazon and decide local.
            </p>

            <YouTubeEmbed id="teyjRUabA3Q" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
