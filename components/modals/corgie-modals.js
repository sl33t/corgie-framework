class Modals {

    open_modal(modal_id) {
        let modal = document.getElementById(modal_id);
        modal.style.display = "flex";
    }

    close_modal(modal_id) {
        let modal = document.getElementById(modal_id);
        modal.style.display = "none";
    }
}