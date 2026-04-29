import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { BiDownload } from 'react-icons/bi';
import { FaHeart } from 'react-icons/fa';


const PhotoCard = ({photo}) => {
  return (
    <Card className='border rounded-xl'>
      <div className='relative w-full aspect-square'> 
        <Image 
        src={photo.imageUrl}
        sizes='"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"'
        fill
        alt={photo.title}
        className='rounded-xl object-cover'
        />
        <Chip size='sm' className='absolute right-2 top-2'>{photo.category}</Chip>
      </div>
      <div>
        
        <h2 className='font-semibold'>{photo.title}</h2>
      </div>

     <div className='flex gap-10 items-center'>
     
      <div className='flex gap-1 items-center pl-6'>
        <p><FaHeart className='text-red-600'
         /></p>
        <p>{photo.likes}</p>
        </div>
 
         <Separator orientation='vertical'/>

      <div className='flex gap-1 items-center '>
        <p><BiDownload 
         /></p>
        <p>{photo.downloads}</p>
        </div>

     </div>
     <Link href={`/all-photos/${photo.id}`}>
     <Button variant='outline' className={'w-full'}>View</Button>
     </Link>

    </Card>
  );
};

export default PhotoCard;