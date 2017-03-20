const hasClass = (node, className) => node && ` ${node.classList} `.includes(` ${className} `);

module.exports = (node, from) => {
  if (from && typeof from === 'object')
    return from.contains(node);

  if (typeof from !== 'string')
    return false;

  from = from.trim();

  if (from.charAt(0) === '#')
    return document.getElementById(from.replace('#', '')).contains(node);

  if (from.charAt(0) !== '.')
    return false;

  from = from.replace('.', '');

  while (node && node !== document.body.parentNode) {
    if (hasClass(node, from))
      return true;

    node = node.parentNode;
  }

  return false;
};
