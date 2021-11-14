import { FC } from "react";

export type Props = {
  search: (name: any) => void;
};

const SearchBar: FC<Props> = ({ search }) => {
  return (
    <input
      style={{ width: 300, marginTop: 20 }}
      className="mx-auto"
      onChange={search}
      type="text"
      placeholder={`Search...`}
    />
  );
};

export default SearchBar;
