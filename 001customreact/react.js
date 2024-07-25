function customRender(reactElement, container) {
    // Create a DOM element based on the reactElement type
    const domElement = document.createElement(reactElement.type);
  
    // Set the inner HTML or text content
    domElement.textContent = reactElement.children;
  
    // Set attributes from props
    domElement.setAttribute("href", reactElement.props.href);
    domElement.setAttribute("target", reactElement.props.target);
  
    // Append the created element to the container
    container.appendChild(domElement);
  }
  
  // Define a reactElement object
  const reactElement = {
    type: "a",
    props: {
      href: "https://chatgpt.com/c/2a870ea6-8039-4518-beed-fec093d35cb8",
      target: "_blank",
    },
    children: "click to visit",
  };
  
  // Get the container element
  const mainContainer = document.getElementById("root");
  
  // Render the reactElement inside the container
  customRender(reactElement, mainContainer);
  