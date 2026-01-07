import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/id');
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-white">Redirecting...</div>
    </div>
  );
}
