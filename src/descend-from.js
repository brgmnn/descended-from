const hasSelector = (node, selector) => {
  const classes = ` ${node.classList} `;
  return classes.includes(` ${selector} `);
};

module.exports = (node, from) => {
  while (node !== document.body) {
    if (typeof from === 'object' && node === from)
      return true;

    else if (typeof from === 'string' && hasSelector(node, from))
      return true;

    node = node.parentNode;
  }

  return false;
};
