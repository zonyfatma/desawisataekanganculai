import { o as __toESM } from "../_runtime.mjs";
import { a as objectType, o as stringType } from "../_libs/zod.mjs";
import {
  A as paketWisataSchema,
  D as officialFullDayPackage,
  E as loginInputSchema,
  H as umkmSchema,
  I as reservationPublicSchema,
  L as reservationStatusSchema,
  M as publicReviewSchema,
  N as recordPageViewSchema,
  O as officialTwoDayPackage,
  R as reviewStatusSchema,
  S as kegiatanSchema,
  U as villageInfoSchema,
  V as tokenOnlySchema,
  W as villages,
  _ as galeriDataset,
  b as homestaySchema,
  c as cbtExperiences8,
  d as destinasiSchema,
  g as galeri8Categories,
  l as changePasswordInputSchema,
  m as faqSchema,
  o as adminReviewSchema,
  p as extractOgImageSchema,
  r as WHATSAPP_NUMBER,
  u as deleteItemSchema,
  v as galeriSchema,
  x as imageUploadSchema,
  y as getVillage,
} from "./schemas-DIbXu2MH.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import {
  N as notFound,
  c as HeadContent,
  d as createRouter,
  f as Outlet,
  g as Link,
  h as createRootRouteWithContext,
  l as useRouterState,
  m as createFileRoute,
  p as lazyRouteComponent,
  s as Scripts,
  v as useRouter,
} from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import {
  $ as HeartHandshake,
  B as Menu,
  C as Send,
  Dt as Camera,
  I as Music2,
  J as Layers,
  L as Moon,
  M as PhoneCall,
  Mt as Award,
  N as Palette,
  Nt as ArrowRight,
  Ot as Calendar,
  St as ChevronLeft,
  U as MapPin,
  W as Mail,
  Y as Instagram,
  Z as House,
  _ as Sparkles,
  _t as Clock,
  a as UtensilsCrossed,
  b as ShieldCheck,
  dt as Drama,
  g as Sprout,
  gt as Coffee,
  ht as Compass,
  it as Footprints,
  j as Phone,
  mt as CookingPot,
  nt as Gift,
  o as Users,
  p as Sun,
  r as WandSparkles,
  st as Facebook,
  t as X,
  u as Trees,
  ut as ExternalLink,
  v as ShoppingBag,
  vt as CircleCheck,
  wt as Check,
  xt as ChevronRight,
  yt as CircleAlert,
  z as MessageCircle,
} from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import {
  n as __exportAll,
  r as createServerFn,
  s as getServerFnById,
  t as TSS_SERVER_FUNCTION,
} from "./server-o1JyFher.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import {
  a as DialogOverlay$1,
  c as DialogTrigger,
  i as DialogDescription$1,
  n as DialogClose,
  o as DialogPortal$1,
  r as DialogContent$1,
  s as DialogTitle$1,
  t as Dialog$1,
} from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-C_uf36nf.js
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/cms-store-Caq0J4DJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    ),
    ...props,
  }),
);
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
        ref,
        className: cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg",
          className,
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
            className:
              "absolute right-4 top-4 z-50 grid size-10 place-items-center rounded-full bg-black/60 text-white border border-white/40 backdrop-blur-md shadow-xl transition-all duration-300 hover:bg-black hover:scale-110 hover:border-gold hover:text-gold cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 disabled:pointer-events-none",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6 stroke-[2.5]" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className: "sr-only",
                children: "Close",
              }),
            ],
          }),
        ],
      }),
    ],
  }),
);
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
    ...props,
  });
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props,
  });
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props,
  }),
);
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props,
  }),
);
DialogDescription.displayName = DialogDescription$1.displayName;
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId, { origin: "server" }))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true,
  });
};
function extractPayload(input) {
  const raw = input || {};
  if (
    raw &&
    typeof raw === "object" &&
    "data" in raw &&
    raw["data"] !== void 0 &&
    raw["data"] !== null &&
    typeof raw["data"] === "object"
  )
    return raw["data"];
  return raw;
}
var checkAdminAuthServerFn = createServerFn({ method: "POST" })
  .validator((data) => tokenOnlySchema.parse(extractPayload(data)))
  .handler(createSsrRpc("25cd601fdb16e7781722c13c9a52f3f399a5ee982977e49bd7f9c03be1380bc2"));
var adminLoginServerFn = createServerFn({ method: "POST" })
  .validator((data) => loginInputSchema.parse(extractPayload(data)))
  .handler(createSsrRpc("9d359cea8999f5f1547a80d5811a74164cf232ac0befc4e9ac2dda353fdb4d17"));
var changePasswordServerFn = createServerFn({ method: "POST" })
  .validator((data) => changePasswordInputSchema.parse(extractPayload(data)))
  .handler(createSsrRpc("e63307d11e39b31d5e923c3dff123e83b7c8a41d5d5578acf73d2e5660812399"));
var checkDefaultPasswordServerFn = createServerFn({ method: "POST" })
  .validator((data) => tokenOnlySchema.parse(extractPayload(data)))
  .handler(createSsrRpc("1c8571d11ef815895fcc86fd357d12c0c28f2831540b627db4f701e0f8ed033e"));
var adminLogoutServerFn = createServerFn({ method: "POST" })
  .validator((data) => tokenOnlySchema.parse(extractPayload(data)))
  .handler(createSsrRpc("29c1517d9458b0123dac993772de06bbe266e58194c5237700be2a8e7709a28d"));
var uploadImageServerFn = createServerFn({ method: "POST" })
  .validator((data) => imageUploadSchema.parse(extractPayload(data)))
  .handler(createSsrRpc("a9f0fb56447d1fff8822013e974f946d82605c26b8409287d440e51c74da37ea"));
var migrateBase64ServerFn = createServerFn({ method: "POST" })
  .validator((data) => tokenOnlySchema.parse(extractPayload(data)))
  .handler(createSsrRpc("f3304e289a018751170c3241b905634a8200163297c8d80d5aecbf8fb0c34f80"));
var getSiteDataServerFn = createServerFn({ method: "GET" }).handler(
  createSsrRpc("066ff2d20809eace1a7df5454e466475299769619bb4c50e122c7b4795c17549"),
);
var recordPageViewServerFn = createServerFn({ method: "POST" })
  .validator((data) => recordPageViewSchema.parse(extractPayload(data)))
  .handler(createSsrRpc("f736c0a0cc906d0ab6c97941d2459e54c6c95bea803d3c645dbaef68e817b38f"));
var getAdminDashboardDataServerFn = createServerFn({ method: "POST" })
  .validator((data) => tokenOnlySchema.parse(extractPayload(data)))
  .handler(createSsrRpc("483e53b28e55f0d2a198f29fa2afdd46eebd419cffbf5245bf35f15acb5de881"));
var submitPublicReviewServerFn = createServerFn({ method: "POST" })
  .validator((data) => publicReviewSchema.parse(extractPayload(data)))
  .handler(createSsrRpc("e23d26f7912843cc3803f048cd4e5edbd520779d405437c265d6828917717fa2"));
var submitReservationServerFn = createServerFn({ method: "POST" })
  .validator((data) => reservationPublicSchema.parse(extractPayload(data)))
  .handler(createSsrRpc("daf5adaff011fc8d310fa55f8257f8df96e5447e2255f827f045683ac0e279d7"));
var saveVillageInfoServerFn = createServerFn({ method: "POST" })
  .validator((data) => villageInfoSchema.parse(extractPayload(data)))
  .handler(createSsrRpc("2d7172bc24f5eb36e24c17a144e53327e20e2072e491b3f66434b5be8176a300"));
var saveDestinasiServerFn = createServerFn({ method: "POST" })
  .validator((data) => destinasiSchema.parse(extractPayload(data)))
  .handler(createSsrRpc("c51de335367ac26553e5b9101a0b3ba95b47b7aa9a9ee985e448f0828e4c4176"));
var deleteDestinasiServerFn = createServerFn({ method: "POST" })
  .validator((data) => deleteItemSchema.parse(extractPayload(data)))
  .handler(createSsrRpc("dc1cc92c7665ad45fc84d3b1bf4bc2124e946d89e1fd66febc83dbaf98356ca3"));
var extractOgImageServerFn = createServerFn({ method: "POST" })
  .validator((data) => extractOgImageSchema.parse(extractPayload(data)))
  .handler(createSsrRpc("8a7022dbe1e34a63b1ef0b1db72a0054b4d0e8680744775253d3cab22d2876b1"));
var saveKegiatanServerFn = createServerFn({ method: "POST" })
  .validator((data) => kegiatanSchema.parse(extractPayload(data)))
  .handler(createSsrRpc("70c47140bbdb8e4e3225c6c19ea1f83c9ba8e571c1a8912a940fc651f77a2e88"));
var deleteKegiatanServerFn = createServerFn({ method: "POST" })
  .validator((data) => deleteItemSchema.parse(extractPayload(data)))
  .handler(createSsrRpc("0f2a7074a88cbedea55ca409de9764e7e85d5ced2760c7bb2f76d192a8d53ffd"));
var saveUmkmServerFn = createServerFn({ method: "POST" })
  .validator((data) => umkmSchema.parse(extractPayload(data)))
  .handler(createSsrRpc("e9274f2bf7eeec05351ab696d62e9071cad1c3c828cf4709bccfd1116f2a2149"));
var deleteUmkmServerFn = createServerFn({ method: "POST" })
  .validator((data) => deleteItemSchema.parse(extractPayload(data)))
  .handler(createSsrRpc("9bafb474685506142ab6a68e5347486912e3e41911c45e1eb425dcf5c2650c2d"));
var saveGaleriServerFn = createServerFn({ method: "POST" })
  .validator((data) => galeriSchema.parse(extractPayload(data)))
  .handler(createSsrRpc("13845e65ebac5b8709ea3f6abba067859f3534df5a15741e30c808575e1d3ff4"));
var deleteGaleriServerFn = createServerFn({ method: "POST" })
  .validator((data) => deleteItemSchema.parse(extractPayload(data)))
  .handler(createSsrRpc("1ac8aa0dd46d83da103fa86acea43e27ac7074b4f9ce08eec6ee6ee88611719b"));
var saveReviewServerFn = createServerFn({ method: "POST" })
  .validator((data) => adminReviewSchema.parse(extractPayload(data)))
  .handler(createSsrRpc("b00d1bbbd203a7e21aea7dd8988b261cbdf0dbc02176742027b38610d3c94fae"));
createServerFn({ method: "POST" })
  .validator((data) => reviewStatusSchema.parse(extractPayload(data)))
  .handler(createSsrRpc("622151c6d7078b8fa025c877bdbcbd03c0b6ebc88b31b33b742ea03373b39343"));
var deleteReviewServerFn = createServerFn({ method: "POST" })
  .validator((data) => deleteItemSchema.parse(extractPayload(data)))
  .handler(createSsrRpc("e760faafa665349c13470887b5e37cbb7004d8fdd6d68c79ac98b9ece3f3d9d3"));
createServerFn({ method: "POST" })
  .validator((data) => homestaySchema.parse(extractPayload(data)))
  .handler(createSsrRpc("395ba6a1fdd8bba1f1659621df557076fae2365f78529ba51141c973831e6449"));
createServerFn({ method: "POST" })
  .validator((data) => deleteItemSchema.parse(extractPayload(data)))
  .handler(createSsrRpc("8d944807815d91a456482cb8f56496758d829a718d870a86635c5b7db8fdc97c"));
createServerFn({ method: "POST" })
  .validator((data) => paketWisataSchema.parse(extractPayload(data)))
  .handler(createSsrRpc("1e1bc6970b0abe13a4807eb80a553f597e24de42ae4ae517ddea5ca426ccd075"));
createServerFn({ method: "POST" })
  .validator((data) => deleteItemSchema.parse(extractPayload(data)))
  .handler(createSsrRpc("750562c31640665a2c5941c01ce34b22e4d693b016dc30ced3ebce1a1a63be7d"));
createServerFn({ method: "POST" })
  .validator((data) => faqSchema.parse(extractPayload(data)))
  .handler(createSsrRpc("360eb360e69eed3a2c9bbb5859829cc757d9ff9741a43bd6482a5d4dd44ba14c"));
createServerFn({ method: "POST" })
  .validator((data) => deleteItemSchema.parse(extractPayload(data)))
  .handler(createSsrRpc("1fa08bdfb5e76bcc2fb118273da19fb84fb50375ccf82f708b1f6566e3467156"));
var updateReservationStatusServerFn = createServerFn({ method: "POST" })
  .validator((data) => reservationStatusSchema.parse(extractPayload(data)))
  .handler(createSsrRpc("92d386995ce1354db653f6f793f4aa1b053bc0f67ce0c5830c2b378492ce7a42"));
var deleteReservationServerFn = createServerFn({ method: "POST" })
  .validator((data) => deleteItemSchema.parse(extractPayload(data)))
  .handler(createSsrRpc("b70e8fc52b84ba27a79456c03d5c7b1958a63ea4d777d89a1ea97e2ef645b2d5"));
var v0 = villages[0];
if (!v0) throw new Error("villages data is empty — check jadesta.ts");
var currentState = {
  villageInfo: {
    nama: v0.nama,
    tagline: v0.tagline,
    whatsapp: v0.whatsapp,
    email: v0.email ?? "",
    alamat: v0.alamat ?? "",
    luasDesa: v0.luasDesa ?? "",
    luasKawasanWisata: v0.luasKawasanWisata ?? "",
    jamOperasional: v0.jamOperasional ?? "",
    waktuTerbaik: v0.waktuTerbaik ?? "",
    pokdarwis: v0.pokdarwis,
    instagram: v0.instagram ?? "",
    facebook: v0.facebook ?? "",
    tiktok: v0.tiktok ?? "",
    pemdesWebsite: v0.pemdesWebsite ?? "",
  },
  kegiatanList: v0.kegiatanList ?? [],
  landmarkList: v0.landmarkList ?? [],
  umkmList: v0.umkmList ?? [],
  reviews: v0.reviews ?? [],
  fullDay: officialFullDayPackage,
  twoDay: officialTwoDayPackage,
  cbtExperiences: cbtExperiences8,
  galeriCategories: galeri8Categories,
  galeriItems: galeriDataset,
  visitCount: 1,
  uniqueVisitors: 1,
};
var listeners = /* @__PURE__ */ new Set();
function notifyListeners() {
  listeners.forEach((listener) => listener());
}
var cmsStore = {
  getSnapshot() {
    return currentState;
  },
  subscribe(listener) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
  setSiteData(data) {
    currentState = {
      ...currentState,
      ...data,
      villageInfo: {
        ...currentState.villageInfo,
        ...(data.villageInfo || {}),
      },
    };
    notifyListeners();
  },
  updateData(updater) {
    currentState = updater(currentState);
    notifyListeners();
  },
  resetVisitCount() {
    currentState = {
      ...currentState,
      visitCount: 0,
    };
    notifyListeners();
  },
  recordVisit(path) {
    if (typeof window === "undefined") return;
    recordPageViewServerFn({ data: { path: path || window.location.pathname || "/" } })
      .then((res) => {
        if (res?.success && res.totalViews) {
          currentState = {
            ...currentState,
            visitCount: res.totalViews,
            uniqueVisitors: res.uniqueVisitors,
          };
          notifyListeners();
        }
      })
      .catch(() => {});
  },
};
function useSiteData() {
  const [data, setData] = (0, import_react.useState)(cmsStore.getSnapshot());
  (0, import_react.useEffect)(() => {
    cmsStore.recordVisit();
    getSiteDataServerFn()
      .then((serverData) => {
        if (serverData) {
          cmsStore.setSiteData(serverData);
          setData(cmsStore.getSnapshot());
        }
      })
      .catch((err) => {
        console.error("[CMS] Gagal memuat data dari server, menggunakan data fallback:", err);
      });
    return cmsStore.subscribe(() => {
      setData(cmsStore.getSnapshot());
    });
  }, []);
  return data;
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-HcJQJ-TI.js
var styles_default = "/assets/styles-DVXtAZV8.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context,
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error",
    },
  );
  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);
  const stack = error instanceof Error ? error.stack : void 0;
  window.__lovableReportRuntimeError?.({
    message,
    ...(stack !== void 0 && { stack }),
    filename: window.location.pathname,
  });
}
var Sheet = Dialog$1;
var SheetTrigger = DialogTrigger;
var SheetPortal = DialogPortal$1;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    ),
    ...props,
    ref,
  }),
);
SheetOverlay.displayName = DialogOverlay$1.displayName;
var sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: { side: "right" },
  },
);
var SheetContent = import_react.forwardRef(
  ({ side = "right", className, children, ...props }, ref) =>
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
          ref,
          className: cn(sheetVariants({ side }), className),
          ...props,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
              className:
                "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "sr-only",
                  children: "Close",
                }),
              ],
            }),
            children,
          ],
        }),
      ],
    }),
);
SheetContent.displayName = DialogContent$1.displayName;
var SheetHeader = ({ className, ...props }) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
    ...props,
  });
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props,
  });
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props,
  }),
);
SheetTitle.displayName = DialogTitle$1.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props,
  }),
);
SheetDescription.displayName = DialogDescription$1.displayName;
var durationOptions = [
  {
    id: "full-day",
    nama: "Paket Wisata Full Day (Experience the Authentic Village Life)",
    status: "Resmi (±8 Jam)",
    desc: "Membatik di Rumah Batik Bintan, berkebun bersama masyarakat, kuliner lokal, pementasan budaya desa, & UMKM",
  },
  {
    id: "2d1n-homestay",
    nama: "2D1N Live-in Homestay Rumah Warga",
    status: "Rencana Pengembangan",
    desc: "Bermalam di rumah warga & berinteraksi bersama masyarakat desa",
  },
  {
    id: "3d2n-cbt",
    nama: "3D2N Pengalaman Lengkap CBT Ekang",
    status: "Rencana Pengembangan",
    desc: "Eksplorasi mendalam kehidupan pedesaan & budaya Melayu",
  },
];
var addonExperiences = [
  {
    id: "batik",
    nama: "Membatik di Rumah Batik Bintan (09.00–11.00)",
    desc: "Praktik membatik & membawa pulang karya suvenir",
  },
  {
    id: "farm",
    nama: "Berkebun Bersama Masyarakat (11.00–12.30)",
    desc: "Menanam / memanen sayuran sesuai musim",
  },
  {
    id: "culinary",
    nama: "Menikmati Kuliner Lokal (12.30–14.00)",
    desc: "Makan siang masakan khas & olahan daun ubi",
  },
  {
    id: "culture",
    nama: "Budaya yang Hadir di Berbagai Sudut Desa (14.00–16.00)",
    desc: "Seni Melayu & tradisi lokal di berbagai lokasi budaya desa",
  },
  {
    id: "umkm",
    nama: "Belanja Produk UMKM & Penutupan (16.00–17.00)",
    desc: "Berbelanja batik & produk desa (sertifikat opsional)",
  },
];
var getTodayDateString = () => {
  const today = /* @__PURE__ */ new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
};
var getTomorrowDateString = () => {
  const tomorrow = /* @__PURE__ */ new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return `${tomorrow.getFullYear()}-${String(tomorrow.getMonth() + 1).padStart(2, "0")}-${String(tomorrow.getDate()).padStart(2, "0")}`;
};
var getCurrentTimeString = () => {
  const now = /* @__PURE__ */ new Date();
  return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
};
var getInitialValidDateTime = () => {
  const today = getTodayDateString();
  const nowTime = getCurrentTimeString();
  if (nowTime > "17:00")
    return {
      date: getTomorrowDateString(),
      time: "08:00",
    };
  return {
    date: today,
    time: nowTime < "08:00" ? "08:00" : nowTime,
  };
};
function TripPlannerModal({ open, onOpenChange }) {
  const todayStr = getTodayDateString();
  const tomorrowStr = getTomorrowDateString();
  const currentTimeStr = getCurrentTimeString();
  const initialDateTime = getInitialValidDateTime();
  const [step, setStep] = (0, import_react.useState)(1);
  const [selectedDuration, setSelectedDuration] = (0, import_react.useState)("full-day");
  const [adults, setAdults] = (0, import_react.useState)(2);
  const [children, setChildren] = (0, import_react.useState)(0);
  const [visitDate, setVisitDate] = (0, import_react.useState)(initialDateTime.date);
  const [visitTime, setVisitTime] = (0, import_react.useState)(initialDateTime.time);
  const [selectedAddons, setSelectedAddons] = (0, import_react.useState)([
    "batik",
    "farm",
    "culinary",
    "culture",
    "umkm",
  ]);
  const [namaPemesan, setNamaPemesan] = (0, import_react.useState)("");
  const [whatsappInput, setWhatsappInput] = (0, import_react.useState)("");
  const [emailInput, setEmailInput] = (0, import_react.useState)("");
  const [catatan, setCatatan] = (0, import_react.useState)("");
  const [isSubmitting, setIsSubmitting] = (0, import_react.useState)(false);
  const [completedCode, setCompletedCode] = (0, import_react.useState)("");
  (0, import_react.useEffect)(() => {
    if (!open) return;
    const now = getCurrentTimeString();
    const today = getTodayDateString();
    if (now > "17:00" && visitDate <= today) {
      setVisitDate(getTomorrowDateString());
      setVisitTime("08:00");
      toast.info(
        "Jam operasional hari ini (17.00 WIB) telah selesai. Tanggal otomatis disesuaikan ke besok.",
      );
    } else if (visitDate === today) {
      const validTime = now < "08:00" ? "08:00" : now;
      if (visitTime < validTime) setVisitTime(validTime);
    }
  }, [open]);
  const durationObj = durationOptions.find((d) => d.id === selectedDuration) ?? durationOptions[0];
  const handleDateChange = (val) => {
    if (!val) {
      setVisitDate("");
      return;
    }
    const today = getTodayDateString();
    const now = getCurrentTimeString();
    if (val < today) {
      toast.error("Tanggal tidak boleh di masa lalu. Tanggal disesuaikan ke hari ini/besok.");
      if (now > "17:00") {
        setVisitDate(getTomorrowDateString());
        setVisitTime("08:00");
      } else {
        setVisitDate(today);
        setVisitTime(now < "08:00" ? "08:00" : now);
      }
      return;
    }
    setVisitDate(val);
    if (val === today) {
      if (now > "17:00") {
        toast.info(
          "Jam operasional hari ini telah berakhir (17.00 WIB). Tanggal otomatis dialihkan ke besok.",
        );
        setVisitDate(getTomorrowDateString());
        setVisitTime("08:00");
      } else if (visitTime < now) {
        const validTime = now < "08:00" ? "08:00" : now;
        toast.info(`Jam kedatangan disesuaikan ke jam saat ini (${validTime} WIB).`);
        setVisitTime(validTime);
      }
    } else if (visitTime < "08:00" || visitTime > "17:00") setVisitTime("09:00");
  };
  const handleTimeChange = (val) => {
    setVisitTime(val);
    if (!val) return;
    const today = getTodayDateString();
    const now = getCurrentTimeString();
    if (val < "08:00")
      toast.error("Jam operasional desa dimulai pukul 08.00 WIB. Silakan ganti jam.");
    else if (val > "17:00")
      toast.error("Jam operasional desa berakhir pukul 17.00 WIB. Silakan ganti jam.");
    else if (visitDate === today && val < now)
      toast.error(
        `Jam ${val} WIB sudah lewat dari jam saat ini (${now} WIB). Silakan ganti jam kedatangan.`,
      );
  };
  const handleNextStep = () => {
    if (step === 1) {
      const today = getTodayDateString();
      const now = getCurrentTimeString();
      if (!visitDate) {
        toast.error("Mohon tentukan perkiraan tanggal kunjungan Anda.");
        return;
      }
      if (visitDate < today) {
        toast.error(
          "Tanggal kunjungan berada di masa lalu. Mohon pilih tanggal hari ini atau esok hari.",
        );
        return;
      }
      if (visitDate === today && now > "17:00") {
        toast.error(
          "Jam operasional desa hari ini telah berakhir (17.00 WIB). Mohon ubah tanggal kunjungan ke esok hari.",
        );
        return;
      }
      if (!visitTime) {
        toast.error("Mohon tentukan jam kedatangan kunjungan Anda.");
        return;
      }
      if (visitTime < "08:00" || visitTime > "17:00") {
        toast.error(
          "Jam kedatangan harus berada di dalam jam operasional desa (08.00–17.00 WIB). Silakan ganti jam yang sesuai.",
        );
        return;
      }
      if (visitDate === today && visitTime < now) {
        toast.error(
          `Jam kedatangan (${visitTime} WIB) sudah lewat dari waktu saat ini (${now} WIB). Mohon ganti dengan jam kedatangan yang sesuai.`,
        );
        return;
      }
    }
    setStep((s) => Math.min(4, s + 1));
  };
  const toggleAddon = (id) => {
    setSelectedAddons((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };
  const handleWhatsAppBooking = async () => {
    if (!namaPemesan || namaPemesan.trim().length < 2) {
      toast.error("Mohon lengkapi nama pemesan (minimal 2 karakter).");
      return;
    }
    if (!whatsappInput || whatsappInput.trim().length < 9) {
      toast.error("Mohon lengkapi nomor WhatsApp aktif Anda (contoh: 08123456789).");
      return;
    }
    setIsSubmitting(true);
    try {
      const kodeReservasi =
        (
          await submitReservationServerFn({
            data: {
              namaPemesan,
              whatsapp: whatsappInput,
              email: emailInput,
              tanggalKunjungan: visitDate,
              jamKedatangan: visitTime,
              jumlahDewasa: adults,
              jumlahAnak: children,
              opsiKunjungan: durationObj.nama,
              selectedAddons,
              catatan,
            },
          })
        ).kodeReservasi || `EA-2026-${Math.floor(1e3 + Math.random() * 9e3)}`;
      setCompletedCode(kodeReservasi);
      const addonsListText = selectedAddons
        .map((id) => addonExperiences.find((a) => a.id === id)?.nama)
        .filter(Boolean)
        .join("\n - ");
      const text = `Halo Pengelola Desa Wisata Ekang Anculai,

Saya ingin mengonfirmasi pemesanan kunjungan:
🎫 *Kode Reservasi:* ${kodeReservasi}
👤 *Nama Pemesan:* ${namaPemesan}
📱 *WhatsApp:* ${whatsappInput}
📅 *Tanggal & Jam Kunjungan:* ${visitDate ? visitDate.split("-").reverse().join("/") : "Dikonfirmasi via chat"} (Pukul ${visitTime} WIB)
⏱️ *Pilihan Paket:* ${durationObj.nama}
👥 *Jumlah Peserta:* ${adults} Dewasa${children > 0 ? `, ${children} Anak` : ""}

✨ *Rangkaian Aktivitas Dipilih:*
 - ${addonsListText || "Rangkaian Paket Wisata Full Day Lengkap"}

📝 *Catatan Khusus:* ${catatan || "-"}

Mohon konfirmasi ketersediaan jadwal dan rincian biaya kunjungannya. Terima kasih!`;
      const encoded = encodeURIComponent(text);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
      setStep(4);
      toast.success(`Reservasi ${kodeReservasi} berhasil disimpan ke database!`);
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Gagal menyimpan reservasi. Coba beberapa saat lagi.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
    open,
    onOpenChange,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
      className:
        "max-w-2xl overflow-hidden rounded-3xl border border-border p-0 shadow-2xl max-h-[92vh] flex flex-col",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "gradient-primary relative p-5 sm:p-6 text-primary-foreground shrink-0",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                  className:
                    "inline-flex items-center gap-1.5 rounded-full bg-background/20 px-3 py-1 text-xs font-bold backdrop-blur",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
                      className: "size-3.5 text-gold",
                    }),
                    "Perencana Kunjungan Interaktif",
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                  className: "text-xs font-bold opacity-80",
                  children: ["Langkah ", step, " dari 3"],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
              className: "mt-3 text-xl sm:text-2xl font-extrabold tracking-tight",
              children: "Rencanakan Kunjungan Ke Ekang Anculai",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
              className: "mt-1 text-xs text-primary-foreground/80",
              children:
                "Pilih rencana kunjungan CBT dan komunikasikan langsung ke Pengelola via WhatsApp.",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className:
                "mt-4 sm:mt-5 flex items-center justify-between border-t border-primary-foreground/15 pt-3 sm:pt-4 text-xs font-extrabold",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                  type: "button",
                  onClick: () => setStep(1),
                  className: cn(
                    "flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-all cursor-pointer min-h-[36px]",
                    step === 1
                      ? "bg-[#C58A32] text-white shadow-md font-black ring-2 ring-[#DCA348]"
                      : step > 1
                        ? "bg-[#14532D] text-white"
                        : "bg-white/10 text-white/60 hover:bg-white/20",
                  ),
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    children: "01 Rencana",
                  }),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: cn(
                    "h-0.5 flex-1 mx-1.5 transition-all",
                    step >= 2 ? "bg-[#C58A32]" : "bg-white/20",
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                  type: "button",
                  onClick: () => setStep(2),
                  className: cn(
                    "flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-all cursor-pointer min-h-[36px]",
                    step === 2
                      ? "bg-[#C58A32] text-white shadow-md font-black ring-2 ring-[#DCA348]"
                      : step > 2
                        ? "bg-[#14532D] text-white"
                        : "bg-white/10 text-white/60 hover:bg-white/20",
                  ),
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    children: "02 Aktivitas",
                  }),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: cn(
                    "h-0.5 flex-1 mx-1.5 transition-all",
                    step >= 3 ? "bg-[#C58A32]" : "bg-white/20",
                  ),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                  type: "button",
                  onClick: () => setStep(3),
                  className: cn(
                    "flex items-center gap-1.5 rounded-full px-3 py-1.5 transition-all cursor-pointer min-h-[36px]",
                    step === 3
                      ? "bg-[#C58A32] text-white shadow-md font-black ring-2 ring-[#DCA348]"
                      : step > 3
                        ? "bg-[#14532D] text-white"
                        : "bg-white/10 text-white/60 hover:bg-white/20",
                  ),
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    children: "03 Data Diri",
                  }),
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "flex-1 overflow-y-auto p-4 sm:p-6",
          children: [
            step === 1 &&
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "space-y-6",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                        className:
                          "text-xs font-bold tracking-wider text-muted-foreground uppercase",
                        children: "1. Pilih Jenis / Durasi Kunjungan",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "mt-3 grid gap-3",
                        children: durationOptions.map((opt) =>
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                            "button",
                            {
                              type: "button",
                              onClick: () => setSelectedDuration(opt.id),
                              className: cn(
                                "flex items-start justify-between rounded-2xl border p-4 text-left transition-all",
                                selectedDuration === opt.id
                                  ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                                  : "border-border hover:bg-accent/50",
                              ),
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                      className: "font-extrabold text-foreground",
                                      children: opt.nama,
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                      className: "mt-1 text-xs text-muted-foreground",
                                      children: opt.desc,
                                    }),
                                  ],
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                  className:
                                    "shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary",
                                  children: opt.status,
                                }),
                              ],
                            },
                            opt.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "grid gap-4 sm:grid-cols-2",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                            className: "text-xs font-bold text-muted-foreground",
                            children: "Jumlah Wisatawan Dewasa",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className:
                              "mt-2 flex items-center gap-3 rounded-2xl border border-border bg-surface p-2",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                                type: "button",
                                onClick: () => setAdults((a) => Math.max(1, a - 1)),
                                className:
                                  "grid size-9 place-items-center rounded-xl bg-card font-bold text-foreground hover:bg-muted",
                                children: "-",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                                className: "flex-1 text-center font-extrabold text-foreground",
                                children: [adults, " Dewasa"],
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                                type: "button",
                                onClick: () => setAdults((a) => a + 1),
                                className:
                                  "grid size-9 place-items-center rounded-xl bg-card font-bold text-foreground hover:bg-muted",
                                children: "+",
                              }),
                            ],
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                            className: "text-xs font-bold text-muted-foreground",
                            children: "Jumlah Anak-Anak (< 10 Thn)",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className:
                              "mt-2 flex items-center gap-3 rounded-2xl border border-border bg-surface p-2",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                                type: "button",
                                onClick: () => setChildren((c) => Math.max(0, c - 1)),
                                className:
                                  "grid size-9 place-items-center rounded-xl bg-card font-bold text-foreground hover:bg-muted",
                                children: "-",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                                className: "flex-1 text-center font-extrabold text-foreground",
                                children: [children, " Anak"],
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                                type: "button",
                                onClick: () => setChildren((c) => c + 1),
                                className:
                                  "grid size-9 place-items-center rounded-xl bg-card font-bold text-foreground hover:bg-muted",
                                children: "+",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "grid gap-4 sm:grid-cols-2",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
                            className:
                              "text-xs font-bold text-muted-foreground flex items-center gap-1.5",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
                                className: "size-3.5 text-primary",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                children: "Perkiraan Tanggal Kunjungan",
                              }),
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className: cn(
                              "mt-2 flex items-center gap-2 rounded-2xl border bg-surface px-4 py-3 shadow-sm transition-all focus-within:ring-2",
                              visitDate && visitDate < todayStr
                                ? "border-destructive ring-2 ring-destructive/20"
                                : "border-border focus-within:ring-primary/20",
                            ),
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                              type: "date",
                              min: currentTimeStr > "17:00" ? tomorrowStr : todayStr,
                              value: visitDate,
                              onChange: (e) => handleDateChange(e.target.value),
                              className: "w-full bg-transparent text-sm font-medium outline-none",
                            }),
                          }),
                          visitDate && visitDate < todayStr
                            ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                                className:
                                  "mt-1.5 text-[11px] font-extrabold text-destructive flex items-center gap-1",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
                                    className: "size-3 shrink-0",
                                  }),
                                  "Tanggal di masa lalu. Mohon ganti tanggal.",
                                ],
                              })
                            : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                className: "mt-1.5 text-[11px] text-muted-foreground font-medium",
                                children:
                                  currentTimeStr > "17:00"
                                    ? "Hari ini sudah tutup (otomatis dialihkan ke besok)"
                                    : `Minimal hari ini (${todayStr.split("-").reverse().join("/")})`,
                              }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
                            className:
                              "text-xs font-bold text-muted-foreground flex items-center gap-1.5",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
                                className: "size-3.5 text-gold",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                children: "Jam Kedatangan (08.00–17.00 WIB)",
                              }),
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            className: cn(
                              "mt-2 flex items-center gap-2 rounded-2xl border bg-surface px-4 py-3 shadow-sm transition-all focus-within:ring-2",
                              (visitDate === todayStr && visitTime && visitTime < currentTimeStr) ||
                                (visitTime && (visitTime < "08:00" || visitTime > "17:00"))
                                ? "border-destructive ring-2 ring-destructive/20"
                                : "border-border focus-within:ring-primary/20",
                            ),
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                              type: "time",
                              min:
                                visitDate === todayStr
                                  ? currentTimeStr < "08:00"
                                    ? "08:00"
                                    : currentTimeStr
                                  : "08:00",
                              max: "17:00",
                              value: visitTime,
                              onChange: (e) => handleTimeChange(e.target.value),
                              className: "w-full bg-transparent text-sm font-medium outline-none",
                            }),
                          }),
                          visitDate === todayStr && visitTime && visitTime < currentTimeStr
                            ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                                className:
                                  "mt-1.5 text-[11px] font-extrabold text-destructive flex items-center gap-1",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
                                    className: "size-3 shrink-0",
                                  }),
                                  "Jam ",
                                  visitTime,
                                  " WIB sudah lewat. Mohon ganti jam ≥ ",
                                  currentTimeStr,
                                  " WIB.",
                                ],
                              })
                            : visitTime && (visitTime < "08:00" || visitTime > "17:00")
                              ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                                  className:
                                    "mt-1.5 text-[11px] font-extrabold text-destructive flex items-center gap-1",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
                                      className: "size-3 shrink-0",
                                    }),
                                    "Jam di luar operasional. Jam buka 08.00 – 17.00 WIB.",
                                  ],
                                })
                              : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                  className: "mt-1.5 text-[11px] text-muted-foreground font-medium",
                                  children:
                                    visitDate === todayStr
                                      ? `Hari ini: Jam minimal ${currentTimeStr < "08:00" ? "08.00" : currentTimeStr} WIB`
                                      : "Jam operasional 08.00 - 17.00 WIB",
                                }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            step === 2 &&
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "space-y-6",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                      className: "text-xs font-bold tracking-wider text-muted-foreground uppercase",
                      children: "2. Pilih Rangkaian Aktivitas Kunjungan",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "mt-1 text-xs text-muted-foreground",
                      children: "Rangkaian aktivitas resmi Paket Wisata Full Day Ekang Anculai.",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "mt-4 grid gap-3",
                      children: addonExperiences.map((addon) => {
                        const isSelected = selectedAddons.includes(addon.id);
                        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          "button",
                          {
                            type: "button",
                            onClick: () => toggleAddon(addon.id),
                            className: cn(
                              "flex items-center justify-between rounded-2xl border p-4 text-left transition-all",
                              isSelected
                                ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                                : "border-border hover:bg-accent/50",
                            ),
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                    className: cn(
                                      "grid size-6 place-items-center rounded-full transition-colors",
                                      isSelected
                                        ? "bg-primary text-primary-foreground"
                                        : "border border-border bg-card",
                                    ),
                                    children:
                                      isSelected &&
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                                        className: "size-4",
                                      }),
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                        className: "font-bold text-foreground",
                                        children: addon.nama,
                                      }),
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                        className: "text-xs text-muted-foreground",
                                        children: addon.desc,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                className: "text-xs font-extrabold text-primary",
                                children: "Terkonfirmasi",
                              }),
                            ],
                          },
                          addon.id,
                        );
                      }),
                    }),
                  ],
                }),
              }),
            step === 3 &&
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "space-y-6",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "rounded-2xl border border-primary/20 bg-primary/5 p-5",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "text-xs font-bold tracking-wider text-primary uppercase",
                        children: "Ringkasan Perencanaan",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "mt-4 space-y-2 border-b border-border pb-4 text-sm",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "flex justify-between font-semibold",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                className: "text-muted-foreground",
                                children: "Opsi Kunjungan:",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                className: "text-foreground",
                                children: durationObj.nama,
                              }),
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "flex justify-between text-xs",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                className: "text-muted-foreground",
                                children: "Tanggal & Jam Kunjungan:",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                                className: "text-foreground font-bold",
                                children: [
                                  visitDate
                                    ? visitDate.split("-").reverse().join("/")
                                    : "Belum dipilih",
                                  " ",
                                  visitTime ? `(${visitTime} WIB)` : "",
                                ],
                              }),
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "flex justify-between text-xs",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                className: "text-muted-foreground",
                                children: "Jumlah Peserta:",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                                className: "text-foreground",
                                children: [
                                  adults,
                                  " Dewasa",
                                  children > 0 ? `, ${children} Anak` : "",
                                ],
                              }),
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "flex justify-between text-xs",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                className: "text-muted-foreground",
                                children: "Aktivitas Dipilih:",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                                className: "text-foreground",
                                children: [selectedAddons.length, " Aktivitas"],
                              }),
                            ],
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "mt-4 flex items-center justify-between",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className: "text-sm font-bold text-foreground",
                            children: "Status Konfirmasi:",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            className: "text-base font-extrabold text-primary",
                            children: "Konfirmasi Pengelola",
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "space-y-4",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "grid gap-4 sm:grid-cols-2",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
                                className: "text-xs font-bold text-muted-foreground",
                                children: [
                                  "Nama Lengkap Anda ",
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                    className: "text-destructive",
                                    children: "*",
                                  }),
                                ],
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                                type: "text",
                                placeholder: "Contoh: Budi Santoso",
                                value: namaPemesan,
                                onChange: (e) => setNamaPemesan(e.target.value),
                                className:
                                  "mt-1.5 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20",
                              }),
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
                                className: "text-xs font-bold text-muted-foreground",
                                children: [
                                  "Nomor WhatsApp Aktif ",
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                    className: "text-destructive",
                                    children: "*",
                                  }),
                                ],
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                                type: "tel",
                                placeholder: "Contoh: 08123456789",
                                value: whatsappInput,
                                onChange: (e) => setWhatsappInput(e.target.value),
                                className:
                                  "mt-1.5 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20",
                              }),
                            ],
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                            className: "text-xs font-bold text-muted-foreground",
                            children: "Alamat Email (Opsional)",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                            type: "email",
                            placeholder: "Contoh: budi@gmail.com",
                            value: emailInput,
                            onChange: (e) => setEmailInput(e.target.value),
                            className:
                              "mt-1.5 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                            className: "text-xs font-bold text-muted-foreground",
                            children: "Catatan Khusus (Opsional)",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
                            placeholder:
                              "Contoh: Berminat pada workshop membatik dan interaksi warga",
                            rows: 2,
                            value: catatan,
                            onChange: (e) => setCatatan(e.target.value),
                            className:
                              "mt-1.5 w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/20",
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className:
                      "flex items-center gap-2 rounded-2xl bg-amber-500/10 p-3 text-xs font-medium text-amber-800 dark:text-amber-300",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
                        className: "size-4 shrink-0 text-amber-600",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        children:
                          "Tanpa biaya pembayaran di muka. Kode reservasi unik tersimpan otomatis di database pengelola.",
                      }),
                    ],
                  }),
                ],
              }),
            step === 4 &&
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "py-6 text-center space-y-5",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className:
                      "mx-auto grid size-16 place-items-center rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                      className: "size-10",
                    }),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className:
                          "inline-block rounded-full bg-emerald-100 dark:bg-emerald-900/40 px-3 py-1 text-xs font-extrabold text-emerald-800 dark:text-emerald-300 mb-2",
                        children: "Terdaftar di Database Pengelola",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                        className: "text-xl sm:text-2xl font-extrabold text-foreground",
                        children: "Reservasi Berhasil Dibuat!",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "mt-1 text-xs text-muted-foreground max-w-md mx-auto",
                        children:
                          "Kode reservasi resmi Anda telah diterbitkan dan tersimpan di sistem pengelola desa.",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className:
                      "mx-auto max-w-sm rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4 text-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className:
                          "text-[11px] font-bold text-muted-foreground uppercase tracking-wider",
                        children: "Kode Reservasi Anda",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className:
                          "mt-1 text-2xl font-black text-emerald-700 dark:text-emerald-400 font-mono tracking-widest",
                        children: completedCode,
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className:
                          "mt-3 pt-3 border-t border-emerald-500/15 text-xs font-semibold text-muted-foreground flex justify-between",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                            children: [
                              "Status: ",
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
                                className: "text-amber-600",
                                children: "Pending (Menunggu Chat WA)",
                              }),
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            children: visitDate.split("-").reverse().join("/"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "pt-2 flex flex-col sm:flex-row items-center justify-center gap-3",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                        type: "button",
                        onClick: handleWhatsAppBooking,
                        className:
                          "w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-xs font-extrabold text-white shadow-card hover:bg-emerald-700 transition-all cursor-pointer",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
                            className: "size-4",
                          }),
                          "Buka Chat WhatsApp Pengelola Lagi",
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                        type: "button",
                        onClick: () => {
                          onOpenChange(false);
                          setStep(1);
                        },
                        className:
                          "w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-xs font-bold text-foreground hover:bg-accent cursor-pointer",
                        children: "Tutup Modul",
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
        step <= 3 &&
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "shrink-0 flex items-center justify-between border-t border-border bg-surface px-4 sm:px-6 py-3 sm:py-4 shadow-soft",
            children: [
              step > 1
                ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                    type: "button",
                    onClick: () => setStep((s) => Math.max(1, s - 1)),
                    className:
                      "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold text-muted-foreground hover:bg-accent hover:text-foreground",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
                        className: "size-4",
                      }),
                      "Kembali",
                    ],
                  })
                : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
              step < 3
                ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                    type: "button",
                    onClick: handleNextStep,
                    className:
                      "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-emerald-deep transition-all active:scale-95 cursor-pointer",
                    children: [
                      "Lanjutkan",
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
                        className: "size-4",
                      }),
                    ],
                  })
                : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                    type: "button",
                    disabled: isSubmitting,
                    onClick: handleWhatsAppBooking,
                    className:
                      "inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-xs font-extrabold text-white shadow-card hover:bg-emerald-700 cursor-pointer disabled:opacity-50 transition-all",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
                        className: "size-4",
                      }),
                      isSubmitting ? "Menyimpan Ke Database..." : "Simpan Reservasi & WhatsApp",
                    ],
                  }),
            ],
          }),
      ],
    }),
  });
}
var logo_bintan_default = "/assets/logo-bintan-zYIFLtNG.png";
var navItems = [
  {
    label: "Profil Desa",
    to: "/",
  },
  {
    label: "Potensi Wisata",
    to: "/",
    hash: "potensi",
  },
  {
    label: "Pengalaman",
    to: "/",
    hash: "pengalaman",
  },
  {
    label: "Kegiatan",
    to: "/",
    hash: "kegiatan",
  },
  {
    label: "Galeri",
    to: "/galeri",
  },
  {
    label: "Paket Wisata",
    to: "/rencanakan-kunjungan",
  },
  {
    label: "Kontak",
    to: "/",
    hash: "kontak",
  },
];
function Logo({ inverted }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
    to: "/",
    className: "flex shrink-0 items-center gap-2 sm:gap-2.5 group",
    "aria-label": "Desa Wisata Ekang Anculai",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className:
          "relative shrink-0 flex items-center justify-center rounded-xl bg-white p-1 sm:p-1.5 shadow-sm ring-1 ring-border/60 transition-transform duration-300 group-hover:scale-105",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
          src: logo_bintan_default,
          alt: "Logo Lambang Bintan - Desa Wisata Ekang Anculai",
          className: "h-7 sm:h-8.5 w-auto object-contain",
        }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
        className: "shrink-0 leading-tight",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
            className: "flex items-center gap-1.5",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className: cn(
                  "block whitespace-nowrap text-sm sm:text-lg font-black tracking-tight",
                  inverted ? "text-white" : "text-foreground",
                ),
                children: "EKANG ANCULAI",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                className:
                  "hidden xl:inline-flex shrink-0 rounded-full bg-gold/20 px-2 py-0.5 text-[10px] font-extrabold text-gold ring-1 ring-gold/40",
                children: "Desa Berprestasi 2026",
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: cn(
              "block whitespace-nowrap text-[10px] sm:text-[11px] font-semibold",
              inverted ? "text-white/80" : "text-muted-foreground",
            ),
            children: "Teluk Sebong, Bintan",
          }),
        ],
      }),
    ],
  });
}
function Header() {
  const [scrolled, setScrolled] = (0, import_react.useState)(false);
  const [openMobileMenu, setOpenMobileMenu] = (0, import_react.useState)(false);
  const [openPlanner, setOpenPlanner] = (0, import_react.useState)(false);
  const isHome = useRouterState({ select: (s) => s.location.pathname }) === "/";
  (0, import_react.useEffect)(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const transparent = isHome && !scrolled;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
        href: "#main-content",
        className:
          "sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-amber-400 focus:px-4 focus:py-2 focus:text-xs focus:font-black focus:text-black focus:shadow-2xl focus:ring-2 focus:ring-black",
        children: "Skip to main content",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
        className: cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          transparent
            ? "bg-gradient-to-b from-black/80 via-black/40 to-transparent"
            : "border-b border-border/80 bg-background/95 shadow-sm backdrop-blur-xl",
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: cn(
              "hidden lg:block border-b text-[11px] font-semibold transition-all py-1.5",
              transparent
                ? "border-white/15 bg-black/25 text-white/90 backdrop-blur-md"
                : "border-border/60 bg-muted/40 text-muted-foreground",
            ),
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex items-center gap-5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      className: "flex items-center gap-1.5",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, {
                          className: "size-3.5 text-[#C58A32] shrink-0",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          children: "Cuaca Bintan: Cerah 29°C",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      className: "flex items-center gap-1.5",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
                          className: "size-3.5 text-[#2F7D4A] shrink-0",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          children: "Jam Operasional: 08.00 - 17.00 WIB",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      className: "flex items-center gap-1.5",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
                          className: "size-3.5 text-[#C58A32] shrink-0",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          children: "Teluk Sebong, Bintan",
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex items-center gap-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      className:
                        "inline-flex items-center gap-1.5 rounded-full bg-[#E8F1E8] px-2.5 py-0.5 text-[#14532D] font-extrabold ring-1 ring-[#2F7D4A]/30",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "size-1.5 rounded-full bg-[#2F7D4A] animate-pulse",
                        }),
                        "Desa Wisata Hijau & Kreatif",
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                      href: `https://wa.me/${WHATSAPP_NUMBER}`,
                      target: "_blank",
                      rel: "noreferrer",
                      className:
                        "flex items-center gap-1 font-extrabold text-[#C58A32] hover:underline focus:outline-none focus:ring-1 focus:ring-[#C58A32] rounded-sm",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneCall, {
                          className: "size-3",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          children: "Hotline Pengelola: +62 831-6634-1280",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className:
              "mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { inverted: transparent }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
                className: "hidden items-center gap-1 lg:gap-1.5 xl:flex",
                "aria-label": "Navigasi utama",
                children: navItems.map((item) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    Link,
                    {
                      to: item.to,
                      ...("hash" in item ? { hash: item.hash } : {}),
                      className: cn(
                        "rounded-full px-3.5 py-1.5 text-xs font-extrabold transition-all whitespace-nowrap min-h-[38px] inline-flex items-center",
                        transparent
                          ? "text-white/90 hover:bg-white/20 hover:text-[#F7F4EA]"
                          : "text-foreground/80 hover:bg-[#E8F1E8] hover:text-[#064E3B] active:bg-[#064E3B] active:text-white",
                      ),
                      children: item.label,
                    },
                    item.label,
                  ),
                ),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "flex shrink-0 items-center gap-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                    type: "button",
                    onClick: () => setOpenPlanner(true),
                    className:
                      "hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#C58A32] hover:bg-[#A87226] px-4 py-2 text-xs font-black text-white shadow-card transition-all duration-300 hover:scale-105 active:scale-95 ring-1 ring-[#DCA348] cursor-pointer min-h-[44px]",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, {
                        className: "size-4 shrink-0 text-white",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        children: "Rencanakan Kunjungan",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, {
                    open: openMobileMenu,
                    onOpenChange: setOpenMobileMenu,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
                        asChild: true,
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                          "aria-label": "Buka menu navigasi",
                          className: cn(
                            "grid size-10 place-items-center rounded-full transition-colors lg:hidden",
                            transparent
                              ? "bg-white/20 text-white hover:bg-white/30"
                              : "bg-muted text-foreground hover:bg-accent",
                          ),
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
                            className: "size-5",
                          }),
                        }),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
                        side: "right",
                        className: "w-[88vw] max-w-sm border-l border-border p-0 [&>button]:hidden",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className:
                              "flex items-center justify-between border-b border-border px-5 py-4",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
                                inverted: false,
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                                onClick: () => setOpenMobileMenu(false),
                                "aria-label": "Tutup menu",
                                className:
                                  "grid size-9 place-items-center rounded-full bg-muted text-foreground",
                                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                                  className: "size-4",
                                }),
                              }),
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
                            className: "flex flex-col gap-1 p-4",
                            "aria-label": "Navigasi mobile",
                            children: [
                              navItems.map((item) =>
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  Link,
                                  {
                                    to: item.to,
                                    ...("hash" in item ? { hash: item.hash } : {}),
                                    onClick: () => setOpenMobileMenu(false),
                                    className:
                                      "rounded-2xl px-4 py-3 text-sm font-bold text-foreground transition-colors hover:bg-accent hover:text-primary",
                                    children: item.label,
                                  },
                                  item.label,
                                ),
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                                type: "button",
                                onClick: () => {
                                  setOpenMobileMenu(false);
                                  setOpenPlanner(true);
                                },
                                className:
                                  "mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-4 py-3 text-center text-xs font-extrabold text-gold-foreground shadow-card hover:bg-gold/90 active:scale-95 cursor-pointer",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, {
                                    className: "size-4",
                                  }),
                                  "Rencanakan Kunjungan",
                                ],
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                                href: `https://wa.me/${WHATSAPP_NUMBER}`,
                                target: "_blank",
                                rel: "noreferrer",
                                onClick: () => setOpenMobileMenu(false),
                                className:
                                  "mt-2 rounded-full bg-primary px-4 py-3 text-center text-xs font-extrabold text-primary-foreground",
                                children: "Hubungi WA Pengelola",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TripPlannerModal, {
        open: openPlanner,
        onOpenChange: setOpenPlanner,
      }),
    ],
  });
}
var kolomNavigasi = [
  {
    label: "Profil Wisata Ekang Anculai",
    href: "/",
  },
  {
    label: "Potensi Wisata",
    href: "/#potensi",
  },
  {
    label: "Pengalaman CBT",
    href: "/#pengalaman",
  },
  {
    label: "Galeri Foto",
    href: "/galeri",
  },
  {
    label: "Paket & Pengalaman Wisata",
    href: "/rencanakan-kunjungan",
  },
  {
    label: "Kegiatan Desa 2026",
    href: "/#kegiatan",
  },
  {
    label: "Peta & Akses",
    href: "/#peta",
  },
];
var kolomPotensi = [
  {
    label: "Rumah Batik Bintan",
    href: "/#umkm-budaya",
  },
  {
    label: "Ekang Mangrove Park",
    href: "/#potensi",
  },
  {
    label: "Wisata Perkebunan Warga",
    href: "/#potensi",
  },
  {
    label: "Homestay Rumah Warga",
    href: "/rencanakan-kunjungan",
  },
  {
    label: "Wisata Gastronomi",
    href: "/#umkm-budaya",
  },
  {
    label: "Pentas Seni Reog Sedulur Manunggal",
    href: "/#umkm-budaya",
  },
];
function Footer() {
  const [emailSub, setEmailSub] = (0, import_react.useState)("");
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!emailSub) return;
    toast.success(
      "Terima kasih! Anda berhasil mendaftar newsletter info wisata Desa Ekang Anculai.",
    );
    setEmailSub("");
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
    id: "kontak",
    className: "w-full bg-[#022C22] text-white border-t border-emerald-950",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className:
            "flex flex-wrap items-center justify-between gap-4 border-b border-primary-foreground/15 pb-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "flex flex-wrap items-center gap-3",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                  className:
                    "inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/15 px-4 py-2 text-xs font-extrabold text-gold uppercase",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-4" }),
                    "Desa Berprestasi Prov. Kepri 2026",
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className:
                    "rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2 text-xs font-bold tracking-wide uppercase",
                  children: "Pemdes Ekang Anculai",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className:
                    "rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2 text-xs font-bold tracking-wide uppercase",
                  children: "Pemkab Bintan",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className:
                    "rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-2 text-xs font-bold tracking-wide uppercase",
                  children: "Pengelola Wisata Pesona Ekang",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "flex items-center gap-2 text-xs font-semibold text-primary-foreground/80",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
                  className: "size-4 text-gold",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  children: "Desa Wisata Hijau dan Kreatif Berbasis Masyarakat",
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className:
                        "grid size-11 place-items-center rounded-2xl bg-white p-1.5 shadow-soft shrink-0 ring-1 ring-white/20",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                        src: logo_bintan_default,
                        alt: "Logo Lambang Bintan",
                        className: "size-8 object-contain",
                      }),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "text-lg sm:text-xl font-black tracking-tight block",
                          children: "DESA WISATA HIJAU DAN KREATIF",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "block text-xs font-black text-gold",
                          children: "EKANG ANCULAI",
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "mt-3 text-xs font-extrabold italic text-gold",
                  children: '"Where Nature, Culture, Creativity, and Village Life Grow Together."',
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "mt-3 text-xs leading-relaxed text-primary-foreground/80",
                  children:
                    "Kecamatan Teluk Sebong, Kabupaten Bintan, Kepulauan Riau. Mengusung pariwisata berbasis masyarakat (CBT) melalui ekowisata mangrove, Rumah Batik Bintan, perkebunan warga, gastronomi, dan kebudayaan desa.",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
                  onSubmit: handleSubscribe,
                  className: "mt-5 space-y-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                      className: "text-[11px] font-extrabold tracking-wider text-gold uppercase",
                      children: "Langganan Info & Kunjungan Desa",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className:
                        "flex items-center rounded-full bg-primary-foreground/15 p-1 border border-primary-foreground/20",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                          type: "email",
                          required: true,
                          placeholder: "Email Anda...",
                          value: emailSub,
                          onChange: (e) => setEmailSub(e.target.value),
                          className:
                            "w-full bg-transparent px-3 py-1.5 text-xs text-primary-foreground outline-none placeholder:text-primary-foreground/60",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                          type: "submit",
                          "aria-label": "Daftar newsletter",
                          className:
                            "grid size-8 shrink-0 place-items-center rounded-full bg-gold text-gold-foreground transition-transform hover:scale-105",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, {
                            className: "size-3.5",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                  className: "text-xs font-bold tracking-wider text-gold uppercase",
                  children: "Navigasi Utama",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
                  className: "mt-4 space-y-2.5",
                  children: kolomNavigasi.map((item) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "li",
                      {
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                          href: item.href,
                          className:
                            "text-xs text-primary-foreground/80 transition-colors hover:text-gold",
                          children: item.label,
                        }),
                      },
                      item.label,
                    ),
                  ),
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                  className: "text-xs font-bold tracking-wider text-gold uppercase",
                  children: "Potensi & Pengalaman",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
                  className: "mt-4 space-y-2.5",
                  children: kolomPotensi.map((item) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "li",
                      {
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                          href: item.href,
                          className:
                            "text-xs text-primary-foreground/80 transition-colors hover:text-gold",
                          children: item.label,
                        }),
                      },
                      item.label,
                    ),
                  ),
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                  className: "text-xs font-bold tracking-wider text-gold uppercase",
                  children: "Kontak Pengelola",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
                  className: "mt-4 space-y-3 text-xs text-primary-foreground/80",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                      className: "flex gap-3",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
                          className: "mt-0.5 size-4 shrink-0 text-gold",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          children:
                            "Jl. Jendral Sudirman, Kp. Sukoharjo, Ekang Anculai, Teluk Sebong, Bintan 29151",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                      className: "flex gap-3",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
                          className: "size-4 shrink-0 text-gold",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                              href: `https://wa.me/${WHATSAPP_NUMBER}`,
                              target: "_blank",
                              rel: "noreferrer",
                              className: "hover:text-gold transition-colors font-bold block",
                              children: "+62 878 6633 1231 (WA Pengelola)",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                              className: "text-[10px] opacity-75",
                              children: "Layanan Informasi 08.00–17.00 WIB",
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                      className: "flex gap-3",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
                          className: "size-4 shrink-0 text-gold",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                          href: "mailto:reservation@desawisataekanganculai.id",
                          className: "hover:text-gold transition-colors",
                          children: "reservation@desawisataekanganculai.id",
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "mt-5 flex gap-2",
                  children: [
                    {
                      Icon: Instagram,
                      label: "Instagram",
                      href: "https://instagram.com/desawisataekang",
                    },
                    {
                      Icon: Facebook,
                      label: "Facebook",
                      href: "https://facebook.com",
                    },
                    {
                      Icon: Music2,
                      label: "TikTok",
                      href: "https://tiktok.com",
                    },
                  ].map(({ Icon, label, href }) =>
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "a",
                      {
                        href,
                        target: "_blank",
                        rel: "noreferrer",
                        "aria-label": label,
                        className:
                          "grid size-9 place-items-center rounded-full bg-primary-foreground/15 transition-all duration-300 hover:-translate-y-1 hover:bg-gold hover:text-gold-foreground",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
                          className: "size-4",
                        }),
                      },
                      label,
                    ),
                  ),
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className:
            "flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/70 sm:flex-row sm:items-center sm:justify-between",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
              children: [
                "© ",
                /* @__PURE__ */ new Date().getFullYear(),
                " Desa Wisata Ekang Anculai, Kabupaten Bintan. Hak cipta dilindungi undang-undang.",
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "flex gap-5",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                  href: "https://desaekanganculai.bintankab.go.id/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "hover:text-gold",
                  children: "Portal Resmi Pemdes Ekang Anculai ↗",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                  href: "https://www.bintankab.go.id/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "hover:text-gold",
                  children: "Pemkab Bintan ↗",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Halo Pengelola Desa Wisata Ekang Anculai, saya ingin mengetahui informasi tentang Desa Wisata Ekang Anculai.")}`;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
    "aria-label": "Kontak WhatsApp Melayang",
    className: "fixed right-6 z-50",
    style: { bottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))" },
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
      href,
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Hubungi Pengelola Desa Wisata Ekang Anculai via WhatsApp",
      "aria-label": "Hubungi Pengelola Desa Wisata Ekang Anculai via WhatsApp",
      className:
        "group relative flex size-14 items-center justify-center rounded-full bg-[#14532D] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#064E3B] active:scale-95 ring-4 ring-[#14532D]/30 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#C58A32]",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
          className: "size-7 text-white fill-current",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          className: "sr-only",
          children: "Tanya Pengelola WA",
        }),
      ],
    }),
  });
}
var Toaster$1 = ({ ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
    className: "toaster group",
    toastOptions: {
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
      },
    },
    ...props,
  });
};
function NotFoundComponent() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "flex min-h-screen items-center justify-center bg-background px-4",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "max-w-md text-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
          className: "text-7xl font-bold text-foreground",
          children: "404",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
          className: "mt-4 text-xl font-semibold text-foreground",
          children: "Halaman Tidak Ditemukan",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children: "Halaman yang Anda cari tidak ditemukan atau telah dipindahkan.",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "mt-6",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
            to: "/",
            className:
              "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
            children: "Kembali ke Profil Wisata Ekang Anculai",
          }),
        }),
      ],
    }),
  });
}
function ErrorComponent({ error, reset }) {
  const isDev = false;
  const router = useRouter();
  (0, import_react.useEffect)(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "flex min-h-screen items-center justify-center bg-background px-4",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "max-w-xl text-center",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
          className: "text-xl font-semibold tracking-tight text-foreground",
          children: "Terjadi Kendala Memuat Halaman",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children:
            "Sistem mengalami kendala sementara saat memuat data. Silakan coba muat ulang halaman.",
        }),
        isDev,
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "mt-6 flex flex-wrap justify-center gap-2",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
              onClick: () => {
                router.invalidate();
                reset();
              },
              className:
                "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 cursor-pointer",
              children: "Coba Lagi",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
              href: "/",
              className:
                "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent cursor-pointer",
              children: "Kembali ke Beranda",
            }),
          ],
        }),
      ],
    }),
  });
}
var Route$6 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        name: "theme-color",
        content: "#0d5c3a",
      },
      { title: "Desa Wisata Ekang Anculai | Desa Wisata Hijau dan Kreatif Bintan" },
      {
        name: "description",
        content:
          "Jelajahi Desa Wisata Ekang Anculai di Teluk Sebong, Bintan. Temukan pengalaman berbasis masyarakat melalui budaya, batik, perkebunan, mangrove, gastronomi, dan kehidupan desa.",
      },
      {
        name: "author",
        content: "Pemerintah & Pengelola Desa Wisata Ekang Anculai",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:site_name",
        content: "Desa Wisata Ekang Anculai",
      },
      {
        property: "og:locale",
        content: "id_ID",
      },
      {
        property: "og:title",
        content: "Desa Wisata Ekang Anculai | Desa Wisata Hijau dan Kreatif Bintan",
      },
      {
        property: "og:description",
        content:
          "Jelajahi Desa Wisata Ekang Anculai di Teluk Sebong, Bintan. Temukan pengalaman berbasis masyarakat melalui budaya, batik, perkebunan, mangrove, gastronomi, dan kehidupan desa.",
      },
      {
        property: "og:image",
        content: "https://desawisataekanganculai.id/android-chrome-512x512.png",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Desa Wisata Ekang Anculai | Desa Wisata Hijau dan Kreatif Bintan",
      },
      {
        name: "twitter:description",
        content:
          "Where Nature, Culture, Creativity, and Village Life Grow Together. Destinasi wisata berbasis masyarakat di Teluk Sebong, Bintan.",
      },
      {
        name: "twitter:image",
        content: "https://desawisataekanganculai.id/android-chrome-512x512.png",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: styles_default,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap",
      },
      {
        rel: "icon",
        href: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});
function RootShell({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    lang: "id",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
        children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})],
      }),
    ],
  });
}
function RootComponent() {
  const { queryClient } = Route$6.useRouteContext();
  const isAdmin = useRouterState({ select: (s) => s.location.pathname }).startsWith("/admin");
  (0, import_react.useEffect)(() => {
    cmsStore.recordVisit();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
    client: queryClient,
    children: [
      !isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
      }),
      !isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
      !isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-center" }),
    ],
  });
}
var $$splitComponentImporter$4 = () => import("./routes-DfSrpcbj.mjs");
var Route$5 = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Desa Wisata Hijau dan Kreatif Ekang Anculai | Where Nature, Culture, Creativity, and Village Life Grow Together.",
      },
      {
        name: "description",
        content:
          "Desa Wisata Hijau dan Kreatif Ekang Anculai, Bintan — Where Nature, Culture, Creativity, and Village Life Grow Together. Nikmati pengalaman autentik membatik, perkebunan warga, gastronomi, mangrove, budaya, dan Homestay Rumah Warga.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://desawisataekanganculai.id/",
      },
      {
        property: "og:title",
        content: "Desa Wisata Hijau dan Kreatif Ekang Anculai",
      },
      {
        property: "og:description",
        content:
          "Where Nature, Culture, Creativity, and Village Life Grow Together. Destinasi wisata berbasis masyarakat di Teluk Sebong, Bintan.",
      },
      {
        property: "og:image",
        content: "https://desawisataekanganculai.id/android-chrome-512x512.png",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Desa Wisata Hijau dan Kreatif Ekang Anculai",
      },
      {
        name: "twitter:description",
        content:
          "Where Nature, Culture, Creativity, and Village Life Grow Together. Destinasi wisata berbasis masyarakat di Teluk Sebong, Bintan.",
      },
      {
        name: "twitter:image",
        content: "https://desawisataekanganculai.id/android-chrome-512x512.png",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://desawisataekanganculai.id/",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component"),
});
var $$splitComponentImporter$3 = () => import("./admin-BigVhxOA.mjs");
var Route$4 = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Panel | Pengelolaan Desa Wisata Ekang Anculai" },
      {
        name: "robots",
        content: "noindex, nofollow",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
});
var $$splitComponentImporter$2 = () => import("./galeri-Bl2gXHIZ.mjs");
var Route$3 = createFileRoute("/galeri")({
  head: () => ({
    meta: [
      { title: "Galeri Foto | Desa Wisata Ekang Anculai Bintan" },
      {
        name: "description",
        content:
          "Galeri foto dokumentasi Desa Wisata Ekang Anculai: alam, mangrove, perkebunan, batik, budaya, gastronomi, homestay, dan aktivitas masyarakat.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://desawisataekanganculai.id/galeri",
      },
      {
        property: "og:title",
        content: "Galeri Foto | Desa Wisata Ekang Anculai Bintan",
      },
      {
        property: "og:description",
        content:
          "Galeri foto dokumentasi Desa Wisata Ekang Anculai: alam, mangrove, perkebunan, batik, budaya, gastronomi, homestay, dan aktivitas masyarakat.",
      },
      {
        property: "og:image",
        content: "https://desawisataekanganculai.id/android-chrome-512x512.png",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Galeri Foto | Desa Wisata Ekang Anculai Bintan",
      },
      {
        name: "twitter:description",
        content:
          "Dokumentasi keindahan alam, budaya, membatik, dan kehidupan masyarakat Desa Wisata Ekang Anculai Bintan.",
      },
      {
        name: "twitter:image",
        content: "https://desawisataekanganculai.id/android-chrome-512x512.png",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://desawisataekanganculai.id/galeri",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
});
/**
 * Memeriksa apakah URL merupakan URL publikasi/artikel spesifik (Bukan homepage / domain root / URL gambar).
 */
function isSpecificArticleUrl(url) {
  if (!url || typeof url !== "string" || !url.trim() || url === "#") return false;
  try {
    const pathname = new URL(url.trim()).pathname.toLowerCase();
    if (/\.(jpg|jpeg|png|webp|gif|svg|bmp|ico)$/i.test(pathname)) return false;
    if (
      [
        "",
        "/",
        "/index.html",
        "/index.php",
        "/index.htm",
        "/home",
        "/home/",
        "/berita",
        "/berita/",
        "/artikel",
        "/artikel/",
      ].includes(pathname)
    )
      return false;
    return (
      pathname.length > 3 &&
      (pathname.includes("-") ||
        pathname.includes("_") ||
        /\d/.test(pathname) ||
        pathname.split("/").filter(Boolean).length >= 2)
    );
  } catch {
    return false;
  }
}
function SourceLink({ source }) {
  if (!source || (!source.name && !source.url)) return null;
  const hasValidArticleUrl = isSpecificArticleUrl(source.url);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className:
      "mt-2.5 border-t border-border/40 pt-2 text-[11px] text-muted-foreground/80 font-medium",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "flex flex-wrap items-center justify-between gap-1.5",
      children: [
        source.name
          ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
              className: "truncate max-w-[280px] sm:max-w-none opacity-85",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "font-semibold text-foreground/80",
                  children: "Sumber:",
                }),
                " ",
                source.name,
                source.publishedAt &&
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                    className: "ml-1 opacity-75",
                    children: ["• ", source.publishedAt],
                  }),
              ],
            })
          : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}),
        hasValidArticleUrl &&
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
            href: source.url,
            target: "_blank",
            rel: "noopener noreferrer",
            className:
              "inline-flex items-center gap-1 font-semibold text-muted-foreground hover:text-primary transition-colors shrink-0",
            title: `Buka artikel publikasi resmi: ${source.name || "Sumber"}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Baca sumber asli" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
                className: "size-3 opacity-70",
              }),
            ],
          }),
      ],
    }),
  });
}
var iconMap = {
  "🎨": Palette,
  batik: Palette,
  creative: Palette,
  "🌱": Sprout,
  farm: Sprout,
  farming: Sprout,
  kebun: Sprout,
  "🍠": UtensilsCrossed,
  "🍽️": UtensilsCrossed,
  culinary: UtensilsCrossed,
  gastronomy: CookingPot,
  kuliner: UtensilsCrossed,
  dining: UtensilsCrossed,
  "🧺": Layers,
  craft: Layers,
  kerajinan: Layers,
  "🌿": Trees,
  mangrove: Trees,
  nature: Trees,
  alam: Trees,
  compass: Compass,
  "🏺": Drama,
  "🎭": Drama,
  culture: Drama,
  budaya: Drama,
  reog: Drama,
  "🛍️": Gift,
  "🎁": Gift,
  souvenir: Gift,
  "oleh-oleh": Gift,
  oleholeh: Gift,
  gift: Gift,
  shopping: ShoppingBag,
  "👥": Users,
  "🤝": HeartHandshake,
  community: Users,
  masyarakat: Users,
  kegiatan: Users,
  umkm: ShoppingBag,
  homestay: House,
  "🏡": House,
  "🌙": Moon,
  night: Moon,
  "☕": Coffee,
  breakfast: Coffee,
  "🚶": Footprints,
  walk: Footprints,
  "📸": Camera,
  camera: Camera,
  "👋": HeartHandshake,
  farewell: HeartHandshake,
};
function CategoryIcon({ icon, className = "size-5" }) {
  const IconComponent = iconMap[(icon || "").toLowerCase().trim()] || iconMap[icon] || Sparkles;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconComponent, { className });
}
var DEFAULT_SITE_URL = "https://desawisataekanganculai.id";
/**
 * Safely render JSON-LD script tag with JSON stringification to prevent XSS
 */
function JsonLdScript({ data }) {
  if (!data) return null;
  const jsonString = JSON.stringify(data).replace(/</g, "\\u003c").replace(/>/g, "\\u003e");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: { __html: jsonString },
  });
}
/**
 * Schema.org TouristDestination & LocalBusiness for Ekang Anculai Village
 */
function getVillageJsonLd(villageInfo, approvedReviews = []) {
  const baseUrl = (process.env["SITE_URL"] || DEFAULT_SITE_URL).replace(/\/$/, "");
  const avgRating =
    approvedReviews.length > 0
      ? (
          approvedReviews.reduce((sum, r) => sum + (r.rating || 5), 0) / approvedReviews.length
        ).toFixed(1)
      : null;
  const schema = {
    "@context": "https://schema.org",
    "@type": ["TouristDestination", "LocalBusiness"],
    "@id": `${baseUrl}/#village`,
    name: villageInfo?.nama || "Desa Wisata Ekang Anculai",
    description:
      villageInfo?.tagline ||
      "Desa Wisata Hijau dan Kreatif Bintan. Destinasi ekowisata berbasis masyarakat di Kecamatan Teluk Sebong, Kabupaten Bintan, Kepulauan Riau.",
    url: baseUrl,
    telephone: villageInfo?.whatsapp || "+6281268326284",
    email: villageInfo?.email || "reservation@desawisataekanganculai.id",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        villageInfo?.alamat || "Jl. Jendral Sudirman, Kp. Sukoharjo, Desa Ekang Anculai",
      addressLocality: "Teluk Sebong",
      addressRegion: "Kepulauan Riau",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 1.1345,
      longitude: 104.4211,
    },
    openingHours: "Mo-Su 08:00-17:00",
    priceRange: "$$",
    touristType: ["Ecotourist", "Cultural Tourist", "Family Tourist", "Nature Lover"],
  };
  if (avgRating && approvedReviews.length > 0)
    schema["aggregateRating"] = {
      "@type": "AggregateRating",
      ratingValue: avgRating,
      reviewCount: approvedReviews.length,
      bestRating: "5",
      worstRating: "1",
    };
  return schema;
}
/**
 * Schema.org TouristAttraction for individual destination spotlight/landmark
 */
function getDestinationJsonLd(landmark) {
  const baseUrl = (process.env["SITE_URL"] || DEFAULT_SITE_URL).replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: landmark.nama,
    description: landmark.deskripsi,
    image: landmark.image,
    url: `${baseUrl}/desa/${landmark.id}`,
    touristType: [landmark.kategori || "Wisata Alam"],
    location: {
      "@type": "Place",
      name: "Desa Wisata Ekang Anculai",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Teluk Sebong",
        addressRegion: "Kepulauan Riau",
        addressCountry: "ID",
      },
    },
  };
}
/**
 * Schema.org BreadcrumbList
 */
function getBreadcrumbJsonLd(items) {
  const baseUrl = (process.env["SITE_URL"] || DEFAULT_SITE_URL).replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${baseUrl}${item.url}`,
    })),
  };
}
/**
 * Schema.org FAQPage for FAQ section
 */
function getFaqJsonLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.pertanyaan,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.jawaban,
      },
    })),
  };
}
var Route$2 = createFileRoute("/rencanakan-kunjungan")({
  head: () => ({
    meta: [
      { title: "Paket & Rancang Wisata Kustom Ekang Anculai | Desa Wisata Hijau dan Kreatif" },
      {
        name: "description",
        content:
          "Pilih paket wisata resmi (Full Day, 2D1N Live-in Homestay) atau rancang paket kustom sendiri sesuai kebutuhan keluarga, komunitas, dan rombongan di Desa Wisata Ekang Anculai Bintan.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://desawisataekanganculai.id/rencanakan-kunjungan",
      },
      {
        property: "og:title",
        content: "Paket & Rancang Wisata Kustom Ekang Anculai | Desa Wisata Hijau dan Kreatif",
      },
      {
        property: "og:description",
        content:
          "Rencanakan perjalanan wisata autentik di Desa Ekang Anculai Bintan: edukasi membatik, agrowisata, mangrove, budaya, dan Homestay Desa.",
      },
      {
        property: "og:image",
        content: "https://desawisataekanganculai.id/android-chrome-512x512.png",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Paket & Pengalaman Wisata Ekang Anculai Bintan",
      },
      {
        name: "twitter:description",
        content:
          "Rencanakan perjalanan wisata autentik di Desa Ekang Anculai Bintan: edukasi membatik, agrowisata, mangrove, budaya, dan Homestay Desa.",
      },
      {
        name: "twitter:image",
        content: "https://desawisataekanganculai.id/android-chrome-512x512.png",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://desawisataekanganculai.id/rencanakan-kunjungan",
      },
    ],
  }),
  component: PaketPengalamanWisataPage,
});
var customModulesList = [
  {
    id: "mod-batik",
    nama: "Edukasi & Workshop Membatik Bintan",
    kategori: "Kreativitas & Kriya",
    estimasi: "± 2 Jam",
    icon: "batik",
    deskripsi:
      "Belajar teknik mencanting batik tulis & cap motif khas Bintan, serta membawa pulang hasil karya kain suvenir sendiri.",
    keunggulan: "Termasuk bahan canting, malam lilin, kain mori, dan bimbingan perajin lokal",
  },
  {
    id: "mod-mangrove",
    nama: "Susur Kawasan Hutan Mangrove & Boardwalk",
    kategori: "Ekowisata & Alam",
    estimasi: "± 1.5 Jam",
    icon: "mangrove",
    deskripsi:
      "Menyusuri jembatan kayu ratusan meter melintasi hutan bakau pedalaman, edukasi ekosistem karbon & pengamatan satwa pesisir.",
    keunggulan: "Pemandangan sunset dan jalur asri bebas polusi",
  },
  {
    id: "mod-kebun",
    nama: "Pengalaman Tani & Berkebun Bersama Petani",
    kategori: "Agrowisata",
    estimasi: "± 1.5 Jam",
    icon: "farm",
    deskripsi:
      "Bercocok tanam langsung di lahan perkebunan masyarakat, mencangkul, merawat tanaman, dan memanen sayuran segar bersama warga.",
    keunggulan: "Interaksi langsung dan pengalaman nyata kehidupan tani",
  },
  {
    id: "mod-reog",
    nama: "Atraksi Kesenian Reog Sedulur Manunggal",
    kategori: "Kesenian Budaya",
    estimasi: "± 1.5 Jam",
    icon: "culture",
    deskripsi:
      "Pementasan atraksi seni tari Reog fersi Kendang Kempul diiringi instrumen gamelan kolosal oleh sanggar seni pemuda desa.",
    keunggulan: "Kesenian budaya autentik kebanggaan masyarakat desa",
  },
  {
    id: "mod-kuliner",
    nama: "Wisata Kuliner & Olahan Rengginang Comel",
    kategori: "Kuliner & UMKM",
    estimasi: "± 1 Jam",
    icon: "culinary",
    deskripsi:
      "Mengenal proses pembuatan Rengginang Comel aneka warna Halal di Dapur Rub, olahan ubi & pisang, serta mencicipi camilan khas desa.",
    keunggulan: "Icip-icip camilan gurih renyah & belanja produk UMKM lokal",
  },
  {
    id: "mod-teko",
    nama: "Ruang Budaya Teko Kayangan & RTH Desa",
    kategori: "Ruang Publik",
    estimasi: "± 1 Jam",
    icon: "culture",
    deskripsi:
      "Kunjungan ke landmark teko air melayang, bersantai di ruang terbuka hijau desa, dan berdiskusi hangat bersama tokoh masyarakat.",
    keunggulan: "Spot foto ikonik & ruang komunitas asri",
  },
  {
    id: "mod-homestay",
    nama: "Live-in Homestay Rumah Warga",
    kategori: "Akomodasi Desa",
    estimasi: "1 Malam",
    icon: "homestay",
    deskripsi:
      "Menginap di kamar keluarga warga desa, merasakan keramahan tuan rumah, sarapan masakan rumahan, dan suasana malam pedesaan.",
    keunggulan: "Kamar bersih berstandar CBT dengan suasana hangat kekeluargaan",
  },
  {
    id: "mod-sepeda",
    nama: "Gowes Keliling Desa & Sentra Kerajinan",
    kategori: "Jelajah Santai",
    estimasi: "± 1 Jam",
    icon: "tour",
    deskripsi:
      "Bersepeda santai menyusuri jalan asri perkampungan, menyapa warga desa, dan singgah di galeri kriya suvenir lokal.",
    keunggulan: "Aktivitas luar ruang yang menyegarkan raga dan pikiran",
  },
];
var customFacilitiesList = [
  {
    id: "fac-lunch",
    label: "Makan Siang Tradisional Prasmanan Desa (Gulai Daun Ubi, Ikan Segar & Sambal)",
  },
  {
    id: "fac-dinner",
    label: "Makan Malam Bersama Keluarga Tuan Rumah (Untuk Paket Menginap)",
  },
  {
    id: "fac-coconut",
    label: "Welcome Drink Air Kelapa Muda Asli Petik Kebun Warga",
  },
  {
    id: "fac-guide",
    label: "Pemandu Wisata Lokal (Local Tour Guide) Berlisensi",
  },
  {
    id: "fac-photo",
    label: "Dokumentasi Foto & Video Kegiatan Selama Kunjungan",
  },
  {
    id: "fac-transport",
    label: "Layanan Transportasi Antar-Jemput (Pelabuhan BBT Lagoi / Tanjung Uban / TPI)",
  },
];
function PaketPengalamanWisataPage() {
  const [openPlannerModal, setOpenPlannerModal] = (0, import_react.useState)(false);
  const [selectedPackageTab, setSelectedPackageTab] = (0, import_react.useState)("fullday");
  const [selectedDay2Tab, setSelectedDay2Tab] = (0, import_react.useState)(1);
  const [activeFullDayModal, setActiveFullDayModal] = (0, import_react.useState)(null);
  const [activeTwoDayModal, setActiveTwoDayModal] = (0, import_react.useState)(null);
  const [customDuration, setCustomDuration] = (0, import_react.useState)("Full Day (±8 Jam)");
  const [customGroupType, setCustomGroupType] = (0, import_react.useState)(
    "Keluarga / Family Trip",
  );
  const [customGroupSize, setCustomGroupSize] = (0, import_react.useState)("3 - 6 Orang");
  const [selectedModules, setSelectedModules] = (0, import_react.useState)([
    "mod-batik",
    "mod-mangrove",
    "mod-kebun",
    "mod-kuliner",
  ]);
  const [selectedFacilities, setSelectedFacilities] = (0, import_react.useState)([
    "fac-lunch",
    "fac-coconut",
    "fac-guide",
  ]);
  const siteData = useSiteData();
  const fullDay = siteData?.fullDay || officialFullDayPackage;
  const twoDay = siteData?.twoDay || officialTwoDayPackage;
  const cbtExperiences = siteData?.cbtExperiences || cbtExperiences8;
  const galeriCategories = siteData?.galeriCategories || galeri8Categories;
  const whatsappNumber = siteData?.villageInfo?.whatsapp || "6283166341280";
  const breadcrumbSchema = getBreadcrumbJsonLd([
    {
      name: "Beranda",
      url: "/",
    },
    {
      name: "Paket & Rencanakan Kunjungan",
      url: "/rencanakan-kunjungan",
    },
  ]);
  const waFullDayMsg = encodeURIComponent(
    "Halo Pengelola Desa Wisata Ekang Anculai, saya tertarik dengan Paket Wisata Full Day (1 Hari). Mohon informasi ketersediaan jadwal, rincian biaya, dan panduan reservasi.",
  );
  const waTwoDayMsg = encodeURIComponent(
    "Halo Pengelola Desa Wisata Ekang Anculai, saya tertarik dengan Paket Wisata 2 Hari 1 Malam (2D1N Live-in Homestay). Mohon informasi ketersediaan jadwal, rincian biaya, dan panduan reservasi.",
  );
  const customWhatsAppUrl = (0, import_react.useMemo)(() => {
    const chosenModulesNames = customModulesList
      .filter((m) => selectedModules.includes(m.id))
      .map((m, idx) => `   ${idx + 1}. ${m.nama} (${m.estimasi})`)
      .join("\n");
    const chosenFacilitiesNames = customFacilitiesList
      .filter((f) => selectedFacilities.includes(f.id))
      .map((f) => `   - ${f.label}`)
      .join("\n");
    const message = `Halo Pengelola Desa Wisata Ekang Anculai, saya ingin konsultasi RANCANGAN PAKET WISATA KUSTOM:

• Pilihan Durasi: ${customDuration}
• Tipe Rombongan: ${customGroupType} (${customGroupSize})
• Modul Aktivitas yang Dipilih (${selectedModules.length} Aktivitas):
${chosenModulesNames || "   (Belum memilih modul aktivitas)"}

• Fasilitas Tambahan (${selectedFacilities.length} Fasilitas):
${chosenFacilitiesNames || "   (Fasilitas standar)"}

Mohon informasi perkiraan anggaran biaya, rekomendasi jadwal terbaik, dan panduan reservasi. Terima kasih!`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  }, [
    customDuration,
    customGroupType,
    customGroupSize,
    selectedModules,
    selectedFacilities,
    whatsappNumber,
  ]);
  const toggleModule = (id) => {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };
  const toggleFacility = (id) => {
    setSelectedFacilities((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };
  const applyPreset = (presetType) => {
    if (presetType === "edukasi") {
      setCustomDuration("Full Day (±8 Jam)");
      setCustomGroupType("Sekolah / Kampus / Edukasi");
      setCustomGroupSize("15 - 30 Orang");
      setSelectedModules(["mod-batik", "mod-mangrove", "mod-kebun", "mod-kuliner"]);
      setSelectedFacilities(["fac-lunch", "fac-coconut", "fac-guide", "fac-photo"]);
    } else if (presetType === "keluarga") {
      setCustomDuration("Full Day (±8 Jam)");
      setCustomGroupType("Keluarga / Family Trip");
      setCustomGroupSize("3 - 6 Orang");
      setSelectedModules(["mod-batik", "mod-kuliner", "mod-teko", "mod-mangrove"]);
      setSelectedFacilities(["fac-lunch", "fac-coconut", "fac-guide"]);
    } else if (presetType === "budaya") {
      setCustomDuration("2 Hari 1 Malam (Menginap Homestay)");
      setCustomGroupType("Komunitas / Pemerhati Budaya");
      setCustomGroupSize("5 - 12 Orang");
      setSelectedModules([
        "mod-homestay",
        "mod-batik",
        "mod-reog",
        "mod-mangrove",
        "mod-kuliner",
        "mod-teko",
      ]);
      setSelectedFacilities([
        "fac-lunch",
        "fac-dinner",
        "fac-coconut",
        "fac-guide",
        "fac-photo",
        "fac-transport",
      ]);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className:
      "min-h-screen bg-surface pt-20 pb-24 text-foreground selection:bg-primary/20 selection:text-primary",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLdScript, { data: breadcrumbSchema }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
        className: "relative overflow-hidden bg-card border-b border-border/80 py-16 sm:py-24",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className:
              "pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 size-96 rounded-full bg-primary/10 blur-3xl",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className:
              "pointer-events-none absolute top-1/2 right-0 size-80 rounded-full bg-gold/10 blur-3xl",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "grid gap-12 lg:grid-cols-12 lg:items-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "lg:col-span-7",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "flex flex-wrap items-center gap-2",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                          className:
                            "inline-flex items-center gap-1.5 rounded-full bg-primary/15 border border-primary/30 px-3.5 py-1 text-xs font-extrabold text-primary uppercase tracking-wider",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
                              className: "size-3.5",
                            }),
                            "Community Based Tourism (CBT)",
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                          className:
                            "inline-flex items-center gap-1.5 rounded-full bg-gold/20 border border-gold/40 px-3.5 py-1 text-xs font-extrabold text-gold uppercase tracking-wider",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, {
                              className: "size-3.5",
                            }),
                            "Desa Wisata Bintan 2026",
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
                      className:
                        "mt-5 text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.12]",
                      children: [
                        "Paket Wisata Resmi & ",
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {
                          className: "hidden sm:inline",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          className: "gradient-text",
                          children: "Rancang Paket Kustom",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                      className:
                        "mt-4 text-base sm:text-xl font-bold text-emerald-800 dark:text-emerald-300 italic",
                      children: ['"', fullDay.tema, '"'],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className:
                        "mt-4 text-xs sm:text-base leading-relaxed text-muted-foreground font-medium max-w-2xl",
                      children:
                        "Pilih paket perjalanan resmi siap berangkat atau rangkai sendiri modul aktivitas sesuai keinginan Anda. Dari edukasi membatik canting, bertani sayur, susur hutan mangrove, kesenian Reog, hingga live-in homestay ramah keluarga.",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className:
                        "mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-border/80 max-w-2xl",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "rounded-2xl border border-border bg-surface p-3 text-center",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "text-xs font-bold text-muted-foreground",
                              children: "Konsep",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "text-sm font-extrabold text-primary mt-0.5",
                              children: "100% CBT Desa",
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "rounded-2xl border border-border bg-surface p-3 text-center",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "text-xs font-bold text-muted-foreground",
                              children: "Pilihan Durasi",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "text-sm font-extrabold text-foreground mt-0.5",
                              children: "1 Hari / 2D1N / Kustom",
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "rounded-2xl border border-border bg-surface p-3 text-center",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "text-xs font-bold text-muted-foreground",
                              children: "Pemandu",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "text-sm font-extrabold text-gold mt-0.5",
                              children: "Warga Lokal",
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "rounded-2xl border border-border bg-surface p-3 text-center",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "text-xs font-bold text-muted-foreground",
                              children: "Aksesibilitas",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "text-sm font-extrabold text-emerald-600 mt-0.5",
                              children: "15 Mnt dr Lagoi",
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "mt-8 flex flex-wrap items-center gap-3",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                          href: "#pilih-paket",
                          className:
                            "inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-xs font-extrabold text-primary-foreground shadow-card transition-all hover:bg-emerald-deep hover:scale-105 cursor-pointer",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
                              className: "size-4",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                              children: "Jelajahi Pilihan Paket",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
                              className: "size-4",
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                          onClick: () => {
                            setSelectedPackageTab("custom");
                            document
                              .getElementById("pilih-paket")
                              ?.scrollIntoView({ behavior: "smooth" });
                          },
                          className:
                            "inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-xs font-extrabold text-gold-foreground shadow-card transition-all hover:bg-gold/90 hover:scale-105 cursor-pointer",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, {
                              className: "size-4",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                              children: "Rancang Paket Kustom ✨",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "lg:col-span-5",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className:
                      "relative overflow-hidden rounded-3xl border border-border shadow-2xl group",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "aspect-[4/3] w-full overflow-hidden bg-muted",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                          src: fullDay.galeri[0]?.image || galeriCategories[0]?.image,
                          alt: "Paket & Pengalaman Wisata Ekang Anculai",
                          className:
                            "size-full object-cover transition-transform duration-700 group-hover:scale-105",
                        }),
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className:
                          "absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "absolute bottom-5 left-5 right-5 text-white",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                className:
                                  "rounded-full bg-gold px-3 py-1 text-[10px] font-black text-gold-foreground uppercase tracking-wider",
                                children: "Dokumentasi Lapangan",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                className: "text-[11px] text-white/80 font-medium",
                                children: "Bintan, Kepulauan Riau",
                              }),
                            ],
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                            className:
                              "mt-2 text-sm sm:text-base font-extrabold text-white leading-snug",
                            children:
                              "Desa Wisata Hijau dan Kreatif Berbasis Pemberdayaan Masyarakat",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 space-y-24",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
            id: "pilih-paket",
            className: "scroll-mt-28",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "text-center max-w-3xl mx-auto",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "text-xs font-extrabold text-gold uppercase tracking-wider",
                    children: "Pilihan Rangkaian Perjalanan",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                    className: "mt-2 text-2xl sm:text-4xl font-extrabold text-foreground",
                    children: "Pilih Paket Sesuai Gaya Kunjungan Anda",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "mt-2 text-xs sm:text-sm text-muted-foreground font-medium",
                    children:
                      "Tersedia paket resmi terstruktur 1 Hari & 2D1N, serta fitur interaktif Rancang Paket Kustom untuk menyesuaikan aktivitas, fasilitas, dan anggaran rombongan Anda.",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className:
                      "mt-8 inline-flex flex-wrap items-center justify-center gap-1.5 rounded-full bg-card border border-border p-1.5 shadow-card",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                        type: "button",
                        onClick: () => setSelectedPackageTab("fullday"),
                        className: `inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-extrabold transition-all cursor-pointer ${selectedPackageTab === "fullday" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4" }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            children: "Paket 1: Full Day (1 Hari)",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                        type: "button",
                        onClick: () => setSelectedPackageTab("twoday"),
                        className: `inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-extrabold transition-all cursor-pointer ${selectedPackageTab === "twoday" ? "bg-gold text-gold-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, {
                            className: "size-4",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            children: "Paket 2: 2 Hari 1 Malam (2D1N)",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                        type: "button",
                        onClick: () => setSelectedPackageTab("custom"),
                        className: `inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-extrabold transition-all cursor-pointer ${selectedPackageTab === "custom" ? "bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-400" : "text-muted-foreground hover:text-foreground"}`,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, {
                            className: "size-4 text-amber-300",
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                            children: "Paket 3: Rancang Kustom ✨",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              selectedPackageTab === "fullday" &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "mt-12 rounded-3xl border border-primary/30 bg-card p-6 sm:p-10 shadow-2xl space-y-10 animate-fade-in",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className:
                        "flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "flex items-center gap-2",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                  className:
                                    "rounded-full bg-primary/10 px-3.5 py-1 text-xs font-black text-primary uppercase tracking-wider",
                                  children: "One Day Pass • 1 Hari Penuh",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                  className:
                                    "rounded-full bg-surface border border-border px-3 py-1 text-xs font-bold text-muted-foreground",
                                  children: "09.00 – 17.00 WIB",
                                }),
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                              className: "mt-3 text-2xl sm:text-4xl font-extrabold text-foreground",
                              children: "Paket Wisata Full Day Ekang Anculai",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                              className:
                                "mt-1 text-sm sm:text-base font-extrabold text-gold italic",
                              children: ['"', fullDay.tema, '"'],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className:
                                "mt-3 text-xs sm:text-sm text-muted-foreground max-w-3xl leading-relaxed",
                              children:
                                "Pengalaman satu hari penuh yang memadukan aktivitas edukasi mencanting batik, bertani di kebun sayur masyarakat, menikmati sajian kuliner tradisional, mengenal atraksi seni Reog, dan belanja oleh-oleh UMKM.",
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className:
                            "flex flex-col sm:flex-row md:flex-col items-stretch gap-3 shrink-0",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                              href: `https://wa.me/${whatsappNumber}?text=${waFullDayMsg}`,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-extrabold text-primary-foreground shadow-card hover:bg-emerald-deep transition-all",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
                                  className: "size-4",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                  children: "Konsultasi / Booking via WA",
                                }),
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                              onClick: () => setOpenPlannerModal(true),
                              className:
                                "inline-flex items-center justify-center gap-2 rounded-full bg-surface border border-border px-6 py-3 text-xs font-bold text-foreground hover:bg-accent transition-all cursor-pointer",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
                                  className: "size-4 text-gold",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                  children: "Formulir Rencana Wisata",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "rounded-2xl bg-surface border border-border p-6",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
                          className:
                            "text-xs font-black text-primary uppercase tracking-wider flex items-center gap-2",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
                              className: "size-4 text-emerald-600",
                            }),
                            "Fasilitas & Layanan Termasuk:",
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className:
                            "mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-medium text-foreground",
                          children: [
                            "Pemandu wisata lokal berlisensi",
                            "Welcome drink & kelapa muda segar",
                            "Bahan & kain praktik mencanting batik",
                            "Makan siang kuliner khas desa",
                            "Tiket masuk kawasan & daya tarik",
                            "Pendampingan aktivitas tani bersama warga",
                            "Dokumentasi kegiatan",
                            "Akses parkir & fasilitas balai desa",
                          ].map((inc, i) =>
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                className: "flex items-center gap-2",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                                    className: "size-4 text-emerald-600 shrink-0",
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                    children: inc,
                                  }),
                                ],
                              },
                              i,
                            ),
                          ),
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
                          className:
                            "text-lg font-extrabold text-foreground mb-6 flex items-center gap-2",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
                              className: "size-5 text-primary",
                            }),
                            "Rundown & Jadwal Aktivitas (09.00 – 17.00 WIB)",
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className:
                            "relative pl-6 sm:pl-10 border-l-2 border-primary/30 space-y-8",
                          children: fullDay.rangkaian.map((item, idx) =>
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                className: "relative group",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                    className:
                                      "absolute -left-[37px] sm:-left-[53px] top-1.5 grid size-9 sm:size-10 place-items-center rounded-full bg-primary text-primary-foreground font-black text-xs sm:text-sm shadow-card ring-4 ring-card",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      CategoryIcon,
                                      {
                                        icon: item.icon,
                                        className: "size-4 sm:size-5",
                                      },
                                    ),
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                    className:
                                      "rounded-2xl border border-border bg-surface p-5 sm:p-6 shadow-soft hover:border-primary/40 transition-all",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                        className:
                                          "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/50 pb-3",
                                        children: [
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                            children: [
                                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                                    "span",
                                                    {
                                                      className:
                                                        "text-xs font-black text-gold uppercase",
                                                      children: item.num,
                                                    },
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                                    "span",
                                                    {
                                                      className:
                                                        "rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-extrabold text-primary",
                                                      children: item.kategori,
                                                    },
                                                  ),
                                                ],
                                              }),
                                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
                                                className:
                                                  "mt-1 text-base sm:text-lg font-extrabold text-foreground",
                                                children: item.judul,
                                              }),
                                            ],
                                          }),
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                                            className:
                                              "inline-block rounded-xl bg-card px-3 py-1 text-xs font-black text-primary border border-border shrink-0 self-start sm:self-auto",
                                            children: [item.waktu, " WIB"],
                                          }),
                                        ],
                                      }),
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                        className:
                                          "mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground font-medium",
                                        children: item.deskripsi,
                                      }),
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                        className:
                                          "mt-3 grid gap-1.5 sm:grid-cols-2 pt-2 border-t border-border/40 text-xs font-medium text-foreground",
                                        children: item.isi.map((pt, i) =>
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                            "div",
                                            {
                                              className: "flex items-start gap-2",
                                              children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
                                                  className:
                                                    "size-3.5 text-emerald-600 shrink-0 mt-0.5",
                                                }),
                                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                                  "span",
                                                  {
                                                    className: "leading-snug",
                                                    children: pt,
                                                  },
                                                ),
                                              ],
                                            },
                                            i,
                                          ),
                                        ),
                                      }),
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                        className:
                                          "mt-4 pt-3 border-t border-border/60 flex items-center justify-between",
                                        children: [
                                          item.linkRef?.url
                                            ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                                                href: item.linkRef.url,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className:
                                                  "inline-flex items-center gap-1 text-[11px] font-bold text-primary hover:underline",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                                    "span",
                                                    { children: item.linkRef.nama },
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                                    ExternalLink,
                                                    { className: "size-3" },
                                                  ),
                                                ],
                                              })
                                            : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                                className:
                                                  "text-[11px] text-muted-foreground font-medium",
                                                children: "Pengalaman Terkurasi CBT",
                                              }),
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                                            onClick: () => setActiveFullDayModal(item),
                                            className:
                                              "inline-flex items-center gap-1 text-xs font-bold text-foreground hover:text-primary transition-colors cursor-pointer",
                                            children: [
                                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                                children: "Detail Rinci",
                                              }),
                                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                                ChevronRight,
                                                { className: "size-3.5" },
                                              ),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              idx,
                            ),
                          ),
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "border-t border-border pt-4",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLink, {
                        source: fullDay.source,
                      }),
                    }),
                  ],
                }),
              selectedPackageTab === "twoday" &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "mt-12 rounded-3xl border border-gold/40 bg-card p-6 sm:p-10 shadow-2xl space-y-10 ring-2 ring-gold/15 animate-fade-in",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className:
                        "flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "flex items-center gap-2",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                  className:
                                    "rounded-full bg-gold/20 px-3.5 py-1 text-xs font-black text-gold uppercase tracking-wider",
                                  children: "Live-in Homestay • 2 Hari 1 Malam",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                  className:
                                    "rounded-full bg-surface border border-border px-3 py-1 text-xs font-bold text-muted-foreground",
                                  children: "Menginap di Rumah Warga Lokal",
                                }),
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                              className: "mt-3 text-2xl sm:text-4xl font-extrabold text-foreground",
                              children: "Paket Wisata 2 Hari 1 Malam (2D1N)",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                              className:
                                "mt-1 text-sm sm:text-base font-extrabold text-primary italic",
                              children: ['"', twoDay.tagline, '"'],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className:
                                "mt-3 text-xs sm:text-sm text-muted-foreground max-w-3xl leading-relaxed",
                              children:
                                "Pengalaman menginap live-in mendalam bersama keluarga tuan rumah di desa. Merasakan ketenangan pedesaan, makan malam bersama warga, susur mangrove pagi hari, hingga berbelanja oleh-oleh produk lokal.",
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className:
                            "flex flex-col sm:flex-row md:flex-col items-stretch gap-3 shrink-0",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                              href: `https://wa.me/${whatsappNumber}?text=${waTwoDayMsg}`,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-xs font-black text-gold-foreground shadow-card hover:bg-gold/90 transition-all",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
                                  className: "size-4",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                  children: "Konsultasi 2D1N via WA",
                                }),
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                              onClick: () => setOpenPlannerModal(true),
                              className:
                                "inline-flex items-center justify-center gap-2 rounded-full bg-surface border border-border px-6 py-3 text-xs font-bold text-foreground hover:bg-accent transition-all cursor-pointer",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
                                  className: "size-4 text-gold",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                  children: "Formulir Rencana 2D1N",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "rounded-2xl bg-surface border border-border p-6",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
                          className:
                            "text-xs font-black text-gold uppercase tracking-wider flex items-center gap-2",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
                              className: "size-4 text-gold",
                            }),
                            "Fasilitas & Layanan Termasuk (2D1N):",
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className:
                            "mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-medium text-foreground",
                          children: [
                            "Akomodasi Homestay Rumah Warga (1 Malam)",
                            "Makan 3x (Makan Siang, Malam, & Sarapan)",
                            "Pemandu lokal berlisensi selama 2 hari",
                            "Workshop membatik & hasil karya kain",
                            "Tiket masuk & susur hutan mangrove",
                            "Pengalaman berkebun sayur bersama petani",
                            "Suasana malam & interaksi keluarga tuan rumah",
                            "Dokumentasi lengkap & oleh-oleh khas",
                          ].map((inc, i) =>
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                className: "flex items-center gap-2",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                                    className: "size-4 text-gold shrink-0",
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                    children: inc,
                                  }),
                                ],
                              },
                              i,
                            ),
                          ),
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "space-y-6",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className:
                            "flex items-center justify-between border-b border-border/80 pb-4",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
                              className:
                                "text-lg font-extrabold text-foreground flex items-center gap-2",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
                                  className: "size-5 text-gold",
                                }),
                                "Rangkaian Acara 2 Hari 1 Malam",
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "flex items-center gap-2",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                                  type: "button",
                                  onClick: () => setSelectedDay2Tab(1),
                                  className: `rounded-full px-4 py-1.5 text-xs font-extrabold transition-all cursor-pointer ${selectedDay2Tab === 1 ? "bg-gold text-gold-foreground shadow-sm" : "bg-surface border border-border text-muted-foreground hover:text-foreground"}`,
                                  children: "Hari ke-1 (Kedatangan & Budaya)",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                                  type: "button",
                                  onClick: () => setSelectedDay2Tab(2),
                                  className: `rounded-full px-4 py-1.5 text-xs font-extrabold transition-all cursor-pointer ${selectedDay2Tab === 2 ? "bg-primary text-primary-foreground shadow-sm" : "bg-surface border border-border text-muted-foreground hover:text-foreground"}`,
                                  children: "Hari ke-2 (Mangrove & Belanja)",
                                }),
                              ],
                            }),
                          ],
                        }),
                        selectedDay2Tab === 1 &&
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "space-y-6 animate-fade-in",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                className: "rounded-2xl bg-gold/10 border border-gold/30 p-4",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                    className: "text-xs font-black text-gold uppercase",
                                    children: "Hari Pertama",
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                    className: "text-base font-extrabold text-foreground mt-0.5",
                                    children: twoDay.hari1.subHeader,
                                  }),
                                ],
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                className:
                                  "relative pl-6 sm:pl-10 border-l-2 border-gold/40 space-y-6",
                                children: twoDay.hari1.rangkaian.map((item, idx) =>
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "div",
                                    {
                                      className: "relative group",
                                      children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                          className:
                                            "absolute -left-[37px] sm:-left-[53px] top-1.5 grid size-9 sm:size-10 place-items-center rounded-full bg-gold text-gold-foreground font-black text-xs sm:text-sm shadow-card ring-4 ring-card",
                                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                            CategoryIcon,
                                            {
                                              icon: item.icon,
                                              className: "size-4 sm:size-5",
                                            },
                                          ),
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                          className:
                                            "rounded-2xl border border-border bg-surface p-5 sm:p-6 shadow-soft",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                              className:
                                                "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/50 pb-3",
                                              children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                                  "div",
                                                  {
                                                    children: [
                                                      item.kategori &&
                                                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                                          "span",
                                                          {
                                                            className:
                                                              "rounded-full bg-gold/10 px-2.5 py-0.5 text-[11px] font-extrabold text-gold",
                                                            children: item.kategori,
                                                          },
                                                        ),
                                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                                        "h5",
                                                        {
                                                          className:
                                                            "mt-1 text-base sm:text-lg font-extrabold text-foreground",
                                                          children: item.judul,
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                ),
                                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                                  "span",
                                                  {
                                                    className:
                                                      "inline-block rounded-xl bg-card px-3 py-1 text-xs font-black text-gold border border-border shrink-0 self-start sm:self-auto",
                                                    children: [item.waktu, " WIB"],
                                                  },
                                                ),
                                              ],
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                              className:
                                                "mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground font-medium",
                                              children: item.deskripsi,
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                              className:
                                                "mt-3 space-y-1 text-xs font-medium text-foreground pt-2 border-t border-border/40",
                                              children: item.isi.map((pt, i) =>
                                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                                  "div",
                                                  {
                                                    className: "flex items-start gap-2",
                                                    children: [
                                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                                        "span",
                                                        {
                                                          className:
                                                            "size-1.5 rounded-full bg-gold shrink-0 mt-1.5",
                                                        },
                                                      ),
                                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                                        "span",
                                                        { children: pt },
                                                      ),
                                                    ],
                                                  },
                                                  i,
                                                ),
                                              ),
                                            }),
                                            item.note &&
                                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                                className:
                                                  "mt-3 rounded-xl bg-amber-500/10 border border-amber-500/30 px-3 py-1 text-xs font-bold text-amber-800 dark:text-amber-300",
                                                children: ["💡 Catatan: ", item.note],
                                              }),
                                          ],
                                        }),
                                      ],
                                    },
                                    idx,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        selectedDay2Tab === 2 &&
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "space-y-6 animate-fade-in",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                className: "rounded-2xl bg-primary/10 border border-primary/30 p-4",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                    className: "text-xs font-black text-primary uppercase",
                                    children: "Hari Kedua",
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                    className: "text-base font-extrabold text-foreground mt-0.5",
                                    children: twoDay.hari2.subHeader,
                                  }),
                                ],
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                className:
                                  "relative pl-6 sm:pl-10 border-l-2 border-primary/40 space-y-6",
                                children: twoDay.hari2.rangkaian.map((item, idx) =>
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "div",
                                    {
                                      className: "relative group",
                                      children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                          className:
                                            "absolute -left-[37px] sm:-left-[53px] top-1.5 grid size-9 sm:size-10 place-items-center rounded-full bg-primary text-primary-foreground font-black text-xs sm:text-sm shadow-card ring-4 ring-card",
                                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                            CategoryIcon,
                                            {
                                              icon: item.icon,
                                              className: "size-4 sm:size-5",
                                            },
                                          ),
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                          className:
                                            "rounded-2xl border border-border bg-surface p-5 sm:p-6 shadow-soft",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                              className:
                                                "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/50 pb-3",
                                              children: [
                                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                                  "div",
                                                  {
                                                    children: [
                                                      item.kategori &&
                                                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                                          "span",
                                                          {
                                                            className:
                                                              "rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-extrabold text-primary",
                                                            children: item.kategori,
                                                          },
                                                        ),
                                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                                        "h5",
                                                        {
                                                          className:
                                                            "mt-1 text-base sm:text-lg font-extrabold text-foreground",
                                                          children: item.judul,
                                                        },
                                                      ),
                                                    ],
                                                  },
                                                ),
                                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                                  "span",
                                                  {
                                                    className:
                                                      "inline-block rounded-xl bg-card px-3 py-1 text-xs font-black text-primary border border-border shrink-0 self-start sm:self-auto",
                                                    children: [item.waktu, " WIB"],
                                                  },
                                                ),
                                              ],
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                              className:
                                                "mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground font-medium",
                                              children: item.deskripsi,
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                              className:
                                                "mt-3 space-y-1 text-xs font-medium text-foreground pt-2 border-t border-border/40",
                                              children: item.isi.map((pt, i) =>
                                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                                  "div",
                                                  {
                                                    className: "flex items-start gap-2",
                                                    children: [
                                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                                        "span",
                                                        {
                                                          className:
                                                            "size-1.5 rounded-full bg-primary shrink-0 mt-1.5",
                                                        },
                                                      ),
                                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                                        "span",
                                                        { children: pt },
                                                      ),
                                                    ],
                                                  },
                                                  i,
                                                ),
                                              ),
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    idx,
                                  ),
                                ),
                              }),
                            ],
                          }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "border-t border-border pt-4",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLink, {
                        source: twoDay.source,
                      }),
                    }),
                  ],
                }),
              selectedPackageTab === "custom" &&
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "mt-12 rounded-3xl border-2 border-emerald-500/50 bg-card p-6 sm:p-10 shadow-2xl space-y-12 animate-fade-in relative overflow-hidden",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className:
                        "pointer-events-none absolute top-0 right-0 size-96 bg-emerald-500/10 rounded-full blur-3xl",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className:
                        "flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-border pb-8",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                              className:
                                "inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1 text-xs font-black text-emerald-800 dark:text-emerald-300 uppercase tracking-wider",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, {
                                  className: "size-3.5",
                                }),
                                "Interactive Custom Tour Builder",
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                              className: "mt-3 text-2xl sm:text-4xl font-extrabold text-foreground",
                              children: "Rancang Paket Wisata Kustom Mandiri",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className:
                                "mt-2 text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed",
                              children:
                                "Sesuaikan durasi, tipe rombongan, modul kegiatan wisata, dan fasilitas tambahan sesuai preferensi spesifik Anda. Ringkasan akan terbuat otomatis dan siap dikirim langsung ke WhatsApp pengelola.",
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "rounded-2xl border border-border bg-surface p-4 shrink-0",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className:
                                "text-[11px] font-black uppercase text-gold tracking-wider mb-2",
                              children: "Template Rekomendasi Cepat:",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "flex flex-wrap gap-2",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                                  type: "button",
                                  onClick: () => applyPreset("edukasi"),
                                  className:
                                    "rounded-full bg-card border border-border px-3 py-1 text-xs font-bold text-foreground hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer",
                                  children: "🎒 Edukasi Sekolah",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                                  type: "button",
                                  onClick: () => applyPreset("keluarga"),
                                  className:
                                    "rounded-full bg-card border border-border px-3 py-1 text-xs font-bold text-foreground hover:bg-gold hover:text-gold-foreground transition-all cursor-pointer",
                                  children: "👨‍👩‍👧‍👦 Family Relax",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                                  type: "button",
                                  onClick: () => applyPreset("budaya"),
                                  className:
                                    "rounded-full bg-card border border-border px-3 py-1 text-xs font-bold text-foreground hover:bg-emerald-600 hover:text-white transition-all cursor-pointer",
                                  children: "🌟 Live-in Budaya",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "grid gap-10 lg:grid-cols-12 items-start",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "lg:col-span-7 space-y-10",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "space-y-4",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
                                  className:
                                    "text-sm font-black uppercase tracking-wider text-primary flex items-center gap-2",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
                                      className: "size-4 text-emerald-600",
                                    }),
                                    "1. Pilih Durasi & Jumlah Peserta",
                                  ],
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                  className: "grid grid-cols-2 sm:grid-cols-4 gap-2",
                                  children: [
                                    "Half Day (±4 Jam)",
                                    "Full Day (±8 Jam)",
                                    "2 Hari 1 Malam",
                                    "3 Hari 2 Malam",
                                  ].map((dur) =>
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "button",
                                      {
                                        type: "button",
                                        onClick: () => setCustomDuration(dur),
                                        className: `rounded-2xl p-3 text-center border text-xs font-bold transition-all cursor-pointer ${customDuration.startsWith(dur.slice(0, 8)) ? "bg-primary text-primary-foreground border-primary shadow-sm" : "bg-surface border-border text-foreground hover:border-primary/40"}`,
                                        children: dur,
                                      },
                                      dur,
                                    ),
                                  ),
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                  className: "grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                      children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                                          className:
                                            "text-xs font-bold text-muted-foreground block mb-1.5",
                                          children: "Kategori Kunjungan:",
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
                                          value: customGroupType,
                                          onChange: (e) => setCustomGroupType(e.target.value),
                                          className:
                                            "w-full rounded-xl bg-surface border border-border px-3.5 py-2 text-xs font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                              value: "Keluarga / Family Trip",
                                              children: "Keluarga (Family Trip)",
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                              value: "Sekolah / Kampus / Edukasi",
                                              children: "Sekolah / Kampus (Educational Trip)",
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                              value: "Instansi / Corporate Outing",
                                              children: "Instansi / Gathering Kantor",
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                              value: "Komunitas / Solo Traveler",
                                              children: "Komunitas / Solo Traveler",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                      children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                                          className:
                                            "text-xs font-bold text-muted-foreground block mb-1.5",
                                          children: "Perkiraan Jumlah Peserta:",
                                        }),
                                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
                                          value: customGroupSize,
                                          onChange: (e) => setCustomGroupSize(e.target.value),
                                          className:
                                            "w-full rounded-xl bg-surface border border-border px-3.5 py-2 text-xs font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary",
                                          children: [
                                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                              value: "1 - 2 Orang (Solo / Pasangan)",
                                              children: "1 - 2 Orang (Solo/Pasangan)",
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                              value: "3 - 6 Orang (Keluarga Kecil)",
                                              children: "3 - 6 Orang (Keluarga Kecil)",
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                              value: "7 - 15 Orang (Rombongan)",
                                              children: "7 - 15 Orang (Rombongan)",
                                            }),
                                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
                                              value: "16 - 30+ Orang (Rombongan Besar)",
                                              children: "16 - 30+ Orang (Rombongan Besar)",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "space-y-4",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                  className: "flex items-center justify-between",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
                                      className:
                                        "text-sm font-black uppercase tracking-wider text-primary flex items-center gap-2",
                                      children: [
                                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, {
                                          className: "size-4 text-emerald-600",
                                        }),
                                        "2. Pilih Modul Aktivitas (",
                                        selectedModules.length,
                                        " Terpilih)",
                                      ],
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                      className: "text-xs font-bold text-muted-foreground",
                                      children: "Klik untuk memilih / membatalkan",
                                    }),
                                  ],
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                  className: "grid gap-3 sm:grid-cols-2",
                                  children: customModulesList.map((m) => {
                                    const isSelected = selectedModules.includes(m.id);
                                    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                      "div",
                                      {
                                        onClick: () => toggleModule(m.id),
                                        className: `card-lift rounded-2xl border p-4 cursor-pointer transition-all flex flex-col justify-between ${isSelected ? "border-emerald-500 bg-emerald-500/10 dark:bg-emerald-950/20 shadow-soft ring-1 ring-emerald-500" : "border-border bg-surface hover:border-primary/40 opacity-80 hover:opacity-100"}`,
                                        children: [
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                            children: [
                                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                                className:
                                                  "flex items-center justify-between gap-2",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                                    "span",
                                                    {
                                                      className:
                                                        "inline-flex items-center gap-1.5 rounded-full bg-card px-2.5 py-0.5 text-[10px] font-extrabold text-primary border border-border/60",
                                                      children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                                          CategoryIcon,
                                                          {
                                                            icon: m.icon,
                                                            className: "size-3 text-gold",
                                                          },
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                                          "span",
                                                          { children: m.kategori },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                                    "span",
                                                    {
                                                      className: `grid size-5 place-items-center rounded-full text-xs font-black transition-all ${isSelected ? "bg-emerald-600 text-white" : "bg-card border border-border text-transparent"}`,
                                                      children: "✓",
                                                    },
                                                  ),
                                                ],
                                              }),
                                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
                                                className:
                                                  "mt-2.5 text-sm font-extrabold text-foreground leading-snug",
                                                children: m.nama,
                                              }),
                                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                                className:
                                                  "mt-1.5 text-[11px] text-muted-foreground leading-relaxed",
                                                children: m.deskripsi,
                                              }),
                                            ],
                                          }),
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                            className:
                                              "mt-3 pt-2.5 border-t border-border/40 flex items-center justify-between text-[11px] font-bold text-gold",
                                            children: [
                                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                                                children: ["⏱️ ", m.estimasi],
                                              }),
                                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                                className: "text-muted-foreground text-[10px]",
                                                children: isSelected
                                                  ? "✓ Termasuk di Rencana"
                                                  : "+ Klik Tambahkan",
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      m.id,
                                    );
                                  }),
                                }),
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "space-y-4",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
                                  className:
                                    "text-sm font-black uppercase tracking-wider text-primary flex items-center gap-2",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, {
                                      className: "size-4 text-emerald-600",
                                    }),
                                    "3. Fasilitas Tambahan & Layanan Pendukung",
                                  ],
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                  className: "grid gap-2.5 sm:grid-cols-2",
                                  children: customFacilitiesList.map((f) => {
                                    const isSelected = selectedFacilities.includes(f.id);
                                    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                      "div",
                                      {
                                        onClick: () => toggleFacility(f.id),
                                        className: `rounded-xl border p-3 cursor-pointer transition-all flex items-start gap-2.5 ${isSelected ? "border-gold bg-gold/10 text-foreground ring-1 ring-gold/40" : "border-border bg-surface text-muted-foreground hover:text-foreground"}`,
                                        children: [
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                            className: `grid size-4 shrink-0 place-items-center rounded mt-0.5 text-[10px] font-black ${isSelected ? "bg-gold text-gold-foreground" : "bg-card border border-border text-transparent"}`,
                                            children: "✓",
                                          }),
                                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                            className: "text-xs font-bold leading-relaxed",
                                            children: f.label,
                                          }),
                                        ],
                                      },
                                      f.id,
                                    );
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "lg:col-span-5 sticky top-28 space-y-6",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className:
                              "rounded-3xl border-2 border-primary/40 bg-surface p-6 sm:p-8 shadow-xl space-y-6",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                className:
                                  "flex items-center justify-between border-b border-border pb-4",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                        className:
                                          "text-[10px] font-black uppercase text-gold tracking-wider",
                                        children: "Ringkasan Paket",
                                      }),
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
                                        className: "text-xl font-black text-foreground mt-0.5",
                                        children: "Rancangan Paket Anda",
                                      }),
                                    ],
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                                    className:
                                      "rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-black text-emerald-800 dark:text-emerald-300",
                                    children: [selectedModules.length, " Aktivitas"],
                                  }),
                                ],
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                className: "space-y-2 text-xs font-medium",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                    className:
                                      "flex justify-between py-1.5 border-b border-border/50",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                        className: "text-muted-foreground",
                                        children: "Durasi:",
                                      }),
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                        className: "font-extrabold text-foreground",
                                        children: customDuration,
                                      }),
                                    ],
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                    className:
                                      "flex justify-between py-1.5 border-b border-border/50",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                        className: "text-muted-foreground",
                                        children: "Tipe Rombongan:",
                                      }),
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                        className: "font-extrabold text-foreground",
                                        children: customGroupType,
                                      }),
                                    ],
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                    className:
                                      "flex justify-between py-1.5 border-b border-border/50",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                        className: "text-muted-foreground",
                                        children: "Jumlah Peserta:",
                                      }),
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                        className: "font-extrabold text-foreground",
                                        children: customGroupSize,
                                      }),
                                    ],
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                    className:
                                      "flex justify-between py-1.5 border-b border-border/50",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                        className: "text-muted-foreground",
                                        children: "Fasilitas Tambahan:",
                                      }),
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                                        className: "font-extrabold text-gold",
                                        children: [selectedFacilities.length, " Layanan"],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                    className:
                                      "text-[11px] font-black uppercase text-muted-foreground tracking-wider mb-2",
                                    children: "Urutan Aktivitas Terpilih:",
                                  }),
                                  selectedModules.length === 0
                                    ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                        className:
                                          "text-xs text-amber-700 dark:text-amber-300 italic p-3 bg-amber-500/10 rounded-xl",
                                        children:
                                          "Belum ada aktivitas yang dipilih. Silakan pilih minimal 1 modul di samping.",
                                      })
                                    : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                        className: "space-y-2 max-h-56 overflow-y-auto pr-1",
                                        children: customModulesList
                                          .filter((m) => selectedModules.includes(m.id))
                                          .map((m, idx) =>
                                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                              "div",
                                              {
                                                className:
                                                  "flex items-center justify-between p-2 rounded-xl bg-card border border-border text-xs font-bold",
                                                children: [
                                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                                    "span",
                                                    {
                                                      className: "flex items-center gap-2",
                                                      children: [
                                                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                                          "span",
                                                          {
                                                            className:
                                                              "size-5 rounded-full bg-primary/10 text-primary grid place-items-center text-[10px] font-black",
                                                            children: idx + 1,
                                                          },
                                                        ),
                                                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                                          "span",
                                                          {
                                                            className: "text-foreground",
                                                            children: m.nama,
                                                          },
                                                        ),
                                                      ],
                                                    },
                                                  ),
                                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                                    "span",
                                                    {
                                                      className: "text-[10px] text-gold",
                                                      children: m.estimasi,
                                                    },
                                                  ),
                                                ],
                                              },
                                              m.id,
                                            ),
                                          ),
                                      }),
                                ],
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                className: "space-y-3 pt-2",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                                    href: customWhatsAppUrl,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className:
                                      "w-full inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-4 text-xs font-black text-white shadow-card hover:bg-emerald-700 hover:scale-[1.02] transition-all",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
                                        className: "size-4.5",
                                      }),
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                        children: "Kirim Rancangan via WhatsApp",
                                      }),
                                    ],
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                                    onClick: () => setOpenPlannerModal(true),
                                    className:
                                      "w-full inline-flex items-center justify-center gap-2 rounded-full bg-card border border-border px-6 py-3 text-xs font-bold text-foreground hover:bg-accent transition-all cursor-pointer",
                                    children: [
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
                                        className: "size-4 text-gold",
                                      }),
                                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                        children: "Buka Formulir Lengkap",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                                className:
                                  "text-[11px] text-center text-muted-foreground font-medium leading-relaxed",
                                children:
                                  "💡 Pengelola desa wisata akan memberikan konfirmasi ketersediaan instruktur, tempat, serta estimasi rincian biaya resmi secara transparan.",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
            id: "pengalaman-cbt",
            className: "scroll-mt-28",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "text-center max-w-2xl mx-auto",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "text-xs font-extrabold text-primary uppercase tracking-wider",
                    children: "8 Pilar Pengalaman Wisata",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                    className: "mt-2 text-2xl sm:text-4xl font-extrabold text-foreground",
                    children: "Aktivitas Autentik Berbasis Warga",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "mt-2 text-xs sm:text-sm text-muted-foreground",
                    children:
                      "Ragam pengalaman hidup pedesaan yang dirancang agar wisatawan dapat berinteraksi, belajar, dan mendukung kelestarian desa.",
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
                children: cbtExperiences.map((cbt) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "div",
                    {
                      className:
                        "card-lift flex flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-card hover:border-primary/50 transition-all group",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "flex items-center justify-between",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                  className:
                                    "grid size-12 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 group-hover:bg-primary group-hover:text-primary-foreground transition-all",
                                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    CategoryIcon,
                                    {
                                      icon: cbt.icon,
                                      className: "size-6",
                                    },
                                  ),
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                  className: "text-xs font-black text-gold",
                                  children: cbt.num,
                                }),
                              ],
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                              className:
                                "mt-5 text-base font-extrabold text-foreground tracking-tight",
                              children: cbt.title,
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className:
                                "mt-2 text-xs text-muted-foreground leading-relaxed font-medium",
                              children: cbt.desc,
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className:
                            "mt-6 pt-3 border-t border-border/60 flex items-center justify-between",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                              className: "text-[11px] font-bold text-primary",
                              children: "CBT Ekang Anculai",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                              className: "text-xs text-muted-foreground",
                              children: ["Pilar ", cbt.num],
                            }),
                          ],
                        }),
                      ],
                    },
                    cbt.num,
                  ),
                ),
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className:
                  "flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border pb-6",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "text-xs font-extrabold text-primary uppercase tracking-wider",
                        children: "Dokumentasi Visual Autentik",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                        className: "mt-2 text-2xl sm:text-4xl font-extrabold text-foreground",
                        children: "Galeri Pengalaman di Lapangan",
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
                    to: "/galeri",
                    className:
                      "inline-flex items-center gap-1.5 text-xs font-extrabold text-primary hover:underline",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        children: "Lihat Seluruh Galeri Foto",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
                        className: "size-3.5",
                      }),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
                children: galeriCategories.map((g) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "div",
                    {
                      className:
                        "card-lift group relative overflow-hidden rounded-3xl border border-border bg-card shadow-card",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "relative aspect-[4/3] w-full overflow-hidden bg-muted",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                              src: g.image,
                              alt: g.caption,
                              className:
                                "size-full object-cover transition-transform duration-700 group-hover:scale-105",
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                              className:
                                "absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-[11px] font-extrabold text-foreground backdrop-blur shadow-sm",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryIcon, {
                                  icon: g.icon,
                                  className: "size-3.5 text-gold shrink-0",
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                                  children: [g.num, ". ", g.kategori],
                                }),
                              ],
                            }),
                          ],
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          className: "p-4",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                            className: "text-xs font-bold text-foreground leading-relaxed",
                            children: g.caption,
                          }),
                        }),
                      ],
                    },
                    g.num,
                  ),
                ),
              }),
            ],
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
            className:
              "rounded-3xl gradient-primary p-8 sm:p-14 text-center text-primary-foreground shadow-2xl relative overflow-hidden",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "relative z-10 max-w-3xl mx-auto space-y-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                  className:
                    "inline-flex items-center gap-1.5 rounded-full bg-white/20 px-4 py-1.5 text-xs font-black text-white uppercase tracking-wider backdrop-blur",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
                      className: "size-3.5 text-amber-300",
                    }),
                    "Layanan Informasi & Reservasi Desa",
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                  className: "text-2xl sm:text-4xl font-black tracking-tight text-white",
                  children: "Siap Menikmati Pengalaman Wisata Autentik?",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className:
                    "text-xs sm:text-base font-medium text-white/90 leading-relaxed max-w-2xl mx-auto",
                  children:
                    "Hubungi Pengelola Desa Wisata Ekang Anculai untuk konsultasi jadwal kunjungan rombongan, keluarga, instansi, atau program live-in homestay.",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "pt-4 flex flex-wrap justify-center gap-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                      onClick: () => setOpenPlannerModal(true),
                      className:
                        "inline-flex items-center gap-2 rounded-full bg-amber-400 px-8 py-4 text-xs font-black text-emerald-950 shadow-card hover:bg-amber-300 hover:scale-105 transition-all cursor-pointer",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, {
                          className: "size-4",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          children: "Isi Formulir Rencana Kunjungan",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                      href: `https://wa.me/${whatsappNumber}?text=${waFullDayMsg}`,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-xs font-extrabold text-emerald-900 shadow-card hover:bg-emerald-50 hover:scale-105 transition-all",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
                          className: "size-4 text-emerald-600 fill-current",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                          children: "Chat WhatsApp Pengelola",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      activeFullDayModal &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
          open: !!activeFullDayModal,
          onOpenChange: () => setActiveFullDayModal(null),
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
            className: "max-w-md rounded-3xl p-6 bg-card border-border shadow-2xl",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, {
                className:
                  "text-lg font-extrabold text-foreground flex items-center justify-between gap-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    children: activeFullDayModal.judul,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                    className:
                      "text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full shrink-0",
                    children: [activeFullDayModal.waktu, " WIB"],
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className:
                  "mt-4 space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    children: activeFullDayModal.deskripsi,
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className:
                      "pt-3 border-t border-border space-y-1.5 text-foreground font-medium",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "font-bold text-xs uppercase text-primary",
                        children: "Aktivitas Utama:",
                      }),
                      activeFullDayModal.isi.map((pt, i) =>
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                          "div",
                          {
                            className: "flex items-start gap-2",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
                                className: "size-3.5 text-primary shrink-0 mt-0.5",
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: pt }),
                            ],
                          },
                          i,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TripPlannerModal, {
        open: openPlannerModal,
        onOpenChange: setOpenPlannerModal,
      }),
    ],
  });
}
var $$splitComponentImporter$1 = () => import("./desa.index-DHfHNPQS.mjs");
var searchSchema = objectType({
  q: stringType().optional(),
  provinsi: stringType().optional(),
  kategori: stringType().optional(),
});
var Route$1 = createFileRoute("/desa/")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Profil & Potensi Desa Ekang Anculai — Teluk Sebong, Bintan" },
      {
        name: "description",
        content:
          "Eksplorasi profil dan potensi Desa Ekang Anculai: ekowisata mangrove, Rumah Batik Bintan, UMKM lokal, homestay rumah warga, dan kegiatan masyarakat.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://desawisataekanganculai.id/desa",
      },
      {
        property: "og:title",
        content: "Profil & Potensi Desa Ekang Anculai — Teluk Sebong, Bintan",
      },
      {
        property: "og:description",
        content:
          "Cari dan jelajahi profil serta potensi Desa Ekang Anculai di Teluk Sebong, Kabupaten Bintan, Kepulauan Riau.",
      },
      {
        property: "og:image",
        content: "https://desawisataekanganculai.id/android-chrome-512x512.png",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Profil & Potensi Desa Ekang Anculai Bintan",
      },
      {
        name: "twitter:description",
        content:
          "Cari dan jelajahi profil serta potensi Desa Ekang Anculai di Teluk Sebong, Kabupaten Bintan, Kepulauan Riau.",
      },
      {
        name: "twitter:image",
        content: "https://desawisataekanganculai.id/android-chrome-512x512.png",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://desawisataekanganculai.id/desa",
      },
    ],
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
});
var $$splitNotFoundComponentImporter = () => import("./desa._slug-zEOy5A_p.mjs");
var $$splitComponentImporter = () => import("./desa._slug-CedmlR3e.mjs");
var Route = createFileRoute("/desa/$slug")({
  loader: ({ params }) => {
    const village = getVillage(params.slug);
    if (!village) throw notFound();
    return { village };
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return {
        meta: [
          { title: "Profil Desa tidak ditemukan" },
          {
            name: "robots",
            content: "noindex",
          },
        ],
      };
    const v = loaderData.village;
    const title = `${v.nama} — ${v.kabupaten}, ${v.provinsi}`;
    const description = v.deskripsi.slice(0, 155);
    const url = `https://desawisataekanganculai.id/desa/${v.slug}`;
    const image = v.image.startsWith("http")
      ? v.image
      : `https://desawisataekanganculai.id${v.image}`;
    return {
      meta: [
        { title },
        {
          name: "description",
          content: description,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: url,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: description,
        },
        {
          property: "og:image",
          content: image,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: description,
        },
        {
          name: "twitter:image",
          content: image,
        },
      ],
      links: [
        {
          rel: "canonical",
          href: url,
        },
      ],
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
});
var IndexRoute = Route$5.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6,
});
var AdminRoute = Route$4.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$6,
});
var GaleriRoute = Route$3.update({
  id: "/galeri",
  path: "/galeri",
  getParentRoute: () => Route$6,
});
var RencanakanKunjunganRoute = Route$2.update({
  id: "/rencanakan-kunjungan",
  path: "/rencanakan-kunjungan",
  getParentRoute: () => Route$6,
});
var DesaIndexRoute = Route$1.update({
  id: "/desa/",
  path: "/desa/",
  getParentRoute: () => Route$6,
});
var rootRouteChildren = {
  IndexRoute,
  AdminRoute,
  GaleriRoute,
  RencanakanKunjunganRoute,
  DesaSlugRoute: Route.update({
    id: "/desa/$slug",
    path: "/desa/$slug",
    getParentRoute: () => Route$6,
  }),
  DesaIndexRoute,
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
  const queryClient = new QueryClient();
  return createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });
};
//#endregion
export {
  deleteUmkmServerFn as A,
  saveVillageInfoServerFn as B,
  checkDefaultPasswordServerFn as C,
  deleteKegiatanServerFn as D,
  deleteGaleriServerFn as E,
  saveDestinasiServerFn as F,
  cn as G,
  updateReservationStatusServerFn as H,
  saveGaleriServerFn as I,
  saveKegiatanServerFn as L,
  getAdminDashboardDataServerFn as M,
  getSiteDataServerFn as N,
  deleteReservationServerFn as O,
  migrateBase64ServerFn as P,
  saveReviewServerFn as R,
  checkAdminAuthServerFn as S,
  deleteDestinasiServerFn as T,
  uploadImageServerFn as U,
  submitPublicReviewServerFn as V,
  useSiteData as W,
  DialogHeader as _,
  getBreadcrumbJsonLd as a,
  adminLogoutServerFn as b,
  getVillageJsonLd as c,
  logo_bintan_default as d,
  TripPlannerModal as f,
  DialogFooter as g,
  DialogDescription as h,
  JsonLdScript as i,
  extractOgImageServerFn as j,
  deleteReviewServerFn as k,
  SourceLink as l,
  DialogContent as m,
  Route as n,
  getDestinationJsonLd as o,
  Dialog as p,
  Route$1 as r,
  getFaqJsonLd as s,
  router_exports as t,
  isSpecificArticleUrl as u,
  DialogTitle as v,
  cmsStore as w,
  changePasswordServerFn as x,
  adminLoginServerFn as y,
  saveUmkmServerFn as z,
};
