export const scrollToBottom = (element) => {
  if (!element) return;

  element.scrollTo({
    top: element?.scrollHeight,
    behavior: "smooth",
  });
};

export const scrollToTarget = (element) => {
  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
  });
};
