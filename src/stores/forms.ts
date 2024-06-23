import { atom } from "nanostores"



export const FORM_CODES = {
	DOCTOR_BASICS: 0,
	DOCTOR_PRACTICE_DETAILS: 1
} as const

export const $currentDoctorForm = atom<0 | 1 | 2>(0);

