import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development in 2026",
    description:
      "Explore AI-driven UI systems, edge computing, and performance-first architectures shaping modern applications.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    author: "Ayush Jaiswal",
    date: "March 3, 2026",
    category: "Development",
  },
  {
    id: 2,
    title: "Scaling React Applications Like a Pro",
    description:
      "Folder architecture, performance optimization, and real-world production practices.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
    author: "Ayush Jaiswal",
    date: "Feb 25, 2026",
    category: "React",
  },
  {
    id: 3,
    title: "Design Systems That Actually Work",
    description:
      "Typography hierarchy, spacing logic, component reusability, and UI consistency.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a",
    author: "Ayush Jaiswal",
    date: "Feb 18, 2026",
    category: "UI/UX",
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen pt-28 px-4 sm:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Insights & Articles
        </h1>
        <p className="mt-6 text-gray-600 text-lg">
          Explore deep dives into development, UI/UX design and modern tech
          systems.
        </p>
      </div>

      {/* Featured Blog */}
      <div className="max-w-6xl mx-auto mb-24">
        <div className="grid md:grid-cols-2 gap-10 bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition duration-500">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="w-full h-80 object-cover rounded-2xl transform hover:scale-110 transition duration-700"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full w-fit">
              {blogPosts[0].category}
            </span>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {blogPosts[0].title}
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              {blogPosts[0].description}
            </p>

            <div className="flex justify-between text-sm text-gray-500 mb-6">
              <span>{blogPosts[0].author}</span>
              <span>{blogPosts[0].date}</span>
            </div>

            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 hover:shadow-xl transition duration-300 w-fit">
              Read Article
            </button>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogPosts.slice(1).map((post) => (
          <div
            key={post.id}
            className="group bg-white/70 backdrop-blur-lg border border-white/40 rounded-3xl shadow-xl hover:shadow-2xl transition duration-500 overflow-hidden flex flex-col hover:-translate-y-2"
          >
            <div className="overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-700"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full w-fit mb-3">
                {post.category}
              </span>

              <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                {post.title}
              </h3>

              <p className="text-gray-600 text-sm flex-grow mb-5">
                {post.description}
              </p>

              <div className="flex justify-between text-xs text-gray-500 mb-4">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>

              <button className="mt-auto px-4 py-2 rounded-full border-2 border-indigo-500 text-indigo-500 font-medium hover:bg-indigo-500 hover:text-white transition duration-300">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-5xl mx-auto mt-32 mb-16 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-3xl py-16 px-6 shadow-2xl text-white">
        <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
        <p className="mb-8 text-lg opacity-90">
          Subscribe to receive the latest insights directly in your inbox.
        </p>
        <button className="px-8 py-3 bg-white text-purple-600 font-bold rounded-full hover:scale-105 hover:shadow-xl transition duration-300">
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default BlogPage;
