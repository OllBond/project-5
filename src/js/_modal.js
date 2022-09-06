(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-map-open]"),
    closeModalBtn: document.querySelector("[data-modal-map-close]"),
    modal: document.querySelector("[data-modal-map]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("active-modal");
  }
})();



(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-video-open]"),
    closeModalBtn: document.querySelector("[data-modal-video-close]"),
    modal: document.querySelector("[data-modal-video]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("active-modal");
  }
})();



(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-franchise-open]"),
    closeModalBtn: document.querySelector("[data-modal-franchise-close]"),
    modal: document.querySelector("[data-modal-franchise]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("active-modal");
  }
})();



(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-buynow-open]"),
    openModalMobileBtn: document.querySelector("[data-modal-buynow-mobile-open]"),
    closeModalBtn: document.querySelector("[data-modal-buynow-close]"),
    modal: document.querySelector("[data-modal-buynow]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.openModalMobileBtn.addEventListener("click", openModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("active-modal");
  }

  function openModal() {
    refs.modal.classList.remove("is-hidden");
    document.body.classList.add("active-modal");
  }
})();
