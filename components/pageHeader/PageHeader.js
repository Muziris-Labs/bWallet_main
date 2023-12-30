import PageHeading from "./PageHeading";
import PageSearch from "./PageSearch";

const PageHeader = () => {
  return (
    <div className="sticky top-0 z-40 pt-2 backdrop-blur-md">
      <section className="flex w-full items-center justify-between rounded-xl bg-background-black px-8 py-3">
        <PageHeading />
        <PageSearch />
      </section>
    </div>
  );
};

export default PageHeader;
