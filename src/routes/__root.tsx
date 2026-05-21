```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient-neon">404</h1>

        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Signal lost
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          This sector of the grid does not exist.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Return to base
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">
          System malfunction
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          {error.message}
        </p>

        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          Retry
        </button>
      </div>
    </div>
  );
}

export const Route =
  createRootRouteWithContext<{ queryClient: QueryClient }>()({
    head: () => ({
      meta: [
        { charSet: "utf-8" },

        {
          name: "google-site-verification",
          content: "XntwqsV3HGNbck1ApmOAe35xwZa2xUPxzCggjIbQEUY",
        },

        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },

        {
          title:
            "TR Visuals — Cinematic 3D Product Visualization Portfolio",
        },

        {
          name: "description",
          content:
            "Luxury cinematic 3D product visualization, Blender renders, cosmetic commercials and premium product animation portfolio by Talal Rafique.",
        },

        {
          name: "keywords",
          content:
            "TR Visuals, Talal Rafique, Blender artist, 3D artist, product rendering, cinematic renders, cosmetic visualization, 3D portfolio",
        },

        {
          property: "og:title",
          content:
            "TR Visuals — Cinematic 3D Product Visualization Portfolio",
        },

        {
          property: "og:description",
          content:
            "Luxury cinematic Blender renders and premium commercial 3D presentation portfolio by Talal Rafique.",
        },

        {
          property: "og:type",
          content: "website",
        },

        {
          property: "og:url",
          content: "https://trvisuals.vercel.app/",
        },

        {
          property: "og:site_name",
          content: "TR Visuals",
        },

        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ],

      links: [
        { rel: "stylesheet", href: appCss },

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
          href:
            "https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@300;400;500;600;700;800;900&family=Fredoka:wght@600;700&display=swap",
        },
      ],
    }),

    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  });

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>

      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
```
