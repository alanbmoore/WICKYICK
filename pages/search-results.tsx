import SearchedUsersList from "../components/searched-users-list";
import { useRouter } from "next/router";
import AppFooter from "../components/footer";

const SearchResults = () => {
  const router = useRouter();
  const { keyword } = router.query;
  const { view_all } = router.query;

  return (
    <>
      <div
        style={{
          minHeight: "110vh",
          height: "100vh",
          width: "100%",
          display: "flex",
        }}
      >
        <SearchedUsersList keyword={keyword} viewAll={view_all} />
      </div>
      <AppFooter />
    </>
  );
};

export default SearchResults;
