function createButton(href, buttonText) {
    return `
      <a href="${href}" class="">
        <button
          class="text-white bg-transparent border border-gray-2 mt-12 shadow-primary/500  hover:bg-secondary hover:border-secondary font-medium rounded-full text-1xl px-16 py-2.5 text-center mb-2">
          ${buttonText}
        </button>
      </a>
    `;
  }
  
  export { createButton };