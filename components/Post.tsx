import { useState } from "react";
import Img from "react-optimized-image";

import * as Icon from "@components/Icon";
import { Post as PostType } from "@pages/index";

type PostProps = {
  post: PostType.Processed;
};

const Post = ({ post }: Readonly<PostProps>) => {
  // const [imageHasLoaded, setImageHasLoaded] = useState(false);

  return (
    <div className="post">
      <div className="post-image">
        {/* <div className="post-image" style={{ opacity: imageHasLoaded ? 1 : 0 }}> */}
        <Img
          // alt={post.name}
          // onLoad={() => setImageHasLoaded(true)}
          loading="lazy"
          src={require(`../public/images/uploads/${post.thumbnail}`)}
        />
      </div>

      <div className="post-content">
        <h2>{post.name}</h2>

        <div className="post-options">
          {post.delivery ? <Icon.Delivery /> : null}
          {post.pickup ? <Icon.Takeout /> : null}
          {post.masks ? <Icon.Mask /> : null}
        </div>

        <p>
          {post.content}
          <br />
          {post.masked ? <b>Employees wear masks.</b> : null}
        </p>

        {post.giftcard || post.number || post.website ? (
          <div className="post-buttons">
            {post.website ? (
              <a
                className="button"
                href={post.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
            ) : null}

            {post.giftcard ? (
              <a
                className="button"
                href={post.giftcard}
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Giftcard Online
              </a>
            ) : null}

            {post.number ? (
              <a
                className="button"
                href={`tel:${post.number}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Call for Giftcard
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Post;
