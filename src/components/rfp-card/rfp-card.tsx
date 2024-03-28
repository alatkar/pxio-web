import Image from 'next/image';

export default async function RfpCardNew({heading, content, src, tags}: {heading: string; content: string; src: string; tags: string[]})
  {
    return (
      <div className="bg-blue-50 max-w-md rounded overflow-hidden shadow-lg px-5 py-5">
        <Image className="w-full" src={src} alt="Sunset in the mountains" width={400}
              height={260}/>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{heading}</div>
          <p className="text-gray-700 text-base">
          {content} ...
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">          
          <>
          {
            tags.map((tag) => {
            return (
              <span key={heading} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
            );
          })}
          </>
        </div>
    </div>
    );
  }