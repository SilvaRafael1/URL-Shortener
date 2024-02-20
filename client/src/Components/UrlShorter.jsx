import UrlShorterForm from "./UrlShorterForm";

const UrlShorter = () => {
  return (
    <div className="flex items-center justify-center pt-6">
      <div className="w-[1280px] p-6 rounded-md bg-[#DAD7CD]">
        <UrlShorterForm />
      </div>
    </div>
  );
};

export default UrlShorter;
