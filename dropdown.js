class Dropdown {
	static #instances = new WeakMap();

	constructor(dropdown) {
		this.dropdown = dropdown;
	}

	toggle() {
		this.dropdown.classList.toggle("show");
	}

	static #getInstance(menu) {
		if (!Dropdown.#instances.has(menu)) {
			Dropdown.#instances.set(menu, new Dropdown(menu));
		}

		return Dropdown.#instances.get(menu);
	}

	static handleEvent(target) {
		const menu = target.nextElementSibling;
		if (menu) {
			const dropdown = Dropdown.#getInstance(menu);
			dropdown.toggle();
		}
	}
}

App.register("dropdown", Dropdown);
