import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps, cva } from "class-variance-authority"
import { PanelLeft } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "../../lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SIDEBAR_COOKIE_NAME = "sidebar:state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = "16rem"
const SIDEBAR_WIDTH_MOBILE = "18rem"
const SIDEBAR_WIDTH_ICON = "3rem"
const SIDEBAR_KEYBOARD_SHORTCUT = "b"

const SidebarContext = React.createContext(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.")
  }

  return context
}

const SidebarProvider = React.forwardRef((props, ref) => {
  const { defaultOpen, open, onOpenChange } = props
  const [openProp, setOpenProp] = React.useState(defaultOpen || open)

  const toggleSidebar = () => {
    setOpenProp((prev) => !prev)
    if (onOpenChange) onOpenChange(!openProp)
  }

  return (
    <SidebarContext.Provider value={{ open: openProp, toggleSidebar }}>
      <div ref={ref} {...props} />
    </SidebarContext.Provider>
  )
})
SidebarProvider.displayName = "SidebarProvider"

const Sidebar = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} {...props}>
      {/* Sidebar content */}
    </div>
  )
})
Sidebar.displayName = "Sidebar"

const SidebarTrigger = React.forwardRef(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      ref={ref}
      className={className}
      onClick={(e) => {
        toggleSidebar()
        if (onClick) onClick(e)
      }}
      {...props}
    />
  )
})
SidebarTrigger.displayName = "SidebarTrigger"

const SidebarRail = React.forwardRef((props, ref) => {
  const { toggleSidebar } = useSidebar()

  return (
    <button ref={ref} onClick={toggleSidebar} {...props}>
      {/* Rail content */}
    </button>
  )
})
SidebarRail.displayName = "SidebarRail"

const SidebarInset = React.forwardRef((props, ref) => {
  return (
    <main ref={ref} {...props}>
      {/* Inset content */}
    </main>
  )
})
SidebarInset.displayName = "SidebarInset"

const SidebarInput = React.forwardRef((props, ref) => {
  return (
    <Input ref={ref} data-sidebar="input" {...props} />
  )
})
SidebarInput.displayName = "SidebarInput"

const SidebarHeader = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} data-sidebar="header" {...props}>
      {/* Header content */}
    </div>
  )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarFooter = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} data-sidebar="footer" {...props}>
      {/* Footer content */}
    </div>
  )
})
SidebarFooter.displayName = "SidebarFooter"

const SidebarSeparator = React.forwardRef((props, ref) => {
  return (
    <Separator ref={ref} data-sidebar="separator" {...props} />
  )
})
SidebarSeparator.displayName = "SidebarSeparator"

const SidebarContent = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} data-sidebar="content" {...props}>
      {/* Content */}
    </div>
  )
})
SidebarContent.displayName = "SidebarContent"

const SidebarGroup = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} data-sidebar="group" {...props}>
      {/* Group content */}
    </div>
  )
})
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupLabel = React.forwardRef(({ asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div"
  return (
    <Comp ref={ref} {...props}>
      {/* Group label content */}
    </Comp>
  )
})
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupAction = React.forwardRef(({ asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp ref={ref} {...props}>
      {/* Group action content */}
    </Comp>
  )
})
SidebarGroupAction.displayName = "SidebarGroupAction"

const SidebarGroupContent = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} data-sidebar="group-content" {...props}>
      {/* Group content */}
    </div>
  )
})
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef((props, ref) => {
  return (
    <ul ref={ref} data-sidebar="menu" {...props}>
      {/* Menu content */}
    </ul>
  )
})
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef((props, ref) => {
  return (
    <li ref={ref} data-sidebar="menu-item" {...props}>
      {/* Menu item content */}
    </li>
  )
})
SidebarMenuItem.displayName = "SidebarMenuItem"

const SidebarMenuButton = React.forwardRef(({ asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp ref={ref} {...props}>
      {/* Menu button content */}
    </Comp>
  )
})
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarMenuAction = React.forwardRef(({ asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp ref={ref} {...props}>
      {/* Menu action content */}
    </Comp>
  )
})
SidebarMenuAction.displayName = "SidebarMenuAction"

const SidebarMenuBadge = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} data-sidebar="menu-badge" {...props}>
      {/* Menu badge content */}
    </div>
  )
})
SidebarMenuBadge.displayName = "SidebarMenuBadge"

const SidebarMenuSkeleton = React.forwardRef((props, ref) => {
  const width = React.useMemo(() => `${Math.floor(Math.random() * 40) + 50}%`, [])
  return (
    <div ref={ref} style={{ "--skeleton-width": width }} {...props}>
      {/* Skeleton content */}
    </div>
  )
})
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton"

const SidebarMenuSub = React.forwardRef((props, ref) => {
  return (
    <ul ref={ref} data-sidebar="menu-sub" {...props}>
      {/* Sub menu content */}
    </ul>
  )
})
SidebarMenuSub.displayName = "SidebarMenuSub"

const SidebarMenuSubItem = React.forwardRef((props, ref) => {
  return (
    <li ref={ref} {...props} />
  )
})
SidebarMenuSubItem.displayName = "SidebarMenuSubItem"

const SidebarMenuSubButton = React.forwardRef(({ asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"
  return (
    <Comp ref={ref} {...props}>
      {/* Sub menu button content */}
    </Comp>
  )
})
SidebarMenuSubButton.displayName = "SidebarMenuSubButton"

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}
