function createButton(href, buttonText) {
    return `
      <a href="${href}" class="">
        <button
          class="text-white bg-primary mt-12 shadow-primary/500 shadow-md hover:bg-secondary font-medium rounded-lg text-2xl px-16 py-2.5 text-center mb-2">
          ${buttonText}
        </button>
      </a>
    `;
  }
  
  export { createButton };