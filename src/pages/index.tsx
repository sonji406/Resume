import Profile from '@/components/profile/Profile';

export default function Home() {
  return (
    <main className='bg-black min-h-screen'>
      <div>
        <header className='bg-white w-screen h-20'>header</header>
        <nav className='bg-orange-600 w-screen h-20'>nav</nav>
      </div>
      <Profile></Profile>
      <section></section>
    </main>
  );
}
