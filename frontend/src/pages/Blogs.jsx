import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Navbar />

      <section className="bg-mint-texture py-20 min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-slate-900 mb-12">
            Mental Health Articles
          </h1>

          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="surface-card overflow-hidden hover:shadow-lg transition"
              >
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-48 w-full object-cover"
                  />
                )}

                <div className="p-6">
                  <h2 className="text-xl font-semibold text-slate-900">
                    {blog.title}
                  </h2>

                  <p className="text-slate-600 mt-3">{blog.excerpt}</p>

                  <p className="text-sm text-slate-400 mt-4">
                    {new Date(blog.createdAt).toDateString()}
                  </p>

                  <Link
                    to={`/blogs/${blog._id}`}
                    className="mt-4 inline-block text-emerald-700 font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Blogs;
