let libPrefix = "";
let libSuffix = "";

switch (Deno.build.os) {
  case "windows":
    libSuffix = "dll";
    break;
  case "darwin":
    libPrefix = "lib";
    libSuffix = "dylib";
    break;
  default:
    libPrefix = "lib";
    libSuffix = "so";
    break;
}

const { symbols } = Deno.dlopen(
  libPrefix + "argon2" + libSuffix,
  {
  } as const,
);
