// Animation content
export const newsCardAnimation = {
  hidden: order => ({
    x: order % 2 === 1 ? -200 : 200,
    opacity: 0
  }),
  visible: custom => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
};
