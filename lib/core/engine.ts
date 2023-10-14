export type Engine = {
  init: () => void;
};

export function createEngine(): Engine {
  return {
    init: () => {
      console.log("Engine initialized");
    },
  };
}
