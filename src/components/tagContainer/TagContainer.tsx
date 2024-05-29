import TagInput from "@/components/tagInput";
import { useTagContext } from "@/context/tagContext";
import TagCard from "@/components/tagCard";
import CloseButton from "@/components/closeButton";

const TagContainer = () => {
  const { tags, deleteTag, inputRef, handleFocusTagInput } = useTagContext();

  return (
    <div
      onClick={handleFocusTagInput}
      className="group mx-auto min-h-60 w-1/2 rounded-md border border-black/50 p-2"
    >
      {tags.map((tag) => (
        <TagCard key={tag.id}>
          {tag.name}
          <CloseButton onClick={() => deleteTag(tag.id)} />
        </TagCard>
      ))}
      <TagInput ref={inputRef} />
    </div>
  );
};

export default TagContainer;
