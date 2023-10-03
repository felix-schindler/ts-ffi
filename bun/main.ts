import { dlopen, FFIType, suffix } from "bun:ffi";

const { symbols } = dlopen(
	// Since Bun doesn't support Windows, I just hardcoded the prefix
	"lib" + "argon2" + suffix,
	{
		sqlite3_libversion: {
			// no arguments, returns a string
			args: [],
			returns: FFIType.cstring,
		},
	}
);
