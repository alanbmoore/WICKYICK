import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import TermOfUseModal from "../components/TermOfUseModal";
import { hideModal } from "../store/modalSlice";

function Loader() {
  const { loading } = useSelector((state: any) => state.loading);
  const { showModal } = useSelector((state: any) => state.modal);
  const dispatch = useDispatch();

  return (
    <>
      <TermOfUseModal show={showModal} onHide={() => dispatch(hideModal())} />
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
