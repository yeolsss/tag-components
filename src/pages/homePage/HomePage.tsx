import Page from "@/components/page";
import TagContainer from "@/components/tagContainer";
import { TagProvider } from "@/context/tagContext";

function HomePage() {
  return (
    <Page>
      <h1 className="my-5 text-center text-4xl font-bold">
        Create Tag Component
      </h1>
      <TagProvider>
        <TagContainer />
      </TagProvider>
    </Page>
  );
}

export default HomePage;
