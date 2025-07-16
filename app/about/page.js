import React from 'react'

const About = () => {
  return (
<div>
  <main className="bg-[#FFEEA9] min-h-screen text-[#7B4019] px-10 py-16 ">
    <div className='mt-[10vh]'>

    <h1 className="text-4xl font-bold mb-6">About Us</h1>

    <p className="text-lg mb-4">
      <strong>Bittree</strong> is a simple and modern tool to help you create your own link-in-bio page.
      Whether you are an artist, influencer, developer, or content creator — our platform empowers you to share everything you love through just one link.
    </p>

    <p className="text-lg mb-4">
      Built with 💚 Next.js, Tailwind CSS, and a passion for design, Bittree is crafted to be fast, beautiful, and easy to use.
      You dont need any technical skills — just plug in your links, add a profile image, and share it with the world.
    </p>

    <p className="text-lg mb-4">
      Our mission is to make sharing effortless, elegant, and accessible for everyone. 
      Whether you are promoting your YouTube channel, portfolio, product page, or simply staying connected — Bittree gives your links a beautiful home.
    </p>

    <p className="text-lg mb-4">
      Join a growing community of creators who have already made their mark. With thousands of visits and hundreds of links shared, Bittree is becoming the go-to destination for smart online presence.
    </p>

    <p className="text-lg mb-6">
      We are constantly evolving — expect new features like analytics, custom themes, and integrations with your favorite platforms.
    </p>

    <div className="mt-10 text-center">
      <a href="/generate" className="bg-[#FFBF78] text-[#4B352A] px-6 py-3 rounded-full font-bold hover:bg-[#f5a447] transition duration-200">
        🚀 Start Creating Your Bitlink Now
      </a>
    </div>
    </ div>
  </main>
</div>

  )
}

export default About
