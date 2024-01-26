interface Props {
  image: any;
  name: any;
  email: any;
}

export default function Profil({ image, name, email }: Props) {
  return (
    <div className="w-full">
      <div className="flex flex-col items-center justify-center md:items-start space-y-12">
        <div className="w-full flex items-center justify-center">
          <img src={image} alt="" className="w-40" />
        </div>
        <div className="space-x-14">
          <p className="text-xl font-bold italic opacity-80">Name:</p>
          <h1 className="text-lg font-medium">{name}</h1>
        </div>
        <div className="space-x-14">
          <p className="text-xl font-bold italic opacity-80">Email:</p>
          <h1 className="text-lg font-medium">{email}</h1>
        </div>
        <div className="space-x-[70px]">
          <p className="text-xl font-bold italic opacity-80">Address:</p>
          <p className="font-medium italic opacity-70">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, esse
            illo! Molestiae inventore eaque sunt quis distinctio enim dolores
            soluta?
          </p>
        </div>
      </div>
    </div>
  );
}
