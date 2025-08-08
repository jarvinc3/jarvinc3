import { Icon } from "@iconify/react/dist/iconify.js";

interface ButtonProps {
   variant?: 'icon';
}

export const Button = ({ variant }: ButtonProps) => {
   return (
      variant === 'icon' &&
      (<button className="absolute bottom-4 right-4">
         <Icon icon="material-symbols-light:bottom-right-click" className="size-7 cursor-pointer text-muted group-hover:scale-110 group-hover:text-foreground transition-all duration-250" />
      </button>)
   )
}
