import { useState, useEffect } from 'react';
import './index.css';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`Angka ${count} habis dibagi 10!`);
    }
  }, [count]);

  const response = {
    results: [
      {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        image: "https://picsum.photos/500",
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        image: "https://picsum.photos/500",
      },
      {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        image: "https://picsum.photos/500",
      },
      {
        userId: 1,
        id: 4,
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        image: "https://picsum.photos/500",
      },
      {
        userId: 1,
        id: 5,
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
        image: "https://picsum.photos/500",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 1. Navbar */}
      <nav className="flex justify-between items-center p-4 bg-blue-600 text-white">
        <h1 className="text-xl font-bold">Muhammad Hilmy Mahardika</h1>
        <ul className="flex gap-6">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About Me</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* 2. Card Grid */}
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4">Post Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {response.results.map((item) => (
            <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={item.image} alt={`image-${item.id}`} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm whitespace-pre-line">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Counter */}
      <section className="p-6 flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold">Counter Demo</h2>
        <h3 className="text-4xl font-bold">{count}</h3>
        <div className="flex gap-4">
          <button onClick={() => setCount(count + 1)} className="bg-green-500 px-4 py-2 rounded text-white">+</button>
          <button onClick={() => setCount(count - 1)} className="bg-red-500 px-4 py-2 rounded text-white">-</button>
          <button onClick={() => setCount(0)} className="bg-gray-500 px-4 py-2 rounded text-white">Reset</button>
        </div>
      </section>
    </div>
  );
};

export default App;
