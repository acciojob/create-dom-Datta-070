function createDom(root) {
  // If root is a string, create and return a text node
  if (typeof root === 'string') {
    return document.createTextNode(root);
  }

  // Create the element of the specified type
  const element = document.createElement(root.type);

  // Apply attributes if any
  if (root.attributes) {
    for (const [key, value] of Object.entries(root.attributes)) {
      element.setAttribute(key, value);
    }
  }

  // Recursively create and append children if any
  if (root.children) {
    root.children.forEach(child => {
      element.appendChild(createDom(child));
    });
  }

  return element;
}

// Sample usage
const inputElement = createDom({
  type: 'input',
  attributes: {
    class: 'my-input',
    type: 'password',
    placeholder: 'type your password',
  },
});
console.log(inputElement.outerHTML); // <input class="my-input" type="password" placeholder="type your password" />

const paragraphElement = createDom({
  type: 'p',
  children: [
    'Hello',
    {
      type: 'strong',
      children: ['World'],
    },
  ],
});
console.log(paragraphElement.outerHTML); // <p>Hello <strong>World</strong></p>
