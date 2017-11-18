import { createReadStream } from "fs";
import fromStream from "ai-from-stream";

function readFile(path, opts) {
  const stream = createReadStream(path, opts);
  return fromStream(stream);
}

export const fs = { readFile };
