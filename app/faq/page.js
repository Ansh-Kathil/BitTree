import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <main className="bg-[#F0F2BD]   min-h-screen text-[#7B4019] px-10 py-16">
        <div className='mt-[10vh]'>

          <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>

          {/* Q1 */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">🌐 What is Bittree?</h2>
            <p className="text-lg">
              Bittree is a simple, clean, and customizable link-in-bio tool that allows you to share all your important links in one place. Whether you are an artist, influencer, or content creator, Bittree helps you connect your audience with everything you do.
            </p>
          </div>

          {/* Q2 */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">🎯 Who can use Bittree?</h2>
            <p className="text-lg">
              Anyone! If you have multiple links to share — your YouTube, Instagram, portfolio, blog, or shop — Bittree is the perfect solution. It’s great for freelancers, students, creators, developers, small businesses, and more.
            </p>
          </div>

          {/* Q3 */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">⚙️ Is it free to use?</h2>
            <p className="text-lg">
              Yes! Bittree is currently completely free to use. We aim to keep the core experience free for everyone. In the future, we may introduce optional premium features for those who want more customization and analytics.
            </p>
          </div>

          {/* Q4 */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">🖼️ Can I customize my page?</h2>
            <p className="text-lg">
              Absolutely! You can choose your profile image, add a short description, and organize your links the way you like. We are working on adding more customization features like themes and layout options soon!
            </p>
          </div>

          {/* Q5 */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">📊 Will I get analytics for my links?</h2>
            <p className="text-lg">
              Currently, we track profile visits, and we plan to expand this to include individual link clicks, detailed user stats, and trends in upcoming updates. Stay tuned!
            </p>
          </div>

          {/* Q6 */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">🔐 Is my data secure?</h2>
            <p className="text-lg">
              Yes. We take your privacy seriously. Your data is stored securely and is never shared with third parties. You control what information you want to display on your public profile.
            </p>
          </div>

          {/* Final Note */}
          <div className="mt-10 text-center">
            <p className="text-lg mb-4">Still have questions?</p>
            <Link href="/whocares.webp" className="bg-[#FFBF78] text-[#4B352A] px-6 py-3 rounded-full font-bold hover:bg-[#f5a447] transition duration-200">
              ✉️ Contact Us
            </Link>
          </div>
        </div>
      </main>
    </div>

  )
}

export default page
