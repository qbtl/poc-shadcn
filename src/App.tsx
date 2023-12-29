import './App.css'

import { RocketIcon } from "@radix-ui/react-icons"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { fr } from 'date-fns/locale';

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

import { Switch } from "@/components/ui/switch"

import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"
import { Bar, BarChart, ResponsiveContainer } from "recharts"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
const data = [
    {
        goal: 400,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 278,
    },
    {
        goal: 189,
    },
    {
        goal: 239,
    },
    {
        goal: 300,
    },
    {
        goal: 200,
    },
    {
        goal: 278,
    },
    {
        goal: 189,
    },
    {
        goal: 349,
    },
]

import {toast, Toaster} from "sonner"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function App() {
    const [date, setDate] = React.useState<Date>()
    const [goal, setGoal] = React.useState(350)

    function onClick(adjustment: number) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    }

  return (
      <>
          <Alert>
              <RocketIcon className="h-4 w-4"/>
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                  You can add components to your app using the cli.
              </AlertDescription>
          </Alert>

          <Carousel className="w-full">
              <CarouselContent>
                  {Array.from({length: 5}).map((_, index) => (
                      <CarouselItem key={index}>
                          <div className="p-1">
                              <Card>
                                  <CardContent className="flex aspect-square items-center justify-center p-6">
                                      <span className="text-4xl font-semibold">{index + 1}</span>
                                  </CardContent>
                              </Card>
                          </div>
                      </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious/>
              <CarouselNext/>
          </Carousel>

          <Popover>
              <PopoverTrigger asChild>
                  <Button
                      variant={"outline"}
                      className={cn(
                          "w-[240px] justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                      )}
                  >
                      <CalendarIcon className="mr-2 h-4 w-4"/>
                      {date ? format(date, "PPP", {locale: fr}) : <span>Choisir une date</span>}
                  </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      locale={fr}
                      weekStartsOn={1}
                  />
              </PopoverContent>
          </Popover>

          <Sheet>
              <SheetTrigger asChild>
                  <Button>Open</Button>
              </SheetTrigger>
              <SheetContent>
                  <SheetHeader>
                      <SheetTitle>Edit profile</SheetTitle>
                      <SheetDescription>
                          Make changes to your profile here. Click save when you're done.
                      </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                              Name
                          </Label>
                          <Input id="name" value="Pedro Duarte" className="col-span-3"/>
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="username" className="text-right">
                              Username
                          </Label>
                          <Input id="username" value="@peduarte" className="col-span-3"/>
                      </div>
                  </div>
                  <SheetFooter>
                      <SheetClose asChild>
                          <Button type="submit">Save changes</Button>
                      </SheetClose>
                  </SheetFooter>
              </SheetContent>
          </Sheet>

          <ScrollArea className="h-72 w-48 rounded-md border">
              <div className="p-4">
                  <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                  {tags.map((tag) => (
                      <div key={tag}>
                          <div key={tag} className="text-sm">
                              {tag}
                          </div>
                          <Separator className="my-2"/>
                      </div>
                  ))}
              </div>
          </ScrollArea>

          <div className="flex items-center space-x-2">
              <Switch id="airplane-mode"/>
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>

          <Menubar>
              <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                      <MenubarItem>
                          New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>
                          New Window <MenubarShortcut>⌘N</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem disabled>New Incognito Window</MenubarItem>
                      <MenubarSeparator />
                      <MenubarSub>
                          <MenubarSubTrigger>Share</MenubarSubTrigger>
                          <MenubarSubContent>
                              <MenubarItem>Email link</MenubarItem>
                              <MenubarItem>Messages</MenubarItem>
                              <MenubarItem>Notes</MenubarItem>
                          </MenubarSubContent>
                      </MenubarSub>
                      <MenubarSeparator />
                      <MenubarItem>
                          Print... <MenubarShortcut>⌘P</MenubarShortcut>
                      </MenubarItem>
                  </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                  <MenubarTrigger>Edit</MenubarTrigger>
                  <MenubarContent>
                      <MenubarItem>
                          Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem>
                          Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                      </MenubarItem>
                      <MenubarSeparator />
                      <MenubarSub>
                          <MenubarSubTrigger>Find</MenubarSubTrigger>
                          <MenubarSubContent>
                              <MenubarItem>Search the web</MenubarItem>
                              <MenubarSeparator />
                              <MenubarItem>Find...</MenubarItem>
                              <MenubarItem>Find Next</MenubarItem>
                              <MenubarItem>Find Previous</MenubarItem>
                          </MenubarSubContent>
                      </MenubarSub>
                      <MenubarSeparator />
                      <MenubarItem>Cut</MenubarItem>
                      <MenubarItem>Copy</MenubarItem>
                      <MenubarItem>Paste</MenubarItem>
                  </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                  <MenubarTrigger>View</MenubarTrigger>
                  <MenubarContent>
                      <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
                      <MenubarCheckboxItem checked>
                          Always Show Full URLs
                      </MenubarCheckboxItem>
                      <MenubarSeparator />
                      <MenubarItem inset>
                          Reload <MenubarShortcut>⌘R</MenubarShortcut>
                      </MenubarItem>
                      <MenubarItem disabled inset>
                          Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
                      </MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem inset>Hide Sidebar</MenubarItem>
                  </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                  <MenubarTrigger>Profiles</MenubarTrigger>
                  <MenubarContent>
                      <MenubarRadioGroup value="benoit">
                          <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                          <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                          <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                      </MenubarRadioGroup>
                      <MenubarSeparator />
                      <MenubarItem inset>Edit...</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem inset>Add Profile...</MenubarItem>
                  </MenubarContent>
              </MenubarMenu>
          </Menubar>

          <NavigationMenu>
              <NavigationMenuList>
                  <NavigationMenuItem>
                      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                      <NavigationMenuContent>
                          <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                              <li className="row-span-3">
                                  <NavigationMenuLink asChild>
                                      <a
                                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                          href="/"
                                      >
                                          <RocketIcon className="h-6 w-6" />
                                          <div className="mb-2 mt-4 text-lg font-medium">
                                              shadcn/ui
                                          </div>
                                          <p className="text-sm leading-tight text-muted-foreground">
                                              Beautifully designed components built with Radix UI and
                                              Tailwind CSS.
                                          </p>
                                      </a>
                                  </NavigationMenuLink>
                              </li>
                              <ListItem href="/docs" title="Introduction">
                                  Re-usable components built using Radix UI and Tailwind CSS.
                              </ListItem>
                              <ListItem href="/docs/installation" title="Installation">
                                  How to install dependencies and structure your app.
                              </ListItem>
                              <ListItem href="/docs/primitives/typography" title="Typography">
                                  Styles for headings, paragraphs, lists...etc
                              </ListItem>
                          </ul>
                      </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                      <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                      <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                              {components.map((component) => (
                                  <ListItem
                                      key={component.title}
                                      title={component.title}
                                      href={component.href}
                                  >
                                      {component.description}
                                  </ListItem>
                              ))}
                          </ul>
                      </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                      <NavigationMenuLink href="/docs" className={navigationMenuTriggerStyle()}>
                          Documentation
                      </NavigationMenuLink>
                  </NavigationMenuItem>
              </NavigationMenuList>
          </NavigationMenu>

          <Select>
              <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                  <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
              </SelectContent>
          </Select>

          <HoverCard>
              <HoverCardTrigger asChild>
                  <Button variant="link">@nextjs</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                      <Avatar>
                          <AvatarImage src="https://github.com/vercel.png" />
                          <AvatarFallback>VC</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                          <h4 className="text-sm font-semibold">@nextjs</h4>
                          <p className="text-sm">
                              The React Framework – created and maintained by @vercel.
                          </p>
                          <div className="flex items-center pt-2">
                              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                              <span className="text-xs text-muted-foreground">
                                Joined December 2021
                              </span>
                          </div>
                      </div>
                  </div>
              </HoverCardContent>
          </HoverCard>

          <Drawer>
              <DrawerTrigger asChild>
                  <Button variant="outline">Open Drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                  <div className="mx-auto w-full max-w-sm">
                      <DrawerHeader>
                          <DrawerTitle>Move Goal</DrawerTitle>
                          <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                      </DrawerHeader>
                      <div className="p-4 pb-0">
                          <div className="flex items-center justify-center space-x-2">
                              <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8 shrink-0 rounded-full"
                                  onClick={() => onClick(-10)}
                                  disabled={goal <= 200}
                              >
                                  <MinusIcon className="h-4 w-4" />
                                  <span className="sr-only">Decrease</span>
                              </Button>
                              <div className="flex-1 text-center">
                                  <div className="text-7xl font-bold tracking-tighter">
                                      {goal}
                                  </div>
                                  <div className="text-[0.70rem] uppercase text-muted-foreground">
                                      Calories/day
                                  </div>
                              </div>
                              <Button
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8 shrink-0 rounded-full"
                                  onClick={() => onClick(10)}
                                  disabled={goal >= 400}
                              >
                                  <PlusIcon className="h-4 w-4" />
                                  <span className="sr-only">Increase</span>
                              </Button>
                          </div>
                          <div className="mt-3 h-[120px]">
                              <ResponsiveContainer width="100%" height="100%">
                                  <BarChart data={data}>
                                      <Bar
                                          dataKey="goal"
                                          style={
                                              {
                                                  fill: "hsl(var(--foreground))",
                                                  opacity: 0.9,
                                              } as React.CSSProperties
                                          }
                                      />
                                  </BarChart>
                              </ResponsiveContainer>
                          </div>
                      </div>
                      <DrawerFooter>
                          <Button>Submit</Button>
                          <DrawerClose asChild>
                              <Button variant="outline">Cancel</Button>
                          </DrawerClose>
                      </DrawerFooter>
                  </div>
              </DrawerContent>
          </Drawer>

          <Button
              variant="outline"
              onClick={() =>
                  toast("Event has been created", {
                      description: "Sunday, December 03, 2023 at 9:00 AM",
                      action: {
                          label: "Undo",
                          onClick: () => console.log("Undo"),
                      },
                  })
              }
          >
              Show Toast
          </Button>
          <Toaster visibleToasts={10} />

          <RadioGroup defaultValue="comfortable">
              <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1">Default</Label>
              </div>
              <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label htmlFor="r2">Comfortable</Label>
              </div>
              <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="r3" />
                  <Label htmlFor="r3">Compact</Label>
              </div>
          </RadioGroup>
      </>
  )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export default App
