import Image, { StaticImageData } from "next/image";

interface ManagementComponentsProps {
    handleChange: () => void;
    image: StaticImageData;
    name: string;
    position: string;
}

const ManagementComponents: React.FC<ManagementComponentsProps> = ({handleChange, name, image, position}) => {

  return (
    <button className="cursor-pointer w-[18rem] h-[20rem] mb-16" onClick={handleChange}>
      <div className="w-[18rem] h-[18rem]">
        <Image
          src={image}
          alt={name}
          className=" w-[18rem] h-[18rem] object-center bg-no-repeat object-cover "
        />
      </div>
      <div className="text-center text-lg">
        <p className="mb-3 font-bold text-[#F6B765] uppercase">{position}</p>
        <p className="uppercase">{name}</p>
      </div>
    </button>
  );
};

export default ManagementComponents;
