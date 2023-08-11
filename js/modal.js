(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    modalBackdrop: document.querySelector(".backdrop"),
    // header: document.querySelector(".header"),
    body: document.body,
  };

  refs.openModalBtn.addEventListener("click", openModal);
  refs.closeModalBtn.addEventListener("click", closeModal);
  refs.modalBackdrop.addEventListener("click", handleBackdropClick);
  window.addEventListener("keydown", handleEscPress);

  function openModal() {
    refs.modal.classList.remove("is-hidden");
    // refs.header.classList.add("modal-open-header");
    refs.body.classList.add("modal-open");
    refs.body.style.overflow = "hidden"; // Disable scrolling
  }

  function closeModal() {
    refs.modal.classList.add("is-hidden");
    // refs.header.classList.remove("modal-open-header");
    refs.body.classList.remove("modal-open");
    refs.body.style.overflow = ""; // Enable scrolling
  }

  function handleBackdropClick(event) {
    if (event.target === refs.modalBackdrop) {
      closeModal();
    }
  }

  function handleEscPress(event) {
    if (event.code === "Escape") {
      closeModal();
    }
  }
})();
