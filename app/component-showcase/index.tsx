import { AccountAccess } from "@/app/component-showcase/cards/account-access"
import { CardOverview } from "@/app/component-showcase/cards/card-overview"
import { ClaimableBalance } from "@/app/component-showcase/cards/claimable-balance"
import { ContributionHistory } from "@/app/component-showcase/cards/contribution-history"
import { CoverArt } from "@/app/component-showcase/cards/cover-art"
import { DividendIncome } from "@/app/component-showcase/cards/dividend-income"
import { EmptyConnectBank } from "@/app/component-showcase/cards/empty-connect-bank"
import { EmptyDistributeTrack } from "@/app/component-showcase/cards/empty-distribute-track"
import { EmptyExploreCatalog } from "@/app/component-showcase/cards/empty-explore-catalog"
import { Faq } from "@/app/component-showcase/cards/faq"
import { FrontDoor } from "@/app/component-showcase/cards/front-door"
import { IndexInvesting } from "@/app/component-showcase/cards/index-investing"
import { KitchenIsland } from "@/app/component-showcase/cards/kitchen-island"
import { LoadingCard } from "@/app/component-showcase/cards/loading-card"
import { NewMilestone } from "@/app/component-showcase/cards/new-milestone"
import { NotificationSettings } from "@/app/component-showcase/cards/notification-settings"
import { Payments } from "@/app/component-showcase/cards/payments"
import { PayoutThreshold } from "@/app/component-showcase/cards/payout-threshold"
import { PowerUsage } from "@/app/component-showcase/cards/power-usage"
import { Preferences } from "@/app/component-showcase/cards/preferences"
import { QrConnect } from "@/app/component-showcase/cards/qr-connect"
import { ReceivingMethod } from "@/app/component-showcase/cards/receiving-method"
import { RecentTransactions } from "@/app/component-showcase/cards/recent-transactions"
import { ReleaseCatalog } from "@/app/component-showcase/cards/release-catalog"
import { RollerShades } from "@/app/component-showcase/cards/roller-shades"
import { SavingsProgress } from "@/app/component-showcase/cards/savings-progress"
import { SavingsTargets } from "@/app/component-showcase/cards/savings-targets"
import { SidebarNav } from "@/app/component-showcase/cards/sidebar-nav"
import { SocialLinks } from "@/app/component-showcase/cards/social-links"
import { StockPerformance } from "@/app/component-showcase/cards/stock-performance"
import { SyncingState } from "@/app/component-showcase/cards/syncing-state"
import { TransferFunds } from "@/app/component-showcase/cards/transfer-funds"
import { UpcomingPayments } from "@/app/component-showcase/cards/upcoming-payments"

export default function ComponentShowcase() {
    return (
        <div className="3xl:[--gap:--spacing(12)] style-lyra:md:[--gap:--spacing(6)] style-mira:md:[--gap:--spacing(6)] overflow-x-auto overflow-y-hidden bg-muted contain-[paint] [--gap:--spacing(4)] md:[--gap:--spacing(10)] dark:bg-background">
            <div className="flex w-full min-w-max justify-center">
                <div
                    className="style-lyra:md:w-[2600px] style-mira:md:w-[2600px] grid w-600 grid-cols-7 items-start gap-(--gap) bg-muted p-(--gap) md:w-750 dark:bg-background *:[div]:gap-(--gap)"
                    data-slot="capture-target"
                >
                    <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
                        <ContributionHistory />
                        <EmptyDistributeTrack />
                        <QrConnect />
                        <DividendIncome />
                        <IndexInvesting />
                        <SyncingState />
                    </div>
                    <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
                        <PayoutThreshold />
                        <ClaimableBalance />
                        <Preferences />
                        <SavingsProgress />
                        <KitchenIsland />
                    </div>
                    <div className="col-span-2 flex flex-col p-1 [contain-intrinsic-size:760px_1200px] [content-visibility:auto]">
                        <SavingsTargets />
                        <RecentTransactions />
                        <div className="grid grid-cols-2 items-start gap-(--gap)">
                            <div className="flex flex-col gap-(--gap)">
                                <SidebarNav />
                                <Faq />
                            </div>
                            <div className="flex flex-col gap-(--gap)">
                                <Payments />
                                <FrontDoor />
                            </div>
                        </div>
                        <ReleaseCatalog />
                    </div>
                    <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
                        <AccountAccess />
                        <CardOverview />
                        <TransferFunds />
                        <CoverArt />
                        <LoadingCard />
                    </div>
                    <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
                        <ReceivingMethod />
                        <PowerUsage />
                        <EmptyConnectBank />
                        <UpcomingPayments />
                        <RollerShades />
                    </div>
                    <div className="flex flex-col p-1 [contain-intrinsic-size:380px_1200px] [content-visibility:auto]">
                        <StockPerformance />
                        <EmptyExploreCatalog />
                        <NewMilestone />
                        <SocialLinks />
                        <NotificationSettings />
                    </div>
                </div>
            </div>
        </div>
    )
}
