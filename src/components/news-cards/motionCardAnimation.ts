// Animation content
export const newsCardAnimation = {
  hidden: (custom: number) => ({
    x: custom % 2 === 1 ? -200 : 200,
    opacity: 0,
  }),
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};
