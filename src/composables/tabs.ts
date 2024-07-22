
const showTab = (tab: Element, tabPanels: Element[], tabs: Element[]) => {
	tabs.forEach((tab_) => {
		const isCurrentTab = tab_ === tab

		if (isCurrentTab) {
			tab_.setAttribute("aria-selected", "true")
		} else {
			tab_.setAttribute("aria-selected", "false")
		}
	})

	tabPanels.forEach((panel) => {
		const isCurrPanel = panel.id === tab.getAttribute("href")!.slice(1)
		if (isCurrPanel) {
			panel.removeAttribute("aria-hidden")
		} else {
			panel.setAttribute("aria-hidden", "true")
		}
	})

}

export const setupTabs = (tabPanels: string, tabs: string) => {
	const controller = new AbortController()


	const ERR_MSG = "element not present"
	const domLoaded = !!globalThis?.window
	if (!domLoaded) throw Error("not in the client enviroment, window object not present.")

	const tabsEl = document.querySelector(`#${tabs}`)
	const tabPanelsEl = document.querySelector(`#${tabPanels}`)

	if (!(tabsEl && tabPanelsEl)) throw Error(`${ERR_MSG}, 0`)

	const tabsArray = Array.from(tabsEl.querySelectorAll('[role="tab"]'))
	const tabPanelsArray = Array.from(tabPanelsEl.querySelectorAll('[role="tabpanel"]'))

	if (!(tabsArray.length && tabPanelsArray.length)) throw Error(`${ERR_MSG}, 1`)



	tabsEl.addEventListener("click", (e) => {
		e.preventDefault()
		const currIndex = tabsArray.findIndex(tab => tab === e.target as unknown as Element)
		if (currIndex === -1) return

		showTab(tabsArray[currIndex], tabPanelsArray, tabsArray)
	},
		{ signal: controller.signal }
	)

	/* 	tabsEl.addEventListener("keydown", (e) => {
			const isValid = !(e.ctrlKey && e.metaKey && e.altKey)
			if (!isValid) return
			const KEYS = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"]
			if (!KEYS.includes(e.key)) return
			switch (key) {
				case "ArrowRight"
			}
		}, { signal: controller.signal })
	
		 */
	showTab(tabsArray[0], tabPanelsArray, tabsArray)

	return {
		ok: true,
		controller
	}

}
