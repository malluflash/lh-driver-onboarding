import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "../../lib/utils"

const Separator = React.forwardRef((props, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={props.decorative || true}
    orientation={props.orientation || "horizontal"}
    className={cn(
      "shrink-0 bg-border",
      props.orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      props.className
    )}
    {...props}
  />
))
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
