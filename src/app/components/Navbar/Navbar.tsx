
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { auth0 } from "@/lib/auth0"
import { LogoutButton } from "./LogoutButton";

export const Navbar = async () => {


  const session = await auth0.getSession()
  // console.log('session', session);

  

  return (
    <nav className="bg-transparent">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAAAqCAYAAADs6PSZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LjljY2M0ZGU5MywgMjAyMi8wMy8xNC0xNDowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjMgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUIxODBGODM0QTkxMTFFRTg0RDc4NzRGREE0NjIyOEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUIxODBGODQ0QTkxMTFFRTg0RDc4NzRGREE0NjIyOEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFQjE4MEY4MTRBOTExMUVFODRENzg3NEZEQTQ2MjI4QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFQjE4MEY4MjRBOTExMUVFODRENzg3NEZEQTQ2MjI4QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnA4TOMAAAtMSURBVHja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"
            className="h-5"
            width={100}
            height={100}
            alt="OTI Chile Logo"
          />
        </Link>
        <div
          className="flex items-center justify-end p-2 md:p-0 rtl:space-x-reverse"
        >
          {!session ? (
            <a href="/auth/login?returnTo=/dashboard">
              <Button
                className="bg-yellow-400 text-[#0B4582] font-semibold hover:bg-yellow-500"
              >
                Iniciar Sesion

              </Button>
            </a>
          ) : (
            // <a href="/auth/logout">
            //   <Button
            //     className="bg-yellow-400 text-[#0B4582] font-semibold hover:bg-yellow-500"
            //   >
            //     Cerrar Sesión

            //   </Button>
            // </a>
            <LogoutButton />
          )}
        </div>
      </div>
    </nav>
  );
};
