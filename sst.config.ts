import { SSTConfig } from "sst";
import { StorageStack } from "./stacks/StorageStack.js";


export default {
  config(_input) {
    return {
      name: "my-sst-test",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(StorageStack);
  }
} satisfies SSTConfig;
