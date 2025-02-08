const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-black to-gray-800 text-white text-center py-8 shadow-lg">
        <p className="text-lg font-semibold">&copy; {new Date().getFullYear()} DevTube - Trending Now, Always! 🚀</p>
        
        <p className="text-sm mt-3 text-gray-300">
          Watch **45+ of the most popular videos** across entertainment, tech, sports, and more!
        </p>
  
        <p className="text-sm text-gray-400 mt-1">
          From viral sensations to deep dives—**stay entertained, stay informed**.
        </p>
  
        <p className="text-xs text-gray-500 mt-3">
          *Warning: Binge-watching may cause lost track of time. We’re not responsible for your missed deadlines. 😆*
        </p>
  
        <p className="text-sm font-medium mt-4 text-gray-300">
          Built with ☕, 💻, and a lot of YouTube rabbit holes by **Dhiman Majumdar**. 🎥🔥
        </p>
      </footer>
    );
  };
  
  export default Footer;
  