import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!blog) {
    return <div className="text-center mt-20 text-slate-600">Loading...</div>;
  }

  return (
    <div>
      <Navbar />

      <section className="bg-mint-texture py-20 min-h-screen">
        <div className="max-w-3xl mx-auto px-6 surface-card p-8 md:p-10">
          <Link
            to="/blogs"
            className="text-emerald-700 font-medium hover:underline"
          >
            ← Back to Articles
          </Link>

          <h1 className="text-3xl font-bold text-slate-900 mt-4">{blog.title}</h1>

          <p className="text-sm text-slate-400 mt-2">
            {new Date(blog.createdAt).toDateString()}
          </p>

          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover rounded-lg mt-6"
            />
          )}

          <div className="prose max-w-none mt-6 text-slate-700">
            <p className="leading-relaxed whitespace-pre-line">
              {blog.content}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BlogDetail;
