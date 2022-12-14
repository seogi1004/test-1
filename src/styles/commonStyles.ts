const multiLineEllipsis = (numOfLines: number) => {
  return `
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${numOfLines};
    -webkit-box-orient: vertical;
  `;
};

export { multiLineEllipsis };
