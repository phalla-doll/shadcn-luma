"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { HugeiconsIcon } from "@hugeicons/react"
import {
    Sun01Icon,
    Moon01Icon,
    GithubIcon,
    ArrowRight01Icon,
    Search01Icon,
    Notification01Icon,
    Megaphone01Icon,
    Settings01Icon,
    Share01Icon,
    FavouriteIcon,
    Home01Icon,
    UserCircle02Icon,
    Analytics01Icon,
    Calendar01Icon,
    PinLocation01Icon,
    AlignLeftIcon,
    AlignHorizontalCenterIcon,
    AlignRightIcon,
} from "@hugeicons/core-free-icons"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Avatar,
    AvatarFallback,
    AvatarGroup,
    AvatarGroupCount,
    AvatarBadge,
} from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"
import { Spinner } from "@/components/ui/spinner"

function Specimen({
    label,
    description,
    className,
    children,
}: {
    label: string
    description: string
    className?: string
    children: React.ReactNode
}) {
    return (
        <div
            data-slot="specimen"
            className={cn(
                "flex animate-in flex-col gap-4 rounded-4xl bg-card p-5 ring-1 ring-foreground/5 duration-700 fade-in slide-in-from-bottom-6 dark:ring-foreground/10",
                className
            )}
        >
            <div className="flex flex-col gap-1">
                <span className="font-mono text-xs font-medium tracking-tight text-primary">
                    {label}
                </span>
                <span className="text-xs text-muted-foreground">
                    {description}
                </span>
            </div>
            <div className="flex-1">{children}</div>
        </div>
    )
}

function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            aria-label="Toggle theme"
        >
            {mounted && (
                <HugeiconsIcon
                    icon={resolvedTheme === "dark" ? Sun01Icon : Moon01Icon}
                    strokeWidth={2}
                />
            )}
        </Button>
    )
}

export default function Page() {
    const [sliderValue, setSliderValue] = React.useState([65])
    const [progressValue] = React.useState(72)

    return (
        <div className="relative min-h-screen overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
                <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-primary/3 blur-[100px]" />
            </div>

            <div className="relative mx-auto flex max-w-7xl flex-col gap-16 px-6 py-12 lg:py-20">
                <header className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <HugeiconsIcon
                            icon={Analytics01Icon}
                            strokeWidth={2}
                            className="size-5 text-primary"
                        />
                        <span className="font-mono text-sm font-semibold tracking-tight">
                            shadcn/ui
                        </span>
                    </div>
                    <nav className="flex items-center gap-1">
                        <Button variant="ghost" size="sm">
                            Docs
                        </Button>
                        <Button variant="ghost" size="sm">
                            Components
                        </Button>
                        <Button variant="ghost" size="icon-sm" asChild>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <HugeiconsIcon
                                    icon={GithubIcon}
                                    strokeWidth={2}
                                />
                            </a>
                        </Button>
                        <ThemeToggle />
                    </nav>
                </header>

                <section className="flex flex-col items-center gap-8 text-center">
                    <Badge
                        variant="secondary"
                        className="animate-in duration-500 fade-in"
                    >
                        55+ Production-Grade Components
                    </Badge>
                    <h1 className="max-w-3xl animate-in text-3xl leading-[1.1] font-medium tracking-tight duration-700 fade-in slide-in-from-bottom-4 md:text-5xl">
                        Build interfaces{" "}
                        <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                            people actually
                        </span>{" "}
                        want to use
                    </h1>
                    <p className="max-w-xl animate-in text-lg text-muted-foreground duration-700 [animation-delay:100ms] fade-in slide-in-from-bottom-4">
                        Learn proper composition patterns for shadcn/ui
                        components. Every specimen below is interactive —
                        explore the building blocks.
                    </p>
                    <div className="flex animate-in items-center gap-3 duration-700 [animation-delay:200ms] fade-in slide-in-from-bottom-4">
                        <Button size="lg">
                            Browse Components
                            <HugeiconsIcon
                                icon={ArrowRight01Icon}
                                strokeWidth={2}
                                data-icon="inline-end"
                            />
                        </Button>
                        <Button variant="outline" size="lg">
                            <HugeiconsIcon
                                icon={GithubIcon}
                                strokeWidth={2}
                                data-icon="inline-start"
                            />
                            View Source
                        </Button>
                    </div>
                </section>

                <section
                    className="grid auto-rows-auto grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
                    data-slot="specimens"
                >
                    <Specimen
                        label="<Button />"
                        description="6 variants with size and icon composition"
                        className="[animation-delay:100ms] lg:col-span-2"
                    >
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-wrap items-center gap-2">
                                <Button>Primary</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="outline">Outline</Button>
                                <Button variant="ghost">Ghost</Button>
                                <Button variant="destructive">
                                    Destructive
                                </Button>
                                <Button variant="link">Link</Button>
                            </div>
                            <Separator />
                            <div className="flex flex-wrap items-center gap-2">
                                <Button size="xs">Extra Small</Button>
                                <Button size="sm">Small</Button>
                                <Button>Default</Button>
                                <Button size="lg">Large</Button>
                                <Button size="icon">
                                    <HugeiconsIcon
                                        icon={Search01Icon}
                                        strokeWidth={2}
                                    />
                                </Button>
                                <Button disabled>
                                    <Spinner data-icon="inline-start" />
                                    Loading
                                </Button>
                            </div>
                        </div>
                    </Specimen>

                    <Specimen
                        label="<Badge />"
                        description="Semantic variants for tags and status"
                        className="[animation-delay:150ms]"
                    >
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-wrap gap-2">
                                <Badge>Default</Badge>
                                <Badge variant="secondary">Secondary</Badge>
                                <Badge variant="outline">Outline</Badge>
                                <Badge variant="destructive">Destructive</Badge>
                                <Badge variant="ghost">Ghost</Badge>
                            </div>
                            <Separator />
                            <div className="flex flex-wrap gap-2">
                                <Badge>
                                    <HugeiconsIcon
                                        icon={Megaphone01Icon}
                                        strokeWidth={2}
                                    />
                                    New Release
                                </Badge>
                                <Badge variant="secondary">
                                    <HugeiconsIcon
                                        icon={Notification01Icon}
                                        strokeWidth={2}
                                    />
                                    3 Updates
                                </Badge>
                                <Badge variant="outline">
                                    <HugeiconsIcon
                                        icon={PinLocation01Icon}
                                        strokeWidth={2}
                                    />
                                    v2.1
                                </Badge>
                            </div>
                        </div>
                    </Specimen>

                    <Specimen
                        label="<Switch /> <Checkbox />"
                        description="Form toggle controls with proper composition"
                        className="[animation-delay:200ms]"
                    >
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <Switch defaultChecked />
                                <span className="text-sm">
                                    Enable notifications
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Switch size="sm" />
                                <span className="text-sm text-muted-foreground">
                                    Small variant
                                </span>
                            </div>
                            <Separator />
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <Checkbox defaultChecked id="terms" />
                                    <label
                                        htmlFor="terms"
                                        className="text-sm leading-none"
                                    >
                                        Accept terms
                                    </label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Checkbox id="newsletter" />
                                    <label
                                        htmlFor="newsletter"
                                        className="text-sm leading-none"
                                    >
                                        Subscribe to newsletter
                                    </label>
                                </div>
                            </div>
                        </div>
                    </Specimen>

                    <Specimen
                        label="<Tabs />"
                        description="TabsList > TabsTrigger > TabsContent composition"
                        className="[animation-delay:250ms] lg:col-span-2"
                    >
                        <Tabs defaultValue="preview">
                            <TabsList>
                                <TabsTrigger value="preview">
                                    Preview
                                </TabsTrigger>
                                <TabsTrigger value="code">Code</TabsTrigger>
                                <TabsTrigger value="docs">Docs</TabsTrigger>
                            </TabsList>
                            <TabsContent value="preview">
                                <div className="flex flex-col gap-3 rounded-2xl border border-border p-4">
                                    <div className="flex items-center gap-3">
                                        <Avatar>
                                            <AvatarFallback>JD</AvatarFallback>
                                        </Avatar>
                                        <div className="flex flex-col">
                                            <span className="text-sm font-medium">
                                                Jane Doe
                                            </span>
                                            <span className="text-xs text-muted-foreground">
                                                Frontend Engineer
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-sm text-muted-foreground">
                                        These components compose beautifully
                                        together. Each piece does one thing
                                        well.
                                    </p>
                                    <div className="flex gap-2">
                                        <Button size="sm">
                                            <HugeiconsIcon
                                                icon={FavouriteIcon}
                                                strokeWidth={2}
                                                data-icon="inline-start"
                                            />
                                            Like
                                        </Button>
                                        <Button size="sm" variant="outline">
                                            <HugeiconsIcon
                                                icon={Share01Icon}
                                                strokeWidth={2}
                                                data-icon="inline-start"
                                            />
                                            Share
                                        </Button>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="code">
                                <div className="rounded-2xl border border-border bg-muted/50 p-4 font-mono text-xs leading-relaxed">
                                    <span className="text-muted-foreground">
                                        {"// "}
                                    </span>
                                    <span className="text-primary">
                                        Always nest
                                    </span>
                                    <span className="text-muted-foreground">
                                        {" "}
                                        TabsTrigger inside TabsList
                                    </span>
                                    <br />
                                    <span className="text-foreground">
                                        {"<"}
                                    </span>
                                    <span className="text-primary">
                                        TabsList
                                    </span>
                                    <span className="text-foreground">
                                        {">"}
                                    </span>
                                    <br />
                                    {"  "}
                                    <span className="text-foreground">
                                        {"<"}
                                    </span>
                                    <span className="text-primary">
                                        TabsTrigger
                                    </span>
                                    <span className="text-muted-foreground">
                                        {" value="}
                                    </span>
                                    <span className="text-green-600 dark:text-green-400">
                                        {'"preview"'}
                                    </span>
                                    <span className="text-foreground">
                                        {">Preview</"}
                                    </span>
                                    <span className="text-primary">
                                        TabsTrigger
                                    </span>
                                    <span className="text-foreground">
                                        {">"}
                                    </span>
                                </div>
                            </TabsContent>
                            <TabsContent value="docs">
                                <p className="text-sm text-muted-foreground">
                                    Tabs use Radix UI under the hood. The{" "}
                                    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                                        TabsList
                                    </code>{" "}
                                    must wrap all{" "}
                                    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                                        TabsTrigger
                                    </code>{" "}
                                    components. Each trigger{"'"}s{" "}
                                    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                                        value
                                    </code>{" "}
                                    maps to a matching{" "}
                                    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                                        TabsContent
                                    </code>
                                    .
                                </p>
                            </TabsContent>
                        </Tabs>
                    </Specimen>

                    <Specimen
                        label="<Select />"
                        description="Trigger + Content + Group + Item nesting"
                        className="[animation-delay:300ms]"
                    >
                        <div className="flex flex-col gap-4">
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a font" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="geist">
                                            Geist
                                        </SelectItem>
                                        <SelectItem value="inter">
                                            Inter
                                        </SelectItem>
                                        <SelectItem value="roboto">
                                            Roboto Mono
                                        </SelectItem>
                                        <SelectItem value="system">
                                            System UI
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Select defaultValue="purple">
                                <SelectTrigger className="w-full" size="sm">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="purple">
                                            Purple (Luma)
                                        </SelectItem>
                                        <SelectItem value="blue">
                                            Blue
                                        </SelectItem>
                                        <SelectItem value="green">
                                            Green
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </Specimen>

                    <Specimen
                        label="<ToggleGroup />"
                        description="Single/multi select with outline variant"
                        className="[animation-delay:350ms]"
                    >
                        <div className="flex flex-col gap-4">
                            <ToggleGroup
                                type="single"
                                variant="outline"
                                defaultValue="center"
                            >
                                <ToggleGroupItem value="left">
                                    <HugeiconsIcon
                                        icon={AlignLeftIcon}
                                        strokeWidth={2}
                                    />
                                </ToggleGroupItem>
                                <ToggleGroupItem value="center">
                                    <HugeiconsIcon
                                        icon={AlignHorizontalCenterIcon}
                                        strokeWidth={2}
                                    />
                                </ToggleGroupItem>
                                <ToggleGroupItem value="right">
                                    <HugeiconsIcon
                                        icon={AlignRightIcon}
                                        strokeWidth={2}
                                    />
                                </ToggleGroupItem>
                            </ToggleGroup>
                            <ToggleGroup
                                type="multiple"
                                variant="outline"
                                defaultValue={["bold"]}
                            >
                                <ToggleGroupItem value="bold">
                                    Bold
                                </ToggleGroupItem>
                                <ToggleGroupItem value="italic">
                                    Italic
                                </ToggleGroupItem>
                                <ToggleGroupItem value="underline">
                                    Underline
                                </ToggleGroupItem>
                            </ToggleGroup>
                        </div>
                    </Specimen>

                    <Specimen
                        label="<Card />"
                        description="Full composition: Header, Title, Description, Content, Footer"
                        className="[animation-delay:400ms] lg:col-span-2"
                    >
                        <Card className="shadow-none ring-1 ring-foreground/10 dark:ring-foreground/10">
                            <CardHeader>
                                <CardTitle>Project Alpha</CardTitle>
                                <CardDescription>
                                    A next-generation design system built with
                                    Radix and Tailwind CSS.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-2">
                                        <HugeiconsIcon
                                            icon={Calendar01Icon}
                                            strokeWidth={2}
                                            className="size-4 text-muted-foreground"
                                        />
                                        <span className="text-sm text-muted-foreground">
                                            Updated 2 hours ago
                                        </span>
                                    </div>
                                    <div className="flex gap-2">
                                        <Badge variant="outline">React</Badge>
                                        <Badge variant="outline">
                                            TypeScript
                                        </Badge>
                                        <Badge variant="secondary">v3.2</Badge>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="border-t">
                                <div className="flex w-full items-center justify-between">
                                    <AvatarGroup>
                                        <Avatar>
                                            <AvatarFallback>A</AvatarFallback>
                                        </Avatar>
                                        <Avatar>
                                            <AvatarFallback>B</AvatarFallback>
                                        </Avatar>
                                        <Avatar>
                                            <AvatarFallback>C</AvatarFallback>
                                        </Avatar>
                                        <AvatarGroupCount>+5</AvatarGroupCount>
                                    </AvatarGroup>
                                    <Button size="sm" variant="outline">
                                        <HugeiconsIcon
                                            icon={Settings01Icon}
                                            strokeWidth={2}
                                            data-icon="inline-start"
                                        />
                                        Settings
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </Specimen>

                    <Specimen
                        label="<Avatar />"
                        description="Avatar, Fallback, Badge, Group, GroupCount"
                        className="[animation-delay:450ms]"
                    >
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center gap-3">
                                <Avatar size="lg">
                                    <AvatarFallback>PH</AvatarFallback>
                                    <AvatarBadge>
                                        <HugeiconsIcon
                                            icon={Notification01Icon}
                                            strokeWidth={2}
                                        />
                                    </AvatarBadge>
                                </Avatar>
                                <Avatar>
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <Avatar size="sm">
                                    <AvatarFallback>K</AvatarFallback>
                                </Avatar>
                            </div>
                            <Separator />
                            <div className="flex flex-col gap-2">
                                <span className="text-xs font-medium text-muted-foreground">
                                    Team Members
                                </span>
                                <AvatarGroup>
                                    <Avatar size="lg">
                                        <AvatarFallback>AL</AvatarFallback>
                                    </Avatar>
                                    <Avatar size="lg">
                                        <AvatarFallback>MK</AvatarFallback>
                                    </Avatar>
                                    <Avatar size="lg">
                                        <AvatarFallback>RS</AvatarFallback>
                                    </Avatar>
                                    <AvatarGroupCount>+12</AvatarGroupCount>
                                </AvatarGroup>
                            </div>
                        </div>
                    </Specimen>

                    <Specimen
                        label="<Progress /> <Slider />"
                        description="Range and value controls"
                        className="[animation-delay:500ms]"
                    >
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">
                                        Storage Used
                                    </span>
                                    <span className="font-mono text-xs text-muted-foreground">
                                        {progressValue}%
                                    </span>
                                </div>
                                <Progress value={progressValue} />
                            </div>
                            <Separator />
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">
                                        Volume
                                    </span>
                                    <span className="font-mono text-xs text-muted-foreground">
                                        {sliderValue[0]}%
                                    </span>
                                </div>
                                <Slider
                                    value={sliderValue}
                                    onValueChange={setSliderValue}
                                    max={100}
                                    step={1}
                                />
                            </div>
                        </div>
                    </Specimen>

                    <Specimen
                        label="<Tooltip />"
                        description="Hover-reveal with TooltipProvider wrapper"
                        className="[animation-delay:550ms]"
                    >
                        <TooltipProvider>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-2">
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                            >
                                                <HugeiconsIcon
                                                    icon={Home01Icon}
                                                    strokeWidth={2}
                                                />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>Home</TooltipContent>
                                    </Tooltip>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                            >
                                                <HugeiconsIcon
                                                    icon={Search01Icon}
                                                    strokeWidth={2}
                                                />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>Search</TooltipContent>
                                    </Tooltip>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                            >
                                                <HugeiconsIcon
                                                    icon={Notification01Icon}
                                                    strokeWidth={2}
                                                />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            Notifications
                                        </TooltipContent>
                                    </Tooltip>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                            >
                                                <HugeiconsIcon
                                                    icon={UserCircle02Icon}
                                                    strokeWidth={2}
                                                />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>Profile</TooltipContent>
                                    </Tooltip>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                            >
                                                <HugeiconsIcon
                                                    icon={Settings01Icon}
                                                    strokeWidth={2}
                                                />
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            Settings
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Wrap with{" "}
                                    <code className="rounded bg-muted px-1.5 py-0.5 font-mono">
                                        TooltipProvider
                                    </code>
                                    , then nest{" "}
                                    <code className="rounded bg-muted px-1.5 py-0.5 font-mono">
                                        Tooltip {"{"}{" "}
                                    </code>
                                    <code className="rounded bg-muted px-1.5 py-0.5 font-mono">
                                        Trigger {"+"} Content {"}"}
                                    </code>
                                </p>
                            </div>
                        </TooltipProvider>
                    </Specimen>
                </section>

                <footer className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <span>Built with</span>
                    <Badge variant="secondary" className="font-mono text-xs">
                        shadcn/ui
                    </Badge>
                    <span>+</span>
                    <Badge variant="secondary" className="font-mono text-xs">
                        Radix
                    </Badge>
                    <span>+</span>
                    <Badge variant="secondary" className="font-mono text-xs">
                        Tailwind v4
                    </Badge>
                </footer>
            </div>
        </div>
    )
}
