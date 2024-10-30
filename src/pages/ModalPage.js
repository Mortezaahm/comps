import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={closeModal} secondary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={closeModal} actionBar={actionBar}>
      <p>Here is an important agreement to be approved.</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={openModal} primary rounded>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nihil,
        laudantium beatae impedit animi officiis veniam sapiente illo error
        provident eius, obcaecati amet. Sit dignissimos, quisquam facilis odio
        ea eligendi.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Nulla nihil, laudantium beatae impedit animi officiis veniam sapiente
        illo error provident eius, obcaecati amet. Sit dignissimos, quisquam
        facilis odio ea eligendi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nihil,
        laudantium beatae impedit animi officiis veniam sapiente illo error
        provident eius, obcaecati amet. Sit dignissimos, quisquam facilis odio
        ea eligendi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nihil,
        laudantium beatae impedit animi officiis veniam sapiente illo error
        provident eius, obcaecati amet. Sit dignissimos, quisquam facilis odio
        ea eligendi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nihil,
        laudantium beatae impedit animi officiis veniam sapiente illo error
        provident eius, obcaecati amet. Sit dignissimos, quisquam facilis odio
        ea eligendi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nihil,
        laudantium beatae impedit animi officiis veniam sapiente illo error
        provident eius, obcaecati amet. Sit dignissimos, quisquam facilis odio
        ea eligendi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nihil,
        laudantium beatae impedit animi officiis veniam sapiente illo error
        provident eius, obcaecati amet. Sit dignissimos, quisquam facilis odio
        ea eligendi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nihil,
        laudantium beatae impedit animi officiis veniam sapiente illo error
        provident eius, obcaecati amet. Sit dignissimos, quisquam facilis odio
        ea eligendi.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Nulla nihil, laudantium beatae impedit animi officiis veniam sapiente
        illo error provident eius, obcaecati amet. Sit dignissimos, quisquam
        facilis odio ea eligendi.Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Nulla nihil, laudantium beatae impedit animi officiis
        veniam sapiente illo error provident eius, obcaecati amet. Sit
        dignissimos, quisquam facilis odio ea eligendi.Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Nulla nihil, laudantium beatae
        impedit animi officiis veniam sapiente illo error provident eius,
        obcaecati amet. Sit dignissimos, quisquam facilis odio ea eligendi.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Nulla nihil,
        laudantium beatae impedit animi officiis veniam sapiente illo error
        provident eius, obcaecati amet. Sit dignissimos, quisquam facilis odio
        ea eligendi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nihil,
        laudantium beatae impedit animi officiis veniam sapiente illo error
        provident eius, obcaecati amet. Sit dignissimos, quisquam facilis odio
        ea eligendi.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Nulla nihil, laudantium beatae impedit animi officiis veniam sapiente
        illo error provident eius, obcaecati amet. Sit dignissimos, quisquam
        facilis odio ea eligendi.Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Nulla nihil, laudantium beatae impedit animi officiis
        veniam sapiente illo error provident eius, obcaecati amet. Sit
        dignissimos, quisquam facilis odio ea eligendi.Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Nulla nihil, laudantium beatae
        impedit animi officiis veniam sapiente illo error provident eius,
        obcaecati amet. Sit dignissimos, quisquam facilis odio ea eligendi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nihil,
        laudantium beatae impedit animi officiis veniam sapiente illo error
        provident eius, obcaecati amet. Sit dignissimos, quisquam facilis odio
        ea eligendi.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Nulla nihil, laudantium beatae impedit animi officiis veniam sapiente
        illo error provident eius, obcaecati amet. Sit dignissimos, quisquam
        facilis odio ea eligendi.Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Nulla nihil, laudantium beatae impedit animi officiis
        veniam sapiente illo error provident eius, obcaecati amet. Sit
        dignissimos, quisquam facilis odio ea eligendi.Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Nulla nihil, laudantium beatae
        impedit animi officiis veniam sapiente illo error provident eius,
        obcaecati amet. Sit dignissimos, quisquam facilis odio ea eligendi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nihil,
        laudantium beatae impedit animi officiis veniam sapiente illo error
        provident eius, obcaecati amet. Sit dignissimos, quisquam facilis odio
        ea eligendi.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Nulla nihil, laudantium beatae impedit animi officiis veniam sapiente
        illo error provident eius, obcaecati amet. Sit dignissimos, quisquam
        facilis odio ea eligendi.Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Nulla nihil, laudantium beatae impedit animi officiis
        veniam sapiente illo error provident eius, obcaecati amet. Sit
        dignissimos, quisquam facilis odio ea eligendi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nihil,
        laudantium beatae impedit animi officiis veniam sapiente illo error
        provident eius, obcaecati amet. Sit dignissimos, quisquam facilis odio
        ea eligendi.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Nulla nihil, laudantium beatae impedit animi officiis veniam sapiente
        illo error provident eius, obcaecati amet. Sit dignissimos, quisquam
        facilis odio ea eligendi.Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Nulla nihil, laudantium beatae impedit animi officiis
        veniam sapiente illo error provident eius, obcaecati amet. Sit
        dignissimos, quisquam facilis odio ea eligendi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nihil,
        laudantium beatae impedit animi officiis veniam sapiente illo error
        provident eius, obcaecati amet. Sit dignissimos, quisquam facilis odio
        ea eligendi.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Nulla nihil, laudantium beatae impedit animi officiis veniam sapiente
        illo error provident eius, obcaecati amet. Sit dignissimos, quisquam
        facilis odio ea eligendi.Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Nulla nihil, laudantium beatae impedit animi officiis
        veniam sapiente illo error provident eius, obcaecati amet. Sit
        dignissimos, quisquam facilis odio ea eligendi.Lorem ipsum dolor sit
        amet, consectetur adipisicing elit. Nulla nihil, laudantium beatae
        impedit animi officiis veniam sapiente illo error provident eius,
        obcaecati amet. Sit dignissimos, quisquam facilis odio ea eligendi.
      </p>
    </div>
  );
}

export default ModalPage;
