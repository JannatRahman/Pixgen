  

const ViewDetailsPage =async ({params}) => {
  const {id} = await params;

   const res = await fetch("https://pixgen-black-delta.vercel.app/data.json");
  const photos = await res.json();

  const photo = photos.find(p => p.id == id);
  return (
    <div>
      <h2>{photo.title}</h2>
      <p>{photo.prompt}</p>
    </div>
  );
};

export default ViewDetailsPage;