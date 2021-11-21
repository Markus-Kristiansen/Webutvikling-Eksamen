import { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { playerService } from "../services/playerService";
import { useNavigate } from "react-router";

const ModalCard = (props: any) => {
  const navigate = useNavigate();

  const deletePlayer = () => {
    playerService.deletePlayerById(props.id);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Player
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ display: "flex", justifyContent: "center", margin: 10 }}>
          <input type="text" placeholder="Update Name" style={{ width: 300 }} />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            type="text"
            placeholder="Update Team"
            style={{ width: 300, margin: 10 }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            type="number"
            min="14"
            max="50"
            style={{ margin: 10 }}
            placeholder="Age"
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <textarea
            placeholder="Bio..."
            style={{ margin: 10 }}
            name="textarea"
            id="textarea"
            cols={30!}
            rows={5!}
          ></textarea>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            if (window.confirm("Are you sure you want to delete this player")) {
              deletePlayer();
              navigate(-1);
            }
          }}
        >
          Delete
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCard;
