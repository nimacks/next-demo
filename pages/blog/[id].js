import { useRouter } from "next/router";
import Link from "next/link";
import posts from "../../posts";

const Blog = () => {
  const router = useRouter();
  const post = posts[router.query.id];
  if (!post) return <p></p>;
  return (
    <div>
      <header>
        <h1>Blog</h1>
      </header>
      <ul>
        {Object.entries(posts).map((value, index) => {
          return (
            <li key={index}>
              <Link href="/blog/[id]" as={"/blog/" + value[0]}>
                <a>{value[1].title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Blog;
