import Profile from "../Profile";
import PageHeading from "./PageHeading";
import PageSearch from "./PageSearch";

const PageHeader = () => {
  return (
    <div className="pt-2 backdrop-blur-md">
      <section className="flex w-full items-center justify-between rounded-xl bg-background-black px-8 py-3">
        <PageHeading />

        <PageSearch />

        <Profile />
      </section>
    </div>
  );
};

export default PageHeader;
