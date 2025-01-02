import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const Breadcrumbs = ({ home, previousPages = [], current, category }) => {
  return (
    <div className="w-full flex flex-wrap justify-center content-center bg-slate-200 py-10 capitalize">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-black focus:outline-offset-4">
              {home}
            </BreadcrumbLink>
          </BreadcrumbItem>
          {previousPages.map((page) => (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={page.link} className="text-black focus:outline-offset-4">
                  {page.name}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          ))}
          {category ? (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href={`/` + current} className="text-black focus:outline-offset-4">
                  {current}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-black font-semibold focus:outline-offset-4">
                    {category}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </>
            </>
          ) : (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-black font-semibold focus:outline-offset-4">
                  {current}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};
