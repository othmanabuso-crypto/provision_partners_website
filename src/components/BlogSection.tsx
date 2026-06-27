import Link from 'next/link';

const posts = [
  {
    category: 'Procurement',
    title: 'How to Streamline Your Office Procurement Process in 2025',
    excerpt:
      'Discover practical strategies to reduce procurement costs, cut lead times, and build reliable vendor relationships for your organisation.',
    date: 'June 10, 2025',
    readTime: '5 min read',
    gradient: 'from-blue-100 to-indigo-200',
    accentColor: 'text-[#252F73] bg-blue-50',
  },
  {
    category: 'Construction',
    title: 'Essential Building Materials Checklist for Large-Scale Projects',
    excerpt:
      'A comprehensive guide to sourcing and managing construction materials efficiently, from site preparation through to finishing.',
    date: 'May 28, 2025',
    readTime: '7 min read',
    gradient: 'from-amber-100 to-orange-200',
    accentColor: 'text-amber-700 bg-amber-50',
  },
  {
    category: 'IT Supply',
    title: 'Choosing the Right IT Equipment for Your Business: A Buyer\'s Guide',
    excerpt:
      'From workstations to networking infrastructure — learn how to evaluate IT equipment based on your operational needs and budget.',
    date: 'May 15, 2025',
    readTime: '6 min read',
    gradient: 'from-teal-100 to-cyan-200',
    accentColor: 'text-teal-700 bg-teal-50',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 text-[#F81420] text-sm font-semibold tracking-widest uppercase mb-2">
              <span className="w-6 h-0.5 bg-[#F81420] inline-block"></span>
              Insights
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111827]">
              Latest from the Blog
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-[#252F73] hover:text-[#F81420] transition-colors whitespace-nowrap"
          >
            View All Articles →
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:border-[#252F73]/20 hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
            >
              {/* Placeholder Image */}
              <div className={`bg-gradient-to-br ${post.gradient} h-44`}></div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-2.5 py-1 ${post.accentColor}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-[#6B7280]">{post.readTime}</span>
                </div>
                <h3 className="font-bold text-[#111827] leading-snug mb-3">
                  {post.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                  <span className="text-xs text-[#6B7280]">{post.date}</span>
                  <Link
                    href="/blog"
                    className="text-sm font-semibold text-[#252F73] hover:text-[#F81420] transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
