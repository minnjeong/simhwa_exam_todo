// export const waitTwoSeconds = () =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, 2000);
//   });

  // utils.js
export const waitTwoSeconds = () => new Promise(resolve => setTimeout(resolve, 2000));
