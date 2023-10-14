export type Message =
  | {
      level: "information";
      message: string;
    }
  | {
      level: "warning";
      message: string;
    }
  | {
      level: "error";
      message: string;
    };
