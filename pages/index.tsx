import { useState } from 'react';
import Head from 'next/head';

const decisions = [
  'Yes',
  'No',
  'Maybe',
  'Try Again',
];

export default function Home() {
  const [result, setResult] = useState('');

  const handleDecide = () => {
    const choice = decisions[Math.floor(Math.random() * decisions.length)];
    setResult(choice);
  };

  const handleCoinFlip = () => {
    const flip = Math.random() < 0.5 ? 'Heads' : 'Tails';
    setResult(flip);
  };

  return (
    <>
      <Head>
        <title>LetDecide.com</title>
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 flex flex-col items-center justify-center p-6">
        <h1 className="text-5xl font-bold mb-6">LetDecide.com</h1>
        <p className="text-lg mb-4 text-center max-w-md">
          Can't make a decision? Let us help. Click below to get a random answer.
        </p>
        <div className="flex gap-4 mb-6">
          <button onClick={handleDecide} className="bg-indigo-600 text-white px-6 py-2 rounded-2xl hover:bg-indigo-700 transition">Decide for me</button>
          <button onClick={handleCoinFlip} className="bg-purple-600 text-white px-6 py-2 rounded-2xl hover:bg-purple-700 transition">Flip a Coin</button>
        </div>
        {result && (
          <div className="text-3xl font-semibold bg-white px-8 py-4 rounded-2xl shadow-md">
            Result: {result}
          </div>
        )}
      </main>
    </>
  );
}