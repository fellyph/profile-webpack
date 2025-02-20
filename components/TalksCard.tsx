import Talk from "interfaces/Talk";
import Image from "next/image";

export default function TalksCard({
  talk,
  conference,
  date,
  country,
  description,
  image,
}: Talk) {
  return (
    <div className="flex gap-6 justify-start mx-auto">
      {image && <Image src={image} alt={talk} width={300} height={300} />}
      <div className="mx-auto">
        <h2 className="text-4xl font-bold">{conference}</h2>
        <div className="flex flex-col gap-2">
          <p className="text-gray-500 dark:text-gray-400">{date}</p>
          <p className="text-gray-500 dark:text-gray-400">{country}</p>
        </div>
        <h3 className="text-2xl font-bold">{talk}</h3>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}
