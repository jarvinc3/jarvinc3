import { Card } from "@/components/ui/card";
import { useTranslate } from "@/hooks/use-translate";
import type { SectionProps } from "@/modules/App";
import { Icon } from "@iconify/react/dist/iconify.js";

export const DescriptionSection = ({ ...props }: SectionProps) => {
  const { t } = useTranslate();

  return (
    <Card
      {...props}
    >
      <div className="w-full flex items-center justify-between mb-2 md:mb-5">
        <Icon icon="solar:star-fall-linear" className="size-11 md:size-16" />
        <h2 className="w-full text-center text-2xl md:text-4xl xl:text-6xl font-semibold text-primary-foreground">{t("about.self")}</h2>
        <Icon icon="solar:star-fall-linear" className="size-11 md:size-16 rotate-180" />
      </div>
      <div className="card-base relative w-full h-full flex flex-col gap-1 p-4">
        <h2 className="text-3xl font-semibold text-primary-foreground">{t("about.name")}</h2>
        <div className="relative w-full h-full flex flex-col justify-evenly gap-1 px-4 rounded-2xl overflow-hidden font-sans isolate group"><div className="absolute w-1 left-2 top-2.5 bottom-2.5 rounded-sm bg-success transition-transform duration-300 ease-in-out z-[4] group-hover:translate-x-[0.15rem]" />
          <p className="px-2 transition-transform duration-300 group-hover:translate-x-1">{t("about.description")}</p>
        </div>
      </div>
    </Card>
  )
}
