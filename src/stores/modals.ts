import { atom } from "nanostores"

export type ModalKey = "add-staff" | "";
export const $openModal = atom<ModalKey>("")

const MODAL_OPEN_CLASS = "modal-open"
const MODAL_CLOSE_KEY: ModalKey = ""
const elements = ["body"]
$openModal.subscribe(modalKey => {
	const modalIsOpen = modalKey > ""
	elements.forEach(elementName => {
		const element = document.querySelector(elementName)!
		if (!element) return

		if (modalIsOpen) element.classList.add(MODAL_OPEN_CLASS)
		else element.classList.remove(MODAL_OPEN_CLASS)
	})
})


export const showModal = (modalKey: ModalKey) => $openModal.set(modalKey)
export const closeModals = () => showModal(MODAL_CLOSE_KEY)
