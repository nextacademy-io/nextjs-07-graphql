'use client';

import { ProfilePicture } from '@/components/profile-picture';
import { useProfileUrlsRoundRobin } from '@/hooks/use-profile-urls-round-robin';

export const EmptyPlaceholder = () => <div className="w-[100px] h-[100px]" />;

export default function Home() {
  const { pictureUrl, prevPictureUrl, nextPicture } = useProfileUrlsRoundRobin(
    0, // min index
    99, // max index
    (i) => `https://randomuser.me/api/portraits/women/${i}.jpg`,
    1, // initial index
  );

  return (
    <main className="p-24 flex flex-col gap-8">
      <h1 className="text-3xl font-bold underline">Hello, Workshop</h1>
      <div className="flex gap-4">
        {prevPictureUrl ? <ProfilePicture profileUrl={prevPictureUrl} /> : <EmptyPlaceholder />}
        <ProfilePicture profileUrl={pictureUrl} onClick={nextPicture} />
      </div>
    </main>
  );
}
