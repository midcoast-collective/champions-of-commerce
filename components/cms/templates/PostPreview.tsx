import Post from "@components/Post";

type PostPreviewProps = {
  entry: {
    getIn: (key: string[]) => any;
  };
  getAsset: () => any;
};

const PostPreview = ({ entry, getAsset }: Readonly<PostPreviewProps>) => {
  const post = {
    name: "string",
    category: "string",
    thumbnail: "string",
    website: "string",
    giftcard: "string",
    number: "string",
    pickup: true,
    delivery: true,
    masks: true,
    masked: true,
    content: "string",
    slug: "string",
  };

  console.log(entry);
  console.log(entry.getIn(["data"]).toJS());

  return <Post post={post} />;
};

export default PostPreview;
