import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/desa._slug-zEOy5A_p.js
var import_jsx_runtime = require_jsx_runtime();
function DesaNotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid min-h-[70vh] place-items-center bg-surface px-4 pt-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-extrabold text-foreground",
					children: "Profil Desa Tidak Ditemukan"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Halaman yang Anda cari tidak tersedia atau telah dipindahkan."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground",
					children: "Kembali ke Beranda"
				})
			]
		})
	});
}
//#endregion
export { DesaNotFound as notFoundComponent };
