import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";

function Loader() {
  const { loading } = useSelector((state: any) => state.loading);

  return (
    <>
      {loading && (
        <div className={"loader"}>
          <div
            style={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Spinner animation="border" />
          </div>
        </div>
      )}
    </>
  );
}

export default Loader;
