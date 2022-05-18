import { Nav } from '@/components/Nav';
import Link from 'next/link';

const tags = [
  { label: 'entrepreneur', link: '/' },
  { label: 'metrics', link: '/' },
];

function Blog() {
  return (
    <div className="w-full sm:max-w-screen-sm mx-auto">
      <Nav />
      <h1 className="text-2xl mt-24 text-white">Blog</h1>
      <p>I learn, I read, I share</p>
      <div className="flex mt-16 space-x-2">
        {tags.map((tag, index) => (
          <Link href="/blog" key={index}>
            <div className="text-white/40 hover:text-white/70 py-1 px-3 rounded-full bg-white/5 backdrop-blur backdrop-filter w-max hover:cursor-pointer hover:bg-white/[7%]">
              {tag.label}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blog;
